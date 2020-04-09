<div id="page_content_inner">
    <h3 class="heading_a title-top">{$title}</h3>
    <div class="md-card  uk-margin-small-top">
        <div class="md-card-content">
            <div class="uk-width-medium-1-6 uk-margin-small-bottom">
                <a class="md-btn md-btn-success" href="{site_url({ADMIN_PATH|con:"/menu/menus/edit"})}">افزودن منو</a>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">عنوان لینک منو</th>
                        <th class="sorting">آدرس لینک</th>
                        <th class="sorting">گروه منو</th>
                        <th class="sorting">منوی والد</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">عنوان لینک منو</th>
                        <th class="sorting">آدرس لینک</th>
                        <th class="sorting">گروه منو</th>
                        <th class="sorting">منوی والد</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$Menus item=val}
                    <td>{$val->title}</td>
                    <td>{$val->target}</td>
                    <td>{$val->group_name}</td>
                    <td>{$val->parent_name}</td>
                   
                    <td class="right">
                        <a class="md-btn md-btn-primary md-btn-small" href="{site_url({ADMIN_PATH|con:'/menu/menus/edit/' : $val->id})}">ویرایش</a>
                        <a href="{site_url({ADMIN_PATH|con:'/menu/menus/delete/':$val->id})}" class="md-btn md-btn-small md-btn-danger delete" id="delete-btn">حذف منو</a>
                    </td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>