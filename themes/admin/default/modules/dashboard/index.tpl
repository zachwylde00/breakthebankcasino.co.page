<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-bottom">{$title}</h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <p>&#1576;&#1607; &#1583;&#1588;&#1576;&#1608;&#1585;&#1583; &#1605;&#1583;&#1740;&#1585;&#1740;&#1578;&#1740; {setting name="site_name"} &#1582;&#1608;&#1588; &#1570;&#1605;&#1583;&#1740;&#1583;</p>
            <p>&#1576;&#1585;&#1575;&#1740; &#1575;&#1587;&#1578;&#1601;&#1575;&#1583;&#1607; &#1575;&#1586; &#1575;&#1605;&#1705;&#1575;&#1606;&#1575;&#1578; &#1662;&#1606;&#1604;  &#1548; &#1575;&#1586; &#1605;&#1606;&#1608;&#1740; &#1705;&#1606;&#1575;&#1585;&#1740; &#1575;&#1587;&#1578;&#1601;&#1575;&#1583;&#1607; &#1705;&#1606;&#1740;&#1583;.</p>
        </div>
    </div>

    <h4 class="heading_c">&#1570;&#1582;&#1585;&#1740;&#1606; &#1585;&#1582; &#1583;&#1575;&#1583;&#1607;&#1575;</h4>
    {literal}
        <div class="uk-grid uk-grid-medium" data-uk-grid-margin data-uk-grid-match="{target:'.md-card'}">
        {/literal}
        <div class="uk-width-medium-1-3">
            <div class="md-card">
                <div class="md-card-content">
                    <h4>
                        <i class="uk-icon-users uk-icon-small .uk-icon-justify uk-text-success"></i>
                        ({$notif.users|persian_number}) &#1605;&#1580;&#1605;&#1608;&#1593; &#1705;&#1575;&#1585;&#1576;&#1585;&#1575;&#1606; 
                    </h4>
                    <a href="{site_url()|con:ADMIN_PATH}/users">&#1605;&#1588;&#1575;&#1607;&#1583;&#1607; &#1604;&#1740;&#1587;&#1578; &#1705;&#1575;&#1585;&#1576;&#1585;&#1575;&#1606;</a>
                </div>
            </div>
        </div>
        <div class="uk-width-medium-1-3">
            <div class="md-card">
                <div class="md-card-content">
                    <h4>
                        <i class="uk-icon-money uk-icon-small .uk-icon-justify uk-text-success"></i>
                        {$notif.variziEmroz|price_format} &#1605;&#1580;&#1605;&#1608;&#1593; &#1608;&#1575;&#1585;&#1740;&#1586;&#1740; &#1607;&#1575;&#1740; &#1575;&#1605;&#1585;&#1608;&#1586;&#8204;
                    </h4>
                    <a href="{site_url()|con:ADMIN_PATH}/payment/transactions/credit">&#1605;&#1588;&#1575;&#1607;&#1583;&#1607; &#1604;&#1740;&#1587;&#1578; &#1578;&#1585;&#1575;&#1705;&#1606;&#1588;&#8204;&#1607;&#1575;</a>
                </div>
            </div>
        </div>
        <div class="uk-width-medium-1-3">
            <div class="md-card">
                <div class="md-card-content">
                    <h4>
                        <i class="uk-icon-money uk-icon-small .uk-icon-justify uk-text-success"></i>
                        {$notif.sumCashUsers|price_format} &#1605;&#1580;&#1605;&#1608;&#1593; &#1605;&#1608;&#1580;&#1608;&#1583;&#1740; &#1705;&#1575;&#1585;&#1576;&#1585;&#1575;&#1606;
                    </h4>
                </div>
            </div>
        </div>
        <div class="uk-width-medium-1-3">
            <div class="md-card">
                <div class="md-card-content">
                    <h4>
                        <i class="uk-icon-money uk-icon-small .uk-icon-justify uk-text-success"></i>
                        {$notif.bardashti|price_format} &#1605;&#1580;&#1605;&#1608;&#1593; &#1576;&#1585;&#1583;&#1575;&#1588;&#1578;&#1740;&#8204;&#1607;&#1575;&#1740; &#1705;&#1575;&#1585;&#1576;&#1585;&#1607;&#1575;
                    </h4>
                    <a href="{site_url()|con:ADMIN_PATH}/payment/transactions/withdraw">&#1605;&#1588;&#1575;&#1607;&#1583;&#1607; &#1604;&#1740;&#1587;&#1578; &#1578;&#1585;&#1575;&#1705;&#1606;&#1588;&#8204;&#1607;&#1575;</a>
                </div>
            </div>
        </div>
    </div>
</div>
