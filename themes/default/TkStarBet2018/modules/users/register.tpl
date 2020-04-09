<script type="text/javascript">
	document.addEventListener("DOMContentLoaded", function () {
		new IMask(document.getElementById('mobile'), {
			mask: '+(98) 000 000 0000'
		});
	});
</script>
<div class="register back-main">
    <div class="container" align="center">
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
				<div class="row"><div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12"><div style="text-align: right !important; width: 100% !important; margin-top: 10px !important; margin-bottom: -30px !important;"><div class="alert {$alert_type}" style="display: block !important;">{$message_details->message}</div></div></div></div>
			{/if}
		{/if}
		<div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
			<section class="signupbox mt10">
				<h1>برای شروع ثبت نام کنید</h1>
				{form_open($action)}
					<div class="page-area container inline form-container">
						<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
							<div class="mt15">
								<div class="left form-title mw160">نام</div>
								<div class="left form-element"><input type="text" name="first_name" style="height: 40px; text-align: right !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">نام خانوادگی</div>
								<div class="left form-element"><input type="text" name="last_name" style="height: 40px; text-align: right !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">ایمیل</div>
								<div class="left form-element"><input type="text" name="email" style="height: 40px; text-align: left !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">شماره موبایل</div>
								<div class="left form-element"><input type="text" id="mobile" name="mobile" style="height: 40px; direction: ltr !important; text-align: left !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">کلمه عبور</div>
								<div class="left form-element"><input type="password" name="password" style="height: 40px; text-align: right !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">تکرار کلمه عبور</div>
								<div class="left form-element"><input type="password" name="confirmPassword" style="height: 40px; text-align: right !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160"></div>
								<div class="left form-element" style="text-align: right !important;"><button type="submit" href="javascript:;" class="form-button action-button">ثبت نام</button></div>
								<div class="clear"></div>
							</div>
						</div>
					</div>
				{form_close()}
			</section>
        </div>
    </div>
</div>