<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {'تنظیمات سیستم'}
    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <form method="POST" action="" id="form_validation" class="uk-form-stacked">
                    <div data-uk-grid-margin="" class="uk-grid">
                        <div class="uk-width-medium-2-3">
                            <div class="uk-form-row">
                                <div class="  uk-margin-top">
                                    <label>نام انگلیسی تیم </label>
                                    <input type="text" maxlength="60" id="input_counter" class="{if  (NULL != form_error('site_name'))}{' md-input-danger '}{/if}input-count md-input" name="en" value="{set_value('site_name', (isset($site_name)) ? $site_name : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('site_name')}  
                                </span>
                                <div class="  uk-margin-top">
                                    <label>نام فارسی تیم</label>
                                    <input type="text" id="input_counter" class="{if  (NULL != form_error('footer'))}{' md-input-danger '}{/if}input-count md-input" name="fa" value="{set_value('fa', (isset($footer)) ? $footer : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('footer')}  
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