<div class="login_page_wrapper">
    <div class="md-card" id="login_card">
        <div class="md-card-content large-padding" id="login_password_reset">
            <h2 class="heading_a uk-margin-large-bottom">تنظیم مجدد رمز عبور</h2>
            {form_open()}
            <div class="uk-form-row">
                <label for="reminderCode">کد ارسال شده به تلفن همراه شما</label>
                <input class="md-input" type="text" id="username" name="reminderCode"/>
            </div>
            <div class="uk-form-row">
                <label for="password">کلمه عبور جدید</label>
                <input class="md-input" type="password" id="username" name="password"/>
            </div>
            <div class="uk-form-row">
                <label for="confirm_password">تکرار کلمه عبور</label>
                <input class="md-input" type="password" id="username" name="confirm_password"/>
            </div>
            <div class="uk-margin-medium-top">
                <button class="md-btn md-btn-primary md-btn-block">ثبت</button><br><br>
            </div>
            {form_close()}
        </div>
    </div>
</div>