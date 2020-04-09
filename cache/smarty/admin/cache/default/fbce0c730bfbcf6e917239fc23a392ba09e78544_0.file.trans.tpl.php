<?php
/* Smarty version 3.1.31, created on 2019-03-18 23:58:23
  from "/home/cupabet/public_html/themes/admin/default/modules/settings/trans.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c8fff67428bd0_96937740',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'fbce0c730bfbcf6e917239fc23a392ba09e78544' => 
    array (
      0 => '/home/cupabet/public_html/themes/admin/default/modules/settings/trans.tpl',
      1 => 1485162196,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c8fff67428bd0_96937740 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        <?php echo 'تنظیمات سیستم';?>

    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <form method="POST" action="" id="form_validation" class="uk-form-stacked">
                    <div data-uk-grid-margin="" class="uk-grid">
                        <div class="uk-width-medium-2-3">
                            <div class="uk-form-row">
                                <div class="  uk-margin-top">
                                    <label>نام انگلیسی تیم </label>
                                    <input type="text" maxlength="60" id="input_counter" class="<?php if ((NULL != form_error('site_name'))) {
echo ' md-input-danger ';
}?>input-count md-input" name="en" value="<?php echo set_value('site_name',isset($_smarty_tpl->tpl_vars['site_name']->value) ? $_smarty_tpl->tpl_vars['site_name']->value : '');?>
" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('site_name');?>
  
                                </span>
                                <div class="  uk-margin-top">
                                    <label>نام فارسی تیم</label>
                                    <input type="text" id="input_counter" class="<?php if ((NULL != form_error('footer'))) {
echo ' md-input-danger ';
}?>input-count md-input" name="fa" value="<?php echo set_value('fa',isset($_smarty_tpl->tpl_vars['footer']->value) ? $_smarty_tpl->tpl_vars['footer']->value : '');?>
" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('footer');?>
  
                                </span>

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

</div> <?php }
}
