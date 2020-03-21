<?php


/**
 * Menu Controller
 *
 *
 * @copyright   Copyright (c) 2016
 * @license     MIT License
 */
class Menus extends Admin_Controller {

    public $validation_rules = array(
        'edit' => array(
            ['field' => 'title', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'عنوان'],
            ['field' => 'target', 'rules' => 'trim|required|htmlspecialchars', 'label' => 'آدرس لینک'],
            ['field' => 'parent_id', 'rules' => 'required|numeric|htmlspecialchars', 'label' => 'منوی والد'],
            ['field' => 'group_id', 'rules' => 'numeric|htmlspecialchars', 'label' => 'گروه منو'],
            ['field' => 'weight', 'rules' => 'numeric|htmlspecialchars', 'label' => 'وزن ترتیبی']
        )
    );

    public function __construct() {
        parent::__construct();
        $this->load->eloquent('Menu_group');
        $this->load->eloquent('Menu');
    }

    public function index() {
        $data = array();
        $data['title'] = 'منوها';
        $Menus = Menu::all();
      
        $this->smart->assign(
                [
                    'title' => 'منوها',
                    'Menus' => $Menus,
                ]
        );
        foreach ($Menus as $key => $menu):
            $menu->setAttribute('group_name', $menu->group()->first()->name);
            if ($menu->parent_node()->first()) {
                $menu->setAttribute('parent_name', $menu->parent_node()->first()->title);
            } else
                $menu->setAttribute('parent_name', '--');
        endforeach;
        $this->smart->view('index');
    }

    function edit($menu_id = null) {
        // Init
        $edit_mode = FALSE;

        $Menu_group = Menu_group::all();
        $Menus = Menu::all();
        if ($menu_id)
            $Menus->except($menu_id);
        $this->smart->assign([
            'edit_mode' => $edit_mode,
            'title' => 'منوها',
            'Menu_group' => $Menu_group,
            'Menus' => $Menus,
        ]);
        // Edit Mode 
        if ($menu_id) {
            $edit_mode = TRUE;
            $this->smart->assign([
                'edit_mode' => $edit_mode,
                'Menu' => Menu::find($menu_id)
            ]);
        }
        // Process Form
        if ($this->formValidate(FALSE)) {
            $data = [
                'title' => $this->input->post('title'),
                'icon' => $this->input->post('icon'),
                'group_id' => $this->input->post('group_id'),
                'weight' => $this->input->post('weight'),
                'status' => $this->input->post('status')
            ];

            if($this->input->post('parent_id') == 0)
                $data['parent_id'] = NULL;
            else
                $data['parent_id'] = $this->input->post ('parent_id');
            // inject admin path prefix to the target link
            if (Menu_group::find($data['group_id'])->is_admin && !str_contains($this->input->post('target'), ADMIN_PATH))
                $data['target'] = ADMIN_PATH . '/' . $this->input->post('target');
            else
                $data['target'] = $this->input->post('target');

            // Insert or update data to the db
            // if inserted
            if (Menu::updateOrCreate(['id' => $menu_id], $data)) {
                if (!$edit_mode) {
                    $this->message->set_message('اطلاعات با موفقیت ذخیره شد', 'success', 'ثبت رکورد جدید', ADMIN_PATH . '/menu/menus/edit')->redirect();
                } else
                    $this->message->set_message('اطلاعات با موفقیت بروزرسانی شد', 'success', 'بروزرسانی', ADMIN_PATH . '/menu/menus')->redirect();
            }// else if insertion failed
            else {
                if ($edit_mode)
                    $this->message->set_message('ذخیره سازی انجام نشد. مجدد تلاش کنید'.validation_errors(), 'fail', 'خطا در ذخیره سازی', ADMIN_PATH . '/menu/menus/edit')->redirect();

                else {
                    $this->message->set_message('بروزرسانی انجام نشد. مجدد تلاش کنید'.validation_errors(), 'fail', 'خطا در  بروزسانی', ADMIN_PATH . '/menu/menus/edit/'.$menu_id)->redirect();
                }
            }
            redirect(ADMIN_PATH . '/menu/menus');
        }
        $this->smart->view('edit');
    }

    function delete($menu_id = null) {
        if ($Menu = Menu::find($menu_id)) {
            if ($Menu->delete())
                $this->message->set_message('لینک منوی  مربوطه حذف گردید', 'success', 'حذف لینک منو  ', ADMIN_PATH . '/menu/menus')->redirect();
        }
        else {
            show_404();
        }
    }

}
