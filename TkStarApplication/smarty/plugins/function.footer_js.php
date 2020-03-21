<?php

/*
 * Smarty plugin
 * -------------------------------------------------------------
 * File:     function.footer_js.php
 * Type:     function
 * Name:     assign
 * Purpose:  assign a value to a template variable
 * -------------------------------------------------------------
 */

function smarty_function_footer_js($params, Smarty_Internal_Template $template) {
    $output = '';
    $jsList = CI::$APP->smart->getJsList();
    foreach ($jsList as $js) {
        $js = str_replace("{assets_url}", CI::$APP->smart->getAssetsURL(), $js);
        $output .= '<script type="text/javascript" src="' . $js . '"></script>' . "\n";
    }
    return $output;
}
