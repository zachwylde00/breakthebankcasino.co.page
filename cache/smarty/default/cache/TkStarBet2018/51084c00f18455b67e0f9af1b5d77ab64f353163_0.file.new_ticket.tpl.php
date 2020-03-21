<?php
/* Smarty version 3.1.31, created on 2018-10-14 20:40:00
  from "C:\xampp\htdocs\themes\default\TkStarBet2018\modules\contacts\new_ticket.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bc378686294c3_76205762',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '51084c00f18455b67e0f9af1b5d77ab64f353163' => 
    array (
      0 => 'C:\\xampp\\htdocs\\themes\\default\\TkStarBet2018\\modules\\contacts\\new_ticket.tpl',
      1 => 1536848082,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5bc378686294c3_76205762 (Smarty_Internal_Template $_smarty_tpl) {
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
					<div class="page-title">ارسال تیکت جدید <span class="pull-right"><a style="margin-top: -2px !important;" class="btn btn-sm btn-danger" href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
contacts/tickets/ticket-list">لیست تیکت ها</a></span></div>
					<div class="p7 inline center" style="width: 100% !important;">
						<form action="<?php echo $_smarty_tpl->tpl_vars['action']->value;?>
" method="POST">
							<div class="support_form createform" style="display: block;">
								<div class="signupform">
									<div class="row" style="padding: 0 !important;">
										<div class="col-md-8 col-sm-12 col-xs-12">
											<div class="row" style="padding: 0 !important;">
												<div class="col-md-3 col-sm-12 col-xs-12" style="margin-top: 15px !important;">موضوع تیکت</div>
												<div class="col-md-9 col-sm-12 col-xs-12">
													<select class="input" name="subject" type="text">
														<option value="" disabled="disabled" selected="selected">موضوع تیکت را انتخاب کنید</option>
														<option value="charging">شارژ حساب کاربری</option>
														<option value="card_in_card_addfounds">شارژ حساب از طریق کارت به کارت</option>
														<option value="pm_addfounds">شارژ حساب از طریق پرفکت مانی / ووچر پرفکت مانی</option>
														<option value="forgot_password_or_email">فراموشی رمز عبور یا ایمیل</option>
														<option value="betting_form">فرم پیش بینی</option>
														<option value="online_casino">کازینو آنلاین</option>
														<option value="feedbacks">انتقادات و پیشنهادات</option>
														<option value="buy_script">خرید اسکریپت سایت پیش بینی</option>
														<option value="other_subject">سایر موضوعات</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<div class="row" style="padding: 0 !important;">
										<div class="col-md-8 col-sm-12 col-xs-12">
											<div class="row" style="padding: 0 !important;">
												<div class="col-md-3 col-sm-12 col-xs-12" style="margin-top: 15px !important;">متن تیکت</div>
												<div class="col-md-9 col-sm-12 col-xs-12"><textarea style="min-height: 175px !important;resize: vertical !important;" class="input textarea" cols="20" name="content" placeholder="متن تیکت" rows="2"></textarea></div>
											</div>
										</div>
									</div>
									<div class="row" style="padding: 0 !important;">
										<div class="col-md-8 col-sm-12 col-xs-12">
											<div class="row" style="padding: 0 !important;">
												<div class="col-md-3 col-sm-12 col-xs-12"></div>
												<div class="col-md-9 col-sm-12 col-xs-12"><input class="btn btn-lg btn-danger floatright" value="ارسال" type="submit"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>		  
					</div>
					<div class="row" style="color: white !important;"><div class="alert alert-info" style="display: block;">کاربران گرامی توجه داشته باشند، برای هر مورد یک تیکت ایجاد نمایید و تا حل شدن کامل مشکل، تیکت مربوطه را ادامه دهید و جهت تسریع در رفع مشکلات کاربری لطفا از ایجاد تیکت های جدید و متنوع اجتناب فرمایید</div></div>
				</div>
			</div>
		</div>
	</div>
</div><?php }
}
