<div class="container" style="width: 100% !important;">
	{if !empty($smarty.const.get_message)}
		{assign var = message_details value = (object)$smarty.const.get_message}
		{if !empty($message_details->message)}
			{if $message_details->type == 'fail'}
				{assign var=alert_type value='alert-danger'}
			{elseif $message_details->type == 'warning'}
				{assign var=alert_type value='alert-warning'}
			{elseif $message_details->type == 'success'}
				{assign var=alert_type value='alert-success'}
			{/if}
			<div class="row"><div style="text-align: right !important; width: 100% !important; margin-top: 10px !important; margin-bottom: -30px !important;"><div class="alert {$alert_type}" style="display: block !important;">{$message_details->message}</div></div></div>
		{/if}
	{/if}
	<script type="text/javascript">
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
	</script>
	<div class="page-content light back-casino" style="width: auto !important;">
		<div class="ph15"></div>
		<div class="inline container ">
			{include file="partials/dashboard_menu.tpl"}
			<div class="left static-content">
				<div class="page-area container inline" align="center">
					<div class="page-title">شارژ حساب کاربری</div>
                    <div class="row">
						<div class="col-lg-12">
							<div class="topup-options">
								<div class="row">
									<div class="col-lg-6">
										<a id="pay_cart" href="javascript:;" class="item-2-box mb20";>
											<div class="image" style="border-radius:100px ; height:160px !important;background-image: url({assets_url}/images/cardtocard.jpg"></div>
											<div class="title"><div style="border-radius:100px;color: #27292E; background: #9AABD3 !important;">پرداخت از طریق کارت به کارت</div></div>
										</a>
									</div>
									<div class="col-lg-6">
										<a id="pay_ev_pm" href="javascript:;" class="item-2-box mb20">
											<div class="image" style="border-radius:100px; height:160px !important ;background-image: url({assets_url}/images/perfectmoney.jpg"></div>
											<div class="title"><div style="border-radius:100px;color: #27292E; background: #9AABD3 !important;">پرداخت از طریق پرفکت مانی</div></div>
										</a>
									</div>
									<div class="col-lg-6">
										<a id="pay_online" href="javascript:;" class="item-2-box mb20">
											<div class="image" style="border-radius:100px ; height:160px !important ;background-image: url({assets_url}/images/onlinepayment.jpg"></div>
											<div class="title"><div  style="border-radius:100px;color: #27292E; background: #9AABD3 !important;">پرداخت آنلاین درگاه بانکی</div></div>
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
										<form action="{site_url}payment/credit" method="post">
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
										<form action="{site_url}payment/credit" method="post">
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
</div>