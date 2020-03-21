<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {($edit_mode) ? 'ویرایش  فیلد اضافی' : 'افزودن فیلد اضافی'}
    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <form method="POST" action="" id="form_validation" class="uk-form-stacked">
                    <div data-uk-grid-margin="" class="uk-grid">
                        <div class="uk-width-medium-2-3">
                            <div class="uk-form-row">
                                <div class="uk-margin-top">
                                    <label>نام</label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('name'))}{' md-input-danger '}{/if}input-count md-input" name="name" value="{set_value('name', (isset($Content_field->name)) ? $Content_field->name : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('name')}  
                                </span>

                                <div class="uk-margin-top">
                                    <label>نامک(برای استفاده در قالب)</label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('slug'))}{' md-input-danger '}{/if}input-count md-input" name="slug" value="{set_value('slug', (isset($Content_field->slug)) ? $Content_field->slug : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('slug')}  
                                </span>

                                <div class="uk-margin-top">
                                    <label>نوع</label>
                                    <div class="uk-width-medium-1-1" data-uk-grid-margin="">
                                        <select class="data-md-one-selectize" data-md-selectize-bottom="" name="field_type">
                                            <option value="">انتخاب موضوعات</option>
                                            {foreach $Field_types as $val}
                                                <option value="{$val.id}">{$val.name}</option>
                                            {/foreach}
                                        </select>         
                                    </div>
                                </div>
                                <span class="error_page_content">
                                    {form_error('field_type')}  
                                </span>
                                <div class="md-input-wrapper  uk-margin-top">
                                    <h3 class="heading_a">وضعیت</h3>
                                    <span class="icheck-inline">
                                        <input type="radio" id="status0" class="md-input" name="status" value="0" data-md-icheck {if (isset($Content_field->status) AND $Content_field->status==0)}{'checked'}{/if}>
                                        <label for="status0" class="inline-label">غیرفعال</label>
                                    </span>
                                    <span class="icheck-inline">
                                        <input type="radio"  id="status1" class="md-input" name="status" value="1" data-md-icheck {if !(isset($Content_field->status) AND $Content_field->status==0)}{'checked'}{/if}>
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