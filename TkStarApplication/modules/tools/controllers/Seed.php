<?php


/**
 * CMS Canvas
 *
 * @author      Mark Price
 * @copyright   Copyright (c) 2012
 * @license     MIT License
 * @link        http://cmscanvas.com
 */
class Seed extends CI_Controller {

    public function __construct() {
        parent::__construct();
        if (!$this->input->is_cli_request()) {
            die();
        }
    }

    public function run($module_name = null, $seed_name = null) {
        if (!$module_name || !$seed_name) {
            echo 'No Seed Found!';
            die();
        }
        $this->load->library('Seeds');
        $this->seeds->seed_do($module_name, $seed_name);
    }

}
