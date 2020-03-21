<?php
/* Smarty version 3.1.31, created on 2019-03-17 01:52:07
  from "C:\xampp\htdocs\00\themes\default\TkStarBet2018\layout\default.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c8d770f9eefe5_13398287',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'a1a2aba9d517e96ed8e53d152acc18f90c27fffb' => 
    array (
      0 => 'C:\\xampp\\htdocs\\00\\themes\\default\\TkStarBet2018\\layout\\default.tpl',
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
function content_5c8d770f9eefe5_13398287 (Smarty_Internal_Template $_smarty_tpl) {
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
