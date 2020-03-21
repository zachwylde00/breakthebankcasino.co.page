<?php


/**
 * Roles for Users
 *
 *
 * @copyright   Copyright (c) 2016
 * @license     MIT License
 */
class Roles extends Admin_Controller {

    public $validation_rules = array(
        '__global__' => array(
        ) ,
        'edit' => array(
            ['field' => 'name' , 'rules' => 'trim|required|htmlspecialchars' , 'label' => 'نام گروه' ] ,
            ['field' => 'slug' , 'rules' => 'trim|required|htmlspecialchars' , 'label' => 'نام لاتین' ]
        )
    );

    /**
     * for making instance of Role Model ( From sentinel Auth )
     * @var Instance Object 
     */
    public $role;

    function __construct () {
        parent::__construct();
        $this->role = $this->sentinel->getRoleRepository();
    }

    function index () {
        $data = array();
        $data['title'] = 'گروه ها';

        $Roles = $this->role->all();
        $this->smart->assign(
                ['Roles' => $Roles ,
                    'title' => 'گروه های کاربری' ,
                ]
        );
        $this->smart->view('roles/index');
    }

    /**
     * Get users of a specific Role
     * @return type
     */
    function getRoleUsers () {
        $role_id = $this->input->post('role_id');
        //get Role
        $Role = $this->role->findById(1);
        
        $Users = $Role->users;
        //get role's users
        foreach ( $Users as $val ):
            unset($val->password);
            unset($val->permissions);
        endforeach;
        echo json_encode($Users);
        die;
    }

    function edit ( $role_id = null ) {
        // Init
        $edit_mode = FALSE;
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
            'Permissions' => collect($injectedPermission)
        ]);
        $Role = $this->role->find($role_id);
        if ( $role_id && $Role->slug == 'superadmin' )
            redirect(ADMIN_PATH . '/users/roles');
        if ( !$Role && $role_id ) {
            show_404();
        }
        // Edit Mode
        if ( $role_id ) {
            $edit_mode = TRUE;
            $this->smart->assign([
                'edit_mode' => $edit_mode ,
                'Role' => $Role ,
            ]);
        }
        if ( $this->formValidate(FALSE) ) {
            $credentials = [
                'name' => $this->input->post('name') ,
                'slug' => $this->input->post('slug')
            ];
            if ( $edit_mode ) {
                $this->role->where('id' , $role_id)->update(array( 'name' => $credentials['name'] , 'slug' => $credentials['slug'] ));
                // Setting permissions for user
                $this->setPermission($Role);
                $this->message->set_message('اطلاعات با موفقیت بروزرسانی شد' , 'success' , 'بروزرسانی' , ADMIN_PATH . '/users/roles')->redirect();
            }
            else {
                $newRole = $this->role->createModel()->create($credentials);
                // Setting permissions for user
                $this->setPermission($newRole);
                $this->message->set_message('اطلاعات با موفقیت ذخیره شد' , 'success' , 'ذخیره سازی' , ADMIN_PATH . '/users/roles')->redirect();
            }
        }

        $this->smart->assign(
                [
                    'title' => 'گروه های کاربری' ,
                ]
        );
        $this->smart->view('roles/edit');
    }

    function delete ( $user_id ) {
        if ( $Role = $this->role->find($user_id) ) {
            if ( $Role->slug == 'superadmin' )
                $this->message->set_message('نقش مدیریت کل قابل حذف نیست' , 'warning' , 'خطا' , ADMIN_PATH . '/users/roles')->redirect();
            // Delete user uploads
            if ( !$Role->getUsers()->isEmpty() ) {
                $this->message->set_message('این گروه شامل تعدادی کاربر است و امکان حذف آن وجود ندارد' , 'fail' , 'خطا' , ADMIN_PATH . '/users/roles')->redirect();
            }
            elseif ( $Role->delete() )
                $this->message->set_message('کاربر مربوطه حذف گردید' , 'success' , 'حذف کاربر' , ADMIN_PATH . '/users/roles')->redirect();
        }
        else {
            show_404();
        }
    }

    /**
     * set Permissions for user
     * @param type $user
     */
    public function setPermission ( $role ) {
        $permissions = $this->input->post('role_permissions');
        $perm_array = array();
        foreach ( $permissions as $permission ):
            $perm_array[$permission] = TRUE;
        endforeach;
        $role->permissions = $perm_array;
        $role->save();
    }

    /*
     * Form Validation callback to check if role name already exists.
     */

    function name_check ( $name , $role_id ) {
        $this->load->eloquent('roles_model');
        $Group = new Groups_model();

        $Group->where("name = '$name'")->get();

        if ( $Group->exists() && $Group->id != $role_id ) {
            $this->form_validation->set_message('name_check' , "This role name already exists.");
            return FALSE;
        }
        else {
            return TRUE;
        }
    }

}
