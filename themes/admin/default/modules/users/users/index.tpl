<div id="page_content_inner">
    <h3 class="heading_a title-top">{$title}</h3>
    <div class="md-card  uk-margin-small-top">
        <div class="md-card-content">
            <div class="uk-width-medium-1-2 ">
                <a href="{site_url({ADMIN_PATH|con:'/users/users/edit'})}" class="md-btn md-btn-success">افزودن کاربر</a>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="dataTables_wrapper form-inline dt-uikit md-processed">
                <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                    <thead>
                        <tr>
                            <th>
                                شناسه
                            </th>
                            <th class="sorting">نام</th>
                            <th class="sorting">نام خانوادگی</th>
                            <th class="sorting">ایمیل</th>
                            <th class="sorting">موجودی حساب</th>
                            <th class="no-sort">عملیات</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>شناسه</th>
                            <th>نام</th>
                            <th>نام خانوادگی</th>
                            <th>ایمیل</th>
                            <th class="sorting">موجودی حساب</th>
                            <th class="no-sort">عملیات</th>
                        </tr>
                    </tfoot>
                    <tbody class="uk-table uk-table-striped">
                        {foreach from=$Users item=User}
                        {if $User.id eq 14}{continue}{/if}
                        <tr>
                            <td class="center">{$User->id}</td>
                            <td>{$User->first_name}</td>
                            <td>{$User->last_name}</td>
                            <td>{$User->email}</td>
                            {*<td>
                            {assign var="i" value={count($User->role_name)}}
                            {assign var="j" value=1}
                            {foreach from=$User->role_name item=role}
                            {$role}{if $j<$i} -{/if}
                            {assign var="j" value=$j+1}
                            {/foreach}
                            </td>
                            *}<td>
                                {$User->cash|price_format}
                            </td>
                            <td class="right">
                                <a class="uk-icon-small uk-icon-hover uk-icon-edit uk-text-primary" href="{site_url({ADMIN_PATH|con:'/users/users/edit/':$User->id})}" data-uk-tooltip title="ویرایش"></a>

                                <a class="uk-icon-small uk-icon-hover uk-icon-plus-square uk-text-success" href="{site_url({ADMIN_PATH|con:'/users/users/increase/':$User->id})}" data-uk-tooltip title="افزایش شارژ"></a>

                                <a class="uk-icon-small uk-icon-hover uk-icon-minus-square uk-text-warning" href="{site_url({ADMIN_PATH|con:'/users/users/decrease/':$User->id})}" data-uk-tooltip title="کاهش شارژ"></a>
                                {if !$User->inRole(SUPER_ADMIN)}
                                    <a href="{site_url({ADMIN_PATH|con:'/users/users/delete/':$User->id})}" class="uk-icon-small uk-icon-hover uk-icon-close uk-text-danger delete" data-uk-tooltip title="حذف کاربر" id="delete-btn"></a>
                                {/if}

                                <a class=" uk-icon-small uk-icon-hover uk-icon-soccer-ball-o" href="{site_url({ADMIN_PATH|con:'/bets/bets/view/':$User->id})}" data-uk-tooltip title="اطلاعات شرط‌ها"></a>

                                <a class=" uk-icon-small uk-icon-hover uk-icon-money" href="{site_url({ADMIN_PATH|con:'/payment/transactions/index/':$User->id})}" data-uk-tooltip title="تراکنش‌های مالی"></a>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>