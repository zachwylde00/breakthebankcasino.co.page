<?php
/* Smarty version 3.1.31, created on 2019-03-17 01:44:54
  from "C:\xampp\htdocs\00\themes\default\TkStarBet2018\modules\payment\credit.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c8d755ed188c7_01272651',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '9f56228e17c4f2326dd47e13d91370ba64324535' => 
    array (
      0 => 'C:\\xampp\\htdocs\\00\\themes\\default\\TkStarBet2018\\modules\\payment\\credit.tpl',
      1 => 1545504673,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5c8d755ed188c7_01272651 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_assets_url')) require_once 'C:\\xampp\\htdocs\\00\\TkStarApplication\\smarty\\plugins\\function.assets_url.php';
if (!is_callable('smarty_function_site_url')) require_once 'C:\\xampp\\htdocs\\00\\TkStarApplication\\smarty\\plugins\\function.site_url.php';
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
	<?php echo '<script'; ?>
 type="text/javascript">
		TkStarFreamWork(document).ready(function(){
			TkStarFreamWork('#pay_ev_pm').click(function(){
				TkStarFreamWork('#pay_title').html('پرداخت از طریق پرفکت مانی');
				TkStarFreamWork('#type').val('perfect_money');
				TkStarFreamWork('#main_form').show(0);
				TkStarFreamWork('#cart_to_cart_form').hide(0);
			});
			TkStarFreamWork('#pay_cart').click(function(){
				TkStarFreamWork('#pay_title').html('پرداخت از طریق کارت به کارت');
				TkStarFreamWork('#type').val('cart');
				TkStarFreamWork('#cart_to_cart_form').show(0);
				TkStarFreamWork('#main_form').hide(0);
			});
			TkStarFreamWork('#pay_online').click(function(){
				TkStarFreamWork('#pay_title').html('پرداخت از طریق درگاه بانکی');
				TkStarFreamWork('#type').val('online');
				TkStarFreamWork('#main_form').show(0);
				TkStarFreamWork('#cart_to_cart_form').hide(0);
			});
		});
	<?php echo '</script'; ?>
>
	<div class="page-content light" style="width: auto !important; margin-right: -15px !important; margin-left: -15px !important;">
		<div class="ph15"></div>
		<div class="inline container">
			<?php $_smarty_tpl->_subTemplateRender("file:partials/dashboard_menu.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

			<div class="left static-content">
				<div class="page-area container inline form-container" align="center">
					<div class="page-title">شارژ حساب کاربری</div>
                    <div class="row">
						<div class="col-lg-12">
							<div class="topup-options">
								<div class="row">
									<div class="col-lg-6">
										<a id="pay_cart" href="javascript:;" class="item-2-box">
											<div class="image" style="background-image: url(<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/1524077801-2203-5418.jpg"></div>
											<div class="title"><div>پرداخت از طریغ کارت به کارت</div></div>
										</a>
									</div>
									<div class="col-lg-6">
										<a id="pay_ev_pm" href="javascript:;" class="item-2-box">
											<div class="image" style="background-image: url(<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/1524077764-8155-9766.jpg"></div>
											<div class="title"><div>پرداخت از طریق پرفکت مانی</div></div>
										</a>
									</div>
									<div class="col-lg-6">
										<a id="pay_online" href="javascript:;" class="item-2-box">
											<div class="image" style="background-image: url(<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/easy-pay1-5.gif"></div>
											<div class="title"><div>پرداخت آنلاین درگاه بانکی</div></div>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-12">
							<div class="topup-form" id="main_form" style="display:none;">
								<section class="sitebox">
									<div class="normal-form">
										<h2 id="pay_title"></h2>
										<form action="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
payment/credit" method="post">
											<input type="hidden" value="" id="type" name="type" />
											<div class="siteform">
												<div class="amountinput">
													<label class="label" for="evoucher_activation_code">مبلغ</label>
													<input autocomplete="off" class="input ltrinput centre" name="amount" type="text" value="">
												</div>
												<input class="btn btn-primary floatright" type="submit" value="پرداخت">
											</div>
										</form>                     
									</div>
								</section>
							</div>
						</div>
						<div class="col-lg-12">
							<div class="topup-form" id="cart_to_cart_form" style="display:none;">
								<section class="sitebox">
									<div class="normal-form">
										<h2 id="pay_title">شارژ حساب با کارت به کارت</h2>
										<form action="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
payment/credit" method="post">
											<input type="hidden" value="" id="type" name="type" />
											<div class="alert alert-info" style="display: block !important;">ابتدا مبلغ مورد نظر خود را به شماره کارت زیر انتقال داده سپس چهار رقم آخر کارت خود را همراه با شماره پیگیری فیش واریزی وارد و ارسال کنید</div>
											<div class="siteform">
												<div class="amountinput">
													<label class="label" style="font-weight: bold;color: #3c3c3c;font-size: 15px;" for="Amount">شماره کارت جهت واریز</label>
													<input class="input ltrinput centre" style="color: #000;font-size: 15px;" type="text" value="5892-1011-6735-1549" disabled>
													<label class="label" style="font-weight: bold;color: #000;font-size: 15px;" for="Amount">نام صاحب حساب</label>
													<input class="input ltrinput centre" style="color: #323131;font-size: 15px;" type="text" value="جمال اسمعیلی" disabled>
													<label class="label" style="color: #4ea24e;" for="Amount">مبلغ به تومان</label>
													<input autocomplete="off" class="input ltrinput centre" data-val="true" data-val-number="The field مبلغ به تومان must be a number." data-val-range="حداقل مبلغ افزایش موجودی ۱۰۰۰ تومان است." data-val-range-max="2147483647" data-val-range-min="1000" data-val-regex="مبلغ به تومان باید با فرمت درست وارد شود. " data-val-regex-pattern="^\d+$" data-val-required="وارد کردن مبلغ به تومان الزامی است." id="Amount" name="amount" type="text" value="" required>
													<span class="field-validation-valid error_message" data-valmsg-for="Amount" data-valmsg-replace="true"></span>
													<label class="label" style="color: #4ea24e;" for="Amount">چهار رقم اخر شماره کارت</label>
													<input autocomplete="off" class="input ltrinput centre" name="card4" maxlength="4" type="text" value="" required>
													<label class="label" style="color: #4ea24e;" for="Amount">زمان پرداخت</label>
													<input autocomplete="off" class="input ltrinput centre" name="time" maxlength="5" type="text" value=":" required>
													<label class="label" style="color: #4ea24e;" for="Amount">کد پیگیری</label>
													<input autocomplete="off" class="input ltrinput centre" name="paygiricod" type="text" value="" required>
												</div>
												<input class="btn btn-primary floatright" type="submit" value="پرداخت">
											</div>
										</form>                     
									</div>
								</section>
							</div>
						</div>
						
					</div>
                </div>
            </div>
        </div>
    </div>
</div><?php }
}
