<?php
/* Smarty version 3.1.31, created on 2018-11-19 11:10:44
  from "/home/richbet/domains/richbet.xyz/public_html/themes/default/TkStarBet2018/modules/users/register.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bf268fca37e26_13032010',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '91894e78857ba321db71949f86355a53b0124efd' => 
    array (
      0 => '/home/richbet/domains/richbet.xyz/public_html/themes/default/TkStarBet2018/modules/users/register.tpl',
      1 => 1529981512,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5bf268fca37e26_13032010 (Smarty_Internal_Template $_smarty_tpl) {
echo '<script'; ?>
 type="text/javascript">
	document.addEventListener("DOMContentLoaded", function () {
		new IMask(document.getElementById('mobile'), {
			mask: '+(98) 000 000 0000'
		});
	});
<?php echo '</script'; ?>
>
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
				<h1>برای شروع ثبت نام کنید</h1>
				<?php echo form_open($_smarty_tpl->tpl_vars['action']->value);?>

					<div class="page-area container inline form-container">
						<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
							<div class="mt15">
								<div class="left form-title mw160">نام</div>
								<div class="left form-element"><input type="text" name="first_name" style="height: 40px; text-align: right !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">نام خانوادگی</div>
								<div class="left form-element"><input type="text" name="last_name" style="height: 40px; text-align: right !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">ایمیل</div>
								<div class="left form-element"><input type="text" name="email" style="height: 40px; text-align: left !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">شماره موبایل</div>
								<div class="left form-element"><input type="text" id="mobile" name="mobile" style="height: 40px; direction: ltr !important; text-align: left !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">کلمه عبور</div>
								<div class="left form-element"><input type="password" name="password" style="height: 40px; text-align: right !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">تکرار کلمه عبور</div>
								<div class="left form-element"><input type="password" name="confirmPassword" style="height: 40px; text-align: right !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160"></div>
								<div class="left form-element" style="text-align: right !important;"><button type="submit" href="javascript:;" class="form-button action-button">ثبت نام</button></div>
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
