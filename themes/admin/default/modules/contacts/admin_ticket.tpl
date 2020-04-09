
{************************تیکت ها*******************}
<div id="page_content_inner">
    <h3 class="heading_a title-top">تیکت ها</h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">نام و نام خانوادگی</th>
                        <th class="sorting">ایمیل</th>
                        <th class="sorting">موضوع پیام</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="sorting">متن پیام</th>
                        <th class="sorting">فایل پیوست</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">نام و نام خانوادگی</th>
                        <th class="sorting">ایمیل</th>
                        <th class="sorting">موضوع پیام</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="sorting">متن پیام</th>
                        <th class="sorting">فایل پیوست</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$Tickets item=val}
                        <tr>
                            <td>{$val->name_family}</td>
                            <td>{$val->email}</td>
                            <td>{$val->subject}</td>
                            <td>{jdate format='j F Y - h:i a' date=$val->created_at}</td>
                            <td>
                                {$val->message}
                            </td>
                            <td>
                                {if $val->attachment}
                                    <a href="{site_url()|con:'upload/contacts/':$val->attachment}">دریافت</a>
                                {else}
                                    {'ندارد'}
                                {/if}
                            </td>
                            <td class="right">
                                <a href="{site_url({ADMIN_PATH|con:'/contacts/ticket/delete/':$val.id})}" class="md-btn md-btn-small md-btn-danger delete" id="delete-btn">حذف</a>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
</div>