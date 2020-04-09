<?php
/* Smarty version 3.1.31, created on 2020-01-25 14:09:32
  from "/home/gang4bet/public_html/themes/admin/default/modules/users/users/carttocart.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e2c1ae4031ee0_18963574',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '8c63a1856aa06733fac454a2172938b818f045cf' => 
    array (
      0 => '/home/gang4bet/public_html/themes/admin/default/modules/users/users/carttocart.tpl',
      1 => 1545500480,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e2c1ae4031ee0_18963574 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
if (!is_callable('smarty_modifier_con')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
if (!is_callable('smarty_function_jdate')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/function.jdate.php';
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top"><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</h3>
        <h4>بعد از ثبت به عنوان پرداخت شده مبلغ را به صورت دستی برای کاربر مورد نظر شارژ کنید.</h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        			<th class="sorting">کد پیگیری</th>
                        			<th class="sorting">نام و نام خانوادگی</th>
									<th class="sorting">زمان ثبت</th>
									<th class="sorting">زمان تراکنش</th>
									<th class="sorting">شماره کارت(چهار رقم اخر)</th>
									<th class="sorting">نوع تراکنش</th>
									<th class="sorting">مبلغ به تومان</th>
									<th class="sorting">وضعیت</th>
									<th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        			<th class="sorting">کد پیگیری</th>
                        			<th class="sorting">نام و نام خانوادگی</th>
									<th class="sorting">زمان ثبت</th>
									<th class="sorting">زمان تراکنش</th>
									<th class="sorting">شماره کارت(چهار رقم اخر)</th>
									<th class="sorting">نوع تراکنش</th>
									<th class="sorting">مبلغ به تومان</th>
									<th class="sorting">وضعیت</th>
									<th class="no-sort">عملیات</th>

                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['carttocart']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
                        <tr>
                        <td><?php echo $_smarty_tpl->tpl_vars['val']->value->paygiricod;?>
</td>
                        <td>
                        <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/bets/bets/view/',$_smarty_tpl->tpl_vars['val']->value['user']['id']);?>
"><?php echo $_smarty_tpl->tpl_vars['val']->value->user->first_name;?>
 <?php echo $_smarty_tpl->tpl_vars['val']->value->user->last_name;?>
</a>
                        </td>
						<td><?php echo smarty_function_jdate(array('format'=>'j F Y H:i','date'=>date('Y/m/d H:i:s',$_smarty_tpl->tpl_vars['val']->value->created_at)),$_smarty_tpl);?>
</td>
						<td><?php echo $_smarty_tpl->tpl_vars['val']->value->time;?>
</td>
						<td><?php echo $_smarty_tpl->tpl_vars['val']->value->card4;?>
</td>
						<td><?php echo $_smarty_tpl->tpl_vars['val']->value->description;?>
</td>
						<td style="direction: ltr !important; color: <?php if ($_smarty_tpl->tpl_vars['val']->value->price <= -1) {?>orange<?php } else { ?>green<?php }?> !important;"><?php echo number_format($_smarty_tpl->tpl_vars['val']->value->price);?>
</td>

                            <td>
                                <?php if ($_smarty_tpl->tpl_vars['val']->value->status == 0) {?>
                                    <label class="uk-text-danger">پرداخت نشده</label>
                                <?php } elseif ($_smarty_tpl->tpl_vars['val']->value->status == 1) {?>
                                    <label class="uk-text-success">پرداخت شده</label>
                                <?php } elseif ($_smarty_tpl->tpl_vars['val']->value->status == 2) {?>
                                    <label class="uk-text-primary">صف پرداخت</label>
                                <?php }?>
                            </td>
                            <td>
        <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/users/users/carttocart-status/',$_smarty_tpl->tpl_vars['val']->value['id']);?>
" class="uk-button btn-<?php if ($_smarty_tpl->tpl_vars['val']->value['status'] == 1) {?>danger<?php } else { ?>success<?php }?>">ثبت بعنوان <?php echo $_smarty_tpl->tpl_vars['status_label']->value;?>
</a>
        <?php if ($_smarty_tpl->tpl_vars['val']->value['status'] == 0) {?>
            <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/users/users/carttocart-status-q/',$_smarty_tpl->tpl_vars['val']->value['id']);?>
" class="uk-button btn-primary">در صف پرداخت </a>
        <?php }?>                            </td>
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
</div><?php }
}
