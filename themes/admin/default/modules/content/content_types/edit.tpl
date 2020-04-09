<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {($edit_mode) ? 'ویرایش نوع محتوا' : 'افزودن نوع محتوا'}
    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <form method="POST" action="" id="form_validation" class="uk-form-stacked">
                    <div data-uk-grid-margin="" class="uk-grid">
                        <div class="uk-width-medium-2-3">
                            <div class="uk-form-row">
                                <div class="  uk-margin-top">
                                    <label>عنوان نوع محتوا </label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('name'))}{' md-input-danger '}{/if}input-count md-input title" name="name" value="{set_value('name', (isset($Content_type->name)) ? $Content_type->name : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('name')}  
                                </span>

                                <div class="  uk-margin-top">
                                <label>آدرس لینک سئو</label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if (NULL != form_error('slug'))}{' md-input-danger '}{/if} input-count md-input slug" name="slug" value="{set_value('slug', (isset($Content_type->slug)) ? $Content_type->slug : '')}">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('slug')}  
                                </span>
                                <div class="uk-margin-top">
                                    <label>قالب لیست انواع محتوا</label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('list_tpl'))}{' md-input-danger '}{/if} input-count md-input" name="list_tpl" value="{set_value('list_tpl', (isset($Content_type->list_tpl)) ? $Content_type->list_tpl : '')}">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('list_tpl')}  
                                </span>
                                <div class="uk-margin-top">
                                    <label>قالب متن خلاصه</label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('short_tpl'))}{' md-input-danger '}{/if} input-count md-input" name="short_tpl" value="{set_value('short_tpl', (isset($Content_type->short_tpl)) ? $Content_type->short_tpl : '')}">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('short_tpl')}  
                                </span>
                                <div class="  uk-margin-top">
                                    <label>قالب متن اصلی</label>
                                    <input type="text" maxlength="60" id="input_counter" class="input-count md-input" name="full_tpl" value="{set_value('full_tpl', (isset($Content_type->full_tpl)) ? $Content_type->full_tpl : '')}">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('full_tpl')}  
                                </span>
                                <div class="  uk-margin-top">
                                    <h3 class="heading_a">وضعیت</h3>
                                    <span class="icheck-inline">
                                        <input type="radio" id="status0" class="md-input" name="status" value="0" data-md-icheck {if (isset($Content_type->status) AND $Content_type->status==0)}{'checked'}{/if}>
                                        <label for="status0" class="inline-label">غیرفعال</label>
                                    </span>
                                    <span class="icheck-inline">
                                        <input type="radio"  id="status1" class="md-input" name="status" value="1" data-md-icheck {if !(isset($Content_type->status) AND $Content_type->status==0)}{'checked'}{/if}>
                                        <label for="status1" class="inline-label">فعال</label>
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