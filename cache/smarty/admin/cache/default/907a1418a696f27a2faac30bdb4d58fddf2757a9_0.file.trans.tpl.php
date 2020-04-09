<?php
/* Smarty version 3.1.31, created on 2018-11-16 13:23:38
  from "/home/richbet/domains/richbet.xyz/public_html/themes/admin/default/modules/payment/trans.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bee93a2b31ca8_14736305',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '907a1418a696f27a2faac30bdb4d58fddf2757a9' => 
    array (
      0 => '/home/richbet/domains/richbet.xyz/public_html/themes/admin/default/modules/payment/trans.tpl',
      1 => 1489057328,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5bee93a2b31ca8_14736305 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_modifier_price_format')) require_once '/home/richbet/domains/richbet.xyz/public_html/TkStarApplication/smarty/plugins/modifier.price_format.php';
if (!is_callable('smarty_function_jdate')) require_once '/home/richbet/domains/richbet.xyz/public_html/TkStarApplication/smarty/plugins/function.jdate.php';
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top"><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">شناسه داخلی تراکنش</th>
                        <th class="sorting">کاربر</th>
                        <th class="sorting">مبلغ پرداختی</th>
                        <th class="sorting">شرح</th>
                        <th class="sorting">نوع</th>
                        <th class="sorting">تاریخ ثبت</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">شناسه داخلی تراکنش</th>
                        <th class="sorting">کاربر</th>
                        <th class="sorting">مبلغ پرداختی</th>
                        <th class="sorting">شرح</th>
                        <th class="sorting">نوع</th>
                        <th class="sorting">تاریخ ثبت</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['transactions']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>  
                        <tr>
                            <td>
                                <?php echo $_smarty_tpl->tpl_vars['val']->value['id'];?>

                            </td>
                            <td>
                                <?php echo $_smarty_tpl->tpl_vars['val']->value['user']['first_name'];?>
 <?php echo $_smarty_tpl->tpl_vars['val']->value['user']['last_name'];?>
 <span style="direction:ltr;"> (<?php echo $_smarty_tpl->tpl_vars['val']->value['user']['email'];?>
)</span>
                            </td>
                            <td>
                                <?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['val']->value['price']);?>
</td>
                            <td><?php echo $_smarty_tpl->tpl_vars['val']->value['description'];?>
</td>
                            <td> 
                                <?php if ($_smarty_tpl->tpl_vars['val']->value['invoice_type'] == 1) {?>
                                    شارژ حساب
                                <?php } elseif ($_smarty_tpl->tpl_vars['val']->value['invoice_type'] == 2) {?>
                                    واریز برد شرط
                                <?php } elseif ($_smarty_tpl->tpl_vars['val']->value['invoice_type'] == 3) {?>
                                    برداشت برای ثبت شرط
                                <?php } elseif ($_smarty_tpl->tpl_vars['val']->value['invoice_type'] == 4) {?>
                                    درخواست جایزه
                                <?php } elseif ($_smarty_tpl->tpl_vars['val']->value['invoice_type'] == 5) {?>
                                    واریز کارمزد کاربر زیرمجموعه
                                <?php } elseif ($_smarty_tpl->tpl_vars['val']->value['invoice_type'] == 10) {?>
                                   واریز توسط مدیریت
                                <?php } elseif ($_smarty_tpl->tpl_vars['val']->value['invoice_type'] == 11) {?>
                                    برداشت توسط مدیریت
                                <?php }?>
                            </td>
                            <td>

                                <label style="color:#8fdf82">
                                    <?php echo smarty_function_jdate(array('format'=>'j F Y H:i:s','date'=>$_smarty_tpl->tpl_vars['val']->value['created_at']),$_smarty_tpl);?>

                                </label>
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
<?php }
}
