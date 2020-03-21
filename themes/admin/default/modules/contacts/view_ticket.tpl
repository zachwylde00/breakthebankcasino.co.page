<div id="page_content_inner" style="padding-bottom: 0!important; ">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {$title} - {$Contact.subject}
    </h3>
    <div class="uk-width-medium-2-3 uk-margin-top uk-margin-bottom">
        <a href="{site_url|con:ADMIN_PATH:'/contacts/tickets/ticket-list/'}" class="uk-button btn-breadcrumb">بازگشت</a>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-overflow-container">
                <div class="uk-width-medium-1-1 uk-margin-top">
                    <p class="text-danger uk-text-italic">
                        ارسال کننده: 
                        <a href="{site_url|con:ADMIN_PATH:'/bets/bets/view/':$Contact.user.id}">{$Contact.user.first_name} {$Contact.user.last_name}</a>
                    </p>
                    <p>{$Contact.content}</p>
                    {if $Contact.status eq 0}
                        <img src="{assets_url}/img/seen.jpg" class="seen_loader_ticket" id="saeednavaro" />
                        <input type="hidden" value="{$Contact.id}" id="ticket_id"/>
                    {/if}
                </div>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-overflow-container">
                <div class="uk-width-medium-1-1 uk-margin-top">
                    {foreach $Contact.replies as $key => $reply}
                        {$key+1})
                        <label class="uk-text-primary">{$reply.user.first_name} {$reply.user.last_name}</label>
                        <p>{$reply.content}</p>
                        <hr>
                    {/foreach}
                </div>
            </div>
        </div>
    </div>
</div>
{if $logged_in_user_id != $Contact.from}
    <div id="page_content_inner">
        <h3 class="heading_a title-top uk-margin-small-bottom">
            ارسال پاسخ
        </h3>
        <div class="md-card uk-margin-medium-bottom">
            <div class="md-card-content">
                <div class="uk-width-1-1 ">
                    <form method="POST" action="{$action}" id="form_validation" class="uk-form-stacked" enctype="multipart/form-data">
                        <div data-uk-grid-margin="" class="uk-grid">
                            <div class="uk-width-medium-2-3">
                                <div class="uk-form-row">
                                    <div class="uk-margin-top">
                                        <label>عنوان پیام  <span class="text-danger"> *</span></label>
                                        <input type="text" maxlength="150" id="input_counter" class="{if  (NULL != form_error('subject'))}{' md-input-danger '}{/if}input-count md-input title" name="subject" value="{if strpos($Contact.subject, "پاسخ:: ") === false}{'پاسخ:: '|con:$Contact.subject:' : '}{else}{$Contact.subject}{/if}" >
                                        <div id="input_counter_counter" class="text-count-wrapper">
                                        </div><span class="md-input-bar"></span>
                                    </div>
                                    <span class="error_page_content">
                                        {form_error('subject')}  
                                    </span>

                                    <div class="uk-margin-top uk-width-medium-1-1">
                                        <h3 class="heading_c">متن پیام<span class="text-danger"> *</span></h3>
                                        <textarea type="text" class="ckeditor" name="content">{set_value('content')}</textarea>                                
                                        <div id="input_counter_counter" class="text-count-wrapper">
                                        </div><span class="md-input-bar"></span>
                                    </div>
                                    <span class="error_page_content">
                                        {form_error('content')}  
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="uk-width-medium-1-4">
                            <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>ارسال</span></button>
                            <a  href="{site_url()|con:ADMIN_PATH}" class="md-btn md-btn-flat md-btn-danger btn-list"><span>انصراف</span></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
{/if}