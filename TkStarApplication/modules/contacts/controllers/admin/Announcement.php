<?php


/**
 * announcement Controller
 *
 *
 * @copyright   Copyright (c) 2015
 * @license     MIT License
 * @link http://www.mirook.ir exclusive CMS for mirookSoft Co.
 */
class Announcement extends Admin_Controller{

    public $validation_rules = array(
        'submit_announcement' => array(
            ['field' => 'subject', 'rules' => 'required|htmlspecialchars|max_length[150]',
                'label' => 'موضوع'],
            ['field' => 'attachment', 'rules' => '', 'label' => 'فایل پیوست'],
            ['field' => 'content', 'rules' => 'required|trim|max_length[1000]', 'label' => 'متن پیام'],
        )
    );

    public function __construct()
    {
        parent::__construct();
        $this->load->eloquent('Contact');
    }

    public function index()
    {
        $this->smart->addJS('js/ckeditor/jquery.ckeditor.js');
        $this->smart->addJS('js/ckeditor/ckeditor.js');
        $this->smart->assign(
                [
                    'title' => 'ارسال اعلانیه به همه کاربران',
                    'action' => site_url(ADMIN_PATH . '/contacts/announcement/submit-announcement'),
                ]
        );
        $this->smart->view('ticket');
    }

    public function submit_announcement()
    {
        $data = [];
        $user = $this->sentinel->getUser();
        if($this->formValidate(FALSE)) {
            $data = $this->__fetch_from_PostArray();
            $data['is_announcement'] = 1;
            $data['name_family'] = $user->first_name . ' ' . $user->last_name;
            $data['email'] = $user->username;
            $contact = new Contact;var_dump($contact);die;
            foreach($data as $key => $val):
                $contact->$key = $val;
            endforeach;
            if($contact->save()) {
                $this->message->set_message('پیام شما ارسال شد', 'success',
                        'ارسال اعلانیه', ADMIN_PATH . '/contacts/announcement/')->redirect();
            }
        }
        else {
            $this->message->set_message('مشکل در داده های ارسالی.' . validation_errors(),
                    'fail', 'خطای فرم', ADMIN_PATH . '/contacts/announcement/')->redirect();
        }
    }

    public function __fetch_from_PostArray()
    {
        $data = [];
        foreach($this->input->post() as $name => $value) {
            $data[$name] = $value;
        }
        return $data;
    }

    public function delete($announcement_id = null)
    {
        if($Announcement = Contact::find($announcement_id)) {
            if($Announcement->delete())
                    $this->message->set_message('اعلانیه مربوطه حذف گردید',
                        'success', 'حذف اعلانیه',
                        ADMIN_PATH . '/contacts/contact-us/announcements')->redirect();
        }
        else {
            show_404();
        }
    }

    public function send_sms()
    {

        $user = $this->sentinel->getUser();
        $date = \Miladr\Jalali\jDateTime::date("Y-m-d H:i:s");
        $url = "37.130.202.188/services.jspd";
        $rcpt_nm = array($user->mobile);
        $param = array
            (
            'uname' => 'joojet',
            'pass' => '44801698',
            'from' => '+982144801698',
            'message' => 'کاربر گرامی ' . $user->first_name . ' ' . $user->last_name . '، شما در تاریخ ' . $date . ' وارد پنل مدیریتی شهرک خانه شدید.',
            'to' => json_encode($rcpt_nm),
            'op' => 'send'
        );

        $handler = curl_init($url);
        curl_setopt($handler, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($handler, CURLOPT_POSTFIELDS, $param);
        curl_setopt($handler, CURLOPT_RETURNTRANSFER, true);
        $response2 = curl_exec($handler);

        $response2 = json_decode($response2);
        $res_code = $response2[0];
        $res_data = $response2[1];
    }

}
