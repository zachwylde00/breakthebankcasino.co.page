<div id="page_content_inner">
    <h3 class="heading_a title-top">فیلد های {$Content_type->name}</h3>
    <div class="md-card  uk-margin-small-top">
        <div class="md-card-content">
            <div class="uk-width-medium-1-6 uk-margin-small-bottom">
                <a class="md-btn md-btn-success" href="{site_url({ADMIN_PATH|con:"/content/extra-fields/edit/":$Content_type.id})}">افزودن فیلد</a>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">نام</th>
                        <th class="sorting">نامک</th>
                        <th class="sorting">نوع</th>
                        <th class="sorting">تاریخ ایجاد</th>
                        <th class="sorting">تاریخ آخرین تغییرات</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">نام</th>
                        <th class="sorting">نامک</th>
                        <th class="sorting">نوع</th>
                        <th class="sorting">تاریخ ایجاد</th>
                        <th class="sorting">تاریخ آخرین تغییرات</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$Fields item=val}
                        <tr>
                            <td>{$val->name}</td>
                            <td>{$val->slug}</td>
                            <td>{$val->fieldTypeName}</td>
                            <td>{jdate format='j F Y - h:i a' date=$val->created_at}</td>
                            <td>
                                {if isset($val->updated_at)}
                                    {jdate format='j F Y - h:i a' date=$val->updated_at}
                                {else}
                                    {'بدون تغییرات'}
                                {/if}
                            </td>
                            <td class="right">
                                <a href="{site_url({ADMIN_PATH|con:'/content/extra-fields/delete/':$Content_type.id:'/':$val.id})}" class="md-btn md-btn-small md-btn-danger delete">حذف</a>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>