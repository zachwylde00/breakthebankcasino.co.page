<?php
/* Smarty version 3.1.31, created on 2020-01-23 04:55:51
  from "/home/gang4bet/public_html/themes/admin/default/modules/menu/index.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e28f61fe9a1e6_05865968',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e83454c6c163f4ee00ed388ab3d78bbe0e530d80' => 
    array (
      0 => '/home/gang4bet/public_html/themes/admin/default/modules/menu/index.tpl',
      1 => 1545497546,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e28f61fe9a1e6_05865968 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_modifier_con')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top"><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</h3>
    <div class="md-card  uk-margin-small-top">
        <div class="md-card-content">
            <div class="uk-width-medium-1-6 uk-margin-small-bottom">
                <a class="md-btn md-btn-success" href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,"/menu/menus/edit");
$_prefixVariable1=ob_get_clean();
echo site_url($_prefixVariable1);?>
">افزودن منو</a>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">عنوان لینک منو</th>
                        <th class="sorting">آدرس لینک</th>
                        <th class="sorting">گروه منو</th>
                        <th class="sorting">منوی والد</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">عنوان لینک منو</th>
                        <th class="sorting">آدرس لینک</th>
                        <th class="sorting">گروه منو</th>
                        <th class="sorting">منوی والد</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['Menus']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
                    <td><?php echo $_smarty_tpl->tpl_vars['val']->value->title;?>
</td>
                    <td><?php echo $_smarty_tpl->tpl_vars['val']->value->target;?>
</td>
                    <td><?php echo $_smarty_tpl->tpl_vars['val']->value->group_name;?>
</td>
                    <td><?php echo $_smarty_tpl->tpl_vars['val']->value->parent_name;?>
</td>
                   
                    <td class="right">
                        <a class="md-btn md-btn-primary md-btn-small" href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/menu/menus/edit/',$_smarty_tpl->tpl_vars['val']->value->id);
$_prefixVariable2=ob_get_clean();
echo site_url($_prefixVariable2);?>
">ویرایش</a>
                        <a href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/menu/menus/delete/',$_smarty_tpl->tpl_vars['val']->value->id);
$_prefixVariable3=ob_get_clean();
echo site_url($_prefixVariable3);?>
" class="md-btn md-btn-small md-btn-danger delete" id="delete-btn">حذف منو</a>
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
