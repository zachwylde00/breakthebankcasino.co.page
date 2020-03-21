<div class="container" style="width: 100% !important;">
	<div class="page-content light back-main" style="width: auto !important;">
		<div class="ph15"></div>
		<div class="inline container ">
			{include file="partials/dashboard_menu.tpl"}
			<div class="left static-content ">
				<div class="page-area container inline form-container ">
					<div class="page-title">پیش بینی های من</div>
					<div class="p7 inline center">
						<table class="table mybettable" style="table-layout: fixed;">
							<thead>
								<tr>
									<th style="width:10% !important;">زمان</th>
									<th style="width:10% !important;">نوع</th>
									<th style="width:50% !important;">
										<div class="row" align="center">
											<div class="col-lg-4" align="center">مسابقه</div>
											<div class="col-lg-4" align="center">جزئیات</div>
											<div class="col-lg-4" align="center">نتیجه</div>
										</div>
									</th>
									<th style="width:10% !important;">مبلغ (تومان)</th>
									<th>ضریب</th>
									<th style="width:10% !important;">مبلغ برد (تومان)</th>
								</tr>
							</thead>
							<tbody>
								{foreach $myRecords as $key => $val}
								{assign var=picks value=array()}
									<tr style="cursor: pointer !important;" onclick="window.location = '{site_url}bets/BetDetail/{$val->id}';">
									<td>{jdate format='j F Y H:i' date=$val->created_at}</td>
									<td>{if $val->type == 1}تکی{else}میکس {$val->type} تایی{/if}</td>
									<td>
										{foreach $val->bet_form as $match}
										{$picks[] = $match->pick|fa}
										<div class="row">
											<div class="col-lg-4">
												<div class="row">
													<div class="col-lg-12" align="center">{$match->home_team|fa}</div>
													<div class="col-lg-12" align="center">{$match->away_team|fa}</div>
												</div>
											</div>
											<div class="col-lg-4">
												<div class="row">
													<div class="col-lg-12" align="center">شرط : {$match->bet_type|fa}</div>
													<div class="col-lg-12" align="center">انتخاب : {$match->pick|fa}</div>
												</div>
											</div>
											<div class="col-lg-4">
												<div class="row">
													<div class="col-lg-12" align="center">{$match->home_score_ft|persian_number} - {$match->away_score_ft|persian_number}</div>
													<div class="col-lg-12" align="center">({$match->home_score|persian_number} - {$match->away_score|persian_number})</div>
												</div>
											</div>
										</div>
										{/foreach}
									</td>
									<td>{number_format($val->stake)|persian_number}</td>
									<td>{$val->effective_odd|persian_number}</td>
									<td class="prizeTD"><span style="color:#00b957"><b>{if $val->status eq 0}{else if $val->status eq 1 }{assign var=winning value=$val->stake * $val->effective_odd}{number_format($winning)|persian_number}{else if $val->status eq 2}<span style="color:red">{0|persian_number}</span>{/if}</b></span></td>
								</tr>
								{/foreach}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>>