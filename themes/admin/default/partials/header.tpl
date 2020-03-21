<!doctype html>
<!--[if lte IE 9]> <html class="lte-ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="en"> <!--<![endif]-->

    <head>
        <meta charset="UTF-8">
        <!-- Controller Defined Stylesheets -->
        <script type="text/javascript">
            var ADMIN_PATH = '{ADMIN_PATH}';
            var ADMIN_URL = '{site_url(ADMIN_PATH)}';
            var SITE_URL = '{site_url()}';
            var asset_url = '{assets_url}';
        </script>
        <title>داشبورد مدیریتی-{$title}</title>

        <link rel="stylesheet" href="{assets_url}/bower_components/codemirror/lib/codemirror.css">

        <link rel="stylesheet" href="{assets_url}/bower_components/uikit/css/uikit.almost-flat.min.css" media="all">

        <link rel="stylesheet" href="{assets_url}/icons/flags/flags.min.css" media="all">
        <link rel="stylesheet" href="{assets_url}/bower_components/jquery.craftpip_confirmbox/css/jquery-confirm.css" media="all">
        <link rel="stylesheet" href="{assets_url}/bower_components/pwt.datepicker/dist/css/persian-datepicker-0.4.5.min.css" media="all">

        <link rel="stylesheet" href="{assets_url}/css/main.min.css" media="all">
        <link rel="stylesheet" href="{assets_url}/css/rtl/style.css"/>

        {header_css}
    </head>
    <body class="sidebar_main_open">

        <header id="header_main">
            <div class="header_main_content">
                <nav class="uk-navbar">

                    <a href="#" id="sidebar_main_toggle" class="sSwitch sSwitch_right">
                        <span class="sSwitchIcon"></span>
                    </a>

                    <a href="#" id="sidebar_secondary_toggle" class="sSwitch sSwitch_right sidebar_secondary_check">-->
                        <span class="sSwitchIcon"></span>
                    </a>
                    <div class="uk-navbar-flip">
                        <ul class="uk-navbar-nav user_actions">
                            {if $is_admin}
                                <li data-uk-dropdown="{*mode:'click'*}">
                                    <a href="#" class="user_action_icon"><i class="material-icons md-24 md-light">&#xE80B;</i><span class="uk-badge">{$contact_us_count}</span></a>
                                    <div class="uk-dropdown uk-dropdown-xlarge uk-dropdown-flip uk-dropdown-scrollable">
                                        <label>
                                            تماس کاربران
                                        </label>
                                        <hr>
                                        <ul class="md-list md-list-addon">
                                            {foreach from=$contact_us item=val}
                                                {if $val.seen_status_contact eq 0}
                                                    <li>
                                                        <div class="md-list-addon-element">
                                                            <i class="md-list-addon-icon material-icons uk-text-warning">&#xE8B2;</i>
                                                        </div>
                                                        <div class="md-list-content"  style="direction:rtl;text-align: right">
                                                            <a href="{site_url|con:ADMIN_PATH:'/contacts/contact-us/view-contact/':$val.id}">
                                                                <span style="float:right" class="md-list-heading">{$val.subject}</span>

                                                            </a>
                                                            <p style="float:right" >{$val.message}</p>
                                                            {if $val.attachment}
                                                                <a href="{site_url|con:'/upload/contacts/':$val.attachment}">{$val.attachment}</a>
                                                            {/if}
                                                        </div>
                                                    </li>
                                                {/if}
                                            {/foreach}
                                            <hr>
                                            <a href="{site_url|con:ADMIN_PATH:'/contacts/contact-us'}">لیست همه تماس ها</a>
                                        </ul>
                                    </div>
                                </li>
                            {/if}
                            <li data-uk-dropdown="{*mode:'click'*}">
                                <a href="#" class="user_action_icon"><i class="material-icons md-24 md-light">&#xE159;</i><span data-badge="{$ticket_unread_count}" class="ticket-badge uk-badge">{$ticket_unread_count}</span></a>
                                <div class="uk-dropdown uk-dropdown-xlarge uk-dropdown-flip uk-dropdown-scrollable">
                                    <label>
                                        تیکت ها
                                    </label>
                                    <hr>
                                    <ul class="md-list md-list-addon">
                                        {foreach from=$site_Contacts item=val}
                                            {if $val.status eq 0}
                                                <li id="ticket_id_{$val.id}">
                                                    <div class="md-list-addon-element">
                                                        <i class="md-list-addon-icon material-icons uk-text-warning">&#xE8B2;</i>
                                                    </div>
                                                    <div class="md-list-content" style="direction:rtl;text-align: right">
                                                        <a href="{site_url|con:ADMIN_PATH:'/contacts/tickets/view-ticket/':$val.id}">
                                                            <span class="md-list-heading">{$val.subject}</span>

                                                        </a>
                                                        <br>
                                                        <p>{$val.content}</p>
                                                    </div>
                                                </li>
                                            {/if}
                                        {/foreach}
                                        <hr>
                                        <a href="{site_url|con:ADMIN_PATH:'/contacts/contact-us/list-announce'}">لیست همه تیکت ها</a>
                                    </ul>
                                </div>
                            </li>
                            <li data-uk-dropdown="{*mode:'click'*}">
                                <a href="#" class="user_action_image"><img class="md-user-image" src="{assets_url}/img/avatars/user.png" alt=""/></a>
                                <div class="uk-dropdown uk-dropdown-small uk-dropdown-flip">
                                    <ul class="uk-nav js-uk-prevent">
                                        <li class="text-right"><a href="{site_url('panel/users/logout')}">خروج</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#" id="main_search_btn" class="user_action_icon"><i class="material-icons md-24 md-light">&#xE8B6;</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        {include file="partials/sidebar.tpl"}
