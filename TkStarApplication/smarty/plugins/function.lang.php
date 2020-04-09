<?php

/*
 * Smarty plugin
 * -------------------------------------------------------------
 * File:     function.site_url.php
 * Type:     function
 * Name:     assign
 * Purpose:  assign a value to a template variable
 * -------------------------------------------------------------
 */

function smarty_function_lang($params, Smarty_Internal_Template $template) {
    $CI = CI::$APP;
    $defaults = array('package' => 'defaults', 'string' => 'transaction');
    $params = array_merge($defaults, $params);
    $CI->lang->load($params['package'], 'english');
    $langstr = $CI->lang->line($params['string'], false);
    if ($langstr == '')
        return '';
    $sprintfparams = [];
    if (key_exists('parameters', $params)) {
        $sprintfparams = explode('|', $params['parameters']);
        return call_user_func_array('sprintf', array_merge([$langstr], $sprintfparams));
    } else {
        return $langstr;
    }
}
