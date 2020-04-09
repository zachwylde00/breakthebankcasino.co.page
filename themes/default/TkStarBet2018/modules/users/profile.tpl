<div class="container" style="width: 100% !important;">
	{if !empty($smarty.const.get_message)}
		{assign var = message_details value = (object)$smarty.const.get_message}
		{if !empty($message_details->message)}
			{if $message_details->type == 'fail'}
				{assign var=alert_type value='alert-danger'}
			{elseif $message_details->type == 'warning'}
				{assign var=alert_type value='alert-warning'}
			{elseif $message_details->type == 'success'}
				{assign var=alert_type value='alert-success'}
			{/if}
			<div class="row"><div style="text-align: right !important; width: 100% !important;"><div class="alert {$alert_type}" style="display: block !important;">{$message_details->message}</div></div></div>
		{/if}
	{/if}
	<div class="page-content light back-main" style="width: auto !important;">
		<div class="ph15"></div>
		<div class="inline container">
			{include file="partials/dashboard_menu.tpl"}
			<div class="left static-content">
				<div class="page-area container inline form-container">
					<div class="page-title">مشاهده / ویرایش پروفایل</div>
					<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
						<form action="{site_url}users/changeProfile" method="post">
							<div class="mt15">
								<div class="left form-title mw160">ایمیل</div>
								<div class="left form-element"><input type="text" value="{$my->email}" readonly="readonly" disabled="disabled" style="height: 40px; text-align: center !important; direction: ltr !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">نام و نام خانوادگی</div>
								<div class="left form-element"><input type="text" value="{$my->first_name|con:' ':$my->last_name}" readonly="readonly" disabled="disabled" style="height: 40px; text-align: center !important; direction: rtl !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">شماره موبایل</div>
								<div class="left form-element"><input type="text" value="{$my_mobile}" readonly="readonly" disabled="disabled" style="height: 40px; text-align: center !important; direction: ltr !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160"></div>
								<div class="left form-element">
									<div class="alert alert-info" style="border-radius:50px; text-align: right !important; direction: rtl !important; display: block !important;">
										<div class="row">
											<div class="col-lg-1 col-sm-12 col-xs-12" align="center" style="border:1px groove #FFCB39;border-radius:100px;"><i class="fa fa-3x fa-info" style="color:#FFCB39; padding-left:5px;"></i></div>
											<div class="col-md-11 col-sm-12 col-xs-12" >نام مستعار چیست ؟ نام مستعار در بازی های آنلاین به بازیکنان دیگر نمایش داده میشود . در صورتی که نام مستعار توسط شما وارد نشده باشد, ایمیل شما نمایش داده خواهد شد</div>
										</div>
									</div>
								</div>
								<div class="clear"></div>
							</div>
							<div class="mt8">
								<div class="left form-title mw160" >نام مستعار</div>
								<div class="left form-element"><input type="text" value="{$my->username}" name="username" style="height: 40px; text-align: center !important; direction: ltr !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">آخرین ورود</div>
								<div class="left form-element"><input type="text" value="{Miladr\Jalali\jDateTime::date('l d F Y ساعت H:i:s', strtotime({$my->last_login}))}" readonly="readonly" disabled="disabled" style="height: 40px; text-align: center !important; direction: ltr !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-element" style="padding-right:17.5%; padding-left:18%;"><button type="submit" href="javascript:;" class="form-button action-button forgot-button" style="width:100%;">ویرایش</button></div>
								<div class="clear"></div>
							</div>
                        </form>
					</div>
                </div>
				<div class="page-area container inline form-container">
					<div class="page-title">تغییر کلمه عبور</div>
					<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
						<form action="{site_url}users/profile" method="post">
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
								<div class="left form-element" style="padding-right:17.5%; padding-left:18%;"><button type="submit" href="javascript:;" class="form-button action-button" style="width:100%">تغییر کلمه عبور</button></div>
								<div class="clear"></div>
							</div>
                        </form>
					</div>
                </div>
            </div>
        </div>
    </div>
</div>