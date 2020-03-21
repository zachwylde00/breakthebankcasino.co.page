	<center class="header-main-center">
		<div class="header-top header desktop">
			<center style="height:43px;">
				<div class="mr20">
				{if !$is_logged_in}
					<div class="right">
						<a href="{site_url}users/register" class="link signup">ثبت نام</a>
						<a href="{site_url}users/login" class="link login">ورود به حساب کاربری</a>
					</div>
				{else}
					<div class="right">
						<div class="name">{$user->first_name} {$user->last_name} :</div>
						<a href="{site_url}payment/credit" class="balance user-balance-place"><span>{$user->cash|price_format}  </span></a>
						<a href="{site_url}payment/credit" class="account login">افزایش موجودی</a>
						<a href="{site_url}dashboard" class="account login">حساب کاربری من</a>
						<a href="{site_url}users/logout" class="account signup">خروج از حساب کاربری</a>
					</div>
					<div class="clear"></div>
				{/if}
				</div>
			</center>
		</div>
		
		<div class="header header-wrapper desktop top_bar_list ">
			<div class="left"><a href="{site_url}"><img src="{assets_url}/images/logo11.png"></a></div>
			<div class="left top-bar-wrapper">
				<div class="top-bar desktop">
					<div class="container inline">
						<a href="{site_url}" class="{if strpos($smarty.server.REQUEST_URI, 'index') !== false OR {$smarty.server.REQUEST_URI} == '' OR {$smarty.server.REQUEST_URI} == '/'}active{/if}">صفحه اصلی</a>
						<a href="{site_url}bets/inplayBet" class="live-tab {if strpos($smarty.server.REQUEST_URI, 'inplayBet') !== false OR strpos($smarty.server.REQUEST_URI, 'InplayOdds') !== false}active{/if}">پیش بینی زنده</a>
						<a href="{site_url}bets/upComing" class="{if strpos($smarty.server.REQUEST_URI, 'upComing') !== false OR strpos($smarty.server.REQUEST_URI, 'preEvents') !== false}active{/if}">پیش بینی پیش از بازی</a>
						<a href="{site_url}users/casino" class="{if strpos($smarty.server.REQUEST_URI, 'casino') !== false}active{/if}">کازینو آنلاین</a>
						<a href="{site_url}contacts/tickets/ticket-list" class="{if strpos($smarty.server.REQUEST_URI, 'contacts/tickets/ticket-list') !== false OR strpos($smarty.server.REQUEST_URI, 'contacts/tickets/new-ticket') !== false}active{/if}">پشتیبانی</a>
						<a href="{site_url}users/help" class="{if strpos($smarty.server.REQUEST_URI, 'users/help') !== false}active{/if}">راهنما</a>
					</div>
				</div>
			</div>
			<div class="left"><a href="{site_url}"><img src="{assets_url}/images/logo11.png"></a></div>
			<div class="clear"></div>
		</div>
		<div class="header header-sub desktop">
			<div>
				<a href="{site_url}casino/crash" target="_blank" class="litem"><div class="menu-mini-icons"><img src="{site_url}casino/templates/images/logoes/mini/crash1.png" /></div><div class="menu-mini-icons-title">انفجار</div></a>
				<a href="{site_url}casino/baccarat" target="_blank" class="litem"><div class="menu-mini-icons"><img src="{site_url}casino/templates/images/logoes/mini/baccarat1.png" /></div><div class="menu-mini-icons-title">باکارات</div></a>
				<a href="{site_url}casino/blackjack" target="_blank" class="litem"><div class="menu-mini-icons"><img src="{site_url}casino/templates/images/logoes/mini/blackjack1.png" /></div><div class="menu-mini-icons-title">بلک جک (21)</div></a>
				<a href="{site_url}casino/royal_roulette" target="_blank" class="litem"><div class="menu-mini-icons"><img src="{site_url}casino/templates/images/logoes/mini/royal_roulette1.png" /></div><div class="menu-mini-icons-title">رویال رولت</div></a>
				<a href="{site_url}casino/seven_clubs" target="_blank" class="litem"><div class="menu-mini-icons"><img src="{site_url}casino/templates/images/logoes/mini/seven_clubs1.png" /></div><div class="menu-mini-icons-title">چهار برگ (پاسور)</div></a>
				<a href="{site_url}casino/two_verdicts" target="_blank" class="litem"><div class="menu-mini-icons"><img src="{site_url}casino/templates/images/logoes/mini/two_verdicts1.png" /></div><div class="menu-mini-icons-title">حکم دو نفره</div></a>
				<a href="{site_url}casino/plinko" target="_blank" class="litem"><div class="menu-mini-icons"><img src="{site_url}casino/templates/images/logoes/mini/plinko1.png" /></div><div class="menu-mini-icons-title">توپ و سبد</div></a>
				<a href="{site_url}casino/craps" target="_blank" class="litem"><div class="menu-mini-icons"><img src="{site_url}casino/templates/images/logoes/mini/craps1.png" /></div><div class="menu-mini-icons-title">زمین و تاس (کرپس)</div></a>
				<a href="{site_url}casino/fortune_wheel" target="_blank" class="litem"><div class="menu-mini-icons"><img src="{site_url}casino/templates/images/logoes/mini/fortune_wheel1.png" /></div><div class="menu-mini-icons-title">گردونه شانس</div></a>
				<a href="{site_url}casino/high_low" target="_blank" class="litem"><div class="menu-mini-icons"><img src="{site_url}casino/templates/images/logoes/mini/high_low1.png" /></div><div class="menu-mini-icons-title">کمتر بیشتر</div></a>
			</div>
		</div>
		<div class="header container mobile mobile-bar top_bar_list">
			<div class="icon"><a href="javascript:;" class="mobile-menu-action fa fa-bars"></a></div>
			<div class="icon"></div>
			<div class="logo"><a href="{site_url}"><img src="{assets_url}/images/mobile-logo1.png" height="50"></a></div>
			<div class="icon"><a href="javascript:;" class="mobile-menu-filter-action fa fa-gamepad"></a></div>
			<div class="icon"><a href="javascript:;" class="mobile-menu-bet-action fa fa-file-text-o"></a></div>
			<div class="badge slip-count-badge">0</div>
			<div class="clear"></div>
		</div>
		<div class="mobile mobile-bar-holder"></div>
	</center>
	<div class="hidden-lg mobile-menu mobile mobile-menu-panel background-mobile" style="text-align: center !important;">
		{if !$is_logged_in}
			<div class="buttons">
				<a href="{site_url}users/login" class="button1">ورود به حساب کاربری</a>
				<a href="{site_url}users/register" class="button2">ثبت نام</a>
			</div>
		{else}
			<div class="info" style="font-size: 20px !important; width: 100% !important;">
				<span class="name">{$user->first_name} {$user->last_name}</span><br>
				<span class="user-balance-place">{$user->cash|price_format}</span>
			</div>
			<div class="buttons">
				<a href="{site_url}payment/credit" class="button1">افزایش موجودی</a>
				<a href="{site_url}dashboard" class="button1">حساب کاربری من</a>
				<a href="{site_url}users/logout" class="button2">خروج از حساب کاربری</a>
			</div>
		{/if}
		<div class="items">
			<a href="{site_url}" class="active">صفحه اصلی</a>
			<a href="{site_url}bets/inplayBet" class="active">پیش بینی زنده</a>
			<a href="{site_url}bets/upComing" class="active">پیش بینی پیش از بازی</a>
			<a href="{site_url}casino" class="active">کازینو آنلاین</a>
			<a href="{site_url}contacts/tickets/ticket-list">پشتیبانی</a>
			<a href="{site_url}help">راهنما</a>
			<a href="{site_url}casino/crash" class="active">انفجار</a>
			<a href="{site_url}casino/baccarat">باکارات</a>
			<a href="{site_url}casino/blackjack">بلک جک (21)</a>
			<a href="{site_url}casino/royal_roulette">رویال رولت</a>
			<a href="{site_url}casino/seven_clubs">پاسور</a>
			<a href="{site_url}casino/two_verdicts">حکم</a>
			<a href="{site_url}casino/plinko">توپ و سبد</a>
			<a href="{site_url}casino/craps">زمین و تاس (کرپس)</a>
			<a href="{site_url}casino/fortune_wheel">گردونه شانس</a>
			<a href="{site_url}casino/high_low">کمتر بیشتر</a>
		</div>
	</div>
	<div class="hidden-lg left left-bar rear-bar-mobile mobile-left-menu mobile-menu-panel background-mobile" style="text-align: center !important; display: none;" align="center">
		<div class="col-lg-12" style="margin-top: 15px !important;">
			{if isset($show_days_mobile) AND !empty($show_days_mobile) AND $show_days_mobile == 'true'}
			<div class="other-bars">
				<a href="javascript:;" class="title box-title-action" data-box="box-100002">روز ها</a>
				<div class="menu-container box-100002">
					<a href="{site_url}bets/upComing" class="link{if $day == '0' OR $day == 0 OR empty($day)} active{/if}">{jdate format='j F (l)' date='+1 day' second_date=gmdate('Y-m-d')} (<div class="english-date">{date('d F - l', time())}</div>)</a>
					<a href="{site_url}bets/upComing/1" class="link{if $day == '1' OR $day == 1} active{/if}">{jdate format='j F (l)' date='+2 day' second_date=gmdate('Y-m-d')} (<div class="english-date">{date('d F - l', strtotime('+1 day'))}</div>)</a>
					<a href="{site_url}bets/upComing/2" class="link{if $day == '2' OR $day == 2} active{/if}">{jdate format='j F (l)' date='+3 day' second_date=gmdate('Y-m-d')} (<div class="english-date">{date('d F - l', strtotime('+2 day'))}</div>)</a>
					<a href="{site_url}bets/upComing/3" class="link{if $day == '3' OR $day == 3} active{/if}">{jdate format='j F (l)' date='+4 day' second_date=gmdate('Y-m-d')} (<div class="english-date">{date('d F - l', strtotime('+3 day'))}</div>)</a>
					<a href="{site_url}bets/upComing/4" class="link{if $day == '4' OR $day == 4} active{/if}">{jdate format='j F (l)' date='+5 day' second_date=gmdate('Y-m-d')} (<div class="english-date">{date('d F - l', strtotime('+4 day'))}</div>)</a>
					<a href="{site_url}bets/upComing/5" class="link{if $day == '5' OR $day == 5} active{/if}">{jdate format='j F (l)' date='+6 day' second_date=gmdate('Y-m-d')} (<div class="english-date">{date('d F - l', strtotime('+5 day'))}</div>)</a>
					<a href="{site_url}bets/upComing/6" class="link{if $day == '6' OR $day == 6} active{/if}">{jdate format='j F (l)' date='+7 day' second_date=gmdate('Y-m-d')} (<div class="english-date">{date('d F - l', strtotime('+6 day'))}</div>)</a>
					<div class="clear"></div>
				</div>
			</div>
			{/if}
			
			<a href="{site_url}casino/crash"><img class="image-menu-style" src="{site_url}casino/templates/images/logoes/crash1.jpg"></a>
			<a href="{site_url}casino/baccarat"><img class="image-menu-style" src="{site_url}casino/templates/images/logoes/baccarat1.jpg"></a>
			<a href="{site_url}casino/blackjack"><img class="image-menu-style" src="{site_url}casino/templates/images/logoes/blackjack1.jpg"></a>
			<a href="{site_url}casino/royal_roulette"><img class="image-menu-style" src="{site_url}casino/templates/images/logoes/roulette1.jpg"></a>
			<a href="{site_url}casino/seven_clubs"><img class="image-menu-style" src="{site_url}casino/templates/images/logoes/pasur1.jpg"></a>
			<a href="{site_url}casino/two_verdicts"><img class="image-menu-style" src="{site_url}casino/templates/images/logoes/court_piece1.jpg"></a>
			<a href="{site_url}casino/plinko"><img class="image-menu-style" src="{site_url}casino/templates/images/logoes/ball_basket.jpg"></a>
			<a href="{site_url}casino/craps"><img class="image-menu-style" src="{site_url}casino/templates/images/logoes/earth_dice.jpg"></a>
			<a href="{site_url}casino/fortune_wheel"><img class="image-menu-style" src="{site_url}casino/templates/images/logoes/fortune_wheel1.jpg"></a>
			<a href="{site_url}casino/high_low"><img class="image-menu-style" src="{site_url}casino/templates/images/logoes/less_more.jpg"></a>
			<a href="http://t.me/bwin7" target="_blank"><img src="{assets_url}/images/support_online.jpg" class="img-thumbnail image-menu-style"/></a>
			
		</div>
	</div>
	<div class="hidden-lg left right-bar rear-bar-mobile mobile-right-menu mobile-menu-panel background-mobile" style="text-align: center !important; display: none;"><div class="col-lg-12" id="second_bets_div"></div></div>
	<div class="clear"></div>