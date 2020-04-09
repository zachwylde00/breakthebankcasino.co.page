<div class="login_page_wrapper">
{*    <?php echo $this->session->flashdata('message'); ?>*}
{*    <?php echo validation_errors(); ?>*}
    <div class="md-card" id="login_card">
        <div class="md-card-content large-padding" id="login_form">
            <div class="login_heading">
                <div class="user_avatar"></div>
            </div>
            {form_open()}
            <div class="uk-form-row">
                <label for="email">ایمیل </label>
                <input class="md-input" type="text" id="email" name="email" value="{set_value('email')}"/>
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
            {form_close()}
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
            {form_open({ADMIN_PATH|con:'/users/forgot-password'})}
            <div class="uk-form-row">
                <label for="email">ایمیل</label>
                <input class="md-input" type="text" id="username" name="email"/>
            </div>
            <div class="uk-margin-medium-top">
                <button class="md-btn md-btn-primary md-btn-block">ثبت درخواست </button><br><br>
                <a class="md-btn md-btn-primary md-btn-block " href="{site_url({ADMIN_PATH|con:'/users/login'})}" class="button"><span>لغو</span></a>
            </div>
            {form_close()}
        </div>
    </div>
    <div class="uk-margin-top">
        <a href="#" id="login_help_show">نیاز به کمک دارید؟</a>
    </div>
</div>