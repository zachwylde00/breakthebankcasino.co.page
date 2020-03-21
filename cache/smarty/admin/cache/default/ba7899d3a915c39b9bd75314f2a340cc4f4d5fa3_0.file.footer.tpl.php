<?php
/* Smarty version 3.1.31, created on 2020-03-05 15:26:20
  from "C:\laragon\www\gang4bet\themes\admin\default\partials\footer.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5e60e8e4553136_97346968',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'ba7899d3a915c39b9bd75314f2a340cc4f4d5fa3' => 
    array (
      0 => 'C:\\laragon\\www\\gang4bet\\themes\\admin\\default\\partials\\footer.tpl',
      1 => 1580785646,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5e60e8e4553136_97346968 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_assets_url')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\function.assets_url.php';
if (!is_callable('smarty_function_footer_js')) require_once 'C:\\laragon\\www\\gang4bet\\TkStarApplication\\smarty\\plugins\\function.footer_js.php';
?>
<!-- Footer -->
<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/moment/min/moment.min.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/js/common.min.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/js/uikit_custom.min.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/js/altair_admin_common.min.js"><?php echo '</script'; ?>
>


<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/ionrangeslider/js/ion.rangeSlider.min.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/js/uikit_htmleditor_custom.min.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/datatables/media/js/jquery.dataTables.min.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/datatables-colvis/js/dataTables.colVis.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/datatables-tabletools/js/dataTables.tableTools.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/js/custom/datatables_uikit.min.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/js/pages/plugins_datatables.min.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/jquery.inputmask/dist/jquery.inputmask.bundle.min.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/jquery.craftpip_confirmbox/js/jquery-confirm.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/slug/slug.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/PersianDate/dist/persian-date-0.1.8.min.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/bower_components/pwt.datepicker/dist/js/persian-datepicker-0.4.5.min.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/js/pages/forms_advanced.min.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
>
    window.FileAPI = {
        debug: false // debug mode
        , staticPath: '<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/lib/jquery.fileapi/FileAPI/' // path to *.swf
    };
<?php echo '</script'; ?>
>

<?php echo smarty_function_footer_js(array(),$_smarty_tpl);?>

<?php echo '<script'; ?>
>
    // load parsley config (altair_admin_common.js)
    altair_forms.parsley_validation_config();
<?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="<?php echo smarty_function_assets_url(array(),$_smarty_tpl);?>
/js/main.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
>
    $(function () {
        altair_helpers.retina_images();
    });
<?php echo '</script'; ?>
>
</body>

</html><?php }
}
