<div id="page_content_inner">
    <h3 class="heading_a title-top">{$title}</h3>
    <div class="md-card  uk-margin-small-top">
        <div class="md-card-content">
            <div class="uk-width-medium-1-6 uk-margin-small-bottom">
                <a class="md-btn md-btn-success" href="{site_url({ADMIN_PATH|con:"/users/roles/edit"})}">افزودن گروه</a>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th>شناسه</th>
                        <th class="sorting">نام</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>شناسه</th>
                        <th>نام</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$Roles item=Role}
                        <tr>
                            <td>
                               {$Role.id}
                            </td>
                            <td>{$Role->name}</td>
                            <td class="right">
                                {if $Role.slug != 'superadmin'}
                                    <a class="md-btn md-btn-primary md-btn-small" href="{site_url({ADMIN_PATH|con:'/users/roles/edit/' : $Role->id})}">ویرایش</a>
                                    <a href="{site_url({ADMIN_PATH|con:'/users/roles/delete/':$Role->id})}" class="md-btn md-btn-small md-btn-danger delete" id="delete-btn">حذف نقش کاربری</a>
                                {/if}
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>
