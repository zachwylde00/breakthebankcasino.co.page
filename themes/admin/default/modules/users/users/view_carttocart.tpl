<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
    کارت به کارت ها
        </h3>
    <div class="uk-width-medium-2-3 uk-margin-top uk-margin-bottom">
        <a href="{site_url|con:ADMIN_PATH:'/users/users/carttocart'}" class="uk-button btn-breadcrumb">بازگشت</a>
        <a href="{site_url|con:ADMIN_PATH:'/users/users/carttocart-status/':$Row.id}" class="uk-button btn-{if $Row.status eq 1}danger{else}success{/if}">ثبت بعنوان {$status_label}</a>
        {if $Row.status eq 0}
            <a href="{site_url|con:ADMIN_PATH:'/users/users/carttocart-status-q/':$Row.id}" class="uk-button btn-primary">در صف پرداخت </a>
        {/if}
    </div>
</div>