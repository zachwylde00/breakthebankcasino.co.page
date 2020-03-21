<?php
/* Smarty version 3.1.31, created on 2020-03-05 15:24:20
  from "C:\laragon\www\gang4bet\themes\admin\default\modules\dashboard\index.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e60e86ccb6574_04435786',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '7f60216560b037653fb246c86df243a80d937c8c' => 
    array (
      0 => 'C:\\laragon\\www\\gang4bet\\themes\\admin\\default\\modules\\dashboard\\index.tpl',
      1 => 1580785646,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e60e86ccb6574_04435786 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_setting')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\modules\\settings\\smarty\\plugins\\function.setting.php';
if (!is_callable('smarty_modifier_persian_number')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\modifier.persian_number.php';
if (!is_callable('smarty_modifier_con')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\modifier.con.php';
if (!is_callable('smarty_modifier_price_format')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\modifier.price_format.php';
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-bottom"><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <p>&#1576;&#1607; &#1583;&#1588;&#1576;&#1608;&#1585;&#1583; &#1605;&#1583;&#1740;&#1585;&#1740;&#1578;&#1740; <?php echo smarty_function_setting(array('name'=>"site_name"),$_smarty_tpl);?>
 &#1582;&#1608;&#1588; &#1570;&#1605;&#1583;&#1740;&#1583;</p>
            <p>&#1576;&#1585;&#1575;&#1740; &#1575;&#1587;&#1578;&#1601;&#1575;&#1583;&#1607; &#1575;&#1586; &#1575;&#1605;&#1705;&#1575;&#1606;&#1575;&#1578; &#1662;&#1606;&#1604;  &#1548; &#1575;&#1586; &#1605;&#1606;&#1608;&#1740; &#1705;&#1606;&#1575;&#1585;&#1740; &#1575;&#1587;&#1578;&#1601;&#1575;&#1583;&#1607; &#1705;&#1606;&#1740;&#1583;.</p>
        </div>
    </div>

    <h4 class="heading_c">&#1570;&#1582;&#1585;&#1740;&#1606; &#1585;&#1582; &#1583;&#1575;&#1583;&#1607;&#1575;</h4>
    
        <div class="uk-grid uk-grid-medium" data-uk-grid-margin data-uk-grid-match="{target:'.md-card'}">
        
        <div class="uk-width-medium-1-3">
            <div class="md-card">
                <div class="md-card-content">
                    <h4>
                        <i class="uk-icon-users uk-icon-small .uk-icon-justify uk-text-success"></i>
                        (<?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['notif']->value['users']);?>
) &#1605;&#1580;&#1605;&#1608;&#1593; &#1705;&#1575;&#1585;&#1576;&#1585;&#1575;&#1606; 
                    </h4>
                    <a href="<?php echo smarty_modifier_con(site_url(),ADMIN_PATH);?>
/users">&#1605;&#1588;&#1575;&#1607;&#1583;&#1607; &#1604;&#1740;&#1587;&#1578; &#1705;&#1575;&#1585;&#1576;&#1585;&#1575;&#1606;</a>
                </div>
            </div>
        </div>
        <div class="uk-width-medium-1-3">
            <div class="md-card">
                <div class="md-card-content">
                    <h4>
                        <i class="uk-icon-money uk-icon-small .uk-icon-justify uk-text-success"></i>
                        <?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['notif']->value['variziEmroz']);?>
 &#1605;&#1580;&#1605;&#1608;&#1593; &#1608;&#1575;&#1585;&#1740;&#1586;&#1740; &#1607;&#1575;&#1740; &#1575;&#1605;&#1585;&#1608;&#1586;&#8204;
                    </h4>
                    <a href="<?php echo smarty_modifier_con(site_url(),ADMIN_PATH);?>
/payment/transactions/credit">&#1605;&#1588;&#1575;&#1607;&#1583;&#1607; &#1604;&#1740;&#1587;&#1578; &#1578;&#1585;&#1575;&#1705;&#1606;&#1588;&#8204;&#1607;&#1575;</a>
                </div>
            </div>
        </div>
        <div class="uk-width-medium-1-3">
            <div class="md-card">
                <div class="md-card-content">
                    <h4>
                        <i class="uk-icon-money uk-icon-small .uk-icon-justify uk-text-success"></i>
                        <?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['notif']->value['sumCashUsers']);?>
 &#1605;&#1580;&#1605;&#1608;&#1593; &#1605;&#1608;&#1580;&#1608;&#1583;&#1740; &#1705;&#1575;&#1585;&#1576;&#1585;&#1575;&#1606;
                    </h4>
                </div>
            </div>
        </div>
        <div class="uk-width-medium-1-3">
            <div class="md-card">
                <div class="md-card-content">
                    <h4>
                        <i class="uk-icon-money uk-icon-small .uk-icon-justify uk-text-success"></i>
                        <?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['notif']->value['bardashti']);?>
 &#1605;&#1580;&#1605;&#1608;&#1593; &#1576;&#1585;&#1583;&#1575;&#1588;&#1578;&#1740;&#8204;&#1607;&#1575;&#1740; &#1705;&#1575;&#1585;&#1576;&#1585;&#1607;&#1575;
                    </h4>
                    <a href="<?php echo smarty_modifier_con(site_url(),ADMIN_PATH);?>
/payment/transactions/withdraw">&#1605;&#1588;&#1575;&#1607;&#1583;&#1607; &#1604;&#1740;&#1587;&#1578; &#1578;&#1585;&#1575;&#1705;&#1606;&#1588;&#8204;&#1607;&#1575;</a>
                </div>
            </div>
        </div>
    </div>
</div>
<?php }
}
