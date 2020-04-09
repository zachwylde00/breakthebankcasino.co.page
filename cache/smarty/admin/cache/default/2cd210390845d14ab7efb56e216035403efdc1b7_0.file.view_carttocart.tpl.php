<?php
/* Smarty version 3.1.31, created on 2018-12-21 21:34:20
  from "/home/richbet/public_html/themes/admin/default/modules/users/users/view_carttocart.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c1d2b249bca30_61421175',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '2cd210390845d14ab7efb56e216035403efdc1b7' => 
    array (
      0 => '/home/richbet/public_html/themes/admin/default/modules/users/users/view_carttocart.tpl',
      1 => 1545415418,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c1d2b249bca30_61421175 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
if (!is_callable('smarty_modifier_con')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
    کارت به کارت ها
        </h3>
    <div class="uk-width-medium-2-3 uk-margin-top uk-margin-bottom">
        <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/users/users/carttocart');?>
" class="uk-button btn-breadcrumb">بازگشت</a>
        <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/users/users/carttocart-status/',$_smarty_tpl->tpl_vars['Row']->value['id']);?>
" class="uk-button btn-<?php if ($_smarty_tpl->tpl_vars['Row']->value['status'] == 1) {?>danger<?php } else { ?>success<?php }?>">ثبت بعنوان <?php echo $_smarty_tpl->tpl_vars['status_label']->value;?>
</a>
        <?php if ($_smarty_tpl->tpl_vars['Row']->value['status'] == 0) {?>
            <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/users/users/carttocart-status-q/',$_smarty_tpl->tpl_vars['Row']->value['id']);?>
" class="uk-button btn-primary">در صف پرداخت </a>
        <?php }?>
    </div>
</div><?php }
}
