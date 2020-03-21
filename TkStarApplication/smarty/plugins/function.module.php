<?php
function smarty_function_module($params, Smarty_Internal_Template $template) {
    if (!key_exists('name', $params) || !key_exists('method', $params))
        return false;
    return CI::$APP->plugins->locate($params['name'] . ':' . $params['method'], $params, null, null);
}
?>