<?php
/* Smarty version 3.1.31, created on 2020-01-27 17:52:43
  from "/home/gang4bet/public_html/themes/admin/default/partials/header.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e2ef233140159_69181923',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '8e36bedb0fdc73f1bfccf23b22a97fb8f54e7ccb' => 
    array (
      0 => '/home/gang4bet/public_html/themes/admin/default/partials/header.tpl',
      1 => 1519911092,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/sidebar.tpl' => 1,
  ),
),false)) {
function content_5e2ef233140159_69181923 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_assets_url')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/function.assets_url.php';
if (!is_callable('smarty_function_header_css')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/function.header_css.php';
if (!is_callable('smarty_function_site_url')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
if (!is_callable('smarty_modifier_con')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
?>
<!doctype html>
<!--[if lte IE 9]> <html class="lte-ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="en"> <!--<![endif]-->

    <head>
        <meta charset="UTF-8">
        <!-- Controller Defined Stylesheets -->
        <?php echo '<script'; ?>
 type="text/javascript">
            var ADMIN_PATH = '<?php echo ADMIN_PATH;?>
';
            var ADMIN_URL = '<?php echo site_url(ADMIN_PATH);?>
';
            var SITE_URL = '<?php echo site_url();?>
';
            var asset_url = '<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
';
        <?php echo '</script'; ?>
>
        <title>داشبورد مدیریتی-<?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</title>

        <link rel="stylesheet" href="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/codemirror/lib/codemirror.css">

        <link rel="stylesheet" href="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/uikit/css/uikit.almost-flat.min.css" media="all">

        <link rel="stylesheet" href="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/icons/flags/flags.min.css" media="all">
        <link rel="stylesheet" href="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/jquery.craftpip_confirmbox/css/jquery-confirm.css" media="all">
        <link rel="stylesheet" href="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/pwt.datepicker/dist/css/persian-datepicker-0.4.5.min.css" media="all">

        <link rel="stylesheet" href="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/css/main.min.css" media="all">
        <link rel="stylesheet" href="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/css/rtl/style.css"/>

        <?php echo smarty_function_header_css(array(),$_smarty_tpl);?>

    </head>
    <body class="sidebar_main_open">

        <header id="header_main">
            <div class="header_main_content">
                <nav class="uk-navbar">

                    <a href="#" id="sidebar_main_toggle" class="sSwitch sSwitch_right">
                        <span class="sSwitchIcon"></span>
                    </a>

                    <a href="#" id="sidebar_secondary_toggle" class="sSwitch sSwitch_right sidebar_secondary_check">-->
                        <span class="sSwitchIcon"></span>
                    </a>
                    <div class="uk-navbar-flip">
                        <ul class="uk-navbar-nav user_actions">
                            <?php if ($_smarty_tpl->tpl_vars['is_admin']->value) {?>
                                <li data-uk-dropdown="">
                                    <a href="#" class="user_action_icon"><i class="material-icons md-24 md-light">&#xE80B;</i><span class="uk-badge"><?php echo $_smarty_tpl->tpl_vars['contact_us_count']->value;?>
</span></a>
                                    <div class="uk-dropdown uk-dropdown-xlarge uk-dropdown-flip uk-dropdown-scrollable">
                                        <label>
                                            تماس کاربران
                                        </label>
                                        <hr>
                                        <ul class="md-list md-list-addon">
                                            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['contact_us']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
                                                <?php if ($_smarty_tpl->tpl_vars['val']->value['seen_status_contact'] == 0) {?>
                                                    <li>
                                                        <div class="md-list-addon-element">
                                                            <i class="md-list-addon-icon material-icons uk-text-warning">&#xE8B2;</i>
                                                        </div>
                                                        <div class="md-list-content"  style="direction:rtl;text-align: right">
                                                            <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/contacts/contact-us/view-contact/',$_smarty_tpl->tpl_vars['val']->value['id']);?>
">
                                                                <span style="float:right" class="md-list-heading"><?php echo $_smarty_tpl->tpl_vars['val']->value['subject'];?>
</span>

                                                            </a>
                                                            <p style="float:right" ><?php echo $_smarty_tpl->tpl_vars['val']->value['message'];?>
</p>
                                                            <?php if ($_smarty_tpl->tpl_vars['val']->value['attachment']) {?>
                                                                <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),'/upload/contacts/',$_smarty_tpl->tpl_vars['val']->value['attachment']);?>
"><?php echo $_smarty_tpl->tpl_vars['val']->value['attachment'];?>
</a>
                                                            <?php }?>
                                                        </div>
                                                    </li>
                                                <?php }?>
                                            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                            <hr>
                                            <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/contacts/contact-us');?>
">لیست همه تماس ها</a>
                                        </ul>
                                    </div>
                                </li>
                            <?php }?>
                            <li data-uk-dropdown="">
                                <a href="#" class="user_action_icon"><i class="material-icons md-24 md-light">&#xE159;</i><span data-badge="<?php echo $_smarty_tpl->tpl_vars['ticket_unread_count']->value;?>
" class="ticket-badge uk-badge"><?php echo $_smarty_tpl->tpl_vars['ticket_unread_count']->value;?>
</span></a>
                                <div class="uk-dropdown uk-dropdown-xlarge uk-dropdown-flip uk-dropdown-scrollable">
                                    <label>
                                        تیکت ها
                                    </label>
                                    <hr>
                                    <ul class="md-list md-list-addon">
                                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['site_Contacts']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
                                            <?php if ($_smarty_tpl->tpl_vars['val']->value['status'] == 0) {?>
                                                <li id="ticket_id_<?php echo $_smarty_tpl->tpl_vars['val']->value['id'];?>
">
                                                    <div class="md-list-addon-element">
                                                        <i class="md-list-addon-icon material-icons uk-text-warning">&#xE8B2;</i>
                                                    </div>
                                                    <div class="md-list-content" style="direction:rtl;text-align: right">
                                                        <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/contacts/tickets/view-ticket/',$_smarty_tpl->tpl_vars['val']->value['id']);?>
">
                                                            <span class="md-list-heading"><?php echo $_smarty_tpl->tpl_vars['val']->value['subject'];?>
</span>

                                                        </a>
                                                        <br>
                                                        <p><?php echo $_smarty_tpl->tpl_vars['val']->value['content'];?>
</p>
                                                    </div>
                                                </li>
                                            <?php }?>
                                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                        <hr>
                                        <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/contacts/contact-us/list-announce');?>
">لیست همه تیکت ها</a>
                                    </ul>
                                </div>
                            </li>
                            <li data-uk-dropdown="">
                                <a href="#" class="user_action_image"><img class="md-user-image" src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/img/avatars/user.png" alt=""/></a>
                                <div class="uk-dropdown uk-dropdown-small uk-dropdown-flip">
                                    <ul class="uk-nav js-uk-prevent">
                                        <li class="text-right"><a href="<?php echo site_url('panel/users/logout');?>
">خروج</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#" id="main_search_btn" class="user_action_icon"><i class="material-icons md-24 md-light">&#xE8B6;</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <?php $_smarty_tpl->_subTemplateRender("file:partials/sidebar.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<?php }
}
