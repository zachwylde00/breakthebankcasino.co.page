<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {($edit_mode) ? 'ویرایش صفحه' : 'افزودن صفحه'}
    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <form method="POST" action="" id="form_validation" class="uk-form-stacked">
                    <div data-uk-grid-margin="" class="uk-grid">
                        <div class="uk-width-medium-2-3">
                            <div class="uk-form-row">
                                <div class="uk-margin-top">
                                    <label>عنوان صفحه  </label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('name'))}{' md-input-danger '}{/if}input-count md-input title" name="name" value="{set_value('name', (isset($Page->name)) ? $Page->name : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('name')}  
                                </span>

                                <div class="uk-margin-top">
                                    <label>آدرس لینک سئو</label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if (NULL != form_error('slug'))}{' md-input-danger '}{/if} input-count md-input slug" name="slug" value="{set_value('slug', (isset($Page->slug)) ? $Page->slug : '')}">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('slug')}  
                                </span>

                                <div class="uk-margin-top uk-width-medium-1-1">
                                    <h3 class="heading_c">متن خلاصه صفحه</h3>
                                    <textarea type="text" class="ckeditor" name="short_description">{set_value('short_description', (isset($Page->short_description)) ? $Page->short_description : '')}</textarea>                                
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('short_description')}  
                                </span>

                                <div class="uk-margin-top uk-width-medium-1-1">
                                    <h3 class="heading_c">متن صفحه</h3>
                                    <textarea type="text" class="ckeditor" name="description">{set_value('description', (isset($Page->description)) ? $Page->description : '')}</textarea>                                
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('description')}  
                                </span>
                                <div class="{if  (NULL != form_error('compiler'))}{' md-input-danger '}{/if}md-input-wrapper uk-margin-top">
                                    <label>قالب متن </label>
                                    <select class="data-md-one-selectize" data-md-selectize-bottom="" name="compiler">
                                        <option value="none" {if isset($Page->compiler) and $Page->compiler == "none"} selected=""{/if}>متن ساده</option>
                                        <option value="smarty" {if isset($Page->compiler) and $Page->compiler == "smarty"} selected=""{/if}>موتور قالب اسمارتی</option>
                                     
                                    </select>                               
                                </div>
                                <span class="error_page_content">
                                    {form_error('compiler')}  
                                </span>


                                <div class="uk-margin-top">
                                    <label>فایل قالب</label>
                                    <input type="text" maxlength="60" id="input_counter" class="input-count md-input{if (NULL != form_error('tpl'))}{' md-input-danger '}{/if}" name="tpl" value="{set_value('tpl', (isset($Page->tpl)) ? $Page->tpl : '')}">
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('tpl')}  
                                </span>

                                <div class="uk-margin-top">
                                    <label>وضعیت</label>
                                    <span class="icheck-inline">
                                        <input type="radio" id="status0"     name="status" value="0" data-md-icheck {if (isset($Page->status) AND $Page->status==0)}{'checked'}{/if}>
                                        <label for="status0" class="inline-label">غیرفعال</label>
                                    </span>
                                    <span class="icheck-inline">
                                        <input type="radio"  id="status1" name="status" value="1" data-md-icheck {if !(isset($Page->status) AND $Page->status==0)}{'checked'}{/if}>
                                        <label for="status1" class="inline-label">فعال</label>
                                    </span>
                                </div>
                                <div class="uk-margin-top">
                                    <label>صفحه اصلی</label>
                                    <span class="icheck-inline">
                                        <input type="radio" id="is_home0" name="is_home" value="0" data-md-icheck {if (isset($Setting->value) AND isset($Page->id) AND $Setting->value != $Page->id)}{'checked'}{/if}>
                                        <label for="is_home0" class="inline-label">خیر</label>
                                    </span>
                                    <span class="icheck-inline">
                                        <input type="radio"  id="is_home1"  name="is_home" value="1" data-md-icheck {if (isset($Setting->value) AND isset($Page->id) AND $Setting->value == $Page->id)}{'checked'}{/if}>
                                        <label for="is_home1" class="inline-label">بله</label>
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