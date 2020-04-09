<?php


use Cocur\Slugify\Slugify as Slugify;



/**
 * Content_entries Controller
 *
 *
 * @copyright   Copyright (c) 2015
 * @license     MIT License
*
 */
class Entries extends Admin_Controller {

    /**
     *
     * @var type 
     */
    public $validation_rules = array(
        '__global__' => array(
            ['field' => 'title', 'rules' => 'required|htmlspecialchars', 'label' => 'نام'],
            ['field' => 'slug', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'نامک'],
            ['field' => 'keyword', 'rules' => 'htmlspecialchars', 'label' => 'کلمات کلیدی'],
            ['field' => 'description', 'rules' => 'required|htmlspecialchars', 'label' => 'توضیحات'],
            ['field' => 'status', 'rules' => 'required|htmlspecialchars', 'label' => 'وضعیت'],
            ['field' => 'short_story', 'rules' => 'required', 'label' => 'خلاصه متن'],
            ['field' => 'full_story', 'rules' => 'required', 'label' => 'متن کامل'],
            ['field' => 'categories[]', 'rules' => 'numeric', 'label' => 'موضوعات']
        ),
        'add' => array(),
        'edit' => array()
    );

    /**
     * 
     */
    public function __construct() {
        parent::__construct();
// load models.
        $this->load->eloquent('Content_type');
        $this->load->eloquent('Entry');
        $this->load->eloquent('Field_type');
        $this->load->eloquent('Field');
        $this->load->eloquent('Content_type_field');
        $this->load->eloquent('Content_category');
    }

    /**
     * 
     */
    public function index() {
        $types = Content_type::all();
        $this->smart->assign(
                [
                    'title' => 'ایجاد محتوای جدید',
                    'types' => $types
                ]
        );
        $this->smart->view('entries/type_list');
    }

    /**
     * 
     * @param type $type
     * @param type $page
     */
    public function entry_list($type, $page = 1) {
        $content_type = Content_type::findBySlug(urldecode($type));
        if (!$content_type)
            show_404();
        $entries = $content_type->entries;
        $this->smart->assign(
                [
                    'title' => 'ایجاد محتوای جدید',
                    'entry_type' => $type,
                    'content_type' => $content_type,
                    'entries' => $entries
                ]
        );
        $this->smart->view('entries/entry_list');
    }

    /**
     * 
     * @param type $type
     * @param type $id
     */
    public function entry_edit($type, $method, $id = null) {
        $this->load->library('field_handler');
        $this->load->eloquent('Field_short');
        $this->load->eloquent('Field_long');
        $this->load->eloquent('Field_int');
        $content_type = Content_type::findBySlug(urldecode($type));
        $this->show_404_on(!$content_type);
        $categories = $content_type->categories;
        $this->smart->addJS('js/ckeditor/jquery.ckeditor.js');
        $this->smart->addJS('js/ckeditor/ckeditor.js');
        if ($method != 'add') {
            $entry = Entry::find($id);
            if ((!$entry || $entry->contentType->slug != urldecode($type))) {
                show_404();
            }
        }

        $Extra_fields = $this->__getExtraFieldObjs($content_type, isset($entry) ? $entry : null);

// Init
        $edit_mode = FALSE;
        $has_pdf = false;
        $has_img = false;
        $this->smart->assign([
            'edit_mode' => $edit_mode,
            'title' => 'نوع محتوا',
            'Content_type' => $content_type,
            'Content_categories' => $categories,
            'Extra_fields' => $Extra_fields,
        ]);

// Edit Mode 
        if ($id && $method == 'edit') {
            $edit_mode = TRUE;
            $this->smart->assign([
                'edit_mode' => $edit_mode,
                'Entry' => $entry,
            ]);
        }

// Process Form
        $slugify = new Slugify();
        if ($this->formValidate(TRUE, $method, $Extra_fields)) {
            $data = [
                'title' => $this->input->post('title'),
                'slug' => $slugify->slugify($this->input->post('slug')),
                'keyword' => $this->input->post('keyword'),
                'description' => $this->input->post('description'),
                'status' => $this->input->post('status'),
                'blank_link' => $this->input->post('blank_link'),
                'short_story' => $this->input->post('short_story'),
                'full_story' => $this->input->post('full_story')
            ];
            if(!empty($_FILES['image']['name']))
            	$data['image'] = $this->input->imageFile('image', 'content/entry');
            if (isset($id)) {
                $entry->fill($data);
            } else {
                $entry = new Entry($data);
            }
            $entry->user()->associate($this->user);
            $entry->contentType()->associate($content_type);
            if ($entry->save()) {

// sync categories
                $entry->categories()->sync($this->input->post('categories'));

// making extra fields
                foreach ($content_type->fields as $field) {
                    $field_obj = $Extra_fields->where('fieldSlug', $field->slug)->first();
                    $existed_fields = $entry->fields->where('content_type_field_type_id', $field->id);

                    if ((bool) $existed_fields->count()) {
                        $existed_field_data = $existed_fields->first()->valuable;
                        $existed_field_data->value = $field_obj->getPreparedValueForDB();
                        $existed_field_data->save();
                    } else {
// creating field wrapper and associating with entry
                        $field_wrapper = new Field();
                        $field_wrapper->entry()->associate($entry);
                        $field_wrapper->contentTypeField()->associate($field);

// creating data row depend on type of field
                        $field_data_model_name = 'Field_' . $field->fieldTypeTable;
                        $field_data_model = new $field_data_model_name();
                        $field_data_model->value = $field_obj->getPreparedValueForDB();
                        $field_data_model->save();

//conntecting data field with fieldwrapper
                        $field_wrapper->valuable()->associate($field_data_model);
                        $field_wrapper->save();

//assosiate back for cascade purpose
                        $field_data_model->field()->associate($field_wrapper);
                        $field_data_model->save();
                    }
                }
                if (!$edit_mode) {
                    $this->message->set_message('اطلاعات با موفقیت ذخیره شد', 'success', 'ثبت رکورد جدید', ADMIN_PATH . '/content/entries/' . $type . '/')->redirect();
                } else {
                    $this->message->set_message('اطلاعات با موفقیت بروزرسانی شد', 'success', 'بروزرسانی', ADMIN_PATH . '/content/entries/' . $type . '/')->redirect();
                }
            }// else if insertion failed
            else {
                if ($edit_mode) {
                    $this->message->set_message('ذخیره سازی انجام نشد. مجدد تلاش کنید', 'fail', 'خطا در ذخیره سازی', ADMIN_PATH . '/content/entries/' . $type . '/' . $method . '/' . $id)->redirect();
                } else {
                    $this->message->set_message('بروزرسانی انجام نشد. مجدد تلاش کنید', 'fail', 'خطا در  بروزسانی', ADMIN_PATH . '/content/entries/' . $type . '/' . $method . '/')->redirect();
                }
            }
            redirect(ADMIN_PATH . '/content/entries/' . $type);
        }	

        $this->smart->view('entries/edit');
    }

    /**
     * 
     * @param type $id
     */
    public function entry_delete($type, $id = null) {
        if ($entry = Entry::find($id)) {
            $entry->categories()->detach();
            $entry->delete();
            redirect(ADMIN_PATH . '/content/entries/' . $type);
        } else {
            show_404();
        }
    }

    /**
     * 
     * @param type $content_type
     * @param type $entry
     * @return \Illuminate\Support\Collection
     */
    protected function __getExtraFieldObjs($content_type, $entry = null) {
//Extra Fields
        $Extra_fields = new \Illuminate\Support\Collection();
        foreach ($content_type->fields as $extra_field) {
            $item = $this->field_handler->getFieldObj($extra_field->fieldType, $extra_field);
            if ($entry) {
                $item->setValue($entry->extra_field($extra_field->id));
            }
            if ($this->input->post($extra_field->slug) != '') {
                $item->setNewValue($this->input->post($extra_field->slug));
            } elseif (isset($_FILES[$extra_field->slug]) && $_FILES[$extra_field->slug]['name'] != '') {
                $item->setNewValue($_FILES[$extra_field->slug]);
            }
            $Extra_fields->put($extra_field->slug, $item);
        }
        return $Extra_fields;
    }

    /**
     * 
     * @param Collection $Extra_fields
     */
    protected function extraFieldsValidate($Extra_fields) {
        foreach ($Extra_fields as $field) {
            if (($valdidate = $field->validate()) !== true) {
                return false;
            }
        }
        return true;
    }

    /**
     * 
     * @param bool $attach_global_validation
     */
    public function formValidate($attach_global_validation = TRUE) {
        $params = func_get_args();
        $Extra_fields = $params[2];
        $method = $params[1];
        if (parent::formValidate($attach_global_validation, $method)) {
            return $this->extraFieldsValidate($Extra_fields);
        } else {
            return false;
        }
    }

    /**
     * 
     * @param type $method_name
     * @return bool
     */
    protected function __SlugExists($method_name) {
        $type = Content_type::where('slug', urldecode($method_name))->first();
        if (!$type) {

            return FALSE;
        }
        return TRUE;
    }

}
