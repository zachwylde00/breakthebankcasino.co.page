<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {($edit_mode) ? 'ویرایش گروه' : 'افزودن گروه'}
    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            {literal}
                <ul class="uk-tab" data-uk-tab="{connect:'#tabs_anim5', animation:'slide-right'}">
                {/literal}
                <li class="uk-active"><a href="#">ثبت اطلاعات</a></li>
                <li><a href="#">تعیین سطح دسترسی ها</a></li>
            </ul>
            {form_open(null)}
            <ul id="tabs_anim5" class="uk-switcher uk-margin">
                <li>
                    <div class="uk-width-1-1 ">
                        <div data-uk-grid-margin="" class="uk-grid">
                            <div class="uk-width-medium-1-2">
                                <div class="uk-form-row">
                                    <div class=" uk-margin-top">
                                        <label>نام گروه کاربری</label>
                                        <input type="text" maxlength="60" id="input_counter" class="input-count md-input" name="name" value="{set_value('name', (isset($Role->name)) ? $Role->name : '')}">
                                        <div id="input_counter_counter" class="text-count-wrapper">
                                        </div><span class="md-input-bar"></span>
                                    </div>
                                    <div class=" uk-margin-top">
                                        <label>نام لاتین</label>
                                        <input type="text" maxlength="60" id="input_counter" class="input-count md-input" name="slug" value="{set_value('slug', (isset($Role->slug)) ? $Role->slug : '')}">
                                        <div id="input_counter_counter" class="text-count-wrapper">
                                        </div><span class="md-input-bar"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>

                    <div class="uk-width-medium-3-5">
                        <h3 class="heading_a uk-margin-bottom">ماژول ها</h3>
                        <div class="uk-accordion" data-uk-accordion="{ collapse: false }">
                            {assign var="i" value="0"}
                            {foreach $Permissions as $moduleName=>$perms}
                                <h3 class="uk-accordion-title uk-accordion-title-primary">{$moduleName}</h3>
                                <div class="uk-accordion-content">
                                    {foreach $perms as $singlePermission}
                                        <p>

                                            <input type="checkbox" name="role_permissions[]" value="{$singlePermission.permission}" {if isset($Role) and ($Role->hasAccess([$singlePermission.permission]))}{'checked'}{/if}  id="role-{$i}" data-md-icheck />
                                            <label for="role-{$i}" class="inline-label">{$singlePermission.label}</label>
                                        </p>
                                        {assign var="i" value=$i+1}
                                    {/foreach}
                                </div>
                            {/foreach}
                        </div>
                    </div>
                </li>

            </ul>
            <div class="uk-width-medium-1-4">
                <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>ذخیره</span></button>
            </div>
            {form_close()}
        </div>
    </div>
</div>