<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {$title}
    </h3>
    <div class="uk-width-medium-2-3 uk-margin-top uk-margin-bottom">
        <a href="{site_url|con:ADMIN_PATH:'/users'}" class="uk-button btn-breadcrumb">بازگشت</a>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-overflow-container">
                <div class="uk-width-medium-1-1 uk-margin-top">
                    <h3>
                        <i class="uk-icon-chevron-left uk-icon-small .uk-icon-justify uk-text-success"></i> اطلاعات شرط های {$user.first_name} {$user.last_name}:
                    </h3>
                    <table class="uk-table uk-table-hover">
                        <tbody>
                            <tr>
                                <td>موجودی حساب‌</td>
                                <td>{$user.cash|price_format}</td>
                            </tr>
                            <tr>
                                <td>مجموع پیشبینی ها‌</td>
                                <td>{$totalStake|price_format}</td>
                            </tr>
                            <tr>
                                <td>مجموع جوایز</td>
                                <td>{$jayze|price_format}</td>
                            </tr>
                            <tr>
                                <td>مجموع واریز ها</td>
                                <td>{$varizi|price_format}</td>
                            </tr>
                            <tr>
                                <td>مجموع برداشت ها</td>
                                <td>{$withdraw|price_format}</td>
                            </tr>
                            <tr>
                                <td>Monitoring User's Finance</td>
                                <td>{$Monitoring|price_format}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="dataTables_wrapper form-inline dt-uikit md-processed">
                <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                    <thead>
                        <tr>
                            <th class="sorting">شناسه شرط</th>
                            <th>زمان</th>
                            <th class="sorting"> نوع</th>
                            <th class="sorting"> شرط</th>
                            <th class="sorting">مبلغ </th>
                            <th class="sorting">  ضریب</th>
                            <th class="sorting">مبلغ برد </th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th class="sorting">شناسه شرط</th>
                            <th>زمان</th>
                            <th class="sorting"> نوع</th>
                            <th class="sorting"> شرط</th>
                            <th class="sorting">مبلغ </th>
                            <th class="sorting">  ضریب</th>
                            <th class="sorting">مبلغ برد </th>
                        </tr>
                    </tfoot>
                    <tbody class="uk-table uk-table-striped">
                        {foreach from=$bets item=val}
                            <tr>
                                <td>{$val.id}</td>
                                <td class="center">{jdate format='j F Y - H:i' date=$val->created_at}</td>
                                <td>
                                    {if $val->type == 1}
                                        تکی
                                    {else}
                                        میکس  {$val->type} تایی
                                    {/if}
                                </td>
                                <td> 
                                    {foreach $val->bet_form as $match}
                                        <ul class="detailbet">
                                            <li style="width:250px">بازی: <b>{$match->home_team|fa}({$match->home_score_ft}) - {$match->away_team|fa}({$match->away_score_ft}) </b></li>
                                            <li style="width:250px">نوع: <b>{$match->bet_type|fa}</b></li>
                                            <li style="width:150px">انتخاب: {$match->pick|fa}</li>
                                            <li style="width:150px">ضریب: {$match->odd} </li>
                                            <li style="width:150px"
                                                {if $match->result_status eq 2}uk-text-danger{else if $match->result_status eq 1}uk-text-success{/if}>ضریب موثر: 
                                                {if $match->result_status eq 1}
                                                    {$match->odd}
                                                {else if $match->result_status eq 2}
                                                    <span class='uk-text-danger'>0</span>
                                                {else if $match->result_status eq 0}-{/if}
                                            </li>

                                            {if $match->bookmaker_id != 404}
                                                <li style="width:150px">
                                                    <a href="{site_url}bets/api/checkResultUpComingId/{$match->match_id}/{$match->bets_user_id}">بررسی مجدد تک بازی</a>
                                                </li>
                                                <li style="width:150px">
                                                    <a href="{site_url}bets/api/checkResultMatch/{$match->match_id}/{$match->bets_user_id}">بررسی بازی های مشابه</a>
                                                </li>
                                            {/if}
                                            

                                            {if $val->type != 1}
                                                <hr style="padding: 0;">
                                            {/if}
                                        </ul>
                                    {/foreach}
                                </td>
                                <td>
                                    {$val->stake|price_format}
                                </td>
                                <td>
                                    {$val->effective_odd|persian_number}
                                </td>
                                <td>
                                    <b>
                                        {if $val->status eq 0}
                                            <span class="uk-text-warning">  بازی تمام نشده</span>
                                        {else if $val->status eq 1 }
                                            {assign var=winning value=$val->stake * $val->effective_odd}
                                            <span style="color:#00b957">{$winning|price_format}</span>
                                        {else if $val->status eq 2}
                                            <span style="color:red">{0|persian_number}</span>
                                        {/if}
                                    </b>
                                </td>
                            </tr>
                        {/foreach}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>