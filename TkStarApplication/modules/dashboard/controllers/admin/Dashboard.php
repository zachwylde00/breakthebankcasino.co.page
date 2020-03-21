<?php


/**
 * Dashboard panel Controller
 *
 *
 * @copyright   Copyright (c) 2019
 * @license     MIT License
*
 */
class Dashboard extends Admin_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data = array();
        $data['breadcrumb'] = set_crumbs(array());

        $this->smart->assign(
                ['title' => 'داشبورد مدیریتی',
//                    'form_dropdown' => form_dropdown('filter[group_id]', option_array_value($Groups, 'id', 'name', array('' => '')), set_filter('users', 'group_id'), 'data-md-selectize')
                ]
        );
        $this->smart->view('index');
    }

}
