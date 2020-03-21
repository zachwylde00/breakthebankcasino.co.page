<?php
/* Smarty version 3.1.31, created on 2020-03-05 15:13:06
  from "C:\laragon\www\gang4bet\themes\default\TkStarBet2018\modules\bets\myBets.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e60e5caebfa83_76467157',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'be3efb9f448e9b196bb9f37ed6097f6185ecd926' => 
    array (
      0 => 'C:\\laragon\\www\\gang4bet\\themes\\default\\TkStarBet2018\\modules\\bets\\myBets.tpl',
      1 => 1583239682,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5e60e5caebfa83_76467157 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\function.site_url.php';
if (!is_callable('smarty_function_jdate')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\function.jdate.php';
if (!is_callable('smarty_modifier_fa')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\modifier.fa.php';
if (!is_callable('smarty_modifier_persian_number')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\modifier.persian_number.php';
?>
<div class="container" style="width: 100% !important;">
	<div class="page-content light back-main" style="width: auto !important;">
		<div class="ph15"></div>
		<div class="inline container ">
			<?php $_smarty_tpl->_subTemplateRender("file:partials/dashboard_menu.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

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
								<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['myRecords']->value, 'val', false, 'key');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['key']->value => $_smarty_tpl->tpl_vars['val']->value) {
?>
								<?php $_smarty_tpl->_assignInScope('picks', array());
?>
									<tr style="cursor: pointer !important;" onclick="window.location = '<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/BetDetail/<?php echo $_smarty_tpl->tpl_vars['val']->value->id;?>
';">
									<td><?php echo smarty_function_jdate(array('format'=>'j F Y H:i','date'=>$_smarty_tpl->tpl_vars['val']->value->created_at),$_smarty_tpl);?>
</td>
									<td><?php if ($_smarty_tpl->tpl_vars['val']->value->type == 1) {?>تکی<?php } else { ?>میکس <?php echo $_smarty_tpl->tpl_vars['val']->value->type;?>
 تایی<?php }?></td>
									<td>
										<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['val']->value->bet_form, 'match');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['match']->value) {
?>
										<?php $_tmp_array = isset($_smarty_tpl->tpl_vars['picks']) ? $_smarty_tpl->tpl_vars['picks']->value : array();
if (!is_array($_tmp_array) || $_tmp_array instanceof ArrayAccess) {
settype($_tmp_array, 'array');
}
$_tmp_array[] = smarty_modifier_fa($_smarty_tpl->tpl_vars['match']->value->pick);
$_smarty_tpl->_assignInScope('picks', $_tmp_array);
?>
										<div class="row">
											<div class="col-lg-4">
												<div class="row">
													<div class="col-lg-12" align="center"><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['match']->value->home_team);?>
</div>
													<div class="col-lg-12" align="center"><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['match']->value->away_team);?>
</div>
												</div>
											</div>
											<div class="col-lg-4">
												<div class="row">
													<div class="col-lg-12" align="center">شرط : <?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['match']->value->bet_type);?>
</div>
													<div class="col-lg-12" align="center">انتخاب : <?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['match']->value->pick);?>
</div>
												</div>
											</div>
											<div class="col-lg-4">
												<div class="row">
													<div class="col-lg-12" align="center"><?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['match']->value->home_score_ft);?>
 - <?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['match']->value->away_score_ft);?>
</div>
													<div class="col-lg-12" align="center">(<?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['match']->value->home_score);?>
 - <?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['match']->value->away_score);?>
)</div>
												</div>
											</div>
										</div>
										<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

									</td>
									<td><?php echo smarty_modifier_persian_number(number_format($_smarty_tpl->tpl_vars['val']->value->stake));?>
</td>
									<td><?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['val']->value->effective_odd);?>
</td>
									<td class="prizeTD"><span style="color:#00b957"><b><?php if ($_smarty_tpl->tpl_vars['val']->value->status == 0) {
} elseif ($_smarty_tpl->tpl_vars['val']->value->status == 1) {
$_smarty_tpl->_assignInScope('winning', $_smarty_tpl->tpl_vars['val']->value->stake*$_smarty_tpl->tpl_vars['val']->value->effective_odd);
echo smarty_modifier_persian_number(number_format($_smarty_tpl->tpl_vars['winning']->value));
} elseif ($_smarty_tpl->tpl_vars['val']->value->status == 2) {?><span style="color:red"><?php echo smarty_modifier_persian_number(0);?>
</span><?php }?></b></span></td>
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
</div>><?php }
}
