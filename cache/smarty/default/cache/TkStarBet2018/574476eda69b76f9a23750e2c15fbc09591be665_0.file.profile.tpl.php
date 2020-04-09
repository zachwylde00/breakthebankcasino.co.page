<?php
/* Smarty version 3.1.31, created on 2018-12-24 13:55:21
  from "/home/richbet/public_html/themes/default/TkStarBet2018/modules/users/profile.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c20b411ddd7b0_53429327',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '574476eda69b76f9a23750e2c15fbc09591be665' => 
    array (
      0 => '/home/richbet/public_html/themes/default/TkStarBet2018/modules/users/profile.tpl',
      1 => 1545503407,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5c20b411ddd7b0_53429327 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
if (!is_callable('smarty_modifier_con')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
?>
<div class="container" style="width: 100% !important;">
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
	<div class="page-content light" style="width: auto !important; margin-right: -15px !important; margin-left: -15px !important;">
		<div class="ph15"></div>
		<div class="inline container">
			<?php $_smarty_tpl->_subTemplateRender("file:partials/dashboard_menu.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

			<div class="left static-content">
				<div class="page-area container inline form-container">
					<div class="page-title">مشاهده / ویرایش پروفایل</div>
					<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
						<form action="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/changeProfile" method="post">
							<div class="mt15">
								<div class="left form-title mw160">ایمیل</div>
								<div class="left form-element"><input type="text" value="<?php echo $_smarty_tpl->tpl_vars['my']->value->email;?>
" readonly="readonly" disabled="disabled" style="height: 40px; text-align: center !important; direction: ltr !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">نام و نام خانوادگی</div>
								<div class="left form-element"><input type="text" value="<?php echo smarty_modifier_con($_smarty_tpl->tpl_vars['my']->value->first_name,' ',$_smarty_tpl->tpl_vars['my']->value->last_name);?>
" readonly="readonly" disabled="disabled" style="height: 40px; text-align: center !important; direction: rtl !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">شماره موبایل</div>
								<div class="left form-element"><input type="text" value="<?php echo $_smarty_tpl->tpl_vars['my_mobile']->value;?>
" readonly="readonly" disabled="disabled" style="height: 40px; text-align: center !important; direction: ltr !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160"></div>
								<div class="left form-element">
									<div class="alert alert-info" style="text-align: right !important; direction: rtl !important; display: block !important;">
										<div class="row">
											<div class="col-lg-1 col-sm-12 col-xs-12" align="center"><i class="fa fa-3x fa-info"></i></div>
											<div class="col-md-11 col-sm-12 col-xs-12">نام مستعار چیست ؟ نام مستعار در بازی های آنلاین به بازیکنان دیگر نمایش داده میشود . در صورتی که نام مستعار توسط شما وارد نشده باشد, ایمیل شما نمایش داده خواهد شد</div>
										</div>
									</div>
								</div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">نام مستعار</div>
								<div class="left form-element"><input type="text" value="<?php echo $_smarty_tpl->tpl_vars['my']->value->username;?>
" name="username" style="height: 40px; text-align: right !important; direction: ltr !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">آخرین ورود</div>
								<div class="left form-element"><input type="text" value="<?php ob_start();
echo $_smarty_tpl->tpl_vars['my']->value->last_login;
$_prefixVariable2=ob_get_clean();
echo Miladr\Jalali\jDateTime::date('l d F Y ساعت H:i:s',strtotime($_prefixVariable2));?>
" readonly="readonly" disabled="disabled" style="height: 40px; text-align: center !important; direction: ltr !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-element" style="margin-right: 59px;"><button type="submit" href="javascript:;" class="form-button action-button">ویرایش</button></div>
								<div class="clear"></div>
							</div>
                        </form>
					</div>
                </div>
				<div class="page-area container inline form-container">
					<div class="page-title">تغییر کلمه عبور</div>
					<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
						<form action="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/profile" method="post">
							<div class="mt15">
								<div class="left form-title mw160">کلمه عبور فعلی</div>
								<div class="left form-element"><input type="password" value="" name="current_password" autocomplete="off" style="height: 40px !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">کلمه عبور جدید</div>
								<div class="left form-element"><input type="password" value="" name="new_password" autocomplete="off" style="height: 40px !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">تکرار کلمه عبور جدید</div>
								<div class="left form-element"><input type="password" value="" name="re_new_password" autocomplete="off" style="height: 40px !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-element" style="margin-right: 59px;"><button type="submit" href="javascript:;" class="form-button action-button">تغییر کلمه عبور</button></div>
								<div class="clear"></div>
							</div>
                        </form>
					</div>
                </div>
            </div>
        </div>
    </div>
</div><?php }
}
