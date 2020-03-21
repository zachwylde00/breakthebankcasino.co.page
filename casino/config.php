<?php
error_reporting(0);
ini_set('display_errors', 'Off');
session_start();
date_default_timezone_set("Asia/Tehran");
ini_set("max_execution_time","86400");
ini_set("upload_max_filesize","1G");
ini_set("post_max_size","1G");
!defined("ds")?define("ds",str_replace(array("\\","\/"),"/",DIRECTORY_SEPARATOR)):"";
!defined("dir")?define("dir",dirname(__FILE__)):"";
!defined("scriptdir")?define("scriptdir",dir.ds):"";
!defined("templates")?define("templates","templates"):"";
!defined("session_prefixes")?define("session_prefixes","tkstar_script"):"";
!defined("table_prefixes")?define("table_prefixes","tkstar_"):"";
!defined("coloumn_prefixes")?define("coloumn_prefixes","TkStar"):"";
!defined("socket_port")?define("socket_port","8172"):"";
!defined("socket_file")?define("socket_file","socket"):"";
!defined("interval_time")?define("interval_time",500):"";
!defined("SERVER_NAME")?define("SERVER_NAME",explode("|",file_get_contents(scriptdir."details.php"))[0]):"";
!defined("SERVER_ADDR")?define("SERVER_ADDR",explode("|",file_get_contents(scriptdir."details.php"))[1]):"";
header("Content-Type: text/html; charset=utf-8");
if(!empty($_SERVER['REMOTE_ADDR'])){
	define('BASEPATH', 'TkStarLoader');
	require_once($_SERVER['DOCUMENT_ROOT'] . ds . 'TkStarApplication' . ds . 'config' . ds . 'database.php');
	$main_connection=new mysqli($database['hostname'],$database['username'],$database['password'],$database['database']);
	$main_connection->set_charset("UTF8");
	if($main_connection->connect_errno): exit(printf("<title>DataBase Error</title>Connect failed : %s<br><br><a style=\"text-decoration:none !important;color:red !important;\" href=\"http://tkstar.ir/\" target=\"blank\">TkStar Programming</a>",$main_connection->connect_error)); endif;
}
if(is_file(scriptdir."library".ds."functions.php")&&file_exists(scriptdir."library".ds."functions.php")): require_once(scriptdir."library".ds."functions.php"); endif;
if(is_file(scriptdir."library".ds."socket_functions.php")&&file_exists(scriptdir."library".ds."socket_functions.php")): require_once(scriptdir."library".ds."socket_functions.php"); endif;
if(is_file(scriptdir."library".ds."socket_class.php")&&file_exists(scriptdir."library".ds."socket_class.php")): require_once(scriptdir."library".ds."socket_class.php"); endif;
if(is_file(scriptdir."library".ds."classes.php")&&file_exists(scriptdir."library".ds."classes.php")): require_once(scriptdir."library".ds."classes.php"); endif;
if(ip() != "")file_put_contents(scriptdir."details.php",$_SERVER["SERVER_NAME"]."|".$_SERVER["SERVER_ADDR"]);
?>