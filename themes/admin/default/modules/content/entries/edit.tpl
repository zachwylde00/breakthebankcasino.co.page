<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {($edit_mode) ? 'ویرایش  پست' : 'افزودن پست '}
    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <form method="POST" action="" id="form_validation" class="uk-form-stacked" enctype="multipart/form-data">
                    <div data-uk-grid-margin="" class="uk-grid">
                        <div class="uk-width-medium-1-2">
                            <div class="uk-margin-top">
                                <label>عنوان</label>
                                <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('title'))}md-input-danger {/if}input-count md-input title" name="title" value="{set_value('title', (isset($Entry->title)) ? $Entry->title : '')}" >
                                <div id="input_counter_counter" class="text-count-wrapper">
                                </div><span class="md-input-bar"></span>
                            </div>
                            <span class="error_page_content">
                                {form_error('title')}  
                            </span>

                            <div class="uk-margin-top">
                                <label>آدرس لینک سئو</label>
                                <input type="text" maxlength="60" id="input_counter" class="{if isset($Entry->slug)}md-input-filled {/if}input-count md-input slug" name="slug" value="{set_value('slug', (isset($Entry->slug)) ? $Entry->slug : '')}">
                                <div id="input_counter_counter" class="text-count-wrapper">
                                </div><span class="md-input-bar"></span>
                            </div>
                            <span class="error_page_content">
                                {form_error('slug')}  
                            </span>

                            {if $Content_type->id == 14}

                                <div class="uk-margin-top">
                                    <label>لینک تبلیغ</label>
                                    <input type="text" id="link_blank" class="{if isset($Entry->blank_link)}md-input-filled {/if}md-input" name="blank_link" value="{set_value('blank_link', (isset($Entry->blank_link)) ? $Entry->blank_link : '')}" {if !isset($Entry->blank_link)}disabled=""{/if} style="direction: ltr;">

                                    <p>
                                        <input type="checkbox"  value="1" {if isset($Entry) and $Entry->blank_link != NULL}{'checked'}{/if}  id="target_blank" data-md-icheck />
                                        <label for="target_blank" class="inline-label">لینک به بیرون از سایت</label>
                                    </p>
                                </div>
                                <span class="error_page_content">
                                    {form_error('link')}  
                                </span>

                            {else if $Content_type->id != 17}
                                <div class="uk-margin-top">
                                    <h3 class="heading_c">موضوعات</h3>
                                    <div class="uk-width-medium-1-1" data-uk-grid-margin="">
                                        <select class="data-md-closable-selectize" data-md-selectize-bottom="" name="categories[]" multiple>
                                            <option value="">انتخاب موضوعات</option>
                                            {foreach $Content_categories as $categiry}
                                                <option value="{$categiry.id}"{if isset($Entry) && $Entry->categories->contains($categiry.id) } selected{/if}>{$categiry.name}</option>
                                            {/foreach}
                                        </select>         
                                    </div>
                                </div>
                                <span class="error_page_content">
                                    {form_error('categories[]')}  
                                </span>
                            {/if}
                        </div>
                        <div class="uk-width-medium-1-2">
                            <div class="uk-margin-top">
                                <label>کلمات کلیدی</label>
                                <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('keyword'))}md-input-danger {/if}input-count md-input" name="keyword" value="{set_value('keyword', (isset($Entry->keyword)) ? $Entry->keyword : '')}">
                                <div id="input_counter_counter" class="text-count-wrapper">
                                </div><span class="md-input-bar"></span>
                            </div>
                            <span class="error_page_content">
                                {form_error('keyword')}  
                            </span>

                            <div class="uk-margin-top">
                                {if $Content_type->id == 17}
                                    <label>لینک اینترنتی برند</label>
                                {else}
                                    <label>توضیحات</label>
                                {/if}
                                <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('description'))}md-input-danger {/if}input-count md-input" name="description" value="{set_value('description', (isset($Entry->description)) ? $Entry->description : '')}">
                                <div id="input_counter_counter" class="text-count-wrapper">
                                </div><span class="md-input-bar"></span>
                            </div>
                            <span class="error_page_content">
                                {form_error('description')}  
                            </span>
                            <div class="uk-margin-top">
                                {if isset($Entry->keyword) AND $Entry.image != ''}<img width="200" src="{site_url|con:'upload/content/entry/':$Entry.image}" />{/if}
                                <div class="uk-form-file">
                                    <button class="md-btn md-btn-primary">انتخاب عکس</button>
                                    <input type="file" name="image" id="form-file">
                                    عکس را انتخاب کنید
                                </div>
                            </div>
                            <span class="error_page_content">
                                {form_error('error')}  
                            </span>
                            <div class="uk-margin-top">
                                <h3 class="heading_c">وضعیت</h3>
                                <div class="uk-grid" data-uk-grid-margin="">
                                    <span class="icheck-inline">
                                        <input type="radio" id="status1" name="status" value="1" data-md-icheck {if !(isset($Entry->status) AND $Entry->status==0)}{'checked'}{/if}>
                                        <label for="status1" class="inline-label">فعال</label>
                                    </span>
                                    <span class="icheck-inline">
                                        <input type="radio" id="status0" name="status" value="0" data-md-icheck {if (isset($Entry->status) AND $Entry->status==0)}{'checked'}{/if}>
                                        <label for="status0" class="inline-label">غیرفعال</label>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="uk-margin-top uk-width-medium-1-1">
                            <h3 class="heading_c">متن خلاصه</h3>
                            <textarea type="text" class="ckeditor" name="short_story">{set_value('short_story', (isset($Entry->short_story)) ? $Entry->short_story : '')}</textarea>
                            <div id="input_counter_counter" class="text-count-wrapper">
                            </div><span class="md-input-bar"></span>
                        </div>
                        <span class="error_page_content">
                            {form_error('short_tpl')}  
                        </span>
                        <div class="uk-margin-top uk-width-medium-1-1">
                            <h3 class="heading_c">متن کامل</h3>
                            <textarea type="text" class="ckeditor" name="full_story">{set_value('full_story', (isset($Entry->full_story)) ? $Entry->full_story : '')}</textarea>                                
                            <div id="input_counter_counter" class="text-count-wrapper">
                            </div><span class="md-input-bar"></span>
                        </div>
                        <span class="error_page_content">
                            {form_error('full_story')}  
                        </span>
                        {if $Extra_fields->count() > 0}
                            <div class="uk-margin-top uk-width-medium-1-1">
                                <h3 class="heading_c">فیلد های اضافی</h3>
                                <div class="uk-grid" data-uk-grid-margin="">

                                    {foreach $Extra_fields as $extField}
                                        {$extField->getFormFieldHTML()}
                                    {/foreach}
                                </div>
                            </div>
                        {/if}

                    </div>
                    <div class="uk-width-small-1-1 uk-text-left">
                        <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>ذخیره</span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>