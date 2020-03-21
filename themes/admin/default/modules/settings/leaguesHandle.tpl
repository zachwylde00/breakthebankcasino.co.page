<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        {'تنظیمات سیستم'}
    </h3>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-width-1-1 ">
                <form method="POST" action="" id="form_validation" class="uk-form-stacked">
                    <div data-uk-grid-margin="" class="uk-grid">
                        <div class="uk-width-medium-2-3">
                            <div class="uk-form-row">
                                <div class="  uk-margin-top">
                                    <label>نام لیگ به انگلیسی (در صورت لزوم بعدا از بخش ترجمه نام تیم ها ترجمه کنید)</label>
                                    <input type="text" id="input_counter" class="{if  (NULL != form_error('footer'))}{' md-input-danger '}{/if}input-count md-input" name="leagueName" value="{set_value('leagueName', (isset($footer)) ? $footer : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <div class="  uk-margin-top">
                                    <label>نام تیم میزبان</label>
                                    <input type="text" id="input_counter" class="{if  (NULL != form_error('footer'))}{' md-input-danger '}{/if}input-count md-input" name="localTeam" value="{set_value('localTeam', (isset($footer)) ? $footer : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <div class="  uk-margin-top">
                                    <label>نام تیم میهمان</label>
                                    <input type="text" id="input_counter" class="{if  (NULL != form_error('footer'))}{' md-input-danger '}{/if}input-count md-input" name="visitorTeam" value="{set_value('visitorTeam', (isset($footer)) ? $footer : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    {form_error('footer')}  
                                </span>

                            </div>
                        </div>
                    </div>
                    <div class="uk-width-medium-1-4">
                        <button  type="submit" class="md-btn md-btn-flat md-btn-success btn-list"><span>ذخیره</span></button>
                    </div>
                </form>
            </div>
        </div>
        <div class="md-card-content">
			<h3>دسته بندی ها</h3>
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">نام لیگ</th>
                        <th class="sorting">نام تیم میهمان</th>
                        <th class="sorting">نام تیم میزبان</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">نام لیگ</th>
                        <th class="sorting">نام تیم میهمان</th>
                        <th class="sorting">نام تیم میزبان</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
					{assign var=leagues value=json_decode(file_get_contents({site_url({'bets/getleagues/'})}), false)}
                    {foreach $leagues->leagues as $key=>$value}
                        <tr>
                            <td>{$value->league}</td>
                            <td>{$value->local}</td>
                            <td>{$value->visitor}</td>
                            <td>
                                <a href="{site_url({ADMIN_PATH|con:'/settings/settings/deleteLeaguesHandle/':$value->league:'/':$value->local:'/':$value->visitor})}" class="md-btn md-btn-small md-btn-danger">رفع محدودیت و نمایش بازی</a>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div> 