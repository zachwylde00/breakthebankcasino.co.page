<?php
/* Smarty version 3.1.31, created on 2018-12-25 16:07:41
  from "/home/richbet/public_html/themes/default/TkStarBet2018/modules/bets/betDetail.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c222495579b02_27663088',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '711992a18de3356a4c38eb4804877e3ebb8deae6' => 
    array (
      0 => '/home/richbet/public_html/themes/default/TkStarBet2018/modules/bets/betDetail.tpl',
      1 => 1545503032,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5c222495579b02_27663088 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
if (!is_callable('smarty_function_jdate')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/function.jdate.php';
if (!is_callable('smarty_modifier_price_format')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/modifier.price_format.php';
if (!is_callable('smarty_modifier_persian_number')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/modifier.persian_number.php';
if (!is_callable('smarty_modifier_con')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
if (!is_callable('smarty_modifier_fa')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/modifier.fa.php';
?>
<div class="container" style="width: 100% !important;">
	<div class="page-content light" style="width: auto !important; margin-right: -15px !important; margin-left: -15px !important;">
		<div class="ph15"></div>
		<div class="inline container">
			<?php $_smarty_tpl->_subTemplateRender("file:partials/dashboard_menu.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

			<div class="left static-content">
				<div class="page-area container inline form-container" align="center">
					<div class="page-title">جزئیات پیش بینی شماره <?php echo $_smarty_tpl->tpl_vars['bet_id']->value;?>
 <span class="pull-right"><a style="margin-top: -2px !important;" class="btn btn-sm btn-success" href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/myrecords">پیش بینی های من</a></span></div>
					<div class="row">
						<div class="col-lg-3" style="text-align: right !important; font-size: 15px; line-height: 40px; color: white !important;">
							<div><span>نوع : </span><span style="color: #5a5a5a !important;"><?php if ($_smarty_tpl->tpl_vars['betRecord']->value->type == 1) {?>تکی<?php } else { ?>میکس <?php echo $_smarty_tpl->tpl_vars['betRecord']->value->type;?>
 تایی<?php }?></span></div>
							<div><span>شناسه شرط : </span><span style="color: #5a5a5a !important;"><?php echo $_smarty_tpl->tpl_vars['betRecord']->value->id;?>
</span></div>
							<div><span>زمان : </span><span style="color: #5a5a5a !important;"><?php echo smarty_function_jdate(array('format'=>'j F Y - H:i ','date'=>$_smarty_tpl->tpl_vars['betRecord']->value->created_at),$_smarty_tpl);?>
</span></div>
							<div><span>مبلغ (تومان) : </span><span style="color: #5a5a5a !important;"><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['betRecord']->value->stake);?>
</span></div>
							<div><span>ضریب : </span><span style="color: #5a5a5a !important;"><?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['betRecord']->value->effective_odd);?>
</span></div>
							<div>
								<?php $_smarty_tpl->_assignInScope('winning', $_smarty_tpl->tpl_vars['betRecord']->value->stake*$_smarty_tpl->tpl_vars['betRecord']->value->effective_odd);
?>
								<?php if ($_smarty_tpl->tpl_vars['betRecord']->value->status == 0) {?>
									<span>مبلغ برد احتمالی : </span>
									<span style="color: #5a5a5a !important;"><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['winning']->value);?>
</span>
								<?php } elseif ($_smarty_tpl->tpl_vars['betRecord']->value->status == 1) {?>
									<span>مبلغ برد : </span>
									<span style="color: green !important;"><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['winning']->value);?>
</span>
								<?php } elseif ($_smarty_tpl->tpl_vars['betRecord']->value->status == 2) {?>
									<span>مبلغ برد : </span>
									<span style="color: red !important;"><?php echo smarty_modifier_price_format(0);?>
</span>
								<?php }?>
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
								<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['betRecord']->value->bet_form, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
									<?php $_smarty_tpl->_assignInScope('bet_form_result', file_get_contents(smarty_modifier_con('https://api.soccerama.pro/v1.2/matches/','',$_smarty_tpl->tpl_vars['val']->value->match_id,'/?api_token=kSLGrxDaSXfeMh5sb1xSDviFqRNXXtYjjZrL2fpLd39dHf2ibewuzCbqsJSM&include=homeTeam,awayTeam')));
?>
									<?php if (empty($_smarty_tpl->tpl_vars['bet_form_result']->value)) {?>
										<?php $_smarty_tpl->_assignInScope('bet_form_result', file_get_contents(smarty_modifier_con('https://soccer.sportmonks.com/api/v2.0/fixtures/','',$_smarty_tpl->tpl_vars['val']->value->match_id,'/?api_token=kSLGrxDaSXfeMh5sb1xSDviFqRNXXtYjjZrL2fpLd39dHf2ibewuzCbqsJSM&include=localTeam,visitorTeam')));
?>
									<?php }?>
									<?php $_smarty_tpl->_assignInScope('bet_form_result_json', json_decode($_smarty_tpl->tpl_vars['bet_form_result']->value,false));
?>
									<?php if (empty($_smarty_tpl->tpl_vars['bet_form_result_json']->value->data->scores->ht_score)) {?>
										<?php $_smarty_tpl->_assignInScope('ht_score', $_smarty_tpl->tpl_vars['bet_form_result_json']->value->ht_score);
?>
									<?php } else { ?>
										<?php $_smarty_tpl->_assignInScope('ht_score', $_smarty_tpl->tpl_vars['bet_form_result_json']->value->data->scores->ht_score);
?>
									<?php }?>
									<?php if (empty($_smarty_tpl->tpl_vars['bet_form_result_json']->value->data->scores->ft_score)) {?>
										<?php $_smarty_tpl->_assignInScope('ft_score', $_smarty_tpl->tpl_vars['bet_form_result_json']->value->ft_score);
?>
									<?php } else { ?>
										<?php $_smarty_tpl->_assignInScope('ft_score', $_smarty_tpl->tpl_vars['bet_form_result_json']->value->data->scores->ft_score);
?>
									<?php }?>
									<?php if (empty($_smarty_tpl->tpl_vars['bet_form_result_json']->value->data->scores->et_score)) {?>
										<?php $_smarty_tpl->_assignInScope('et_score', $_smarty_tpl->tpl_vars['bet_form_result_json']->value->et_score);
?>
									<?php } else { ?>
										<?php $_smarty_tpl->_assignInScope('et_score', $_smarty_tpl->tpl_vars['bet_form_result_json']->value->data->scores->et_score);
?>
									<?php }?>
									<?php $_smarty_tpl->_assignInScope('ht_score', explode('-',$_smarty_tpl->tpl_vars['ht_score']->value));
?>
									<?php $_smarty_tpl->_assignInScope('ft_score', explode('-',$_smarty_tpl->tpl_vars['ft_score']->value));
?>
									<?php $_smarty_tpl->_assignInScope('et_score', explode('-',$_smarty_tpl->tpl_vars['et_score']->value));
?>
									<?php if (empty($_smarty_tpl->tpl_vars['ht_score']->value[0])) {
$_tmp_array = isset($_smarty_tpl->tpl_vars['ht_score']) ? $_smarty_tpl->tpl_vars['ht_score']->value : array();
if (!is_array($_tmp_array) || $_tmp_array instanceof ArrayAccess) {
settype($_tmp_array, 'array');
}
$_tmp_array[0] = 0;
$_smarty_tpl->_assignInScope('ht_score', $_tmp_array);
}?>
									<?php if (empty($_smarty_tpl->tpl_vars['ht_score']->value[1])) {
$_tmp_array = isset($_smarty_tpl->tpl_vars['ht_score']) ? $_smarty_tpl->tpl_vars['ht_score']->value : array();
if (!is_array($_tmp_array) || $_tmp_array instanceof ArrayAccess) {
settype($_tmp_array, 'array');
}
$_tmp_array[1] = 0;
$_smarty_tpl->_assignInScope('ht_score', $_tmp_array);
}?>
									<?php if (empty($_smarty_tpl->tpl_vars['ft_score']->value[0])) {
$_tmp_array = isset($_smarty_tpl->tpl_vars['ft_score']) ? $_smarty_tpl->tpl_vars['ft_score']->value : array();
if (!is_array($_tmp_array) || $_tmp_array instanceof ArrayAccess) {
settype($_tmp_array, 'array');
}
$_tmp_array[0] = 0;
$_smarty_tpl->_assignInScope('ft_score', $_tmp_array);
}?>
									<?php if (empty($_smarty_tpl->tpl_vars['ft_score']->value[1])) {
$_tmp_array = isset($_smarty_tpl->tpl_vars['ft_score']) ? $_smarty_tpl->tpl_vars['ft_score']->value : array();
if (!is_array($_tmp_array) || $_tmp_array instanceof ArrayAccess) {
settype($_tmp_array, 'array');
}
$_tmp_array[1] = 0;
$_smarty_tpl->_assignInScope('ft_score', $_tmp_array);
}?>
									<?php if (empty($_smarty_tpl->tpl_vars['et_score']->value[0])) {
$_tmp_array = isset($_smarty_tpl->tpl_vars['et_score']) ? $_smarty_tpl->tpl_vars['et_score']->value : array();
if (!is_array($_tmp_array) || $_tmp_array instanceof ArrayAccess) {
settype($_tmp_array, 'array');
}
$_tmp_array[0] = 0;
$_smarty_tpl->_assignInScope('et_score', $_tmp_array);
}?>
									<?php if (empty($_smarty_tpl->tpl_vars['et_score']->value[1])) {
$_tmp_array = isset($_smarty_tpl->tpl_vars['et_score']) ? $_smarty_tpl->tpl_vars['et_score']->value : array();
if (!is_array($_tmp_array) || $_tmp_array instanceof ArrayAccess) {
settype($_tmp_array, 'array');
}
$_tmp_array[1] = 0;
$_smarty_tpl->_assignInScope('et_score', $_tmp_array);
}?>
									<tr>
										<td><?php echo smarty_function_jdate(array('format'=>'j F Y - H:i','date'=>$_smarty_tpl->tpl_vars['val']->value->created_at),$_smarty_tpl);?>
</td>
										<td><strong style="float:left"><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['val']->value->home_team);?>
</strong>-<strong style="float:right"><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['val']->value->away_team);?>
</strong></td>
										<td><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['val']->value->bet_type);?>
</td>
										<td><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['val']->value->pick);?>
 </td>
										<td><?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['val']->value->odd);?>
</td>
										<td style="direction: ltr;">
											<span class="bold">
												نیمه اول : <?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['ht_score']->value[0]);?>
 - <?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['ht_score']->value[1]);?>
<br>
												نیمه دوم : <?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['ft_score']->value[0]);?>
 - <?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['ft_score']->value[1]);?>
<br>
												وقت اضافه (15 دقیقه) : <?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['et_score']->value[0]);?>
 - <?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['et_score']->value[1]);?>

												<?php if (!empty($_smarty_tpl->tpl_vars['bet_form_result_json']->value->data->scores->localteam_pen_score) || !empty($_smarty_tpl->tpl_vars['bet_form_result_json']->value->data->scores->visitorteam_pen_score)) {?>
													<br><br>نتیجه پنالتی :<br>
													<?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['val']->value->home_team);?>
 : <?php if (empty($_smarty_tpl->tpl_vars['bet_form_result_json']->value->data->scores->localteam_pen_score)) {
echo smarty_modifier_persian_number(0);
} else {
echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['bet_form_result_json']->value->scores->localteam_pen_score);
}?>
													<?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['val']->value->away_team);?>
 : <?php if (empty($_smarty_tpl->tpl_vars['bet_form_result_json']->value->data->scores->visitorteam_pen_score)) {
echo smarty_modifier_persian_number(0);
} else {
echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['bet_form_result_json']->value->scores->visitorteam_pen_score);
}?>
												<?php }?>
											</span>
										</td>
									</tr>
								<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div><?php }
}
