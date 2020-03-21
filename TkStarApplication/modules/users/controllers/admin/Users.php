<?php
/**
 * Users Controller using Sentinel Authentication Library

 *
 * @copyright   Copyright (c) 2016
 * @license     MIT License
 */
class Users extends Admin_Controller {

    public $validation_rules = array(
        'edit' => array(
            ['field' => 'password' , 'rules' => 'trim|htmlspecialchars' , 'label' => 'کلمه عبور' ] ,
            ['field' => 'confirm_password' , 'rules' => 'trim|matches[password]|htmlspecialchars' , 'label' => 'تایید کلمه عبور' ] ,
            ['field' => 'username' , 'rules' => 'trim|htmlspecialchars' , 'label' => 'کلمه عبور' ] ,
            ['field' => 'email' , 'rules' => 'trim|required|htmlspecialchars|valid_email' , 'label' => 'کلمه عبور' ] ,
            ['field' => 'first_name' , 'rules' => 'trim|required|htmlspecialchars' , 'label' => 'نام' ] ,
            ['field' => 'last_name' , 'rules' => 'trim|required|htmlspecialchars' , 'label' => 'نام خانوادگی' ] ,
            ['field' => 'mobile' , 'rules' => 'trim|required|htmlspecialchars' , 'label' => 'شماره موبایل' ] ,
        ) ,
        'resetPasswordBySms' => array(
            ['field' => 'password' , 'rules' => 'trim|htmlspecialchars|required' , 'label' => 'رمز عبور جدید' ] ,
            ['field' => 'confirm_password' , 'rules' => 'trim|htmlspecialchars|required|matches[password]' , 'label' => 'تایید رمز عبور جدید' ] ,
        ) ,
    );
    public $users;
    public $role;

    public function __construct () {
        parent::__construct();
        $this->users = $this->sentinel->getUserRepository();
        $this->role = $this->sentinel->getRoleRepository();
        //$this->carter = $this->sentinel->getCarterRepository();
    }

    public function index () {
        $data = array();
        $data['title'] = 'کاربران';

        // Get groups for group filter
        $data['Roles'] = $this->role->all();

        // Query
        $Users = $this->users->orderBy('id' , 'desc')->get();
        // assign user roles to user object
        foreach ( $Users as $key => $val ) {
            if ( $val->getRoles()->isEmpty() ) {
                $Users[$key]->setAttribute('role_name' , '--');
            }
            else {
                $roles_arr = array();
                foreach ( $val->getRoles() as $roles ) {
                    $roles_arr[] = $roles->name;
                }
                $Users[$key]->setAttribute('role_name' , $roles_arr);
            }
        }
        $this->smart->assign(
                ['Users' => $Users ,
                    'title' => 'کاربران' ,
                    'roles' => $data['Roles'] ,
                ]
        );

        $this->smart->view('users/index');
    }

    /**
     * Edit or Create users
     * @param int $user_id
     */
    public function edit ( $user_id = null ) {
        // Init
        $edit_mode = FALSE;
        $role = $this->role->all();

        $User = $this->users->find($user_id);
        $this->show_404_on(!$User && $user_id);
        // Filter the superadmin role to avoid attaching this role to other users
        $filtered = $role->filter(function ($item) {
            return $item->slug != SUPER_ADMIN;
        });
        $role = $filtered->all();

        // Permissions list
        $this->load->eloquent('Permission');
        $Permissions = Permission::all();
        // Make permissions in Groups by module name
        $GroupedByPermission = $Permissions->groupBy('module_name');
        $injectedPermission = [ ];
        // now inject all permissions in suitable index of array
        foreach ( $GroupedByPermission as $key => $val ) {
            $injectedPermission[$key] = $val;
        }
        $this->smart->assign([
            'edit_mode' => $edit_mode ,
            'title' => 'کاربران' ,
            'Roles' => $role ,
            'is_admin' => $this->sentinel->getUser()->getRoles()->contains('slug' , SUPER_ADMIN) ,
            'Permissions' => collect($injectedPermission) ,
        ]);
        // Edit Mode 
        if ( $user_id ) {

            $edit_mode = TRUE;
            $this->smart->assign([
                'edit_mode' => $edit_mode ,
                'User' => $User ,
                'is_activated' => $this->sentinel->getActivationRepository()->where('user_id' , $user_id)->get()[0]->completed ,
            ]);
        }

        // Process Form
        if ( $this->formValidate(FALSE) ) {
            $credentials = [
                'email' => $this->input->post('email') ,
                'username' => $this->input->post('username') ,
                'first_name' => $this->input->post('first_name') ,
                'last_name' => $this->input->post('last_name') ,
                'status' => $this->input->post('status') ,
                'mobile' => $this->input->post('mobile') ,
            ];
            if ( !$edit_mode ) {
                $credentials['password'] = $this->input->post('password');
                if ( $this->users->validForCreation($credentials) ) {
                    if ( $credentials['status'] )
                        $newUser = $this->sentinel->registerAndActivate($credentials);
                    else
                        $newUser = $this->users->create($credentials);
                    // make relationship for roles and user
                    if ( $this->input->post('role_id') ) {
                        $newUser->roles()->sync($this->input->post('role_id'));
                    }
                    // Setting permissions for user
                    $this->setPermission($newUser , $Permissions);
                    $this->message->set_message('اطلاعات با موفقیت ذخیره شد' , 'success' , 'ثبت رکورد جدید' , ADMIN_PATH . '/users/')->redirect();
                }
                else {
                    $this->message->set_message('اطلاعات وارد شده برای ذخیره کاربر معتبر نیست' , 'fail' , 'خطای ورود داده' , 'users')->redirect();
                }
            }
            else {
                if ( $this->input->post('password') ) {
                    $credentials['password'] = $this->input->post('password');
                }
                if ( $this->users->validForUpdate($User , $credentials) )
                    if ( $this->users->update($this->users->find($user_id) , $credentials) ) {
                        // if User is superadmin, push the superadmin's id to the post array
                        if ( $User->getRoles()->contains('slug' , SUPER_ADMIN) ) {
                            $_POST['role_id'][] = 1;
                        }
                        // Synchronizing Relationship for user and roles
                        $User->roles()->sync($this->input->post('role_id'));
                        // Setting permissions for user
                        $this->setPermission($User , $Permissions);
                        $this->message->set_message('اطلاعات با موفقیت بروزرسانی شد' , 'success' , 'بروزرسانی' , ADMIN_PATH . '/users/users')->redirect();
                    }
                    else
                        $this->message->set_message('اطلاعات وارد شده برای بروزرسانی کاربر معتبر نیست' , 'fail' , 'خطای ورود داده' , ADMIN_PATH . '/users/users/edit/' . $user_id)->redirect();
            }
            redirect(ADMIN_PATH . '/users/users');
        }
        $this->smart->view('users/edit');
    }

    /**
     * 
     * collect of operations for validating code and changing password by sms reminder code
     * @param type $user_id
     */
    public function setPermission ( $user , $Permissions ) {
        $input_permissions = $this->input->post('user_permissions');
        $perm_array = array();
        //make true and false permissions based on input cheched in the form
        foreach ( $Permissions as $per ):
            if ( !empty($input_permissions) AND in_array($per['permission'] , $input_permissions) )
                $perm_array[$per['permission']] = TRUE;
            else
                $perm_array[$per['permission']] = FALSE;
        endforeach;
        $user->permissions = $perm_array;
        $user->save();
    }

    public function delete ( $user_id ) {
        $superadmin = $this->role->findBySlug('superadmin');
        if ( $User = $this->users->find($user_id) AND ! $User->roles->contains($superadmin) ) {
            // Delete user uploads
            $this->load->helper('file');

            $upload_path = CMS_ROOT . USER_DATA . $User->id . '/';
            delete_files($upload_path , TRUE);
            @rmdir($upload_path);

            $User->delete();
            $this->message->set_message('کاربر مربوطه حذف گردید' , 'success' , 'حذف کاربر' , ADMIN_PATH . '/users')->redirect();
        }
        else {
            show_404();
        }
    }

    function resend_activation () {
        $user_id = $this->uri->segment('4');

        $this->load->eloquent('Users');
        $User = $this->Users->get_by_id($user_id);

        if ( !$User->exists() ) {
            return show_404();
        }

        $this->load->library('email');

        $this->email->from('noreply@' . domain_name() , $this->settings->site_name);
        $this->email->to($User->email);
        $this->email->subject($this->settings->site_name . ' Activation');
        $this->email->message("Thank you for your new member registration.\n\nTo activate your account, please visit the following URL\n\n" . site_url('users/activate/' . $User->id . '/' . $User->activation_code) . "\n\nThank You!\n\n" . $this->settings->site_name);
        $this->email->send();
    }

    /*
     * Form Validation callback to check if an email address is already in use.
     */

    function email_check ( $email , $user_id ) {
        $credential = ['email' => $email ];
        $User = $this->sentinel->findUserByCredentials($credential);
        if ( $User && $User->id != $user_id ) {
            $this->form_validation->set_message('email_check' , "این آدرس ایمیل در حال حاضر در سایت ثبت نام شده است.");
            return FALSE;
        }
        else {
            return TRUE;
        }
    }

    public function withdraw () {
        $this->load->eloquent('withdraw');
        $all = Withdraw::orderBy('id' , 'desc')->get();
        $this->smart->assign([
            'withdraw' => $all ,
            'title' => 'درخواست جایزه' ,
        ]);
        $this->smart->view('users/withdraw');
    }

    public function view_withdraw ( $id ) {

        $this->load->eloquent('withdraw');
        $request = Withdraw::find($id);
        if ( !$id OR ! $request ) {
            show_404();
        }
        if ( $request->status == 1 ) {
            $labell = 'پرداخت نشده';
        }
        else {
            $labell = 'پرداخت شده';
        }
        $this->smart->assign(
                [
                    'title' => 'درخواست جایزه ' . $request->account_holder ,
                    'Row' => $request ,
                    'status_label' => $labell ,
                ]
        );
        $this->smart->view('users/view_withdraw');
    }

    public function withdraw_status ( $id ) {
        $this->load->eloquent('withdraw');
        $request = Withdraw::find($id);
        if ( $request->status == 1 )
            $request->status = 0;
        elseif ( $request->status == 0 OR $request->status == 2 )
            $request->status = 1;
        $request->save();

        $this->message->set_message('وضعیت تغییر یافت' , 'success' , '' , ADMIN_PATH . '/users/users/view-withdraw/' . $id)->redirect();
    }

    public function withdraw_status_q ( $id ) {
        $this->load->eloquent('withdraw');
        $request = Withdraw::find($id);
        $request->status = 2;
        $request->save();

        $this->message->set_message('وضعیت تغییر یافت' , 'success' , '' , ADMIN_PATH . '/users/users/view-withdraw/' . $id)->redirect();
    }
    
    /**
     * افزایش شارژ حساب کاربر
     * @param int $user_id
     */
    public function increase ( $user_id = null ) {
        $User = $this->sentinel->getUserRepository()->find($user_id);
        $this->load->eloquent('payment/Transaction');
        if ( $this->input->post('amount') ) {
            $desc = $this->input->post('desc');

            Transaction::create(array(
                'invoice_type' => 10 ,
                'price' => $this->input->post('amount') ,
                'user_id' => $user_id ,
                'description' => $desc != "" ? $desc : 'افزایش شارژ حساب توسط مدیریت' ,
                'trans_id' => 'ADMIN_INCREASE' . time() ,
                'cash' => $User->cash + $this->input->post('amount') ,
                'status' => 1
            ));
            $User->update(
                    array(
                        'cash' => $User->cash + $this->input->post('amount') ,
                    )
            );
            $this->message->set_message('مبلغ با موفقیت به حساب کاربر واریز شد' , 'success' , 'افزایش شارژ حساب' , ADMIN_PATH . '/users')->redirect();
        }
        else {
            $this->smart->assign(
                    [
                        'title' => 'افزایش موجودی کاربر ' . $User->first_name . ' ' . $User->last_name ,
                    ]
            );
            $this->smart->view('users/increase');
        }
    }

    /**
     * کاهش شارژ حساب کاربر
     * @param int $user_id
     */
    public function decrease ( $user_id = null ) {
        $User = $this->sentinel->getUserRepository()->find($user_id);
        $this->load->eloquent('payment/Transaction');
        if ( $this->input->post('amount') ) {
            $desc = $this->input->post('desc');

            Transaction::create(array(
                'invoice_type' => 11 ,
                'price' => $this->input->post('amount') ,
                'user_id' => $user_id ,
                'description' => $desc != "" ? $desc : 'کاهش شارژ حساب توسط مدیریت' ,
                'trans_id' => 'ADMIN_DECREASE' . time() ,
                'cash' => $User->cash - $this->input->post('amount') ,
                'status' => 1
            ));
            $User->update(
                    array(
                        'cash' => $User->cash - $this->input->post('amount') ,
                    )
            );
            $this->message->set_message('مبلغ با موفقیت از حساب کاربر کسر شد' , 'success' , 'افزایش شارژ حساب' , ADMIN_PATH . '/users')->redirect();
        }
        else {
            $this->smart->assign(
                    [
                        'title' => 'کسر از موجودی کاربر ' . $User->first_name . ' ' . $User->last_name ,
                    ]
            );
            $this->smart->view('users/increase');
        }
    }
    /*
    *کارت تو کارت
    *
    */
    public function carttocart () {
        $this->load->eloquent('carter');
        $all = Carter::orderBy('id' , 'desc')->get();
        $this->smart->assign([
            'carttocart' => $all,
            'title' => 'کارت به کارت ها',
        ]);
        $this->smart->view('users/carttocart');
    }
        public function view_carttocart ( $id ) {

        $this->load->eloquent('carter');
        $request = Carter::find($id);
        if ( !$id OR ! $request ) {
            show_404();
        }
        if ( $request->status == 1 ) {
            $labell = 'پرداخت نشده';
        }
        else {
            $labell = 'پرداخت شده';
        }
        $this->smart->assign(
                [
                    'title' => 'درخواست جایزه ' . $request->account_holder ,
                    'Row' => $request ,
                    'status_label' => $labell ,
                ]
        );
        $this->smart->view('users/view_carttocart');
    }
    public function carttocart_status ( $id ) {
        $this->load->eloquent('carter');
        $request = Carter::find($id);
        if ( $request->status == 1 )
            $request->status = 0;
        elseif ( $request->status == 0 OR $request->status == 2 )
            $request->status = 1;
        $request->save();

        $this->message->set_message('وضعیت تغییر یافت' , 'success' , '' , ADMIN_PATH . '/users/users/view-carttocart/' . $id)->redirect();
    }

    public function carttocart_status_q ( $id ) {
        $this->load->eloquent('carter');
        $request = Carter::find($id);
        $request->status = 2;
        $request->save();

        $this->message->set_message('وضعیت تغییر یافت' , 'success' , '' , ADMIN_PATH . '/users/users/view-carttocart/' . $id)->redirect();
    }
}