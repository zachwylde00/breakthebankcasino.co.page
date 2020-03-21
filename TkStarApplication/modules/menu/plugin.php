<?php


/**
 * CMS Canvas
 * Wrapper library to the Menu model which provides implementation of a 
 * dynamic tree-based menu with entries and their parents. 
 * 
 * @author		Liran Tal <liran.tal@gmail.com>
 * @author      Pouya Mobasher Behrouz
 * @copyright   Copyright (c) 2012
 * @license     MIT License
 * @link        http://cmscanvas.com
 */
class Menu_plugin extends Plugin {

    private $menu;
    private $menu_group;

    /**
     * Aids in formatting the returned data from the method call
     * 
     * @param		string		method name
     * @param		mixed		arguments passed to the method
     * @param		string		format type, one of: array, json, serialize. defaults to php's array
     * @return		mixed		representation of model's data result based on the format provided
     */
    public function getFormatted() {
        $this->load->eloquent('menu/Menu');
        $this->load->eloquent('menu/Menu_group');
        $this->load->helper('list_generator');
        $group = $this->attribute("group", "0");
//        $menu_array = $this->cache->model('menu_model', 'getMenu', array('group' => $group), 'menus');
        $menu_array = [];
        $all_menu = Menu::getMenu($group);
//        foreach ($all_menu as $key => $val) {
//            $accessString = $this->router->fetch_module() . '.admin.' . $this->router->fetch_class() . '.' . $this->router->fetch_method();
//            // Check group type Administrator's permissions for access
//            if (CI::$APP->sentinel->check()->hasAnyAccess($accessString) && !$this->user->inRole('superadmin')) {
//
//                $menu_array[] = $val;
//            }
//        }
        return list_generator($all_menu, $this->attributes(), true);
    }

}
