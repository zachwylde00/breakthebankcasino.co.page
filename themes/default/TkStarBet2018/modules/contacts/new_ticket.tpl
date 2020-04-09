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
			<div class="row"><div style="text-align: right !important; width: 100% !important; margin-top: 10px !important; margin-bottom: -30px !important;"><div class="alert {$alert_type}" style="display: block !important;">{$message_details->message}</div></div></div>
		{/if}
	{/if}
	<div class="page-content light back-casino" style="width: auto !important;">
		<div class="ph15"></div>
		<div class="inline container">
			{include file="partials/dashboard_menu.tpl"}
			<div class="left static-content">
				<div class="page-area container inline form-container">
					<div class="page-title">ارسال تیکت جدید <span class="pull-right"><a class="btn btn-sm new-ticket-style" href="{site_url}contacts/tickets/ticket-list">لیست تیکت ها</a></span></div>
					<div class="p7 inline center" style="width: 100% !important;">
						<form action="{$action}" method="POST">
							<div class="support_form createform" style="display: block;">
								<div class="signupform">
									<div class="row" style="padding: 0 !important;">
										<div class="col-md-8 col-sm-12 col-xs-12">
											<div class="row" style="padding: 0 !important;">
												<div class="col-md-3 col-sm-12 col-xs-12" style="margin-top: 15px !important;">موضوع تیکت</div>
												<div class="col-md-9 col-sm-12 col-xs-12">
													<select class="input" name="subject" type="text">
														<option value="" disabled="disabled" selected="selected">موضوع تیکت را انتخاب کنید</option>
														<option value="charging">شارژ حساب کاربری</option>
														<option value="card_in_card_addfounds">شارژ حساب از طریق کارت به کارت</option>
														<option value="pm_addfounds">شارژ حساب از طریق پرفکت مانی / ووچر پرفکت مانی</option>
														<option value="forgot_password_or_email">فراموشی رمز عبور یا ایمیل</option>
														<option value="betting_form">فرم پیش بینی</option>
														<option value="online_casino">کازینو آنلاین</option>
														<option value="feedbacks">انتقادات و پیشنهادات</option>
														<option value="buy_script">خرید اسکریپت سایت پیش بینی</option>
														<option value="other_subject">سایر موضوعات</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<div class="row" style="padding: 0 !important;">
										<div class="col-md-8 col-sm-12 col-xs-12">
											<div class="row" style="padding: 0 !important;">
												<div class="col-md-3 col-sm-12 col-xs-12" style="margin-top: 15px !important;">متن تیکت</div>
												<div class="col-md-9 col-sm-12 col-xs-12"><textarea style="min-height: 175px !important;resize: vertical !important;" class="input textarea" cols="20" name="content" placeholder="متن تیکت" rows="2"></textarea></div>
											</div>
										</div>
									</div>
									<div class="row" style="padding: 0 !important;">
										<div class="col-md-8 col-sm-12 col-xs-12">
											<div class="row" style="padding: 0 !important;">
												<div class="col-md-3 col-sm-12 col-xs-12"></div>
												<div class="col-md-9 col-sm-12 col-xs-12"><input class="btn btn-lg btn-danger floatright" value="ارسال" type="submit" style="color:white; background-color:#BB100B; width:100%"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>		  
					</div>
					<div class="row" style="color: white !important;"><div class="alert alert-info" style="display: block;">کاربران گرامی توجه داشته باشند، برای هر مورد یک تیکت ایجاد نمایید و تا حل شدن کامل مشکل، تیکت مربوطه را ادامه دهید و جهت تسریع در رفع مشکلات کاربری لطفا از ایجاد تیکت های جدید و متنوع اجتناب فرمایید</div></div>
				</div>
			</div>
		</div>
	</div>
</div>