<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {$title} - {$Contact.subject}
    </h3>
    <div class="uk-width-medium-2-3 uk-margin-top uk-margin-bottom">
        <a href="{site_url|con:ADMIN_PATH:'/contacts/contact-us/list-announce/'}" class="uk-button btn-breadcrumb">بازگشت</a>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-overflow-container">
                <div class="uk-width-medium-1-1 uk-margin-top">
                    <p>{$Contact.message}</p>
                    {if $Contact.attachment}
                        فایل پیوست: <br>
                        <a href="{site_url|con:'/upload/contacts/':$Contact.attachment}">{$Contact.attachment}</a>
                    {/if}
                    {if $Contact.seen_status eq 0}
                        <img src="{assets_url}/img/seen.jpg" class="seen_loader" />
                        <input type="hidden" value="{$Contact.id}" id="announce_id"/>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>