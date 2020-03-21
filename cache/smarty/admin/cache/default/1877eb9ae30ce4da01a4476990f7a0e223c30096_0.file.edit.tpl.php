<?php
/* Smarty version 3.1.31, created on 2020-03-05 14:58:40
  from "C:\laragon\www\gang4bet\themes\admin\default\modules\content\pages\edit.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e60e26880e8b7_87104792',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '1877eb9ae30ce4da01a4476990f7a0e223c30096' => 
    array (
      0 => 'C:\\laragon\\www\\gang4bet\\themes\\admin\\default\\modules\\content\\pages\\edit.tpl',
      1 => 1580785646,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e60e26880e8b7_87104792 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        <?php echo $_smarty_tpl->tpl_vars['edit_mode']->value ? 'ویرایش صفحه' : 'افزودن صفحه';?>

    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <form method="POST" action="" id="form_validation" class="uk-form-stacked">
                    <div data-uk-grid-margin="" class="uk-grid">
                        <div class="uk-width-medium-2-3">
                            <div class="uk-form-row">
                                <div class="uk-margin-top">
                                    <label>عنوان صفحه  </label>
                                    <input type="text" maxlength="60" id="input_counter" class="<?php if ((NULL != form_error('name'))) {
echo ' md-input-danger ';
}?>input-count md-input title" name="name" value="<?php echo set_value('name',isset($_smarty_tpl->tpl_vars['Page']->value->name) ? $_smarty_tpl->tpl_vars['Page']->value->name : '');?>
" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('name');?>
  
                                </span>

                                <div class="uk-margin-top">
                                    <label>آدرس لینک سئو</label>
                                    <input type="text" maxlength="60" id="input_counter" class="<?php if ((NULL != form_error('slug'))) {
echo ' md-input-danger ';
}?> input-count md-input slug" name="slug" value="<?php echo set_value('slug',isset($_smarty_tpl->tpl_vars['Page']->value->slug) ? $_smarty_tpl->tpl_vars['Page']->value->slug : '');?>
">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('slug');?>
  
                                </span>

                                <div class="uk-margin-top uk-width-medium-1-1">
                                    <h3 class="heading_c">متن خلاصه صفحه</h3>
                                    <textarea type="text" class="ckeditor" name="short_description"><?php echo set_value('short_description',isset($_smarty_tpl->tpl_vars['Page']->value->short_description) ? $_smarty_tpl->tpl_vars['Page']->value->short_description : '');?>
</textarea>                                
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('short_description');?>
  
                                </span>

                                <div class="uk-margin-top uk-width-medium-1-1">
                                    <h3 class="heading_c">متن صفحه</h3>
                                    <textarea type="text" class="ckeditor" name="description"><?php echo set_value('description',isset($_smarty_tpl->tpl_vars['Page']->value->description) ? $_smarty_tpl->tpl_vars['Page']->value->description : '');?>
</textarea>                                
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('description');?>
  
                                </span>
                                <div class="<?php if ((NULL != form_error('compiler'))) {
echo ' md-input-danger ';
}?>md-input-wrapper uk-margin-top">
                                    <label>قالب متن </label>
                                    <select class="data-md-one-selectize" data-md-selectize-bottom="" name="compiler">
                                        <option value="none" <?php if (isset($_smarty_tpl->tpl_vars['Page']->value->compiler) && $_smarty_tpl->tpl_vars['Page']->value->compiler == "none") {?> selected=""<?php }?>>متن ساده</option>
                                        <option value="smarty" <?php if (isset($_smarty_tpl->tpl_vars['Page']->value->compiler) && $_smarty_tpl->tpl_vars['Page']->value->compiler == "smarty") {?> selected=""<?php }?>>موتور قالب اسمارتی</option>
                                     
                                    </select>                               
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('compiler');?>
  
                                </span>


                                <div class="uk-margin-top">
                                    <label>فایل قالب</label>
                                    <input type="text" maxlength="60" id="input_counter" class="input-count md-input<?php if ((NULL != form_error('tpl'))) {
echo ' md-input-danger ';
}?>" name="tpl" value="<?php echo set_value('tpl',isset($_smarty_tpl->tpl_vars['Page']->value->tpl) ? $_smarty_tpl->tpl_vars['Page']->value->tpl : '');?>
">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('tpl');?>
  
                                </span>

                                <div class="uk-margin-top">
                                    <label>وضعیت</label>
                                    <span class="icheck-inline">
                                        <input type="radio" id="status0"     name="status" value="0" data-md-icheck <?php if ((isset($_smarty_tpl->tpl_vars['Page']->value->status) && $_smarty_tpl->tpl_vars['Page']->value->status == 0)) {
echo 'checked';
}?>>
                                        <label for="status0" class="inline-label">غیرفعال</label>
                                    </span>
                                    <span class="icheck-inline">
                                        <input type="radio"  id="status1" name="status" value="1" data-md-icheck <?php if (!(isset($_smarty_tpl->tpl_vars['Page']->value->status) && $_smarty_tpl->tpl_vars['Page']->value->status == 0)) {
echo 'checked';
}?>>
                                        <label for="status1" class="inline-label">فعال</label>
                                    </span>
                                </div>
                                <div class="uk-margin-top">
                                    <label>صفحه اصلی</label>
                                    <span class="icheck-inline">
                                        <input type="radio" id="is_home0" name="is_home" value="0" data-md-icheck <?php if ((isset($_smarty_tpl->tpl_vars['Setting']->value->value) && isset($_smarty_tpl->tpl_vars['Page']->value->id) && $_smarty_tpl->tpl_vars['Setting']->value->value != $_smarty_tpl->tpl_vars['Page']->value->id)) {
echo 'checked';
}?>>
                                        <label for="is_home0" class="inline-label">خیر</label>
                                    </span>
                                    <span class="icheck-inline">
                                        <input type="radio"  id="is_home1"  name="is_home" value="1" data-md-icheck <?php if ((isset($_smarty_tpl->tpl_vars['Setting']->value->value) && isset($_smarty_tpl->tpl_vars['Page']->value->id) && $_smarty_tpl->tpl_vars['Setting']->value->value == $_smarty_tpl->tpl_vars['Page']->value->id)) {
echo 'checked';
}?>>
                                        <label for="is_home1" class="inline-label">بله</label>
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
