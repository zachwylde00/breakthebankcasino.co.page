<?php
/* Smarty version 3.1.31, created on 2020-03-05 15:13:14
  from "C:\laragon\www\gang4bet\themes\default\TkStarBet2018\modules\users\withdraw.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e60e5d20bb653_67011455',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '3d5c9a11a807ae43a7ef92bbfa2eba29076df861' => 
    array (
      0 => 'C:\\laragon\\www\\gang4bet\\themes\\default\\TkStarBet2018\\modules\\users\\withdraw.tpl',
      1 => 1583249637,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5e60e5d20bb653_67011455 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_jdate')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\function.jdate.php';
if (!is_callable('smarty_modifier_price_format')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\modifier.price_format.php';
echo '<script'; ?>
 type="text/javascript">
	document.addEventListener("DOMContentLoaded", function () {
		new IMask(document.getElementById('sheba'), {
			mask: '(IR)00 - 0000 - 0000 - 0000 - 0000 - 0000 - 00'
		});
		new IMask(document.getElementById('card_number'), {
			mask: '0000 - 0000 - 0000 - 0000'
		});
	});
	String.prototype.reverse = function () {
		return this.split('').reverse().join('');
	}
	$(document).ready(function(){
		function reformatText(input) {        
			var x = input.val();
			x = x.replace(/,/g, '');
			x = x.reverse();
			x = x.replace(/.../g, function (e) {
				return e + ',';
			});
			x = x.reverse();
			x = x.replace(/^,/, '');
			input.val(x);
		}
		$('#amount').on('keyup keydown click change', function(){
			reformatText($(this));
		});
		$('#bank_name').change(function(){
			var $this_value = $(this).val().trim().toString();
			if($this_value == 'saman'){
				$('#saman_bank_description').slideDown();
				$('#account_number_div').slideDown();
			}else{
				$('#saman_bank_description').slideUp();
				$('#account_number_div').slideUp();
			}
		});
	});
<?php echo '</script'; ?>
>
<div class="container" style="width: 100% !important;">
	<?php $_prefixVariable1=@constant('get_message');
if (!empty($_prefixVariable1)) {?>
		<?php $_smarty_tpl->_assignInScope('message_details', (object)@constant('get_message'));
?>
		<?php if (!empty($_smarty_tpl->tpl_vars['message_details']->value->message)) {?>
			<?php if ($_smarty_tpl->tpl_vars['message_details']->value->type == 'fail') {?>
				<?php $_smarty_tpl->_assignInScope('alert_type', 'alert-danger');
?>
			<?php } elseif ($_smarty_tpl->tpl_vars['message_details']->value->type == 'warning') {?>
				<?php $_smarty_tpl->_assignInScope('alert_type', 'alert-warning');
?>
			<?php } elseif ($_smarty_tpl->tpl_vars['message_details']->value->type == 'success') {?>
				<?php $_smarty_tpl->_assignInScope('alert_type', 'alert-success');
?>
			<?php }?>
			<div class="row"><div style="text-align: right !important; width: 100% !important; margin-top: 10px !important; margin-bottom: -30px !important;"><div class="alert <?php echo $_smarty_tpl->tpl_vars['alert_type']->value;?>
" style="display: block !important;"><?php echo $_smarty_tpl->tpl_vars['message_details']->value->message;?>
</div></div></div>
		<?php }?>
	<?php }?>
	<div class="page-content light back-main" style="width: auto !important;">
		<div class="ph15"></div>
		<div class="inline container">
			<?php $_smarty_tpl->_subTemplateRender("file:partials/dashboard_menu.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

			<div class="left static-content">
				<div class="page-area container inline form-container">
					<div class="page-title">&#1583;&#1585;&#1582;&#1608;&#1575;&#1587;&#1578; &#1580;&#1575;&#1740;&#1586;&#1607;</div>
					<div class="withdraw-description" style=" margin-bottom: 20px !important; line-height: 30px !important; font-size: 15px !important; text-align: center !important; background-color:#E5E039; border: double 8px #0C0F2B; border-radius:10px;"> 
						<span><text style="font-weight: bold !important;"><font color="#C41313">&#1578;&#1608;&#1580;&#1607;* : &#1605;&#1588;&#1582;&#1589;&#1575;&#1578; &#1581;&#1587;&#1575;&#1576; &#1576;&#1575;&#1606;&#1705;&#1740; &#1576;&#1575;&#1740;&#1583; &#1605;&#1591;&#1575;&#1576;&#1602; &#1576;&#1575; &#1575;&#1591;&#1604;&#1575;&#1593;&#1575;&#1578; &#1581;&#1587;&#1575;&#1576; &#1705;&#1575;&#1585;&#1576;&#1585;&#1740; &#1588;&#1605;&#1575; &#1576;&#1575;&#1588;&#1583; &#1583;&#1585; &#1594;&#1740;&#1585; &#1575;&#1740;&#1606; &#1589;&#1608;&#1585;&#1578; &#1662;&#1585;&#1583;&#1575;&#1582;&#1578; &#1575;&#1606;&#1580;&#1575;&#1605; &#1606;&#1582;&#1608;&#1575;&#1607;&#1583; &#1588;&#1583;</font></span><hr>
						<span><font color="#0C0F2B">&#1576;&#1575; &#1578;&#1608;&#1580;&#1607; &#1576;&#1607; &#1602;&#1608;&#1575;&#1606;&#1740;&#1606; &#1580;&#1583;&#1740;&#1583; &#1576;&#1575;&#1606;&#1705;&#1740; &#1586;&#1605;&#1575;&#1606; &#1608;&#1575;&#1585;&#1740;&#1586; &#1576;&#1740;&#1606; &#1778;&#1780; &#1578;&#1575; &#1780;&#1784; &#1587;&#1575;&#1593;&#1578; &#1705;&#1575;&#1585;&#1740; &#1605;&#1740; &#1576;&#1575;&#1588;&#1583;</font></span><br />
						<span><font color="#0C0F2B">&#1581;&#1583;&#1575;&#1602;&#1604; &#1605;&#1576;&#1604;&#1594; &#1602;&#1575;&#1576;&#1604; &#1576;&#1585;&#1583;&#1575;&#1588;&#1578; : <?php echo number_format(100000);?>
 &#1578;&#1608;&#1605;&#1575;&#1606;</font></span><br />
						<span><font color="#0C0F2B">&#1581;&#1583;&#1575;&#1705;&#1579;&#1585; &#1605;&#1576;&#1604;&#1594; &#1602;&#1575;&#1576;&#1604; &#1576;&#1585;&#1583;&#1575;&#1588;&#1578; : <?php echo number_format(50000000);?>
 &#1578;&#1608;&#1605;&#1575;&#1606;</font></span><br />
						<span><font color="#0C0F2B">&#1593;&#1605;&#1604;&#1740;&#1575;&#1578; &#1662;&#1575;&#1740;&#1575; &#1583;&#1585; &#1585;&#1608;&#1586;&#1607;&#1575;&#1740; &#1580;&#1605;&#1593;&#1607; &#1608; &#1578;&#1593;&#1591;&#1740;&#1604;&#1575;&#1578; &#1585;&#1587;&#1605;&#1740; &#1578;&#1608;&#1587;&#1591; &#1576;&#1575;&#1606;&#1705; &#1575;&#1606;&#1580;&#1575;&#1605; &#1606;&#1605;&#1740; &#1588;&#1608;&#1583;</font></span><br />
					</div>
					<div class="withdraw-description alert alert-danger" id="saman_bank_description" style="margin-top: 15px !important; line-height: 40px !important; font-size: 15px !important; text-align: right !important;"><span>&#1662;&#1585;&#1583;&#1575;&#1582;&#1578; &#1607;&#1575;&#1740; &#1576;&#1575;&#1606;&#1705; &#1587;&#1575;&#1605;&#1575;&#1606; &#1576;&#1740;&#1606; 2 &#1575;&#1604;&#1740; 4 &#1587;&#1575;&#1593;&#1578; &#1575;&#1606;&#1580;&#1575;&#1605; &#1605;&#1740;&#1588;&#1608;&#1583;</span></div>
					<div class="p30 inline" align="right" style="margin-top: -30px !important; text-align: right !important; width: 100% !important;">
						<div class="">
							<div class="left form-title mw160 c-main" style=" padding-right:56px; border-radius:10px;background-color:#0C0F2B;">&#1605;&#1608;&#1580;&#1608;&#1583;&#1740;</div>
							<div class="left form-element fs16 mt8" style="padding-right:10px; text-align: right !important; direction: rtl !important;"><span class="bold"><?php echo number_format($_smarty_tpl->tpl_vars['cash']->value);?>
</span> &#1578;&#1608;&#1605;&#1575;&#1606;</div>
							<div class="clear"></div>
						</div>
						<div class="mt15">
							<div class="left form-title mw160 c-main" style=" padding-right:25px; border-radius:10px;background-color:#0C0F2B;">&#1605;&#1608;&#1580;&#1608;&#1583;&#1740; &#1602;&#1575;&#1576;&#1604; &#1576;&#1585;&#1583;&#1575;&#1588;&#1578;</div>
							<div class="left form-element fs16 mt8" style="padding-right:10px; text-align: right !important; direction: rtl !important;"><span class="bold"><?php echo number_format($_smarty_tpl->tpl_vars['cash']->value);?>
</span> &#1578;&#1608;&#1605;&#1575;&#1606;</div>
							<div class="clear"></div><br>
						</div>
						<form action="<?php echo $_smarty_tpl->tpl_vars['action']->value;?>
" method="post" style="background-color:#C41313; padding:10px; border: double 8px white";>
							<div class="mt15">
								<div class="left form-title mw160">&#1606;&#1575;&#1605; &#1608; &#1606;&#1575;&#1605; &#1582;&#1575;&#1606;&#1608;&#1575;&#1583;&#1711;&#1740;</div>
								<div class="left form-element"><input type="text" readonly="readonly" disabled="disabled" value="<?php echo $_smarty_tpl->tpl_vars['my_name']->value;?>
" style="height: 40px; text-align: center !important;" class="form-input"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">&#1605;&#1576;&#1604;&#1594;</div>
								<div class="left form-element"><input type="text" style="height: 40px !important; direction: ltr !important;" id="amount" name="amount" class="form-input text-money-format"></div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">&#1606;&#1575;&#1605; &#1576;&#1575;&#1606;&#1705;</div>
								<div class="left form-element">
									<select id="bank_name" name="bank_name" style="height: 40px !important;" class="form-input user-form-data">
										<option value="">&#1604;&#1591;&#1601;&#1575; &#1606;&#1575;&#1605; &#1576;&#1575;&#1606;&#1705; &#1582;&#1608;&#1583; &#1585;&#1575; &#1575;&#1606;&#1578;&#1582;&#1575;&#1576; &#1705;&#1606;&#1740;&#1583;</option>
										<option value="saman">&#1576;&#1575;&#1606;&#1705; &#1587;&#1575;&#1605;&#1575;&#1606;</option>
										<option value="meli">&#1576;&#1575;&#1606;&#1705; &#1605;&#1604;&#1740;</option>
										<option value="melat">&#1576;&#1575;&#1606;&#1705; &#1605;&#1604;&#1578;</option>
										<option value="pasargad">&#1576;&#1575;&#1606;&#1705; &#1662;&#1575;&#1587;&#1575;&#1585;&#1711;&#1575;&#1583;</option>
										<option value="tejarat">&#1576;&#1575;&#1606;&#1705; &#1578;&#1580;&#1575;&#1585;&#1578;</option>
										<option value="saderat">&#1576;&#1575;&#1606;&#1705; &#1589;&#1575;&#1583;&#1585;&#1575;&#1578;</option>
										<option value="sepah">&#1576;&#1575;&#1606;&#1705; &#1587;&#1662;&#1607;</option>
										<option value="parsian">&#1576;&#1575;&#1606;&#1705; &#1662;&#1575;&#1585;&#1587;&#1740;&#1575;&#1606;</option>
										<option value="ayande">&#1576;&#1575;&#1606;&#1705; &#1570;&#1740;&#1606;&#1583;&#1607;</option>
										<option value="sarmaye">&#1576;&#1575;&#1606;&#1705; &#1587;&#1585;&#1605;&#1575;&#1740;&#1607;</option>
										<option value="keshavarzi">&#1576;&#1575;&#1606;&#1705; &#1705;&#1588;&#1575;&#1608;&#1585;&#1586;&#1740;</option>
										<option value="ghavamin">&#1576;&#1575;&#1606;&#1705; &#1602;&#1608;&#1575;&#1605;&#1740;&#1606;</option>
										<option value="eghtesad_novin">&#1576;&#1575;&#1606;&#1705; &#1575;&#1602;&#1578;&#1589;&#1575;&#1583; &#1606;&#1608;&#1740;&#1606;</option>
										<option value="maskan">&#1576;&#1575;&#1606;&#1705; &#1605;&#1587;&#1705;&#1606;</option>
										<option value="dey">&#1576;&#1575;&#1606;&#1705; &#1583;&#1616;&#1740;</option>
										<option value="shahr">&#1576;&#1575;&#1606;&#1705; &#1588;&#1607;&#1585;</option>
										<option value="refah">&#1576;&#1575;&#1606;&#1705; &#1585;&#1601;&#1575;&#1607;</option>
										<option value="ansar">&#1576;&#1575;&#1606;&#1705; &#1575;&#1606;&#1589;&#1575;&#1585;</option>
										<option value="sina">&#1576;&#1575;&#1606;&#1705; &#1587;&#1740;&#1606;&#1575;</option>
									</select>
								</div><br><br>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">&#1588;&#1605;&#1575;&#1585;&#1607; &#1588;&#1576;&#1575;</div>
								<div class="left form-element">
									<input type="text" style="height: 40px !important; direction: ltr !important;" id="sheba" name="sheba" class="form-input user-form-data text-format" value="">
								</div>
								<div class="clear"></div>
							</div>
							<div id="account_number_div" style="display: none;" class="mt15">
								<div class="left form-title mw160">&#1588;&#1605;&#1575;&#1585;&#1607; &#1581;&#1587;&#1575;&#1576;</div>
								<div class="left form-element">
									<input type="text" style="height: 40px !important; direction: ltr !important;" id="account_number" name="account_number" class="form-input user-form-data text-format" value="">
								</div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-title mw160">&#1588;&#1605;&#1575;&#1585;&#1607; &#1705;&#1575;&#1585;&#1578;</div>
								<div class="left form-element">
									<input type="text" style="height: 40px !important; direction: ltr !important;" id="card_number" name="card_number" class="form-input user-form-data text-format" value="">
								</div>
								<div class="clear"></div>
							</div>
							<div class="mt15">
								<div class="left form-element" style="padding-right:18%; padding-left:18%;">
									<button href="javascript:;" class="form-button action-button" style="width:100%">&#1576;&#1585;&#1583;&#1575;&#1588;&#1578; &#1580;&#1575;&#1740;&#1586;&#1607;</button>
								</div>
								<div class="clear"></div>
							</div>
						</form>
                        <section class="formbox row_100 clearfix" style="margin-top: 30px !important;">
                            <div class="support_messages" style="display: block;">
                                <table class="leaguetable support">
									<thead>
                                        <tr>
                                            <th style="width: 25%; text-align: center !important;">&#1588;&#1606;&#1575;&#1587;&#1607; &#1583;&#1585;&#1582;&#1608;&#1575;&#1587;&#1578;</th>
                                            <th style="width: 25%; text-align: center !important;">&#1578;&#1575;&#1585;&#1740;&#1582; &#1583;&#1585;&#1582;&#1608;&#1575;&#1587;&#1578;</th>
                                            <th style="width: 25%; text-align: center !important;">&#1605;&#1576;&#1604;&#1594; &#1583;&#1585;&#1582;&#1608;&#1575;&#1587;&#1578;&#1740;</th>
                                            <th style="width: 25%; text-align: center !important;">&#1608;&#1590;&#1593;&#1740;&#1578;</th>
                                        </tr>
									</thead>
                                    <tbody>
                                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['withdrawList']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
										<tr>
											<td style="width: 25%; text-align: center !important;"><?php echo $_smarty_tpl->tpl_vars['val']->value->id;?>
</td>
											<td style="width: 25%; text-align: center !important;"><?php echo smarty_function_jdate(array('format'=>'l d F Y ساعت H:i:s','date'=>$_smarty_tpl->tpl_vars['val']->value->created_at),$_smarty_tpl);?>
</td>
											<td style="width: 25%; text-align: center !important;"><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['val']->value->amount);?>
</td>
											<td style="width: 25%; text-align: center !important;"><?php if ($_smarty_tpl->tpl_vars['val']->value->status == 0) {?>&#1662;&#1585;&#1583;&#1575;&#1582;&#1578; &#1606;&#1588;&#1583;&#1607;/&#1583;&#1585;&#1581;&#1575;&#1604; &#1576;&#1585;&#1585;&#1587;&#1740;<?php } elseif ($_smarty_tpl->tpl_vars['val']->value->status == -1) {?>&#1583;&#1585;&#1582;&#1608;&#1575;&#1587;&#1578; &#1585;&#1583; &#1588;&#1583;&#1607;<?php } elseif ($_smarty_tpl->tpl_vars['val']->value->status == 1) {?>&#1662;&#1585;&#1583;&#1575;&#1582;&#1578; &#1588;&#1583;&#1607;<?php } elseif ($_smarty_tpl->tpl_vars['val']->value->status == 2) {?>&#1576;&#1585;&#1585;&#1587;&#1740; &#1588;&#1583;&#1607;&#1548; &#1583;&#1585; &#1575;&#1606;&#1578;&#1592;&#1575;&#1585; &#1662;&#1585;&#1583;&#1575;&#1582;&#1578;<?php }?></td>
										</tr>
                                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><?php }
}
