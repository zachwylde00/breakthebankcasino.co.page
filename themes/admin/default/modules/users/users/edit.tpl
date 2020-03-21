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
                                            <li><a href="#">تعیین سطح دسترسی ها</a></li>
                                        </ul>
                                    {/literal}
                                {else}
                                    {literal}
                                        <ul class="uk-tab" data-uk-tab="{connect:'#tabs_anim5', animation:'slide-right'}">
                                        {/literal}
                                        <li class="uk-active"><a href="#">افزودن کاربر</a></li>
                                            {if $is_admin}
                                            <li class="uk-active"><a href="#">تعیین سطح دسترسی ها</a></li>
                                            {/if}
                                    </ul>
                                {/if}
                                <ul id="tabs_anim5" class="uk-switcher uk-margin">
                                    <li>
                                        <div class="uk-width-medium-1-2 uk-float-right uk-margin-top">

                                            <div class="uk-width-medium-5-6 uk-margin-large-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label" for="first_name">نام</label>
                                                    <input type="text" maxlength="60" id="first_name" class="md-input{if  (NULL != form_error('first_name'))}{' md-input-danger '}{/if}" name="first_name" value="{set_value('first_name', (isset($User->first_name)) ? $User->first_name : '')}">
                                                </div>
                                                <span class="error_page_content">
                                                    {form_error('first_name')}  
                                                </span>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-large-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label" for="last_name">نام خانوادگی</label>
                                                    <input type="text" maxlength="60" id="last_name" class="md-input{if  (NULL != form_error('last_name'))}{' md-input-danger '}{/if}" name="last_name" value="{set_value('last_name', (isset($User->last_name)) ? $User->last_name : '')}">
                                                </div>
                                                <span class="error_page_content">
                                                    {form_error('last_name')}  
                                                </span>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-large-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label" for="username">نام کاربری</label>
                                                    <input type="text" maxlength="60" id="username" class="md-input{if  (NULL != form_error('username'))}{' md-input-danger '}{/if}" name="username" value="{set_value('username', (isset($User->username)) ? $User->username : '')}">
                                                </div>
                                                <span class="error_page_content">
                                                    {form_error('username')}  
                                                </span>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-large-bottom">
                                                <div class="uk-form-row">
                                                    <label>وضعیت: </label>


                                                    <span class="icheck-inline">
                                                        <input type="radio" id="status0" name="status" value="0" data-md-icheck {if (isset($is_activated) AND $is_activated==0)}{'checked'}{/if}>
                                                        <label for="status0" class="inline-label">غیرفعال</label>
                                                    </span>
                                                    <span class="icheck-inline">
                                                        <input type="radio"  id="status1" name="status" value="1" data-md-icheck {if (isset($is_activated) AND $is_activated==1)}{'checked'}{/if}>
                                                        <label for="status1" class="inline-label">فعال</label>
                                                    </span>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="uk-width-medium-1-2 uk-float-left uk-margin-top">
                                            {if $is_admin}
                                                <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                    <div class="uk-form-row">
                                                        <div class="uk-width-medium-2-5">
                                                            <label class="uk-form-label" for="roles"> گروه کاربری</label>
                                                            {foreach from=$Roles item=role}
                                                                <p>
                                                                    <input type="checkbox" name="role_id[]" id="role_id{$role.id}" value="{$role->id}" data-md-icheck {if isset($User) and ($User->getRoles()->contains($role.id))}{'checked'}{/if} />
                                                                    <label for="role_id{$role.id}" class="inline-label">{$role->name}</label>
                                                                </p>
                                                            {/foreach}
                                                        </div>
                                                    </div>
                                                </div>
                                            {/if}
                                            <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label">ایمیل</label>
                                                    <input type="text" maxlength="60" id="email" class=" md-input" name="email" value="{set_value('email', (isset($User->email)) ? $User->email : '')}">
                                                </div>
                                                <span class="error_page_content">
                                                    {form_error('email')}  
                                                </span>
                                            </div>
                                            <div class="uk-width-medium-5-6 uk-margin-small-top">
                                                <div class="uk-form-row">
                                                    <label class="uk-form-label">شماره موبایل</label>
                                                    <input type="text" maxlength="60" id="mobile" class=" md-input" name="mobile" value="{set_value('mobile', (isset($User->mobile)) ? $User->mobile : '')}">
                                                </div>
                                                <span class="error_page_content">
                                                    {form_error('mobile')}  
                                                </span>
                                            </div>
                                            {if (!$edit_mode)}
                                                <div class="uk-width-medium-5-6 uk-margin-small-bottom">
                                                    <div class="uk-form-row">
                                                        <label class="uk-form-label">رمز عبور</label>
                                                        <input type="password" maxlength="60" id="password" class="input-count md-input" name="password">
                                                    </div>
                                                    <span class="error_page_content">
                                                        {form_error('password')}  
                                                    </span>
                                                </div>
                                                <div class="uk-width-medium-5-6 ">
                                                    <div class="uk-form-row">
                                                        <label class="uk-form-label">تکرار رمز عبور</label>
                                                        <input type="password" maxlength="60" id="confirm_password" class=" md-input" name="confirm_password">
                                                    </div>
                                                    <span class="error_page_content">
                                                        {form_error('confirm_password')}  
                                                    </span>
                                                </div>
                                            {/if}
                                        </div>
                                    </li>
                                    {if ($edit_mode)}
                                        <li>

                                            <div class="uk-width-medium-1-2">
                                                <div class="uk-form-row">
                                                    <div class="uk-margin-top">
                                                        <label>رمز عبور</label>
                                                        <input type="password" maxlength="60" id="password" class="md-input" name="password">
                                                        <div id="input_counter_counter" class="text-count-wrapper">
                                                        </div><span class="md-input-bar"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="uk-width-medium-1-2">
                                                <div class="uk-form-row">
                                                    <div class="uk-margin-top">
                                                        <label>تایید رمز عبور</label>
                                                        <input type="password" maxlength="60" id="confirm_password" class="input-count md-input" name="confirm_password">
                                                        <div id="input_counter_counter" class="text-count-wrapper">
                                                        </div><span class="md-input-bar"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    {/if}
                                    <li>
                                        <div class="uk-width-medium-3-5  uk-margin-top">
                                            <h3 class="heading_a uk-margin-bottom">ماژول ها</h3>
                                            <div class="uk-accordion" data-uk-accordion="{ collapse: false }">
                                                {assign var="i" value="0"}
                                                {foreach $Permissions as $moduleName=>$perms}
                                                    <h3 class="uk-accordion-title uk-accordion-title-primary">{$moduleName}</h3>
                                                    <div class="uk-accordion-content">
                                                        {foreach $perms as $singlePermission}
                                                            <p>

                                                                <input type="checkbox" name="user_permissions[]" value="{$singlePermission.permission}" {if isset($User) and ($User->hasAccess([$singlePermission.permission]) OR $User->getRoles()->contains(1))}{'checked'}{/if}  id="user-{$i}" data-md-icheck />
                                                                <label for="user-{$i}" class="inline-label">{$singlePermission.label}</label>
                                                            </p>
                                                            {assign var="i" value=$i+1}
                                                        {/foreach}
                                                    </div>
                                                {/foreach}
                                            </div>
                                        </div>
                                    </li>
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