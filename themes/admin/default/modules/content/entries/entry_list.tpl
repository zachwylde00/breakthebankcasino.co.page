<div id="page_content_inner">
    <h3 class="heading_a title-top">{$title}</h3>
    <div class="md-card  uk-margin-small-top">
        <div class="md-card-content">
            <div class="uk-width-medium-1-6 uk-margin-small-bottom">
                <a class="md-btn md-btn-success" href="{site_url({ADMIN_PATH}|con:"/content/entries/"|con:$entry_type|con:"/add")}">افزودن {$content_type.name}</a>
            </div>
        </div>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default">
                <thead>
                    <tr>
                        {*<th>
                        <input type="checkbox" onClick="$('input[name*=\'selected\']').attr('checked', this.checked);" data-md-icheck  />
                        </th>*}
                        <th>نمایش</th>
                        <th class="sorting">نام</th>
                        <th class="sorting">آدرس لینک سئو</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="sorting">تاریخ ویرایش</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        {*<th></th>*}
                        <th>نمایش</th>
                        <th class="sorting">نام</th>
                        <th class="sorting">آدرس لینک سئو</th>
                        <th class="sorting">تاریخ ارسال</th>
                        <th class="sorting">تاریخ ویرایش</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$entries item=val}
                        <tr>
                            {* <td class="center">
                            <input type="checkbox" value="{$val->id}" name="selected[]"  data-md-icheck/>
                            </td>*}
                            <td><a href="{site_url|con:$val->contentType->slug:'/':$val->slug}"><i class="material-icons">fullscreen</i></a></td>
                            <td>{$val->title}</td>
                            <td>{$val->slug}</td>
                            <td>{jdate date=$val->created_at format="Y-m-d H:i:s"}</td>
                            <td>{jdate date=$val->updated_at format="Y-m-d H:i:s"}</td>
                            <td class="right">
                                <a class="md-btn md-btn-primary md-btn-small" href="{site_url({ADMIN_PATH}|con:"/content/entries/"|con:$entry_type|con:"/edit/"|con:$val->id)}">ویرایش</a>
                                <a href="{site_url({ADMIN_PATH}|con:"/content/entries/"|con:$entry_type|con:"/delete/"|con:$val->id)}" class="md-btn md-btn-small md-btn-danger delete">حذف {$content_type.name}</a>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>