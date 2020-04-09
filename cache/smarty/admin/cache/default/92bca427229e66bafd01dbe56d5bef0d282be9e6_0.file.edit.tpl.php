<?php
/* Smarty version 3.1.31, created on 2020-01-23 12:01:44
  from "/home/gang4bet/public_html/themes/admin/default/modules/menu/menu-groups/edit.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e2959f0a39404_17022311',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '92bca427229e66bafd01dbe56d5bef0d282be9e6' => 
    array (
      0 => '/home/gang4bet/public_html/themes/admin/default/modules/menu/menu-groups/edit.tpl',
      1 => 1485234196,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e2959f0a39404_17022311 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        <?php echo $_smarty_tpl->tpl_vars['edit_mode']->value ? 'ویرایش گروه منو ' : 'افزودن گروه منو ';?>

    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <form method="POST" action="" id="form_validation" class="uk-form-stacked">
                    <div data-uk-grid-margin="" class="uk-grid">
                        <div class="uk-width-medium-2-3">
                            <div class="uk-form-row">
                                <div class=" uk-margin-top">
                                    <label>عنوان گروه منو </label>
                                    <input type="text" maxlength="60" id="input_counter" class="<?php if ((NULL != form_error('name'))) {
echo ' md-input-danger ';
}?>input-count md-input" name="name" value="<?php echo set_value('name',isset($_smarty_tpl->tpl_vars['Menu_group']->value->name) ? $_smarty_tpl->tpl_vars['Menu_group']->value->name : '');?>
" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('name');?>
  
                                </span>

                                <div class="uk-margin-top">
                                    <label>کدلاتین (فاصله مجاز نیست)</label>
                                    <input type="text" maxlength="60" id="input_counter" class="input-count md-input<?php if ((NULL != form_error('code'))) {
echo ' md-input-danger ';
}?>" name="code" value="<?php echo set_value('code',isset($_smarty_tpl->tpl_vars['Menu_group']->value->code) ? $_smarty_tpl->tpl_vars['Menu_group']->value->code : '');?>
">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('code');?>
  
                                </span>

                                <div class=" uk-margin-top">
                                    <label>برای ادمین</label>
                                    <span class="icheck-inline">
                                        <input type="radio" id="status0" name="is_admin" value="0" data-md-icheck <?php if ((isset($_smarty_tpl->tpl_vars['Menu_group']->value->is_admin) && $_smarty_tpl->tpl_vars['Menu_group']->value->is_admin == 0)) {
echo 'checked';
}?>>
                                        <label for="status0" class="inline-label">خیر</label>
                                    </span>
                                    <span class="icheck-inline">
                                        <input type="radio"  id="status1" name="is_admin" value="1" data-md-icheck <?php if (!(isset($_smarty_tpl->tpl_vars['Menu_gourp']->value->is_admin) && $_smarty_tpl->tpl_vars['Menu_group']->value->is_admin == 1)) {
echo 'checked';
}?>>
                                        <label for="status1" class="inline-label">بلی</label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-1-4">
                        <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>ذخیره</span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div><?php }
}
