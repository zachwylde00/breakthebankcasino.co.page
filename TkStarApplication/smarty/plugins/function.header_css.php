<?php

/*
 * Smarty plugin
 * -------------------------------------------------------------
 * File:     function.header_css.php
 * Type:     function
 * Name:     assign
 * Purpose:  assign a value to a template variable
 * -------------------------------------------------------------
 */

function smarty_function_header_css($params, Smarty_Internal_Template $template) {
    $output = '';
    $cssList = CI::$APP->smart->getCssList();
    foreach ($cssList as $css) {
        $css = str_replace("{assets_url}", CI::$APP->smart->getAssetsURL(), $css);
        $output .= '<link rel="stylesheet" type="text/css" href="' . $css['file'] . '" media="' . $css['media'] . '" />' . "\n";
    }
    return $output;
}
