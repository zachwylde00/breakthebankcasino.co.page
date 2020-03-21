
{************************اعلانیه ها*******************}
<div id="page_content_inner">
    <h3 class="heading_a title-top">اعلانیه ها</h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">موضوع پیام</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="sorting">وضعیت پیام</th>
                        <th class="sorting">نوع پیام</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">موضوع پیام</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="sorting">وضعیت پیام</th>
                        <th class="sorting">نوع پیام</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$Contacts item=val}
                        <tr>
                            <td>{$val->subject}</td>
                            <td>{jdate format='j F Y - h:i a' date=$val->created_at}</td>
                            <td><label class="text-{if $val.seen_status}success{else}danger{/if}">
                                    {if $val.seen_status}{'خوانده شده در '}{jdate format='j F Y - h:i a' date=$val->seen_date} {else}{'خوانده نشده'} 
                                    {/if}
                                </label>
                            </td>
                            <td>{if $val->user_id}شخصی{else}عمومی{/if}</td>
                            <td class="right">
                                <a href="{site_url({ADMIN_PATH|con:'/contacts/contact-us/view-announce/':$val.id})}" class="md-btn md-btn-small md-btn-primary" id="delete-btn">نمایش</a>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>