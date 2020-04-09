<?php
/* Smarty version 3.1.31, created on 2020-01-27 16:42:05
  from "/home/gang4bet/public_html/themes/default/TkStarBet2018/modules/users/login.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e2ee1a5c13479_20327569',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '33354ab2c78ceeb0baa94fdb63db8f2e1e4f7b05' => 
    array (
      0 => '/home/gang4bet/public_html/themes/default/TkStarBet2018/modules/users/login.tpl',
      1 => 1530066120,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e2ee1a5c13479_20327569 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
?>
<div class="register">
    <div class="container" align="center">
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
				<div class="row"><div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12"><div style="text-align: right !important; width: 100% !important; margin-top: 10px !important; margin-bottom: -30px !important;"><div class="alert <?php echo $_smarty_tpl->tpl_vars['alert_type']->value;?>
" style="display: block !important;"><?php echo $_smarty_tpl->tpl_vars['message_details']->value->message;?>
</div></div></div></div>
			<?php }?>
		<?php }?>
		<div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
			<section class="signupbox">
				<h1>وارد حساب کاربری خود شوید</h1>
				<?php echo form_open();?>

					<div class="page-area container inline form-container">
						<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
							<div class="mt15">
								<div class="left form-title mw160">ایمیل</div>
								<div class="left form-element"><input type="text" name="email" style="height: 40px; text-align: right !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">کلمه عبور</div>
								<div class="left form-element"><input type="password" name="password" style="height: 40px; text-align: right !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160"></div>
								<div class="left form-element" style="text-align: right !important;"><button type="submit" href="javascript:;" class="form-button action-button">ورود</button> <div class="pull-right"><input type="checkbox" id="RememberMe" name="remember_me" value="1" /> مرا به خاطر بسپار</div></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160"></div>
								<div class="left form-element" style="text-align: right !important;">
									<a class="btn form-button btn-block" href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/resetPassword">کلمه عبور خود را فراموش کرده ام !</a>
									<a class="btn form-button btn-block" href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/register">ساخت حساب کاربری جدید</a>
								</div>
								<div class="clear"></div>
							</div>
						</div>
					</div>
				<?php echo form_close();?>
    
			</section>
		</div>
    </div>
</div><?php }
}
