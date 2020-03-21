<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {$title}
    </h3>
    <div class="uk-width-medium-2-3 uk-margin-top uk-margin-bottom">
        <a href="{site_url|con:ADMIN_PATH:'/content/comments'}" class="uk-button btn-breadcrumb">بازگشت</a>

        {if $Cm.status == 0 }
            <label class="uk-text-primary">
                <a class="md-btn md-btn-success md-btn-small" href="{site_url({ADMIN_PATH|con:'/content/comments/toggleStatus/' : $Cm->id})}">تایید و انتشار</a>
            </label>
        {/if}
        {if $Cm.status == 1}
            <label class="uk-text-primary">
                <a class="md-btn md-btn-danger md-btn-small" href="{site_url({ADMIN_PATH|con:'/content/comments/toggleStatus/' : $Cm->id})}">عدم انتشار</a>
            </label>
        {/if}
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-overflow-container">
                <div class="uk-width-medium-1-1 uk-margin-top">
                    <p class="">
                        ارسال کننده: 
                        <label class="uk-text-primary"> 
                            <a href="{site_url({ADMIN_PATH|con:'/users/users/edit/':$Cm.user.id})}">{$Cm.user.first_name} {$Cm.user.last_name}</a>
                        </label>
                        | 
                        تاریخ ثبت:
                        <label class="uk-text-primary"> {jdate form='h:i a j F Y' date=$Cm.created_at}</label>

                    </p>
                    <p>{$Cm.comment}</p>
                </div>
            </div>
        </div>
    </div>
</div>