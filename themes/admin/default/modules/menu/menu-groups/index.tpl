<div id="page_content_inner">
    <h3 class="heading_a title-top">{$title}</h3>
    <div class="md-card  uk-margin-small-top">
        <div class="md-card-content">
            <div class="uk-width-medium-1-6 uk-margin-small-bottom">
                <a class="md-btn md-btn-success" href="{site_url({ADMIN_PATH|con:"/menu/menu-groups/edit"})}">افزودن منو</a>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">عنوان گروه منو</th>
                        <th class="sorting">کد لاتین</th>
                        <th class="sorting">تاریخ ایجاد</th>
                        <th class="sorting">تاریخ آخرین تغییرات</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">عنوان گروه منو</th>
                        <th class="sorting">کد لاتین</th>
                        <th class="sorting">تاریخ ایجاد</th>
                        <th class="sorting">تاریخ آخرین تغییرات</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$Menu_groups item=val}
                    <td>{$val->name}</td>
                    <td>{$val->code}</td>
                    <td>{jdate format='j F Y - h:i a' date=$val->created_at}</td>
                    <td>
                        {if isset($val->updated_at)}
                            {jdate format='j F Y - h:i a' date=$val->updated_at}
                        {else}
                            {'بدون تغییرات'}
                        {/if}
                    </td>
                    <td class="right">
                        <a class="md-btn md-btn-primary md-btn-small" href="{site_url({ADMIN_PATH|con:'/menu/menu-groups/edit/' : $val->id})}">ویرایش</a>
                        <a href="{site_url({ADMIN_PATH|con:'/menu/menu-groups/delete/':$val->id})}" class="md-btn md-btn-small md-btn-danger delete" id="delete-btn">حذف گروه منو</a>
                    </td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>