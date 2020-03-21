<?php
include_once("config.php");
$uri=(uri("p1")==""||uri("p1")=="index")?"index":((uri("pages")=="card")?uri("p1"):uri("p1"));
$address=scriptdir."pages".ds.$uri.".php";
if(is_file($address)&&file_exists($address)):require_once($address);else:require_once(scriptdir."pages".ds."404.php");exit();endif;
?>