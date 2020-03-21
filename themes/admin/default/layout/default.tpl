
{include file="partials/header.tpl"}
<div id="page_content">

    {if ($system_message != '')}
        <div class="page_content_inner" style="margin: 0px auto; width: 96%;">
            <div class="md-card uk-margin-medium-bottom">
                <div class="heading_a title-top uk-margin-small-bottom 
                     {if $system_message['type'] eq 'success' }
                         {'msgsuccess'}
                     {elseif $system_message['type'] eq 'warning'}
                         {'msgwarning'}
                     {elseif $system_message['type'] eq 'fail'} 
                         {'msgerror'}
                     {/if}
                     ">

                    <div class="msg-grid-title no-border">
                        <h4 style="margin-bottom: 22px; margin-top: 59px;"><i class="fa fa-
                               {if $system_message['type'] eq 'success' }
                                   {'check-square-o'}
                               {elseif $system_message['type'] eq 'warning'}
                                   {'warning'}
                               {elseif $system_message['type'] eq 'fail'} 
                                   {'remove'}
                               {/if}
                               fa-2x" style="vertical-align: middle;"></i>
                            <span class="semi-bold" style="padding-top: 9px ! important; font-size: 13px; border-bottom: 4px dashed rgb(221, 221, 221); margin-bottom: 9px ! important;">{$system_message['title']}</span>
                        </h4>

                    </div>
                    <div class="grid-body no-border"> 
                        <p> {$system_message['message']}</p>
                    </div>
                </div>
            </div>

        </div>
    {/if}
    {$content}
</div>
{include file="partials/footer.tpl"}