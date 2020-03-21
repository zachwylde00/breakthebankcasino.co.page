<?php
/* Smarty version 3.1.31, created on 2018-12-10 21:01:11
  from "/home/richbet/public_html/themes/default/tkstarbet2018/layout/default.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c0ea2dfd88a98_90313916',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '3698420437d92f2f4cfbb346eabcb69fb4bdcd90' => 
    array (
      0 => '/home/richbet/public_html/themes/default/tkstarbet2018/layout/default.tpl',
      1 => 1529708934,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/header.tpl' => 1,
    'file:partials/footer.tpl' => 1,
  ),
),false)) {
function content_5c0ea2dfd88a98_90313916 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE html>
<html lang="fa">
    <?php $_smarty_tpl->_subTemplateRender("file:partials/header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

	<?php echo $_smarty_tpl->tpl_vars['content']->value;?>

	<?php $_smarty_tpl->_subTemplateRender("file:partials/footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

</html><?php }
}
