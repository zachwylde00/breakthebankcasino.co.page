<?php
/* Smarty version 3.1.31, created on 2018-12-25 12:49:13
  from "/home/richbet/public_html/themes/default/TkStarBet2018/partials/header_menu.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c222749d2a9a6_73250254',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '7fa8d5294fc021d2ec648263a07e927f90eeb662' => 
    array (
      0 => '/home/richbet/public_html/themes/default/TkStarBet2018/partials/header_menu.tpl',
      1 => 1542123516,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c222749d2a9a6_73250254 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
if (!is_callable('smarty_modifier_price_format')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/modifier.price_format.php';
if (!is_callable('smarty_function_assets_url')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/function.assets_url.php';
if (!is_callable('smarty_function_jdate')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/function.jdate.php';
?>
	<center class="header-main-center">
		<div class="header-top header desktop">
			<center>
				<div class="mr20">
				<?php if (!$_smarty_tpl->tpl_vars['is_logged_in']->value) {?>
					<div class="right mt5">
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/register" class="link signup">ثبت نام</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/login" class="link login">ورود به حساب کاربری</a>
					</div>
				<?php } else { ?>
					<div class="right mt5">
						<div class="name"><?php echo $_smarty_tpl->tpl_vars['user']->value->first_name;?>
 <?php echo $_smarty_tpl->tpl_vars['user']->value->last_name;?>
</div>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
payment/credit" class="balance"><span class="user-balance-place"><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['user']->value->cash);?>
</span></a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
payment/credit" class="account login">افزایش موجودی</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
dashboard" class="account login">حساب کاربری من</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/logout" class="account signup">خروج از حساب کاربری</a>
					</div>
					<div class="clear"></div>
				<?php }?>
				</div>
			</center>
		</div>
		<div class="header header-wrapper mr20 mb10 desktop top_bar_list">
			<div class="left"><a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
"><img src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/main_logo1.png" style="margin-top: 50px !important;"></a></div>
			<div class="left top-bar-wrapper">
				<div class="top-bar desktop">
					<div class="container inline">
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
" class="<?php ob_start();
echo $_SERVER['REQUEST_URI'];
$_prefixVariable17=ob_get_clean();
ob_start();
echo $_SERVER['REQUEST_URI'];
$_prefixVariable18=ob_get_clean();
if (strpos($_SERVER['REQUEST_URI'],'index') !== false || $_prefixVariable17 == '' || $_prefixVariable18 == '/') {?>active<?php }?>">صفحه اصلی</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/inplayBet" class="live-tab <?php if (strpos($_SERVER['REQUEST_URI'],'inplayBet') !== false || strpos($_SERVER['REQUEST_URI'],'InplayOdds') !== false) {?>active<?php }?>">پیش بینی زنده</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/upComing" class="<?php if (strpos($_SERVER['REQUEST_URI'],'upComing') !== false || strpos($_SERVER['REQUEST_URI'],'preEvents') !== false) {?>active<?php }?>">پیش بینی پیش از بازی</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/casino" class="<?php if (strpos($_SERVER['REQUEST_URI'],'casino') !== false) {?>active<?php }?>">کازینو آنلاین</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
contacts/tickets/ticket-list" class="<?php if (strpos($_SERVER['REQUEST_URI'],'contacts/tickets/ticket-list') !== false || strpos($_SERVER['REQUEST_URI'],'contacts/tickets/new-ticket') !== false) {?>active<?php }?>">پشتیبانی</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help" class="<?php if (strpos($_SERVER['REQUEST_URI'],'users/help') !== false) {?>active<?php }?>">راهنما</a>
					</div>
				</div>
			</div>
			<div class="clear"></div>
		</div>
		<div class="header header-sub desktop">
			<div class="mr20">
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/crash" target="_blank" class="litem"><div class="menu-mini-icons"><img src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/mini/crash.png" /></div><div class="menu-mini-icons-title">انفجار</div></a>
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/baccarat" target="_blank" class="litem"><div class="menu-mini-icons"><img src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/mini/baccarat.png" /></div><div class="menu-mini-icons-title">باکارات</div></a>
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/blackjack" target="_blank" class="litem"><div class="menu-mini-icons"><img src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/mini/blackjack.png" /></div><div class="menu-mini-icons-title">بلک جک (21)</div></a>
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/royal_roulette" target="_blank" class="litem"><div class="menu-mini-icons"><img src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/mini/royal_roulette.png" /></div><div class="menu-mini-icons-title">رویال رولت</div></a>
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/seven_clubs" target="_blank" class="litem"><div class="menu-mini-icons"><img src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/mini/seven_clubs.png" /></div><div class="menu-mini-icons-title">چهار برگ (پاسور)</div></a>
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/two_verdicts" target="_blank" class="litem"><div class="menu-mini-icons"><img src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/mini/two_verdicts.png" /></div><div class="menu-mini-icons-title">حکم دو نفره</div></a>
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/plinko" target="_blank" class="litem"><div class="menu-mini-icons"><img src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/mini/plinko.png" /></div><div class="menu-mini-icons-title">توپ و سبد</div></a>
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/craps" target="_blank" class="litem"><div class="menu-mini-icons"><img src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/mini/craps.png" /></div><div class="menu-mini-icons-title">زمین و تاس (کرپس)</div></a>
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/fortune_wheel" target="_blank" class="litem"><div class="menu-mini-icons"><img src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/mini/fortune_wheel.png" /></div><div class="menu-mini-icons-title">گردونه شانس</div></a>
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/high_low" target="_blank" class="litem"><div class="menu-mini-icons"><img src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/mini/high_low.png" /></div><div class="menu-mini-icons-title">کمتر بیشتر</div></a>
			</div>
		</div>
		<div class="header container mobile mobile-bar top_bar_list">
			<div class="icon"><a href="javascript:;" class="mobile-menu-action fa fa-bars"></a></div>
			<div class="icon"></div>
			<div class="logo"><a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
"><img src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/main_logo1.png" height="50"></a></div>
			<div class="icon"><a href="javascript:;" class="mobile-menu-filter-action fa fa-gamepad"></a></div>
			<div class="icon"><a href="javascript:;" class="mobile-menu-bet-action fa fa-file-text-o"></a></div>
			<div class="badge slip-count-badge">0</div>
			<div class="clear"></div>
		</div>
		<div class="mobile mobile-bar-holder"></div>
	</center>
	<div class="hidden-lg mobile-menu mobile mobile-menu-panel" style="text-align: center !important;">
		<?php if (!$_smarty_tpl->tpl_vars['is_logged_in']->value) {?>
			<div class="buttons" style="margin-top: 10px !important;background-color: transparent !important;">
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/login" class="button1">ورود به حساب کاربری</a>
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/register" class="button2">ثبت نام</a>
			</div>
		<?php } else { ?>
			<div class="info" style="font-size: 20px !important; width: 100% !important;">
				<span class="name"><?php echo $_smarty_tpl->tpl_vars['user']->value->first_name;?>
 <?php echo $_smarty_tpl->tpl_vars['user']->value->last_name;?>
</span><br>
				<span class="user-balance-place"><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['user']->value->cash);?>
</span>
			</div>
			<div class="buttons" style="margin-top: 10px !important;background-color: transparent !important;">
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
payment/credit" class="button1">افزایش موجودی</a>
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
dashboard" class="button1">حساب کاربری من</a>
				<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/logout" class="button2">خروج از حساب کاربری</a>
			</div>
		<?php }?>
		<div class="items">
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
" class="active">صفحه اصلی</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/inplayBet" class="active">پیش بینی زنده</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/upComing" class="active">پیش بینی پیش از بازی</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino" class="active">کازینو آنلاین</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
contacts/tickets/ticket-list">پشتیبانی</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
help">راهنما</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/crash" class="active">انفجار</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/baccarat">باکارات</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/blackjack">بلک جک (21)</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/royal_roulette">رویال رولت</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/seven_clubs">پاسور</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/two_verdicts">حکم</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/plinko">توپ و سبد</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/craps">زمین و تاس (کرپس)</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/fortune_wheel">گردونه شانس</a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/high_low">کمتر بیشتر</a>
		</div>
	</div>
	<div class="hidden-lg left left-bar rear-bar-mobile mobile-left-menu mobile-menu-panel" style="text-align: center !important; display: none;" align="center">
		<div class="col-lg-12" style="margin-top: 15px !important;">
			<?php if (isset($_smarty_tpl->tpl_vars['show_days_mobile']->value) && !empty($_smarty_tpl->tpl_vars['show_days_mobile']->value) && $_smarty_tpl->tpl_vars['show_days_mobile']->value == 'true') {?>
			<div class="other-bars">
				<a href="javascript:;" class="title box-title-action" data-box="box-100002">روز ها</a>
				<div class="menu-container box-100002">
					<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/upComing" class="link<?php if ($_smarty_tpl->tpl_vars['day']->value == '0' || $_smarty_tpl->tpl_vars['day']->value == 0 || empty($_smarty_tpl->tpl_vars['day']->value)) {?> active<?php }?>"><?php echo smarty_function_jdate(array('format'=>'j F (l)','date'=>'+1 day','second_date'=>gmdate('Y-m-d')),$_smarty_tpl);?>
 (<div class="english-date"><?php echo date('d F - l',time());?>
</div>)</a>
					<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/upComing/1" class="link<?php if ($_smarty_tpl->tpl_vars['day']->value == '1' || $_smarty_tpl->tpl_vars['day']->value == 1) {?> active<?php }?>"><?php echo smarty_function_jdate(array('format'=>'j F (l)','date'=>'+2 day','second_date'=>gmdate('Y-m-d')),$_smarty_tpl);?>
 (<div class="english-date"><?php echo date('d F - l',strtotime('+1 day'));?>
</div>)</a>
					<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/upComing/2" class="link<?php if ($_smarty_tpl->tpl_vars['day']->value == '2' || $_smarty_tpl->tpl_vars['day']->value == 2) {?> active<?php }?>"><?php echo smarty_function_jdate(array('format'=>'j F (l)','date'=>'+3 day','second_date'=>gmdate('Y-m-d')),$_smarty_tpl);?>
 (<div class="english-date"><?php echo date('d F - l',strtotime('+2 day'));?>
</div>)</a>
					<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/upComing/3" class="link<?php if ($_smarty_tpl->tpl_vars['day']->value == '3' || $_smarty_tpl->tpl_vars['day']->value == 3) {?> active<?php }?>"><?php echo smarty_function_jdate(array('format'=>'j F (l)','date'=>'+4 day','second_date'=>gmdate('Y-m-d')),$_smarty_tpl);?>
 (<div class="english-date"><?php echo date('d F - l',strtotime('+3 day'));?>
</div>)</a>
					<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/upComing/4" class="link<?php if ($_smarty_tpl->tpl_vars['day']->value == '4' || $_smarty_tpl->tpl_vars['day']->value == 4) {?> active<?php }?>"><?php echo smarty_function_jdate(array('format'=>'j F (l)','date'=>'+5 day','second_date'=>gmdate('Y-m-d')),$_smarty_tpl);?>
 (<div class="english-date"><?php echo date('d F - l',strtotime('+4 day'));?>
</div>)</a>
					<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/upComing/5" class="link<?php if ($_smarty_tpl->tpl_vars['day']->value == '5' || $_smarty_tpl->tpl_vars['day']->value == 5) {?> active<?php }?>"><?php echo smarty_function_jdate(array('format'=>'j F (l)','date'=>'+6 day','second_date'=>gmdate('Y-m-d')),$_smarty_tpl);?>
 (<div class="english-date"><?php echo date('d F - l',strtotime('+5 day'));?>
</div>)</a>
					<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/upComing/6" class="link<?php if ($_smarty_tpl->tpl_vars['day']->value == '6' || $_smarty_tpl->tpl_vars['day']->value == 6) {?> active<?php }?>"><?php echo smarty_function_jdate(array('format'=>'j F (l)','date'=>'+7 day','second_date'=>gmdate('Y-m-d')),$_smarty_tpl);?>
 (<div class="english-date"><?php echo date('d F - l',strtotime('+6 day'));?>
</div>)</a>
					<div class="clear"></div>
				</div>
			</div>
			<?php }?>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/crash"><img style="margin: 10px 0 10px 0 !important; width: 100%; display: inline !important;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/crash.gif"></a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/baccarat"><img style="margin: 10px 0 10px 0 !important; width: 100%; display: inline !important;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/baccarat.gif"></a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/blackjack"><img style="margin: 10px 0 10px 0 !important; width: 100%; display: inline !important;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/blackjack.gif"></a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/royal_roulette"><img style="margin: 10px 0 10px 0 !important; width: 100%; display: inline !important;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/royal_roulette.gif"></a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/seven_clubs"><img style="margin: 10px 0 10px 0 !important; width: 100%; display: inline !important;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/seven_clubs.gif"></a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/two_verdicts"><img style="margin: 10px 0 10px 0 !important; width: 100%; display: inline !important;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/two_verdicts.gif"></a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/plinko"><img style="margin: 10px 0 10px 0 !important; width: 100%; display: inline !important;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/plinko.gif"></a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/craps"><img style="margin: 10px 0 10px 0 !important; width: 100%; display: inline !important;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/craps.gif"></a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/fortune_wheel"><img style="margin: 10px 0 10px 0 !important; width: 100%; display: inline !important;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/fortune_wheel.gif"></a>
			<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/high_low"><img style="margin: 10px 0 10px 0 !important; width: 100%; display: inline !important;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/high_low.gif"></a>
			<a href="http://t.me/bwin7" target="_blank"><img src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/telegram.gif" class="img-thumbnail" style="width: 100%; margin: 10px 0 10px 0 !important;" /></a>
		</div>
	</div>
	<div class="hidden-lg left right-bar rear-bar-mobile mobile-right-menu mobile-menu-panel" style="text-align: center !important; display: none;"><div class="col-lg-12" id="second_bets_div"></div></div>
	<div class="clear"></div><?php }
}
