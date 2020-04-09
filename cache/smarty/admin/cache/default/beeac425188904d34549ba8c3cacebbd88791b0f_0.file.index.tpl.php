<?php
/* Smarty version 3.1.31, created on 2019-03-19 00:41:27
  from "/home/cupabet/public_html/themes/admin/default/modules/users/users/index.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c90097f20d546_61478994',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'beeac425188904d34549ba8c3cacebbd88791b0f' => 
    array (
      0 => '/home/cupabet/public_html/themes/admin/default/modules/users/users/index.tpl',
      1 => 1488691626,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c90097f20d546_61478994 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_modifier_con')) require_once '/home/cupabet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
if (!is_callable('smarty_modifier_price_format')) require_once '/home/cupabet/public_html/TkStarApplication/smarty/plugins/modifier.price_format.php';
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top"><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</h3>
    <div class="md-card  uk-margin-small-top">
        <div class="md-card-content">
            <div class="uk-width-medium-1-2 ">
                <a href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/users/users/edit');
$_prefixVariable1=ob_get_clean();
echo site_url($_prefixVariable1);?>
" class="md-btn md-btn-success">افزودن کاربر</a>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="dataTables_wrapper form-inline dt-uikit md-processed">
                <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                    <thead>
                        <tr>
                            <th>
                                شناسه
                            </th>
                            <th class="sorting">نام</th>
                            <th class="sorting">نام خانوادگی</th>
                            <th class="sorting">ایمیل</th>
                            <th class="sorting">موجودی حساب</th>
                            <th class="no-sort">عملیات</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>شناسه</th>
                            <th>نام</th>
                            <th>نام خانوادگی</th>
                            <th>ایمیل</th>
                            <th class="sorting">موجودی حساب</th>
                            <th class="no-sort">عملیات</th>
                        </tr>
                    </tfoot>
                    <tbody class="uk-table uk-table-striped">
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['Users']->value, 'User');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['User']->value) {
?>
                        <?php if ($_smarty_tpl->tpl_vars['User']->value['id'] == 14) {
continue 1;
}?>
                        <tr>
                            <td class="center"><?php echo $_smarty_tpl->tpl_vars['User']->value->id;?>
</td>
                            <td><?php echo $_smarty_tpl->tpl_vars['User']->value->first_name;?>
</td>
                            <td><?php echo $_smarty_tpl->tpl_vars['User']->value->last_name;?>
</td>
                            <td><?php echo $_smarty_tpl->tpl_vars['User']->value->email;?>
</td>
                            <td>
                                <?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['User']->value->cash);?>

                            </td>
                            <td class="right">
                                <a class="uk-icon-small uk-icon-hover uk-icon-edit uk-text-primary" href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/users/users/edit/',$_smarty_tpl->tpl_vars['User']->value->id);
$_prefixVariable2=ob_get_clean();
echo site_url($_prefixVariable2);?>
" data-uk-tooltip title="ویرایش"></a>

                                <a class="uk-icon-small uk-icon-hover uk-icon-plus-square uk-text-success" href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/users/users/increase/',$_smarty_tpl->tpl_vars['User']->value->id);
$_prefixVariable3=ob_get_clean();
echo site_url($_prefixVariable3);?>
" data-uk-tooltip title="افزایش شارژ"></a>

                                <a class="uk-icon-small uk-icon-hover uk-icon-minus-square uk-text-warning" href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/users/users/decrease/',$_smarty_tpl->tpl_vars['User']->value->id);
$_prefixVariable4=ob_get_clean();
echo site_url($_prefixVariable4);?>
" data-uk-tooltip title="کاهش شارژ"></a>
                                <?php if (!$_smarty_tpl->tpl_vars['User']->value->inRole(SUPER_ADMIN)) {?>
                                    <a href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/users/users/delete/',$_smarty_tpl->tpl_vars['User']->value->id);
$_prefixVariable5=ob_get_clean();
echo site_url($_prefixVariable5);?>
" class="uk-icon-small uk-icon-hover uk-icon-close uk-text-danger delete" data-uk-tooltip title="حذف کاربر" id="delete-btn"></a>
                                <?php }?>

                                <a class=" uk-icon-small uk-icon-hover uk-icon-soccer-ball-o" href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/bets/bets/view/',$_smarty_tpl->tpl_vars['User']->value->id);
$_prefixVariable6=ob_get_clean();
echo site_url($_prefixVariable6);?>
" data-uk-tooltip title="اطلاعات شرط‌ها"></a>

                                <a class=" uk-icon-small uk-icon-hover uk-icon-money" href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/payment/transactions/index/',$_smarty_tpl->tpl_vars['User']->value->id);
$_prefixVariable7=ob_get_clean();
echo site_url($_prefixVariable7);?>
" data-uk-tooltip title="تراکنش‌های مالی"></a>
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
</div><?php }
}
