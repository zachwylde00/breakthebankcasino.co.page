<div id="page_content_inner">
    <h3 class="heading_a title-top">{$title}</h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content uk-grid uk-grid-width-medium-1-2">
            {if !empty($types)}
                {foreach from=$types item=val}
                    <div class="uk-width-medium-1-4">
                        <div class="md-card" style="min-height: 172px;">
                            <div class="md-card-content uk-text-center">
                                <h4 class="heading_b">{$val->name}</h4>
                            </div>
                            <div class="md-card-overlay-content">
                                <a class="md-btn md-btn-flat md-btn-success uk-width-medium-1-1 uk-margin-small" href="{site_url({ADMIN_PATH|con:"/content/entries/":$val.slug})}">لیست {$val->name}</a>
                                <a class="md-btn md-btn-flat md-btn-success uk-width-medium-1-1 uk-margin-small" href="{site_url({ADMIN_PATH|con:"/content/entries/":$val.slug:"/add"})}">افزودن {$val->name} جدید</a>
                            </div>
                        </div>
                    </div>
                {/foreach}
            {else}
                <div class="uk-width-medium-1-1">
                    <div class="md-card" style="min-height: 172px;">
                        <div class="md-card-content">
                            <div data-uk-alert="" class="uk-alert uk-alert-large">
                                <a class="uk-alert-close uk-close" href="#"></a>
                                <h4 class="heading_b">{lang package="content" string="no content type exists title"}</h4>
                                {lang package="content" string="no content type exists"}
                                <a class="md-btn md-btn-flat md-btn-success uk-width-medium-1-1 uk-margin-small" href="{site_url({ADMIN_PATH|con:"/content/content-types/add"})}">افزودن نوع محتوا</a>
                            </div>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>