<div id="page_content_inner">
    <h3 class="heading_a title-top">{$title}</h3>
        <h4>بعد از ثبت به عنوان پرداخت شده مبلغ را به صورت دستی برای کاربر مورد نظر شارژ کنید.</h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        			<th class="sorting">کد پیگیری</th>
                        			<th class="sorting">نام و نام خانوادگی</th>
									<th class="sorting">زمان ثبت</th>
									<th class="sorting">زمان تراکنش</th>
									<th class="sorting">شماره کارت(چهار رقم اخر)</th>
									<th class="sorting">نوع تراکنش</th>
									<th class="sorting">مبلغ به تومان</th>
									<th class="sorting">وضعیت</th>
									<th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        			<th class="sorting">کد پیگیری</th>
                        			<th class="sorting">نام و نام خانوادگی</th>
									<th class="sorting">زمان ثبت</th>
									<th class="sorting">زمان تراکنش</th>
									<th class="sorting">شماره کارت(چهار رقم اخر)</th>
									<th class="sorting">نوع تراکنش</th>
									<th class="sorting">مبلغ به تومان</th>
									<th class="sorting">وضعیت</th>
									<th class="no-sort">عملیات</th>

                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
                    {foreach from=$carttocart item=val}
                        <tr>
                        <td>{$val->paygiricod}</td>
                        <td>
                        <a href="{site_url|con:ADMIN_PATH:'/bets/bets/view/':$val.user.id}">{$val->user->first_name} {$val->user->last_name}</a>
                        </td>
						<td>{jdate format='j F Y H:i' date=date('Y/m/d H:i:s', $val->created_at)}</td>
						<td>{$val->time}</td>
						<td>{$val->card4}</td>
						<td>{$val->description}</td>
						<td style="direction: ltr !important; color: {if $val->price <= -1}orange{else}green{/if} !important;">{$val->price|number_format}</td>

                            <td>
                                {if $val->status eq 0}
                                    <label class="uk-text-danger">پرداخت نشده</label>
                                {else if $val->status eq 1}
                                    <label class="uk-text-success">پرداخت شده</label>
                                {else if $val->status eq 2}
                                    <label class="uk-text-primary">صف پرداخت</label>
                                {/if}
                            </td>
                            <td>
        <a href="{site_url|con:ADMIN_PATH:'/users/users/carttocart-status/':$val.id}" class="uk-button btn-{if $val.status eq 1}danger{else}success{/if}">ثبت بعنوان {$status_label}</a>
        {if $val.status eq 0}
            <a href="{site_url|con:ADMIN_PATH:'/users/users/carttocart-status-q/':$val.id}" class="uk-button btn-primary">در صف پرداخت </a>
        {/if}                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>