	<div class="help-question-div">
		<img src="{assets_url}/images/help_documention/close_it.jpg" class="close-help-div"/>
		<div class="tip-help">سوال یا مشکلی دارید ؟ لطفا قبل از استفاده از امکانات سایت بخش راهنما را کامل مطالعه کنید</div><a href="{site_url}users/help">
		<img src="{assets_url}/images/help_documention/question_help.png" class="main-img-help" /></a>
	</div>
	<div class="footer desktop">
		<div class="inline container pr10">معتبر‌ترین سایت پیش بینی‌ فوتبال در ایران و دارای بازی انفجار آنلاین، بازی پوکر آنلاین، تخته نرد آنلاین، بلک جک آنلاین، رولت آنلاین و بازی پاسور آنلاین</div>
	</div>
	<div class="footer-links desktop">
		<div class="inline container">
			<div>
				<a href="#" target="_blank"><img src="{assets_url}/images/icons/facebook.png" class="social-link"></a>
				<a href="https://www.t.me/rich90bet" target="_blank"><img src="{assets_url}/images/icons/telegram.png" class="social-link"></a>
				<a href="#" target="_blank"><img src="{assets_url}/images/icons/instagram.png" class="social-link"></a>
			</div>
			<div class="clear"></div>
		</div>
	</div>
	<div class="mobile mobile-bar-holder"></div>
	<div class="mobile mobile-footer-bar">
		<a href="{site_url}" class="sport {if strpos($smarty.server.REQUEST_URI, "index") !== false OR {$smarty.server.REQUEST_URI} == "" OR {$smarty.server.REQUEST_URI} == "/"}active{/if}">صفحه اصلی</a>
		<a href="{site_url}dashboard" class="account {if strpos($smarty.server.REQUEST_URI, "casino") == false AND (strpos($smarty.server.REQUEST_URI, "myrecords") !== false OR strpos($smarty.server.REQUEST_URI, "dashboard") !== false OR strpos($smarty.server.REQUEST_URI, "payment") !== false OR strpos($smarty.server.REQUEST_URI, "users") !== false)}active{/if}">حساب کاربری</a>
		<a href="{site_url}bets/inplayBet" class="live {if strpos($smarty.server.REQUEST_URI, "inplayBet") !== false OR strpos($smarty.server.REQUEST_URI, "InplayOdds") !== false}active{/if}">پیش بینی زنده</a>
		<a href="{site_url}bets/upComing" class="scores {if strpos($smarty.server.REQUEST_URI, "upComing") !== false OR strpos($smarty.server.REQUEST_URI, "preEvents") !== false}active{/if}">پیش بینی پیش از بازی</a>
		<a href="{site_url}users/casino" class="casino {if strpos($smarty.server.REQUEST_URI, "casino") !== false}active{/if}">کازینو</a>
	</div>
	<div class="splash-view">
		<div class="splash-container">
			<div class="splash-header">
				<div class="left splash-title">
				</div>
				<div class="right"><span class="fa fa-times pointer splash-close-button"></span></div>
				<div class="clear"></div>
			</div>
			<div class="splash-content">
			</div>
		</div>
	</div>
	<script type="text/javascript">
		TkStarFreamWork(document).ready(function(){
			TkStarFreamWork('.help-question-div').hover(function(){
				TkStarFreamWork('.help-question-div .tip-help').css('display', 'inline-block');
				TkStarFreamWork('.help-question-div .close-help-div').css('display', 'block');
			}, function(){
				TkStarFreamWork('.help-question-div .tip-help').css('display', 'none');
				TkStarFreamWork('.help-question-div .close-help-div').css('display', 'none');
			});
			TkStarFreamWork('.close-help-div').click(function(){
				TkStarFreamWork(this).unbind('click');
				TkStarFreamWork(this).parent().fadeOut(500, function(){
					TkStarFreamWork(this).remove();
				});
			});
			TkStarFreamWork('.header-sub.desktop .litem').hover(function(){
				TkStarFreamWork(this).find('.menu-mini-icons').show(500);
			}, function(){
				TkStarFreamWork(this).find('.menu-mini-icons').hide(500);
			});
			setTimeout(function(){
				TkStarFreamWork('.header-sub.desktop .litem').find('.menu-mini-icons').hide(500);
			}, 1000);
		});
	</script>
</body>
