<?php
/* Smarty version 3.1.31, created on 2018-10-15 15:26:42
  from "C:\xampp\htdocs\themes\default\TkStarBet2018\modules\payment\credit.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bc4807ab55712_08291865',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '11502d7a9615a65ec433668da44b93d3fd40b5b0' => 
    array (
      0 => 'C:\\xampp\\htdocs\\themes\\default\\TkStarBet2018\\modules\\payment\\credit.tpl',
      1 => 1538279033,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5bc4807ab55712_08291865 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_assets_url')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\function.assets_url.php';
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
	<?php echo '<script'; ?>
 type="text/javascript">
		TkStarFreamWork(document).ready(function(){
			TkStarFreamWork('#pay_ev_pm').click(function(){
				TkStarFreamWork('#pay_title').html('پرداخت از طریق ووچر پرفکت مانی');
				TkStarFreamWork('#msgbox').show().html('لطفا دقت داشته باشید در حال حاضر پرداخت از طریق کد ووچر پرفکت مانی و کارت به کارت تنها راه های شارژ حساب کاربری در سایت بی وین سون می باشد<br><br>پرداخت به صورت اتوماتیک انجام نمیشود و بعد از ثبت کد ووچر می بایست منتظر بمانید تا حساب کاربریتان توسط مدیریت شارژ گردد<br><br>پرداخت از طریق کد ووچر پرفکت مانی 50 درصد بونوس ویژه به همراه دارد. به طور مثال اگر کد ووچر شما 100,000 تومان اعتبار داشته باشد حساب کاربری شما 150,000 تومانشارژ میگردد');
				TkStarFreamWork('#type').val('ev_pm');
				TkStarFreamWork('#main_form').fadeIn(500);
				TkStarFreamWork('.siteform').hide();
				TkStarFreamWork('#ev_pm_form').show();
			});
			TkStarFreamWork('#pay_cart_to_cart').click(function(){
				TkStarFreamWork('#pay_title').html('پرداخت از طریق کارت به کارت');
				TkStarFreamWork('#msgbox').show().html('لطفا دقت داشته باشید در حال حاضر پرداخت از طریق کد ووچر پرفکت مانی و کارت به کارت تنها راه های شارژ حساب کاربری در سایت بی وین سون می باشد<br><br>بعد از ثبت درخواست می بایست منتظر بمانید تا مشخصات کارت از طریق مدیریت برای شما ارسال شود<br><br>سپس مبلغ مورد نظر را به صورت کارت به کارت پرداخت نمایید و 4 رقم آخر شماره کارت خود را به همراه کد پیگیری پرداخت ارسال کنید<br><br>پرداخت از طریق کارت به کارت 20 درصد بونوس ویژه به همراه دارد. به طور مثال اگر پرداخت شما 100,000 تومان باشد حساب کاربری شما 120 هزارتومان شارژ میگردد');
				TkStarFreamWork('#type').val('cart_to_cart');
				TkStarFreamWork('#main_form').fadeIn(500);
				TkStarFreamWork('.siteform').hide();
				TkStarFreamWork('#cart_to_cart_form').show();
			});
			TkStarFreamWork('#pay_online').click(function(){
				TkStarFreamWork('#pay_title').html('پرداخت از طریق کارت به کارت');
				TkStarFreamWork('#msgbox').hide().html('');
				TkStarFreamWork('#type').val('online');
				TkStarFreamWork('#main_form').fadeIn(500);
				TkStarFreamWork('.siteform').hide();
				TkStarFreamWork('#online_form').show();
			});
		});
	<?php echo '</script'; ?>
>
	<div class="page-content light">
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
									<!-- <div class="col-lg-6"> -->
										<!-- <a id="pay_ev_pm" href="javascript:;" class="item-2-box"> -->
											<!-- <div class="image" style="background-image: url(<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/1524077786-8855-4121.jpg"></div> -->
											<!-- <div class="title"><div>پرداخت از طريق ووچر پرفكت ماني</div></div> -->
										<!-- </a> -->
									<!-- </div> -->
									<!-- <div class="col-lg-6"> -->
										<!-- <a id="pay_cart_to_cart" href="javascript:;" class="item-2-box"> -->
											<!-- <div class="image" style="background-image: url(<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/1524077801-2203-5418.jpg"></div> -->
											<!-- <div class="title"><div>پرداخت از طریق کارت به کارت</div></div> -->
										<!-- </a> -->
									<!-- </div> -->
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
										<div class="alert alert-info" id="msgbox" style="display: block !important;"></div>
										<h2 id="pay_title"></h2>
										<form action="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
payment/credit" method="post">
											<input type="hidden" value="" id="type" name="type" />
											<div id="ev_pm_form" class="siteform">
												<div class="amountinput">
													<label class="label" for="evoucher_code">کد ووچر</label>
													<input autocomplete="off" class="input ltrinput centre" name="evoucher_code" type="text" value="">
												</div>
												<div class="amountinput">
													<label class="label" for="evoucher_activation_code">کد فعالسازی ووچر</label>
													<input autocomplete="off" class="input ltrinput centre" name="evoucher_activation_code" type="text" value="">
												</div>
												<input class="btn btn-primary floatright" type="submit" value="پرداخت">
											</div>
											<div id="cart_to_cart_form" class="siteform">
												<div class="amountinput">
													<label class="label" for="evoucher_activation_code">مبلغ</label>
													<input autocomplete="off" class="input ltrinput centre" name="amount" type="text" value="">
												</div>
												<input class="btn btn-primary floatright" type="submit" value="پرداخت">
											</div>
											<div id="online_form" class="siteform">
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
					</div>
                </div>
            </div>
        </div>
    </div>
</div><?php }
}
