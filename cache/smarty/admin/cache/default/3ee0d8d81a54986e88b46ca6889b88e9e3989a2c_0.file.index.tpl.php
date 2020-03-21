<?php
/* Smarty version 3.1.31, created on 2019-03-19 00:41:46
  from "/home/cupabet/public_html/themes/admin/default/modules/users/roles/index.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c900992c8f917_28612038',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '3ee0d8d81a54986e88b46ca6889b88e9e3989a2c' => 
    array (
      0 => '/home/cupabet/public_html/themes/admin/default/modules/users/roles/index.tpl',
      1 => 1485162196,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c900992c8f917_28612038 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_modifier_con')) require_once '/home/cupabet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top"><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</h3>
    <div class="md-card  uk-margin-small-top">
        <div class="md-card-content">
            <div class="uk-width-medium-1-6 uk-margin-small-bottom">
                <a class="md-btn md-btn-success" href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,"/users/roles/edit");
$_prefixVariable1=ob_get_clean();
echo site_url($_prefixVariable1);?>
">افزودن گروه</a>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th>شناسه</th>
                        <th class="sorting">نام</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>شناسه</th>
                        <th>نام</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['Roles']->value, 'Role');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['Role']->value) {
?>
                        <tr>
                            <td>
                               <?php echo $_smarty_tpl->tpl_vars['Role']->value['id'];?>

                            </td>
                            <td><?php echo $_smarty_tpl->tpl_vars['Role']->value->name;?>
</td>
                            <td class="right">
                                <?php if ($_smarty_tpl->tpl_vars['Role']->value['slug'] != 'superadmin') {?>
                                    <a class="md-btn md-btn-primary md-btn-small" href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/users/roles/edit/',$_smarty_tpl->tpl_vars['Role']->value->id);
$_prefixVariable2=ob_get_clean();
echo site_url($_prefixVariable2);?>
">ویرایش</a>
                                    <a href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/users/roles/delete/',$_smarty_tpl->tpl_vars['Role']->value->id);
$_prefixVariable3=ob_get_clean();
echo site_url($_prefixVariable3);?>
" class="md-btn md-btn-small md-btn-danger delete" id="delete-btn">حذف نقش کاربری</a>
                                <?php }?>
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
