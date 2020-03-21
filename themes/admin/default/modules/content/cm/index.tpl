<div id="page_content_inner">
    <h3 class="heading_a title-top">{$title}</h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">کاربر نویسنده</th>
                        <th class="sorting">مطلب مربوطه</th>
                        <th class="sorting">وضعیت</th>
                        <th class="sorting">تاریخ ایجاد</th>
                        <th class="sorting">تاریخ آخرین تغییرات</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">کاربر نویسنده</th>
                        <th class="sorting">مطلب مربوطه</th>
                        <th class="sorting">وضعیت</th>
                        <th class="sorting">تاریخ ایجاد</th>
                        <th class="sorting">تاریخ آخرین تغییرات</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$Comments item=val}
                        <tr>
                            <td>{$val->user->first_name} {$val->user->last_name}</td>
                            <td>  
                                {$val->entry->title}
                            </td>
                            <td>

                                {if $val.status eq 0}
                                    <label class="uk-text-primary"> در حال بررسی</label>
                                {else if $val.status eq 1}
                                    <label class="uk-text-success"> تایید شده</label>
                                {else if $val.status eq 2}
                                    <label class="uk-text-danger"> رد شده</label>
                                {/if}
                            </td>
                            <td>{jdate format='j F Y - h:i a' date=$val->created_at}</td>
                            <td>
                                {if isset($val->updated_at)}
                                    {jdate format='j F Y - h:i a' date=$val->updated_at}
                                {else}
                                    {'بدون تغییرات'}
                                {/if}
                            </td>
                            <td class="right">

                                {if $val.status == 0 OR  $val.status == 3 OR $val.status == 2}
                                    <label class="uk-text-primary">
                                        <a class="md-btn md-btn-success md-btn-small" href="{site_url({ADMIN_PATH|con:'/content/comments/toggleStatus/' : $val->id})}">تایید و انتشار</a>
                                    </label>
                                {/if}
                                {if $val.status == 1}
                                    <label class="uk-text-primary">
                                        <a class="md-btn md-btn-danger md-btn-small" href="{site_url({ADMIN_PATH|con:'/content/comments/toggleStatus/' : $val->id})}">رد کردن</a>
                                    </label>
                                {/if}
                                {if $val.status == 4}
                                    <label class="uk-text-primary">
                                        <a class="md-btn md-btn-danger md-btn-small" href="{site_url({ADMIN_PATH|con:'/content/comments/toggleStatus/' : $val->id})}">عدم انتشار</a>
                                    </label>
                                {/if}
                                <label class="uk-text-primary">
                                    <a class="md-btn md-btn-primary md-btn-small" href="{site_url({ADMIN_PATH|con:'/content/comments/view-cm/' : $val->id})}">نمایش</a>
                                </label>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>