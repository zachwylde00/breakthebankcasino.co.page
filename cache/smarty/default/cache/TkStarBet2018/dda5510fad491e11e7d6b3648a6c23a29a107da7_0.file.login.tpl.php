<?php
/* Smarty version 3.1.31, created on 2020-03-05 15:12:58
  from "C:\laragon\www\gang4bet\themes\default\TkStarBet2018\modules\users\login.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e60e5c2b23f12_95795366',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'dda5510fad491e11e7d6b3648a6c23a29a107da7' => 
    array (
      0 => 'C:\\laragon\\www\\gang4bet\\themes\\default\\TkStarBet2018\\modules\\users\\login.tpl',
      1 => 1583239532,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e60e5c2b23f12_95795366 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\function.site_url.php';
?>
<div class="register">
    <div class="container back-main" align="center">
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
			<section class="signupbox mt10">
				<h1>ورود به حساب کاربری</h1>
				<?php echo form_open();?>

					<div class="page-area container inline form-container">
						<div class="p30 inline" align="right" style=" text-align: right !important; width: 100% !important;">
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
								<div class="left form-element" style="text-align: right !important;"><button type="submit" href="javascript:;" class="form-button" style="width:100px;">ورود</button> <div class="pull-right"><input  style="margin-top:10px;" type="checkbox" id="RememberMe" name="remember_me" value="1" /> مرا به خاطر بسپار</div></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160"></div>
								<div class="left form-element" style="text-align: center !important;">
									<a class="btn form-button btn-block forgot-button" href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/resetPassword">کلمه عبور خود را فراموش کرده ام !</a>
									<a class="btn form-button btn-block forgot-button" href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
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
