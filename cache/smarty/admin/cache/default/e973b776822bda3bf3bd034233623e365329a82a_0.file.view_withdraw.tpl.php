<?php
/* Smarty version 3.1.31, created on 2018-12-23 15:13:21
  from "/home/richbet/public_html/themes/admin/default/modules/users/users/view_withdraw.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c1f74d95d5dc2_03701761',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e973b776822bda3bf3bd034233623e365329a82a' => 
    array (
      0 => '/home/richbet/public_html/themes/admin/default/modules/users/users/view_withdraw.tpl',
      1 => 1544371565,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c1f74d95d5dc2_03701761 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
if (!is_callable('smarty_modifier_con')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
if (!is_callable('smarty_function_jdate')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/function.jdate.php';
if (!is_callable('smarty_modifier_price_format')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/modifier.price_format.php';
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        <?php echo $_smarty_tpl->tpl_vars['title']->value;?>

    </h3>
    <div class="uk-width-medium-2-3 uk-margin-top uk-margin-bottom">
        <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/users/users/withdraw');?>
" class="uk-button btn-breadcrumb">بازگشت</a>
        <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/users/users/withdraw-status/',$_smarty_tpl->tpl_vars['Row']->value['id']);?>
" class="uk-button btn-<?php if ($_smarty_tpl->tpl_vars['Row']->value['status'] == 1) {?>danger<?php } else { ?>success<?php }?>">ثبت بعنوان <?php echo $_smarty_tpl->tpl_vars['status_label']->value;?>
</a>
        <?php if ($_smarty_tpl->tpl_vars['Row']->value['status'] == 0) {?>
            <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/users/users/withdraw-status-q/',$_smarty_tpl->tpl_vars['Row']->value['id']);?>
" class="uk-button btn-primary">در صف پرداخت </a>
        <?php }?>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-overflow-container">
                <div class="uk-width-medium-1-1 uk-margin-top">
                    <p class="">
                        تاریخ ثبت
                        <label class="uk-text-primary"> <?php echo smarty_function_jdate(array('form'=>'h:i a j F Y','date'=>$_smarty_tpl->tpl_vars['Row']->value['created_at']),$_smarty_tpl);?>
</label>
                    <hr>
                    <p>

                    <h3>
                        <i class="uk-icon-chevron-left uk-icon-small .uk-icon-justify uk-text-success"></i> اطلاعات درخواست:
                    </h3>
                    <table class="uk-table uk-table-hover">
                        <tbody>
                            <tr>
                                <td>مبلغ درخواستی‌</td>
                                <td><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['Row']->value['amount']);?>
</td>
                            </tr>
                            <tr>
                                <td>نام کاربر</td>
                                <td><?php echo $_smarty_tpl->tpl_vars['Row']->value['account_holder'];?>
</td>
                            </tr>
                            <tr>
                                <td>شماره کارت</td>
                                <td style="direction: ltr;"><?php echo substr($_smarty_tpl->tpl_vars['Row']->value['card_no'],0,4);?>
 - <?php echo substr($_smarty_tpl->tpl_vars['Row']->value['card_no'],4,4);?>
 - <?php echo substr($_smarty_tpl->tpl_vars['Row']->value['card_no'],8,4);?>
 - <?php echo substr($_smarty_tpl->tpl_vars['Row']->value['card_no'],12,4);?>
</td>
                            </tr>
                            <tr>
                                <td>شماره شبا</td>
                                <td><?php echo $_smarty_tpl->tpl_vars['Row']->value['sheba'];?>
</td>
                            </tr>
                            <tr>
                                <td>نام صاحب حساب</td>
                                <td><?php echo $_smarty_tpl->tpl_vars['Row']->value['account_holder'];?>
</td>
                            </tr>
                        </tbody>
                    </table>

                    <hr>
                </div>
            </div>
        </div>
    </div>
</div><?php }
}
