<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {($edit_mode) ? 'ویرایش گروه منو ' : 'افزودن گروه منو '}
    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <form method="POST" action="" id="form_validation" class="uk-form-stacked">
                    <div data-uk-grid-margin="" class="uk-grid">
                        <div class="uk-width-medium-2-3">
                            <div class="uk-form-row">
                                <div class=" uk-margin-top">
                                    <label>عنوان گروه منو </label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('name'))}{' md-input-danger '}{/if}input-count md-input" name="name" value="{set_value('name', (isset($Menu_group->name)) ? $Menu_group->name : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('name')}  
                                </span>

                                <div class="uk-margin-top">
                                    <label>کدلاتین (فاصله مجاز نیست)</label>
                                    <input type="text" maxlength="60" id="input_counter" class="input-count md-input{if (NULL != form_error('code'))}{' md-input-danger '}{/if}" name="code" value="{set_value('code', (isset($Menu_group->code)) ? $Menu_group->code : '')}">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('code')}  
                                </span>

                                <div class=" uk-margin-top">
                                    <label>برای ادمین</label>
                                    <span class="icheck-inline">
                                        <input type="radio" id="status0" name="is_admin" value="0" data-md-icheck {if (isset($Menu_group->is_admin) AND $Menu_group->is_admin==0)}{'checked'}{/if}>
                                        <label for="status0" class="inline-label">خیر</label>
                                    </span>
                                    <span class="icheck-inline">
                                        <input type="radio"  id="status1" name="is_admin" value="1" data-md-icheck {if !(isset($Menu_gourp->is_admin) AND $Menu_group->is_admin==1)}{'checked'}{/if}>
                                        <label for="status1" class="inline-label">بلی</label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-1-4">
                        <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>ذخیره</span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>