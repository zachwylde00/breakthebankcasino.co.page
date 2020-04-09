<?php
function smarty_function_searchArray ( $params , Smarty_Internal_Template $template ) {
    $key = $params['key'];
    foreach ( $params['array'] as $index => $val ) {
        if ( $val->$key == $params['val'] ) {
            return $index;
        }
    }
    return null;
}
function smarty_block_php($params, $content, $template, &$repeat){
    eval($content);
    return '';
} 
?>