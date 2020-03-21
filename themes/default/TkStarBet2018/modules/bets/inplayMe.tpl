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
<script type="text/javascript">
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
			url: '{site_url}bets/inplayBets',
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
</script>
<div class="back-main">
	<div class="cell">
		<div class="container">
			<div class="maincontent clearfix">
				<div class="content">
					<ul class="odds inplay ">
						<li>
							<div class="col-lg-3">
								<div class="sidebar-desktop-features">
									<a href="{site_url}casino/crash"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/crash1.jpg"></a>
									<a href="{site_url}casino/baccarat"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/baccarat1.jpg"></a>
									<a href="{site_url}casino/blackjack"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/blackjack1.jpg"></a>
									<a href="{site_url}casino/royal_roulette"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/roulette1.jpg"></a>
									<a href="{site_url}casino/seven_clubs"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/pasur1.jpg"></a>
									<a href="{site_url}casino/two_verdicts"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/court_piece1.jpg"></a>
									<a href="{site_url}casino/plinko"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/ball_basket.jpg"></a>
									<a href="{site_url}casino/craps"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/earth_dice.jpg"></a>
									<a href="{site_url}casino/fortune_wheel"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/fortune_wheel1.jpg"></a>
									<a href="{site_url}casino/high_low"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/less_more.jpg"></a>
								</div>
							</div>
							<div class="col-lg-6">
								<script type="text/javascript">
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
								</script>
								<div class="main-splash" data="0" style="margin-top: 10px !important;">
									<div class="image-container">
										<div class="image" style="background-image: url({assets_url}/images/slider/betting1.jpg); margin-left: 0%;"></div>
										<div class="image" style="background-image: url({assets_url}/images/slider/casino.jpg); margin-left: 0%;"></div>
										<div class="image" style="background-image: url({assets_url}/images/slider/sport.jpg); margin-left: 0%;"></div>
										<!-- <a target="_blank" href="https://t.me/bwin7"><div class="image" style="background-image: url({assets_url}/images/support_online.jpg); margin-left: 0%;"></div></a> -->
										<!-- <a target="_blank" href="https://instagram.com/bwin.seven"><div class="image" style="background-image: url({assets_url}/images/slider/instagram.jpg); margin-left: 0%;"></div></a> -->
									</div>
								</div>				
								<div class="event-container left">
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
									<script>
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
									</script>
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
											<tr><th>پیش بینی های من</th></tr>
											<tr>
												<td>
													<div class="no-exisitings-bet">برای پیش بینی، ضریب بازی مورد نظر خود را انتخاب کنید</div>
													<div class="user-selected-odds">
														<div class="row change-bet-type" style="display: none; margin-top: -8px !important; background-color: #FFCB39 !important; padding: 0px !important;">
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
								<div class="hidden-md hidden-sm hidden-xs"><a href="http://t.me/rich90bet" target="_blank"><img src="{assets_url}/images/support_online.jpg" class="img-responsive img-thumbnail" style="margin-top: 10px !important; max-width: 100% !important; width: 100% !important;" /></a></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>