<?php
/* Smarty version 3.1.31, created on 2019-03-17 00:12:21
  from "C:\xampp\htdocs\00\themes\default\TkStarBet2018\modules\dashboard\dashboard.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c8d5fadcf2fe3_66619134',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e08b642952d856170043470ce9b83a37e9f7249f' => 
    array (
      0 => 'C:\\xampp\\htdocs\\00\\themes\\default\\TkStarBet2018\\modules\\dashboard\\dashboard.tpl',
      1 => 1545503137,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5c8d5fadcf2fe3_66619134 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_modifier_persian_number')) require_once 'C:\\xampp\\htdocs\\00\\TkStarApplication\\smarty\\plugins\\modifier.persian_number.php';
if (!is_callable('smarty_modifier_price_format')) require_once 'C:\\xampp\\htdocs\\00\\TkStarApplication\\smarty\\plugins\\modifier.price_format.php';
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
					<div class="page-title">حساب کاربری</div>
					<div class="p7 inline center">
						<div class="report">
							<div class="col-md-12 col-sm-12 col-xs-12" style="height: auto !important;">
								<span class="report-title">معرف شما</span>
								<span class="report-data"><?php echo $_smarty_tpl->tpl_vars['referral']->value;?>
</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12" style="height: auto !important;">
								<span class="report-title">شناسه کاربری</span>
								<span class="report-data"><?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['user']->value->id);?>
</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12" style="height: auto !important;">
								<span class="report-title">موجودی فعلی حساب</span>
								<span class="report-data"><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['user']->value->cash);?>
</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12" style="height: auto !important;">
								<span class="report-title">مجموع پیشبینی ها</span>
								<span class="report-data"><?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['totalBetCount']->value);?>
 پیش بینی (<?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['totalStake']->value);?>
)</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12" style="height: auto !important;">
								<span class="report-title">مجموع برد پیش بینی ها</span>
								<span class="report-data"><?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['giftCount']->value);?>
 برد (<?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['totalGift']->value);?>
)</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12" style="height: auto !important;">
								<span class="report-title">مجموع شرط بندی های کازینو</span>
								<span class="report-data"><?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['all_casino_prices_count']->value);?>
 شرط بندی (<?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['all_casino_prices']->value);?>
)</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12" style="height: auto !important;">
								<span class="report-title">مجموع برد شرط بندی های کازینو</span>
								<span class="report-data"><?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['all_win_casino_prices_count']->value);?>
 برد (<?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['all_win_casino_prices']->value);?>
)</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12" style="height: auto !important;">
								<span class="report-title">مجموع واریز های شما به سایت</span>
								<span class="report-data"><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['creditSum']->value);?>
</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12" style="height: auto !important;">
								<span class="report-title">مجموع برداشت ها</span>
								<span class="report-data"><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['withdrawSum']->value);?>
 (<?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['withdrawInSum']->value);?>
 در انتظار پرداخت)</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div><?php }
}
