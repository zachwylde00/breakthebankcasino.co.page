<?php
/* Smarty version 3.1.31, created on 2020-01-26 11:54:52
  from "/home/gang4bet/public_html/themes/admin/default/modules/bets/allBets.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e2d4cd443aa29_49887710',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'b69ed9d698d14d347d285f742074b1c4fb3989ae' => 
    array (
      0 => '/home/gang4bet/public_html/themes/admin/default/modules/bets/allBets.tpl',
      1 => 1521236364,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e2d4cd443aa29_49887710 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
if (!is_callable('smarty_modifier_con')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
if (!is_callable('smarty_function_jdate')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/function.jdate.php';
if (!is_callable('smarty_modifier_price_format')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/modifier.price_format.php';
if (!is_callable('smarty_modifier_fa')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/modifier.fa.php';
if (!is_callable('smarty_modifier_persian_number')) require_once '/home/gang4bet/public_html/TkStarApplication/smarty/plugins/modifier.persian_number.php';
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        <?php echo $_smarty_tpl->tpl_vars['title']->value;?>

    </h3>
    <div class="uk-width-medium-2-3 uk-margin-top uk-margin-bottom">
        <form method="GET" action="<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,'/bets/bets/search');?>
">
            <input type="text" name="q" />
            <input type="submit" value="بگرد" class="uk-button btn-success">
        </form>
    </div>

    <div class="md-card uk-margin-medium-bottom">
        <div class="md-card-content">
            <div class="dataTables_wrapper form-inline dt-uikit md-processed">
                <table style="overflow-x:hidden !important;overflow-y:hidden !important;" class="uk-table dataTable uk-table-striped" id="dt_default" role="grid" aria-describedby="dt_default_info">
                    <thead>
                        <tr>
                            <th class="sorting">زمان</th>
                            <th class="sorting">کاربر</th>
                            <th class="sorting"> نوع</th>
                            <th class="sorting"> شرط</th>
                            <th class="sorting">  ضریب</th>
                            <th class="sorting">مبلغ برد </th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th class="sorting">زمان</th>
                            <th class="sorting">کاربر</th>
                            <th class="sorting"> نوع</th>
                            <th class="sorting"> شرط</th>
                            <th class="sorting">  ضریب</th>
                            <th class="sorting">مبلغ برد </th>
                        </tr>
                    </tfoot>
                    <tbody style="overflow-x:hidden !important;overflow-y:hidden !important;" class="uk-table uk-table-striped">
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['betRecords']->value, 'val');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['val']->value) {
?>
                            <tr>
                                <td class="center"><?php echo smarty_function_jdate(array('format'=>'j F Y','date'=>$_smarty_tpl->tpl_vars['val']->value->created_at),$_smarty_tpl);?>
<br><?php echo smarty_function_jdate(array('format'=>'H:i:s','date'=>$_smarty_tpl->tpl_vars['val']->value->created_at),$_smarty_tpl);?>
</td>
                                <td class="center">
                                    <a href='<?php echo smarty_modifier_con(smarty_function_site_url(array(),$_smarty_tpl),ADMIN_PATH,"/bets/bets/view/",$_smarty_tpl->tpl_vars['val']->value->user->id);?>
'>
                                        <?php echo $_smarty_tpl->tpl_vars['val']->value->user->first_name;?>
 <?php echo $_smarty_tpl->tpl_vars['val']->value->user->last_name;?>

                                    </a>
                                </td>
                                <td>
                                    <?php if ($_smarty_tpl->tpl_vars['val']->value->type == 1) {?>
                                        تکی
                                    <?php } else { ?>
                                        میکس  <?php echo $_smarty_tpl->tpl_vars['val']->value->type;?>
 تایی
                                    <?php }?>
									<br>
									<?php echo smarty_modifier_price_format($_smarty_tpl->tpl_vars['val']->value->stake);?>

                                </td>
                                <td> 
                                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['val']->value->bet_form, 'match');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['match']->value) {
?>
                                        <ul class="detailbet">
                                            <li>بازی: <br><b><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['match']->value->home_team);?>
(<?php echo $_smarty_tpl->tpl_vars['match']->value->home_score_ft;?>
)<br><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['match']->value->away_team);?>
(<?php echo $_smarty_tpl->tpl_vars['match']->value->away_score_ft;?>
) </b></li>
                                            <li>نوع: <b><?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['match']->value->bet_type);?>
</b></li>
                                            <li>انتخاب: <?php echo smarty_modifier_fa($_smarty_tpl->tpl_vars['match']->value->pick);?>
 </li>
                                            <li>ضریب: <?php echo $_smarty_tpl->tpl_vars['match']->value->odd;?>
 </li>
                                            <li>ضریب موثر: <?php if ($_smarty_tpl->tpl_vars['match']->value->result_status == 1) {
echo $_smarty_tpl->tpl_vars['match']->value->odd;
} elseif ($_smarty_tpl->tpl_vars['match']->value->result_status == 2) {?><span class='uk-text-danger'>0</span><?php } elseif ($_smarty_tpl->tpl_vars['match']->value->result_status == 0) {?>-<?php }?> </li>
                                        </ul>
                                    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

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
            <div class="uk-grid">
            </div>
        </div>
    </div>


</div><?php }
}
