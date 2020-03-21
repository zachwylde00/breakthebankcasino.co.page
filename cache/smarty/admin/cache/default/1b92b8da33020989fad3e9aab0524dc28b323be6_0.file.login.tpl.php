<?php
/* Smarty version 3.1.31, created on 2018-12-25 00:29:38
  from "/home/richbet/public_html/themes/admin/default/modules/users/login.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c2148bad91402_76615878',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '1b92b8da33020989fad3e9aab0524dc28b323be6' => 
    array (
      0 => '/home/richbet/public_html/themes/admin/default/modules/users/login.tpl',
      1 => 1485149596,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c2148bad91402_76615878 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_modifier_con')) require_once '/home/richbet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
?>
<div class="login_page_wrapper">


    <div class="md-card" id="login_card">
        <div class="md-card-content large-padding" id="login_form">
            <div class="login_heading">
                <div class="user_avatar"></div>
            </div>
            <?php echo form_open();?>

            <div class="uk-form-row">
                <label for="email">ایمیل </label>
                <input class="md-input" type="text" id="email" name="email" value="<?php echo set_value('email');?>
"/>
            </div>
            <div class="uk-form-row">
                <label for="password">کلمه عبور</label>
                <input class="md-input" type="password" id="login_username" name="password"/>
            </div>
            <div class="uk-margin-medium-top">
                <button class="md-btn md-btn-primary md-btn-block md-btn-large">ورود</button>
            </div>
            <div class="uk-margin-top">
                <span class="icheck-inline">
                    <input type="checkbox" name="remember_me" id="login_page_stay_signed" data-md-icheck />
                    <label for="login_page_stay_signed" class="inline-label">مرا به خاطر بسپار</label>
                </span>
            </div>
            <?php echo form_close();?>

        </div>
        <div class="md-card-content large-padding uk-position-relative" id="login_help" style="display: none">
            <button type="button" class="uk-position-top-right uk-close uk-margin-right uk-margin-top" id="login_help_close"></button>
                    <h2 class="heading_b uk-text-success">نمی توانید وارد شوید؟</h2>
                    <p>برای دسترسی سریع به حساب کاربری خود می توانید یکی از کارهای زیر را انجام دهید:</p>
                    <p>اگر رمز عبور خود را به خاطر دارید اما نمی توانید به حساب کاربری خود وارد شوید، مطمئن شوید که کلید Capslock روشن نیست و نام کاربری خود را صحیح وارد کرده اید.</p>
                    <p>اگر هنوز نمی توانید به حساب کاربری خود وارد شوید، می توانید برای <a href="#" id="login_password_reset_show">دریافت رمز عبور </a>اقدام کنید.</p>
        </div>
        <div class="md-card-content large-padding" id="login_password_reset" style="display: none">
            <button type="button" class="uk-position-top-right uk-close uk-margin-right uk-margin-top" id="forgot_pass_close"></button>
            <h2 class="heading_a uk-margin-large-bottom">تنظیم مجدد رمز عبور</h2>
            <?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/users/forgot-password');
$_prefixVariable1=ob_get_clean();
echo form_open($_prefixVariable1);?>

            <div class="uk-form-row">
                <label for="email">ایمیل</label>
                <input class="md-input" type="text" id="username" name="email"/>
            </div>
            <div class="uk-margin-medium-top">
                <button class="md-btn md-btn-primary md-btn-block">ثبت درخواست </button><br><br>
                <a class="md-btn md-btn-primary md-btn-block " href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/users/login');
$_prefixVariable2=ob_get_clean();
echo site_url($_prefixVariable2);?>
" class="button"><span>لغو</span></a>
            </div>
            <?php echo form_close();?>

        </div>
    </div>
    <div class="uk-margin-top">
        <a href="#" id="login_help_show">نیاز به کمک دارید؟</a>
    </div>
</div><?php }
}
