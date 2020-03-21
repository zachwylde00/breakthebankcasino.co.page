<?php


/**
 * Menu_group Controller
 *
 *
 * @copyright   Copyright (c) 2016
 * @license     MIT License
 */
class Menu_groups extends Admin_Controller {

    public $validation_rules = array(
        'edit' => array(
            ['field' => 'name', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'عنوان'],
            ['field' => 'code', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'کد لاتین'],
            ['field' => 'is_admin', 'rules' => 'numeric|htmlspecialchars', 'label' => 'ادمین'],
        )
    );

    public function __construct() {
        parent::__construct();
        $this->load->eloquent('Menu_group');
    }

    public function index() {
        $data = array();
        $data['title'] = 'گروه های منو';
        $Menu_groups = Menu_group::all();
      
        $this->smart->assign(
                [
                    'title' => 'گروه های منو',
                    'Menu_groups' => $Menu_groups
                ]
        );
        $this->smart->view('menu-groups/index');
    }

    function edit($menu_id = null) {
        // Init
        $edit_mode = FALSE;

        $Menu_groups = Menu_group::all();
        $this->smart->assign([
            'edit_mode' => $edit_mode,
            'title' => 'گروه های منو',
            'Menu_groups' => $Menu_groups,
        ]);

        // Edit Mode 
        if ($menu_id) {
            $edit_mode = TRUE;
            $this->smart->assign([
                'edit_mode' => $edit_mode,
                'Menu_group' => Menu_group::find($menu_id)
            ]);
        }
        // Process Form
        if ($this->formValidate(FALSE)) {
            $data = [
                'name' => $this->input->post('name'),
                'code' => $this->input->post('code'),
                'is_admin' => $this->input->post('is_admin'),
            ];

            // Insert or update data to the db
            // if inserted
            if (Menu_group::updateOrCreate(['id' => $menu_id], $data)) {
                if (!$edit_mode) {
                    $this->message->set_message('اطلاعات با موفقیت ذخیره شد', 'success', 'ثبت رکورد جدید', ADMIN_PATH . '/menu/menu-groups/edit')->redirect();
                } else
                    $this->message->set_message('اطلاعات با موفقیت بروزرسانی شد', 'success', 'بروزرسانی', ADMIN_PATH . '/menu/menu-groups/edit')->redirect();
            }// else if insertion failed
            else {
                if ($edit_mode)
                    $this->message->set_message('ذخیره سازی انجام نشد. مجدد تلاش کنید', 'fail', 'خطا در ذخیره سازی', ADMIN_PATH . '/menu/menu-groups/edit')->redirect();

                else {
                    $this->message->set_message('بروزرسانی انجام نشد. مجدد تلاش کنید', 'fail', 'خطا در  بروزسانی', ADMIN_PATH . '/menu/menu-groups/edit')->redirect();
                }
            }
            redirect(ADMIN_PATH . '/menu/menu-groups');
        }
        $this->smart->view('menu-groups/edit');
    }

    function delete($menu_id = null) {
        if ($Menu_group = Menu_group::find($menu_id)) {
            if ($Menu_group->delete())
                $this->message->set_message('لینک منوی  مربوطه حذف گردید', 'success', 'حذف لینک منو  ', ADMIN_PATH . '/menu/menus')->redirect();
        }
        else {
            show_404();
        }
    }

}
