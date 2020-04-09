<?php


/**
 * Content_field_types Controller
 *
 *
 * @copyright   Copyright (c) 2015
 * @license     MIT License
*
 */
class Extra_fields extends Admin_Controller {

    public $validation_rules = array(
        '__global__' => array(
        ),
        'edit' => array(
            ['field' => 'name', 'rules' => 'required|htmlspecialchars', 'label' => 'نام'],
            ['field' => 'slug', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'نامک'],
            ['field' => 'field_type', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'نوع'],
            ['field' => 'status', 'rules' => 'required|htmlspecialchars', 'label' => 'وضعیت'],
        )
    );

    public function __construct() {
        parent::__construct();
        $this->load->eloquent('Content_type');
        $this->load->eloquent('Field_type');
        $this->load->eloquent('Content_type_field');
    }

    public function list_fields($content_type_id) {
        $content_type = Content_type::find($content_type_id);
        $this->smart->assign([
            'title' => '',
            'Content_type' => $content_type,
            'Fields' => $content_type->fields
        ]);
        $this->smart->view('extra_fields/index');
    }

    public function edit($content_type_id = null, $content_field_id = null) {
        $this->show_404_on(!$content_type_id);

        $content_type = Content_type::find($content_type_id);

        $this->show_404_on(!$content_type);
        // Init
        $edit_mode = FALSE;

        $this->smart->assign([
            'edit_mode' => $edit_mode,
            'title' => '',
            'Content_type' => $content_type,
            'Field_types' => Field_type::get()->all()
        ]);

        // Edit Mode 
        if ($content_field_id) {
            $content_field = Content_type_field::find($content_field_id);
            $this->show_404_on(!$content_field);
            $edit_mode = TRUE;
            $this->smart->assign([
                'edit_mode' => $edit_mode,
                'Content_field' => $content_field
            ]);
        }
        // Process Form
        if ($this->formValidate()) {
            $data = [
                'name' => $this->input->post('name'),
                'slug' => $this->input->post('slug')
            ];
            // Insert or update data to the db
            // if inserted
            if (isset($content_field_id)) {
                $content_field->fill($data);
            } else {
                $content_field = new Content_type_field($data);
            }
            $content_field->fieldType()->associate(Field_type::find($this->input->post('field_type')));
            $content_field->contentType()->associate($content_type);
            if ($content_field->save()) {
                $this->load->library('field_handler');
                $item = $this->field_handler->getFieldObj($content_field->fieldType, $content_field);
                if ($item && $item->haveExtraOptions == true) {
                    $this->message->set_message('اطلاعات با موفقیت بروزرسانی شد', 'success', 'بروزرسانی', ADMIN_PATH . '/content/extra-fields/extra-options/' . $content_field->getKey())->redirect();
                }
                $this->message->set_message('اطلاعات با موفقیت بروزرسانی شد', 'success', 'بروزرسانی', ADMIN_PATH . '/content/extra-fields/list-fields/' . $content_type_id)->redirect();
            }// else if insertion failed
            else {
                $this->message->set_message('بروزرسانی انجام نشد. مجدد تلاش کنید', 'fail', 'خطا در  بروزسانی', ADMIN_PATH . '/content/extra-fields/list-fields/edit/' . $content_type_id . $content_field_id)->redirect();
            }
            redirect(ADMIN_PATH . '/content/extra-fields/list-fields/' . $content_type_id);
        }
        $this->smart->view('extra_fields/edit');
    }

    public function extra_options($field_id) {
        $this->smart->assign([
            'title' => '',
        ]);
        $this->load->library('field_handler');
        $field = Content_type_field::find($field_id);
        $fieldObj = $this->field_handler->getFieldObj($field->fieldType, $field);
        if ($_POST) {
            $preparedForDBOptions = $fieldObj->getPreparedExtraOptionsForDB();
            $field->extra_options = $preparedForDBOptions;
            $field->save();
            $this->message->set_message('اطلاعات با موفقیت بروزرسانی شد', 'success', 'بروزرسانی', ADMIN_PATH . '/content/extra-fields/list-fields/' . $field->contentType->getKey())->redirect();
        }
        $this->smart->assign('extra_options', $fieldObj->extraOptionsFormHTML());
        $this->smart->view('extra_fields/extra_options');
    }

    public function delete($content_type_id, $field_id) {
        if (($field = Content_type_field::find($field_id)) && $field->contentType->id == $content_type_id) {
            if ($field->delete())
                $this->message->set_message('فیلد مربوطه حذف گردید', 'success', 'حذف فیلد', ADMIN_PATH . '/content/extra-fields/list-fields/' . $content_type_id)->redirect();
        }
        else {
            show_404();
        }
    }

}
