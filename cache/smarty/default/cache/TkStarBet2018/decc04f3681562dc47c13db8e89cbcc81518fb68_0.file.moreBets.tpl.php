<?php
/* Smarty version 3.1.31, created on 2018-10-14 19:37:08
  from "C:\xampp\htdocs\themes\default\TkStarBet2018\modules\bets\moreBets.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bc369ac7b8308_65744070',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'decc04f3681562dc47c13db8e89cbcc81518fb68' => 
    array (
      0 => 'C:\\xampp\\htdocs\\themes\\default\\TkStarBet2018\\modules\\bets\\moreBets.tpl',
      1 => 1539524508,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5bc369ac7b8308_65744070 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\function.site_url.php';
if (!is_callable('smarty_modifier_fa')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\modifier.fa.php';
if (!is_callable('smarty_function_assets_url')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\function.assets_url.php';
echo '<script'; ?>
 type="text/javascript">
	TkStarFreamWork(document).ready(function(){
		self.first_timers_interval = 'false';
		setTimeout(bets_details, 1);
		setInterval(bets_details, 10000);
		setInterval(moreBets_timers, 1000);
		setInterval(reload_page, 120000);
		TkStarFreamWork('.reload-details-event').click(function(){
			var this_element = TkStarFreamWork(this);
			if(TkStarFreamWork('.stream-container-details-event').is(':visible')){
				TkStarFreamWork('.stream-container-details-event').slideUp(250);
				this_element.find('i.fa').removeClass('fa-caret-down').addClass('fa-caret-up');
			}else{
				TkStarFreamWork('.stream-container-details-event').slideDown(250);
				this_element.find('i.fa').removeClass('fa-caret-up').addClass('fa-caret-down');
			}
		});
	});
	function reload_page(){
		document.location.reload();
		return true;
	}
	function caret_arrows(){
		TkStarFreamWork('.red-arrow').each(function(){
			TkStarFreamWork(this).remove();
		});
		TkStarFreamWork('.green-arrow').each(function(){
			TkStarFreamWork(this).remove();
		});
		return true;
	}
	function bets_details(){
		TkStarFreamWork.ajax({
			type: 'POST',
			url: '<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/moreBetsDetails/<?php echo $_smarty_tpl->tpl_vars['match_id']->value;?>
/<?php echo $_smarty_tpl->tpl_vars['type']->value;?>
',
			success: function(result){
				var response = result.toString().trim();
				response = encodeURIComponent(response);
				response = response.replace(/%00/g, '');
				response = decodeURIComponent(response);
				if(response.substr(0, 6) == 'error|'){
					TkStarFreamWork('.soccer-game-details-loader').hide(0, function(){
						var $error = response.split('|');
						var $error_message = $error[1];
						TkStarFreamWork('.soccer-game-details').hide(0);
						TkStarFreamWork('.soccer-game-details-error').show().html($error_message);
					});
				}else{
					var details_json = JSON.parse(response);
					TkStarFreamWork('.host').val(details_json.visitorTeam_name);
					TkStarFreamWork('.guest').val(details_json.localTeam_name);
					TkStarFreamWork('.home-team').html(details_json.visitorTeam_name);
					TkStarFreamWork('.away-team').html(details_json.localTeam_name);
					TkStarFreamWork('.home-score').html(details_json.visitorTeam_score);
					TkStarFreamWork('.away-score').html(details_json.localTeam_score);
					TkStarFreamWork('.home-cards').html(details_json.localTeam_cards);
					TkStarFreamWork('.away-cards').html(details_json.visitorTeam_cards);
					TkStarFreamWork('.home-table-rank').html(details_json.localTeam_position);
					TkStarFreamWork('.away-table-rank').html(details_json.visitorTeam_position);
					TkStarFreamWork('.home-formation').html(details_json.localTeam_formation);
					TkStarFreamWork('.away-formation').html(details_json.visitorTeam_formation);
					TkStarFreamWork('.home-penalties').html(details_json.localTeam_penalties);
					TkStarFreamWork('.away-penalties').html(details_json.visitorTeam_penalties);
					TkStarFreamWork('.home-corners').html(details_json.localTeam_corners);
					TkStarFreamWork('.away-corners').html(details_json.visitorTeam_corners);
					TkStarFreamWork('.weather-icon').html(details_json.weather_icon);
					TkStarFreamWork('.weather-temperature').html(details_json.weather_temperature);
					TkStarFreamWork('.weather-wind').html(details_json.weather_wind);
					TkStarFreamWork('.venue-name').html(details_json.venue_name);
					TkStarFreamWork('.venue-city').html(details_json.venue_city);
					TkStarFreamWork('.venue-capacity').html(details_json.venue_capacity);
					TkStarFreamWork('.title-bg').html(details_json.leagua);
					TkStarFreamWork('.eninplaytime').val(details_json.eninplaytime);
					TkStarFreamWork('.has-tip').tooltip({ html: true });
					setTimeout(caret_arrows, 1500);
					TkStarFreamWork.ajax({
						type: 'POST',
						url: '<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/moreBetsOdds/<?php echo $_smarty_tpl->tpl_vars['match_id']->value;?>
/<?php echo $_smarty_tpl->tpl_vars['type']->value;?>
',
						success: function(result){
							TkStarFreamWork('.soccer-game-details-loader').hide(0, function(){
								TkStarFreamWork('.soccer-game-details').show(0);
								TkStarFreamWork('.soccer-game-details-error').hide();
							});
							TkStarFreamWork('.market-types').html(result).fadeIn(0);
							bets_odds_buttons();
						}
					});
				}
				return true;
			},
			error: function(){
				bets_details();
				return false;
			},
			timeout: 60000
		});
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
								<div class="stream-bar stream-bar-event" style="margin-top: 10px !important;">
									<?php if ($_smarty_tpl->tpl_vars['status']->value == 'LIVE') {?>
									<div class="title" align="center">
										<div data="1" style="width: <?php if (empty($_smarty_tpl->tpl_vars['param_address']->value)) {?>100%<?php } else { ?>50%<?php }?> !important;" class="stream-tab stream-tab-event stream-tab-event-1 left single-tab text-center">گرافیک زنده <div class="symbol" style="transform: translate(50%,-4px);"><span class="fa fa-caret-up"></span></div></div>
										<?php if (!empty($_smarty_tpl->tpl_vars['param_address']->value)) {?>
										<div data="2" style="width: 50% !important;" class="stream-tab-event stream-tab-event-2 left double-tab tab-border">پخش زنده بازی <div class="symbol" style="display: none;transform: translate(50%,-4px);"><span class="fa fa-caret-up"></span></div></div>
										<?php }?>
										<div class="clear"></div>					
									</div>
									<div id="stream-type-1" class="stream-container"><iframe src="http://href.li/?https://cs.betradar.com/ls/widgets/?/hkjc/en/page/widgets_lmts#matchId=<?php echo $_smarty_tpl->tpl_vars['game_id']->value;?>
" width="100%" height="300" scrolling="no" seamless="seamless" style="border: 0px; overflow:hidden; display: block;"></iframe></div>
									<?php if (!empty($_smarty_tpl->tpl_vars['param_address']->value)) {?>
									<div id="stream-type-2" class="stream-container" style="display: none;"></div>
									<?php echo '<script'; ?>
>
										init_tv_player = function(){
											if(TkStarFreamWork('#stream-type-2').html() != ''){
												return false;
											}else{
												TkStarFreamWork('#stream-type-2').html('<object type="application/x-shockwave-flash" data="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
assets/default/plugins/player.swf" width="100%" height="170" style="display: block;"><param name="movie" value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
assets/default/plugins/player.swf" /><param name="bgcolor" value="#000000" /><param name="FlashVars" value="src=rtmp://<?php echo $_smarty_tpl->tpl_vars['param_address']->value;?>
" /><param name="allowscriptaccess" value="sameDomain" /><param name="allowFullScreen" value="true" /></object>');
											}
										};
										TkStarFreamWork(document).ready(function(){
											TkStarFreamWork('.stream-tab-event').click(function(){
												TkStarFreamWork('.stream-bar-event .stream-container').hide();
												var $tab_id = TkStarFreamWork(this).attr('data');
												if($tab_id == '2' || $tab_id == 2){
													init_tv_player();
												}else{
													TkStarFreamWork('#stream-type-2').html('');
												}
												TkStarFreamWork('#stream-type-' + $tab_id).show();
												TkStarFreamWork('.stream-bar-event .symbol').hide();
												TkStarFreamWork('.stream-bar-event .stream-tab-event-' + $tab_id + ' .symbol').show();
											});
										});
									<?php echo '</script'; ?>
>
									<?php }?>
									<?php } else { ?>
									<div class="title" align="center">
										<div data="1" style="width: 50% !important;" class="stream-tab-event stream-tab-event-1 left single-tab text-center">گرافیک زنده <div class="symbol" style="transform: translate(50%,-4px);"><span class="fa fa-caret-up"></span></div></div>
										<div data="2" style="width: 50% !important;" class="stream-tab-event stream-tab-event-2 left single-tab text-center">پخش زنده بازی <div class="symbol" style="transform: translate(50%,-4px);"><span class="fa fa-caret-up"></span></div></div>
										<div class="clear"></div>					
									</div>
									<?php echo '<script'; ?>
>
										TkStarFreamWork(document).ready(function(){
											TkStarFreamWork('.stream-tab-event').click(function(){
												TkStarFreamWork('.stream-bar-event .stream-container').hide();
												var $tab_id = TkStarFreamWork(this).attr('data');
												TkStarFreamWork('#stream-type-' + $tab_id).show();
												TkStarFreamWork('.stream-bar-event .symbol').hide();
												TkStarFreamWork('.stream-bar-event .stream-tab-event-' + $tab_id + ' .symbol').show();
											});
										});
									<?php echo '</script'; ?>
>
									<div id="stream-type-1" class="stream-container"><div style="text-align: center !important; color: #f0bdbd !important; font-size: 13px !important; padding: 20px !important;">تنها بازی های زنده دارای گرافیک زنده هستند</div></div>
									<div id="stream-type-2" class="stream-container" style="display: none;"><div style="text-align: center !important; color: #f0bdbd !important; font-size: 13px !important; padding: 20px !important;">تنها بازی های زنده دارای پخش زنده بازی هستند</div></div>
									<?php }?>
								</div>
								<div style="margin-top: 10px !important;" class="sidebar-desktop-features">
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
								<input type="hidden" class="host" value="<?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['matches']->value->localTeam->data->name);?>
">
								<input type="hidden" class="guest" value="<?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['matches']->value->visitorTeam->data->name);?>
">
								<div class="event-container" style="margin-top: 10px !important;">
									<div class="center border info football">
										<div class="title title-bg">Loading...</div>
										<div class="team team-bg mt15 ts left left-align">
											<div class="mt5 medium home-team text-center">Loading...</div>
											<span class="away-cards"></span>
										</div>
										<div class="left score">
											<div class="score-box score-bg ts left mt15">
												<span class="home-score">0</span>
												<div class="line-1"></div>
												<div class="line-2"></div>
											</div>
											<div class="score-box score-middle score-bg ts left mt15">
												<span>:</span>
												<div class="line-1"></div>
												<div class="line-2"></div>
											</div>					
											<div class="score-box score-bg ts left mt15">
												<span class="away-score">0</span>
												<div class="line-1"></div>
												<div class="line-2"></div>
											</div>
											<div class="left time">
												<span class="event-minute"></span>
												<span class="period" style="font-size: 18px !important;"><small>در حال بارگذاری</small></span>
												<input class="eninplaytime" type="hidden" value="">
											</div>
											<div class="clear"></div>
										</div>
										<div class="team team-bg mt15 ts left right-align">
											<div class="mt5 medium away-team text-center">Loading...</div>
											<span class="home-cards"></span>
										</div>
										<div class="clear"></div>
									</div>
									<div class="clear"></div>
									<div class="stream-bar" style="margin: 12px auto 10px auto !important;">
										<div class="title" align="center">
											<div style="width: 100% !important; cursor: pointer !important; direction: rtl !important;" class="stream-tab left single-tab text-center reload-details-event"><i class="fa fa-caret-down"></i> جزئیات بازی</div>
											<div class="clear"></div>					
										</div>
										<div class="stream-container stream-container-details-event" style="padding: 10px !important;">
											<div class="soccer-game-details">
												<table class="table no-hover" style="margin-bottom: 10px !important;">
													<thead>
														<tr style="background-color: #333 !important;">
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;"></td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;">نام تیم</td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;"></td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;" class="hidden-xs"><img class="soccer-inplayodds-icons has-tip" title="جایگاه تیم در جدول رده بندی" src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/icons/soccer/rank.svg" /></td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;" class="hidden-xs"><img class="soccer-inplayodds-icons has-tip" title="ترکیب تیم" src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/icons/soccer/formation.svg" /></td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;"><img class="soccer-inplayodds-icons has-tip" title="پنالتی های تیم" src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/icons/soccer/penalty.svg" /></td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;"><img class="soccer-inplayodds-icons has-tip" title="تعداد کرنر (Corners)" src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/icons/soccer/corner.svg" /></td>
														</tr>
													</thead>
													<tbody>
														<tr style="background-color: #333 !important;">
															<td style="padding: 10px !important; border-top: 2px solid white !important; cursor: auto !important;" colspan="3"><div class="away-team"></div></td>
															<td style="padding: 10px !important; border-top: 2px solid white !important; cursor: auto !important;" class="hidden-xs home-table-rank"></td>
															<td style="padding: 10px !important; border-top: 2px solid white !important; cursor: auto !important;" class="hidden-xs home-formation"></td>
															<td style="padding: 10px !important; border-top: 2px solid white !important; cursor: auto !important;" class="home-penalties"></td>
															<td style="padding: 10px !important; border-top: 2px solid white !important; cursor: auto !important;" class="home-corners"></td>
														</tr>
														<tr style="background-color: #333 !important;">
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;" colspan="3"><div class="home-team"></div></td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;" class="hidden-xs away-table-rank"></td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;" class="hidden-xs away-formation"></td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;" class="away-penalties"></td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;" class="away-corners"></td>
														</tr>
													</tbody>
												</table>
												<h4 class="hidden-lg hidden-md hidden-sm" style="text-align: center !important; color: white !important;margin: 20px;">مشخصات آب و هوا</h4>
												<table class="table no-hover" style="margin-bottom: 10px !important;">
													<tbody>
														<tr style="background-color: #333 !important;">
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;" class="hidden-xs" rowspan="2">وضعیت آب و هوا</td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;">نوع آب و هوا</td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;">دمای هوا</td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;">سرعت باد</td>
														</tr>
														<tr style="background-color: #333 !important;">
															<td style="padding: 10px !important; border-top: 2px solid white !important; cursor: auto !important;" class="weather-icon"></td>
															<td style="padding: 10px !important; border-top: 2px solid white !important; cursor: auto !important;" class="weather-temperature"></td>
															<td style="padding: 10px !important; border-top: 2px solid white !important; cursor: auto !important;" class="weather-wind"></td>
														</tr>
													</tbody>
												</table>
												<h4 class="hidden-lg hidden-md hidden-sm" style="text-align: center !important; color: white !important;margin: 20px;">مشخصات استادیوم</h4>
												<table class="table no-hover" style="margin-bottom: 0 !important;">
													<tbody>
														<tr style="background-color: #333 !important;">
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;" class="hidden-xs" rowspan="2">مشخصات استادیوم</td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;">نام</td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;">شهر</td>
															<td style="padding: 10px !important; border-top: none !important; cursor: auto !important;">ظرفیت</td>
														</tr>
														<tr style="background-color: #333 !important;">
															<td style="padding: 10px !important; border-top: 2px solid white !important; cursor: auto !important;" class="venue-name"></td>
															<td style="padding: 10px !important; border-top: 2px solid white !important; cursor: auto !important;" class="venue-city"></td>
															<td style="padding: 10px !important; border-top: 2px solid white !important; cursor: auto !important;" class="venue-capacity"></td>
														</tr>
													</tbody>
												</table>
											</div>
											<div class="soccer-game-details-error" style="display: none;"></div>
											<div class="soccer-game-details-loader"><i class="fa text-white m10 fa-5x fa-spinner fa-pulse"></i></div>
										</div>
									</div>
									<div class="clear"></div>
									<div class="market-types" style="display: none; margin-top: 10px;"></div>
								</div>
							</div>
							<div class="col-lg-3" id="first_bets_div">
								<div style="margin-top: 10px !important;">
									<table class="bets-table user-bets">
										<tbody>
											<tr><th style="color: #ffd33b !important;">پیش بینی های من</th></tr>
											<tr>
												<td>
													<div class="no_exisitings_bet">برای پیش بینی، ضریب بازی مورد نظر خود را انتخاب کنید</div>
													<div class="user-selected-odds"><div class="bets-element"></div><div style="margin-top: 20px !important; display: none;" class="alert alert-danger" id="error_for_mix_form">امکان ثبت شرط میکس بیشتر از 8 تایی وجود ندارد</div></div>
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
								<div class="hidden-md hidden-sm hidden-xs"><a href="http://t.me/bwin7" target="_blank"><img src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
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
