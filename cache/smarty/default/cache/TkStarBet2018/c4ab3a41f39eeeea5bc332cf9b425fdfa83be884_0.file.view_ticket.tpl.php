<?php
/* Smarty version 3.1.31, created on 2020-03-03 20:51:00
  from "C:\laragon\www\gang4bet\themes\default\TkStarBet2018\modules\contacts\view_ticket.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e5e91fce02456_43894913',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'c4ab3a41f39eeeea5bc332cf9b425fdfa83be884' => 
    array (
      0 => 'C:\\laragon\\www\\gang4bet\\themes\\default\\TkStarBet2018\\modules\\contacts\\view_ticket.tpl',
      1 => 1583256057,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5e5e91fce02456_43894913 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\function.site_url.php';
if (!is_callable('smarty_function_jdate')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\function.jdate.php';
if (!is_callable('smarty_function_assets_url')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\function.assets_url.php';
?>
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
	<div class="page-content light back-casino" style="width: auto !important;">
		<div class="ph15"></div>
		<div class="inline container">
			<?php $_smarty_tpl->_subTemplateRender("file:partials/dashboard_menu.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

			<div class="left static-content">
				<div class="page-area container inline form-container">
					<div class="page-title">مشاهده تیکت شماره <?php echo $_smarty_tpl->tpl_vars['ticket_id']->value;?>
 <span class="pull-right"><a style="margin-top: -2px !important;" class="btn btn-sm btn-success" href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
contacts/tickets/new-ticket">ارسال تیکت جدید</a> <a style="margin-top: -2px !important;" class="btn btn-sm btn-danger" href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
contacts/tickets/ticket-list">لیست تیکت ها</a></span></div>
					<div class="p7 inline center" style="width: 100% !important;">
                    <header class="clearfix">
                        <div class="row">
                            <div class="col-lg-12 ticket-body">
								<ul>
									<li><b>شناسه تیکت :</b> TK-<?php echo $_smarty_tpl->tpl_vars['ticket']->value->id;?>
</li>
									<li><b>عنوان تیکت :</b> <?php echo $_smarty_tpl->tpl_vars['ticket']->value->subject;?>
</li>
									<li><b>زمان ثبت تیکت :</b> <?php echo smarty_function_jdate(array('format'=>'l d F Y ساعت H:i:s','date'=>$_smarty_tpl->tpl_vars['ticket']->value->created_at),$_smarty_tpl);?>
</li>
									<li><b>وضعیت تیکت :</b> <?php if ($_smarty_tpl->tpl_vars['ticket']->value->status == 2) {?><span class="label label-success" style="width: 150px !important; display: inline-block !important; color: white !important;">پاسخ داده شده</span><?php } elseif ($_smarty_tpl->tpl_vars['ticket']->value->status == 0) {?><span class="label label-warning" style="width: 100px !important; display: inline-block !important; color: #0C0F2b !important;">منتظر پاسخ</span><?php } else { ?><span class="label label-default" style="width: 150px !important; display: inline-block !important; color: white !important;">در حال بررسی</span><?php }?></li>
								</ul>
							</div>
                        </div>
                    </header>
					<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['ticket']->value->replies, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
					<div class="row">
						<?php if ($_smarty_tpl->tpl_vars['val']->value['user_id'] != $_smarty_tpl->tpl_vars['logged_in_user_id']->value) {?>
						<div class="col-lg-9" style="margin-top: calc(3.3%) !important; text-align: justify !important; direction: rtl !important;" align="left"><div class="bubblereply"><?php echo $_smarty_tpl->tpl_vars['val']->value->content;?>
</div></div><?php }?>
						<div class="col-lg-3">
							<div class="row">
								<div class="col-md-6 col-sm-6 col-xs-6"><img style="margin-top: 10px !important;" width="75" src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/images/<?php if ($_smarty_tpl->tpl_vars['val']->value['user_id'] == $_smarty_tpl->tpl_vars['logged_in_user_id']->value) {?>user<?php } elseif ($_smarty_tpl->tpl_vars['val']->value['user_id'] != $_smarty_tpl->tpl_vars['logged_in_user_id']->value) {?>support<?php }?>.png" /></div>
								<div class="col-md-6 col-sm-6 col-xs-6"><div style="margin-top: 25px !important; color: #FFCB39;"><?php echo smarty_function_jdate(array('format'=>'l d F Y','date'=>$_smarty_tpl->tpl_vars['val']->value->created_at),$_smarty_tpl);?>
<br><?php echo smarty_function_jdate(array('format'=>'H:i:s','date'=>$_smarty_tpl->tpl_vars['val']->value->created_at),$_smarty_tpl);?>
</div></div>
							</div>
						</div>
						<?php if ($_smarty_tpl->tpl_vars['val']->value['user_id'] == $_smarty_tpl->tpl_vars['logged_in_user_id']->value) {?><div class="col-lg-9" style="margin-top: calc(3.3%) !important; text-align: justify !important; direction: rtl !important;" align="right"><div class="bubble"><?php echo $_smarty_tpl->tpl_vars['val']->value->content;?>
</div></div><?php }?>
					</div>
					<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

					<div class="col-lg-12">
						<form action="<?php echo $_smarty_tpl->tpl_vars['action']->value;?>
" method="post">
							<div class="signupform">
								<div class="row" style="padding: 0 !important; text-align: right !important;"><div class="col-lg-8"><div class="row" style="padding: 0 !important;"><div class="col-md-3 col-sm-12 col-xs-12"></div><div class="col-md-9 col-sm-12 col-xs-12"><h4 style="color:#FFCB39">ارسال پاسخ جدید</h4></div></div></div></div>
								<div class="row" style="padding: 0 !important;">
									<div class="col-md-8 col-sm-12 col-xs-12">
										<div class="row" style="padding: 0 !important;">
											<div class="col-md-3 col-sm-12 col-xs-12" style="margin-top: 15px !important;">متن پاسخ</div>
											<div class="col-md-9 col-sm-12 col-xs-12"><textarea style="min-height: 175px !important;resize: vertical !important;" class="input textarea" cols="20" name="content" placeholder="متن تیکت" rows="2"></textarea></div>
										</div>
									</div>
								</div>
								<div class="row" style="padding: 0 !important;">
									<div class="col-md-8 col-sm-12 col-xs-12">
										<div class="row" style="padding: 0 !important;">
											<div class="col-md-3 col-sm-12 col-xs-12"></div>
											<div class="col-md-9 col-sm-12 col-xs-12"><input class="btn btn-lg btn-danger floatright" value="ارسال" type="submit"></div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div class="row" style="color: white !important;"><div class="alert alert-info" style="display: block;">کاربران گرامی توجه داشته باشند، برای هر مورد یک تیکت ایجاد نمایید و تا حل شدن کامل مشکل، تیکت مربوطه را ادامه دهید و جهت تسریع در رفع مشکلات کاربری لطفا از ایجاد تیکت های جدید و متنوع اجتناب فرمایید</div></div>
                </div>
            </div>
        </div>
    </div>
</div><?php }
}
