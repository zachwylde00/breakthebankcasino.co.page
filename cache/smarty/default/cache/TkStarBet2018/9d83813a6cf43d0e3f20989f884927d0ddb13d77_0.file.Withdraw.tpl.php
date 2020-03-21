<?php
/* Smarty version 3.1.31, created on 2018-10-15 15:53:05
  from "C:\xampp\htdocs\themes\default\TkStarBet2018\modules\users\Withdraw.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bc486a9ed3b72_24175575',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '9d83813a6cf43d0e3f20989f884927d0ddb13d77' => 
    array (
      0 => 'C:\\xampp\\htdocs\\themes\\default\\TkStarBet2018\\modules\\users\\Withdraw.tpl',
      1 => 1536090949,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5bc486a9ed3b72_24175575 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_jdate')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\function.jdate.php';
if (!is_callable('smarty_modifier_price_format')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\modifier.price_format.php';
if (!is_callable('smarty_function_site_url')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\function.site_url.php';
if (!is_callable('smarty_function_assets_url')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\function.assets_url.php';
echo '<script'; ?>
 type="text/javascript">
	<?php if ($_smarty_tpl->tpl_vars['withdraw_type']->value == 'rial_iran') {?>
	document.addEventListener("DOMContentLoaded", function () {
		new IMask(document.getElementById('sheba'), {
			mask: '(IR)00 - 0000 - 0000 - 0000 - 0000 - 0000 - 00'
		});
		new IMask(document.getElementById('card_number'), {
			mask: '0000 - 0000 - 0000 - 0000'
		});
	});
	String.prototype.reverse = function () {
		return this.split('').reverse().join('');
	}
	$(document).ready(function(){
		function reformatText(input) {        
			var x = input.val();
			x = x.replace(/,/g, '');
			x = x.reverse();
			x = x.replace(/.../g, function (e) {
				return e + ',';
			});
			x = x.reverse();
			x = x.replace(/^,/, '');
			input.val(x);
		}
		$('#amount').on('keyup keydown click change', function(){
			reformatText($(this));
		});
		$('#bank_name').change(function(){
			var $this_value = $(this).val().trim().toString();
			if($this_value == 'saman'){
				$('#saman_bank_description').slideDown();
				$('#account_number_div').slideDown();
			}else{
				$('#saman_bank_description').slideUp();
				$('#account_number_div').slideUp();
			}
		});
	});
	<?php } elseif ($_smarty_tpl->tpl_vars['withdraw_type']->value == 'dollar_perfect_money') {?>
	String.prototype.reverse = function () {
		return this.split('').reverse().join('');
	}
	$(document).ready(function(){
		function reformatText(input) {        
			var x = input.val();
			x = x.replace(/,/g, '');
			x = x.reverse();
			x = x.replace(/.../g, function (e) {
				return e + ',';
			});
			x = x.reverse();
			x = x.replace(/^,/, '');
			input.val(x);
		}
		$('#amount').on('keyup keydown click change', function(){
			reformatText($(this));
			var $amount = $(this).val().trim().toString();
			$amount = $amount.replace(/[^0-9]/g, '');
			$dollar_price = $('#dollar_price').val().trim().toString();
			$amount = $amount / $dollar_price;
			$amount = $amount.toFixed(2);
			$amount = $amount.toString();
			$amount_split = $amount.split('.');
			$amount = $amount_split[0];
			$amount = $amount.replace(/,/g, '');
			$amount = $amount.reverse();
			$amount = $amount.replace(/.../g, function ($a) {
				return $a + ',';
			});
			$amount = $amount.reverse();
			$amount = $amount.replace(/^,/, '');
			$('#show_dollar').val($amount + '.' + $amount_split[1] + ' دلار');
		});
	});
	<?php }
echo '</script'; ?>
>
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
					<div class="page-title">درخواست جایزه</div>
					<?php if ($_smarty_tpl->tpl_vars['withdraw_type']->value == 'rial_iran') {?>
					<div class="withdraw-description" style="margin-bottom: 20px !important; line-height: 40px !important; font-size: 15px !important; text-align: right !important;">
						<span><text style="font-weight: bold !important;"><font color="red">توجه* : مشخصات حساب بانکی باید مطابق با اطلاعات حساب کاربری شما باشد در غیر این صورت پرداخت انجام نخواهد شد</font></span><br />
						<span>با توجه به قوانین جدید بانکی زمان واریز بین ۲۴ تا ۴۸ ساعت کاری می باشد</span><br />
						<span>حداقل مبلغ قابل برداشت : <?php echo number_format(50000);?>
 تومان</span><br />
						<span>حداکثر مبلغ قابل برداشت : <?php echo number_format(50000000);?>
 تومان</span><br />
						<span>عملیات پایا در روزهای جمعه و تعطیلات رسمی توسط بانک انجام نمی شود</span><br />
					</div>
					<div class="withdraw-description alert alert-danger" id="saman_bank_description" style="margin-top: 15px !important; line-height: 40px !important; font-size: 15px !important; text-align: right !important;"><span>پرداخت های بانک سامان بین 2 الی 4 ساعت انجام میشود</span></div>
					<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
						<div class="">
							<div class="left form-title mw160 c-main">موجودی</div>
							<div class="left form-element fs16 mt8" style="text-align: right !important; direction: rtl !important;"><span class="bold"><?php echo number_format($_smarty_tpl->tpl_vars['cash']->value);?>
</span> تومان</div>
							<div class="clear"></div>
						</div>
						<div class="mt15">
							<div class="left form-title mw160 c-main">موجودی قابل برداشت</div>
							<div class="left form-element fs16 mt8" style="text-align: right !important; direction: rtl !important;"><span class="bold"><?php echo number_format($_smarty_tpl->tpl_vars['cash']->value);?>
</span> تومان</div>
							<div class="clear"></div>
						</div>
						<form action="<?php echo $_smarty_tpl->tpl_vars['action']->value;?>
" method="post">
							<div class="mt15">
								<div class="left form-title mw160">نام و نام خانوادگی</div>
								<div class="left form-element"><input type="text" readonly="readonly" disabled="disabled" value="<?php echo $_smarty_tpl->tpl_vars['my_name']->value;?>
" style="height: 40px; text-align: center !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">مبلغ</div>
								<div class="left form-element"><input type="text" style="height: 40px !important; direction: ltr !important;" id="amount" name="amount" class="form-input text-money-format"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">نام بانک</div>
								<div class="left form-element">
									<select id="bank_name" name="bank_name" style="height: 40px !important;" class="form-input user-form-data">
										<option value="">لطفا نام بانک خود را انتخاب کنید</option>
										<option value="saman">بانک سامان</option>
										<option value="meli">بانک ملی</option>
										<option value="melat">بانک ملت</option>
										<option value="pasargad">بانک پاسارگاد</option>
										<option value="tejarat">بانک تجارت</option>
										<option value="saderat">بانک صادرات</option>
										<option value="sepah">بانک سپه</option>
										<option value="parsian">بانک پارسیان</option>
										<option value="ayande">بانک آینده</option>
										<option value="sarmaye">بانک سرمایه</option>
										<option value="keshavarzi">بانک کشاورزی</option>
										<option value="ghavamin">بانک قوامین</option>
										<option value="eghtesad_novin">بانک اقتصاد نوین</option>
										<option value="maskan">بانک مسکن</option>
										<option value="dey">بانک دِی</option>
										<option value="shahr">بانک شهر</option>
										<option value="refah">بانک رفاه</option>
										<option value="ansar">بانک انصار</option>
										<option value="sina">بانک سینا</option>
									</select>
								</div><br><br>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">شماره شبا</div>
								<div class="left form-element">
									<input type="text" style="height: 40px !important; direction: ltr !important;" id="sheba" name="sheba" class="form-input user-form-data text-format" value="">
								</div>
								<div class="clear"></div>
							</div>
							<div id="account_number_div" style="display: none;" class="mt15">
								<div class="left form-title mw160">شماره حساب</div>
								<div class="left form-element">
									<input type="text" style="height: 40px !important; direction: ltr !important;" id="account_number" name="account_number" class="form-input user-form-data text-format" value="">
								</div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">شماره کارت</div>
								<div class="left form-element">
									<input type="text" style="height: 40px !important; direction: ltr !important;" id="card_number" name="card_number" class="form-input user-form-data text-format" value="">
								</div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-element" style="margin-right: 59px;">
									<button href="javascript:;" class="form-button action-button">برداشت جایزه</button>
								</div>
								<div class="clear"></div>
							</div>
						</form>
                        <section class="formbox row_100 clearfix" style="margin-top: 30px !important;">
                            <div class="support_messages" style="display: block;">
                                <table class="leaguetable support">
									<thead>
                                        <tr>
                                            <th style="width: 25%; text-align: center !important;">شناسه درخواست</th>
                                            <th style="width: 25%; text-align: center !important;">تاریخ درخواست</th>
                                            <th style="width: 25%; text-align: center !important;">مبلغ درخواستی</th>
                                            <th style="width: 25%; text-align: center !important;">وضعیت</th>
                                        </tr>
									</thead>
                                    <tbody>
                                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['withdrawList']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
										<tr>
											<td style="width: 25%; text-align: center !important;"><?php echo $_smarty_tpl->tpl_vars['val']->value->id;?>
</td>
											<td style="width: 25%; text-align: center !important;"><?php echo smarty_function_jdate(array('format'=>'l d F Y ساعت H:i:s','date'=>$_smarty_tpl->tpl_vars['val']->value->created_at),$_smarty_tpl);?>
</td>
											<td style="width: 25%; text-align: center !important;"><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['val']->value->amount);?>
</td>
											<td style="width: 25%; text-align: center !important;"><?php if ($_smarty_tpl->tpl_vars['val']->value->status == 0) {?>پرداخت نشده/درحال بررسی<?php } elseif ($_smarty_tpl->tpl_vars['val']->value->status == -1) {?>درخواست رد شده<?php } elseif ($_smarty_tpl->tpl_vars['val']->value->status == 1) {?>پرداخت شده<?php } elseif ($_smarty_tpl->tpl_vars['val']->value->status == 2) {?>بررسی شده، در انتظار پرداخت<?php }?></td>
										</tr>
                                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
					<?php } elseif ($_smarty_tpl->tpl_vars['withdraw_type']->value == 'choose') {?>
					<div class="row">
						<div class="col-lg-12">
							<div class="topup-options">
								<div class="row">
									<div class="col-lg-6">
										<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/withdraw/rial_iran" class="item-2-box">
											<div class="image" style="background-image: url(<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/withdraw/rial_iran.jpg"></div>
											<div class="title"><div>ریال ایرانی</div></div>
										</a>
									</div>
									<div class="col-lg-6">
										<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/withdraw/dollar_perfect_money" class="item-2-box">
											<div class="image" style="background-image: url(<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/withdraw/dollar.jpg"></div>
											<div class="title"><div>دلار پرفکت مانی</div></div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<?php } elseif ($_smarty_tpl->tpl_vars['withdraw_type']->value == 'dollar_perfect_money') {?>
					<div class="withdraw-description" style="margin-bottom: 20px !important; line-height: 40px !important; font-size: 15px !important; text-align: right !important;">
						<span><text style="font-weight: bold !important;"><font color="red">توجه* : پرداخت شما نسبت به دلار روز با قیمت روز پرداخت خواهد شد</font></span><br />
						<span>قیمت دلار روز در فرم ثبت شده است و پرداخت شما نسبت به آن انجام خواهد شد</span><br />
						<span>حداقل مبلغ قابل برداشت : <?php echo number_format(50000);?>
 تومان</span><br />
						<span>حداکثر مبلغ قابل برداشت : <?php echo number_format(50000000);?>
 تومان</span><br />
					</div>
					<div class="withdraw-description alert alert-danger" id="saman_bank_description" style="margin-top: 15px !important; line-height: 40px !important; font-size: 15px !important; text-align: right !important;"><span>پرداخت های بانک سامان بین 2 الی 4 ساعت انجام میشود</span></div>
					<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
						<div class="">
							<div class="left form-title mw160 c-main">موجودی</div>
							<div class="left form-element fs16 mt8" style="text-align: right !important; direction: rtl !important;"><span class="bold"><?php echo number_format($_smarty_tpl->tpl_vars['cash']->value);?>
</span> تومان</div>
							<div class="clear"></div>
						</div>
						<div class="mt15">
							<div class="left form-title mw160 c-main">موجودی قابل برداشت</div>
							<div class="left form-element fs16 mt8" style="text-align: right !important; direction: rtl !important;"><span class="bold"><?php echo number_format($_smarty_tpl->tpl_vars['cash']->value);?>
</span> تومان</div>
							<div class="clear"></div>
						</div>
						<input type="hidden" id="dollar_price" value="<?php echo $_smarty_tpl->tpl_vars['dollar_price']->value;?>
" />
						<form action="<?php echo $_smarty_tpl->tpl_vars['action']->value;?>
" method="post">
							<div class="mt15">
								<div class="left form-title mw160">نام و نام خانوادگی</div>
								<div class="left form-element"><input type="text" readonly="readonly" disabled="disabled" value="<?php echo $_smarty_tpl->tpl_vars['my_name']->value;?>
" style="height: 40px; text-align: center !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">مبلغ</div>
								<div class="left form-element"><input type="text" style="height: 40px !important; direction: ltr !important;" id="amount" name="amount" class="form-input text-money-format"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">قیمت روز دلار</div>
								<div class="left form-element">
									<input disabled readonly type="text" style="height: 40px !important; text-align: center !important;" class="form-input user-form-data" value="<?php echo number_format($_smarty_tpl->tpl_vars['dollar_price']->value);?>
 تومان">
								</div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">میزان دلار پرداختی</div>
								<div class="left form-element">
									<input disabled readonly type="text" style="height: 40px !important; text-align: center !important;" class="form-input user-form-data" value="0 دلار" id="show_dollar">
								</div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-element" style="margin-right: 59px;">
									<button href="javascript:;" class="form-button action-button">برداشت جایزه</button>
								</div>
								<div class="clear"></div>
							</div>
						</form>
                        <section class="formbox row_100 clearfix" style="margin-top: 30px !important;">
                            <div class="support_messages" style="display: block;">
                                <table class="leaguetable support">
									<thead>
                                        <tr>
                                            <th style="width: 25%; text-align: center !important;">شناسه درخواست</th>
                                            <th style="width: 25%; text-align: center !important;">تاریخ درخواست</th>
                                            <th style="width: 25%; text-align: center !important;">مبلغ درخواستی</th>
                                            <th style="width: 25%; text-align: center !important;">وضعیت</th>
                                        </tr>
									</thead>
                                    <tbody>
                                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['withdrawList']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
										<tr>
											<td style="width: 25%; text-align: center !important;"><?php echo $_smarty_tpl->tpl_vars['val']->value->id;?>
</td>
											<td style="width: 25%; text-align: center !important;"><?php echo smarty_function_jdate(array('format'=>'l d F Y ساعت H:i:s','date'=>$_smarty_tpl->tpl_vars['val']->value->created_at),$_smarty_tpl);?>
</td>
											<td style="width: 25%; text-align: center !important;"><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['val']->value->amount);?>
</td>
											<td style="width: 25%; text-align: center !important;"><?php if ($_smarty_tpl->tpl_vars['val']->value->status == 0) {?>پرداخت نشده/درحال بررسی<?php } elseif ($_smarty_tpl->tpl_vars['val']->value->status == -1) {?>درخواست رد شده<?php } elseif ($_smarty_tpl->tpl_vars['val']->value->status == 1) {?>پرداخت شده<?php } elseif ($_smarty_tpl->tpl_vars['val']->value->status == 2) {?>بررسی شده، در انتظار پرداخت<?php }?></td>
										</tr>
                                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                    </tbody>
                                </table>
                            </div>
                        </section>
					</div>
					<?php } else { ?>
					<div class="inline" align="right" style="padding:7px 15px 7px 15px !important; margin-top: 20px !important; text-align: right !important; width: 100% !important;">
						<div class="alert alert-danger" style="display: block;">
							<div class="row">
								<div class="col-lg-2"><i class="fa fa-warning fa-5x"></i></div>
								<div class="col-lg-10" style="margin-top: 10px !important; font-size: 18px !important;">متد انتخاب شده معتبر نمی باشد. جهت بازگشت به صفحه اصلی برداشت جایزه روی <a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/withdraw/choose" target="_self">این لینک</a> کلیک کنید</div>
							</div>
						</div>
					</div>
					<?php }?>
                </div>
            </div>
        </div>
    </div>
</div><?php }
}
