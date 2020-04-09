<?php


/**
 * Menu Navigation model
 * 
 * @author		Pouya Mobasher Behrouz
 * @package		daloRADIUS
 * @subpackage	Menu Navigation module for CodeIgniter
 * @copyright	GPLv2
 *
 */
class Menu_group extends \Illuminate\Database\Eloquent\Model {

    /**
     *
     * @var string 
     */
    protected $table = "menu_groups";

    /**
     * Get the phone record associated with the user.
     */
    public function menus() {
        return $this->hasMany('Menu', 'group_id');
    }

}
