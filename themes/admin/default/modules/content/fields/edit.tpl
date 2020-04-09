<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {($edit_mode) ? 'ویرایش کاربر' : 'افزودن کاربر'}
    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                {form_open(null, 'id="user_edit_form"')}
                <div data-uk-grid-margin="" class="uk-grid">
                    <div class="uk-width-medium-1-1">
                        <div class="md-card" data-uk-grid-margin>
                            <div class="md-card-content">
                                {if $edit_mode}
                                    {literal}
                                        <ul class="uk-tab" data-uk-tab="{connect:'#tabs_anim5', animation:'slide-right'}">
                                            <li class="uk-active"><a href="#">ویرایش کاربر</a></li>
                                            <li><a href="#">تغییر رمز عبور</a></li>
                                        </ul>
                                    {/literal}
                                {else}
                                    {literal}
                                        <ul class="uk-tab" data-uk-tab="{connect:'#tabs_anim5', animation:'slide-right'}">
                                            <li class="uk-active"><a href="#">افزودن کاربر</a></li>
                                        </ul>
                                    {/literal}
                                {/if}
                                <ul id="tabs_anim5" class="uk-switcher uk-margin">
                                    <li>
                                        <div class="uk-width-medium-1-2 uk-float-right">

                                            <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label" for="phone">تلفن</label>
                                                    <input type="text" maxlength="60" id="phone" class=" md-input" name="phone" value="{set_value('phone', (isset($User->phone)) ? $User->phone : '')}">
                                                </div>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label" for="address">آدرس</label>
                                                    <input type="text" maxlength="60" id="address" class=" md-input" name="address" value="{set_value('address', (isset($User->address)) ? $User->address : '')}">
                                                </div>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label" for="address2">آدرس 2</label>
                                                    <input type="text" maxlength="60" id="address2" class=" md-input" name="address2" value="{set_value('address2', (isset($User->address2)) ? $User->address2 : '')}">
                                                </div>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label" for="city">شهر</label>
                                                    <input type="text" maxlength="60" id="city" class="md-input" name="city" value="{set_value('city', (isset($User->city)) ? $User->city : '')}">
                                                </div>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label" for="zip">کد پستی</label>
                                                    <input type="text" maxlength="60" id="zip" class="md-input" name="zip" value="{set_value('zip', (isset($User->zip)) ? $User->zip : '')}">
                                                </div>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                <div class="uk-form-row">
                                                    <label for="status_disabled" class="inline-label">وضعیت: </label>
                                                    {*form_radio(array('id' => 'status_enabled', 'name' => 'enabled', 'value' => '1', 'checked' => set_radio('enabled', '1', (isset($User->enabled) && $User->enabled) ? TRUE : TRUE)), '', FALSE, 'data-md-icheck')*}
                                                    <label for="status_enabled" class="inline-label">فعال</label>
                                                    {*form_radio(array('id' => 'status_disabled', 'name' => 'enabled', 'value' => '0', 'checked' => set_radio('enabled', '0', (isset($User->enabled) && !$User->enabled) ? TRUE : FALSE)), '', FALSE, 'data-md-icheck')*}
                                                    <label for="status_disabled" class="inline-label">غیر فعال</label>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="uk-width-medium-1-2 uk-float-left">
                                            <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                <div class="uk-form-row">
                                                    <div class="uk-width-medium-2-5">
                                                        <label class="uk-form-label" for="roles"> گروه کاربری</label>
                                                        {foreach from=$Roles item=role}
                                                            <p>
                                                                <input type="checkbox" name="role_id[]" id="role_id" value="{$role->id}" data-md-icheck />
                                                                <label for="role_id" class="inline-label">{$role->name}</label>
                                                            </p>
                                                        {/foreach}
                                                    </div>
                                                    {*form_dropdown('group_id', option_array_value($Groups, 'id', 'name', array('' => '')), set_value('group_id', (isset($User->group_id)) ? $User->group_id : $this->settings->users_module->default_group), 'id="groups" class="long" data-md-selectize')*}
                                                </div>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label" for="groups">ایمیل</label>
                                                    <input type="email" maxlength="60" id="email" class=" md-input" name="email" value="{set_value('email', (isset($User->email)) ? $User->email : '')}">
                                                </div>
                                            </div>
                                            {if (!$edit_mode)}
                                                <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                    <div class="uk-form-row">
                                                        <label class="uk-form-label" for="groups">رمز عبور</label>
                                                        <input type="password" maxlength="60" id="password" class="input-count md-input" name="password">
                                                    </div>
                                                </div>
                                                <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                    <div class="uk-form-row">
                                                        <label class="uk-form-label" for="groups">تکرار رمز عبور</label>
                                                        <input type="password" maxlength="60" id="confirm_password" class=" md-input" name="confirm_password">
                                                    </div>
                                                </div>

                                            {/if}

                                            <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label" for="first_name">نام</label>
                                                    <input type="text" maxlength="60" id="first_name" class="md-input" name="first_name" value="{set_value('first_name', (isset($User->first_name)) ? $User->first_name : '')}">
                                                </div>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label" for="last_name">نام خانوادگی</label>
                                                    <input type="text" maxlength="60" id="last_name" class="md-input" name="last_name" value="{set_value('last_name', (isset($User->last_name)) ? $User->last_name : '')}">
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {if ($edit_mode)}
                                        <li>

                                            <div class="uk-width-medium-1-2">
                                                <div class="uk-form-row">
                                                    <div class="md-input-wrapper md-input-filled  uk-margin-top">
                                                        <label>رمز عبور</label>
                                                        <input type="password" maxlength="60" id="password" class="md-input" name="password">
                                                        <div id="input_counter_counter" class="text-count-wrapper">
                                                        </div><span class="md-input-bar"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="uk-width-medium-1-2">
                                                <div class="uk-form-row">
                                                    <div class="md-input-wrapper md-input-filled  uk-margin-top">
                                                        <label>تایید رمز عبور</label>
                                                        <input type="password" maxlength="60" id="confirm_password" class="input-count md-input" name="confirm_password">
                                                        <div id="input_counter_counter" class="text-count-wrapper">
                                                        </div><span class="md-input-bar"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    {/if}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-1-1">
                        <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>ذخیره</span></button>
                    </div>
                </div>
                {form_close()}
            </div>
        </div>
    </div>
</div>