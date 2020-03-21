<?php
/* Smarty version 3.1.31, created on 2018-11-14 15:23:57
  from "/home/richbet/domains/richbet.xyz/public_html/themes/admin/default/modules/payment/trans_credit.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5bec0cd5af8dc1_89976739',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e0c4c4ccd9346652f6bfbce0ff4d1f441cdb4a18' => 
    array (
      0 => '/home/richbet/domains/richbet.xyz/public_html/themes/admin/default/modules/payment/trans_credit.tpl',
      1 => 1527903156,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:partials/dashboard_menu.tpl' => 1,
  ),
),false)) {
function content_5bec0cd5af8dc1_89976739 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_site_url')) require_once '/home/richbet/domains/richbet.xyz/public_html/TkStarApplication/smarty/plugins/function.site_url.php';
?>
<style type="text/css">
.topup-content .topupbtn
{
    border:1px solid #d3d3d3;
    display:inline-block;
    margin:10px 15px;
    padding:0;
    width:300px;
    height:80px;
    background:url(../assets/default/full_blue/images/payments2.png) no-repeat;

}
    .topup-content .perfect_money {
        background-position:0 -260px;
    }
    .topup-content .iranbank {
        background:url(../assets/default/full_blue/images/rialgw.png) no-repeat;
    }
</style>
<div>
    <div class="cell">
        <div class="container">
            <div class="maincontent">
                <?php $_smarty_tpl->_subTemplateRender("file:partials/dashboard_menu.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

                <div class="content">
                    <header>
                        <h1>حساب خود را شارژ کنید</h1>
                    </header>
                    <section class="row topup-content">
                        <p class="description">برای شارژ حساب نوع پرداخت را انتخاب کنید سپس مبلغ مورد نظر خود را در فرم وارد کنید و کلید پرداخت را بزنید.</p>
                        <div class="topup-options">
                            <a onclick="document.getElementById('pay_title').innerHTML = 'پرداخت از طریق درگاه بانکی';document.getElementById('type').value = 'iran_bank';document.getElementById('main_form').style.display = '';" class="topupbtn iranbank" href="javascript:void(0);"></a>
                            <a onclick="document.getElementById('pay_title').innerHTML = 'پرداخت از طریق پرفکت مانی';document.getElementById('type').value = 'pm';document.getElementById('main_form').style.display = '';" class="topupbtn iranbank" href="javascript:void(0);"></a>
                        </div>
                        <div class="topup-form" id="main_form" style="display:none;">
                            <section class="sitebox">
                                <div class="normal-form">
                                    <h2 id="pay_title"></h2>
                                    <form action="<?php echo smarty_function_site_url(array(),$_smarty_tpl);?>
payment/credit" method="post">
                                        <div class="siteform">
                                            <input type="hidden" value="" id="type" name="type" />
                                            <div class="amountinput">
                                                <label class="label" for="Amount">مبلغ به تومان</label>
                                                <input autocomplete="off" class="input ltrinput centre" data-val="true" data-val-number="The field مبلغ به تومان must be a number." data-val-range="حداقل مبلغ افزایش موجودی ۱۰۰۰ تومان است." data-val-range-max="2147483647" data-val-range-min="1000" data-val-regex="مبلغ به تومان باید با فرمت درست وارد شود. " data-val-regex-pattern="^\d+$" data-val-required="وارد کردن مبلغ به تومان الزامی است." id="Amount" name="amount" type="text" value="">
                                                <span class="field-validation-valid error_message" data-valmsg-for="Amount" data-valmsg-replace="true"></span>
                                                <span class="error_message max_error"></span>
                                            </div>
                                            <input class="btn btn-primary floatright" type="submit" value="پرداخت">
                                        </div>
                                    </form>                     
                                </div>
                            </section>
                        </div>


                    </section>
                </div>
            </div>
        </div>
    </div>
</div><?php }
}
