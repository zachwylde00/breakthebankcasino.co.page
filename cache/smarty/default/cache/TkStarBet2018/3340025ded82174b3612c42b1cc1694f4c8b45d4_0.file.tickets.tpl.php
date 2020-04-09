<?php
/* Smarty version 3.1.31, created on 2018-10-14 20:39:56
  from "C:\xampp\htdocs\themes\default\TkStarBet2018\modules\contacts\tickets.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bc3786450ba03_05316411',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '3340025ded82174b3612c42b1cc1694f4c8b45d4' => 
    array (
      0 => 'C:\\xampp\\htdocs\\themes\\default\\TkStarBet2018\\modules\\contacts\\tickets.tpl',
      1 => 1538279046,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5bc3786450ba03_05316411 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\function.site_url.php';
if (!is_callable('smarty_function_jdate')) require_once 'C:\\xampp\\htdocs\\TkStarApplication\\smarty\\plugins\\function.jdate.php';
?>
<style type="text/css">
	.table tbody tr td a {
		color: white;
	}
</style>
<?php echo '<script'; ?>
 type="text/javascript">
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
<?php echo '</script'; ?>
>
<div class="container">
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
	<div class="page-content light">
		<div class="ph15"></div>
		<div class="inline container">
			<?php $_smarty_tpl->_subTemplateRender("file:partials/dashboard_menu.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

			<div class="left static-content">
				<div class="page-area container inline form-container">
					<div class="page-title">لیست تیکت ها <span class="pull-right"><a style="margin-top: -2px !important;" class="btn btn-sm btn-success" href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
contacts/tickets/new-ticket">ارسال تیکت جدید</a></span></div>
					<div class="p7 inline center" style="width: 100% !important;">
						<div class="support_messages">
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
									<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['Tickets']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
									<tr style="cursor: pointer !important;" onclick="window.location = '<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
contacts/tickets/view-ticket/<?php echo $_smarty_tpl->tpl_vars['val']->value->id;?>
';">
										<td style="text-align: center !important;"><a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
contacts/tickets/view-ticket/<?php echo $_smarty_tpl->tpl_vars['val']->value->id;?>
">TK-<?php echo $_smarty_tpl->tpl_vars['val']->value->id;?>
</a></td>
										<td style="text-align: center !important;"><a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
contacts/tickets/view-ticket/<?php echo $_smarty_tpl->tpl_vars['val']->value->id;?>
"><?php echo smarty_function_jdate(array('format'=>'j F Y - h:i a','date'=>$_smarty_tpl->tpl_vars['val']->value->created_at),$_smarty_tpl);?>
</a></td>
										<td style="text-align: center !important;"><a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
contacts/tickets/view-ticket/<?php echo $_smarty_tpl->tpl_vars['val']->value->id;?>
"><?php echo $_smarty_tpl->tpl_vars['val']->value->subject;?>
</a></td>
										<td style="text-align: center !important;"><?php if ($_smarty_tpl->tpl_vars['val']->value['status'] == 2) {?><span class="label label-success" style="width: 200px !important; display: inline-block !important; color: white !important;">پاسخ داده شده</span><?php } elseif ($_smarty_tpl->tpl_vars['val']->value['status'] == 0) {?><span class="label label-warning" style="width: 200px !important; display: inline-block !important; color: white !important;">منتظر پاسخ</span><?php } else { ?><span class="label label-default" style="width: 200px !important; display: inline-block !important; color: white !important;">در حال بررسی</span><?php }?></td>
										</a>
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
					<div class="row" style="color: white !important;"><div class="alert alert-info" style="display: block;">کاربران گرامی توجه داشته باشند، برای هر مورد یک تیکت ایجاد نمایید و تا حل شدن کامل مشکل، تیکت مربوطه را ادامه دهید و جهت تسریع در رفع مشکلات کاربری لطفا از ایجاد تیکت های جدید و متنوع اجتناب فرمایید</div></div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php }
}
