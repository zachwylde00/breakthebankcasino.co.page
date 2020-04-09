<?php

use Cocur\Slugify\Slugify as Slugify;
/**
 * Content_categories Controller
 *
 *
 * @copyright   Copyright (c) 2015
 * @license     MIT License
*
 */
class Categories extends Admin_Controller {

    public $validation_rules = array(
        'edit' => array(
            ['field' => 'name', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'عنوان'],
            ['field' => 'slug', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'نامک'],
            ['field' => 'description', 'rules' => 'htmlspecialchars', 'label' => 'شرح'],
            ['field' => 'list_tpl', 'rules' => 'htmlspecialchars', 'label' => 'قالب لیست دسته بندی ها '],
            ['field' => 'content_type', 'rules' => 'required|numeric', 'label' => 'نوع محتوا'],
            ['field' => 'parent_id', 'rules' => 'numeric', 'label' => 'دسته بندی والد'],
        )
    );

    public function __construct() {
        parent::__construct();
        $this->load->eloquent('Content_category');
        $this->load->eloquent('Content_type');
    }

    public function index() {
        $Content_categories = Content_category::all();
        $this->smart->assign(
                [
                    'title' => 'دسته بندی محتوا',
                    'Content_categories' => $Content_categories,
                ]
        );
        $this->smart->view('content_categories/index');
    }

    public function edit($content_categories_id = null) {
        // Init
        $edit_mode = FALSE;

        $this->load->eloquent('Content_type');
        $this->smart->assign([
            'edit_mode' => $edit_mode,
            'title' => 'دسته بندی محتوا',
            'Content_types' => Content_type::all(),
            'categories' => Content_category::all()
        ]);

        // Edit Mode 
        if ($content_categories_id) {
            $edit_mode = TRUE;
            $this->smart->assign([
                'edit_mode' => $edit_mode,
                'Content_category' => Content_category::find($content_categories_id)
            ]);
        }
        $slugify = new Slugify();
        // Process Form
        if ($this->formValidate(FALSE)) {
            
            $data = [
                'name' => $this->input->post('name'),
                'slug' => $slugify->slugify($this->input->post('slug')),
                'image' => $this->input->imageFile('image', 'content/category'),
                'description' => $this->input->post('description'),
                'list_tpl' => $this->input->post('list_tpl'),
                'content_type_id' => $this->input->post('content_type'),
                'parent_id' => $this->input->post('parent_id')
            ];
            // Insert or update data to the db
            // if inserted
            if (Content_category::updateOrCreate(['id' => $content_categories_id], $data)) {
                if (!$edit_mode) {
                    $this->message->set_message('اطلاعات با موفقیت ذخیره شد', 'success', 'ثبت رکورد جدید', ADMIN_PATH . '/content/categories')->redirect();
                } else
                    $this->message->set_message('اطلاعات با موفقیت بروزرسانی شد', 'success', 'بروزرسانی', ADMIN_PATH . '/content/categories')->redirect();
            }// else if insertion failed
            else {
                if ($edit_mode)
                    $this->message->set_message('ذخیره سازی انجام نشد. مجدد تلاش کنید', 'fail', 'خطا در ذخیره سازی', ADMIN_PATH . '/content/categories/edit')->redirect();

                else {
                    $this->message->set_message('بروزرسانی انجام نشد. مجدد تلاش کنید', 'fail', 'خطا در  بروزسانی', ADMIN_PATH . '/content/categories/edit')->redirect();
                }
            }
            redirect(ADMIN_PATH . '/content/categories');
        }
        $this->smart->view('content_categories/edit');
    }

    public function delete($content_categories_id = null) {
        if ($Content_categories = Content_category::find($content_categories_id)) {
            if ($Content_categories->delete())
                $this->message->set_message('دسته بندی محتوای مربوطه حذف گردید', 'success', 'حذف دسته بندی محتوا', ADMIN_PATH . '/content/categories')->redirect();
        }
        else {
            show_404();
        }
    }

}
