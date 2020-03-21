<?php
/* Smarty version 3.1.31, created on 2018-07-13 23:43:09
  from "C:\xampp\htdocs\themes\default\TkStarBet2018\modules\bets\preEvents.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5b48f9c5a78678_07737446',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '83a10c9bf6a308643f205664059bd8cd7c3753d6' => 
    array (
      0 => 'C:\\xampp\\htdocs\\themes\\default\\TkStarBet2018\\modules\\bets\\preEvents.tpl',
      1 => 1530307412,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5b48f9c5a78678_07737446 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\function.site_url.php';
if (!is_callable('smarty_modifier_fa')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\modifier.fa.php';
if (!is_callable('smarty_modifier_persian_number')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\modifier.persian_number.php';
if (!is_callable('smarty_modifier_con')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\modifier.con.php';
if (!is_callable('smarty_function_assets_url')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\function.assets_url.php';
?>
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
								<input type="hidden" class="host" value="<?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['matches']->value->homeTeam->name);?>
">
								<input type="hidden" class="guest" value="<?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['matches']->value->awayTeam->name);?>
">
								<div class="event-container" style="margin-top: 10px !important;">
									<div class="center border info football">
										<div class="title title-bg"><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['leagua']->value->league->name);?>
</div>
										<div class="team team-bg mt15 ts left right-align">
											<div class="mt5 medium home-team text-center"><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['matches']->value->homeTeam->name);?>
</div>
											<span class="home-cards"><!--cards--></span>
										</div>
										<div class="left score">
											<div class="score-box score-bg ts left mt15">
												<span class="home-score"><?php echo smarty_modifier_persian_number(0);?>
</span>
												<div class="line-1"></div>
												<div class="line-2"></div>
											</div>
											<div class="score-box score-middle score-bg ts left mt15">
												:
												<div class="line-1"></div>
												<div class="line-2"></div>
											</div>					
											<div class="score-box score-bg ts left mt15">
												<span class="away-score"><?php echo smarty_modifier_persian_number(0);?>
</span>
												<div class="line-1"></div>
												<div class="line-2"></div>
											</div>
											<div class="left time">
												<span class="period">بازی شروع نشده است</span>
												<span class="event-minute"></span>
											</div>
											<div class="clear"></div>
										</div>
										<div class="team team-bg mt15 ts left left-align">
											<div class="mt5 medium away-team text-center"><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['matches']->value->awayTeam->name);?>
</div>
											<span class="away-cards"><!--cards--></span>
										</div>
										<div class="clear"></div>
									</div>
									<div class="market-types" style="margin-top: -5px;">
										<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['odds']->value, 'val', false, 'key');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['key']->value => $_smarty_tpl->tpl_vars['val']->value) {
?>
											<?php if ($_smarty_tpl->tpl_vars['val']->value->type == 'Home/Away' || $_smarty_tpl->tpl_vars['val']->value->type == '3Way Handicap') {?>
												<?php
continue 1;?>
											<?php }?>
											<div class="mt5 market-type market-type-32" data="32">
												<a href="javascript:;" class="title box-title-action inplayheader" data-box="market-box-32"><span class="market-name mn-1-32"><b><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['val']->value->type);?>
</b></span></a>
												<div class="odd-container market-box-32 odddetails" data-eventid="<?php echo $_smarty_tpl->tpl_vars['matches']->value->id;?>
">
													<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['val']->value->odds->data, 'odd');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['odd']->value) {
?>
														<?php if ($_smarty_tpl->tpl_vars['val']->value->type == '1x2') {?>
															<?php if ($_smarty_tpl->tpl_vars['odd']->value->label == 1 || $_smarty_tpl->tpl_vars['odd']->value->label == '1' || $_smarty_tpl->tpl_vars['odd']->value->label == '1X' || $_smarty_tpl->tpl_vars['odd']->value->label == 'X1' || $_smarty_tpl->tpl_vars['odd']->value->label == '1x' || $_smarty_tpl->tpl_vars['odd']->value->label == 'x1') {?>
																<?php $_smarty_tpl->_assignInScope('oddLabel', smarty_modifier_fa($_smarty_tpl->tpl_vars['matches']->value->homeTeam->name));
?>
															<?php } elseif ($_smarty_tpl->tpl_vars['odd']->value->label == 2 || $_smarty_tpl->tpl_vars['odd']->value->label == '2' || $_smarty_tpl->tpl_vars['odd']->value->label == '2X' || $_smarty_tpl->tpl_vars['odd']->value->label == 'X2' || $_smarty_tpl->tpl_vars['odd']->value->label == '2x' || $_smarty_tpl->tpl_vars['odd']->value->label == 'x2') {?>
																<?php $_smarty_tpl->_assignInScope('oddLabel', smarty_modifier_fa($_smarty_tpl->tpl_vars['matches']->value->awayTeam->name));
?>
															<?php } else { ?>
																<?php $_smarty_tpl->_assignInScope('oddLabel', 'مساوی');
?>
															<?php }?>
														<?php } else { ?>
															<?php if ($_smarty_tpl->tpl_vars['odd']->value->label == 1 || $_smarty_tpl->tpl_vars['odd']->value->label == '1' || $_smarty_tpl->tpl_vars['odd']->value->label == '1X' || $_smarty_tpl->tpl_vars['odd']->value->label == 'X1' || $_smarty_tpl->tpl_vars['odd']->value->label == '1x' || $_smarty_tpl->tpl_vars['odd']->value->label == 'x1') {?>
																<?php $_smarty_tpl->_assignInScope('oddLabel', 'میزبان');
?>
															<?php } elseif ($_smarty_tpl->tpl_vars['odd']->value->label == 2 || $_smarty_tpl->tpl_vars['odd']->value->label == '2' || $_smarty_tpl->tpl_vars['odd']->value->label == '2X' || $_smarty_tpl->tpl_vars['odd']->value->label == 'X2' || $_smarty_tpl->tpl_vars['odd']->value->label == '2x' || $_smarty_tpl->tpl_vars['odd']->value->label == 'x2') {?>
																<?php $_smarty_tpl->_assignInScope('oddLabel', 'میهمان');
?>
															<?php } else { ?>
																<?php ob_start();
echo smarty_modifier_con($_smarty_tpl->tpl_vars['matches']->value->homeTeam->name,'/','Draw');
$_prefixVariable1=ob_get_clean();
if ($_smarty_tpl->tpl_vars['odd']->value->label == $_prefixVariable1) {?>
																	<?php $_smarty_tpl->_assignInScope('oddLabel', 'میزبان/مساوی');
?>
																<?php } else {
ob_start();
echo smarty_modifier_con($_smarty_tpl->tpl_vars['matches']->value->awayTeam->name,'/','Draw');
$_prefixVariable2=ob_get_clean();
if ($_smarty_tpl->tpl_vars['odd']->value->label == $_prefixVariable2) {?>
																	<?php $_smarty_tpl->_assignInScope('oddLabel', 'میهمان/مساوی');
?>
																<?php } else {
ob_start();
echo smarty_modifier_con('Draw','/',$_smarty_tpl->tpl_vars['matches']->value->awayTeam->name);
$_prefixVariable3=ob_get_clean();
if ($_smarty_tpl->tpl_vars['odd']->value->label == $_prefixVariable3) {?>
																	<?php $_smarty_tpl->_assignInScope('oddLabel', 'مساوی/میهمان');
?>
																<?php } else {
ob_start();
echo smarty_modifier_con('Draw','/',$_smarty_tpl->tpl_vars['matches']->value->homeTeam->name);
$_prefixVariable4=ob_get_clean();
if ($_smarty_tpl->tpl_vars['odd']->value->label == $_prefixVariable4) {?>
																	<?php $_smarty_tpl->_assignInScope('oddLabel', 'مساوی/میزبان');
?>
																<?php } else {
ob_start();
echo smarty_modifier_con($_smarty_tpl->tpl_vars['matches']->value->awayTeam->name,'/',$_smarty_tpl->tpl_vars['matches']->value->homeTeam->name);
$_prefixVariable5=ob_get_clean();
if ($_smarty_tpl->tpl_vars['odd']->value->label == $_prefixVariable5) {?>
																	<?php $_smarty_tpl->_assignInScope('oddLabel', 'میهمان/میزبان');
?>
																<?php } else {
ob_start();
echo smarty_modifier_con($_smarty_tpl->tpl_vars['matches']->value->homeTeam->name,'/',$_smarty_tpl->tpl_vars['matches']->value->awayTeam->name);
$_prefixVariable6=ob_get_clean();
if ($_smarty_tpl->tpl_vars['odd']->value->label == $_prefixVariable6) {?>
																	<?php $_smarty_tpl->_assignInScope('oddLabel', 'میزبان/میهمان');
?>
																<?php } else {
ob_start();
echo smarty_modifier_con($_smarty_tpl->tpl_vars['matches']->value->homeTeam->name,'/',$_smarty_tpl->tpl_vars['matches']->value->homeTeam->name);
$_prefixVariable7=ob_get_clean();
if ($_smarty_tpl->tpl_vars['odd']->value->label == $_prefixVariable7) {?>
																	<?php $_smarty_tpl->_assignInScope('oddLabel', 'میزبان/میزبان');
?>
																<?php } else {
ob_start();
echo smarty_modifier_con($_smarty_tpl->tpl_vars['matches']->value->awayTeam->name,'/',$_smarty_tpl->tpl_vars['matches']->value->awayTeam->name);
$_prefixVariable8=ob_get_clean();
if ($_smarty_tpl->tpl_vars['odd']->value->label == $_prefixVariable8) {?>
																	<?php $_smarty_tpl->_assignInScope('oddLabel', 'میهمان/میهمان');
?>
																<?php } else {
ob_start();
echo 'Draw/Draw';
$_prefixVariable9=ob_get_clean();
if ($_smarty_tpl->tpl_vars['odd']->value->label == $_prefixVariable9) {?>
																	<?php $_smarty_tpl->_assignInScope('oddLabel', 'مساوی/مساوی');
?>
																<?php } elseif ($_smarty_tpl->tpl_vars['odd']->value->label == 'x' || $_smarty_tpl->tpl_vars['odd']->value->label == 'X' || $_smarty_tpl->tpl_vars['odd']->value->label == '12' || $_smarty_tpl->tpl_vars['odd']->value->label == ':12' || $_smarty_tpl->tpl_vars['odd']->value->label == '::12') {?>
																	<?php $_smarty_tpl->_assignInScope('oddLabel', 'مساوی');
?>
																<?php } else { ?>
																	<?php $_smarty_tpl->_assignInScope('oddLabel', smarty_modifier_fa($_smarty_tpl->tpl_vars['odd']->value->label));
?>
																<?php }}}}}}}}}?>
															<?php }?>
														<?php }?>
														<a data-runnerid="<?php ob_start();
echo $_smarty_tpl->tpl_vars['val']->value->type;
$_prefixVariable10=ob_get_clean();
ob_start();
echo $_smarty_tpl->tpl_vars['odd']->value->label;
$_prefixVariable11=ob_get_clean();
echo smarty_modifier_con($_smarty_tpl->tpl_vars['matches']->value->id,'-',$_smarty_tpl->tpl_vars['matches']->value->odds->data[0]->bookmaker_id,'-',$_prefixVariable10,'-',$_prefixVariable11);?>
" data-pick="<?php echo $_smarty_tpl->tpl_vars['oddLabel']->value;?>
" data-points="" class="inplaybtn eventodd odd-link odd-sub-button odd-<?php if ((count($_smarty_tpl->tpl_vars['val']->value->odds->data)%3) == 0) {?>triple<?php } else { ?>double<?php }?>" href="javascript:;">
															<div class="odd-title"><span><?php echo $_smarty_tpl->tpl_vars['oddLabel']->value;?>
</span></div>
															<div class="odd-rate odd-main-button odd-222341759"><span><?php echo $_smarty_tpl->tpl_vars['odd']->value->value;?>
</span></div>
														</a>
													<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

													<div class="clear"></div>
												</div>
											</div>
										<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

									</div>
								</div>
							</div>
							<div class="col-lg-3">
								<div style="margin-top: 10px !important;">
									<table class="livescore betslip">
										<tbody>
											<tr><th style="color: #ffd33b  !important;">پیش بینی های من</th></tr>
											<tr>
												<td>
													<div class="nobet">برای پیش بینی، ضریب بازی مورد نظر خود را انتخاب کنید</div>
													<div class="selectedodds"><div class="betlist"></div><div style="margin-top: 20px !important; display: none;" class="alert alert-danger" id="error_for_mix_form">امکان ثبت شرط میکس بیشتر از 8 تایی وجود ندارد</div></div>
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
	</div><?php }
}
