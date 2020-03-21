<?php
/* Smarty version 3.1.31, created on 2018-07-11 02:25:39
  from "C:\xampp\htdocs\themes\default\TkStarBet2018\modules\users\set_new_password.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5b452b5b6180e9_55685323',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'a464948860101bc9a402b32dd78fa8f399ac0d1c' => 
    array (
      0 => 'C:\\xampp\\htdocs\\themes\\default\\TkStarBet2018\\modules\\users\\set_new_password.tpl',
      1 => 1531258713,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5b452b5b6180e9_55685323 (Smarty_Internal_Template $_smarty_tpl) {
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
				<h1>بازیابی کلمه عبور</h1>
				<?php echo form_open();?>

					<input type="hidden" value="<?php echo $_smarty_tpl->tpl_vars['user_id']->value;?>
"  name="user_id"/>
					<input type="hidden" value="<?php echo $_smarty_tpl->tpl_vars['reminder_code']->value;?>
" name="reminder_code"/>
					<div class="page-area container inline form-container">
						<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
							<div class="mt15">
								<div class="left form-title mw160">ایمیل حساب کاربری</div>
								<div class="left form-element"><input type="text" style="height: 40px; text-align: center !important;" readonly="readonly" disabled="disabled" class="form-input" value="<?php echo $_smarty_tpl->tpl_vars['email']->value;?>
"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">کلمه عبور جدید</div>
								<div class="left form-element"><input type="password" name="new_password" style="height: 40px; text-align: right !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">تکرار کلمه عبور جدید</div>
								<div class="left form-element"><input type="password" name="re_new_password" style="height: 40px; text-align: right !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160"></div>
								<div class="left form-element" style="text-align: right !important;"><button type="submit" href="javascript:;" class="form-button action-button">بازیابی کلمه عبور</button></div>
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
