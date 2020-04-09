<?php
/* Smarty version 3.1.31, created on 2018-12-23 18:45:35
  from "/home/richbet/public_html/themes/admin/default/modules/users/permission_denied.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c1fa697906df2_05959928',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '2f36698416dab982796c32a33bbad8bb5e31b93a' => 
    array (
      0 => '/home/richbet/public_html/themes/admin/default/modules/users/permission_denied.tpl',
      1 => 1519826610,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c1fa697906df2_05959928 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_assets_url')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/function.assets_url.php';
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top">خطای 401.3</h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="box">
                <div class="heading">
                    <h1 class="heading_a"><img src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/img/access_denied.png" alt="" /> دسترسی مجاز نیست</h1>
                </div>
                <div style="border: 1px solid #DDDDDD; background: #F7F7F7; text-align: center; padding: 15px;">شما اجازه ی دسترسی به این صفحه را ندارید. لطفا در صورت لزوم موضوع را با مدیریت در میان بگذارید</div>
            </div>
        </div>
    </div>
</div><?php }
}
