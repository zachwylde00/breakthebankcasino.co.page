<?php
/* Smarty version 3.1.31, created on 2019-03-19 03:45:41
  from "/home/cupabet/public_html/themes/default/TkStarBet2018/layout/default.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c9034ad260c91_37597160',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '8035a13fcf8003d30e42ab04d95cd6d2d21f3896' => 
    array (
      0 => '/home/cupabet/public_html/themes/default/TkStarBet2018/layout/default.tpl',
      1 => 1529725134,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/header.tpl' => 1,
    'file:partials/footer.tpl' => 1,
  ),
),false)) {
function content_5c9034ad260c91_37597160 (Smarty_Internal_Template $_smarty_tpl) {
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
