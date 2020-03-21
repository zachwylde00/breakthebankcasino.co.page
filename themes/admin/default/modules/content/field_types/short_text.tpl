<div class="uk-width-medium-1-2">
    <div class="uk-margin-top">
        <label>{$field.fieldName}</label>
        <input type="text" class="{if  (NULL != form_error($field.fieldSlug))}md-input-danger {/if} md-input" name="{$field.fieldSlug}" value="{set_value($field.fieldSlug, $field.value)}" >
        <div id="input_counter_counter" class="text-count-wrapper">
        </div>
        <span class="md-input-bar"></span>
    </div>
    <span class="error_page_content">
        {form_error($field.fieldSlug)}  
    </span>
</div>