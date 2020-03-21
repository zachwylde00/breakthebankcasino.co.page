<?php

/*
 * Smarty plugin
 * -------------------------------------------------------------
 * File:     function.date.php
 * Type:     function
 * Name:     date
 * Purpose:   
* -------------------------------------------------------------
 */

function smarty_function_date($params, Smarty_Internal_Template $template) {
    $default_arr = array(
        'date' => '',
        'format' => 'Y-m-d H:i:s',
        'second_date' => '',
    );
    $settings = array_merge($default_arr, $params);
    
    return Miladr\Jalali\jDateTime::date($settings['format'], strtotime($settings['date'],strtotime($settings['second_date'])));
}
