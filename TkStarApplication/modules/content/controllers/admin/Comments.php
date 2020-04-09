<?php

/**
 * Controller: Main Comments management
 *
 *
 * @copyright   Copyright (c) 2016
 * @license     MIT License
 */
class Comments extends Admin_Controller {

    public $validation_rules = array(
        'index' => array(
            ['field' => 'site_name', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'عنوان سایت'],
            ['field' => 'homepage', 'rules' => 'numeric|required|htmlspecialchars', 'label' => 'صفحه اصلی'],
            ['field' => 'custom_error_page', 'rules' => 'htmlspecialchars', 'label' => 'صفحه خطا'],
            ['field' => 'site_status', 'rules' => 'numeric|htmlspecialchars', 'label' => 'وضعیت سایت'],
            ['field' => 'footer', 'rules' => 'htmlspecialchars', 'label' => 'متن فوتر سایت'],
        )
    );

    public function __construct() {
        parent::__construct();
        $this->load->eloquent('Entry');
        $this->load->eloquent('Comment');
    }

    public function index() {
        $data = array();
        $Comments = Comment::all();
        $this->smart->assign(
                [
                    'title' => 'کامنت های ثبت شده',
                    'Comments' => $Comments
                ]
        );
        $this->smart->view('cm/index');
    }

    /**
     * نمایش کامنت
     * @param type $id
     */
    public function view_cm($id) {
        $Cm = Comment::find($id);
        $this->show_404_on(!$id);
        $this->show_404_on(!$Cm);
        $this->smart->assign(
                [
                    'title' => 'مدیریت یادداشت ها',
                    'Cm' => $Cm,
                ]
        );
        $this->smart->view('cm/view_cm');
    }

    /**
     * تغییر وضعیت آکهی از تایید شده به رد شده و برعکس
     * @param type $cm_id
     */
    public function toggleStatus($cm_id) {
        $current_status = Comment::find($cm_id);
        if (Comment::toggleStatus($current_status))
            $this->message->set_message('وضعیت کامنت با موفقیت تغییر یافت', 'success', 'تغییر وضعیت کامنت', ADMIN_PATH . '/content/comments')->redirect();
        else
            $this->message->set_message('مشکلی رخ داد مجدد تلاش کنید', 'fail', 'تغییر وضعیت کامنت', ADMIN_PATH . '/content/comments')->redirect();
    }

    function delete($cm_id = null) {
        if ($Cm = Comment::find($cm_id)) {
            if ($Cm->delete())
                $this->message->set_message('یادداشت مربوطه حذف گردید', 'success', 'حذف یادداشت ', ADMIN_PATH . '/content/comments')->redirect();
        }
        else {
            show_404();
        }
    }

}
