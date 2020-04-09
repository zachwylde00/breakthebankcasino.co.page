<aside id="sidebar_main">
    <a href="#" class="uk-close sidebar_main_close_button"></a>
    <div class="sidebar_main_header">
        <div class="sidebar_logo">
            <a href="{site_url(ADMIN_PATH)}"><img src="http://www.richbet.xyz/assets/default/TkStarBet2018/images/main_logo1.png" alt="" height="35" width="130"/></a>
        </div>
    </div>
    <div class="menu_section">
        {module 
            name="menu"
            method="getFormatted"
            group="admin_side"
            li_active_class="act_item"
            icon="1"
            icon_tag="span"
            icon_position="before"
            icon_default_class="menu_icon uk-icon-envelope-o"
        }
    </div>
</aside> 