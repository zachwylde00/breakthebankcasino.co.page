<?php

/*
 * Smarty plugin
 * -------------------------------------------------------------
 * File:     function.header_css.php
 * Type:     function
 * Name:     assign
 * Purpose:  add a cascading styel sheet file to the header
 * -------------------------------------------------------------
 */

function smarty_function_add_css($param) {
    return CI::$APP->smart->addCss($param['file']);
}
