<div class="uk-width-medium-1-2">
    <div class="uk-margin-top">
        {if !$new AND $field.value != ''}<img src='{$field.value}' />{/if}
        <div class="uk-form-file">
            <button class="md-btn md-btn-primary">انتخاب عکس</button>
            <input type="file" name="{$field.fieldSlug}" id="form-file">
            {$field.fieldName} را انتخاب کنید
        </div>
    </div>
    <span class="error_page_content">
        {form_error($field.fieldSlug)}  
    </span>
</div>