<?php
/* Smarty version 3.1.31, created on 2020-03-10 00:08:22
  from "C:\laragon\www\gang4bet\themes\default\TkStarBet2018\partials\header.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e66a93e635cd1_56427084',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'd6e9faac9525149f3b45d403988be3e4fd8697e2' => 
    array (
      0 => 'C:\\laragon\\www\\gang4bet\\themes\\default\\TkStarBet2018\\partials\\header.tpl',
      1 => 1582129682,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/header_menu.tpl' => 1,
  ),
),false)) {
function content_5e66a93e635cd1_56427084 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_setting')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\modules\\settings\\smarty\\plugins\\function.setting.php';
if (!is_callable('smarty_function_assets_url')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\function.assets_url.php';
?>
<head>
	<meta charset="utf-8" />
	<title><?php echo smarty_function_setting(array('name'=>'site_name'),$_smarty_tpl);?>
</title>
	<link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
	<meta name="viewport" content="width=device-width" />
    <meta property="og:type" content="website" />    
    <meta property="og:title" content="گنگ فور بت - بزرگترین مرجع پیش بینی مسابقات ورزشی . دارای بهترین کازینوی آنلاین" />
    <meta property="og:description" content="گنگ فور بت - بروزترین مرجع پیش بینی مسابقات ورزشی به همراه بهترین ضرایب برای کاربران. دارای کازینوی کامل آنلاین" />
    <meta property="og:site_name" content="Richbet" />
	<meta name="description" content="گنگ فور بت - بروزترین مرجع پیش بینی مسابقات ورزشی. واریز و برداشت در کوتاه ترین زمان. پرداخت کاملا امن" />
	<link href="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/content/main_styles.css" rel="stylesheet"/>
	<link href="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/content/sport_fonts.css" rel="stylesheet"/>
	<link href="<?php echo site_url();?>
casino/templates/css/swal.css" rel="stylesheet"/>
	<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bundles/jquery.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bundles/jquery.chiz.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bundles/jqueryui.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bundles/bootstrap.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bundles/mask.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript">
		var base_url = '<?php echo site_url();?>
';
		var TkStarFreamWork = jQuery;
	<?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo site_url();?>
casino/templates/js/swal.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bundles/updates.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bundles/folds.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bundles/sport.js"><?php echo '</script'; ?>
>
</head>
<body>
	<?php $_smarty_tpl->_subTemplateRender("file:partials/header_menu.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
}
}
