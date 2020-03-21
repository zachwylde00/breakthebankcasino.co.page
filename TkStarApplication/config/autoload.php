<?php
$autoload['packages'] = array(APPPATH . 'libraries' . DS . 'MXCore');
$autoload['libraries'] = array('session', 'form_validation', 'smart', 'plugins', 'message', 'pagination', 'soccerama');
$autoload['helper'] = array('url', 'custom_functions', 'form', 'ssl', 'headers');
$autoload['config'] = array('settings', 'pagination');
$autoload['language'] = array('team_lang');
$autoload['model'] = array();
$autoload['smarty_module_plugins'] = array('settings', 'content');
?>