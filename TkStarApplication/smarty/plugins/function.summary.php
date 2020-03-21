<?php
function smarty_function_summary($params, Smarty_Internal_Template $template) {
    return mb_substr(trim(str_replace('<br>', '<br />',
                                    strip_tags($params['text'], '<br>'))), 0,
                    $params['limit']) . '...';
}
?>