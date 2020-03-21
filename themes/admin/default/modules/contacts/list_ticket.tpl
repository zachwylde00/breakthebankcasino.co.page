{************************اعلانیه ها*******************}
<div id="page_content_inner">
    <h3 class="heading_a title-top">تیکت ها</h3>
    <div class="md-card  uk-margin-small-top">
        <div class="md-card-content">
            <div class="uk-width-medium-1-6 uk-margin-small-bottom">
                <a class="md-btn md-btn-success" href="{site_url({ADMIN_PATH|con:"/contacts/tickets"})}">ارسال تیکت جدید</a>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">موضوع پیام</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="sorting">وضعیت پیام</th>
                        <th class="sorting">فرستنده</th>
                        <th class="sorting">گیرنده</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">موضوع پیام</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="sorting">وضعیت پیام</th>
                        <th class="sorting">فرستنده</th>
                        <th class="sorting">گیرنده</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$Contacts item=val}
                        <tr>
                            <td>{$val->subject}</td>
                            <td>{jdate format='j F Y - H:i' date=$val->created_at}</td>
                            <td><label class="text-{if $val.status}success{else}danger{/if}">
                                    {if $val.status}{'خوانده شده در '}{jdate format='j F Y - H:i' date=$val->seen_datetime} {else}{'خوانده نشده'} {/if}
                                </label>
                            </td>
                            <td>{$val.user.first_name} {$val.user.last_name}</td>
                            <td>{$val.r_user.first_name} {$val.r_user.last_name}</td>
                            <td class="right">
                                <a href="{site_url({ADMIN_PATH|con:'/contacts/tickets/view-ticket/':$val.id})}" class="md-btn md-btn-small md-btn-primary" id="delete-btn">نمایش</a>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>