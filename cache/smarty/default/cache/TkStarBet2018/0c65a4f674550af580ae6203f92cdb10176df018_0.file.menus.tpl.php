<?php
/* Smarty version 3.1.31, created on 2018-11-16 12:22:12
  from "/home/richbet/domains/richbet.xyz/public_html/themes/default/TkStarBet2018/modules/users/help/menus.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bee853ccde005_60634945',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '0c65a4f674550af580ae6203f92cdb10176df018' => 
    array (
      0 => '/home/richbet/domains/richbet.xyz/public_html/themes/default/TkStarBet2018/modules/users/help/menus.tpl',
      1 => 1530237914,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5bee853ccde005_60634945 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/richbet/domains/richbet.xyz/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
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
users/help/100"<?php if (strpos(getenv('REQUEST_URI'),'users/help/100') !== false) {?> class="active"<?php }?>>شرایط و ضوابط عضویت</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/101"<?php if (strpos(getenv('REQUEST_URI'),'users/help/101') !== false) {?> class="active"<?php }?>>راهنمای پیش بینی</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/102"<?php if (strpos(getenv('REQUEST_URI'),'users/help/102') !== false) {?> class="active"<?php }?>>آموزش ثبت فرم میکس</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/103"<?php if (strpos(getenv('REQUEST_URI'),'users/help/103') !== false) {?> class="active"<?php }?>>راهنمای تخته نرد</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/104"<?php if (strpos(getenv('REQUEST_URI'),'users/help/104') !== false) {?> class="active"<?php }?>>راهنمای رولت</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/105"<?php if (strpos(getenv('REQUEST_URI'),'users/help/105') !== false) {?> class="active"<?php }?>>راهنمای بلک جک (21)</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/106"<?php if (strpos(getenv('REQUEST_URI'),'users/help/106') !== false) {?> class="active"<?php }?>>راهنمای باکارات</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/107"<?php if (strpos(getenv('REQUEST_URI'),'users/help/107') !== false) {?> class="active"<?php }?>>راهنمای پاسور یا 4 برگ</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/108"<?php if (strpos(getenv('REQUEST_URI'),'users/help/108') !== false) {?> class="active"<?php }?>>روش های برداشت موجودی</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/109"<?php if (strpos(getenv('REQUEST_URI'),'users/help/109') !== false) {?> class="active"<?php }?>>نحوه کار با پرفکت مانی</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/110"<?php if (strpos(getenv('REQUEST_URI'),'users/help/110') !== false) {?> class="active"<?php }?>>احراز هویت</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/111"<?php if (strpos(getenv('REQUEST_URI'),'users/help/111') !== false) {?> class="active"<?php }?>>قمار ایمن</a>
						<a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/112"<?php if (strpos(getenv('REQUEST_URI'),'users/help/112') !== false) {?> class="active"<?php }?>>دزدی ها و کلاهبرداری های اینترنتی</a>
					</div>
					<div class="mobile">
						<select class="selector">
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/100"<?php if (strpos(getenv('REQUEST_URI'),'users/help/100') !== false) {?> selected="selected"<?php }?>>شرایط و ضوابط عضویت</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/101"<?php if (strpos(getenv('REQUEST_URI'),'users/help/101') !== false) {?> selected="selected"<?php }?>>راهنمای پیش بینی</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/102"<?php if (strpos(getenv('REQUEST_URI'),'users/help/102') !== false) {?> selected="selected"<?php }?>>آموزش ثبت فرم میکس</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/103"<?php if (strpos(getenv('REQUEST_URI'),'users/help/103') !== false) {?> selected="selected"<?php }?>>راهنمای تخته نرد</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/104"<?php if (strpos(getenv('REQUEST_URI'),'users/help/104') !== false) {?> selected="selected"<?php }?>>راهنمای رولت</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/105"<?php if (strpos(getenv('REQUEST_URI'),'users/help/105') !== false) {?> selected="selected"<?php }?>>راهنمای بلک جک (21)</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/106"<?php if (strpos(getenv('REQUEST_URI'),'users/help/106') !== false) {?> selected="selected"<?php }?>>راهنمای باکارات</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/107"<?php if (strpos(getenv('REQUEST_URI'),'users/help/107') !== false) {?> selected="selected"<?php }?>>راهنمای پاسور یا 4 برگ</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/108"<?php if (strpos(getenv('REQUEST_URI'),'users/help/108') !== false) {?> selected="selected"<?php }?>>روش های برداشت موجودی</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/109"<?php if (strpos(getenv('REQUEST_URI'),'users/help/109') !== false) {?> selected="selected"<?php }?>>نحوه کار با پرفکت مانی</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/110"<?php if (strpos(getenv('REQUEST_URI'),'users/help/110') !== false) {?> selected="selected"<?php }?>>احراز هویت</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/111"<?php if (strpos(getenv('REQUEST_URI'),'users/help/111') !== false) {?> selected="selected"<?php }?>>قمار ایمن</option>
							<option value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/help/112"<?php if (strpos(getenv('REQUEST_URI'),'users/help/112') !== false) {?> selected="selected"<?php }?>>دزدی ها و کلاهبرداری های اینترنتی</option>
						</select>
					</div>
				</div>
			</div><?php }
}
