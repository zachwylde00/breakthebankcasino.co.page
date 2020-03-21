<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {($edit_mode) ? 'ویرایش تصویر ' : 'افزودن تصویر '}
    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <form method="POST" action="" id="form_validation" class="uk-form-stacked" enctype="multipart/form-data">
                    <div data-uk-grid-margin="" class="uk-grid">
                        <div class="uk-width-medium-2-3">
                            <div class="uk-form-row">
                                <div class="uk-margin-top">
                                    فایل تصویر
                                    <div class="uk-form-file">
                                        <button class="md-btn md-btn-primary">انتخاب تصویر</button>
                                        <input type="file" name="image" id="form-file">                                    {if isset($Slider->image) AND $Slider.image != ''}<img src="{site_url|con:'upload/slider/':$Slider.image}" width='150'/>{/if}
                                    </div>
                                </div>
                                <span class="error_page_content">
                                    {form_error('image')}  
                                </span>
                                <div class=" uk-margin-top">
                                    <label>عنوان تصویر </label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('subtitle'))}{' md-input-danger '}{/if}input-count md-input" name="subtitle" value="{set_value('subtitle', (isset($Slider->subtitle)) ? $Slider->subtitle : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('subtitle')}  
                                </span>

                                <div class=" uk-margin-top">
                                    <label>شرح تصویر </label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('describtion'))}{' md-input-danger '}{/if}input-count md-input" name="describtion" value="{set_value('describtion', (isset($Slider->describtion)) ? $Slider->describtion : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('describtion')}  
                                </span>

                                <div class=" uk-margin-top">
                                    <label>پیوند اسلایدر</label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('link'))}{' md-input-danger '}{/if}input-count md-input" name="link" value="{set_value('link', (isset($Slider->link)) ? $Slider->link : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('link')}  
                                </span>

                                <div class=" uk-margin-top">
                                    <label>وضعیت</label>
                                    <span class="icheck-inline">
                                        <input type="radio" id="status0" name="status" value="0" data-md-icheck {if (isset($Slider->status) AND $Slider->status==0)}{'checked'}{/if}>
                                        <label for="status0" class="inline-label">غیرفعال</label>
                                    </span>
                                    <span class="icheck-inline">
                                        <input type="radio"  id="status1" name="status" value="1" data-md-icheck {if !(isset($Slider->status) AND $Slider->status==1)}{'checked'}{/if}>
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