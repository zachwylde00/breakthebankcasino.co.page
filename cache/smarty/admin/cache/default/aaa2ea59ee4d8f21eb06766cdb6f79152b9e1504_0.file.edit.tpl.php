<?php
/* Smarty version 3.1.31, created on 2018-12-23 15:14:39
  from "/home/richbet/public_html/themes/admin/default/modules/settings/edit.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c1f75278e6ef1_35412353',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'aaa2ea59ee4d8f21eb06766cdb6f79152b9e1504' => 
    array (
      0 => '/home/richbet/public_html/themes/admin/default/modules/settings/edit.tpl',
      1 => 1542122267,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c1f75278e6ef1_35412353 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        <?php echo '&#1578;&#1606;&#1592;&#1740;&#1605;&#1575;&#1578; &#1587;&#1740;&#1587;&#1578;&#1605;';?>

    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <form method="POST" action="" id="form_validation" class="uk-form-stacked">
                    <div data-uk-grid-margin="" class="uk-grid">
                        <div class="uk-width-medium-2-3">
                            <div class="uk-form-row">
                                <div class="  uk-margin-top">
                                    <label>&#1593;&#1606;&#1608;&#1575;&#1606; &#1587;&#1575;&#1740;&#1578; </label>
                                    <input type="text" maxlength="60" id="input_counter" class="<?php if ((NULL != form_error('site_name'))) {
echo ' md-input-danger ';
}?>input-count md-input" name="site_name" value="<?php echo set_value('site_name',isset($_smarty_tpl->tpl_vars['site_name']->value) ? $_smarty_tpl->tpl_vars['site_name']->value : '');?>
" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('site_name');?>
  
                                </span>
                                <div class="  uk-margin-top">
                                    <label>&#1605;&#1578;&#1606; &#1601;&#1608;&#1578;&#1585; &#1587;&#1575;&#1740;&#1578;</label>
                                    <input type="text" id="input_counter" class="<?php if ((NULL != form_error('footer'))) {
echo ' md-input-danger ';
}?>input-count md-input" name="footer" value="<?php echo set_value('footer',isset($_smarty_tpl->tpl_vars['footer']->value) ? $_smarty_tpl->tpl_vars['footer']->value : '');?>
" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('footer');?>
  
                                </span>
                                <div class="  uk-margin-top">
                                    <label>&#1670;&#1606;&#1583; &#1583;&#1585;&#1589;&#1583; &#1575;&#1586; &#1587;&#1608;&#1583; &#1588;&#1585;&#1591; &#1576;&#1606;&#1583;&#1740; &#1607;&#1575;&#1740; &#1586;&#1740;&#1585; &#1605;&#1580;&#1605;&#1608;&#1593;&#1607; &#1607;&#1575; &#1576;&#1607; &#1581;&#1587;&#1575;&#1576; &#1608;&#1575;&#1604;&#1583; &#1608;&#1575;&#1585;&#1740;&#1586; &#1588;&#1608;&#1583; &#1567;</label>
                                    <input type="number" min="10" max="100" id="input_counter" class="<?php if ((NULL != form_error('affiliate_count'))) {
echo ' md-input-danger ';
}?>input-count md-input" name="affiliate_count" value="<?php echo set_value('affiliate_count',isset($_smarty_tpl->tpl_vars['affiliate_count']->value) ? $_smarty_tpl->tpl_vars['affiliate_count']->value : '');?>
" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('affiliate_count');?>
  
                                </span>

                                <div class="  uk-margin-top">
                                    <label>&#1589;&#1601;&#1581;&#1607; &#1575;&#1589;&#1604;&#1740; &#1587;&#1575;&#1740;&#1578;</label>
                                    <select class="data-md-one-selectize" data-md-selectize-bottom=""  name="homepage">
                                        <option>&#1575;&#1606;&#1578;&#1582;&#1575;&#1576; &#1589;&#1601;&#1581;&#1607; &#1575;&#1589;&#1604;&#1740;</option>
                                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['Pages']->value, 'page');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['page']->value) {
?>
                                            <option value="<?php echo $_smarty_tpl->tpl_vars['page']->value->id;?>
" <?php if ($_smarty_tpl->tpl_vars['page']->value->id == $_smarty_tpl->tpl_vars['homepage']->value->value) {
echo 'selected';
}?>>
                                                <?php echo $_smarty_tpl->tpl_vars['page']->value->name;?>

                                            </option>
                                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                    </select>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('homepage');?>
  
                                </span>

                                <div class="  uk-margin-top">
                                    <label>&#1608;&#1590;&#1593;&#1740;&#1578; &#1705;&#1662;&#1740; &#1585;&#1575;&#1740;&#1578; &#1583;&#1585; &#1601;&#1608;&#1578;&#1585; &#1587;&#1575;&#1740;&#1578;</label>
                                    <select class="data-md-one-selectize" data-md-selectize-bottom=""  name="copyright">
                                        <option value="true" <?php if ('true' == $_smarty_tpl->tpl_vars['copyright']->value) {
echo 'selected';
}?>>&#1601;&#1593;&#1575;&#1604; - &#1606;&#1605;&#1575;&#1740;&#1588; &#1705;&#1662;&#1740; &#1585;&#1575;&#1740;&#1578;</option>
                                        <option value="false" <?php if ('false' == $_smarty_tpl->tpl_vars['copyright']->value) {
echo 'selected';
}?>>&#1594;&#1740;&#1585;&#1601;&#1593;&#1575;&#1604; - &#1593;&#1583;&#1605; &#1606;&#1605;&#1575;&#1740;&#1588; &#1705;&#1662;&#1740; &#1585;&#1575;&#1740;&#1578;</option>
                                    </select>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('homepage');?>
  
                                </span>

                                <div class="  uk-margin-top">
                                    <label>&#1589;&#1601;&#1581;&#1607; &#1582;&#1591;&#1575;&#1740; 404</label>
                                    <select class="data-md-one-selectize" data-md-selectize-bottom=""  name="custom_error_page">
                                        <option>&#1589;&#1601;&#1581;&#1607; &#1582;&#1591;&#1575;&#1740; 404</option>
                                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['Pages']->value, 'page');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['page']->value) {
?>
                                            <option value="<?php echo $_smarty_tpl->tpl_vars['page']->value->id;?>
" <?php if ($_smarty_tpl->tpl_vars['page']->value->id == $_smarty_tpl->tpl_vars['custom_error_page']->value->value) {
echo 'selected';
}?>>
                                                <?php echo $_smarty_tpl->tpl_vars['page']->value->name;?>

                                            </option>
                                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                    </select>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('custom_error_page');?>
  
                                </span>

                                <div class="  uk-margin-top">
                                    <label>&#1602;&#1575;&#1604;&#1576; &#1587;&#1575;&#1740;&#1578;</label>
                                    <select class="data-md-one-selectize" data-md-selectize-bottom=""  name="theme">
                                        <option>&#1602;&#1575;&#1604;&#1576; &#1587;&#1575;&#1740;&#1578;</option>
                                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['themes']->value, 'theme');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['theme']->value) {
?>
                                            <?php if ($_smarty_tpl->tpl_vars['theme']->value['type'] === 'dir') {?>
                                                <option value="<?php echo $_smarty_tpl->tpl_vars['theme']->value['path'];?>
" <?php if (isset($_smarty_tpl->tpl_vars['current_theme']->value) && $_smarty_tpl->tpl_vars['theme']->value['path'] === $_smarty_tpl->tpl_vars['current_theme']->value) {
echo 'selected';
}?>>
                                                    <?php echo $_smarty_tpl->tpl_vars['theme']->value['path'];?>

                                                </option>
                                            <?php }?>
                                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                    </select>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('custom_error_page');?>
  
                                </span>
                                <div class="  uk-margin-top">
                                    <h3 class="heading_a">&#1608;&#1590;&#1593;&#1740;&#1578; &#1587;&#1575;&#1740;&#1578;</h3>
                                    <span class="icheck-inline">
                                        <input type="radio" id="site_status0" name="site_status" value="0" data-md-icheck <?php if ((isset($_smarty_tpl->tpl_vars['site_status']->value) && $_smarty_tpl->tpl_vars['site_status']->value == 0)) {
echo 'checked';
}?>>
                                        <label for="site_status0" class="inline-label">&#1583;&#1585; &#1581;&#1575;&#1604; &#1576;&#1585;&#1608;&#1586;&#1585;&#1587;&#1575;&#1606;&#1740;</label>
                                    </span>
                                    <span class="icheck-inline">
                                        <input type="radio"  id="site_status1" name="site_status" value="1" data-md-icheck <?php if ((isset($_smarty_tpl->tpl_vars['site_status']->value) && $_smarty_tpl->tpl_vars['site_status']->value == 1)) {
echo 'checked';
}?>>
                                        <label for="site_status1" class="inline-label">&#1570;&#1606;&#1604;&#1575;&#1740;&#1606;</label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-1-4">
                        <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>&#1584;&#1582;&#1740;&#1585;&#1607;</span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">

                <label>&#1575;&#1591;&#1604;&#1575;&#1593;&#1575;&#1578; &#1587;&#1585;&#1608;&#1585;: </label>
                <label class="text-info"><?php echo $_smarty_tpl->tpl_vars['server_signature']->value;?>
</label>
                <br/>
                <label>&#1606;&#1605;&#1575;&#1740;&#1588; &#1582;&#1591;&#1575;: </label>
                <label class="text-info"><?php echo $_smarty_tpl->tpl_vars['display_errors']->value;?>
</label>
                <br/>
                <label>post_max_size: </label>
                <label class="text-info"><?php echo $_smarty_tpl->tpl_vars['post_max_size']->value;?>
</label>
            </div>
        </div>
    </div>
</div> <?php }
}
