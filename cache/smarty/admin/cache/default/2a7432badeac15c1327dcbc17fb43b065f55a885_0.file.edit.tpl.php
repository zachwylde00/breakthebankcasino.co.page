<?php
/* Smarty version 3.1.31, created on 2018-12-18 16:42:54
  from "/home/richbet/public_html/themes/admin/default/modules/users/roles/edit.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c18f256281db1_00403936',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '2a7432badeac15c1327dcbc17fb43b065f55a885' => 
    array (
      0 => '/home/richbet/public_html/themes/admin/default/modules/users/roles/edit.tpl',
      1 => 1485149596,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c18f256281db1_00403936 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        <?php echo $_smarty_tpl->tpl_vars['edit_mode']->value ? 'ویرایش گروه' : 'افزودن گروه';?>

    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            
                <ul class="uk-tab" data-uk-tab="{connect:'#tabs_anim5', animation:'slide-right'}">
                
                <li class="uk-active"><a href="#">ثبت اطلاعات</a></li>
                <li><a href="#">تعیین سطح دسترسی ها</a></li>
            </ul>
            <?php echo form_open(null);?>

            <ul id="tabs_anim5" class="uk-switcher uk-margin">
                <li>
                    <div class="uk-width-1-1 ">
                        <div data-uk-grid-margin="" class="uk-grid">
                            <div class="uk-width-medium-1-2">
                                <div class="uk-form-row">
                                    <div class=" uk-margin-top">
                                        <label>نام گروه کاربری</label>
                                        <input type="text" maxlength="60" id="input_counter" class="input-count md-input" name="name" value="<?php echo set_value('name',isset($_smarty_tpl->tpl_vars['Role']->value->name) ? $_smarty_tpl->tpl_vars['Role']->value->name : '');?>
">
                                        <div id="input_counter_counter" class="text-count-wrapper">
                                        </div><span class="md-input-bar"></span>
                                    </div>
                                    <div class=" uk-margin-top">
                                        <label>نام لاتین</label>
                                        <input type="text" maxlength="60" id="input_counter" class="input-count md-input" name="slug" value="<?php echo set_value('slug',isset($_smarty_tpl->tpl_vars['Role']->value->slug) ? $_smarty_tpl->tpl_vars['Role']->value->slug : '');?>
">
                                        <div id="input_counter_counter" class="text-count-wrapper">
                                        </div><span class="md-input-bar"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>

                    <div class="uk-width-medium-3-5">
                        <h3 class="heading_a uk-margin-bottom">ماژول ها</h3>
                        <div class="uk-accordion" data-uk-accordion="{ collapse: false }">
                            <?php $_smarty_tpl->_assignInScope('i', "0");
?>
                            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['Permissions']->value, 'perms', false, 'moduleName');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['moduleName']->value => $_smarty_tpl->tpl_vars['perms']->value) {
?>
                                <h3 class="uk-accordion-title uk-accordion-title-primary"><?php echo $_smarty_tpl->tpl_vars['moduleName']->value;?>
</h3>
                                <div class="uk-accordion-content">
                                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['perms']->value, 'singlePermission');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['singlePermission']->value) {
?>
                                        <p>

                                            <input type="checkbox" name="role_permissions[]" value="<?php echo $_smarty_tpl->tpl_vars['singlePermission']->value['permission'];?>
" <?php if (isset($_smarty_tpl->tpl_vars['Role']->value) && ($_smarty_tpl->tpl_vars['Role']->value->hasAccess(array($_smarty_tpl->tpl_vars['singlePermission']->value['permission'])))) {
echo 'checked';
}?>  id="role-<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" data-md-icheck />
                                            <label for="role-<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" class="inline-label"><?php echo $_smarty_tpl->tpl_vars['singlePermission']->value['label'];?>
</label>
                                        </p>
                                        <?php $_smarty_tpl->_assignInScope('i', $_smarty_tpl->tpl_vars['i']->value+1);
?>
                                    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                </div>
                            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                        </div>
                    </div>
                </li>

            </ul>
            <div class="uk-width-medium-1-4">
                <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>ذخیره</span></button>
            </div>
            <?php echo form_close();?>

        </div>
    </div>
</div><?php }
}
