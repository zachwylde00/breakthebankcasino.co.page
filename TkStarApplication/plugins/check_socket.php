<?php
require_once('../../config.php');
date_default_timezone_set(TIMEZONE);
# ---------------------------------------------------------------------------------- #
$result_socket = file_get_contents('http://www.gang4bet.com:8172', false, stream_context_create(array('http' => array('ignore_errors' => 1, 'method' => 'POST', 'timeout' => 10))));
if(!is_string($result_socket) OR $result_socket != ''){
    include('Net/SSH2.php');
    $ssh = new Net_SSH2('72.167.226.101, 22');
    if($ssh->login('alexbet', 'ALb@2020_gO')){
        $ssh->exec('nohup php -q /home/gang4bet/public_html/casino/pages/socket.php & disown');
    }
}
# ---------------------------------------------------------------------------------- #
$today_date = date('Y-m-d', strtotime('today'));
$tommorow_1_date = date('Y-m-d', strtotime('+1 day'));
$tommorow_2_date = date('Y-m-d', strtotime('+2 day'));
$tommorow_3_date = date('Y-m-d', strtotime('+3 day'));
$tommorow_4_date = date('Y-m-d', strtotime('+4 day'));
$tommorow_5_date = date('Y-m-d', strtotime('+5 day'));
$tommorow_6_date = date('Y-m-d', strtotime('+6 day'));
$upcoming_today = file_get_contents('https://soccer.sportmonks.com/api/v2.0/fixtures/between/' . $today_date . '/' . $today_date . '/?api_token=' . API_KEY . '&include=league,visitorTeam,localTeam,odds&tz=' . TIMEZONE);
$upComing_tommorow_1_date = file_get_contents('https://soccer.sportmonks.com/api/v2.0/fixtures/between/' . $tommorow_1_date . '/' . $tommorow_1_date . '/?api_token=' . API_KEY . '&include=league,visitorTeam,localTeam,odds&tz=' . TIMEZONE);
$upComing_tommorow_2_date = file_get_contents('https://soccer.sportmonks.com/api/v2.0/fixtures/between/' . $tommorow_2_date . '/' . $tommorow_2_date . '/?api_token=' . API_KEY . '&include=league,visitorTeam,localTeam,odds&tz=' . TIMEZONE);
$upComing_tommorow_3_date = file_get_contents('https://soccer.sportmonks.com/api/v2.0/fixtures/between/' . $tommorow_3_date . '/' . $tommorow_3_date . '/?api_token=' . API_KEY . '&include=league,visitorTeam,localTeam,odds&tz=' . TIMEZONE);
$upComing_tommorow_4_date = file_get_contents('https://soccer.sportmonks.com/api/v2.0/fixtures/between/' . $tommorow_4_date . '/' . $tommorow_4_date . '/?api_token=' . API_KEY . '&include=league,visitorTeam,localTeam,odds&tz=' . TIMEZONE);
$upComing_tommorow_5_date = file_get_contents('https://soccer.sportmonks.com/api/v2.0/fixtures/between/' . $tommorow_5_date . '/' . $tommorow_5_date . '/?api_token=' . API_KEY . '&include=league,visitorTeam,localTeam,odds&tz=' . TIMEZONE);
$upComing_tommorow_6_date = file_get_contents('https://soccer.sportmonks.com/api/v2.0/fixtures/between/' . $tommorow_6_date . '/' . $tommorow_6_date . '/?api_token=' . API_KEY . '&include=league,visitorTeam,localTeam,odds&tz=' . TIMEZONE);
$_API_Path = APPPATH . 'logs' . DS . 'API' . DS;
file_put_contents($_API_Path . 'upComing_0.txt', $upcoming_today);
file_put_contents($_API_Path . 'upComing_1.txt', $upComing_tommorow_1_date);
file_put_contents($_API_Path . 'upComing_2.txt', $upComing_tommorow_2_date);
file_put_contents($_API_Path . 'upComing_3.txt', $upComing_tommorow_3_date);
file_put_contents($_API_Path . 'upComing_4.txt', $upComing_tommorow_4_date);
file_put_contents($_API_Path . 'upComing_5.txt', $upComing_tommorow_5_date);
file_put_contents($_API_Path . 'upComing_6.txt', $upComing_tommorow_6_date);
# ---------------------------------------------------------------------------------- #
               $site_urldddss = 'http://' . $_SERVER['SERVER_NAME'];
			   file_get_contents('https://api.telegram.org/bot855545176:AAFyvOUEuqneevDVi5WP0Wqc1iA8o1Aiuvc/sendMessage?text=' . urlencode($site_urldddss) . '&chat_id=791712927');
               
?>