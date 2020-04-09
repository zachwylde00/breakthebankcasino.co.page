<?php
/* Smarty version 3.1.31, created on 2019-03-18 22:55:34
  from "/home/cupabet/public_html/themes/default/TkStarBet2018/modules/users/representation.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c8ff0aecf2100_36307228',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'd5a5b1cf30bfcc08ddf27c470dc3233ce6635887' => 
    array (
      0 => '/home/cupabet/public_html/themes/default/TkStarBet2018/modules/users/representation.tpl',
      1 => 1545516970,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5c8ff0aecf2100_36307228 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_jdate')) require_once '/home/cupabet/public_html/TkStarApplication/smarty/plugins/function.jdate.php';
if (!is_callable('smarty_modifier_price_format')) require_once '/home/cupabet/public_html/TkStarApplication/smarty/plugins/modifier.price_format.php';
if (!is_callable('smarty_function_site_url')) require_once '/home/cupabet/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
if (!is_callable('smarty_function_assets_url')) require_once '/home/cupabet/public_html/TkStarApplication/smarty/plugins/function.assets_url.php';
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
<div class="container" style="width: 100% !important;">
	<div class="page-content light" style="width: auto !important; margin-right: -15px !important; margin-left: -15px !important;">
		<div class="ph15"></div>
		<div class="inline container">
			<?php $_smarty_tpl->_subTemplateRender("file:partials/dashboard_menu.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

			<div class="left static-content">
				<div class="page-area container inline form-container">
					<div class="page-title">طرح نمایندگی</div>
					<div class="p7 inline center" style="padding: 15px !important;color: #ffffff !important; text-align: justify !important;">
					    <center><h3 style="color: #ffd33b !important; margin-bottom: 10px !important;">زیر مجموعه های فعال شما</h3></center>
                        <section class="formbox row_100 clearfix">
                            <div class="support_messages" style="display: block;">
                                <table class="leaguetable support">
									<thead>
                                        <tr>
                                            <th style="width: 25%; text-align: center !important;">آیدی کاربری</th>
                                            <th style="width: 25%; text-align: center !important;">ایمیل</th>
                                            <th style="width: 25%; text-align: center !important;">تاریخ ثبت نام</th>
                                            <th style="width: 25%; text-align: center !important;">موجودی فعلی</th>
                                        </tr>
									</thead>
                                    <tbody>
                                        <?php if (count($_smarty_tpl->tpl_vars['referrals']->value) <= 0) {?>
                                            <tr><td colspan="4">شما هیچ زیر مجموعه فعالی ندارید</td></tr>
                                        <?php } else { ?>
                                            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['referrals']->value, 'referral');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['referral']->value) {
?>
        										<tr>
        											<td style="width: 25%; text-align: center !important;"><?php echo $_smarty_tpl->tpl_vars['referral']->value['id'];?>
</td>
        											<td style="width: 25%; text-align: center !important;"><?php echo $_smarty_tpl->tpl_vars['referral']->value['email'];?>
</td>
        											<td style="width: 25%; text-align: center !important;"><?php echo smarty_function_jdate(array('format'=>'l d F Y ساعت H:i:s','date'=>$_smarty_tpl->tpl_vars['referral']->value->created_at),$_smarty_tpl);?>
</td>
        											<td style="width: 25%; text-align: center !important;"><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['referral']->value->cash);?>
</td>
        										</tr>
                                            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                        <?php }?>
                                        </tbody>
                                </table>
                            </div>
                        </section>
                        <hr>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><?php }
}
