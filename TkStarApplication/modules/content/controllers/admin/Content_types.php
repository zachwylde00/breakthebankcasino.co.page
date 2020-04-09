<?php


use Cocur\Slugify\Slugify as Slugify;

/**
 * Content_field_types Controller
 *
 *
 * @copyright   Copyright (c) 2015
 * @license     MIT License
*
 */
class Content_types extends Admin_Controller {

    public $validation_rules = array(
        'edit' => array(
            ['field' => 'name', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'عنوان'],
            ['field' => 'slug', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'نامک'],
            ['field' => 'status', 'rules' => 'required|htmlspecialchars|numeric', 'label' => 'وضعیت'],
            ['field' => 'list_tpl', 'rules' => 'htmlspecialchars', 'label' => 'قالب لیست انواع محتوا'],
            ['field' => 'short_tpl', 'rules' => 'htmlspecialchars', 'label' => 'قالب متن خلاصه'],
            ['field' => 'full_tpl', 'rules' => 'htmlspecialchars', 'label' => 'قالب متن اصلی'],
        )
    );

    public function __construct() {
        parent::__construct();
        $this->load->eloquent('Content_type');
    }

    public function index() {
        $data['title'] = '';

        $data["Content_types"] = Content_type::all();
        $this->smart->assign(
                [
                    'title' => 'نوع محتوا',
                    'Content_types' => $data["Content_types"]
                ]
        );
        $this->smart->view('content_types/index');
    }

    function edit($content_type_id = null) {
        // Init
        $edit_mode = FALSE;

        $Content_type = Content_type::find($content_type_id);
        if (!$Content_type && $content_type_id) {
            show_404();
        }
        $this->smart->assign([
            'edit_mode' => $edit_mode,
            'title' => 'نوع محتوا'
        ]);

        // Edit Mode 
        if ($content_type_id) {
            $edit_mode = TRUE;
            $this->smart->assign([
                'edit_mode' => $edit_mode,
                'Content_type' => $Content_type
            ]);
        }
//        dd($Content_type['full_tpl']);
        // Process Form
        $slugify = new Slugify();
        if ($this->formValidate(FALSE)) {
            $data = [
                'name' => $this->input->post('name'),
                'slug' => $slugify->slugify($this->input->post('slug')),
                'status' => $this->input->post('status'),
                'list_tpl' => $this->input->post('list_tpl'),
                'short_tpl' => $this->input->post('short_tpl'),
                'full_tpl' => $this->input->post('full_tpl'),
            ];

            // Insert or update data to the db
            // if inserted
            if (Content_type::updateOrCreate(['id' => $content_type_id], $data)) {
                if (!$edit_mode) {
                    $this->message->set_message('اطلاعات با موفقیت ذخیره شد', 'success', 'ثبت رکورد جدید', ADMIN_PATH . '/content/content-types')->redirect();
                } else
                    $this->message->set_message('اطلاعات با موفقیت بروزرسانی شد', 'success', 'بروزرسانی', ADMIN_PATH . '/content/content-types/')->redirect();
            }// else if insertion failed
            else {
                if ($edit_mode)
                    $this->message->set_message('بروزرسانی انجام نشد. مجدد تلاش کنید', 'fail', 'خطا در بروزرسانی', ADMIN_PATH . '/content/content-types/edit/' . $content_type_id)->redirect();

                else {
                    $this->message->set_message('ذخیره سازی انجام نشد. مجدد تلاش کنید', 'fail', 'خطا در  ذخیره سازی', ADMIN_PATH . '/content/content-types/edit')->redirect();
                }
            }
            redirect(ADMIN_PATH . '/content/content-types');
        }
        $this->smart->view('content_types/edit');
    }

    function delete($content_type_id = null) {
        if ($Content_type = Content_type::find($content_type_id)) {
            if ($Content_type->delete())
                $this->message->set_message('نوع محتوای مربوطه حذف گردید', 'success', 'حذف نوع محتوا', ADMIN_PATH . '/content/content-types')->redirect();
        }
        else {
            show_404();
        }
    }

}
