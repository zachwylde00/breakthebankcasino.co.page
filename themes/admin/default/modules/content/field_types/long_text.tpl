<div class="uk-width-medium-1-2">
    <div class="uk-margin-top">
        {if $options.editor == 'ckeditor'}
            <h3 class="heading_c">{$field.fieldName}{if $options.required}<em>*</em>{/if}</h3>
        {else}
            <label>{$field.fieldName}{if $options.required}<em>*</em>{/if}</label>
        {/if}
        
        <textarea class="{if  (NULL != form_error($field.fieldSlug))}md-input-danger {/if}md-input{if $options.editor == 'ckeditor'} ckeditor{/if}" name="{$field.fieldSlug}">{set_value($field.fieldSlug, $field.value)}</textarea>
        <div id="input_counter_counter" class="text-count-wrapper">
        </div>
        <span class="md-input-bar"></span>
    </div>
    <span class="error_page_content">
        {$field.errorMessage}
    </span>
</div>