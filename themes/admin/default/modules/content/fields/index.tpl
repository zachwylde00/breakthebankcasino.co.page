<div id="page_content_inner">
    <h3 class="heading_a title-top">{$title}</h3>
    <div class="md-card  uk-margin-small-top">
        <div class="md-card-content">
            <div class="uk-width-medium-1-6 uk-margin-small-bottom">
                <a class="md-btn md-btn-success" href="{site_url({ADMIN_PATH|con:"/users/roles/edit"})}">افزودن نوع محتوا</a>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" onClick="$('input[name*=\'selected\']').attr('checked', this.checked);" data-md-icheck  />
                        </th>
                        <th class="sorting">نام</th>
                        <th class="sorting">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th rowspan="2"></th>
                        <th>نام</th>
                        <th>عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$Content_types item=val}
                        <tr>
                            <td class="center">
                                <input type="checkbox" value="{$val->id}" name="selected[]"  data-md-icheck/>
                            </td>
                            <td>{$val->name}</td>
                            <td class="right">
                                <a class="md-btn md-btn-primary md-btn-small" href="{site_url({ADMIN_PATH|con:'/users/roles/edit/' : $val->id})}">ویرایش</a>
                                <a href="{site_url({ADMIN_PATH|con:'/users/roles/delete/':$val->id})}" class="md-btn md-btn-small md-btn-danger delete" id="delete-btn">حذف نقش کاربری</a>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
            <div class="uk-grid uk-margin-medium-top">
                <div class="uk-width-medium-1-1">
                    <ul class="uk-pagination">
                        {$pagination}
                    </ul>
                </div>
            </div>
        </div>
        <div class="dt-uikit-footer">
            {*<div class="uk-grid uk-margin">
            نمایش  {!empty($Content_types) ? $Content_types->paged->current_row + 1 : 0} تا {$Content_types->paged->current_row + $Content_types->paged->items_on_page} از {$Content_types->paged->total_rows} ({$Content_types->paged->total_pages}  صفحه)
            </div>*}
        </div>
    </div>
</div>

{*

<?php js_start()}
<script type="text/javascript">
$(document).ready(function () {
$('.sortable').click(function () {
sort = $(this);

if (sort.hasClass('asc'))
{
window.location.href = "{site_url(ADMIN_PATH . '/users/groups/index') . '?search=' . $this->input->get('search')}&sort=" + sort.attr('rel') + "&order=desc";
}
else
{
window.location.href = "{site_url(ADMIN_PATH . '/users/groups/index') . '?search=' . $this->input->get('search')}&sort=" + sort.attr('rel') + "&order=asc";
}

return false;
});

< ?php if ($sort = $this - > input - > get('sort')): ? >
$('a.sortable[rel="{$sort}"]').addClass('{($this->input->get('order')) ? $this->input->get('order') : 'asc' ?>');
< ?php else: ? >
$('a.sortable[rel="name"]').addClass('asc');
< ?php endif}

$('.delete').click(function () {
if (confirm('Delete cannot be undone! Are you sure you want to do this?'))
{
$('#form').attr('action', '/admin/users/groups/delete').submit()
}
else
{
return false;
}
});
});
</script>
<?php js_end()*}
