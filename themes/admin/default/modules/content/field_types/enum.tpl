<div class="uk-width-medium-1-2">
    <div class="uk-margin-top">
        <label>{$field.fieldName}</label>{if $options.required}<em>*</em>{/if}
        <select type="text" class="{if  (NULL != form_error($field.fieldSlug))}md-input-danger {/if} data-md-one-selectize" name="{$field.fieldSlug}" value="{set_value($field.fieldSlug, $field.value)}" >
            {if $options.required}
                <option disabled selected>یکی از موارد را انتخاب کنید</option>
            {/if}
            {foreach from=$options.options item=option}
                <option value="{$option}" {if $option == $field.value}selected{/if}>{$option}</option>
            {/foreach}
        </select>
    </div>
    <span class="error_page_content">
        {$field.errorMessage}
    </span>
</div>