<?php
/* Smarty version 3.1.31, created on 2018-11-23 18:20:47
  from "/home/richbet/domains/richbet.xyz/public_html/themes/default/TkStarBet2018/modules/bets/inplayMe.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bf813c758d289_89688382',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'b47724d4d631a2ea569cdd6595901c7ad5eda5ef' => 
    array (
      0 => '/home/richbet/domains/richbet.xyz/public_html/themes/default/TkStarBet2018/modules/bets/inplayMe.tpl',
      1 => 1542120628,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5bf813c758d289_89688382 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/richbet/domains/richbet.xyz/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
if (!is_callable('smarty_function_assets_url')) require_once '/home/richbet/domains/richbet.xyz/public_html/TkStarApplication/smarty/plugins/function.assets_url.php';
?>
<style type="text/css">
	.blink-green{
		background-color: green;
		-webkit-animation: 1s linear infinite condemned_blink_effect_green;
		animation: 1s linear infinite condemned_blink_effect_green;
	}
	.blink-red{
		background-color: red;
		-webkit-animation: 1s linear infinite condemned_blink_effect_red;
		animation: 1s linear infinite condemned_blink_effect_red;
	}
	@-webkit-keyframes condemned_blink_effect_red{
		0%{
			background-color: red;
		}
		50%{
			background-color: red;
		}
		100%{
			background-color: #383838;
		}
	}
	@keyframes condemned_blink_effect_red{
		0%{
			background-color: red;
		}
		50%{
			background-color: red;
		}
		100%{
			background-color: #383838;
		}
	}
	@-webkit-keyframes condemned_blink_effect_green{
		0%{
			background-color: green;
		}
		50%{
			background-color: green;
		}
		100%{
			background-color: #383838;
		}
	}
	@keyframes condemned_blink_effect_green{
		0%{
			background-color: green;
		}
		50%{
			background-color: green;
		}
		100%{
			background-color: #383838;
		}
	}
</style>
<?php echo '<script'; ?>
 type="text/javascript">
	TkStarFreamWork(document).ready(function(){
		reload_inplay_bets();
		setInterval(reload_inplay_bets, 5000);
		setTimeout(function(){
			window.location = window.location;
		}, 180000);
		setInterval(inplay_timers, 1000);
	});
	function reload_inplay_bets(){
		TkStarFreamWork.ajax({
			type: 'GET',
			url: '<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/inplayBets',
			success: function(result){
				TkStarFreamWork('.inplay-games').html(result);
				caret_arrows();
				bets_odds_buttons();
				check_bets_runnerid();
				TkStarFreamWork('#search-box').trigger('change');
				return true;
			},
			error: function(){
				reload_inplay_bets();
				return false;
			},
			timeout: 60000
		});
	}
	function caret_arrows(){
		self.intervalBlinkBC = 0;
		var intervalID = setInterval(function(){
			TkStarFreamWork('.blink-green').removeClass('blink-green');
			clearInterval(intervalID);
		}, 2000);
		self.intervalBlinkBC2 = 0;
		var intervalID2 = setInterval(function(){
			TkStarFreamWork('.blink-red').removeClass('blink-red');
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
								<div class="sidebar-desktop-features">
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/crash"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/crash.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/baccarat"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/baccarat.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/blackjack"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/blackjack.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/royal_roulette"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/royal_roulette.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/seven_clubs"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/seven_clubs.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/two_verdicts"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/two_verdicts.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/plinko"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/plinko.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/craps"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/craps.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/fortune_wheel"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/fortune_wheel.gif"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/high_low"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/high_low.gif"></a>
								</div>
							</div>
							<div class="col-lg-6">
								<?php echo '<script'; ?>
 type="text/javascript">
									TkStarFreamWork(document).ready(function(){
										var image_container_width = TkStarFreamWork(".image-container").width();
										TkStarFreamWork('.image-container').height(image_container_width / 2);
										TkStarFreamWork(window).resize(function(){
											TkStarFreamWork('.image-container').height(image_container_width / 2);
										});
										var splash_total = TkStarFreamWork('.main-splash .image-container .image').length;
										if(splash_total >= 1){
											setInterval(function(){
												var total = TkStarFreamWork('.main-splash .image-container .image').length;
												var new_total = parseInt(total - 1);
												var main_splash_data = TkStarFreamWork('.main-splash').attr('data');
												var active = parseInt(main_splash_data);
												if(active >= new_total){
													TkStarFreamWork('.main-splash').attr({ data: '0' });
													TkStarFreamWork('.main-splash .image-container .image').animate({ marginRight: '0%' }, 500);
													return false;
												}else{
													active++;
													var active_node = TkStarFreamWork('.main-splash .image-container .image')[active];
													TkStarFreamWork(active_node).clearQueue().finish();
													TkStarFreamWork(active_node).animate({ marginRight: '-100%' }, 500);
													TkStarFreamWork('.main-splash').attr({ 'data': active });
												}
											}, 5000);
										}
									});
								<?php echo '</script'; ?>
>
								<div class="main-splash" data="0" style="margin-top: 10px !important;">
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
								<div class="event-container left" style="margin-top: 0px !important;">
									<div class="block mt10"><span class="fa fa-angle-down"></span> پیش بینی زنده</div>
									<div class="categories">
										<a href="javascript:;" data="1" class="categorie-link categorie scategory">
											<div><i class="TkSF TkSF-1"></i></div>
											<div class="name">فوتبال</div>
										</a>
										<a href="javascript:;" data="2" class="categorie-link categorie">
											<div><i class="TkSF TkSF-2"></i></div>
											<div class="name">بسکتبال</div>
										</a>
										<a href="javascript:;" data="3" class="categorie-link categorie">
											<div><i class="TkSF TkSF-23"></i></div>
											<div class="name">والیبال</div>
										</a>
									</div>
									<?php echo '<script'; ?>
>
										TkStarFreamWork(document).ready(function() {
											TkStarFreamWork('.categorie-link').click(function(){
												var this_element = TkStarFreamWork(this);
												var cat_id = this_element.attr('data');
												if(TkStarFreamWork('.sport-categories-' + cat_id).length >= 1){
													TkStarFreamWork('.scategory').removeClass('scategory');
													this_element.addClass('scategory');
													TkStarFreamWork('.sport-categories').fadeOut(500, function(){
														TkStarFreamWork('.sport-categories-' + cat_id).fadeIn(500);
													});
													return true;
												}else{
													swal({ title: 'خطایی رخ داده است !', text: 'به زودی  ثبت شرط برای این رشته ورزشی فعال خواهد شد. از صبر و شکیبایی شما متشکریم !', type: 'error', showCancelButton: false, confirmButtonClass: 'btn-primary', confirmButtonText: '<i class="fa fa-check-square"></i> بسیار خب' });
													return false;
												}
											});
										});
									<?php echo '</script'; ?>
>
									<div class="events-holder">
										<div class="search-div"><span class="fa fa-search"></span><input type="text" id="search-box" placeholder="جستجو"></div>
										<div class="mt10 fs0">&nbsp;</div>
										<div class="inplay-games">
											<div align="center" style="padding: 20px !important;">
												<i class="fa fa-spinner fa-pulse fa-5x"></i>
											</div>
										</div>
									</div>
								</div>
								<div class="row" style="padding: 10px 10px !important;"><div class="alert alert-info no-matches-found-for-search" style="text-align: center !important; display: none; margin-top: 10px !important;">هیچ نتیجه ای مطابق با جستوجوی شما یافت نشد !</div></div>
							</div>
							<div class="col-lg-3" id="first_bets_div">
								<div style="margin-top: 10px !important;">
									<table class="bets-table user-bets">
										<tbody>
											<tr><th style="color: #ffd33b !important;">پیش بینی های من</th></tr>
											<tr>
												<td style="background-color: #fff7db !important;">
													<div class="no-exisitings-bet">برای پیش بینی، ضریب بازی مورد نظر خود را انتخاب کنید</div>
													<div class="user-selected-odds">
														<div class="row change-bet-type" style="display: none; margin-top: -8px !important; background-color: #ffd43e !important; padding: 0px !important;">
															<a onclick="return change_forms('singles');" href="javascript:;" class="slip-title slip-singles slip-active">پیش بینی تکی</a>
															<a onclick="return change_forms('mix');" href="javascript:;" class="slip-title slip-mixes">پیش بینی میکس</a>
														</div>
														<div class="bets-element"></div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
									<div class="bettotal" style="display: none; width: 100%;">
										<table class="bets-table multiple"></table>
										<ul class="bettotal">
											<li>مبلغ شرط: <span class="totalstake">0</span> تومان</li>
											<li>برد احتمالی: <span class="totalwin">0</span> تومان</li>
										</ul>
										<table class="bets-table" style="width:100% !important;">
											<tbody>
												<tr>
													<td>
														<div class="checkbox pr10">
															<label>
																<input class="slip-bet-force" id="bet_force" type="checkbox">
																<text>در صورت تغییر ضریب فرم پیش بینی ثبت شود</text>
															</label>
														</div>
														<button style="height: 40px !important;" class="delete_all_bets form-button red-button" href="javascript:void(0)">حذف همه</button>
														<button style="height: 40px !important;" class="placebet form-button">ثبت شرط</button>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="hidden-md hidden-sm hidden-xs"><a href="http://t.me/rich90bet" target="_blank"><img src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/telegram.gif" class="img-responsive img-thumbnail" style="margin-top: 10px !important; max-width: 100% !important; width: 100% !important;" /></a></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div><?php }
}
