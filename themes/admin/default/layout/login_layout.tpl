<!doctype html>
<!--[if lte IE 9]> <html class="lte-ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="en"> <!--<![endif]-->
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="icon" type="image/png" href="{assets_url}/img/favicon-16x16.png" sizes="16x16">
        <link rel="icon" type="image/png" href="{assets_url}/img/favicon-32x32.png" sizes="32x32">
        <title>{$title}</title>

        <link rel="stylesheet" href="{assets_url}/bower_components/uikit/css/uikit.almost-flat.min.css"/>


        <link rel="stylesheet" href="{assets_url}/css/login_page.min.css"/>
        <link rel="stylesheet" href="{assets_url}/css/rtl/style.css"/>
    </head>
    <body class="login_page">

        {if ($system_message != '')}
            <div class="page_content_inner uk-width-medium-2-4" style="margin: 0px auto;">
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
                                <span class="semi-bold" style="padding-top: 9px ! important; font-size: 13px; border-bottom: 4px dashed rgb(221, 221, 221); margin-bottom: 9px ! important;font-family: mirooklight">{$system_message['title']}</span>
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

        <script src="{assets_url}/js/common.min.js"></script>

        <script src="{assets_url}/js/altair_admin_common.min.js"></script>

        <script src="{assets_url}/js/pages/login_page.min.js"></script>
    </body>

</html>