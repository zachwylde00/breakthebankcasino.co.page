<?php
/* Smarty version 3.1.31, created on 2018-06-26 01:48:38
  from "C:\xampp\htdocs\themes\default\TkStarBet2018\modules\users\changePass.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5b315c2ebae3d5_07618255',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'ef6c1ab3658499bde9d2fed0b53a92972704530f' => 
    array (
      0 => 'C:\\xampp\\htdocs\\themes\\default\\TkStarBet2018\\modules\\users\\changePass.tpl',
      1 => 1529961516,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5b315c2ebae3d5_07618255 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\function.site_url.php';
?>
<div class="container">
	<?php $_prefixVariable1=@constant('get_message');
if (!empty($_prefixVariable1)) {?>
		<?php $_smarty_tpl->_assignInScope('message_details', (object)@constant('get_message'));
?>
		<?php if (!empty($_smarty_tpl->tpl_vars['message_details']->value->message)) {?>
			<?php if ($_smarty_tpl->tpl_vars['message_details']->value->type == 'fail') {?>
				<?php $_smarty_tpl->_assignInScope('alert_type', 'alert-danger');
?>
			<?php } elseif ($_smarty_tpl->tpl_vars['message_details']->value->type == 'warning') {?>
				<?php $_smarty_tpl->_assignInScope('alert_type', 'alert-warning');
?>
			<?php } elseif ($_smarty_tpl->tpl_vars['message_details']->value->type == 'success') {?>
				<?php $_smarty_tpl->_assignInScope('alert_type', 'alert-success');
?>
			<?php }?>
			<div class="row"><div style="text-align: right !important; width: 100% !important; margin-top: 10px !important; margin-bottom: -30px !important;"><div class="alert <?php echo $_smarty_tpl->tpl_vars['alert_type']->value;?>
" style="display: block !important;"><?php echo $_smarty_tpl->tpl_vars['message_details']->value->message;?>
</div></div></div>
		<?php }?>
	<?php }?>
	<div class="page-content light">
		<div class="ph15"></div>
		<div class="inline container">
			<?php $_smarty_tpl->_subTemplateRender("file:partials/dashboard_menu.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

			<div class="left static-content">
				<div class="page-area container inline form-container">
					<div class="page-title">مشخصات کاربری</div>
                    <section class="signupbox">
                        <form action="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/changePass" method="post">
                            <div class="signupform halfwidth">
                                <div>
                                    <input class="input id" data-val="true" data-val-required="وارد کردن کلمه عبور فعلی الزامی است." id="OldPassword" name="OldPassword" placeholder="کلمه عبور فعلی" type="password">
                                    <span class="field-validation-valid error_message" data-valmsg-for="OldPassword" data-valmsg-replace="true"></span>
                                </div>
                                <div>
                                    <input class="input password" data-val="true" data-val-length="کلمه عبور جدید باید حداقل 6 حرف طول داشته باشد." data-val-length-max="100" data-val-length-min="6" data-val-required="وارد کردن کلمه عبور جدید الزامی است." id="NewPassword" name="NewPassword" placeholder="کلمه عبور جدید" type="password">
                                    <span class="field-validation-valid error_message" data-valmsg-for="NewPassword" data-valmsg-replace="true"></span>
                                </div>
                                <div class="remeberme">
                                    <input class="input password" data-val="true" data-val-equalto="کلمه عبور جدید و تکرار کلمه عبور جدید با هم یکسان نیستند." data-val-equalto-other="*.NewPassword" id="ConfirmPassword" name="ConfirmPassword" placeholder="تکرار کلمه عبور جدید" type="password">
                                    <span class="field-validation-valid error_message" data-valmsg-for="ConfirmPassword" data-valmsg-replace="true"></span>
                                </div>
                                <div>
                                    <input name="submitbtn" class="btn btn-lg btn-primary floatright" type="submit" value="تغییر کلمه عبور">
                                </div>
                            </div>
                        </form>                        </section>
                </div>
            </div>
        </div>
    </div>
</div><?php }
}
