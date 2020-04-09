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
			
			<div class="row"><div style="width: 100% !important;"><div class="alert {$alert_type}" style="display: block !important;">{$message_details->message}</div></div></div>
		{/if}
	{/if}
	<div class="page-content light back-casino" style="width: auto !important;">
		<div class="ph15"></div>
		<div class="inline container  ">
			{include file="partials/dashboard_menu.tpl"}  
			<div class="left static-content ">
				<div class="page-area container inline form-container back-casino">
					<div class="page-title">حساب کاربری</div>
					<div class="p7 inline center ">
						<div class="report ">
							<div class="col-md-6 col-sm-12 col-xs-12 dashboard-style-red">
								<span class="report-title">شناسه کاربری</span>
								<span class="report-data">{$user->id|persian_number}</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12 dashboard-style-blue">
								<span class="report-title">موجودی فعلی حساب</span>
								<span class="report-data">{$user->cash|price_format}</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12 dashboard-style-blue">
								<span class="report-title">مجموع پیشبینی ها</span>
								<span class="report-data">{$totalBetCount|persian_number} پیش بینی ({$totalStake|price_format})</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12 dashboard-style-green">
								<span class="report-title">مجموع برد پیش بینی ها</span>
								<span class="report-data">{$giftCount|persian_number} برد ({$totalGift|price_format})</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12 dashboard-style-blue">
								<span class="report-title">مجموع شرط بندی های کازینو</span>
								<span class="report-data">{$all_casino_prices_count|persian_number} شرط بندی ({$all_casino_prices|price_format})</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12 dashboard-style-green">
								<span class="report-title">مجموع برد شرط بندی های کازینو</span>
								<span class="report-data">{$all_win_casino_prices_count|persian_number} برد ({$all_win_casino_prices|price_format})</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12 dashboard-style-blue">
								<span class="report-title">مجموع واریز های شما به سایت</span>
								<span class="report-data">{$creditSum|price_format}</span>
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12 dashboard-style-blue">
								<span class="report-title">مجموع برداشت ها</span>
								<span class="report-data">{$withdrawSum|price_format} ({$withdrawInSum|price_format} در انتظار پرداخت)</span>
							</div>
							<div class="col-md-12 col-sm-12 col-xs-12 dashboard-style-red">
								<span class="report-title">معرف شما</span>
								<span class="report-data">{$referral}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>