<?php
/* Smarty version 3.1.31, created on 2018-11-17 20:22:00
  from "/home/richbet/domains/richbet.xyz/public_html/themes/admin/default/modules/users/users/increase.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bf0473031b9c3_26369553',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'dd5fd1e4a5ba9cf2b7c6b75d2b7f16d3ede08048' => 
    array (
      0 => '/home/richbet/domains/richbet.xyz/public_html/themes/admin/default/modules/users/users/increase.tpl',
      1 => 1488678102,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5bf0473031b9c3_26369553 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        <?php echo $_smarty_tpl->tpl_vars['title']->value;?>

    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <?php echo form_open(null);?>

            <div class="uk-width-1-1 ">
                <div data-uk-grid-margin="" class="uk-grid">
                    <div class="uk-width-medium-1-2">
                        <div class="uk-form-row">
                            <div class=" uk-margin-top">
                                <label>مبلغ</label>
                                <input type="text" maxlength="60" id="input_counter" class="input-count md-input" name="amount">
                                <div id="input_counter_counter" class="text-count-wrapper">
                                </div><span class="md-input-bar"></span>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-1-2">
                        <div class="uk-form-row">
                            <div class=" uk-margin-top">
                                <label>شرح تراکنش</label>
                                <input type="text" class="input-count md-input" name="desc">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="uk-width-medium-1-4">
                <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>ذخیره</span></button>
            </div>
            <?php echo form_close();?>

        </div>
    </div>
</div><?php }
}
