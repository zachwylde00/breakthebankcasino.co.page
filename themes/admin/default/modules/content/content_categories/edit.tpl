<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {($edit_mode) ? 'ویرایش دسته بندی' : 'افزودن دسته بندی'}
    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <form method="POST" action="" id="form_validation" class="uk-form-stacked" enctype="multipart/form-data">
                    <div data-uk-grid-margin="" class="uk-grid">
                        <div class="uk-width-medium-2-3">
                            <div class="uk-form-row">
                                <div class=" uk-margin-top">
                                    <label>عنوان دسته بندی </label>
                                    <input type="text" maxlength="60" id="input_counter " class="title {if  (NULL != form_error('name'))}{' md-input-danger '}{/if}input-count md-input" name="name" value="{set_value('name', (isset($Content_category->name)) ? $Content_category->name : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('name')}  
                                </span>

                                <div class="uk-margin-top">
                                    <label>آدرس لینک سئو</label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if (NULL != form_error('slug'))}{' md-input-danger '}{/if} input-count md-input slug" name="slug" value="{set_value('slug', (isset($Content_category->slug)) ? $Content_category->slug : '')}">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('slug')}  
                                </span>

                                <div class="uk-width-1-1">
                                    <div class="uk-form-file md-btn md-btn-primary">
                                        انتخاب عکس
                                        <input id="form-file" name="image" type="file">
                                    </div>
                                </div>
                                <div class="uk-margin-top">
                                    <label>توضیحات</label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if (NULL != form_error('description'))}{' md-input-danger '}{/if} input-count md-input" name="description" value="{set_value('description', (isset($Content_category->description)) ? $Content_category->description : '')}">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('description')}  
                                </span>


                                <div class="uk-margin-top">
                                    <label>دسته بندی والد</label>
                                    <div class="uk-width-medium-1-1" data-uk-grid-margin="">
                                        <select class="data-md-selectize" data-md-selectize-bottom="" name="parent_id">
                                            <option value="">انتخاب موضوعات</option>
                                            {foreach $categories as $val}
                                                <option value="{$val.id}" {if $edit_mode && $Content_category->parent_id == $val.id }selected{/if}>{$val.name}</option>
                                            {/foreach}
                                        </select>         
                                    </div>
                                </div>
                                <span class="error_page_content">
                                    {form_error('parent_id')}  
                                </span>

                                <div class="uk-margin-top">
                                    <label>نوع محتوای مرتبط</label>
                                    <div class="uk-width-medium-1-1" data-uk-grid-margin="">
                                        <select class="data-md-selectize" data-md-selectize-bottom="" name="content_type">
                                            <option value="">انتخاب نوع محتوا</option>
                                            {foreach $Content_types as $val}
                                                <option value="{$val.id}">{$val.name}</option>
                                            {/foreach}
                                        </select>         
                                    </div>
                                </div>
                                <span class="error_page_content">
                                    {form_error('content_type')}  
                                </span>

                                <div class="uk-margin-top">
                                    <label>قالب لیست دسته بندی ها</label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('list_tpl'))}{' md-input-danger '}{/if} input-count md-input" name="list_tpl" value="{set_value('list_tpl', (isset($Content_category->list_tpl)) ? $Content_category->list_tpl : '')}">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('list_tpl')}  
                                </span>
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