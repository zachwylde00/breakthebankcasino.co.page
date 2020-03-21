<div class="register">
    <div class="container back-casino" align="center">
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
		<div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 mt20">
			<section class="signupbox">
				<h1>بازیابی کلمه عبور</h1>
				{form_open()}
					<div class="page-area container inline form-container">
						<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
							<div class="mt15">
								<div class="left form-title mw160">ایمیل</div>
								<div class="left form-element"><input type="text" name="email" style="height: 40px; text-align: right !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160"></div>
								<div class="left form-element" style="text-align: right !important;"><button type="submit" href="javascript:;" class="form-button action-button">بازیابی</button></div>
								<div class="clear"></div>
							</div>
						</div>
					</div>
				{form_close()}
			</section>
		</div>
    </div>
</div>