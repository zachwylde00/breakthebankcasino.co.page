<?php
/* Smarty version 3.1.31, created on 2018-12-21 20:48:59
  from "/home/richbet/public_html/themes/admin/default/modules/menu/edit.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c1d2083bc86a0_86319696',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '3e93122cea07e3af74b798862b1aaf25ce967142' => 
    array (
      0 => '/home/richbet/public_html/themes/admin/default/modules/menu/edit.tpl',
      1 => 1485149596,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c1d2083bc86a0_86319696 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_modifier_con')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        <?php echo $_smarty_tpl->tpl_vars['edit_mode']->value ? 'ویرایش منو ' : 'افزودن منو ';?>

    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <form method="POST" action="" id="form_validation" class="uk-form-stacked">
                    <div data-uk-grid-margin="" class="uk-grid">
                        <div class="uk-width-medium-2-3">
                            <div class="uk-form-row">
                                <div class=" uk-margin-top">
                                    <label>عنوان منو <span class="text-danger"> *</span></label>
                                    <input type="text" maxlength="60" id="input_counter" class="<?php if ((NULL != form_error('title'))) {
echo ' md-input-danger ';
}?>input-count md-input" name="title" value="<?php echo set_value('title',isset($_smarty_tpl->tpl_vars['Menu']->value->title) ? $_smarty_tpl->tpl_vars['Menu']->value->title : '');?>
" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('title');?>
  
                                </span>

                                <div class="uk-margin-top">
                                    <label>آدرس لینک<span class="text-danger"> *</span></label>
                                    <input type="text" maxlength="60" id="input_counter" class="input-count md-input<?php if ((NULL != form_error('target'))) {
echo ' md-input-danger ';
}?>" name="target" value="<?php echo set_value('target',isset($_smarty_tpl->tpl_vars['Menu']->value->target) ? $_smarty_tpl->tpl_vars['Menu']->value->target : '');?>
">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('target');?>
  
                                </span>


                                <div class="uk-margin-top">
                                    <label>گروه منو<span class="text-danger"> *</span></label>
                                    <div class="uk-width-medium-1-1" data-uk-grid-margin="">
                                        <select class="data-md-one-selectize" data-md-selectize-bottom="" name="group_id">
                                            <option value="">انتخاب گروه منو</option>
                                            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['Menu_group']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
                                                <option value="<?php echo $_smarty_tpl->tpl_vars['val']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['val']->value['name'];?>
</option>
                                            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                        </select>         
                                    </div>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('group_id');?>
  
                                </span>
                                <div class="uk-margin-top">
                                    <label>منوی والد<span class="text-danger"> *</span></label>
                                    <div class="uk-width-medium-1-1" data-uk-grid-margin="">
                                        <select class="data-md-one-selectize" data-md-selectize-bottom="" name="parent_id">
                                            <option value="">انتخاب والد</option>
                                            <option value="0">منوی اصلی</option>
                                            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['Menus']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
                                                <option value="<?php echo $_smarty_tpl->tpl_vars['val']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['val']->value['title'];?>
</option>
                                            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                        </select>         
                                    </div>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('group_id');?>
  
                                </span>


                                <div class=" uk-margin-top">
                                    <label>وزن(جهت ترتیب لینک ها، عدد کوچکتر = اولویت بیشتر)</label>
                                    <input type="text" class="input-count md-input<?php if ((NULL != form_error('weight'))) {
echo ' md-input-danger ';
}?>" name="weight" value="<?php echo set_value('weight',isset($_smarty_tpl->tpl_vars['Menu']->value->weight) ? $_smarty_tpl->tpl_vars['Menu']->value->weight : '');?>
">

                                </div><span class="md-input-bar"></span>
                                <span class="error_page_content">
                                    <?php echo form_error('weight');?>
  
                                </span>
                                <div class=" uk-margin-top">
                                    <label>کلاس برای آیکون</label>
                                    <input type="text" maxlength="60" id="input_counter" class="input-count md-input<?php if ((NULL != form_error('icon'))) {
echo ' md-input-danger ';
}?>" name="icon" value="<?php echo set_value('icon',isset($_smarty_tpl->tpl_vars['Menu']->value->icon) ? $_smarty_tpl->tpl_vars['Menu']->value->icon : '');?>
">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('icon');?>
  
                                </span>
                                <div class=" uk-margin-top">
                                    <label>وضعیت<span class="text-danger"> *</span></label>
                                    <span class="icheck-inline">
                                        <input type="radio" id="status0" name="status" value="0" data-md-icheck <?php if ((isset($_smarty_tpl->tpl_vars['Menu']->value->status) && $_smarty_tpl->tpl_vars['Menu']->value->status == 0)) {
echo 'checked';
}?>>
                                        <label for="status0" class="inline-label">غیرفعال</label>
                                    </span>
                                    <span class="icheck-inline">
                                        <input type="radio"  id="status1" name="status" value="1" data-md-icheck <?php if (!(isset($_smarty_tpl->tpl_vars['Menu']->value->status) && $_smarty_tpl->tpl_vars['Menu']->value->status == 0)) {
echo 'checked';
}?>>
                                        <label for="status1" class="inline-label">فعال</label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-1-4">
                        <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>ذخیره</span></button>
                        <a  href="<?php echo smarty_modifier_con(site_url(),ADMIN_PATH);?>
" class="md-btn md-btn-flat md-btn-danger btn-list"><span>انصراف</span></a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div><?php }
}
