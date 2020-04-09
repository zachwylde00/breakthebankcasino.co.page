<?php
$route['default_controller'] = 'bets';
$route['404_override'] = 'content';
$route['([a-zA-Z_-]+)/admin/([a-zA-Z_-]+)'] = '';
$route['payment'] = 'payment/payments';
$route['payment/(.+)'] = 'payment/payments/$1';
$route['help'] = 'content';
$route['betGuide'] = 'content';
$route['mixForm'] = 'content';
$route['faq'] = 'content';
$route['leagueTables'] = 'content';
$route['register'] = 'users/register';
$route[ADMIN_PATH . '/users/login'] = 'users/login';
$route[ADMIN_PATH . '/users/logout'] = 'users/logout';
$route[ADMIN_PATH . '/users/forgot-password'] = 'users/forgot-password';
$route[ADMIN_PATH] = 'dashboard/admin/dashboard';
$route['netmrm'] = 'dashboard/admin/dashboard';
$route['alirezakaka'] = 'dashboard/admin/dashboard';
$route[ADMIN_PATH . '/([a-zA-Z_-]+)/(.+)'] = "$1/admin/$2";
$route[ADMIN_PATH . '/([a-zA-Z_-]+)'] = "$1/admin/$1";
?>