<?php
/* Smarty version 3.1.31, created on 2020-01-26 12:04:44
  from "/home/gang4bet/public_html/themes/admin/default/modules/bets/view.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e2d4f24be51c2_67978370',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '4eafb20c35605546a72447051eee729e050fb8b6' => 
    array (
      0 => '/home/gang4bet/public_html/themes/admin/default/modules/bets/view.tpl',
      1 => 1489563014,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e2d4f24be51c2_67978370 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
if (!is_callable('smarty_modifier_con')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
if (!is_callable('smarty_modifier_price_format')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/modifier.price_format.php';
if (!is_callable('smarty_function_jdate')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/function.jdate.php';
if (!is_callable('smarty_modifier_fa')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/modifier.fa.php';
if (!is_callable('smarty_modifier_persian_number')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/modifier.persian_number.php';
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        <?php echo $_smarty_tpl->tpl_vars['title']->value;?>

    </h3>
    <div class="uk-width-medium-2-3 uk-margin-top uk-margin-bottom">
        <a href="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/users');?>
" class="uk-button btn-breadcrumb">بازگشت</a>
    </div>
    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="uk-overflow-container">
                <div class="uk-width-medium-1-1 uk-margin-top">
                    <h3>
                        <i class="uk-icon-chevron-left uk-icon-small .uk-icon-justify uk-text-success"></i> اطلاعات شرط های <?php echo $_smarty_tpl->tpl_vars['user']->value['first_name'];?>
 <?php echo $_smarty_tpl->tpl_vars['user']->value['last_name'];?>
:
                    </h3>
                    <table class="uk-table uk-table-hover">
                        <tbody>
                            <tr>
                                <td>موجودی حساب‌</td>
                                <td><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['user']->value['cash']);?>
</td>
                            </tr>
                            <tr>
                                <td>مجموع پیشبینی ها‌</td>
                                <td><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['totalStake']->value);?>
</td>
                            </tr>
                            <tr>
                                <td>مجموع جوایز</td>
                                <td><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['jayze']->value);?>
</td>
                            </tr>
                            <tr>
                                <td>مجموع واریز ها</td>
                                <td><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['varizi']->value);?>
</td>
                            </tr>
                            <tr>
                                <td>مجموع برداشت ها</td>
                                <td><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['withdraw']->value);?>
</td>
                            </tr>
                            <tr>
                                <td>Monitoring User's Finance</td>
                                <td><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['Monitoring']->value);?>
</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="dataTables_wrapper form-inline dt-uikit md-processed">
                <table class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                    <thead>
                        <tr>
                            <th class="sorting">شناسه شرط</th>
                            <th>زمان</th>
                            <th class="sorting"> نوع</th>
                            <th class="sorting"> شرط</th>
                            <th class="sorting">مبلغ </th>
                            <th class="sorting">  ضریب</th>
                            <th class="sorting">مبلغ برد </th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th class="sorting">شناسه شرط</th>
                            <th>زمان</th>
                            <th class="sorting"> نوع</th>
                            <th class="sorting"> شرط</th>
                            <th class="sorting">مبلغ </th>
                            <th class="sorting">  ضریب</th>
                            <th class="sorting">مبلغ برد </th>
                        </tr>
                    </tfoot>
                    <tbody class="uk-table uk-table-striped">
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['bets']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
                            <tr>
                                <td><?php echo $_smarty_tpl->tpl_vars['val']->value['id'];?>
</td>
                                <td class="center"><?php echo smarty_function_jdate(array('format'=>'j F Y - H:i','date'=>$_smarty_tpl->tpl_vars['val']->value->created_at),$_smarty_tpl);?>
</td>
                                <td>
                                    <?php if ($_smarty_tpl->tpl_vars['val']->value->type == 1) {?>
                                        تکی
                                    <?php } else { ?>
                                        میکس  <?php echo $_smarty_tpl->tpl_vars['val']->value->type;?>
 تایی
                                    <?php }?>
                                </td>
                                <td> 
                                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['val']->value->bet_form, 'match');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['match']->value) {
?>
                                        <ul class="detailbet">
                                            <li style="width:250px">بازی: <b><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['match']->value->home_team);?>
(<?php echo $_smarty_tpl->tpl_vars['match']->value->home_score_ft;?>
) - <?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['match']->value->away_team);?>
(<?php echo $_smarty_tpl->tpl_vars['match']->value->away_score_ft;?>
) </b></li>
                                            <li style="width:250px">نوع: <b><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['match']->value->bet_type);?>
</b></li>
                                            <li style="width:150px">انتخاب: <?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['match']->value->pick);?>
</li>
                                            <li style="width:150px">ضریب: <?php echo $_smarty_tpl->tpl_vars['match']->value->odd;?>
 </li>
                                            <li style="width:150px"
                                                <?php if ($_smarty_tpl->tpl_vars['match']->value->result_status == 2) {?>uk-text-danger<?php } elseif ($_smarty_tpl->tpl_vars['match']->value->result_status == 1) {?>uk-text-success<?php }?>>ضریب موثر: 
                                                <?php if ($_smarty_tpl->tpl_vars['match']->value->result_status == 1) {?>
                                                    <?php echo $_smarty_tpl->tpl_vars['match']->value->odd;?>

                                                <?php } elseif ($_smarty_tpl->tpl_vars['match']->value->result_status == 2) {?>
                                                    <span class='uk-text-danger'>0</span>
                                                <?php } elseif ($_smarty_tpl->tpl_vars['match']->value->result_status == 0) {?>-<?php }?>
                                            </li>

                                            <?php if ($_smarty_tpl->tpl_vars['match']->value->bookmaker_id != 404) {?>
                                                <li style="width:150px">
                                                    <a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/api/checkResultUpComingId/<?php echo $_smarty_tpl->tpl_vars['match']->value->match_id;?>
/<?php echo $_smarty_tpl->tpl_vars['match']->value->bets_user_id;?>
">بررسی مجدد تک بازی</a>
                                                </li>
                                                <li style="width:150px">
                                                    <a href="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
bets/api/checkResultMatch/<?php echo $_smarty_tpl->tpl_vars['match']->value->match_id;?>
/<?php echo $_smarty_tpl->tpl_vars['match']->value->bets_user_id;?>
">بررسی بازی های مشابه</a>
                                                </li>
                                            <?php }?>
                                            

                                            <?php if ($_smarty_tpl->tpl_vars['val']->value->type != 1) {?>
                                                <hr style="padding: 0;">
                                            <?php }?>
                                        </ul>
                                    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                                </td>
                                <td>
                                    <?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['val']->value->stake);?>

                                </td>
                                <td>
                                    <?php echo smarty_modifier_persian_number($_smarty_tpl->tpl_vars['val']->value->effective_odd);?>

                                </td>
                                <td>
                                    <b>
                                        <?php if ($_smarty_tpl->tpl_vars['val']->value->status == 0) {?>
                                            <span class="uk-text-warning">  بازی تمام نشده</span>
                                        <?php } elseif ($_smarty_tpl->tpl_vars['val']->value->status == 1) {?>
                                            <?php $_smarty_tpl->_assignInScope('winning', $_smarty_tpl->tpl_vars['val']->value->stake*$_smarty_tpl->tpl_vars['val']->value->effective_odd);
?>
                                            <span style="color:#00b957"><?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['winning']->value);?>
</span>
                                        <?php } elseif ($_smarty_tpl->tpl_vars['val']->value->status == 2) {?>
                                            <span style="color:red"><?php echo smarty_modifier_persian_number(0);?>
</span>
                                        <?php }?>
                                    </b>
                                </td>
                            </tr>
                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div><?php }
}
