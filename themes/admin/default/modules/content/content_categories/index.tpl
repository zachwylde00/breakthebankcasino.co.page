<div id="page_content_inner">
    <h3 class="heading_a title-top">{$title}</h3>
    <div class="md-card  uk-margin-small-top">
        <div class="md-card-content">
            <div class="uk-width-medium-1-6 uk-margin-small-bottom">
                <a class="md-btn md-btn-success" href="{site_url({ADMIN_PATH|con:"/content/categories/edit"})}">افزودن دسته بندی</a>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th>نمایش</th>
                        <th class="sorting">نام</th>
                        <th class="sorting">نوع محتوا</th>
                        <th class="sorting">آدرس لینک سئو</th>
                        <th class="sorting">تاریخ ایجاد</th>
                        <th class="sorting">تاریخ آخرین تغییرات</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>نمایش</th>
                        <th class="sorting">نام</th>
                        <th class="sorting">نوع محتوا</th>
                        <th class="sorting">آدرس لینک سئو</th>
                        <th class="sorting">تاریخ ایجاد</th>
                        <th class="sorting">تاریخ آخرین تغییرات</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$Content_categories item=val}
                        <tr>
                            <td><a href="{site_url|con:$val.contentType->slug:'/':$val->slug}"><i class="material-icons">fullscreen</i></a></td>
                            <td>{$val->name}</td>
                            <td>{$val->contentType->name}</td>
                            <td>{$val->slug}</td>
                            <td>{jdate format='j F Y - h:i a' date=$val->created_at}</td>
                            <td>
                                {if isset($val->updated_at)}
                                    {jdate format='j F Y - h:i a' date=$val->updated_at}
                                {else}
                                    {'بدون تغییرات'}
                                {/if}
                            </td>
                            <td class="right">
                                <a class="md-btn md-btn-primary md-btn-small" href="{site_url({ADMIN_PATH|con:'/content/categories/edit/' : $val->id})}">ویرایش</a>
                                <a href="{site_url({ADMIN_PATH|con:'/content/categories/delete/':$val->id})}" class="md-btn md-btn-small md-btn-danger delete" id="delete-btn">حذف </a>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>