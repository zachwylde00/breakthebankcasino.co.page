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
                                    <label>آیدی بازی در حال انجام (Team ID)</label>
                                    <input type="text" id="input_counter" class="{if  (NULL != form_error('footer'))}{' md-input-danger '}{/if}input-count md-input" name="bannID" value="{set_value('bannID', (isset($footer)) ? $footer : '')}" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <div class="  uk-margin-top">
                                    <label>کدام ضریب بسته شود ؟</label>
									<select class="{if  (NULL != form_error('footer'))}{' md-input-danger '}{/if}input-count md-input" name="oddO">
										<option value="local">میزبان</option>
										<option value="x">مساوی</option>
										<option value="visitor">میهمان</option>
									</select>
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
			<h3>ضرایب حذف شده</h3>
            <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                <thead>
                    <tr>
                        <th class="sorting">آیدی بازی (Team ID)</th>
                        <th class="sorting">ضریب</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th class="sorting">آیدی بازی (Team ID)</th>
                        <th class="sorting">ضریب</th>
                        <th class="no-sort">عملیات</th>
                    </tr>
                </tfoot>
                <tbody class="uk-table uk-table-striped">
					{assign var=banns value=json_decode(file_get_contents({site_url({'bets/getbannInplays/'})}), false)}
                    {foreach $banns->banns as $key=>$value}
						{if $value->id == 'DeletedTkStarItemFromBannsInplay'}{continue}{/if}
                        <tr>
                            <td>{$value->id}</td>
                            <td>{if $value->oddO == 'local'}میزبان{elseif $value->oddO == 'x'}مساوی{else}میهمان{/if}</td>
                            <td>
                                <a href="{site_url({ADMIN_PATH|con:'/settings/settings/deleteBannInplays/':$value->id:'/':$value->oddO})}" class="md-btn md-btn-small md-btn-danger">رفع محدودیت و نمایش بازی</a>
                            </td>
                        </tr>
                    {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div> 