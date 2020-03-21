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
class Pages extends Admin_Controller {

    public $validation_rules = array(
        'edit' => array(
            ['field' => 'name', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'عنوان'],
            ['field' => 'slug', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'نامک'],
            ['field' => 'status', 'rules' => 'required|htmlspecialchars|numeric', 'label' => 'وضعیت'],
            ['field' => 'description', 'rules' => '', 'label' => 'قالب متن خلاصه'],
            ['field' => 'short_description', 'rules' => 'required', 'label' => 'قالب متن اصلی'],
        )
    );

    function __construct() {
        parent::__construct();
        $this->load->eloquent('Page');
        $this->load->eloquent('settings/Setting');
    }

    function index() {
        $data['title'] = '';

        $Pages = Page::all();
       
        $this->smart->assign(
                [
                    'title' => 'صفحه ها',
                    'Pages' => $Pages
                ]
        );
        $this->smart->view('pages/index');
    }

    public function edit($page_id = null) {
        // Init
        $edit_mode = FALSE;

        $this->smart->addJS('js/ckeditor/jquery.ckeditor.js');
        $this->smart->addJS('js/ckeditor/ckeditor.js');
        $Page = Page::find($page_id);
        $Setting = Setting::findByCode('homepage');
        if (!$Page && $page_id) {
            show_404();
        }
        $this->smart->assign([
            'edit_mode' => $edit_mode,
            'title' => 'صفحات'
        ]);

        // Edit Mode 
        if ($page_id) {
            $edit_mode = TRUE;
            $this->smart->assign([
                'edit_mode' => $edit_mode,
                'Setting' => $Setting,
                'Page' => $Page
            ]);
        }
        $slugify = new Slugify();
        // Process Form
        if ($this->formValidate(FALSE)) {
            $data = [
                'name' => $this->input->post('name'),
                'slug' => $slugify->slugify($this->input->post('slug')),
                'status' => $this->input->post('status'),
                'compiler' => $this->input->post('compiler'),
                'tpl' => $this->input->post('tpl'),
                'short_description' => $this->input->post('short_description'),
                'description' => $this->input->post('description'),
            ];

            // Insert or update data to the db
            // if inserted
            if (!$edit_mode) {
                if ($page_inserted_id = Page::insertGetId($data)) {
                    // set new page as home page if user set in form
                    if ($this->input->post('is_home')) {
                        Setting::setHomePage($page_inserted_id);
                    }
                    $this->message->set_message('اطلاعات با موفقیت ذخیره شد', 'success', 'ثبت رکورد جدید', ADMIN_PATH . '/content/pages')->redirect();
                } else
                    $this->message->set_message('ذخیره سازی انجام نشد. مجدد تلاش کنید', 'fail', 'خطا در  ذخیره سازی', ADMIN_PATH . '/content/pages/edit')->redirect();
            }// else if insertion failed
            else {
                if (Page::where('id', $page_id)->update($data)) {
                    // set home page if user checked home page feature
                    if ($this->input->post('is_home')) {
                        Setting::setHomePage($page_id);
                    }
                    $this->message->set_message('اطلاعات با موفقیت بروزرسانی شد', 'success', 'بروزرسانی', ADMIN_PATH . '/content/pages/')->redirect();
                } else {
                    $this->message->set_message('بروزرسانی انجام نشد. مجدد تلاش کنید', 'fail', 'خطا در بروزرسانی', ADMIN_PATH . '/content/pages/edit/' . $page_id)->redirect();
                }
            }
            redirect(ADMIN_PATH . '/content/pages');
        }
        $this->smart->view('pages/edit');
    }

    public function __404_not_found() {
        show_404();
    }

    function delete($page_id = null) {
        if ($Page = Page::find($page_id)) {
            if ($Page->delete())
                $this->message->set_message(' صفحه مورد نظر حذف گردید', 'success', 'حذف صفحه', ADMIN_PATH . '/content/pages')->redirect();
        }
        else {
            show_404();
        }
    }

    public static function setHomePage($PageId) {
        if (Setting::setHomePage($PageId))
            echo json_encode(['success' => 1]);
        else
            echo json_encode(['success' => 0]);
    }

}
