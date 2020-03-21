<?php
/* Smarty version 3.1.31, created on 2020-01-25 14:06:19
  from "/home/gang4bet/public_html/themes/admin/default/modules/payment/trans_withdraw.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e2c1a23df03d9_24614503',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'fbcb5159b9296ee8113bd1fc6d25358a41dfc04c' => 
    array (
      0 => '/home/gang4bet/public_html/themes/admin/default/modules/payment/trans_withdraw.tpl',
      1 => 1485907926,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e2c1a23df03d9_24614503 (Smarty_Internal_Template $_smarty_tpl) {
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
                        <th class="sorting">شناسه داخلی تراکنش</th>
                        <th class="sorting">کاربر</th>
                        <th class="sorting">مبلغ پرداختی</th>
                        <th class="sorting">تاریخ ثبت</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">شناسه داخلی تراکنش</th>
                        <th class="sorting">کاربر</th>
                        <th class="sorting">مبلغ پرداختی</th>
                        <th class="sorting">تاریخ ثبت</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['transactions']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?> 

                        <?php if (($_smarty_tpl->tpl_vars['val']->value->user_id == 6 || $_smarty_tpl->tpl_vars['val']->value->user_id == 2818 || $_smarty_tpl->tpl_vars['val']->value->user_id == 2824 || $_smarty_tpl->tpl_vars['val']->value->user_id == 2822)) {?>
                            <?php
continue 1;?>
                        <?php }?>
                        <tr>
                            <td>
                                <?php echo $_smarty_tpl->tpl_vars['val']->value['id'];?>

                            </td>
                            <td>
                                <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/bets/bets/view/',$_smarty_tpl->tpl_vars['val']->value['user']['id']);?>
"><?php echo $_smarty_tpl->tpl_vars['val']->value['user']['first_name'];?>
 <?php echo $_smarty_tpl->tpl_vars['val']->value['user']['last_name'];?>
</a><span style="direction:ltr;"> (<?php echo $_smarty_tpl->tpl_vars['val']->value['user']['email'];?>
)</span>
                            </td>
                            <td>
                                <?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['val']->value['amount']);?>
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
