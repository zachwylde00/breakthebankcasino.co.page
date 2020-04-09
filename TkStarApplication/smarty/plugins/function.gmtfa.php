<?php

/*
 * Smarty plugin
 * -------------------------------------------------------------
 * File:     function.jdate.php
 * Type:     function
 * Name:     jdate
 * Purpose:  georgian date to jalali 
 * -------------------------------------------------------------
 */

function smarty_function_gmtfa ( $params , Smarty_Internal_Template $template ) {
    $GMT = new DateTimeZone('GMT');
    $Tehran = new DateTimeZone('Asia/Tehran');
    $date = new DateTime($params['time'] , $GMT);
    $date->setTimezone($Tehran);
    $dateTime = str_replace(array( '0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' ) , array( '0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' ) , $date->format($params['format']));
    return $dateTime;
}
