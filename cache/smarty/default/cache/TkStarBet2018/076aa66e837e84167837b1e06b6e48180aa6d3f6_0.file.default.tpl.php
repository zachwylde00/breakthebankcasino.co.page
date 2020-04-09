<?php
/* Smarty version 3.1.31, created on 2018-10-25 17:56:05
  from "/home/betpack/domains/betpack.cf/public_html/themes/default/TkStarBet2018/layout/default.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bd1d27dad3ac3_86052733',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '076aa66e837e84167837b1e06b6e48180aa6d3f6' => 
    array (
      0 => '/home/betpack/domains/betpack.cf/public_html/themes/default/TkStarBet2018/layout/default.tpl',
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
function content_5bd1d27dad3ac3_86052733 (Smarty_Internal_Template $_smarty_tpl) {
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
