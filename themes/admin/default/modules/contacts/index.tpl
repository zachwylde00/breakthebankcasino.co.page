<div id="page_content_inner">
    <h3 class="heading_a title-top">{$title}</h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">نام و نام خانوادگی</th>
                        <th class="sorting">ایمیل</th>
                        <th class="sorting">موضوع پیام</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="sorting">وضعیت</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">نام و نام خانوادگی</th>
                        <th class="sorting">ایمیل</th>
                        <th class="sorting">موضوع پیام</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="sorting">وضعیت</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$Contacts item=val}
                        <tr>
                            <td>{$val->name_family}</td>
                            <td>{$val->email}</td>
                            <td>{$val->subject}</td>
                            <td>{jdate format='j F Y - h:i a' date=$val->created_at}</td>
                            <td>
                                {if $val->seen_status_contact}
                                    <label class="uk-text-success">خوانده شده</label>
                                {else}
                                    <label class="uk-text-danger">خوانده نشده</label>
                                {/if}
                            </td>
                            <td>

                                <a href="{site_url({ADMIN_PATH|con:'/contacts/contact-us/view-contact/':$val.id})}" class="md-btn md-btn-small md-btn-primary" id="delete-btn">نمایش</a>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>