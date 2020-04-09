<?php
function smarty_modifier_price_format($number) {
    $number = str_replace(array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'), array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'), number_format($number));
    return $number . ' تومان';
}
?>