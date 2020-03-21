<?php
/* Smarty version 3.1.31, created on 2018-11-16 12:18:51
  from "/home/richbet/domains/richbet.xyz/public_html/themes/admin/default/modules/settings/leaguesHandle.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bee8473762540_82124556',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'a9990f5de0d47c5820c5b4d0eba9ee0e22efc856' => 
    array (
      0 => '/home/richbet/domains/richbet.xyz/public_html/themes/admin/default/modules/settings/leaguesHandle.tpl',
      1 => 1524549182,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5bee8473762540_82124556 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_modifier_con')) require_once '/home/richbet/domains/richbet.xyz/public_html/TkStarApplication/smarty/plugins/modifier.con.php';
?>
<div id="page_content_inner">
    <h3 class="heading_a title-top uk-margin-small-bottom">
        <?php echo 'تنظیمات سیستم';?>

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
                                    <input type="text" id="input_counter" class="<?php if ((NULL != form_error('footer'))) {
echo ' md-input-danger ';
}?>input-count md-input" name="leagueName" value="<?php echo set_value('leagueName',isset($_smarty_tpl->tpl_vars['footer']->value) ? $_smarty_tpl->tpl_vars['footer']->value : '');?>
" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <div class="  uk-margin-top">
                                    <label>نام تیم میزبان</label>
                                    <input type="text" id="input_counter" class="<?php if ((NULL != form_error('footer'))) {
echo ' md-input-danger ';
}?>input-count md-input" name="localTeam" value="<?php echo set_value('localTeam',isset($_smarty_tpl->tpl_vars['footer']->value) ? $_smarty_tpl->tpl_vars['footer']->value : '');?>
" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <div class="  uk-margin-top">
                                    <label>نام تیم میهمان</label>
                                    <input type="text" id="input_counter" class="<?php if ((NULL != form_error('footer'))) {
echo ' md-input-danger ';
}?>input-count md-input" name="visitorTeam" value="<?php echo set_value('visitorTeam',isset($_smarty_tpl->tpl_vars['footer']->value) ? $_smarty_tpl->tpl_vars['footer']->value : '');?>
" >
                                    <div id="input_counter_counter" class="text-count-wrapper">
                                    </div><span class="md-input-bar"></span>
                                </div>
                                <span class="error_page_content">
                                    <?php echo form_error('footer');?>
  
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
					<?php ob_start();
echo 'bets/getleagues/';
$_prefixVariable1=ob_get_clean();
ob_start();
echo site_url($_prefixVariable1);
$_prefixVariable2=ob_get_clean();
$_smarty_tpl->_assignInScope('leagues', json_decode(file_get_contents($_prefixVariable2),false));
?>
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['leagues']->value->leagues, 'value', false, 'key');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['key']->value => $_smarty_tpl->tpl_vars['value']->value) {
?>
                        <tr>
                            <td><?php echo $_smarty_tpl->tpl_vars['value']->value->league;?>
</td>
                            <td><?php echo $_smarty_tpl->tpl_vars['value']->value->local;?>
</td>
                            <td><?php echo $_smarty_tpl->tpl_vars['value']->value->visitor;?>
</td>
                            <td>
                                <a href="<?php ob_start();
echo smarty_modifier_con(ADMIN_PATH,'/settings/settings/deleteLeaguesHandle/',$_smarty_tpl->tpl_vars['value']->value->league,'/',$_smarty_tpl->tpl_vars['value']->value->local,'/',$_smarty_tpl->tpl_vars['value']->value->visitor);
$_prefixVariable3=ob_get_clean();
echo site_url($_prefixVariable3);?>
" class="md-btn md-btn-small md-btn-danger">رفع محدودیت و نمایش بازی</a>
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
</div> <?php }
}
