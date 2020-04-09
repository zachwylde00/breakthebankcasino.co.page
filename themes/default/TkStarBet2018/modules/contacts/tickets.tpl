<style type="text/css">
	.table tbody tr td a {
		color: white;
	}
</style>
<script type="text/javascript">
	TkStarFreamWork(document).ready(function(){
		TkStarFreamWork('table.table tbody tr').hover(function(){
			TkStarFreamWork(this).find('a').each(function(){
				TkStarFreamWork(this).css({ color: 'black' });
			});
		}, function(){
			TkStarFreamWork(this).find('a').each(function(){
				TkStarFreamWork(this).css({ color: 'white' });
			});
		});
	});
</script>
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
					<div class="page-title">لیست تیکت ها <span class="pull-right"><a class="btn btn-sm new-ticket-style" href="{site_url}contacts/tickets/new-ticket">ارسال تیکت جدید</a></span></div>
					<div class="p7 inline center" style="width: 100% !important;">
						<div class="support_messages" >
							<table class="table nopointer">
								<thead>
									<tr>
										<th style="text-align: center !important;">شناسه تیکت</th>
										<th style="text-align: center !important;">زمان ثبت</th>
										<th style="text-align: center !important;">عنوان تیکت</th>
										<th style="text-align: center !important;">وضعیت</th>
									</tr>
								</thead>
								<tbody>
									{foreach from=$Tickets item=val}
									<tr style="cursor: pointer !important;" onclick="window.location = '{site_url}contacts/tickets/view-ticket/{$val->id}';">
										<td style="text-align: center !important;"><a href="{site_url}contacts/tickets/view-ticket/{$val->id}">TK-{$val->id}</a></td>
										<td style="text-align: center !important;"><a href="{site_url}contacts/tickets/view-ticket/{$val->id}">{jdate format='j F Y - h:i a' date=$val->created_at}</a></td>
										<td style="text-align: center !important;"><a href="{site_url}contacts/tickets/view-ticket/{$val->id}">{$val->subject}</a></td>
										<td style="text-align: center !important;">{if $val.status eq 2}<span class="label label-success" style="width: 200px !important; display: inline-block !important; color: white !important;">پاسخ داده شده</span>{elseif $val.status eq 0}<span class="label label-warning" style="width: 200px !important; display: inline-block !important; color: white !important;">منتظر پاسخ</span>{else}<span class="label label-default" style="width: 200px !important; display: inline-block !important; color: white !important;">در حال بررسی</span>{/if}</td>
										</a>
									</tr>
									{/foreach}
								</tbody>
							</table>
						</div>
					</div>
					<div class="row" style="color: white !important;"><div class="alert alert-info" style="display: block;">کاربران گرامی توجه داشته باشند، برای هر مورد یک تیکت ایجاد نمایید و تا حل شدن کامل مشکل، تیکت مربوطه را ادامه دهید و جهت تسریع در رفع مشکلات کاربری لطفا از ایجاد تیکت های جدید و متنوع اجتناب فرمایید</div></div>
				</div>
			</div>
		</div>
	</div>
</div>
