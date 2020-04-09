<?php

/*
 * Smarty plugin
 * -------------------------------------------------------------
 * File:     function.jdate.php
 * Type:     function
 * Name:     jdate
 * Purpose:  georgian date to jalali 
 * -------------------------------------------------------------
 */

function smarty_function_jdate($params, Smarty_Internal_Template $template) {
    $default_arr = array(
        'date' => '',
        'format' => 'Y-m-d H:i:s',
        'second_date' => '',
    );
    $settings = array_merge($default_arr, $params);
    
    return Miladr\Jalali\jDateTime::date($settings['format'], strtotime($settings['date'],strtotime($settings['second_date'])));
}
