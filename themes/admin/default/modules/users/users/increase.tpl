<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {$title}
    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            {form_open(null)}
            <div class="uk-width-1-1 ">
                <div data-uk-grid-margin="" class="uk-grid">
                    <div class="uk-width-medium-1-2">
                        <div class="uk-form-row">
                            <div class=" uk-margin-top">
                                <label>مبلغ</label>
                                <input type="text" maxlength="60" id="input_counter" class="input-count md-input" name="amount">
                                <div id="input_counter_counter" class="text-count-wrapper">
                                </div><span class="md-input-bar"></span>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-1-2">
                        <div class="uk-form-row">
                            <div class=" uk-margin-top">
                                <label>شرح تراکنش</label>
                                <input type="text" class="input-count md-input" name="desc">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="uk-width-medium-1-4">
                <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>ذخیره</span></button>
            </div>
            {form_close()}
        </div>
    </div>
</div>