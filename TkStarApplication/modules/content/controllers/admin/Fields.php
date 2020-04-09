<?php


/**
 * Content_field_types Controller
 *
 *
 * @copyright   Copyright (c) 2015
 * @license     MIT License
*
 */
class Fields extends Admin_Controller {

    public $validation_rules = array(
        '__global__' => array(
        ),
        'edit' => array(
            ['field' => 'password', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'کلمه عبور'],
            ['field' => 'confirm_password', 'rules' => 'trim|required|matches[password]|htmlspecialchars', 'label' => 'تایید کلمه عبور']
        )
    );

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data = array();
        $data['title'] = '';
        $this->load->library('pagination');

        $per_page = 10;
        $page = ($this->uri->segment(4)) ? $this->uri->segment(4) : 1;
        $config['base_url'] = site_url(ADMIN_PATH . '/users/index/');
        $config['per_page'] = $per_page;
        $config['uri_segment'] = 4;
        $config['num_links'] = 5;
        $config['total_rows'] = count($data["Users"]);
        $this->smart->assign(
                [
                    'title' => '',
                    'pagination' => $this->pagination->create_links()
                ]
        );
        $this->smart->view('users/index');
    }

    function edit() {
        // Init
        $data['edit_mode'] = $edit_mode = FALSE;

        $content_type_id = $this->uri->segment(4);

        $this->smart->assign([
            'edit_mode' => $edit_mode,
            'title' => '',
        ]);

        // Edit Mode 
        if ($content_type_id) {
            $edit_mode = TRUE;
            $this->smart->assign([
                'edit_mode' => $edit_mode
            ]);
        }

        // Process Form
        if ($this->formValidate()) {
            $credentials = [
                '' => $this->input->post(''),
            ];
            if (!$edit_mode) {
                if ($this->users->validForCreation($credentials)) {
                    $this->users->create($credentials);
                } else
                    $this->message->set_message('invalid Credentials for creation user', 'fail', 'shit!', 'users');
            }
            else {
                if ($this->users->validForUpdate($credentials))
                    $this->users->update($this->users->find($user_id), $credentials);
                else
                    $this->message->set_message('invalid Credentials for updating user', 'fail', 'shit!', 'users');
            }
            redirect(ADMIN_PATH . '/users');
        }
        $this->smart->view('users/edit');
    }

    function delete() {
        $this->load->eloquent('');
        $content_type_id = $this->uri->segment(4);
        if ($Content_type = $this->users->find($user_id)) {
            if ($Content_type->delete())
                $this->message->set_message('کاربر مربوطه حذف گردید', 'success', 'حذف کاربر', ADMIN_PATH . '/users');
        }
        else {
            show_404();
        }
    }

    /*
     * Form Validation callback 
     */

    function email_check($email, $user_id) {
        $credential = ['email' => $email];
        $User = $this->sentinel->findUserByCredentials($credential);
        if ($User && $User->id != $user_id) {
            $this->form_validation->set_message('email_check', "این آدرس ایمیل در حال حاضر در سایت ثبت نام شده است.");
            return FALSE;
        } else {
            return TRUE;
        }
    }

}
