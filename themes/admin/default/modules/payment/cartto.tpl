<div id="page_content_inner">
    <h3 class="heading_a title-top">{$title}</h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">شناسه داخلی تراکنش</th>
                        <th class="sorting">کاربر</th>
                        <th class="sorting">مبلغ پرداختی</th>
                        <th class="sorting">شرح</th>
                        <th class="sorting">نوع</th>
                        <th class="sorting">تاریخ ثبت</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">شناسه داخلی تراکنش</th>
                        <th class="sorting">کاربر</th>
                        <th class="sorting">مبلغ پرداختی</th>
                        <th class="sorting">شرح</th>
                        <th class="sorting">نوع</th>
                        <th class="sorting">تاریخ ثبت</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$transactions item=val}  
                        <tr>
                            <td>
                                {$val.id}
                            </td>
                            <td>
                                {$val.user.first_name} {$val.user.last_name} <span style="direction:ltr;"> ({$val.user.email})</span>
                            </td>
                            <td>
                                {$val.price|price_format}</td>
                            <td>{$val.description}</td>
                            <td> 
                                {if $val.invoice_type eq 1}
                                    شارژ حساب
                                {else if $val.invoice_type eq 2}
                                    واریز برد شرط
                                {else if $val.invoice_type eq 3}
                                    برداشت برای ثبت شرط
                                {else if $val.invoice_type eq 4}
                                    درخواست جایزه
                                {else if $val.invoice_type eq 5}
                                    واریز کارمزد کاربر زیرمجموعه
                                {else if $val.invoice_type eq 10}
                                   واریز توسط مدیریت
                                {else if $val.invoice_type eq 11}
                                    برداشت توسط مدیریت
                                {/if}
                            </td>
                            <td>

                                <label style="color:#8fdf82">
                                    {jdate format='j F Y H:i:s' date=$val.created_at}
                                </label>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>
