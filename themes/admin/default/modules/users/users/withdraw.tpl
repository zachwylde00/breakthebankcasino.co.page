
<div id="page_content_inner">
    <h3 class="heading_a title-top">{$title}</h3>
    {*<div class="md-card  uk-margin-small-top">
    <div class="md-card-content">
    <div class="uk-width-medium-1-6 uk-margin-small-bottom">
    <a class="md-btn md-btn-success" href="{site_url|con:ADMIN_PATH:'/school/registration/excelExport'}">خروجی اکسل</a>
    </div>
    </div>
    </div>*}
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">نام صاحب حساب</th>
                        <th class="sorting">کاربر</th>
                        <th class="sorting">مبلغ درخواستی</th>
                        <th class="sorting">وضعیت</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">نام صاحب حساب</th>
                        <th class="sorting">کاربر</th>
                        <th class="sorting">مبلغ درخواستی</th>
                        <th class="sorting">وضعیت</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$withdraw item=val}
                        <tr>
                            <td>{$val->account_holder}</td>
                            <td>
                                  <a href="{site_url|con:ADMIN_PATH:'/bets/bets/view/':$val.user.id}">{$val->user->first_name} {$val->user->last_name}</a>
                                  </td>
                            <td>{$val->amount|price_format}</td>
                            <td>
                                {if $val->status eq 0}
                                    <label class="uk-text-danger">پرداخت نشده</label>
                                {else if $val->status eq 1}
                                    <label class="uk-text-success">پرداخت شده</label>
                                {else if $val->status eq 2}
                                    <label class="uk-text-primary">صف پرداخت</label>
                                {/if}
                            </td>
                            <td>{jdate format='j F Y - H:i' date=$val->created_at}</td>
                            <td>
                                <a href="{site_url({ADMIN_PATH|con:'/users/users/view-withdraw/':$val.id})}" class="md-btn md-btn-small md-btn-primary" id="delete-btn">نمایش</a>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>