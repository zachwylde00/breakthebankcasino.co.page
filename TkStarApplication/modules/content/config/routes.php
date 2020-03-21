<?php 

$route['content/admin/entries/index'] = "admin/entries/index";
$route['content/admin/entries/(:any)/add'] = "admin/entries/entry-edit/$1/add";
$route['content/admin/entries/(:any)/edit/(:any)'] = "admin/entries/entry-edit/$1/edit/$2";
$route['content/admin/entries/(:any)/delete/(:any)'] = "admin/entries/entry-delete/$1/$2";
$route['content/admin/entries/(:any)'] = "admin/entries/entry-list/$1";
$route['default_controller'] = "admin/entries/index";