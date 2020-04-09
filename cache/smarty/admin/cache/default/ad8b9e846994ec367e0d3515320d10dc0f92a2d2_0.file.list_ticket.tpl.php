<?php
/* Smarty version 3.1.31, created on 2018-12-25 00:51:01
  from "/home/richbet/public_html/themes/admin/default/modules/contacts/list_ticket.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c214dbda11855_88751021',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'ad8b9e846994ec367e0d3515320d10dc0f92a2d2' => 
    array (
      0 => '/home/richbet/public_html/themes/admin/default/modules/contacts/list_ticket.tpl',
      1 => 1485149596,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c214dbda11855_88751021 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_modifier_con')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
if (!is_callable('smarty_function_jdate')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/function.jdate.php';
?>

<div id="page_content_inner">
    <h3 class="heading_a title-top">تیکت ها</h3>
    <div class="md-card  uk-margin-small-top">
        <div class="md-card-content">
            <div class="uk-width-medium-1-6 uk-margin-small-bottom">
                <a class="md-btn md-btn-success" href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,"/contacts/tickets");
$_prefixVariable1=ob_get_clean();
echo site_url($_prefixVariable1);?>
">ارسال تیکت جدید</a>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">موضوع پیام</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="sorting">وضعیت پیام</th>
                        <th class="sorting">فرستنده</th>
                        <th class="sorting">گیرنده</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">موضوع پیام</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="sorting">وضعیت پیام</th>
                        <th class="sorting">فرستنده</th>
                        <th class="sorting">گیرنده</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['Contacts']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
                        <tr>
                            <td><?php echo $_smarty_tpl->tpl_vars['val']->value->subject;?>
</td>
                            <td><?php echo smarty_function_jdate(array('format'=>'j F Y - H:i','date'=>$_smarty_tpl->tpl_vars['val']->value->created_at),$_smarty_tpl);?>
</td>
                            <td><label class="text-<?php if ($_smarty_tpl->tpl_vars['val']->value['status']) {?>success<?php } else { ?>danger<?php }?>">
                                    <?php if ($_smarty_tpl->tpl_vars['val']->value['status']) {
echo 'خوانده شده در ';
echo smarty_function_jdate(array('format'=>'j F Y - H:i','date'=>$_smarty_tpl->tpl_vars['val']->value->seen_datetime),$_smarty_tpl);?>
 <?php } else {
echo 'خوانده نشده';?>
 <?php }?>
                                </label>
                            </td>
                            <td><?php echo $_smarty_tpl->tpl_vars['val']->value['user']['first_name'];?>
 <?php echo $_smarty_tpl->tpl_vars['val']->value['user']['last_name'];?>
</td>
                            <td><?php echo $_smarty_tpl->tpl_vars['val']->value['r_user']['first_name'];?>
 <?php echo $_smarty_tpl->tpl_vars['val']->value['r_user']['last_name'];?>
</td>
                            <td class="right">
                                <a href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/contacts/tickets/view-ticket/',$_smarty_tpl->tpl_vars['val']->value['id']);
$_prefixVariable2=ob_get_clean();
echo site_url($_prefixVariable2);?>
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
