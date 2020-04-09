<div id="page_content_inner">
    <h3 class="heading_a title-top">{$title}</h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">شناسه داخلی تراکنش</th>
                        <th class="sorting">کاربر</th>
                        <th class="sorting">مبلغ پرداختی</th>
                        <th class="sorting">تاریخ ثبت</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">شناسه داخلی تراکنش</th>
                        <th class="sorting">کاربر</th>
                        <th class="sorting">مبلغ پرداختی</th>
                        <th class="sorting">تاریخ ثبت</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$transactions item=val} 

                        {if ( $val->user_id == 6 OR $val->user_id == 2818 OR $val->user_id == 2824 OR $val->user_id == 2822 )}
                            {continue}
                        {/if}
                        <tr>
                            <td>
                                {$val.id}
                            </td>
                            <td>
                                <a href="{site_url|con:ADMIN_PATH:'/bets/bets/view/':$val.user.id}">{$val.user.first_name} {$val.user.last_name}</a><span style="direction:ltr;"> ({$val.user.email})</span>
                            </td>
                            <td>
                                {$val.amount|price_format}</td>
                            <td>

                                <label style="color:#8fdf82">
                                    {jdate format='j F Y H:i:s' date=$val.created_at}
                                </label>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>
