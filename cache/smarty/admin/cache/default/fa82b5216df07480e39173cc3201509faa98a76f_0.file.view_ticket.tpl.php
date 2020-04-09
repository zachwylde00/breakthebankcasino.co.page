<?php
/* Smarty version 3.1.31, created on 2020-03-05 14:58:58
  from "C:\laragon\www\gang4bet\themes\admin\default\modules\contacts\view_ticket.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e60e27adeea68_06838836',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'fa82b5216df07480e39173cc3201509faa98a76f' => 
    array (
      0 => 'C:\\laragon\\www\\gang4bet\\themes\\admin\\default\\modules\\contacts\\view_ticket.tpl',
      1 => 1580785646,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e60e27adeea68_06838836 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\function.site_url.php';
if (!is_callable('smarty_modifier_con')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\modifier.con.php';
if (!is_callable('smarty_function_assets_url')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\function.assets_url.php';
?>
<div id="page_content_inner" style="padding-bottom: 0!important; ">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        <?php echo $_smarty_tpl->tpl_vars['title']->value;?>
 - <?php echo $_smarty_tpl->tpl_vars['Contact']->value['subject'];?>

    </h3>
    <div class="uk-width-medium-2-3 uk-margin-top uk-margin-bottom">
        <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/contacts/tickets/ticket-list/');?>
" class="uk-button btn-breadcrumb">بازگشت</a>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-overflow-container">
                <div class="uk-width-medium-1-1 uk-margin-top">
                    <p class="text-danger uk-text-italic">
                        ارسال کننده: 
                        <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/bets/bets/view/',$_smarty_tpl->tpl_vars['Contact']->value['user']['id']);?>
"><?php echo $_smarty_tpl->tpl_vars['Contact']->value['user']['first_name'];?>
 <?php echo $_smarty_tpl->tpl_vars['Contact']->value['user']['last_name'];?>
</a>
                    </p>
                    <p><?php echo $_smarty_tpl->tpl_vars['Contact']->value['content'];?>
</p>
                    <?php if ($_smarty_tpl->tpl_vars['Contact']->value['status'] == 0) {?>
                        <img src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/img/seen.jpg" class="seen_loader_ticket" id="saeednavaro" />
                        <input type="hidden" value="<?php echo $_smarty_tpl->tpl_vars['Contact']->value['id'];?>
" id="ticket_id"/>
                    <?php }?>
                </div>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-overflow-container">
                <div class="uk-width-medium-1-1 uk-margin-top">
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['Contact']->value['replies'], 'reply', false, 'key');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['key']->value => $_smarty_tpl->tpl_vars['reply']->value) {
?>
                        <?php echo $_smarty_tpl->tpl_vars['key']->value+1;?>
)
                        <label class="uk-text-primary"><?php echo $_smarty_tpl->tpl_vars['reply']->value['user']['first_name'];?>
 <?php echo $_smarty_tpl->tpl_vars['reply']->value['user']['last_name'];?>
</label>
                        <p><?php echo $_smarty_tpl->tpl_vars['reply']->value['content'];?>
</p>
                        <hr>
                    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                </div>
            </div>
        </div>
    </div>
</div>
<?php if ($_smarty_tpl->tpl_vars['logged_in_user_id']->value != $_smarty_tpl->tpl_vars['Contact']->value['from']) {?>
    <div id="page_content_inner">
        <h3 class="heading_a title-top uk-margin-small-bottom">
            ارسال پاسخ
        </h3>
        <div class="md-card uk-margin-medium-bottom">
            <div class="md-card-content">
                <div class="uk-width-1-1 ">
                    <form method="POST" action="<?php echo $_smarty_tpl->tpl_vars['action']->value;?>
" id="form_validation" class="uk-form-stacked" enctype="multipart/form-data">
                        <div data-uk-grid-margin="" class="uk-grid">
                            <div class="uk-width-medium-2-3">
                                <div class="uk-form-row">
                                    <div class="uk-margin-top">
                                        <label>عنوان پیام  <span class="text-danger"> *</span></label>
                                        <input type="text" maxlength="150" id="input_counter" class="<?php if ((NULL != form_error('subject'))) {
echo ' md-input-danger ';
}?>input-count md-input title" name="subject" value="<?php if (strpos($_smarty_tpl->tpl_vars['Contact']->value['subject'],"پاسخ:: ") === false) {
echo smarty_modifier_con('پاسخ:: ',$_smarty_tpl->tpl_vars['Contact']->value['subject'],' : ');
} else {
echo $_smarty_tpl->tpl_vars['Contact']->value['subject'];
}?>" >
                                        <div id="input_counter_counter" class="text-count-wrapper">
                                        </div><span class="md-input-bar"></span>
                                    </div>
                                    <span class="error_page_content">
                                        <?php echo form_error('subject');?>
  
                                    </span>

                                    <div class="uk-margin-top uk-width-medium-1-1">
                                        <h3 class="heading_c">متن پیام<span class="text-danger"> *</span></h3>
                                        <textarea type="text" class="ckeditor" name="content"><?php echo set_value('content');?>
</textarea>                                
                                        <div id="input_counter_counter" class="text-count-wrapper">
                                        </div><span class="md-input-bar"></span>
                                    </div>
                                    <span class="error_page_content">
                                        <?php echo form_error('content');?>
  
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="uk-width-medium-1-4">
                            <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>ارسال</span></button>
                            <a  href="<?php echo smarty_modifier_con(site_url(),ADMIN_PATH);?>
" class="md-btn md-btn-flat md-btn-danger btn-list"><span>انصراف</span></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
<?php }
}
}
