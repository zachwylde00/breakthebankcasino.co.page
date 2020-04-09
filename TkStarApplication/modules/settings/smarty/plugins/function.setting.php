<?php
function smarty_function_setting($params, Smarty_Internal_Template $template) {
    if (!key_exists('name', $params))
        return false;
    return CI::$APP->plugins->locate('settings:get_param', $params, null, null);
}
