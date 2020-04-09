<?php


/**
 * CMS Canvas
 *
 * @author      Mark Price
 * @copyright   Copyright (c) 2012
 * @license     MIT License
 * @link        http://cmscanvas.com
 */
class Migration extends CI_Controller {

    public function __construct() {
        parent::__construct();
        if (!$this->input->is_cli_request()) {
            die();
        }
    }

    public function make($module_name = null, $migration_name = null) {
        if (!$module_name || !$migration_name) {
            die();
        }
        $this->load->library('Migrations');
        $this->migrations->migration_create($module_name, $migration_name);
    }

    public function up($module_name = null) {
        if (!$module_name) {
            die();
        }
        $this->load->library('Migrations');
        $this->migrations->migration_do($module_name);
    }

    public function stepdown($module_name = null) {
        if (!$module_name) {
            die();
        }
        $this->load->library('Migrations');
        $this->migrations->migration_down_batch($module_name);
    }

    public function lastdown($module_name = null) {
        if (!$module_name) {
            die();
        }
        $this->load->library('Migrations');
        $this->migrations->migration_down_last($module_name);
    }

    public function reset($module_name = null) {
        if (!$module_name) {
            die();
        }
        $this->load->library('Migrations');
        $this->migrations->migration_reset($module_name);
    }

}
