<?php
/* Smarty version 3.1.31, created on 2019-03-16 22:19:35
  from "C:\xampp\htdocs\00\themes\default\TkStarBet2018\modules\bets\upComing.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c8d76778c74c7_91241920',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '9be1185928845717871d0c8892cdee201d9a0457' => 
    array (
      0 => 'C:\\xampp\\htdocs\\00\\themes\\default\\TkStarBet2018\\modules\\bets\\upComing.tpl',
      1 => 1545503063,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c8d76778c74c7_91241920 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once 'C:\\xampp\\htdocs\\00\\TkStarApplication\\smarty\\plugins\\function.site_url.php';
if (!is_callable('smarty_function_jdate')) require_once 'C:\\xampp\\htdocs\\00\\TkStarApplication\\smarty\\plugins\\function.jdate.php';
if (!is_callable('smarty_modifier_fa')) require_once 'C:\\xampp\\htdocs\\00\\TkStarApplication\\smarty\\plugins\\modifier.fa.php';
if (!is_callable('smarty_function_searchArray')) require_once 'C:\\xampp\\htdocs\\00\\TkStarApplication\\smarty\\plugins\\function.searchArray.php';
if (!is_callable('smarty_modifier_con')) require_once 'C:\\xampp\\htdocs\\00\\TkStarApplication\\smarty\\plugins\\modifier.con.php';
if (!is_callable('smarty_function_assets_url')) require_once 'C:\\xampp\\htdocs\\00\\TkStarApplication\\smarty\\plugins\\function.assets_url.php';
?>
<div>
	<div class="cell">
		<div class="container">
			<div class="maincontent clearfix" style="margin-right: -15px !important; margin-left: -15px !important;">
				<div class="content">
					<div class="odds inplay">
						<li>
							<div class="col-lg-3 sidebar-desktop-features">
								<div class="left-bar" style="margin-top: 10px !important;">
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
								</div>
								<div style="margin-top: 10px !important;">
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/crash"><img style="margin-top-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/crash.png"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/baccarat"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/baccarat.png"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/blackjack"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/blackjack.png"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/royal_roulette"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/royal_roulette.png"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/seven_clubs"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/seven_clubs.png"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/two_verdicts"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/two_verdicts.png"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/plinko"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/plinko.png"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/craps"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/craps.png"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/fortune_wheel"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/fortune_wheel.png"></a>
									<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/high_low"><img style="margin-top: 10px !important; width: 100%; display: inline;" src="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
casino/templates/images/logoes/high_low.png"></a>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="event-container left" style="margin-top: 0px !important;">
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
										<div class="mt10 fs0"></div>
									    <?php if (count($_smarty_tpl->tpl_vars['matches']->value) <= 0) {?>
									        <div class="row"><div class="alert alert-danger" style="display: block !important; margin-bottom: 5px !important;">متاسفانه برای این روز بازی دیگری وجود ندارد. لطفا به روز آینده مراجعه کنید</div></div>
									    <?php } else { ?>
    										<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['matches']->value, 'val', false, 'key');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['key']->value => $_smarty_tpl->tpl_vars['val']->value) {
?>
    											<div class="event-row-parent-search sport-categories sport-categories-1">
    												<div class="event-type">
    													<div class="title">
    														<div class="text"><span class="yellow"><i class="fa fa-soccer-ball-o" style="margin-left: 10px !important;"></i> <?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['key']->value);?>
</span></div>
    														<div class="odd-title">میزبان</div>
    														<div class="odd-title">مساوی</div>
    														<div class="odd-title">میهمان</div>
    														<div class="clear"></div>
    													</div>
    													<div class="odd-container">
    													    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['val']->value, 'match');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['match']->value) {
?>
    															<?php ob_start();
echo smarty_function_searchArray(array('key'=>'name','val'=>'1xbet','array'=>$_smarty_tpl->tpl_vars['match']->value->odds->data[0]->bookmaker->data),$_smarty_tpl);
$_prefixVariable1=ob_get_clean();
$_smarty_tpl->_assignInScope('myArray', $_smarty_tpl->tpl_vars['match']->value->odds->data[0]->bookmaker->data[$_prefixVariable1]);
?>
    															<div class="event-row event-row-search event-<?php echo $_smarty_tpl->tpl_vars['match']->value->id;?>
">
    																<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/moreBets/<?php echo $_smarty_tpl->tpl_vars['match']->value->id;?>
/NS" class="event-title">
    																	<div class="event-time"><i class="fa fa-clock-o" style="margin-left: 10px !important;"></i> <?php echo Miladr\Jalali\jDateTime::date('H:i',strtotime($_smarty_tpl->tpl_vars['match']->value->time->starting_at->date_time));?>
</div>
    																	<div class="mt5">
    																		<div class="left score home-score" style="font-size: 12px !important;"><span class="host">0</span></div>
    																		<div class="left home-team" style="font-size: 12px !important;"><span class="host"><?php echo smarty_modifier_fa(Str::Start($_smarty_tpl->tpl_vars['match']->value->localTeam->data->name,' '));?>
</span></div>
    																		<div class="clear"></div>
    																	</div>
    																	<div class="mt5">
    																		<div class="left score away-score" style="font-size: 12px !important;"><span class="guest">0</span></div>
    																		<div class="left away-team" style="font-size: 12px !important;"><span class="guest"><?php echo smarty_modifier_fa(Str::Start($_smarty_tpl->tpl_vars['match']->value->visitorTeam->data->name,' '));?>
</span></div>
    																		<div class="clear"></div>
    																	</div>
    																	<div class="clear"></div>
    																</a>
    																<span class="event-odds">
    																	<div class="market-box-10">
    																		<a href="javascript:;" data-eventid="<?php echo $_smarty_tpl->tpl_vars['match']->value->id;?>
" data-runnerid="<?php ob_start();
echo smarty_function_searchArray(array('key'=>'label','val'=>'1','array'=>$_smarty_tpl->tpl_vars['myArray']->value->odds->data),$_smarty_tpl);
$_prefixVariable2=ob_get_clean();
ob_start();
echo $_smarty_tpl->tpl_vars['myArray']->value->odds->data[$_prefixVariable2]->label;
$_prefixVariable3=ob_get_clean();
echo smarty_modifier_con($_smarty_tpl->tpl_vars['match']->value->id,'-',$_smarty_tpl->tpl_vars['myArray']->value->id,'-1x2-',$_prefixVariable3);?>
" data-pick="<?php echo $_smarty_tpl->tpl_vars['match']->value->localTeam->data->name;?>
" data-points="" class="inplaybtn odd-rate odd-main-button odd-link<?php ob_start();
echo smarty_function_searchArray(array('key'=>'label','val'=>'1','array'=>$_smarty_tpl->tpl_vars['myArray']->value->odds->data),$_smarty_tpl);
$_prefixVariable4=ob_get_clean();
if ($_smarty_tpl->tpl_vars['myArray']->value->odds->data[$_prefixVariable4]->value == '') {?> passive-ma<?php }?>"><span><?php ob_start();
echo smarty_function_searchArray(array('key'=>'label','val'=>'1','array'=>$_smarty_tpl->tpl_vars['myArray']->value->odds->data),$_smarty_tpl);
$_prefixVariable5=ob_get_clean();
if (empty($_smarty_tpl->tpl_vars['myArray']->value->odds->data[$_prefixVariable5]->value)) {?><text style="color: white !important;">...</text><?php } else {
ob_start();
echo smarty_function_searchArray(array('key'=>'label','val'=>'1','array'=>$_smarty_tpl->tpl_vars['myArray']->value->odds->data),$_smarty_tpl);
$_prefixVariable6=ob_get_clean();
echo $_smarty_tpl->tpl_vars['myArray']->value->odds->data[$_prefixVariable6]->value;
}?></span></a>
    																		<a href="javascript:;" data-eventid="<?php echo $_smarty_tpl->tpl_vars['match']->value->id;?>
" data-runnerid="<?php ob_start();
echo smarty_function_searchArray(array('key'=>'label','val'=>'X','array'=>$_smarty_tpl->tpl_vars['myArray']->value->odds->data),$_smarty_tpl);
$_prefixVariable7=ob_get_clean();
ob_start();
echo $_smarty_tpl->tpl_vars['myArray']->value->odds->data[$_prefixVariable7]->label;
$_prefixVariable8=ob_get_clean();
echo smarty_modifier_con($_smarty_tpl->tpl_vars['match']->value->id,'-',$_smarty_tpl->tpl_vars['myArray']->value->id,'-1x2-',$_prefixVariable8);?>
" data-pick="مساوی" data-points="" class="inplaybtn odd-rate odd-main-button odd-link<?php ob_start();
echo smarty_function_searchArray(array('key'=>'label','val'=>'X','array'=>$_smarty_tpl->tpl_vars['myArray']->value->odds->data),$_smarty_tpl);
$_prefixVariable9=ob_get_clean();
if ($_smarty_tpl->tpl_vars['myArray']->value->odds->data[$_prefixVariable9]->value == '') {?> passive-ma<?php }?>"><span><?php ob_start();
echo smarty_function_searchArray(array('key'=>'label','val'=>'X','array'=>$_smarty_tpl->tpl_vars['myArray']->value->odds->data),$_smarty_tpl);
$_prefixVariable10=ob_get_clean();
if (empty($_smarty_tpl->tpl_vars['myArray']->value->odds->data[$_prefixVariable10]->value)) {?><text style="color: white !important;">...</text><?php } else {
ob_start();
echo smarty_function_searchArray(array('key'=>'label','val'=>'X','array'=>$_smarty_tpl->tpl_vars['myArray']->value->odds->data),$_smarty_tpl);
$_prefixVariable11=ob_get_clean();
echo $_smarty_tpl->tpl_vars['myArray']->value->odds->data[$_prefixVariable11]->value;
}?></span></a>
    																		<a href="javascript:;" data-eventid="<?php echo $_smarty_tpl->tpl_vars['match']->value->id;?>
" data-runnerid="<?php ob_start();
echo smarty_function_searchArray(array('key'=>'label','val'=>'2','array'=>$_smarty_tpl->tpl_vars['myArray']->value->odds->data),$_smarty_tpl);
$_prefixVariable12=ob_get_clean();
ob_start();
echo $_smarty_tpl->tpl_vars['myArray']->value->odds->data[$_prefixVariable12]->label;
$_prefixVariable13=ob_get_clean();
echo smarty_modifier_con($_smarty_tpl->tpl_vars['match']->value->id,'-',$_smarty_tpl->tpl_vars['myArray']->value->id,'-1x2-',$_prefixVariable13);?>
" data-pick="<?php echo $_smarty_tpl->tpl_vars['match']->value->visitorTeam->data->name;?>
" data-points="" class="inplaybtn odd-rate odd-main-button odd-link<?php ob_start();
echo smarty_function_searchArray(array('key'=>'label','val'=>'2','array'=>$_smarty_tpl->tpl_vars['myArray']->value->odds->data),$_smarty_tpl);
$_prefixVariable14=ob_get_clean();
if ($_smarty_tpl->tpl_vars['myArray']->value->odds->data[$_prefixVariable14]->value == '') {?> passive-ma<?php }?>"><span><?php ob_start();
echo smarty_function_searchArray(array('key'=>'label','val'=>'2','array'=>$_smarty_tpl->tpl_vars['myArray']->value->odds->data),$_smarty_tpl);
$_prefixVariable15=ob_get_clean();
if (empty($_smarty_tpl->tpl_vars['myArray']->value->odds->data[$_prefixVariable15]->value)) {?><text style="color: white !important;">...</text><?php } else {
ob_start();
echo smarty_function_searchArray(array('key'=>'label','val'=>'2','array'=>$_smarty_tpl->tpl_vars['myArray']->value->odds->data),$_smarty_tpl);
$_prefixVariable16=ob_get_clean();
echo $_smarty_tpl->tpl_vars['myArray']->value->odds->data[$_prefixVariable16]->value;
}?></span></a>
    																	</div>
    																</span>
    																<?php $_smarty_tpl->_assignInScope('odd_alls', count($_smarty_tpl->tpl_vars['match']->value->odds->data));
?>
    																<?php if ($_smarty_tpl->tpl_vars['odd_alls']->value <= 0) {?>
    																	<?php $_smarty_tpl->_assignInScope('odd_alls', '0');
?>
    																<?php } elseif ($_smarty_tpl->tpl_vars['odd_alls']->value >= 1) {?>
    																	<?php $_smarty_tpl->_assignInScope('odd_alls', smarty_modifier_con('+',$_smarty_tpl->tpl_vars['odd_alls']->value));
?>
    																<?php } else { ?>
    																	<?php $_smarty_tpl->_assignInScope('odd_alls', 'N/A');
?>
    																<?php }?>
    																<?php if (!empty($_smarty_tpl->tpl_vars['odd_alls']->value) && is_numeric($_smarty_tpl->tpl_vars['odd_alls']->value) && $_smarty_tpl->tpl_vars['odd_alls']->value >= 20) {?>
    																	<?php $_smarty_tpl->_assignInScope('odd_alls', '+19');
?>
    																<?php }?>
    																<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/moreBets/<?php echo $_smarty_tpl->tpl_vars['match']->value->id;?>
/NS" class="inplaybtn odd-rate odd-main-button odd-link has-tip odd-alls" title="شروط بیشتر"><span><?php echo $_smarty_tpl->tpl_vars['odd_alls']->value;?>
</span></a>
    																<div class="clear"></div>
    															</div>
    														<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

    													</div>
    												</div>
    											</div>
    										<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

									    <?php }?>
									</div>
									<div class="row" style="padding: 10px 10px !important;"><div class="alert alert-info no-matches-found-for-search" style="text-align: center !important; display: none; margin-top: 10px !important;">هیچ نتیجه ای مطابق با جستوجوی شما یافت نشد !</div></div>
								</div>
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
					</div>
				</div>
			</div>
		</div>
	</div>
</div><?php }
}
