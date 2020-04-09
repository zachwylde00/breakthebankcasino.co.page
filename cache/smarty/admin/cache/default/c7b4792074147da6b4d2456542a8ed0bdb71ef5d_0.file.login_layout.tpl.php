<?php
/* Smarty version 3.1.31, created on 2020-01-27 01:27:04
  from "/home/gang4bet/public_html/themes/admin/default/layout/login_layout.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e2e0b3042b083_84418858',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'c7b4792074147da6b4d2456542a8ed0bdb71ef5d' => 
    array (
      0 => '/home/gang4bet/public_html/themes/admin/default/layout/login_layout.tpl',
      1 => 1519639276,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e2e0b3042b083_84418858 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_assets_url')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/function.assets_url.php';
?>
<!doctype html>
<!--[if lte IE 9]> <html class="lte-ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="en"> <!--<![endif]-->
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="icon" type="image/png" href="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/img/favicon-16x16.png" sizes="16x16">
        <link rel="icon" type="image/png" href="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/img/favicon-32x32.png" sizes="32x32">
        <title><?php echo $_smarty_tpl->tpl_vars['title']->value;?>
</title>

        <link rel="stylesheet" href="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/uikit/css/uikit.almost-flat.min.css"/>


        <link rel="stylesheet" href="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/css/login_page.min.css"/>
        <link rel="stylesheet" href="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/css/rtl/style.css"/>
    </head>
    <body class="login_page">

        <?php if (($_smarty_tpl->tpl_vars['system_message']->value != '')) {?>
            <div class="page_content_inner uk-width-medium-2-4" style="margin: 0px auto;">
                <div class="md-card uk-margin-medium-bottom">
                    <div class="heading_a title-top uk-margin-small-bottom 
                         <?php if ($_smarty_tpl->tpl_vars['system_message']->value['type'] == 'success') {?>
                             <?php echo 'msgsuccess';?>

                         <?php } elseif ($_smarty_tpl->tpl_vars['system_message']->value['type'] == 'warning') {?>
                             <?php echo 'msgwarning';?>

                         <?php } elseif ($_smarty_tpl->tpl_vars['system_message']->value['type'] == 'fail') {?> 
                             <?php echo 'msgerror';?>

                         <?php }?>
                         ">

                        <div class="msg-grid-title no-border">
                            <h4 style="margin-bottom: 22px; margin-top: 59px;"><i class="fa fa-
                                                                                  <?php if ($_smarty_tpl->tpl_vars['system_message']->value['type'] == 'success') {?>
                                                                                      <?php echo 'check-square-o';?>

                                                                                  <?php } elseif ($_smarty_tpl->tpl_vars['system_message']->value['type'] == 'warning') {?>
                                                                                      <?php echo 'warning';?>

                                                                                  <?php } elseif ($_smarty_tpl->tpl_vars['system_message']->value['type'] == 'fail') {?> 
                                                                                      <?php echo 'remove';?>

                                                                                  <?php }?>
                                                                                  fa-2x" style="vertical-align: middle;"></i>
                                <span class="semi-bold" style="padding-top: 9px ! important; font-size: 13px; border-bottom: 4px dashed rgb(221, 221, 221); margin-bottom: 9px ! important;font-family: mirooklight"><?php echo $_smarty_tpl->tpl_vars['system_message']->value['title'];?>
</span>
                            </h4>

                        </div>
                        <div class="grid-body no-border"> 
                            <p> <?php echo $_smarty_tpl->tpl_vars['system_message']->value['message'];?>
</p>
                        </div>
                    </div>
                </div>

            </div>
        <?php }?>

        <?php echo $_smarty_tpl->tpl_vars['content']->value;?>


        <?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/js/common.min.js"><?php echo '</script'; ?>
>

        <?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/js/altair_admin_common.min.js"><?php echo '</script'; ?>
>

        <?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/js/pages/login_page.min.js"><?php echo '</script'; ?>
>
    </body>

</html><?php }
}
