<div class="uk-form-row">
    <div class="uk-margin-top">
        <input type="checkbox" name="required-enum" data-switchery checked id="required-enum"/>
        <label for="required-enum" class="inline-label">ضروری</label>
    </div>
    <span class="error_page_content">
        {form_error('required-enum')}  
    </span>
</div>
<div class="uk-margin-top">
    <h3 class="heading_c">ویرایشگر متن</h3>
    <div data-uk-grid-margin="" class="uk-grid">
        <span class="icheck-inline">
            <input type="radio" id="status0" name="editor" value="0" data-md-icheck {if !(isset($Entry->status) AND $Entry->status==0)}{'checked'}{/if}>
            <label for="status0" class="inline-label">غیرفعال</label>
        </span>
        <span class="icheck-inline">
            <input type="radio" id="status1" name="editor" value="1" data-md-icheck {if !(isset($Entry->status) AND $Entry->status==0)}{'checked'}{/if}>
            <label for="status1" class="inline-label">CKEditor</label>
        </span>
    </div>
    <span class="error_page_content">
        {form_error('editor')}  
    </span>
</div>