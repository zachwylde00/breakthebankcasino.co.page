<div class="uk-form-row">
    <div class="uk-margin-top">
        <input type="checkbox" name="required-enum" data-switchery checked id="required-enum"/>
        <label for="required-enum" class="inline-label">ضروری</label>
    </div>
    <span class="error_page_content">
        {form_error('required-enum')}  
    </span>
</div>
<div class="uk-form-row">
    <div class="uk-margin-top">
        <label>مقادیر(با , جدا کنید)</label>
        <select name="options[]" class="data-md-tag-selectize" data-md-selectize-bottom multiple>
        </select>
        <div id="input_counter_counter" class="text-count-wrapper">
        </div><span class="md-input-bar"></span>
    </div>
    <span class="error_page_content">
        {form_error('options')}  
    </span>
</div>