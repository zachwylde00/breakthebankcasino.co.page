<?php
/* Smarty version 3.1.31, created on 2020-01-25 14:11:37
  from "/home/gang4bet/public_html/themes/admin/default/modules/users/users/withdraw.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e2c1b618c2554_92750627',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '98cf48f354d2470c0763927f5d14b0b2f38d8716' => 
    array (
      0 => '/home/gang4bet/public_html/themes/admin/default/modules/users/users/withdraw.tpl',
      1 => 1544455958,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e2c1b618c2554_92750627 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
if (!is_callable('smarty_modifier_con')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
if (!is_callable('smarty_modifier_price_format')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/modifier.price_format.php';
if (!is_callable('smarty_function_jdate')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/function.jdate.php';
?>

<div id="page_content_inner">
    <h3 class="heading_a title-top"><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</h3>
    
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">نام صاحب حساب</th>
                        <th class="sorting">کاربر</th>
                        <th class="sorting">مبلغ درخواستی</th>
                        <th class="sorting">وضعیت</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">نام صاحب حساب</th>
                        <th class="sorting">کاربر</th>
                        <th class="sorting">مبلغ درخواستی</th>
                        <th class="sorting">وضعیت</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['withdraw']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
                        <tr>
                            <td><?php echo $_smarty_tpl->tpl_vars['val']->value->account_holder;?>
</td>
                            <td>
                                  <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/bets/bets/view/',$_smarty_tpl->tpl_vars['val']->value['user']['id']);?>
"><?php echo $_smarty_tpl->tpl_vars['val']->value->user->first_name;?>
 <?php echo $_smarty_tpl->tpl_vars['val']->value->user->last_name;?>
</a>
                                  </td>
                            <td><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['val']->value->amount);?>
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
                            <td><?php echo smarty_function_jdate(array('format'=>'j F Y - H:i','date'=>$_smarty_tpl->tpl_vars['val']->value->created_at),$_smarty_tpl);?>
</td>
                            <td>
                                <a href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/users/users/view-withdraw/',$_smarty_tpl->tpl_vars['val']->value['id']);
$_prefixVariable1=ob_get_clean();
echo site_url($_prefixVariable1);?>
" class="md-btn md-btn-small md-btn-primary" id="delete-btn">نمایش</a>
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
</div><?php }
}
