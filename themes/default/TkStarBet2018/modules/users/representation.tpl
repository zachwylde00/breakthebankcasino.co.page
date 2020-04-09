<script type="text/javascript">
	TkStarFreamWork(document).ready(function(){
		TkStarFreamWork('#htmlcode, #referer_link, #bbcode').on('keyup keydown change click', function(){
			TkStarFreamWork(this).focus();
			TkStarFreamWork(this).select();
		});
	});
</script>
<div class="container" style="width: 100% !important;">
	<div class="page-content light back-casino" style="width: auto !important;">
		<div class="ph15"></div>
		<div class="inline container">
			{include file="partials/dashboard_menu.tpl"}
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
                                        {if count($referrals) <= 0}
                                            <tr><td colspan="4">شما هیچ زیر مجموعه فعالی ندارید</td></tr>
                                        {else}
                                            {foreach $referrals as $referral}
        										<tr>
        											<td style="width: 25%; text-align: center !important;">{$referral['id']}</td>
        											<td style="width: 25%; text-align: center !important;">{$referral['email']}</td>
        											<td style="width: 25%; text-align: center !important;">{jdate format='l d F Y ساعت H:i:s' date=$referral->created_at}</td>
        											<td style="width: 25%; text-align: center !important;">{$referral->cash|price_format}</td>
        										</tr>
                                            {/foreach}
                                        {/if}
                                        </tbody>
                                </table>
                            </div>
                        </section>
                        <hr>
                        <h3 style="font-size:14px !important;">
                            کسانی که علاقمند هستند به عنوان نماینده سایت فعالیت کنند و کاربران جدیدی را به سایت جذب کنند میتوانند از طرح نمایندگی سایت استفاده کنید.
                            برای استفاده از این طرح شما میتوانید با استفاده از لینک ثبت نام و کد های HTML
                            که برای قرار دادن بنر های سایت در وبسایت های دیگر در نظر گرفته شده است استفاده کنند.
                            هر کاربری که با کلیک بروی این لینک ها در سایت ثبت نام کند زیر مجموعه شما خواهد بود و شما بابت فعایت او در سایت کمیسیون دریافت خواهید کرد.
                        </h3>
                        <br>
                        <h4>نحوه محاسبه کمیسیون نماینده:</h4>
                        <h3><span style="color: #000000 !important;" class="stepbubble">1</span> هر نماینده{$affiliate_count} درصد از سود سایت از هر زیر مجموعه را به عنوان کمیسیون دریافت میکند</h3>
                        <h3><span style="color: #000000 !important;" class="stepbubble">2</span> کمیسیون نماینده بصورت مادام العمر به نماینده پرداخت میشود</h3>
                        <h3><span style="color: #000000 !important;" class="stepbubble">3</span> سایت ما حق تغییر درصد کمیسیون را در آینده برای خود محفوظ نگه میدارد</h3><br />
                        <h3>در زیر میتوانید لینک ثبت نام منحصر بفرد خودتان را پیدا کنید. همچنین اگر میخواهید بنرهای سایت را در وبلاگ یا سایت یا انجمن خود قرار دهید میتوانید از کدهای HTML موجود استفاده کنید</h3>
                        <h3>دقت کنید که در صورت فیلتر شدن آدرس سایت با آدرس بدون فیلتر وارد همین بخش شوید و لینک ثبت نام یا کد HTML جدید را دریافت کنید</h3>
                        <h3 style="text-align: center !important;"><a style="color: orange !important; font-size: 16px !important;" class="registrationlink sprite-link" onclick="$('#inviteoptions').slideToggle();" href="javascript:void(0)">دریافت لینک ثبت نام</a></h3>
                        <div class="inviteoptions" id="inviteoptions" style="display: none;">
                            <div class="htmlcode">
                                <h3>کد های زیر, کد های آماده شده برای وبلاگ, انجمن, سایت و ... شما هستند که می توانید به صورت آماده از آن ها استفاده کنید</h3><br>
								<div>لینک مستقیم: <br><br><input type="text" id="referer_link" readonly="readonly" value="{site_url}users/register/{$user->id}"></div><br><br>
                                <div>لینک برای وبلاگ یا سایت (HTML): <br><br><textarea id="htmlcode" readonly="readonly"><a style="display: block !important; background: url({assets_url}/images/main_logo.png) !important;" alt="پیش بینی زنده فوتبال در {$site_name} به همراه کازینو آنلاین" title="پیش بینی زنده فوتبال در {$site_name} به همراه کازینو آنلاین" href="{site_url}users/register/{$user->id}"></a></textarea><br><br>
								<div>لینک برای انجمن ها (MyBB, vBulletin, ...): <br><br><textarea id="bbcode" readonly="readonly">[a title=پیش بینی زنده فوتبال در {$site_name} به همراه کازینو آنلاین alt=پیش بینی زنده فوتبال در {$site_name} به همراه کازینو آنلاین href={site_url}users/register/{$user->id}][img src={assets_url}/images/main_logo.png][/img][/a]</textarea><br>
                            </div>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>