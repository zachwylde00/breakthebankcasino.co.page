<?php

/*
 * Smarty plugin
 * -------------------------------------------------------------
 * File:     function.footer_js.php
 * Type:     function
 * Name:     assign
 * Purpose:  add a java script file to the header
 * -------------------------------------------------------------
 */

function smarty_function_add_js($params) {
    $default_arr = array(
        'part' => 'header'
    );
    $settings = array_merge($default_arr, $params);
    return CI::$APP->smart->addJs($settings['file'], $settings['part']);
}
