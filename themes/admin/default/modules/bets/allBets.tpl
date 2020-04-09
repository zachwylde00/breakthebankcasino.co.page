<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {$title}
    </h3>
    <div class="uk-width-medium-2-3 uk-margin-top uk-margin-bottom">
        <form method="GET" action="{site_url|con:ADMIN_PATH:'/bets/bets/search'}">
            <input type="text" name="q" />
            <input type="submit" value="بگرد" class="uk-button btn-success">
        </form>
    </div>

    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="dataTables_wrapper form-inline dt-uikit md-processed">
                <table style="overflow-x:hidden !important;overflow-y:hidden !important;" class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                    <thead>
                        <tr>
                            <th class="sorting">زمان</th>
                            <th class="sorting">کاربر</th>
                            <th class="sorting"> نوع</th>
                            <th class="sorting"> شرط</th>
                            <th class="sorting">  ضریب</th>
                            <th class="sorting">مبلغ برد </th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th class="sorting">زمان</th>
                            <th class="sorting">کاربر</th>
                            <th class="sorting"> نوع</th>
                            <th class="sorting"> شرط</th>
                            <th class="sorting">  ضریب</th>
                            <th class="sorting">مبلغ برد </th>
                        </tr>
                    </tfoot>
                    <tbody style="overflow-x:hidden !important;overflow-y:hidden !important;" class="uk-table uk-table-striped">
                        {foreach from=$betRecords item=val}
                            <tr>
                                <td class="center">{jdate format='j F Y' date=$val->created_at}<br>{jdate format='H:i:s' date=$val->created_at}</td>
                                <td class="center">
                                    <a href='{site_url|con:ADMIN_PATH:"/bets/bets/view/":$val->user->id}'>
                                        {$val->user->first_name} {$val->user->last_name}
                                    </a>
                                </td>
                                <td>
                                    {if $val->type == 1}
                                        تکی
                                    {else}
                                        میکس  {$val->type} تایی
                                    {/if}
									<br>
									{$val->stake|price_format}
                                </td>
                                <td> 
                                    {foreach $val->bet_form as $match}
                                        <ul class="detailbet">
                                            <li>بازی: <br><b>{$match->home_team|fa}({$match->home_score_ft})<br>{$match->away_team|fa}({$match->away_score_ft}) </b></li>
                                            <li>نوع: <b>{$match->bet_type|fa}</b></li>
                                            <li>انتخاب: {$match->pick|fa} </li>
                                            <li>ضریب: {$match->odd} </li>
                                            <li>ضریب موثر: {if $match->result_status eq 1}{$match->odd}{else if $match->result_status eq 2}<span class='uk-text-danger'>0</span>{else if $match->result_status eq 0}-{/if} </li>
                                        </ul>
                                    {/foreach}
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
            <div class="uk-grid">
            </div>
        </div>
    </div>


</div>