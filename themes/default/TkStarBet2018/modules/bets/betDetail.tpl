<div class="container" style="width: 100% !important;">
	<div class="page-content light" style="width: auto !important; margin-right: -15px !important; margin-left: -15px !important;">
		<div class="ph15"></div>
		<div class="inline container">
			{include file="partials/dashboard_menu.tpl"}
			<div class="left static-content">
				<div class="page-area container inline form-container" align="center">
					<div class="page-title">جزئیات پیش بینی شماره {$bet_id} <span class="pull-right"><a style="margin-top: -2px !important;" class="btn btn-sm btn-success" href="{site_url}bets/myrecords">پیش بینی های من</a></span></div>
					<div class="row">
						<div class="col-lg-3" style="text-align: right !important; font-size: 15px; line-height: 40px; color: white !important;">
							<div><span>نوع : </span><span style="color: #5a5a5a !important;">{if $betRecord->type == 1}تکی{else}میکس {$betRecord->type} تایی{/if}</span></div>
							<div><span>شناسه شرط : </span><span style="color: #5a5a5a !important;">{$betRecord->id}</span></div>
							<div><span>زمان : </span><span style="color: #5a5a5a !important;">{jdate format='j F Y - H:i ' date=$betRecord->created_at}</span></div>
							<div><span>مبلغ (تومان) : </span><span style="color: #5a5a5a !important;">{$betRecord->stake|price_format}</span></div>
							<div><span>ضریب : </span><span style="color: #5a5a5a !important;">{$betRecord->effective_odd|persian_number}</span></div>
							<div>
								{assign var=winning value=$betRecord->stake * $betRecord->effective_odd}
								{if $betRecord->status eq 0}
									<span>مبلغ برد احتمالی : </span>
									<span style="color: #5a5a5a !important;">{$winning|price_format}</span>
								{else if $betRecord->status eq 1 }
									<span>مبلغ برد : </span>
									<span style="color: green !important;">{$winning|price_format}</span>
								{else if $betRecord->status eq 2}
									<span>مبلغ برد : </span>
									<span style="color: red !important;">{0|price_format}</span>
								{/if}
							</div>
						</div>
						<div class="col-lg-9">
							<table class="table nopointer">
								<thead>
									<tr>
										<th>زمان</th>
										<th>مسابقه</th>
										<th>شرط</th>
										<th>انتخاب</th>
										<th>ضریب</th>
										<th>نتیجه</th>
									</tr>
								</thead>
								<tbody>
								{foreach $betRecord->bet_form as $val}
									{$bet_form_result = file_get_contents('https://api.soccerama.pro/v1.2/matches/'|con:'':$val->match_id:'/?api_token=kSLGrxDaSXfeMh5sb1xSDviFqRNXXtYjjZrL2fpLd39dHf2ibewuzCbqsJSM&include=homeTeam,awayTeam')}
									{if empty($bet_form_result)}
										{$bet_form_result = file_get_contents('https://soccer.sportmonks.com/api/v2.0/fixtures/'|con:'':$val->match_id:'/?api_token=kSLGrxDaSXfeMh5sb1xSDviFqRNXXtYjjZrL2fpLd39dHf2ibewuzCbqsJSM&include=localTeam,visitorTeam')}
									{/if}
									{assign var=bet_form_result_json value=json_decode($bet_form_result, false)}
									{if empty($bet_form_result_json->data->scores->ht_score)}
										{assign var=ht_score value=$bet_form_result_json->ht_score}
									{else}
										{assign var=ht_score value=$bet_form_result_json->data->scores->ht_score}
									{/if}
									{if empty($bet_form_result_json->data->scores->ft_score)}
										{assign var=ft_score value=$bet_form_result_json->ft_score}
									{else}
										{assign var=ft_score value=$bet_form_result_json->data->scores->ft_score}
									{/if}
									{if empty($bet_form_result_json->data->scores->et_score)}
										{assign var=et_score value=$bet_form_result_json->et_score}
									{else}
										{assign var=et_score value=$bet_form_result_json->data->scores->et_score}
									{/if}
									{assign var=ht_score value=explode('-', $ht_score)}
									{assign var=ft_score value=explode('-', $ft_score)}
									{assign var=et_score value=explode('-', $et_score)}
									{if empty($ht_score[0])}{$ht_score[0] = 0}{/if}
									{if empty($ht_score[1])}{$ht_score[1] = 0}{/if}
									{if empty($ft_score[0])}{$ft_score[0] = 0}{/if}
									{if empty($ft_score[1])}{$ft_score[1] = 0}{/if}
									{if empty($et_score[0])}{$et_score[0] = 0}{/if}
									{if empty($et_score[1])}{$et_score[1] = 0}{/if}
									<tr>
										<td>{jdate format='j F Y - H:i' date=$val->created_at}</td>
										<td><strong style="float:left">{$val->home_team|fa}</strong>-<strong style="float:right">{$val->away_team|fa}</strong></td>
										<td>{$val->bet_type|fa}</td>
										<td>{$val->pick|fa} </td>
										<td>{$val->odd|persian_number}</td>
										<td style="direction: ltr;">
											<span class="bold">
												نیمه اول : {$ht_score[0]|persian_number} - {$ht_score[1]|persian_number}<br>
												نیمه دوم : {$ft_score[0]|persian_number} - {$ft_score[1]|persian_number}<br>
												وقت اضافه (15 دقیقه) : {$et_score[0]|persian_number} - {$et_score[1]|persian_number}
												{if !empty($bet_form_result_json->data->scores->localteam_pen_score) OR !empty($bet_form_result_json->data->scores->visitorteam_pen_score)}
													<br><br>نتیجه پنالتی :<br>
													{$val->home_team|fa} : {if empty($bet_form_result_json->data->scores->localteam_pen_score)}{0|persian_number}{else}{$bet_form_result_json->scores->localteam_pen_score|persian_number}{/if}
													{$val->away_team|fa} : {if empty($bet_form_result_json->data->scores->visitorteam_pen_score)}{0|persian_number}{else}{$bet_form_result_json->scores->visitorteam_pen_score|persian_number}{/if}
												{/if}
											</span>
										</td>
									</tr>
								{/foreach}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>