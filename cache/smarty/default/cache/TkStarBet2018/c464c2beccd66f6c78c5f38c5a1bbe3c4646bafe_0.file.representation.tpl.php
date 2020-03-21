<?php
/* Smarty version 3.1.31, created on 2018-11-23 13:59:03
  from "/home/richbet/domains/richbet.xyz/public_html/themes/default/TkStarBet2018/modules/users/representation.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bf7d66f67a0f8_26135571',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'c464c2beccd66f6c78c5f38c5a1bbe3c4646bafe' => 
    array (
      0 => '/home/richbet/domains/richbet.xyz/public_html/themes/default/TkStarBet2018/modules/users/representation.tpl',
      1 => 1539600350,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5bf7d66f67a0f8_26135571 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/richbet/domains/richbet.xyz/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
if (!is_callable('smarty_function_assets_url')) require_once '/home/richbet/domains/richbet.xyz/public_html/TkStarApplication/smarty/plugins/function.assets_url.php';
if (!is_callable('smarty_modifier_persian_number')) require_once '/home/richbet/domains/richbet.xyz/public_html/TkStarApplication/smarty/plugins/modifier.persian_number.php';
echo '<script'; ?>
 type="text/javascript">
	TkStarFreamWork(document).ready(function(){
		TkStarFreamWork('#htmlcode, #referer_link, #bbcode').on('keyup keydown change click', function(){
			TkStarFreamWork(this).focus();
			TkStarFreamWork(this).select();
		});
	});
<?php echo '</script'; ?>
>
<div class="container">
	<div class="page-content light">
		<div class="ph15"></div>
		<div class="inline container">
			<?php $_smarty_tpl->_subTemplateRender("file:partials/dashboard_menu.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

			<div class="left static-content">
				<div class="page-area container inline form-container">
					<div class="page-title">طرح نمایندگی</div>
					<div class="p7 inline center" style="padding: 15px !important;color: #ffffff !important; text-align: justify !important;">
                        <p>
                            کسانی که علاقمند هستند به عنوان نماینده سایت فعالیت کنند و کاربران جدیدی را به سایت جذب کنند میتوانند از طرح نمایندگی سایت استفاده کنید.
                            برای استفاده از این طرح شما میتوانید با استفاده از لینک ثبت نام و کد های HTML
                            که برای قرار دادن بنر های سایت در وبسایت های دیگر در نظر گرفته شده است استفاده کنند.
                            هر کاربری که با کلیک بروی این لینک ها در سایت ثبت نام کند زیر مجموعه شما خواهد بود و شما بابت فعایت او در سایت کمیسیون دریافت خواهید کرد.
                        </p>
                        <br>
                        <h4>نحوه محاسبه کمیسیون نماینده:</h4>
                        <p><span style="color: #000000 !important;" class="stepbubble">1</span> هر نماینده<?php echo $_smarty_tpl->tpl_vars['affiliate_count']->value;?>
 درصد از سود سایت از هر زیر مجموعه را به عنوان کمیسیون دریافت میکند</p>
                        <p><span style="color: #000000 !important;" class="stepbubble">1</span> کمیسیون نماینده بصورت مادام العمر به نماینده پرداخت میشود</p>
                        <p><span style="color: #000000 !important;" class="stepbubble">3</span> سایت ما حق تغییر درصد کمیسیون را در آینده برای خود محفوظ نگه میدارد</p><br />
                        <p>در زیر میتوانید لینک ثبت نام منحصر بفرد خودتان را پیدا کنید. همچنین اگر میخواهید بنرهای سایت را در وبلاگ یا سایت یا انجمن خود قرار دهید میتوانید از کدهای HTML موجود استفاده کنید</p>
                        <p>دقت کنید که در صورت فیلتر شدن آدرس سایت با آدرس بدون فیلتر وارد همین بخش شوید و لینک ثبت نام یا کد HTML جدید را دریافت کنید</p>
                        <p style="text-align: center !important;"><a style="color: orange !important; font-size: 16px !important;" class="registrationlink sprite-link" onclick="$('#inviteoptions').slideToggle();" href="javascript:void(0)">دریافت لینک ثبت نام</a></p>
                        <div class="inviteoptions" id="inviteoptions" style="display: none;">
                            <div class="htmlcode">
                                <p>کد های زیر, کد های آماده شده برای وبلاگ, انجمن, سایت و ... شما هستند که می توانید به صورت آماده از آن ها استفاده کنید</p><br>
								<div>لینک مستقیم: <br><br><input type="text" id="referer_link" readonly="readonly" value="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/register/<?php echo $_smarty_tpl->tpl_vars['user']->value->id;?>
"></div><br><br>
                                <div>لینک برای وبلاگ یا سایت (HTML): <br><br><textarea id="htmlcode" readonly="readonly"><a style="display: block !important; background: url(<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/main_logo.png) !important;" alt="پیش بینی زنده فوتبال در <?php echo $_smarty_tpl->tpl_vars['site_name']->value;?>
 به همراه کازینو آنلاین" title="پیش بینی زنده فوتبال در <?php echo $_smarty_tpl->tpl_vars['site_name']->value;?>
 به همراه کازینو آنلاین" href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/register/<?php echo $_smarty_tpl->tpl_vars['user']->value->id;?>
"></a></textarea><br><br>
								<div>لینک برای انجمن ها (MyBB, vBulletin, ...): <br><br><textarea id="bbcode" readonly="readonly">[a title=پیش بینی زنده فوتبال در <?php echo $_smarty_tpl->tpl_vars['site_name']->value;?>
 به همراه کازینو آنلاین alt=پیش بینی زنده فوتبال در <?php echo $_smarty_tpl->tpl_vars['site_name']->value;?>
 به همراه کازینو آنلاین href=<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
users/register/<?php echo $_smarty_tpl->tpl_vars['user']->value->id;?>
][img src=<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/main_logo.png][/img][/a]</textarea><br>
                            </div>
                        </div>
                        <br>
                       <?php if ($_smarty_tpl->tpl_vars['sub_count']->value) {?>
						<div class="report" style="color: #000000 !important;">
							<div class="col-md-6 col-sm-12 col-xs-12">
								<span class="report-title">تعداد کاربران زیر مجموعه شما</span>
								<span class="report-data"><?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['sub_count']->value);?>
 کاربر</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12">
								<span class="report-title">مجموع درآمد شما از زیرمجموعه‌ها</span>
								<span class="report-data"><?php echo number_format($_smarty_tpl->tpl_vars['affilate_total']->value);?>
 تومان</span>
							</div>
						</div>
                       <?php }?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><?php }
}
