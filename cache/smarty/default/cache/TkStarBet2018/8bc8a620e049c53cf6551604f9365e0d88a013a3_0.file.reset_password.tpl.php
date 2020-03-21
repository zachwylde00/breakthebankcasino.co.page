<?php
/* Smarty version 3.1.31, created on 2018-10-15 15:31:52
  from "C:\xampp\htdocs\themes\default\TkStarBet2018\modules\users\reset_password.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bc481b0d16bc2_97102030',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '8bc8a620e049c53cf6551604f9365e0d88a013a3' => 
    array (
      0 => 'C:\\xampp\\htdocs\\themes\\default\\TkStarBet2018\\modules\\users\\reset_password.tpl',
      1 => 1529981505,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5bc481b0d16bc2_97102030 (Smarty_Internal_Template $_smarty_tpl) {
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

					<div class="page-area container inline form-container">
						<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
							<div class="mt15">
								<div class="left form-title mw160">ایمیل</div>
								<div class="left form-element"><input type="text" name="email" style="height: 40px; text-align: right !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160"></div>
								<div class="left form-element" style="text-align: right !important;"><button type="submit" href="javascript:;" class="form-button action-button">بازیابی</button></div>
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
