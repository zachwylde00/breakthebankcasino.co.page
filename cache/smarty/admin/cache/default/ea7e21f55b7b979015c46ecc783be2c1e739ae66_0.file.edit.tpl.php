<?php
/* Smarty version 3.1.31, created on 2018-12-20 23:19:29
  from "/home/richbet/public_html/themes/admin/default/modules/users/users/edit.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c1bf249136dc9_35080910',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'ea7e21f55b7b979015c46ecc783be2c1e739ae66' => 
    array (
      0 => '/home/richbet/public_html/themes/admin/default/modules/users/users/edit.tpl',
      1 => 1485149596,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c1bf249136dc9_35080910 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        <?php echo $_smarty_tpl->tpl_vars['edit_mode']->value ? 'ویرایش کاربر' : 'افزودن کاربر';?>

    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <?php echo form_open(null,'id="user_edit_form"');?>

                <div data-uk-grid-margin="" class="uk-grid">
                    <div class="uk-width-medium-1-1">
                        <div class="md-card" data-uk-grid-margin>
                            <div class="md-card-content">
                                <?php if ($_smarty_tpl->tpl_vars['edit_mode']->value) {?>
                                    
                                        <ul class="uk-tab" data-uk-tab="{connect:'#tabs_anim5', animation:'slide-right'}">
                                            <li class="uk-active"><a href="#">ویرایش کاربر</a></li>
                                            <li><a href="#">تغییر رمز عبور</a></li>
                                            <li><a href="#">تعیین سطح دسترسی ها</a></li>
                                        </ul>
                                    
                                <?php } else { ?>
                                    
                                        <ul class="uk-tab" data-uk-tab="{connect:'#tabs_anim5', animation:'slide-right'}">
                                        
                                        <li class="uk-active"><a href="#">افزودن کاربر</a></li>
                                            <?php if ($_smarty_tpl->tpl_vars['is_admin']->value) {?>
                                            <li class="uk-active"><a href="#">تعیین سطح دسترسی ها</a></li>
                                            <?php }?>
                                    </ul>
                                <?php }?>
                                <ul id="tabs_anim5" class="uk-switcher uk-margin">
                                    <li>
                                        <div class="uk-width-medium-1-2 uk-float-right uk-margin-top">

                                            <div class="uk-width-medium-5-6 uk-margin-large-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label" for="first_name">نام</label>
                                                    <input type="text" maxlength="60" id="first_name" class="md-input<?php if ((NULL != form_error('first_name'))) {
echo ' md-input-danger ';
}?>" name="first_name" value="<?php echo set_value('first_name',isset($_smarty_tpl->tpl_vars['User']->value->first_name) ? $_smarty_tpl->tpl_vars['User']->value->first_name : '');?>
">
                                                </div>
                                                <span class="error_page_content">
                                                    <?php echo form_error('first_name');?>
  
                                                </span>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-large-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label" for="last_name">نام خانوادگی</label>
                                                    <input type="text" maxlength="60" id="last_name" class="md-input<?php if ((NULL != form_error('last_name'))) {
echo ' md-input-danger ';
}?>" name="last_name" value="<?php echo set_value('last_name',isset($_smarty_tpl->tpl_vars['User']->value->last_name) ? $_smarty_tpl->tpl_vars['User']->value->last_name : '');?>
">
                                                </div>
                                                <span class="error_page_content">
                                                    <?php echo form_error('last_name');?>
  
                                                </span>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-large-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label" for="username">نام کاربری</label>
                                                    <input type="text" maxlength="60" id="username" class="md-input<?php if ((NULL != form_error('username'))) {
echo ' md-input-danger ';
}?>" name="username" value="<?php echo set_value('username',isset($_smarty_tpl->tpl_vars['User']->value->username) ? $_smarty_tpl->tpl_vars['User']->value->username : '');?>
">
                                                </div>
                                                <span class="error_page_content">
                                                    <?php echo form_error('username');?>
  
                                                </span>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-large-bottom">
                                                <div class="uk-form-row">
                                                    <label>وضعیت: </label>


                                                    <span class="icheck-inline">
                                                        <input type="radio" id="status0" name="status" value="0" data-md-icheck <?php if ((isset($_smarty_tpl->tpl_vars['is_activated']->value) && $_smarty_tpl->tpl_vars['is_activated']->value == 0)) {
echo 'checked';
}?>>
                                                        <label for="status0" class="inline-label">غیرفعال</label>
                                                    </span>
                                                    <span class="icheck-inline">
                                                        <input type="radio"  id="status1" name="status" value="1" data-md-icheck <?php if ((isset($_smarty_tpl->tpl_vars['is_activated']->value) && $_smarty_tpl->tpl_vars['is_activated']->value == 1)) {
echo 'checked';
}?>>
                                                        <label for="status1" class="inline-label">فعال</label>
                                                    </span>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="uk-width-medium-1-2 uk-float-left uk-margin-top">
                                            <?php if ($_smarty_tpl->tpl_vars['is_admin']->value) {?>
                                                <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                    <div class="uk-form-row">
                                                        <div class="uk-width-medium-2-5">
                                                            <label class="uk-form-label" for="roles"> گروه کاربری</label>
                                                            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['Roles']->value, 'role');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['role']->value) {
?>
                                                                <p>
                                                                    <input type="checkbox" name="role_id[]" id="role_id<?php echo $_smarty_tpl->tpl_vars['role']->value['id'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['role']->value->id;?>
" data-md-icheck <?php if (isset($_smarty_tpl->tpl_vars['User']->value) && ($_smarty_tpl->tpl_vars['User']->value->getRoles()->contains($_smarty_tpl->tpl_vars['role']->value['id']))) {
echo 'checked';
}?> />
                                                                    <label for="role_id<?php echo $_smarty_tpl->tpl_vars['role']->value['id'];?>
" class="inline-label"><?php echo $_smarty_tpl->tpl_vars['role']->value->name;?>
</label>
                                                                </p>
                                                            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                                        </div>
                                                    </div>
                                                </div>
                                            <?php }?>
                                            <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label">ایمیل</label>
                                                    <input type="text" maxlength="60" id="email" class=" md-input" name="email" value="<?php echo set_value('email',isset($_smarty_tpl->tpl_vars['User']->value->email) ? $_smarty_tpl->tpl_vars['User']->value->email : '');?>
">
                                                </div>
                                                <span class="error_page_content">
                                                    <?php echo form_error('email');?>
  
                                                </span>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-small-top">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label">شماره موبایل</label>
                                                    <input type="text" maxlength="60" id="mobile" class=" md-input" name="mobile" value="<?php echo set_value('mobile',isset($_smarty_tpl->tpl_vars['User']->value->mobile) ? $_smarty_tpl->tpl_vars['User']->value->mobile : '');?>
">
                                                </div>
                                                <span class="error_page_content">
                                                    <?php echo form_error('mobile');?>
  
                                                </span>
                                            </div>
                                            <?php if ((!$_smarty_tpl->tpl_vars['edit_mode']->value)) {?>
                                                <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                    <div class="uk-form-row">
                                                        <label class="uk-form-label">رمز عبور</label>
                                                        <input type="password" maxlength="60" id="password" class="input-count md-input" name="password">
                                                    </div>
                                                    <span class="error_page_content">
                                                        <?php echo form_error('password');?>
  
                                                    </span>
                                                </div>
                                                <div class="uk-width-medium-5-6 ">
                                                    <div class="uk-form-row">
                                                        <label class="uk-form-label">تکرار رمز عبور</label>
                                                        <input type="password" maxlength="60" id="confirm_password" class=" md-input" name="confirm_password">
                                                    </div>
                                                    <span class="error_page_content">
                                                        <?php echo form_error('confirm_password');?>
  
                                                    </span>
                                                </div>
                                            <?php }?>
                                        </div>
                                    </li>
                                    <?php if (($_smarty_tpl->tpl_vars['edit_mode']->value)) {?>
                                        <li>

                                            <div class="uk-width-medium-1-2">
                                                <div class="uk-form-row">
                                                    <div class="uk-margin-top">
                                                        <label>رمز عبور</label>
                                                        <input type="password" maxlength="60" id="password" class="md-input" name="password">
                                                        <div id="input_counter_counter" class="text-count-wrapper">
                                                        </div><span class="md-input-bar"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="uk-width-medium-1-2">
                                                <div class="uk-form-row">
                                                    <div class="uk-margin-top">
                                                        <label>تایید رمز عبور</label>
                                                        <input type="password" maxlength="60" id="confirm_password" class="input-count md-input" name="confirm_password">
                                                        <div id="input_counter_counter" class="text-count-wrapper">
                                                        </div><span class="md-input-bar"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    <?php }?>
                                    <li>
                                        <div class="uk-width-medium-3-5  uk-margin-top">
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

                                                                <input type="checkbox" name="user_permissions[]" value="<?php echo $_smarty_tpl->tpl_vars['singlePermission']->value['permission'];?>
" <?php if (isset($_smarty_tpl->tpl_vars['User']->value) && ($_smarty_tpl->tpl_vars['User']->value->hasAccess(array($_smarty_tpl->tpl_vars['singlePermission']->value['permission'])) || $_smarty_tpl->tpl_vars['User']->value->getRoles()->contains(1))) {
echo 'checked';
}?>  id="user-<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" data-md-icheck />
                                                                <label for="user-<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
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
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-1-1">
                        <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>ذخیره</span></button>
                    </div>
                </div>
                <?php echo form_close();?>

            </div>
        </div>
    </div>
</div><?php }
}
