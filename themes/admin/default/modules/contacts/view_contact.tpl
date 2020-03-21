<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {$title} - {$Contact.subject}
    </h3>
    <div class="uk-width-medium-2-3 uk-margin-top uk-margin-bottom">
        <a href="{site_url|con:ADMIN_PATH:'/contacts/contact-us'}" class="uk-button btn-breadcrumb">بازگشت</a>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-overflow-container">
                <div class="uk-width-medium-1-1 uk-margin-top">
                    <label class="uk-text-italic uk-text-muted">ایمیل تماس گیرنده: {$Contact.email}</label><hr>
                    <p>{$Contact.message}</p>
                    {if $Contact.attachment}
                        فایل پیوست: <br>
                        <a href="{site_url|con:'/upload/contacts/':$Contact.attachment}">{$Contact.attachment}</a>
                    {/if}
                    {if $Contact.seen_status_contact eq 0}
                        <img src="{assets_url}/img/seen.jpg" class="seen_loader_contact" />
                        <input type="hidden" value="{$Contact.id}" id="contact_id"/>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>