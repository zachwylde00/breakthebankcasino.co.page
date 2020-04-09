<?php
/* Smarty version 3.1.31, created on 2018-09-20 03:09:17
  from "C:\xampp\htdocs\themes\default\TkStarBet2018\modules\bets\index.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5ba2d01500bb37_79597604',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '055653995aa1bcd0f614df7641c3d2e10beaa371' => 
    array (
      0 => 'C:\\xampp\\htdocs\\themes\\default\\TkStarBet2018\\modules\\bets\\index.tpl',
      1 => 1530425153,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5ba2d01500bb37_79597604 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\function.site_url.php';
if (!is_callable('smarty_function_assets_url')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\function.assets_url.php';
?>
<style type="text/css">
    .blink-green {
        background-color: green;
        -webkit-animation: 1s linear infinite condemned_blink_effect_green;
        animation: 1s linear infinite condemned_blink_effect_green;
    }
    .blink-red {
        background-color: red;
        -webkit-animation: 1s linear infinite condemned_blink_effect_red;
        animation: 1s linear infinite condemned_blink_effect_red;
    }
    @-webkit-keyframes condemned_blink_effect_red {
        0% {
            background-color: red;
        }
        50% {
            background-color: red;
        }
        100% {
            background-color: #383838;
        }
    }
    @keyframes condemned_blink_effect_red {
        0% {
            background-color: red;
        }
        50% {
            background-color: red;
        }
        100% {
            background-color: #383838;
        }
    }
    @-webkit-keyframes condemned_blink_effect_green {
        0% {
            background-color: green;
        }
        50% {
            background-color: green;
        }
        100% {
            background-color: #383838;
        }
    }
    @keyframes condemned_blink_effect_green {
        0% {
            background-color: green;
        }
        50% {
            background-color: green;
        }
        100% {
            background-color: #383838;
        }
    }
</style>
<?php echo '<script'; ?>
 type="text/javascript">
	$(document).ready(function(){
		$.ajax({
			type: 'GET',
			url: '<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/reloadInplayOdds',
			success:function($r){
				jQuery('.inplay-games').html($r);
				intervalBackGrounds();
				prepareButtonEvents();
			}
		});
		setInterval(function(){
			$.ajax({
				type: 'GET',
				url: '<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/reloadInplayOdds',
				success: function($r){
					jQuery('.inplay-games').html($r);
					intervalBackGrounds();
					prepareButtonEvents();
				}
			});
		}, 5000);
		setTimeout(function(){
			window.location = window.location;
		}, 180000);
	});
    function intervalBackGrounds(){
        self.intervalBlinkBC = 0;
        var intervalID = setInterval(function(){
			$('.blink-green').removeClass('blink-green');
			clearInterval(intervalID);
        }, 2000);
        self.intervalBlinkBC2 = 0;
        var intervalID2 = setInterval(function(){
			$('.blink-red').removeClass('blink-red');
			clearInterval(intervalID2);
        }, 2000);
    }
<?php echo '</script'; ?>
>
<div>
	<div class="cell">
		<div class="container">
			<div class="maincontent clearfix">
				<div class="content">
					<ul class="odds inplay">
						<li>
							<div class="col-lg-3">
								<div style="margin-top: 10px !important;" class="sidebar-desktop-casino-games">
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/crash"><img style="margin-bottom: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/crash.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/baccarat"><img style="margin-bottom: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/baccarat.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/blackjack"><img style="margin-bottom: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/blackjack.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/royal_roulette"><img style="margin-bottom: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/royal_roulette.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/seven_clubs"><img style="margin-bottom: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/seven_clubs.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/two_verdicts"><img style="margin-bottom: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/two_verdicts.gif"></a>
								</div>
							</div>
							<div class="col-lg-6">
								<?php echo '<script'; ?>
 type="text/javascript">
									jQuery(document).ready(function(){
										var image_container_width = jQuery(".image-container").width();
										jQuery('.image-container').height(image_container_width / 2);
										jQuery(window).resize(function(){
											jQuery('.image-container').height(image_container_width / 2);
										});
										var splash_total = jQuery('.main-splash .image-container .image').length;
										if(splash_total >= 1){
											setInterval(function(){
												var total = jQuery('.main-splash .image-container .image').length;
												var new_total = parseInt(total - 1);
												var main_splash_data = jQuery('.main-splash').attr('data');
												var active = parseInt(main_splash_data);
												if(active >= new_total){
													jQuery('.main-splash').attr({ data: '0' });
													jQuery('.main-splash .image-container .image').animate({ marginRight: '0%' }, 500);
													return false;
												}else{
													active++;
													var active_node = jQuery('.main-splash .image-container .image')[active];
													jQuery(active_node).clearQueue().finish();
													jQuery(active_node).animate({ marginRight: '-100%' }, 500);
													jQuery('.main-splash').attr({ 'data': active });
												}
											}, 5000);
										}
									});
								<?php echo '</script'; ?>
>
								<div class="main-splash" data="0">
									<div class="image-container" style="height: 400px !important; margin-top: 8px !important;">
										<div class="image" style="background-image: url(<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/slider/betting.jpg); margin-left: 0%;"></div>
										<div class="image" style="background-image: url(<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/slider/casino.jpg); margin-left: 0%;"></div>
										<div class="image" style="background-image: url(<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/slider/sport.jpg); margin-left: 0%;"></div>
										<!-- <a target="_blank" href="https://t.me/bwin7"><div class="image" style="background-image: url(<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/slider/telegram.jpg); margin-left: 0%;"></div></a> -->
										<!-- <a target="_blank" href="https://instagram.com/bwin.seven"><div class="image" style="background-image: url(<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/slider/instagram.jpg); margin-left: 0%;"></div></a> -->
									</div>
								</div>				
								<div class="events-holder" style="margin-top: 10px !important;">
									<div class="search-div"><span class="fa fa-search"></span><input type="text" id="search-box" placeholder="جستجو"></div>
									<div class="mt10 fs0">&nbsp;</div>
									<div class="inplay-games">
										<div align="center" style="padding: 20px !important;">
											<i class="fa fa-spinner fa-pulse fa-5x"></i>
										</div>
									</div>
								</div>
								<div class="alert alert-info no-matches-found-for-search" style="text-align: center !important; display: none; margin-top: 10px !important;">هیچ نتیجه ای مطابق با جستوجوی شما یافت نشد !</div>
							</div>
							<div class="col-lg-3">
								<div style="margin-top: 10px !important;">
									<table class="livescore betslip">
										<tbody>
											<tr><th style="color: #ffd33b  !important;">پیش بینی های من</th></tr>
											<tr>
												<td>
													<div class="nobet">برای پیش بینی، ضریب بازی مورد نظر خود را انتخاب کنید</div>
													<div class="selectedodds"><div class="betlist"></div></div>
												</td>
											</tr>
										</tbody>
									</table>
									<div class="bettotal" style="display: none; width: 100%;">
										<table class="livescore multiple"></table>
										<ul class="bettotal">
											<li>مبلغ شرط: <span class="totalstake">0</span> تومان</li>
											<li>برد احتمالی: <span class="totalwin">0</span> تومان</li>
										</ul>
										<table class="livescore" style="width:100% !important;">
											<tbody>
												<tr>
													<td>
														<button style="height: 40px !important;" class="deleteall form-button red-button" href="javascript:void(0)">حذف همه</button>
														<button style="height: 40px !important;" class="placebet form-button disabled">ثبت شرط</button>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="alertbox alertbox2 hidden"></div>
								<div style="margin-top: 10px !important;" class="sidebar-mobile-casino-games">
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/crash"><img style="margin-bottom: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/crash.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/baccarat"><img style="margin-bottom: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/baccarat.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/blackjack"><img style="margin-bottom: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/blackjack.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/royal_roulette"><img style="margin-bottom: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/royal_roulette.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/seven_clubs"><img style="margin-bottom: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/seven_clubs.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/two_verdicts"><img style="margin-bottom: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/two_verdicts.gif"></a>
								</div>
								<a href="http://t.me/bwin7" target="_blank"><img src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/telegram.gif" class="img-responsive img-thumbnail" style="margin-top: 10px !important; max-width: 100% !important; width: 100% !important;" /></a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
</div><?php }
}
