<?php
/* Smarty version 3.1.31, created on 2018-12-12 02:22:42
  from "/home/richbet/public_html/themes/admin/default/modules/contacts/ticket.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c103fbaf19b11_59820130',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '5e9bd81a75efa22e3f044ac37e1889f8b721bdf0' => 
    array (
      0 => '/home/richbet/public_html/themes/admin/default/modules/contacts/ticket.tpl',
      1 => 1485149596,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c103fbaf19b11_59820130 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_modifier_con')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        <?php echo $_smarty_tpl->tpl_vars['title']->value;?>

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
}?>input-count md-input title" name="subject" value="<?php echo set_value('subject');?>
" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('subject');?>
  
                                </span>

                                <div class="uk-margin-top">
                                    <h3 class="heading_c">ارسال به (انتخاب گروه کاربری)</h3>
                                    <div class="uk-width-medium-1-1" data-uk-grid-margin="">
                                        <select id="role_selectize" class="data-md-closable-selectize" data-md-selectize-bottom="">
                                            <option value="">گروه کاربری</option>
                                            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['Roles']->value, 'role');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['role']->value) {
?>
                                                <option value="<?php echo $_smarty_tpl->tpl_vars['role']->value['id'];?>
"<?php if (isset($_smarty_tpl->tpl_vars['Entry']->value) && $_smarty_tpl->tpl_vars['Entry']->value->categories->contains($_smarty_tpl->tpl_vars['role']->value['id'])) {?> selected<?php }?>><?php echo $_smarty_tpl->tpl_vars['role']->value['name'];?>
</option>
                                            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                        </select>         
                                    </div>
                                </div>
                                <div class="uk-margin-top">
                                    <h3 class="heading_c">کاربر دریافت کننده</h3>
                                    <div class="uk-width-medium-1-1" data-uk-grid-margin="">
                                        <select style="width: 100%;
                                                padding: 4px 9px 4px;" name="to" id="user_rcpt" disabled="">
                                        </select>         
                                    </div>
                                </div>

                                <div class="uk-margin-top uk-width-medium-1-1">
                                    <h3 class="heading_c">متن پیام<span class="text-danger"> *</span></h3>
                                    <textarea type="text" class="ckeditor" name="content"><?php echo set_value('message');?>
</textarea>                                
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('message');?>
  
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-1-4">
                        <?php if (isset($_smarty_tpl->tpl_vars['user_id']->value)) {?>
                            <input type="hidden" name="to" value="<?php echo $_smarty_tpl->tpl_vars['user_id']->value;?>
"/>
                        <?php }?>
                        <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>ارسال</span></button>
                        <a  href="<?php echo smarty_modifier_con(site_url(),ADMIN_PATH);?>
" class="md-btn md-btn-flat md-btn-danger btn-list"><span>انصراف</span></a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div><?php }
}
