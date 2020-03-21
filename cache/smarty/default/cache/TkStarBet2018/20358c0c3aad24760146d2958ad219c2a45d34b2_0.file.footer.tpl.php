<?php
/* Smarty version 3.1.31, created on 2019-03-19 03:45:41
  from "/home/cupabet/public_html/themes/default/TkStarBet2018/partials/footer.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c9034ad2b6b67_41664936',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '20358c0c3aad24760146d2958ad219c2a45d34b2' => 
    array (
      0 => '/home/cupabet/public_html/themes/default/TkStarBet2018/partials/footer.tpl',
      1 => 1542370986,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c9034ad2b6b67_41664936 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_assets_url')) require_once '/home/cupabet/public_html/TkStarApplication/smarty/plugins/function.assets_url.php';
if (!is_callable('smarty_function_site_url')) require_once '/home/cupabet/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
?>
	<div class="help-question-div">
		<img src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/help_documention/times.png" class="close-help-div" style="height: 40px !important; width: 40px !important;" />
		<div class="tip-help">سوال یا مشکلی دارید ؟ لطفا قبل از استفاده از امکانات سایت بخش راهنما را کامل مطالعه کنید</div><a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help">
		<img src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/help_documention/question_help.png" class="main-img-help" /></a>
	</div>
	<div class="footer desktop" style="background: #1b1b1b !important;">
		<div class="inline container pr10">معتبر‌ترین سایت پیش بینی‌ فوتبال در ایران و دارای بازی انفجار آنلاین، بازی پوکر آنلاین، تخته نرد آنلاین، بلک جک آنلاین، رولت آنلاین و بازی پاسور آنلاین</div>
	</div>
	<div class="footer-links desktop">
		<div class="inline container">
			<div style="text-align: right !important; margin-right: 20px !important;">
				<a href="#" target="_blank"><img src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/icons/facebook.svg" style="margin: auto 3px !important; width: 32px !important; height: 32px !important;"></a>
				<a href="https://www.t.me/rich90bet" target="_blank"><img src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/icons/telegram.svg" style="margin: auto 3px !important; width: 32px !important; height: 32px !important;"></a>
				<a href="#" target="_blank"><img src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/icons/instagram.svg" style="margin: auto 3px !important; width: 32px !important; height: 32px !important;"></a>
			</div>
			<div class="clear"></div>
		</div>
	</div>
	<div class="mobile mobile-bar-holder"></div>
	<div class="mobile mobile-footer-bar">
		<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
" class="sport <?php ob_start();
echo $_SERVER['REQUEST_URI'];
$_prefixVariable3=ob_get_clean();
ob_start();
echo $_SERVER['REQUEST_URI'];
$_prefixVariable4=ob_get_clean();
if (strpos($_SERVER['REQUEST_URI'],"index") !== false || $_prefixVariable3 == '' || $_prefixVariable4 == "/") {?>active<?php }?>">صفحه اصلی</a>
		<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
dashboard" class="account <?php if (strpos($_SERVER['REQUEST_URI'],"casino") == false && (strpos($_SERVER['REQUEST_URI'],"myrecords") !== false || strpos($_SERVER['REQUEST_URI'],"dashboard") !== false || strpos($_SERVER['REQUEST_URI'],"payment") !== false || strpos($_SERVER['REQUEST_URI'],"users") !== false)) {?>active<?php }?>">حساب کاربری</a>
		<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/inplayBet" class="live <?php if (strpos($_SERVER['REQUEST_URI'],"inplayBet") !== false || strpos($_SERVER['REQUEST_URI'],"InplayOdds") !== false) {?>active<?php }?>">پیش بینی زنده</a>
		<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/upComing" class="scores <?php if (strpos($_SERVER['REQUEST_URI'],"upComing") !== false || strpos($_SERVER['REQUEST_URI'],"preEvents") !== false) {?>active<?php }?>">پیش بینی پیش از بازی</a>
		<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/casino" class="casino <?php if (strpos($_SERVER['REQUEST_URI'],"casino") !== false) {?>active<?php }?>">کازینو</a>
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
	<?php echo '<script'; ?>
 type="text/javascript">
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
	<?php echo '</script'; ?>
>
</body>
<?php }
}
