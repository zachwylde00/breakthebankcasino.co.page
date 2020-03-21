<div>
    <script type="text/javascript">
    TkStarFreamWork(document).ready(function(){
    	TkStarFreamWork('.sport-categories').each(function(){
    	    if(TkStarFreamWork(this).find('.odd-container').html().trim() === ''){
    	        TkStarFreamWork(this).remove();
    	    }
    	});
	});
    </script>
	<div class="cell back-main">
		<div class="container">
			<div class="maincontent clearfix">
				<div class="content">
					<div class="odds inplay">
						<li>
							<div class="col-lg-3 sidebar-desktop-features">
								<div class="left-bar" style="margin-top: 10px !important;">
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
								</div>
								<div style="margin-top: 10px !important;">
									<a href="{site_url}casino/crash"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/crash1.jpg"></a>
									<a href="{site_url}casino/baccarat"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/baccarat1.jpg"></a>
									<a href="{site_url}casino/blackjack"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/blackjack1.jpg"></a>
									<a href="{site_url}casino/royal_roulette"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/roulette1.jpg"></a>
									<a href="{site_url}casino/seven_clubs"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/court_piece1.jpg"></a>
									<a href="{site_url}casino/two_verdicts"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/pasur1.jpg"></a>
									<a href="{site_url}casino/plinko"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/ball_basket.jpg"></a>
									<a href="{site_url}casino/craps"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/earth_dice.jpg"></a>
									<a href="{site_url}casino/fortune_wheel"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/fortune_wheel1.jpg"></a>
									<a href="{site_url}casino/high_low"><img class="home-game-iname" src="{site_url}casino/templates/images/logoes/less_more.jpg"></a>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="event-container left">
									<div class="block mt10"><span class="fa fa-angle-down"></span> پیش بینی پیش از بازی</div>
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
										<div class="mt10 fs0"></div>
									    {if count($matches) <= 0}
									        <div class="row"><div class="alert alert-danger" style="display: block !important; margin-bottom: 5px !important;">متاسفانه برای این روز بازی دیگری وجود ندارد. لطفا به روز آینده مراجعه کنید</div></div>
									    {else}
    										{foreach $matches as $key => $val}
    											<div class="event-row-parent-search sport-categories sport-categories-1">
    												<div class="event-type">
    													<div class="title">
    														<div class="text"><span class="yellow"><i class="fa fa-soccer-ball-o" style="margin-left: 10px !important;"></i> {$key|fa}</span></div>
    														<div class="odd-title">میزبان</div>
    														<div class="odd-title">مساوی</div>
    														<div class="odd-title">میهمان</div>
    														<div class="clear"></div>
    													</div>
    													<div class="odd-container">
    													    {foreach $val as $match}
    															{$myArray = (isset($match->odds->data[1]) AND $match->odds->data[1]->name == '3Way Result') ? $match->odds->data[1]->bookmaker->data[0] : $match->odds->data[0]->bookmaker->data[0]}
    															{if empty($myArray) OR (!is_array($myArray) AND !is_object($myArray))}
    															    {continue}
    															{/if}
    															<div class="event-row event-row-search event-{$match->id}">
    																<a href="{site_url}bets/moreBets/{$match->id}/NS" class="event-title">
    																	<div class="event-time"><i class="fa fa-clock-o" style="margin-left: 10px !important;"></i> {Miladr\Jalali\jDateTime::date('H:i', strtotime($match->time->starting_at->date_time))}</div>
    																	<div class="mt5">
    																		<div class="left score home-score" style="font-size: 12px !important;"><span class="host">0</span></div>
    																		<div class="left home-team" style="font-size: 12px !important;"><span class="host">{Str::Start($match->localTeam->data->name, ' ')|fa}</span></div>
    																		<div class="clear"></div>
    																	</div>
    																	<div class="mt5">
    																		<div class="left score away-score" style="font-size: 12px !important;"><span class="guest">0</span></div>
    																		<div class="left away-team" style="font-size: 12px !important;"><span class="guest">{Str::Start($match->visitorTeam->data->name, ' ')|fa}</span></div>
    																		<div class="clear"></div>
    																	</div>
    																	<div class="clear"></div>
    																</a>
    																<span class="event-odds">
    																	<div class="market-box-10">
    																		<a href="javascript:;" data-eventid="{$match->id}" data-runnerid="{$match->id|con:'-': $myArray->id:'-1x2-': {$myArray->odds->data[{searchArray key='label' val='1' array=$myArray->odds->data}]->label}}" data-pick="{$match->localTeam->data->name}" data-points="" class="inplaybtn odd-rate odd-main-button odd-link{if $myArray->odds->data[{searchArray key='label' val='1' array=$myArray->odds->data}]->value == ''} passive-ma{/if}"><span>{if empty($myArray->odds->data[{searchArray key='label' val='1' array=$myArray->odds->data}]->value)}<text style="color: white !important;">...</text>{else}{$myArray->odds->data[{searchArray key='label' val='1' array=$myArray->odds->data}]->value}{/if}</span></a>
    																		<a href="javascript:;" data-eventid="{$match->id}" data-runnerid="{$match->id|con:'-': $myArray->id:'-1x2-': {$myArray->odds->data[{searchArray key='label' val='X' array=$myArray->odds->data}]->label}}" data-pick="مساوی" data-points="" class="inplaybtn odd-rate odd-main-button odd-link{if $myArray->odds->data[{searchArray key='label' val='X' array=$myArray->odds->data}]->value == ''} passive-ma{/if}"><span>{if empty($myArray->odds->data[{searchArray key='label' val='X' array=$myArray->odds->data}]->value)}<text style="color: white !important;">...</text>{else}{$myArray->odds->data[{searchArray key='label' val='X' array=$myArray->odds->data}]->value}{/if}</span></a>
    																		<a href="javascript:;" data-eventid="{$match->id}" data-runnerid="{$match->id|con:'-': $myArray->id:'-1x2-': {$myArray->odds->data[{searchArray key='label' val='2' array=$myArray->odds->data}]->label}}" data-pick="{$match->visitorTeam->data->name}" data-points="" class="inplaybtn odd-rate odd-main-button odd-link{if $myArray->odds->data[{searchArray key='label' val='2' array=$myArray->odds->data}]->value == ''} passive-ma{/if}"><span>{if empty($myArray->odds->data[{searchArray key='label' val='2' array=$myArray->odds->data}]->value)}<text style="color: white !important;">...</text>{else}{$myArray->odds->data[{searchArray key='label' val='2' array=$myArray->odds->data}]->value}{/if}</span></a>
    																	</div>
    																</span>
    																{$odd_alls = count($match->odds->data)}
    																{if $odd_alls <= 0}
    																	{$odd_alls = '0'}
    																{elseif $odd_alls >= 1}
    																	{$odd_alls = '+'|con:$odd_alls}
    																{else}
    																	{$odd_alls = 'N/A'}
    																{/if}
    																{if !empty($odd_alls) AND is_numeric($odd_alls) AND $odd_alls >= 20}
    																	{$odd_alls = '+19'}
    																{/if}
    																<a href="{site_url}bets/moreBets/{$match->id}/NS" class="inplaybtn odd-rate odd-main-button odd-link has-tip odd-alls" title="شروط بیشتر"><span>{$odd_alls}</span></a>
    																<div class="clear"></div>
    															</div>
    														{/foreach}
    													</div>
    												</div>
    											</div>
    										{/foreach}
									    {/if}
									</div>
									<div class="row" style="padding: 10px 10px !important;"><div class="alert alert-info no-matches-found-for-search" style="text-align: center !important; display: none; margin-top: 10px !important;">هیچ نتیجه ای مطابق با جستوجوی شما یافت نشد !</div></div>
								</div>
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
					</div>
				</div>
			</div>
		</div>
	</div>
</div>