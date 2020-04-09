<?php
/* Smarty version 3.1.31, created on 2018-06-26 08:20:48
  from "C:\xampp\htdocs\themes\default\TkStarBet2018\modules\users\help\1.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5b31b8183b7516_51735808',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '99c81cc4d843201630a5b7b08a97b5de116f1907' => 
    array (
      0 => 'C:\\xampp\\htdocs\\themes\\default\\TkStarBet2018\\modules\\users\\help\\1.tpl',
      1 => 1529985008,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:modules/users/help/menus.tpl' => 1,
  ),
),false)) {
function content_5b31b8183b7516_51735808 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\function.site_url.php';
if (!is_callable('smarty_modifier_con')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\modifier.con.php';
?>
<div class="container">
	<div class="page-content light">
		<div class="ph15"></div>
		<div class="inline container">
			<?php $_smarty_tpl->_subTemplateRender("file:modules/users/help/menus.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

			<div class="left static-content">
				<div class="page-area container inline form-container">
					<div class="page-title">تغییر کلمه عبور</div>
					<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
						<form action="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/changeProfile" method="post">
							<div class="mt15">
								<div class="left form-title mw160">ایمیل</div>
								<div class="left form-element"><input type="text" value="<?php echo $_smarty_tpl->tpl_vars['my']->value->email;?>
" readonly="readonly" disabled="disabled" style="height: 40px; text-align: center !important; direction: ltr !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">نام و نام خانوادگی</div>
								<div class="left form-element"><input type="text" value="<?php echo smarty_modifier_con($_smarty_tpl->tpl_vars['my']->value->first_name,' ',$_smarty_tpl->tpl_vars['my']->value->last_name);?>
" readonly="readonly" disabled="disabled" style="height: 40px; text-align: center !important; direction: rtl !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">شماره موبایل</div>
								<div class="left form-element"><input type="text" value="<?php echo $_smarty_tpl->tpl_vars['my_mobile']->value;?>
" readonly="readonly" disabled="disabled" style="height: 40px; text-align: center !important; direction: ltr !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">نام مستعار</div>
								<div class="left form-element"><input type="text" value="<?php echo $_smarty_tpl->tpl_vars['my']->value->username;?>
" name="username" style="height: 40px; text-align: right !important; direction: ltr !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">آخرین ورود</div>
								<div class="left form-element"><input type="text" value="<?php ob_start();
echo $_smarty_tpl->tpl_vars['my']->value->last_login;
$_prefixVariable1=ob_get_clean();
echo Miladr\Jalali\jDateTime::date('l d F Y ساعت H:i:s',strtotime($_prefixVariable1));?>
" readonly="readonly" disabled="disabled" style="height: 40px; text-align: center !important; direction: ltr !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-element" style="margin-right: 59px;"><button type="submit" href="javascript:;" class="form-button action-button">ویرایش</button></div>
								<div class="clear"></div>
							</div>
                        </form>
					</div>
                </div>
				<div class="page-area container inline form-container">
					<div class="page-title">تغییر کلمه عبور</div>
					<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
						<form action="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/profile" method="post">
							<div class="mt15">
								<div class="left form-title mw160">کلمه عبور فعلی</div>
								<div class="left form-element"><input type="password" value="" name="current_password" autocomplete="off" style="height: 40px !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">کلمه عبور جدید</div>
								<div class="left form-element"><input type="password" value="" name="new_password" autocomplete="off" style="height: 40px !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">تکرار کلمه عبور جدید</div>
								<div class="left form-element"><input type="password" value="" name="re_new_password" autocomplete="off" style="height: 40px !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-element" style="margin-right: 59px;"><button type="submit" href="javascript:;" class="form-button action-button">تغییر کلمه عبور</button></div>
								<div class="clear"></div>
							</div>
                        </form>
					</div>
                </div>
            </div>
        </div>
    </div>
</div><?php }
}
