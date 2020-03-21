<?php
/* Smarty version 3.1.31, created on 2020-02-04 17:52:42
  from "C:\laragon\www\ricardo\themes\default\TkStarBet2018\layout\default.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e397e32326816_28137037',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'ae04ff6f3f5e14f0e311f7d13f9b33bbfe0a2a62' => 
    array (
      0 => 'C:\\laragon\\www\\ricardo\\themes\\default\\TkStarBet2018\\layout\\default.tpl',
      1 => 1580771733,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/header.tpl' => 1,
    'file:partials/footer.tpl' => 1,
  ),
),false)) {
function content_5e397e32326816_28137037 (Smarty_Internal_Template $_smarty_tpl) {
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
