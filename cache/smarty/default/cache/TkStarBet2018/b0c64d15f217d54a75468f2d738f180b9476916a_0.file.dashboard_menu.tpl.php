<?php
/* Smarty version 3.1.31, created on 2018-12-25 16:18:02
  from "/home/richbet/public_html/themes/default/TkStarBet2018/partials/dashboard_menu.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c222702ccb6e0_61121700',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'b0c64d15f217d54a75468f2d738f180b9476916a' => 
    array (
      0 => '/home/richbet/public_html/themes/default/TkStarBet2018/partials/dashboard_menu.tpl',
      1 => 1545505739,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c222702ccb6e0_61121700 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
?>
			<?php echo '<script'; ?>
 type="text/javascript">
				window.onload = function(){
					document.getElementsByClassName('selector')[0].onchange = function(){
						var $this_value = this.value;
						window.location = $this_value;
					}
				}
			<?php echo '</script'; ?>
>
			<div class="left static-menu">
				<div class="link-container">
					<div class="desktop">
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
dashboard"<?php if (strpos(getenv('REQUEST_URI'),'dashboard') !== false) {?> class="active"<?php }?>>حساب کاربری</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/myrecords"<?php if (strpos(getenv('REQUEST_URI'),'bets/myrecords') !== false || strpos(getenv('REQUEST_URI'),'bets/BetDetail') !== false) {?> class="active"<?php }?>>پیش بینی های من</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
payment/transactions"<?php if (strpos(getenv('REQUEST_URI'),'payment/transactions') !== false) {?> class="active"<?php }?>>سابقه تراکنش ها</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
payment/credit"<?php if (strpos(getenv('REQUEST_URI'),'payment/credit') !== false) {?> class="active"<?php }?>>شارژ حساب</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/withdraw"<?php if (strpos(getenv('REQUEST_URI'),'users/withdraw') !== false) {?> class="active"<?php }?>>درخواست جایزه</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/representation"<?php if (strpos(getenv('REQUEST_URI'),'users/representation') !== false) {?> class="active"<?php }?>>طرح نمایندگی</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/profile"<?php if (strpos(getenv('REQUEST_URI'),'users/profile') !== false) {?> class="active"<?php }?>>پروفایل من</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
contacts/tickets/ticket-list"<?php if (strpos(getenv('REQUEST_URI'),'contacts/tickets/ticket-list') !== false || strpos(getenv('REQUEST_URI'),'/contacts/tickets/view-ticket') !== false || strpos(getenv('REQUEST_URI'),'/contacts/tickets/new-ticket') !== false) {?> class="active"<?php }?>>پشتیبانی</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/logout">خروج از حساب کاربری</a>
					</div>
					<div class="mobile">
						<select class="selector">
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
dashboard"<?php if (strpos(getenv('REQUEST_URI'),'dashboard') !== false) {?> selected="selected"<?php }?>>حساب کاربری</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/myrecords"<?php if (strpos(getenv('REQUEST_URI'),'bets/myrecords') !== false || strpos(getenv('REQUEST_URI'),'bets/BetDetail') !== false) {?> selected="selected"<?php }?>>پیش بینی های من</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
payment/transactions"<?php if (strpos(getenv('REQUEST_URI'),'payment/transactions') !== false) {?> selected="selected"<?php }?>>سابقه تراکنش ها</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
payment/credit"<?php if (strpos(getenv('REQUEST_URI'),'payment/credit') !== false) {?> selected="selected"<?php }?>>شارژ حساب</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/withdraw"<?php if (strpos(getenv('REQUEST_URI'),'users/withdraw') !== false) {?> selected="selected"<?php }?>>درخواست جایزه</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/representation"<?php if (strpos(getenv('REQUEST_URI'),'users/representation') !== false) {?> selected="selected"<?php }?>>طرح نمایندگی</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/profile"<?php if (strpos(getenv('REQUEST_URI'),'users/profile') !== false) {?> selected="selected"<?php }?>>پروفایل من</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
contacts/tickets/ticket-list"<?php if (strpos(getenv('REQUEST_URI'),'/contacts/tickets/ticket-list') !== false || strpos(getenv('REQUEST_URI'),'/contacts/tickets/view-ticket') !== false || strpos(getenv('REQUEST_URI'),'/contacts/tickets/new-ticket') !== false) {?> selected="selected"<?php }?>>پشتیبانی</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/logout">خروج از حساب کاربری</option>
						</select>
					</div>
				</div>
			</div><?php }
}
