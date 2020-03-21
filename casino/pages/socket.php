<?php
$_functions_dir=str_replace(array("pages/socket.php", "pages\socket.php"), array(""), realpath(__FILE__));
require_once($_functions_dir."config.php");
class ClientsCore {
	public static $dbDetails;
	public static $clients;
}
!defined('BASEPATH') ? define('BASEPATH', 'TkStarLoader') : '';
ini_set('display_errors', 'On');
error_reporting(E_ALL);
require_once(__DIR__ . '/../../TkStarApplication/config/database.php');
!is_array(ClientsCore::$dbDetails) ? ClientsCore::$dbDetails = $database : '';
$main_connection = new mysqli(ClientsCore::$dbDetails['hostname'], ClientsCore::$dbDetails['username'], ClientsCore::$dbDetails['password'], ClientsCore::$dbDetails['database']);
$main_connection->set_charset('UTF8');
$host = '0.0.0.0';
$port = 8172;
$socket_client = new PHPWebSocket();
$socket_client->bind('message', 'wsOnMessage');
$socket_client->bind('open', 'wsOnOpen');
$socket_client->bind('close', 'wsOnClose');
$socket_client->wsStartServer($host, $port);
function wsOnMessage($requester_client_id, $message){
	global $socket_client, $main_connection;
	$explode_message = explode('|', $message);
	$message_parameter = $message . '|' . long2ip($socket_client->wsClients[$requester_client_id][6]);
	$message_parameter_with_client_id = $message_parameter . '|' . $requester_client_id;
	switch($explode_message[0]){
		case('socket_roomCreate'): $socket_client->wsSend($requester_client_id, socket_roomCreate($message_parameter)); break;
		case('socket_roomCreate2'): $socket_client->wsSend($requester_client_id, socket_roomCreate2($message_parameter)); break;
		case('socket_roomJoin'): $socket_client->wsSend($requester_client_id, socket_roomJoin($message_parameter)); break;
		case('socket_roomJoin2'): $socket_client->wsSend($requester_client_id, socket_roomJoin2($message_parameter)); break;
		case('socket_getLastChanges'): $socket_client->wsSend($requester_client_id, socket_getLastChanges($message_parameter)); break;
		case('socket_getLastChanges2'): $socket_client->wsSend($requester_client_id, socket_getLastChanges2($message_parameter)); break;
		case('socket_showCards'): $socket_client->wsSend($requester_client_id, socket_showCards($message_parameter)); break;
		case('socket_showKing'): $socket_client->wsSend($requester_client_id, socket_showKing($message_parameter)); break;
		case('socket_showVerdict'): $socket_client->wsSend($requester_client_id, socket_showVerdict($message_parameter)); break;
		case('socket_removeFirstTwoCards'): $socket_client->wsSend($requester_client_id, socket_removeFirstTwoCards($message_parameter)); break;
		case('socket_chooseCards'): $socket_client->wsSend($requester_client_id, socket_chooseCards($message_parameter)); break;
		case('socket_gameStartCards'): $socket_client->wsSend($requester_client_id, socket_gameStartCards($message_parameter)); break;
		case('socket_sendCard'): $socket_client->wsSend($requester_client_id, socket_sendCard($message_parameter)); break;
		case('socket_sendCard2'): $socket_client->wsSend($requester_client_id, socket_sendCard2($message_parameter)); break;
		case('socket_requestForDouble'): $socket_client->wsSend($requester_client_id, socket_requestForDouble($message_parameter)); break;
		case('socket_requestForDouble2'): $socket_client->wsSend($requester_client_id, socket_requestForDouble2($message_parameter)); break;
		case('socket_changeDoubleStatus'): $socket_client->wsSend($requester_client_id, socket_changeDoubleStatus($message_parameter)); break;
		case('socket_changeDoubleStatus2'): $socket_client->wsSend($requester_client_id, socket_changeDoubleStatus2($message_parameter)); break;
		case('socket_clearLastChange'): $socket_client->wsSend($requester_client_id, socket_clearLastChange($message_parameter)); break;
		case('socket_gameClose'): $socket_client->wsSend($requester_client_id, socket_gameClose($message_parameter)); break;
		case('socket_gameClose2'): $socket_client->wsSend($requester_client_id, socket_gameClose2($message_parameter)); break;
		case('crash_new_round'):
			$message = explode('|', $message);
			$message[1] = safe_number($message[1]);
			if(count(ClientsCore::$clients) <= 1){
				$main_connection->query("UPDATE `crash_table` SET `finish_time` = '" . time() . "', `play` = '0'");
			}
			$main_connection->query("UPDATE `crash_table` SET `time` >= '" . strtotime('-90 seconds') . "', `play` = '0'");
			$query_check_lastCrash = $main_connection->query("SELECT * FROM `crash_table` ORDER BY `id` DESC LIMIT 1");
			$row_check_lastCrash = $query_check_lastCrash->fetch_array(MYSQLI_ASSOC);
			settype($row_check_lastCrash['play'], 'int');
			if($row_check_lastCrash['play'] == 0){
				$first_array = array(
					array(1, 2),
					array(1, 6),
					array(1, 3),
					array(1, 2.5),
					array(1, 3.5),
					array(1, 4),
					array(1, 3),
					array(1, 2),
					array(1, 1),
					array(1.1, 2.25),
					array(1.5, 2.5),
					array(5, 10),
					array(2, 3),
					array(2, 75),
					array(1, 3.5),
					array(2, 2.75),
					array(2, 2.65),
					array(3, 7),
					array(1, 1.85),
					array(3, 6),
					array(5, 10),
					array(3, 4),
					array(1, 2),
					array(2, 3),
					array(1, 3),
					array(1, 5),
					array(2, 8),
					array(1, 5),
					array(1, 4),
					array(2, 5),
					array(3, 6),
					array(3, 7),
					array(10, 20),
					array(10, 15),
					array(1, 3),
					array(1, 5),
					array(1, 1.90),
					array(1, 2),
					array(2, 2.35),
					array(1, 4),
					array(2, 4),
					array(1, 2),
					array(3, 6),
					array(1, 1.25),
					array(1.5, 1.95),
					array(1.5, 2),
					array(2, 2.80),
					array(2.20, 2.75),
					array(2, 5.25),
					array(3, 7),
					array(3, 2),
					array(2, 3),
					array(1, 1.15),
					array(1, 1.75),
					array(2, 2.90),
					array(1, 1.45),
					array(2, 3),
					array(1, 2),
					array(3, 4),
					array(4, 5)
				);
				$selected_array = $first_array[array_rand($first_array)];
				$random_number = round(float_rand($selected_array[0], $selected_array[1]), 2);
				$random_number = $random_number < 1 ? 0 : $random_number;
				$names = array('King Mamad', 'AmirAli', 'N@srin', 'R3z@', 'شادی', 'Amita', 'مملی', 'فراز', 'Alexi', 'چقدر بد شانسم', 'Limoozin', 'Jaguare', 'پروانه', 'Falko', 'ShadowFiend', 'Cris7', 'یوزارسیف', 'ستاره', 'MaHaN', 'فرشاد');
				$fake_user_count = rand(5, 10);
				$array_fake_users = array();
				for($i = 0; $i <= $fake_user_count; $i++){
					$random_index = rand(1, count($names));
					if(empty($names[$random_index])){
						continue;
					}else{
						$random_price = ceil(rand(500, 250000));
						$random_price_string = (string)$random_price;
						$random_price_string_half = floor(strlen($random_price) / 2);
						$random_price = mb_substr($random_price_string, 0, $random_price_string_half, 'utf-8');
						for($j = 0; $j < $random_price_string_half; $j++){
							$random_price = $random_price . '0';
						}
						$random_number_fake = rand(1, 2);
						$random_float = float_rand($random_number_fake, ($random_number_fake + 1));
						$array_fake_users['10000000000' . $i] = array('username' => $names[$random_index], 'price' => $random_price, 'odd' => '0', 'win' => 0, 'fake' => 'true', 'fake_last_odd' => round($random_float, 2));
						unset($names[$random_index]);
					}
				}
				ksort($array_fake_users);
				$main_connection->query("INSERT INTO `crash_table` (`id`, `last_odd`, `time`, `finish_time`, `play`, `users`) VALUES (NULL, '" . $random_number . "', '" . time() . "', '0', '1', '" . json_encode($array_fake_users, JSON_UNESCAPED_UNICODE) . "')");
				$insert_id = $main_connection->insert_id;
				$history_request = '';
				$query_history = $main_connection->query("SELECT * FROM `crash_table` ORDER BY `id` DESC LIMIT 50");
				while($row_history = $query_history->fetch_array(MYSQLI_ASSOC)){
					$users = $row_history['users'];
					$users = json_decode($users, true);
					$me_in_this_crash = 'false';
					foreach($users as $user_id => $user_odd){
						if($user_id == $message[1]){
							$me_in_this_crash = 'true';
							break;
						}else{
							$me_in_this_crash = 'false';
							continue;
						}
					}
					if($me_in_this_crash == 'true'){
						if($users[$message[1]]['win'] == '2'){
							$my_sood = '<span class="text-danger">0 تومان</span>';
						}else{
							if($users[$message[1]]['win'] == '1'){
								$my_odd = $users[$message[1]]['odd'];
								$my_price = $users[$message[1]]['price'];
								$my_win_price = $my_odd * $my_price;
								$my_sood = '<span class="text-success">' . number_format($my_win_price - $my_price) . ' تومان</span>';
							}else{
								$my_sood = '-';
							}
						}
					}else{
						$my_sood = '-';
					}
					$history_request .= '<tr><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . $row_history['id'] . '</td><td style="text-align: center !important;">' . ($row_history['finish_time'] == 0 ? '-' : $row_history['last_odd']) . '</td><td style="text-align: center !important;">' . ($me_in_this_crash == 'true' ? number_format($users[$message[1]]['price']) . ' تومان' : '-') . '</td><td style="text-align: center !important;">' . ($me_in_this_crash == 'true' ? ($users[$message[1]]['win'] == '1' ? '<span class="text-success">' . round($users[$message[1]]['odd'], 2) . '</span' : ($users[$message[1]]['win'] == '2' ? '<span class="text-danger">' . $row_history['last_odd'] . '</span>' : '-')) : '-') . '</td><td style="text-align: center !important;">' . $my_sood . '</td><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . hash('md2', $row_history['time']) . '</td><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . ($row_history['finish_time'] == '0' ? '-' : hash('md5', $row_history['finish_time'])) . '</td></tr>';
				}
				foreach(ClientsCore::$clients as $client_id => $client_status){
					$socket_client->wsSend($client_id, 'round_start|' . $insert_id . '|' . $random_number . '|' . $history_request . '|' . json_encode($array_fake_users, JSON_UNESCAPED_UNICODE));
				}
			}
			break;
		case('crash_reduce_wallet'):
			$message = explode('|', $message);
			$message[1] = safe_codes($message[1]);
			$message[2] = round(safe_number($message[2]));
			$message[3] = round(safe_number($message[3]));
			$message[4] = round(safe_number($message[4]));
			$main_connection->query("UPDATE `users` SET `cash` = `cash` - " . $message[1] . " WHERE `id` = '" . $message[2] . "'");
			$query_check_user = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $message[2] . "'");
			if($query_check_user->num_rows <= 0){
				return false;
			}else{
    			$affiliate_count = $main_connection->query("SELECT * FROM `settings` WHERE `code` = 'affiliate_count'");
    			$affiliate_count = $affiliate_count->fetch_array(MYSQLI_ASSOC);
    			$affiliate_count = (object)$affiliate_count;
    			$affiliate_count = $affiliate_count->value;
				$row_check_user = $query_check_user->fetch_array(MYSQLI_ASSOC);
			    if(!empty($row_check_user['ref_id']) AND is_numeric($row_check_user['ref_id']) AND $row_check_user['ref_id'] >= 1){
			        $query_referral = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $row_check_user['ref_id'] . "'");
			        if($query_referral->num_rows >= 1){
			            $query_referral = $query_referral->fetch_array(MYSQLI_ASSOC);
			            $query_referral = (object)$query_referral;
			            $query_referral_cash = $query_referral->cash;
				        $total_price = ($affiliate_count / 100) * $message[1];
                        $new_referral_cash = $query_referral_cash + $total_price;
                        $new_referral_cash = round($new_referral_cash);
                        $trans_id = $row_check_user['ref_id'] . time();
                        $main_connection->query("UPDATE `users` SET `cash` = '" . $new_referral_cash . "' WHERE `id` = '" . $row_check_user['ref_id'] . "'");
                        $main_connection->query("INSERT INTO `transactions` (`id`, `price`, `invoice_type`, `description`, `user_id`, `transaction_states`, `created_at`, `updated_at`, `trans_id`, `cash`, `status`, `savano`) VALUES (NULL, '" . $total_price . "', '2', 'واریز سود باخت از بازی زیر مجموعه', '184', '" . $row_check_user['ref_id'] . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '" . $trans_id . "', '" . $new_referral_cash . "', '1', '')");
			        }
				}
	        }
			break;
		case('check_crash_users'):
			$message = explode('|', $message);
			$message[1] = safe_codes($message[1]);
			$query_check_users = $main_connection->query("SELECT * FROM `crash_table` WHERE `id` = '" . $message[1] . "'");
			if(!$main_connection->error){
		    	$row_check_users = $query_check_users->fetch_array(MYSQLI_ASSOC);
    			$new_game_users = json_decode($row_check_users['users'], true);
    			$history_request = '';
    			$query_history = $main_connection->query("SELECT * FROM `crash_table` ORDER BY `id` DESC LIMIT 50");
    			while($row_history = $query_history->fetch_array(MYSQLI_ASSOC)){
    				$users = $row_history['users'];
    				$users = json_decode($users, true);
    				$me_in_this_crash = 'false';
    				foreach($users as $user_id => $user_odd){
    					if($user_id == $message[1]){
    						$me_in_this_crash = 'true';
    						break;
    					}else{
    						$me_in_this_crash = 'false';
    						continue;
    					}
    				}
    				if($me_in_this_crash == 'true'){
    					if($users[$message[3]]['win'] == '2'){
    						$my_sood = '<span class="text-danger">0 تومان</span>';
    					}else{
    						if($users[$message[3]]['win'] == '1'){
    							$my_odd = $users[$message[3]]['odd'];
    							$my_price = $users[$message[3]]['price'];
    							$my_win_price = $my_odd * $my_price;
    							$my_sood = '<span class="text-success">' . number_format($my_win_price - $my_price) . ' تومان</span>';
    						}else{
    							$my_sood = '-';
    						}
    					}
    				}else{
    					$my_sood = '-';
    				}
    				$history_request .= '<tr><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . $row_history['id'] . '</td><td style="text-align: center !important;">' . ($row_history['finish_time'] == 0 ? '-' : $row_history['last_odd']) . '</td><td style="text-align: center !important;">' . ($me_in_this_crash == 'true' ? number_format($users[$message[3]]['price']) . ' تومان' : '-') . '</td><td style="text-align: center !important;">' . ($me_in_this_crash == 'true' ? ($users[$message[3]]['win'] == '1' ? '<span class="text-success">' . round($users[$message[3]]['odd'], 2) . '</span' : ($users[$message[3]]['win'] == '2' ? '<span class="text-danger">' . $row_history['last_odd'] . '</span>' : '-')) : '-') . '</td><td style="text-align: center !important;">' . $my_sood . '</td><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . hash('md2', $row_history['time']) . '</td><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . ($row_history['finish_time'] == '0' ? '-' : hash('md5', $row_history['finish_time'])) . '</td></tr>';
    			}
    			$game_users = json_encode(array_values($new_game_users), JSON_UNESCAPED_UNICODE);
    			foreach(ClientsCore::$clients as $client_id => $client_status){
    				$socket_client->wsSend($client_id, 'crash_users|' . $game_users . '|' . $history_request);
    			}
			}
			break;
		case('crash_add_wallet'):
			$message = explode('|', $message);
			$message[1] = round($message[1]);
			$message[2] = safe_number($message[2]);
			$message[3] = safe_codes($message[3]);
			$message[4] = safe_codes($message[4]);
			$query_check_crash_game = $main_connection->query("SELECT * FROM `crash_table` WHERE `id` = '" . $message[4] . "'");
			$row_check_crash_game = $query_check_crash_game->fetch_array(MYSQLI_ASSOC);
			$game_users = $row_check_crash_game['users'];
			$game_users = json_decode($game_users, true);
			$game_users[$message[2]]['odd'] = $message[3];
			$game_users[$message[2]]['win'] = '1';
			$game_users = json_encode($game_users, JSON_UNESCAPED_UNICODE);
			$main_connection->query("UPDATE `crash_table` SET `users` = '" . $game_users . "' WHERE `id` = '" . $message[4] . "'");
			$game_users = json_decode($game_users, true);
			$new_game_users = array();
			foreach($game_users as $key => $value){
				$new_game_users[] = $value;
			}
			$history_request = '';
			$query_history = $main_connection->query("SELECT * FROM `crash_table` ORDER BY `id` DESC LIMIT 50");
			while($row_history = $query_history->fetch_array(MYSQLI_ASSOC)){
				$users = $row_history['users'];
				$users = json_decode($users, true);
				$me_in_this_crash = 'false';
				foreach($users as $user_id => $user_odd){
					if($user_id == $message[2]){
						$me_in_this_crash = 'true';
						break;
					}else{
						$me_in_this_crash = 'false';
						continue;
					}
				}
				if($me_in_this_crash == 'true'){
					if($users[$message[2]]['win'] == '2'){
						$my_sood = '<span class="text-danger">0 تومان</span>';
					}else{
						if($users[$message[2]]['win'] == '1'){
							$my_odd = $users[$message[2]]['odd'];
							$my_price = $users[$message[2]]['price'];
							$my_win_price = $my_odd * $my_price;
							$my_sood = '<span class="text-success">' . number_format($my_win_price - $my_price) . ' تومان</span>';
						}else{
							$my_sood = '-';
						}
					}
				}else{
					$my_sood = '-';
				}
				$history_request .= '<tr><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . $row_history['id'] . '</td><td style="text-align: center !important;">' . ($row_history['finish_time'] == 0 ? '-' : $row_history['last_odd']) . '</td><td style="text-align: center !important;">' . ($me_in_this_crash == 'true' ? number_format($users[$message[2]]['price']) . ' تومان' : '-') . '</td><td style="text-align: center !important;">' . ($me_in_this_crash == 'true' ? ($users[$message[2]]['win'] == '1' ? '<span class="text-success">' . round($users[$message[2]]['odd'], 2) . '</span' : ($users[$message[2]]['win'] == '2' ? '<span class="text-danger">' . $row_history['last_odd'] . '</span>' : '-')) : '-') . '</td><td style="text-align: center !important;">' . $my_sood . '</td><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . hash('md2', $row_history['time']) . '</td><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . ($row_history['finish_time'] == '0' ? '-' : hash('md5', $row_history['finish_time'])) . '</td></tr>';
			}
			$game_users = json_encode(array_values($new_game_users), JSON_UNESCAPED_UNICODE);
			foreach(ClientsCore::$clients as $client_id => $client_status){
				$socket_client->wsSend($client_id, 'list_users|' . $game_users . '|' . $history_request);
			}
			$main_connection->query("UPDATE `users` SET `cash` = `cash` + " . $message[1] . " WHERE `id` = '" . $message[2] . "'");
			break;
		case('crash_close_round'):
			$message = explode('|', $message);
			$message[1] = safe_codes($message[1]);
			$message[2] = safe_number($message[2]);
			$main_connection->query("UPDATE `crash_table` SET `finish_time` = '" . time() . "', `play` = '0' WHERE `id` = '" . $message[1] . "'");
			$query_check_crash_game = $main_connection->query("SELECT * FROM `crash_table` WHERE `id` = '" . $message[1] . "'");
			$row_check_crash_game = $query_check_crash_game->fetch_array(MYSQLI_ASSOC);
			$game_users = $row_check_crash_game['users'];
			$game_users = json_decode($game_users, true);
			foreach($game_users as $key => $index){
				if($index['win'] == '0'){
					$game_users[$key]['win'] = '2';
					$game_users[$key]['odd'] = $row_check_crash_game['last_odd'];
				}
			}
			$game_users = json_encode($game_users, JSON_UNESCAPED_UNICODE);
			$main_connection->query("UPDATE `crash_table` SET `users` = '" . $game_users . "' WHERE `id` = '" . $message[1] . "'");
			$game_users = json_decode((!empty($game_users) ? $game_users : '[]'), true);
			$new_game_users = array();
			if(is_array($game_users) OR is_object($game_users) AND !empty($game_users) AND !isset($game_users)){
				foreach($game_users as $key => $value){
					$new_game_users[] = $value;
				}
			}
			$history_request = '';
			$query_history = $main_connection->query("SELECT * FROM `crash_table` ORDER BY `id` DESC LIMIT 50");
			while($row_history = $query_history->fetch_array(MYSQLI_ASSOC)){
				$users = $row_history['users'];
				$users = json_decode($users, true);
				$me_in_this_crash = 'false';
				foreach($users as $user_id => $user_odd){
					if($user_id == $message[2]){
						$me_in_this_crash = 'true';
						break;
					}else{
						$me_in_this_crash = 'false';
						continue;
					}
				}
				if($me_in_this_crash == 'true'){
					if($users[$message[2]]['win'] == '2'){
						$my_sood = '<span class="text-danger">0 تومان</span>';
					}else{
						if($users[$message[2]]['win'] == '1'){
							$my_odd = $users[$message[2]]['odd'];
							$my_price = $users[$message[2]]['price'];
							$my_win_price = $my_odd * $my_price;
							$my_sood = '<span class="text-success">' . number_format($my_win_price - $my_price) . ' تومان</span>';
						}else{
							$my_sood = '-';
						}
					}
				}else{
					$my_sood = '-';
				}
				$history_request .= '<tr><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . $row_history['id'] . '</td><td style="text-align: center !important;">' . ($row_history['finish_time'] == 0 ? '-' : $row_history['last_odd']) . '</td><td style="text-align: center !important;">' . ($me_in_this_crash == 'true' ? number_format($users[$message[2]]['price']) . ' تومان' : '-') . '</td><td style="text-align: center !important;">' . ($me_in_this_crash == 'true' ? ($users[$message[2]]['win'] == '1' ? '<span class="text-success">' . round($users[$message[2]]['odd'], 2) . '</span' : ($users[$message[2]]['win'] == '2' ? '<span class="text-danger">' . $row_history['last_odd'] . '</span>' : '-')) : '-') . '</td><td style="text-align: center !important;">' . $my_sood . '</td><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . hash('md2', $row_history['time']) . '</td><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . ($row_history['finish_time'] == '0' ? '-' : hash('md5', $row_history['finish_time'])) . '</td></tr>';
			}
			$game_users = json_encode(array_values($new_game_users), JSON_UNESCAPED_UNICODE);
			foreach(ClientsCore::$clients as $client_id => $client_status){
				$socket_client->wsSend($client_id, 'list_users|' . $game_users . '|' . $history_request);
			}
			break;
		case('crash_add_user'):
			$message = explode('|', $message);
			$message[1] = safe_codes($message[1]);
			$message[2] = safe_codes($message[2]);
			$message[3] = safe_number($message[3]);
			$query_check_crash_game = $main_connection->query("SELECT * FROM `crash_table` WHERE `id` = '" . $message[1] . "'");
			if($query_check_crash_game->num_rows <= 0){
				return false;
			}else{
				$me_details = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $message[3] . "'")->fetch_array(MYSQLI_ASSOC);
				$row_check_crash_game = $query_check_crash_game->fetch_array(MYSQLI_ASSOC);
				$game_users = $row_check_crash_game['users'];
				$game_users = json_decode($game_users, true);
				if(isset($game_users[$message[3]])){
					unset($game_users[$message[3]]);
				}else{
					$game_users[$message[3]] = array('username' => $me_details['first_name'] . ' ' . $me_details['last_name'], 'price' => $message[2], 'odd' => '0', 'win' => 0);
				}
				$game_users = json_encode($game_users, JSON_UNESCAPED_UNICODE);
			}
			$main_connection->query("UPDATE `crash_table` SET `users` = '" . $game_users . "' WHERE `id` = '" . $message[1] . "'");
			$game_users = json_decode($game_users, true);
			$new_game_users = array();
			foreach($game_users as $key => $value){
				$new_game_users[] = $value;
			}
			$history_request = '';
			$query_history = $main_connection->query("SELECT * FROM `crash_table` ORDER BY `id` DESC LIMIT 50");
			while($row_history = $query_history->fetch_array(MYSQLI_ASSOC)){
				$users = $row_history['users'];
				$users = json_decode($users, true);
				$me_in_this_crash = 'false';
				foreach($users as $user_id => $user_odd){
					if($user_id == $message[3]){
						$me_in_this_crash = 'true';
						break;
					}else{
						$me_in_this_crash = 'false';
						continue;
					}
				}
				if($me_in_this_crash == 'true'){
					if($users[$message[3]]['win'] == '2'){
						$my_sood = '<span class="text-danger">0 تومان</span>';
					}else{
						if($users[$message[3]]['win'] == '1'){
							$my_odd = $users[$message[3]]['odd'];
							$my_price = $users[$message[3]]['price'];
							$my_win_price = $my_odd * $my_price;
							$my_sood = '<span class="text-success">' . number_format($my_win_price - $my_price) . ' تومان</span>';
						}else{
							$my_sood = '-';
						}
					}
				}else{
					$my_sood = '-';
				}
				$history_request .= '<tr><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . $row_history['id'] . '</td><td style="text-align: center !important;">' . ($row_history['finish_time'] == 0 ? '-' : $row_history['last_odd']) . '</td><td style="text-align: center !important;">' . ($me_in_this_crash == 'true' ? number_format($users[$message[3]]['price']) . ' تومان' : '-') . '</td><td style="text-align: center !important;">' . ($me_in_this_crash == 'true' ? ($users[$message[3]]['win'] == '1' ? '<span class="text-success">' . round($users[$message[3]]['odd'], 2) . '</span' : ($users[$message[3]]['win'] == '2' ? '<span class="text-danger">' . $row_history['last_odd'] . '</span>' : '-')) : '-') . '</td><td style="text-align: center !important;">' . $my_sood . '</td><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . hash('md2', $row_history['time']) . '</td><td style="text-align: center !important;" class="hidden-xs hidden-sm">' . ($row_history['finish_time'] == '0' ? '-' : hash('md5', $row_history['finish_time'])) . '</td></tr>';
			}
			$game_users = json_encode(array_values($new_game_users), JSON_UNESCAPED_UNICODE);
			foreach(ClientsCore::$clients as $client_id => $client_status){
				$socket_client->wsSend($client_id, 'list_users|' . $game_users . '|' . $history_request);
			}
			break;
		case('blackjack_save_wallet'):
			$message = explode('|', $message);
			$message[1] = safe_codes($message[1]);
			$message[2] = safe_codes($message[2]);
			$affiliate_count = $main_connection->query("SELECT * FROM `settings` WHERE `code` = 'affiliate_count'");
			$affiliate_count = $affiliate_count->fetch_array(MYSQLI_ASSOC);
			$affiliate_count = (object)$affiliate_count;
			$affiliate_count = $affiliate_count->value;
			$query_check_user = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $message[1] . "'");
			if($query_check_user->num_rows <= 0){
				return false;
			}else{
				$row_check_user = $query_check_user->fetch_array(MYSQLI_ASSOC);
				$bet_price = $message[2] - $row_check_user['cash'];
	            $bet_price_to_referral = (string)$bet_price;
	            $bet_price_to_referral = str_replace(array('-'), array(''), $bet_price_to_referral);
				if((isset($message[3]) AND $message[3] == 'lose') OR $bet_price <= -1){
				    if(!empty($row_check_user['ref_id']) AND is_numeric($row_check_user['ref_id']) AND $row_check_user['ref_id'] >= 1){
				        $query_referral = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $row_check_user['ref_id'] . "'");
				        if($query_referral->num_rows >= 1){
				            $query_referral = $query_referral->fetch_array(MYSQLI_ASSOC);
				            $query_referral = (object)$query_referral;
				            $query_referral_cash = $query_referral->cash;
					        $total_price = ($affiliate_count / 100) * $bet_price_to_referral;
                            $new_referral_cash = $query_referral_cash + $total_price;
                            $new_referral_cash = round($new_referral_cash);
                            $trans_id = $row_check_user['ref_id'] . time();
                            $main_connection->query("UPDATE `users` SET `cash` = '" . $new_referral_cash . "' WHERE `id` = '" . $row_check_user['ref_id'] . "'");
                            $main_connection->query("INSERT INTO `transactions` (`id`, `price`, `invoice_type`, `description`, `user_id`, `transaction_states`, `created_at`, `updated_at`, `trans_id`, `cash`, `status`, `savano`) VALUES (NULL, '" . $total_price . "', '2', 'واریز سود باخت از بازی زیر مجموعه', '184', '" . $row_check_user['ref_id'] . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '" . $trans_id . "', '" . $new_referral_cash . "', '1', '')");
				        }
				    }
				}
				$main_connection->query("UPDATE `users` SET `cash` = '" . $message[2] . "' WHERE `id` = '" . $message[1] . "'");
				$main_connection->query("INSERT INTO `blackjacks_table` (id, user, time, ip, price, type) VALUES (NULL, '" . $message[1] . "', '" . time() . "', '" . long2ip($socket_client->wsClients[$requester_client_id][6]) . "', '" . $bet_price . "', '" . $message[3] . "')");
				return true;
			}
			break;
		case('roulette_save_wallet'):
			$message = explode('|', $message);
			$message[1] = safe_codes($message[1]);
			$message[2] = safe_codes($message[2]);
			$message[3] = safe_codes($message[3]);
			$affiliate_count = $main_connection->query("SELECT * FROM `settings` WHERE `code` = 'affiliate_count'");
			$affiliate_count = $affiliate_count->fetch_array(MYSQLI_ASSOC);
			$affiliate_count = (object)$affiliate_count;
			$affiliate_count = $affiliate_count->value;
			$query_check_user = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $message[1] . "'");
			if($query_check_user->num_rows <= 0){
				return false;
			}else{
				$row_check_user = $query_check_user->fetch_array(MYSQLI_ASSOC);
				$bet_price = $message[2] - $row_check_user['cash'];
	            $bet_price_to_referral = (string)$bet_price;
	            $bet_price_to_referral = str_replace(array('-'), array(''), $bet_price_to_referral);
				if((isset($message[3]) AND $message[3] == 'lose') OR $bet_price <= -1){
				    if(!empty($row_check_user['ref_id']) AND is_numeric($row_check_user['ref_id']) AND $row_check_user['ref_id'] >= 1){
				        $query_referral = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $row_check_user['ref_id'] . "'");
				        if($query_referral->num_rows >= 1){
				            $query_referral = $query_referral->fetch_array(MYSQLI_ASSOC);
				            $query_referral = (object)$query_referral;
				            $query_referral_cash = $query_referral->cash;
					        $total_price = ($affiliate_count / 100) * $bet_price_to_referral;
                            $new_referral_cash = $query_referral_cash + $total_price;
                            $new_referral_cash = round($new_referral_cash);
                            $trans_id = $row_check_user['ref_id'] . time();
                            $main_connection->query("UPDATE `users` SET `cash` = '" . $new_referral_cash . "' WHERE `id` = '" . $row_check_user['ref_id'] . "'");
                            $main_connection->query("INSERT INTO `transactions` (`id`, `price`, `invoice_type`, `description`, `user_id`, `transaction_states`, `created_at`, `updated_at`, `trans_id`, `cash`, `status`, `savano`) VALUES (NULL, '" . $total_price . "', '2', 'واریز سود باخت از بازی زیر مجموعه', '184', '" . $row_check_user['ref_id'] . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '" . $trans_id . "', '" . $new_referral_cash . "', '1', '')");
				        }
				    }
				}
				$main_connection->query("UPDATE `users` SET `cash` = '" . $message[2] . "' WHERE `id` = '" . $message[1] . "'");
				$main_connection->query("INSERT INTO `roulettes_table` (id, user, time, ip, price, type) VALUES (NULL, '" . $message[1] . "', '" . time() . "', '" . long2ip($socket_client->wsClients[$requester_client_id][6]) . "', '" . $bet_price . "', '" . $message[3] . "')");
				return true;
			}
			break;
		case('plinko_save_wallet'):
			$message = explode('|', $message);
			$message[1] = safe_codes($message[1]);
			$message[2] = safe_codes($message[2]);
			$message[3] = safe_codes($message[3]);
			$affiliate_count = $main_connection->query("SELECT * FROM `settings` WHERE `code` = 'affiliate_count'");
			$affiliate_count = $affiliate_count->fetch_array(MYSQLI_ASSOC);
			$affiliate_count = (object)$affiliate_count;
			$affiliate_count = $affiliate_count->value;
			$query_check_user = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $message[1] . "'");
			if($query_check_user->num_rows <= 0){
				return false;
			}else{
				$row_check_user = $query_check_user->fetch_array(MYSQLI_ASSOC);
				$bet_price = $message[2] - $row_check_user['cash'];
	            $bet_price_to_referral = (string)$bet_price;
	            $bet_price_to_referral = str_replace(array('-'), array(''), $bet_price_to_referral);
				if((isset($message[3]) AND $message[3] == 'lose') OR $bet_price <= -1){
				    if(!empty($row_check_user['ref_id']) AND is_numeric($row_check_user['ref_id']) AND $row_check_user['ref_id'] >= 1){
				        $query_referral = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $row_check_user['ref_id'] . "'");
				        if($query_referral->num_rows >= 1){
				            $query_referral = $query_referral->fetch_array(MYSQLI_ASSOC);
				            $query_referral = (object)$query_referral;
				            $query_referral_cash = $query_referral->cash;
					        $total_price = ($affiliate_count / 100) * $bet_price_to_referral;
                            $new_referral_cash = $query_referral_cash + $total_price;
                            $new_referral_cash = round($new_referral_cash);
                            $trans_id = $row_check_user['ref_id'] . time();
                            $main_connection->query("UPDATE `users` SET `cash` = '" . $new_referral_cash . "' WHERE `id` = '" . $row_check_user['ref_id'] . "'");
                            $main_connection->query("INSERT INTO `transactions` (`id`, `price`, `invoice_type`, `description`, `user_id`, `transaction_states`, `created_at`, `updated_at`, `trans_id`, `cash`, `status`, `savano`) VALUES (NULL, '" . $total_price . "', '2', 'واریز سود باخت از بازی زیر مجموعه', '184', '" . $row_check_user['ref_id'] . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '" . $trans_id . "', '" . $new_referral_cash . "', '1', '')");
				        }
				    }
				}
				$main_connection->query("UPDATE `users` SET `cash` = '" . $message[2] . "' WHERE `id` = '" . $message[1] . "'");
				$main_connection->query("INSERT INTO `plinkoes_table` (id, user, time, ip, price) VALUES (NULL, '" . $message[1] . "', '" . time() . "', '" . long2ip($socket_client->wsClients[$requester_client_id][6]) . "', '" . $bet_price . "')");
				return true;
			}
			break;
		case('baccarat_save_wallet'):
			$message = explode('|', $message);
			$message[1] = safe_codes($message[1]);
			$message[2] = safe_codes($message[2]);
			$affiliate_count = $main_connection->query("SELECT * FROM `settings` WHERE `code` = 'affiliate_count'");
			$affiliate_count = $affiliate_count->fetch_array(MYSQLI_ASSOC);
			$affiliate_count = (object)$affiliate_count;
			$affiliate_count = $affiliate_count->value;
			$query_check_user = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $message[1] . "'");
			if($query_check_user->num_rows <= 0){
				return false;
			}else{
				$row_check_user = $query_check_user->fetch_array(MYSQLI_ASSOC);
				$bet_price = $message[2] - $row_check_user['cash'];
	            $bet_price_to_referral = (string)$bet_price;
	            $bet_price_to_referral = str_replace(array('-'), array(''), $bet_price_to_referral);
				if((isset($message[3]) AND $message[3] == 'lose') OR $bet_price <= -1){
				    if(!empty($row_check_user['ref_id']) AND is_numeric($row_check_user['ref_id']) AND $row_check_user['ref_id'] >= 1){
				        $query_referral = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $row_check_user['ref_id'] . "'");
				        if($query_referral->num_rows >= 1){
				            $query_referral = $query_referral->fetch_array(MYSQLI_ASSOC);
				            $query_referral = (object)$query_referral;
				            $query_referral_cash = $query_referral->cash;
					        $total_price = ($affiliate_count / 100) * $bet_price_to_referral;
                            $new_referral_cash = $query_referral_cash + $total_price;
                            $new_referral_cash = round($new_referral_cash);
                            $trans_id = $row_check_user['ref_id'] . time();
                            $main_connection->query("UPDATE `users` SET `cash` = '" . $new_referral_cash . "' WHERE `id` = '" . $row_check_user['ref_id'] . "'");
                            $main_connection->query("INSERT INTO `transactions` (`id`, `price`, `invoice_type`, `description`, `user_id`, `transaction_states`, `created_at`, `updated_at`, `trans_id`, `cash`, `status`, `savano`) VALUES (NULL, '" . $total_price . "', '2', 'واریز سود باخت از بازی زیر مجموعه', '184', '" . $row_check_user['ref_id'] . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '" . $trans_id . "', '" . $new_referral_cash . "', '1', '')");
				        }
				    }
				}
				$main_connection->query("UPDATE `users` SET `cash` = '" . $message[2] . "' WHERE `id` = '" . $message[1] . "'");
				$main_connection->query("INSERT INTO `baccarats_table` (id, user, time, ip, price) VALUES (NULL, '" . $message[1] . "', '" . time() . "', '" . long2ip($socket_client->wsClients[$requester_client_id][6]) . "', '" . $bet_price . "')");
				return true;
			}
			break;
		case('craps_save_wallet'):
			$message = explode('|', $message);
			$message[1] = safe_codes($message[1]);
			$message[2] = safe_codes($message[2]);
			$affiliate_count = $main_connection->query("SELECT * FROM `settings` WHERE `code` = 'affiliate_count'");
			$affiliate_count = $affiliate_count->fetch_array(MYSQLI_ASSOC);
			$affiliate_count = (object)$affiliate_count;
			$affiliate_count = $affiliate_count->value;
			$query_check_user = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $message[1] . "'");
			if($query_check_user->num_rows <= 0){
				return false;
			}else{
				$row_check_user = $query_check_user->fetch_array(MYSQLI_ASSOC);
				$bet_price = $message[2] - $row_check_user['cash'];
	            $bet_price_to_referral = (string)$bet_price;
	            $bet_price_to_referral = str_replace(array('-'), array(''), $bet_price_to_referral);
				if((isset($message[3]) AND $message[3] == 'lose') OR $bet_price <= -1){
				    if(!empty($row_check_user['ref_id']) AND is_numeric($row_check_user['ref_id']) AND $row_check_user['ref_id'] >= 1){
				        $query_referral = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $row_check_user['ref_id'] . "'");
				        if($query_referral->num_rows >= 1){
				            $query_referral = $query_referral->fetch_array(MYSQLI_ASSOC);
				            $query_referral = (object)$query_referral;
				            $query_referral_cash = $query_referral->cash;
					        $total_price = ($affiliate_count / 100) * $bet_price_to_referral;
                            $new_referral_cash = $query_referral_cash + $total_price;
                            $new_referral_cash = round($new_referral_cash);
                            $trans_id = $row_check_user['ref_id'] . time();
                            $main_connection->query("UPDATE `users` SET `cash` = '" . $new_referral_cash . "' WHERE `id` = '" . $row_check_user['ref_id'] . "'");
                            $main_connection->query("INSERT INTO `transactions` (`id`, `price`, `invoice_type`, `description`, `user_id`, `transaction_states`, `created_at`, `updated_at`, `trans_id`, `cash`, `status`, `savano`) VALUES (NULL, '" . $total_price . "', '2', 'واریز سود باخت از بازی زیر مجموعه', '184', '" . $row_check_user['ref_id'] . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '" . $trans_id . "', '" . $new_referral_cash . "', '1', '')");
				        }
				    }
				}
				$main_connection->query("UPDATE `users` SET `cash` = '" . $message[2] . "' WHERE `id` = '" . $message[1] . "'");
				$main_connection->query("INSERT INTO `craps_table` (id, user, time, ip, price) VALUES (NULL, '" . $message[1] . "', '" . time() . "', '" . long2ip($socket_client->wsClients[$requester_client_id][6]) . "', '" . $bet_price . "')");
				return true;
			}
			break;
		case('high_low_save_wallet'):
			$message = explode('|', $message);
			$message[1] = safe_codes($message[1]);
			$message[2] = safe_codes($message[2]);
			$affiliate_count = $main_connection->query("SELECT * FROM `settings` WHERE `code` = 'affiliate_count'");
			$affiliate_count = $affiliate_count->fetch_array(MYSQLI_ASSOC);
			$affiliate_count = (object)$affiliate_count;
			$affiliate_count = $affiliate_count->value;
			$query_check_user = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $message[1] . "'");
			if($query_check_user->num_rows <= 0){
				return false;
			}else{
				$row_check_user = $query_check_user->fetch_array(MYSQLI_ASSOC);
				$bet_price = $message[2] - $row_check_user['cash'];
	            $bet_price_to_referral = (string)$bet_price;
	            $bet_price_to_referral = str_replace(array('-'), array(''), $bet_price_to_referral);
				if((isset($message[3]) AND $message[3] == 'lose') OR $bet_price <= -1){
				    if(!empty($row_check_user['ref_id']) AND is_numeric($row_check_user['ref_id']) AND $row_check_user['ref_id'] >= 1){
				        $query_referral = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $row_check_user['ref_id'] . "'");
				        if($query_referral->num_rows >= 1){
				            $query_referral = $query_referral->fetch_array(MYSQLI_ASSOC);
				            $query_referral = (object)$query_referral;
				            $query_referral_cash = $query_referral->cash;
					        $total_price = ($affiliate_count / 100) * $bet_price_to_referral;
                            $new_referral_cash = $query_referral_cash + $total_price;
                            $new_referral_cash = round($new_referral_cash);
                            $trans_id = $row_check_user['ref_id'] . time();
                            $main_connection->query("UPDATE `users` SET `cash` = '" . $new_referral_cash . "' WHERE `id` = '" . $row_check_user['ref_id'] . "'");
                            $main_connection->query("INSERT INTO `transactions` (`id`, `price`, `invoice_type`, `description`, `user_id`, `transaction_states`, `created_at`, `updated_at`, `trans_id`, `cash`, `status`, `savano`) VALUES (NULL, '" . $total_price . "', '2', 'واریز سود باخت از بازی زیر مجموعه', '184', '" . $row_check_user['ref_id'] . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '" . $trans_id . "', '" . $new_referral_cash . "', '1', '')");
				        }
				    }
				}
				$main_connection->query("UPDATE `users` SET `cash` = '" . $message[2] . "' WHERE `id` = '" . $message[1] . "'");
				$main_connection->query("INSERT INTO `high_low_table` (id, user, time, ip, price) VALUES (NULL, '" . $message[1] . "', '" . time() . "', '" . long2ip($socket_client->wsClients[$requester_client_id][6]) . "', '" . $bet_price . "')");
				return true;
			}
			break;
		case('fortune_wheel_save_wallet'):
			$message = explode('|', $message);
			$message[1] = safe_codes($message[1]);
			$message[2] = safe_codes($message[2]);
			$affiliate_count = $main_connection->query("SELECT * FROM `settings` WHERE `code` = 'affiliate_count'");
			$affiliate_count = $affiliate_count->fetch_array(MYSQLI_ASSOC);
			$affiliate_count = (object)$affiliate_count;
			$affiliate_count = $affiliate_count->value;
			$query_check_user = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $message[1] . "'");
			if($query_check_user->num_rows <= 0){
				return false;
			}else{
				$row_check_user = $query_check_user->fetch_array(MYSQLI_ASSOC);
				$bet_price = $message[2] - $row_check_user['cash'];
	            $bet_price_to_referral = (string)$bet_price;
	            $bet_price_to_referral = str_replace(array('-'), array(''), $bet_price_to_referral);
				if((isset($message[3]) AND $message[3] == 'lose') OR $bet_price <= -1){
				    if(!empty($row_check_user['ref_id']) AND is_numeric($row_check_user['ref_id']) AND $row_check_user['ref_id'] >= 1){
				        $query_referral = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $row_check_user['ref_id'] . "'");
				        if($query_referral->num_rows >= 1){
				            $query_referral = $query_referral->fetch_array(MYSQLI_ASSOC);
				            $query_referral = (object)$query_referral;
				            $query_referral_cash = $query_referral->cash;
					        $total_price = ($affiliate_count / 100) * $bet_price_to_referral;
                            $new_referral_cash = $query_referral_cash + $total_price;
                            $new_referral_cash = round($new_referral_cash);
                            $trans_id = $row_check_user['ref_id'] . time();
                            $main_connection->query("UPDATE `users` SET `cash` = '" . $new_referral_cash . "' WHERE `id` = '" . $row_check_user['ref_id'] . "'");
                            $main_connection->query("INSERT INTO `transactions` (`id`, `price`, `invoice_type`, `description`, `user_id`, `transaction_states`, `created_at`, `updated_at`, `trans_id`, `cash`, `status`, `savano`) VALUES (NULL, '" . $total_price . "', '2', 'واریز سود باخت از بازی زیر مجموعه', '184', '" . $row_check_user['ref_id'] . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '" . $trans_id . "', '" . $new_referral_cash . "', '1', '')");
				        }
				    }
				}
				$main_connection->query("UPDATE `users` SET `cash` = '" . $message[2] . "' WHERE `id` = '" . $message[1] . "'");
				$main_connection->query("INSERT INTO `fortune_wheel_table` (id, user, time, ip, price) VALUES (NULL, '" . $message[1] . "', '" . time() . "', '" . long2ip($socket_client->wsClients[$requester_client_id][6]) . "', '" . $bet_price . "')");
				return true;
			}
			break;
	}
}
function wsOnOpen($requester_client_id){
	global $socket_client;
	ClientsCore::$clients[$requester_client_id] = true;
}
function wsOnClose($requester_client_id, $status){
	global $socket_client;
	unset(ClientsCore::$clients[$requester_client_id]);
}
?>