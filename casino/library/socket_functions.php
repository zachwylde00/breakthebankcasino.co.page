<?php
function socket_roomCreate($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_roomCreate|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$priceMoney=safe_codes($params[1]);
	$doubleActive=safe_codes($params[2]);
	$error="";
	if(empty($priceMoney)):$error.="* وارد کردن مبلغ شرط بندی الزامیست<br>";endif;
	if(!in_array($priceMoney,array(1000,2000,5000,10000,25000,50000,100000))):$error.="* مبلغ وارد شده معتبر نمی باشد . لطفا از بین مبالغ مشخص شده انتخاب بفرمایید";endif;
	if(!in_array($doubleActive,array("true","false"))):$error.="* لطفا وضعیت استفاده از شرط دوبل را مشخص کنید";endif;
	if(!empty($error)):return("roomCreate|<div class='alert alert-danger'>".$error."</div>");endif;
	$query_check_money=$main_connection->query("SELECT * FROM `users` WHERE `id`='".$id."'");
	$row_check_money=$query_check_money->fetch_array(MYSQLI_ASSOC);
	if(($row_check_money['cash']-($priceMoney*12))<=-1):return("roomCreate|<div class='alert alert-danger'>موجودی حساب شما برای ساختن این میز بازی کافی نمی باشد . برای ساختن این میز بازی شما به مبلغ ".number_format($priceMoney*12)." تومان نیاز دارید<br>موجودی فعلی شما : ".number_format($row_check_money['cash'])." تومان<br>مبلغ مورد نیاز جهت ساختن این اتاق : ".number_format(($priceMoney*12)-$row_check_money['cash'])." تومان</div>");endif;
	$main_connection->query("INSERT INTO `two_verdicts_table` (id,create_date,end_date,verdict_card,player_one_score,player_two_score,player_one_ground_card,player_two_ground_card,ground_cards,player_one_cards,player_two_cards,price_money,player_one_id,player_two_id,king,player_one_accept,player_two_accept,last_change,choose_card,removeble_cards,add_price_to_players,double_active,double_count,double_status,double_view) VALUES (NULL,'".time()."','0','','0','0','','','','','','".$priceMoney."','".$id."','0','0','0','0','','player_one','','0','".$doubleActive."','0','','0')");
	$roomCreatedID=$main_connection->insert_id;
	return("roomCreate|OK|".$roomCreatedID);
}
function socket_roomCreate2($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_roomCreate2|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$priceMoney=safe_codes($params[1]);
	$doubleActive=safe_codes($params[2]);
	$error="";
	if(empty($priceMoney)):$error.="* وارد کردن مبلغ شرط بندی الزامیست<br>";endif;
	if(!in_array($priceMoney,array(1000,2000,5000,10000,25000,50000,100000))):$error.="* مبلغ وارد شده معتبر نمی باشد . لطفا از بین مبالغ مشخص شده انتخاب بفرمایید";endif;
	if(!in_array($doubleActive,array("true","false"))):$error.="* لطفا وضعیت استفاده از شرط دوبل را مشخص کنید";endif;
	if(!empty($error)):return("roomCreate2|<div class='alert alert-danger'>".$error."</div>");endif;
	$query_check_money=$main_connection->query("SELECT * FROM `users` WHERE `id`='".$id."'");
	$row_check_money=$query_check_money->fetch_array(MYSQLI_ASSOC);
	if(($row_check_money['cash']-$priceMoney*12)<=-1):return("roomCreate2|<div class='alert alert-danger'>موجودی حساب شما برای ساختن میز در این اتاق کافی نیست . شما ".number_format($priceMoney*12)." تومان نیاز دارید<br>موجودی فعلی شما : ".number_format($row_check_money['cash'])." تومان<br>مبلغ مورد نیاز جهت ساختن این اتاق : ".number_format($priceMoney-$row_check_money['cash'])." تومان</div>");endif;
	$main_connection->query("INSERT INTO `seven_clubs` (id,create_date,end_date,player_one_score,player_two_score,player_one_accept,player_two_accept,player_one_id,player_two_id,hide_cards,ground_cards,player_one_cards,player_two_cards,price_money,add_price_to_players,last_change,player_one_read,player_two_read,player_one_soor,player_two_soor,last_win,double_active,double_count,double_status,double_view) VALUES (NULL,'".time()."','0','','','1','0','".$id."','','','','','','".$priceMoney."','0','','0','0','0','0','','".$doubleActive."','0','','0')");
	echo $main_connection->error;
	$roomCreatedID=$main_connection->insert_id;
	return("roomCreate2|OK|".$roomCreatedID);
}
function socket_roomJoin($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_roomJoin|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$creator_id=safe_codes($params[1]);
	$game_id=safe_codes($params[2]);
	$error="";
	if($game_id==""||!is_numeric($game_id)):return("roomJoin|این اتاق یا شرط بندی وجود ندارد");endif;
	$query_check_room=$main_connection->query("SELECT * FROM `two_verdicts_table` WHERE `id`='".$game_id."'");
	if($query_check_room->num_rows<=0):return("roomJoin|این اتاق یا شرط بندی وجود ندارد");endif;
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	if($row_room['end_date']!=0):return("roomJoin|این اتاق بسته شده و دیگر قابل دسترسی نیست");endif;
	if($row_room['player_one_id']!=$creator_id):return("roomJoin|این بازی متعلق به خود شما می باشد");endif;
	if($row_room['player_two_id']!=0):return("roomJoin|این بازی قبلا شروع شده و امکان ورود به آن وجود ندارد");endif;
	$query_check_money=$main_connection->query("SELECT * FROM `users` WHERE `id`='".$id."'");
	$row_check_money=$query_check_money->fetch_array(MYSQLI_ASSOC);
	if(($row_check_money['cash']-($row_room['price_money']*12))<=-1):return("roomJoin|موجودی حساب شما برای ورود به این اتاق کافی نیست . حداقل موجودی مورد نیاز ".number_format($row_room['price_money']*12)." تومان می باشد\nموجودی فعلی شما : ".number_format($row_check_money['cash'])." تومان\nمبلغ مورد نیاز برای ورود به این اتاق : ".number_format(($row_room['price_money']*12)-$row_check_money['cash'])." تومان");endif;
	$main_connection->query("UPDATE `two_verdicts_table` SET `player_two_id`='".$id."' WHERE `id`='".$game_id."'");
	return("roomJoin|OK|".$game_id);
}
function socket_pokerJoin($fields, $socket_client){
	global $main_connection;
	$fields = trim($fields);
	$fields = str_replace(array('socket_pokerJoin|'), array(''), $fields);
	$params = explode('|', $fields);
	$id = safe_codes($params[0]);
	$game_id = safe_codes($params[1]);
	$client_id = safe_codes($params[3]);
	if(empty($game_id) OR !is_numeric($game_id)){
		return('pokerJoin|این میز بازی وجود ندارد');
	}
	$query_check_room = $main_connection->query("SELECT * FROM `poker_table` WHERE `id`='" . $game_id . "'");
	if($query_check_room->num_rows <= 0){
		return('pokerJoin|این میز بازی وجود ندارد');
	}
	$row_room = $query_check_room->fetch_array(MYSQLI_ASSOC);
	$clients = $row_room['clients'];
	$clients = explode(',', $clients);
	if(!in_array($client_id, $clients)){
		$clients[] = $client_id;
	}
	foreach($clients as $key => $value){
		if($value == null OR empty($value) OR !is_string($value)){
			unset($clients[$key]);
		}
	}
	$clients = join(',', $clients);
	$email_one_r = empty(getUser($row_room['player_one_id'], 'email')) ? 'email' : getUser($row_room['player_one_id'], 'email');
	$email_one = explode('@', $email_one_r);
	$email_one = mb_substr($email_one[0], 0, (strlen($email_one[0]) / 2), 'utf-8') . '...@' . end($email_one);
	$email_two_r = empty(getUser($row_room['player_two_id'], 'email')) ? 'email' : getUser($row_room['player_two_id'], 'email');
	$email_two = explode('@', $email_two_r);
	$email_two = mb_substr($email_two[0], 0, (strlen($email_two[0]) / 2), 'utf-8') . '...@' . end($email_two);
	$email_three_r = empty(getUser($row_room['player_three_id'], 'email')) ? 'email' : getUser($row_room['player_three_id'], 'email');
	$email_three = explode('@', $email_three_r);
	$email_three = mb_substr($email_three[0], 0, (strlen($email_three[0]) / 2), 'utf-8') . '...@' . end($email_three);
	$email_four_r = empty(getUser($row_room['player_four_id'], 'email')) ? 'email' : getUser($row_room['player_four_id'], 'email');
	$email_four = explode('@', $email_four_r);
	$email_four = mb_substr($email_four[0], 0, (strlen($email_four[0]) / 2), 'utf-8') . '...@' . end($email_four);
	$email_five_r = empty(getUser($row_room['player_five_id'], 'email')) ? 'email' : getUser($row_room['player_five_id'], 'email');
	$email_five = explode('@', $email_five_r);
	$email_five = mb_substr($email_five[0], 0, (strlen($email_five[0]) / 2), 'utf-8') . '...@' . end($email_five);
	$email_six_r = empty(getUser($row_room['player_six_id'], 'email')) ? 'email' : getUser($row_room['player_six_id'], 'email');
	$email_six = explode('@', $email_six_r);
	$email_six = mb_substr($email_six[0], 0, (strlen($email_six[0]) / 2), 'utf-8') . '...@' . end($email_six);
	$email_seven_r = empty(getUser($row_room['player_seven_id'], 'email')) ? 'email' : getUser($row_room['player_seven_id'], 'email');
	$email_seven = explode('@', $email_seven_r);
	$email_seven = mb_substr($email_seven[0], 0, (strlen($email_seven[0]) / 2), 'utf-8') . '...@' . end($email_seven);
	$email_eight_r = empty(getUser($row_room['player_eight_id'], 'email')) ? 'email' : getUser($row_room['player_eight_id'], 'email');
	$email_eight = explode('@', $email_eight_r);
	$email_eight = mb_substr($email_eight[0], 0, (strlen($email_eight[0]) / 2), 'utf-8') . '...@' . end($email_eight);
	$player_one = $row_room['player_one_id'] == 0 ? 'none' : json_encode(array('id' => $row_room['player_one_id'], 'nickname' => (empty(getUser($row_room['player_one_id'], 'username')) ? $email_one : getUser($row_room['player_one_id'], 'username')), 'cash' => number_format(getUser($row_room['player_one_id'], 'cash'))), JSON_UNESCAPED_UNICODE);
	$player_two = $row_room['player_two_id'] == 0 ? 'none' : json_encode(array('id' => $row_room['player_two_id'], 'nickname' => (empty(getUser($row_room['player_two_id'], 'username')) ? $email_two : getUser($row_room['player_two_id'], 'username')), 'cash' => number_format(getUser($row_room['player_two_id'], 'cash'))), JSON_UNESCAPED_UNICODE);
	$player_three = $row_room['player_three_id'] == 0 ? 'none' : json_encode(array('id' => $row_room['player_three_id'], 'nickname' => (empty(getUser($row_room['player_three_id'], 'username')) ? $email_three : getUser($row_room['player_three_id'], 'username')), 'cash' => number_format(getUser($row_room['player_three_id'], 'cash'))), JSON_UNESCAPED_UNICODE);
	$player_four = $row_room['player_four_id'] == 0 ? 'none' : json_encode(array('id' => $row_room['player_four_id'], 'nickname' => (empty(getUser($row_room['player_four_id'], 'username')) ? $email_four : getUser($row_room['player_four_id'], 'username')), 'cash' => number_format(getUser($row_room['player_four_id'], 'cash'))), JSON_UNESCAPED_UNICODE);
	$player_five = $row_room['player_five_id'] == 0 ? 'none' : json_encode(array('id' => $row_room['player_five_id'], 'nickname' => (empty(getUser($row_room['player_five_id'], 'username')) ? $email_five : getUser($row_room['player_five_id'], 'username')), 'cash' => number_format(getUser($row_room['player_five_id'], 'cash'))), JSON_UNESCAPED_UNICODE);
	$player_six = $row_room['player_six_id'] == 0 ? 'none' : json_encode(array('id' => $row_room['player_six_id'], 'nickname' => (empty(getUser($row_room['player_six_id'], 'username')) ? $email_six : getUser($row_room['player_six_id'], 'username')), 'cash' => number_format(getUser($row_room['player_six_id'], 'cash'))), JSON_UNESCAPED_UNICODE);
	$player_seven = $row_room['player_seven_id'] == 0 ? 'none' : json_encode(array('id' => $row_room['player_seven_id'], 'nickname' => (empty(getUser($row_room['player_seven_id'], 'username')) ? $email_seven : getUser($row_room['player_seven_id'], 'username')), 'cash' => number_format(getUser($row_room['player_seven_id'], 'cash'))), JSON_UNESCAPED_UNICODE);
	$player_eight = $row_room['player_eight_id'] == 0 ? 'none' : json_encode(array('id' => $row_room['player_eight_id'], 'nickname' => (empty(getUser($row_room['player_eight_id'], 'username')) ? $email_eight : getUser($row_room['player_eight_id'], 'username')), 'cash' => number_format(getUser($row_room['player_eight_id'], 'cash'))), JSON_UNESCAPED_UNICODE);
	$main_connection->query("UPDATE `poker_table` SET `clients` = '" . $clients . "' WHERE `id` = '" . $game_id . "'");
	$min_price = $row_room['min_price'];
	$max_price = $row_room['max_price'];
	return('pokerJoin|OK|' . $game_id . '|' . $player_one . '|' . $player_two . '|' . $player_three . '|' . $player_four . '|' . $player_five . '|' . $player_six . '|' . $player_seven . '|' . $player_eight . '|' . $min_price . '|' . $max_price);
}
function socket_pokerSit($fields, $socket_client){
	global $main_connection;
	$fields = trim($fields);
	$fields = str_replace(array('socket_pokerSit|'), array(''), $fields);
	$params = explode('|', $fields);
	$id = safe_codes($params[0]);
	$game_id = safe_codes($params[1]);
	$player_chair = safe_codes($params[2]);
	$client_id = safe_codes($params[4]);
	if(empty($game_id) OR !is_numeric($game_id)){
		return('pokerSit|این میز بازی وجود ندارد');
	}
	$query_check_room = $main_connection->query("SELECT * FROM `poker_table` WHERE `id`='" . $game_id . "'");
	if($query_check_room->num_rows <= 0){
		return('pokerSit|این میز بازی وجود ندارد');
	}
	$row_room = $query_check_room->fetch_array(MYSQLI_ASSOC);
	$clients = $row_room['clients'];
	$clients = explode(',', $clients);
	if(!in_array($client_id, $clients)){
		$clients[] = $client_id;
	}
	foreach($clients as $key => $value){
		if($value == null OR empty($value) OR !is_string($value)){
			unset($clients[$key]);
		}
	}
	$clients = join(',', $clients);
	$query_money = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $game_id . "'");
	$row_money = $query_money->fetch_array(MYSQLI_ASSOC);
	if($row_money['cash'] < $row_room['min_price']){
		return('pokerSit|حداقل موجودی مورد نیاز برای بازی در این اتاق ' . number_format($row_room['min_price']) . ' تومان و موجودی شما ' . number_format($row_money['cash']) . ' می باشد . لطفا موجوی حساب خود را شارژ کنید');
	}
	$username = getUser($id, 'username');
	$email = getUser($id, 'email');
	$email = explode('@', $email);
	$email = mb_substr($email[0], 0, (strlen($email[0]) / 2), 'utf-8') . '...@' . end($email);
	$count_players = 0;
	($row_room['player_one_id'] != 0 AND $row_room['player_one_id'] != '0') ? $count_players++ : '';
	($row_room['player_two_id'] != 0 AND $row_room['player_two_id'] != '0') ? $count_players++ : '';
	($row_room['player_three_id'] != 0 AND $row_room['player_three_id'] != '0') ? $count_players++ : '';
	($row_room['player_four_id'] != 0 AND $row_room['player_four_id'] != '0') ? $count_players++ : '';
	($row_room['player_five_id'] != 0 AND $row_room['player_five_id'] != '0') ? $count_players++ : '';
	($row_room['player_six_id'] != 0 AND $row_room['player_six_id'] != '0') ? $count_players++ : '';
	($row_room['player_seven_id'] != 0 AND $row_room['player_seven_id'] != '0') ? $count_players++ : '';
	($row_room['player_eight_id'] != 0 AND $row_room['player_eight_id'] != '0') ? $count_players++ : '';
	if(($count_players + 1) == 1){
		$hidden_cards = array('a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12', 'a13', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'b12', 'b13', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13');
	}else{
		$hidden_cards = explode(',', $row_room['hidden_cards']);
	}
	if(($count_players + 1) < 2){
		$game_status = 'game_not_start';
	}else{
		$game_status = $row_room['game_status'];
	}
	shuffle($hidden_cards);
	$player_cards = array();
	for($i = 1; $i <= 2; $i++){
		$random_card = array_rand($hidden_cards);
		$player_cards[] = $hidden_cards[$random_card];
		unset($hidden_cards[$random_card]);
	}
	$details = array('player_location' => $player_chair, 'id' => $id, 'nickname' => (empty($username) ? $email : $username), 'cash' => number_format(getUser($id, 'cash')), 'cards' => join(',', $player_cards));
	$main_connection->query("UPDATE `poker_table` SET `" . $player_chair . "_id` = '" . $id . "', `" . $player_chair . "_cards` = '" . join(',', $player_cards) . "', `clients` = '" . $clients . "', `hidden_cards` = '" . join(',', $hidden_cards) . "', `game_status` = '" . $game_status . "' WHERE `id` = '" . $game_id . "'");
	$clients = explode(',', $clients);
	foreach($clients as $client){
		if(isset(ClientsCore::$clients[$client]) AND !empty(ClientsCore::$clients[$client])){
			$socket_client->wsSend($client, 'newPlayerSit|' . json_encode($details, JSON_UNESCAPED_UNICODE) . '|' . ($count_players + 1));
		}
	}
	return true;
}
function socket_pokerStartHand($fields, $socket_client){
	global $main_connection;
	$fields = trim($fields);
	$fields = str_replace(array('socket_pokerStartHand|'), array(''), $fields);
	$params = explode('|', $fields);
	$id = safe_codes($params[0]);
	$game_id = safe_codes($params[1]);
	if(empty($game_id) OR !is_numeric($game_id)){
		return('pokerStartHand|این بازی وجود ندارد');
	}else{
		$query_room = $main_connection->query("SELECT * FROM `poker_table` WHERE `id` = '" . $game_id . "'");
		if($query_room->num_rows <= 0){
			return('pokerStartHand|این بازی وجود ندارد');
		}else{
			$row_room = $query_room->fetch_array(MYSQLI_ASSOC);
			if($row_room['game_status'] == 'game_not_start'){
				if(!empty($row_room['player_one_id']) AND is_numeric($row_room['player_one_id']) OR $row_room['player_one_id'] == 0 OR $row_room['player_one_id'] == '0'){
					$starter_player = 'player_one';
				}else if(!empty($row_room['player_two_id']) AND is_numeric($row_room['player_two_id']) OR $row_room['player_two_id'] == 0 OR $row_room['player_two_id'] == '0'){
					$starter_player = 'player_two';
				}else if(!empty($row_room['player_three_id']) AND is_numeric($row_room['player_three_id']) OR $row_room['player_three_id'] == 0 OR $row_room['player_three_id'] == '0'){
					$starter_player = 'player_four';
				}else if(!empty($row_room['player_four_id']) AND is_numeric($row_room['player_four_id']) OR $row_room['player_four_id'] == 0 OR $row_room['player_four_id'] == '0'){
					$starter_player = 'player_five';
				}else if(!empty($row_room['player_five_id']) AND is_numeric($row_room['player_five_id']) OR $row_room['player_five_id'] == 0 OR $row_room['player_five_id'] == '0'){
					$starter_player = 'player_six';
				}else if(!empty($row_room['player_six_id']) AND is_numeric($row_room['player_six_id']) OR $row_room['player_six_id'] == 0 OR $row_room['player_six_id'] == '0'){
					$starter_player = 'player_six';
				}else if(!empty($row_room['player_seven_id']) AND is_numeric($row_room['player_seven_id']) OR $row_room['player_seven_id'] == 0 OR $row_room['player_seven_id'] == '0'){
					$starter_player = 'player_seven';
				}else if(!empty($row_room['player_eight_id']) AND is_numeric($row_room['player_eight_id']) OR $row_room['player_eight_id'] == 0 OR $row_room['player_eight_id'] == '0'){
					$starter_player = 'player_eight';
				}
				$starter_cash = $row_room['min_price'];
				$starter_cash = $starter_cash / 2;
				$starter_cash = ceil($starter_cash);
				return('pokerStartHand|OK|' . $starter_player . '|' . $starter_cash . '|' . $game_id);
			}else{
				return false;
			}
		}
	}
}
function socket_roomJoin2($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_roomJoin2|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$creator_id=safe_codes($params[1]);
	$game_id=safe_codes($params[2]);
	if($game_id==""||!is_numeric($game_id)):return("roomJoin2|این اتاق یا شرط بندی وجود ندارد");endif;
	$query_check_room=$main_connection->query("SELECT * FROM `seven_clubs` WHERE `id`='".$game_id."'");
	if($query_check_room->num_rows<=0):return("roomJoin2|این اتاق یا شرط بندی وجود ندارد");endif;
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	if($row_room['end_date']!=0):return("roomJoin2|این اتاق بسته شده و دیگر قابل دسترسی نیست");endif;
	if($row_room['player_one_id']!=$creator_id):return("roomJoin2|این بازی متعلق به خود شما می باشد");endif;
	if($row_room['player_two_id']!=0):return("roomJoin2|این بازی قبلا شروع شده و امکان ورود به آن وجود ندارد");endif;
	$query_check_money=$main_connection->query("SELECT * FROM `users` WHERE `id`='".$id."'");
	$row_check_money=$query_check_money->fetch_array(MYSQLI_ASSOC);
	if(($row_check_money['cash']-$row_room['price_money']*12)<=-1):return("roomJoin2|موجودی حساب شما برای ساختن میز در این اتاق کافی نیست . شما ".number_format($priceMoney*12)." تومان نیاز دارید\nموجودی فعلی شما : ".number_format($row_check_money['cash'])." تومان\nمبلغ مورد نیاز جهت ساختن این اتاق : ".number_format($row_room['price_money']-$row_check_money['cash'])." تومان</div>");endif;
	$main_connection->query("UPDATE `seven_clubs` SET `player_two_id`='".$id."' WHERE `id`='".$game_id."'");
	return("roomJoin2|OK|".$game_id);
}
function socket_getLastChanges($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_getLastChanges|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$game_id=safe_codes($params[1]);
	$query_check_room=$main_connection->query("SELECT * FROM `two_verdicts_table` WHERE `id`='".$game_id."'");
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	if($row_room['player_two_id']!=0 && $row_room['player_two_id']!="0" && ($row_room['player_one_accept']==0||$row_room['player_one_accept']=="0"||$row_room['player_two_accept']==0||$row_room['player_two_accept']=="0")):
		if($id==$row_room['player_one_id']):$main_connection->query("UPDATE `two_verdicts_table` SET `player_one_accept`='1' WHERE `id`='".$row_room['id']."'");
		elseif($id==$row_room['player_two_id']):$main_connection->query("UPDATE `two_verdicts_table` SET `player_two_accept`='1' WHERE `id`='".$row_room['id']."'");
		endif;
		return("getLastChanges|gameStart");
	elseif($row_room['last_change']!=""):
		if($row_room['player_one_score']>=7||$row_room['player_two_score']>=7):
			$winerScore=$row_room['player_one_score']>=7?$row_room['player_one_score']:$row_room['player_two_score'];
			$otherScore=$row_room['player_one_score']>=7?$row_room['player_two_score']:$row_room['player_one_score'];
			$winer=$row_room['player_one_score']>=7?"player_one":"player_two";
			$winerID=$winer=="player_one"?$row_room['player_one_id']:$row_room['player_two_id'];
			$otherID=$winer=="player_one"?$row_room['player_two_id']:$row_room['player_one_id'];
			$king=($row_room['king']==1||$row_room['king']=="1")?"player_one":"player_two";
			if($winerScore>=7 && $otherScore<=0 && $king != $winer):
				$winprice=$row_room['price_money']*3;
				$wintype="king_kote";
			elseif($winerScore>=7 && $otherScore<=0 && $king == $winer):
				$winprice=$row_room['price_money']*2;
				$wintype="kote";
			else:
				$winprice=$row_room['price_money'];
				$wintype="normal";
			endif;
			if($row_room['add_price_to_players']==0||$row_room['add_price_to_players']=="0"):
				$main_connection->query("UPDATE `users` SET `cash`=`cash`+".$winprice." WHERE `id`='".$winerID."'");
				$main_connection->query("UPDATE `users` SET `cash`=`cash`-".$row_room['price_money']." WHERE `id`='".$otherID."'");
				$main_connection->query("UPDATE `two_verdicts_table` SET `end_date`='".time()."',`add_price_to_players`='1' WHERE `id`='".$game_id."'");
			endif;
			return("getLastChanges|endGame2|".$winerID."|".number_format($winprice)."|".$wintype);
		elseif(($row_room['double_status']=="player_oneDecline"||$row_room['double_status']=="player_twoDecline")&&$row_room['double_view']<=1):
			$main_connection->query("UPDATE `two_verdicts_table` SET `double_view`=`double_view`+1 WHERE `id`='".$game_id."'");
			$winnerID=$row_room['double_status']=="player_oneDecline"?$row_room['player_two_id']:$row_room['player_one_id'];
			$otherID=$row_room['double_status']=="player_oneDecline"?$row_room['player_one_id']:$row_room['player_two_id'];
			if($row_room['add_price_to_players']==0||$row_room['add_price_to_players']=="0"):
				$main_connection->query("UPDATE `users` SET `cash`=`cash`+".$row_room['price_money']." WHERE `id`='".$winnerID."'");
				$main_connection->query("UPDATE `users` SET `cash`=`cash`-".$row_room['price_money']." WHERE `id`='".$otherID."'");
				$main_connection->query("UPDATE `two_verdicts_table` SET `end_date`='".time()."',`add_price_to_players`='1' WHERE `id`='".$game_id."'");
			endif;
			return("getLastChanges|doubleDecline|".$row_room['double_status']."|".number_format($row_room['price_money']));
		elseif($row_room['end_date'] != 0 && $row_room['end_date'] != "0" && ($row_room['player_one_score']==0 && $row_room['player_two_score']==0)):
			$meID=(($id==$row_room['player_one_id'])?$row_room['player_one_id']:$row_room['player_two_id']);
			$otherID=(($id==$row_room['player_one_id'])?$row_room['player_two_id']:$row_room['player_one_id']);
			if($row_room['add_price_to_players']==0||$row_room['add_price_to_players']=="0"):
				$main_connection->query("UPDATE `users` SET `cash`=`cash`+".$row_room['price_money']." WHERE `id`='".$meID."'");
				$main_connection->query("UPDATE `users` SET `cash`=`cash`-".$row_room['price_money']." WHERE `id`='".$otherID."'");
				$main_connection->query("UPDATE `two_verdicts_table` SET `end_date`='".time()."',`add_price_to_players`='1' WHERE `id`='".$game_id."'");
			endif;
			return("getLastChanges|endGame|".number_format($row_room['price_money']));
		elseif(strpos($row_room['last_change'],"King:") !== false):
			$king=str_replace(array("King",":"),array("",""),$row_room['last_change']);
			$king_id=($king==1||$king=="1")?$row_room['player_one_id']:$row_room['player_two_id'];
			$player_one_name = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $row_room['player_one_id'] . "' LIMIT 1")->fetch_array(MYSQLI_ASSOC);
			$player_one_name = (empty($player_one_name['username']) OR !is_string($player_one_name['username']) OR !isset($player_one_name['username'])) ? $player_one_name['email'] : $player_one_name['username'];
			$player_two_name = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $row_room['player_two_id'] . "' LIMIT 1")->fetch_array(MYSQLI_ASSOC);
			$player_two_name = (empty($player_two_name['username']) OR !is_string($player_two_name['username']) OR !isset($player_two_name['username'])) ? $player_two_name['email'] : $player_two_name['username'];
			return("getLastChanges|King:".$king_id."|".$row_room['player_one_cards']."|".$row_room['player_two_cards']."|".$row_room['ground_cards']."|".$row_room['removeble_cards']."|".$row_room['player_one_id']."|".$row_room['player_two_id']."|".$player_one_name."|".$player_two_name);
		elseif(strpos($row_room['last_change'],"Verdict:") !== false):
			$verdict=str_replace(array("Verdict",":"),array("",""),$row_room['last_change']);
			return("getLastChanges|Verdict:".$verdict."|".$row_room['player_one_id']."|".$row_room['player_two_id']."|".$row_room['price_money']."|".(string)$row_room['double_active']);
		elseif($row_room['double_status']=="player_one"||$row_room['double_status']=="player_two"):
			return("getLastChanges|requestForDouble|".$row_room['double_status']);
		elseif(($row_room['double_status']=="player_oneAccept"||$row_room['double_status']=="player_twoAccept")&&$row_room['double_view']<=1):
			$main_connection->query("UPDATE `two_verdicts_table` SET `double_view`=`double_view`+1 WHERE `id`='".$game_id."'");
			return("getLastChanges|doubleAccept|".$row_room['double_status']."|".number_format($row_room['price_money']));
		elseif($row_room['last_change']=="player_oneRemoveCards"):
			return("getLastChanges|player_oneRemoveCards");
		elseif($row_room['last_change']=="player_twoRemoveCards"):
			return("getLastChanges|player_twoRemoveCards");
		elseif($row_room['last_change']=="player_twoChooseCard"):
			return("getLastChanges|player_twoChooseCard|".$row_room['ground_cards']."|".$row_room['player_one_cards']."|".$row_room['player_two_cards']);
		elseif($row_room['last_change']=="player_oneChooseCard"):
			return("getLastChanges|player_oneChooseCard|".$row_room['ground_cards']."|".$row_room['player_one_cards']."|".$row_room['player_two_cards']);
		elseif($row_room['last_change']=="GameStartCards"):
			return("getLastChanges|GameStartCards|".$row_room['player_one_cards']."|".$row_room['player_two_cards']);
		elseif($row_room['last_change']=="player_oneSendCard"):
			return("getLastChanges|player_oneSendCard|".$row_room['player_one_ground_card']."|".$row_room['player_one_cards']."|".$row_room['player_two_cards']);
		elseif($row_room['last_change']=="player_twoSendCard"):
			return("getLastChanges|player_twoSendCard|".$row_room['player_two_ground_card']."|".$row_room['player_one_cards']."|".$row_room['player_two_cards']);
		elseif(strpos($row_room['last_change'],"HandWin:") !== false):
			return("getLastChanges|".$row_room['last_change']."|".$row_room['player_one_ground_card']."|".$row_room['player_two_ground_card']."|".$row_room['player_one_cards']."|".$row_room['player_two_cards']);
		endif;
	endif;
	return("getLastChanges|NOChange");
}
function socket_getLastChanges2($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_getLastChanges2|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$game_id=safe_codes($params[1]);
	$game_player=safe_codes($params[2]);
	$query_check_room=$main_connection->query("SELECT * FROM `seven_clubs` WHERE `id`='".$game_id."'");
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	if($row_room['player_two_id']!=0 && $row_room['player_two_id']!="0" && ($row_room['player_one_accept']==0||$row_room['player_one_accept']=="0"||$row_room['player_two_accept']==0||$row_room['player_two_accept']=="0")):
		if($id==$row_room['player_one_id']):$main_connection->query("UPDATE `seven_clubs` SET `player_one_accept`='1' WHERE `id`='".$row_room['id']."'");
		elseif($id==$row_room['player_two_id']):$main_connection->query("UPDATE `seven_clubs` SET `player_two_accept`='1' WHERE `id`='".$row_room['id']."'");
		endif;
		return("getLastChanges2|gameStart");
	elseif($row_room['last_change']!=""):
		if(($row_room['double_status']=="player_oneDecline"||$row_room['double_status']=="player_twoDecline")&&$row_room['double_view']<=1):
			$main_connection->query("UPDATE `seven_clubs` SET `double_view`=`double_view`+1 WHERE `id`='".$game_id."'");
			$winnerID=$row_room['double_status']=="player_oneDecline"?$row_room['player_two_id']:$row_room['player_one_id'];
			$otherID=$row_room['double_status']=="player_oneDecline"?$row_room['player_one_id']:$row_room['player_two_id'];
			if($row_room['add_price_to_players']==0||$row_room['add_price_to_players']=="0"):
				$main_connection->query("UPDATE `users` SET `cash`=`cash`+".$row_room['price_money']." WHERE `id`='".$winnerID."'");
				$main_connection->query("UPDATE `users` SET `cash`=`cash`-".$row_room['price_money']." WHERE `id`='".$otherID."'");
				$main_connection->query("UPDATE `seven_clubs` SET `end_date`='".time()."',`add_price_to_players`='1' WHERE `id`='".$game_id."'");
			endif;
			return("getLastChanges2|doubleDecline|".$row_room['double_status']."|".number_format($row_room['price_money']));
		elseif($row_room['double_status']=="player_one"||$row_room['double_status']=="player_two"):
			return("getLastChanges2|requestForDouble|".$row_room['double_status']);
		elseif(($row_room['double_status']=="player_oneAccept"||$row_room['double_status']=="player_twoAccept")&&$row_room['double_view']<=1):
			$main_connection->query("UPDATE `seven_clubs` SET `double_view`=`double_view`+1 WHERE `id`='".$game_id."'");
			return("getLastChanges2|doubleAccept|".$row_room['double_status']."|".number_format($row_room['price_money']));
		elseif($row_room['player_one_cards']==""&&$row_room['player_two_cards']==""&&$row_room['hide_cards']==""):
			$_player_oneCards=$row_room['last_win']=="player_one"?$row_room['ground_cards'].",".$row_room['player_one_score']:$row_room['player_one_score'];
			$_player_twoCards=$row_room['last_win']=="player_two"?$row_room['ground_cards'].",".$row_room['player_two_score']:$row_room['player_two_score'];
			$playerOneScores=explode(",",$_player_oneCards);
			$playerOneClubs=0;
			$playerOneClubsAdd=0;
			$playerOneScore=0;
			$playerOneSoldierScore=0;
			$playerOneAsScore=0;
			$playerOneAs10D=0;
			$playerOneAs2C=0;
			foreach($playerOneScores as $card):
				if($card==""):continue;endif;
				if(mb_substr($card,0,1,"utf-8")=="c"):$playerOneClubs++;endif;
				if($playerOneClubs>=7 && $playerOneClubsAdd==0):$playerOneScore=$playerOneScore+7;$playerOneClubsAdd=1;endif;
				if($card=="d10"):$playerOneScore=$playerOneScore+3;$playerOneAs10D++;endif;
				if($card=="c2"):$playerOneScore=$playerOneScore+2;$playerOneAs2C++;endif;
				if($card=="a11"):$playerOneSoldierScore++;$playerOneScore=$playerOneScore+1;endif;
				if($card=="b11"):$playerOneSoldierScore++;$playerOneScore=$playerOneScore+1;endif;
				if($card=="c11"):$playerOneSoldierScore++;$playerOneScore=$playerOneScore+1;endif;
				if($card=="d11"):$playerOneSoldierScore++;$playerOneScore=$playerOneScore+1;endif;
				if($card=="a1"):$playerOneAsScore++;$playerOneScore=$playerOneScore+1;endif;
				if($card=="b1"):$playerOneAsScore++;$playerOneScore=$playerOneScore+1;endif;
				if($card=="c1"):$playerOneAsScore++;$playerOneScore=$playerOneScore+1;endif;
				if($card=="d1"):$playerOneAsScore++;$playerOneScore=$playerOneScore+1;endif;
			endforeach;
			$playerTwoScores=explode(",",$_player_twoCards);
			$playerTwoClubs=0;
			$playerTwoClubsAdd=0;
			$playerTwoScore=0;
			$playerTwoSoldierScore=0;
			$playerTwoAsScore=0;
			$playerTwoAs10D=0;
			$playerTwoAs2C=0;
			foreach($playerTwoScores as $card):
				if($card==""):continue;endif;
				if(mb_substr($card,0,1,"utf-8")=="c"):$playerTwoClubs++;endif;
				if($playerTwoClubs>=7 && $playerTwoClubsAdd==0):$playerTwoScore=$playerTwoScore+7;$playerTwoClubsAdd=1;endif;
				if($card=="d10"):$playerTwoScore=$playerTwoScore+3;$playerTwoAs10D++;endif;
				if($card=="c2"):$playerTwoScore=$playerTwoScore+2;$playerTwoAs2C++;endif;
				if($card=="a11"):$playerTwoSoldierScore++;$playerTwoScore=$playerTwoScore+1;endif;
				if($card=="b11"):$playerTwoSoldierScore++;$playerTwoScore=$playerTwoScore+1;endif;
				if($card=="c11"):$playerTwoSoldierScore++;$playerTwoScore=$playerTwoScore+1;endif;
				if($card=="d11"):$playerTwoSoldierScore++;$playerTwoScore=$playerTwoScore+1;endif;
				if($card=="a1"):$playerTwoAsScore++;$playerTwoScore=$playerTwoScore+1;endif;
				if($card=="b1"):$playerTwoAsScore++;$playerTwoScore=$playerTwoScore+1;endif;
				if($card=="c1"):$playerTwoAsScore++;$playerTwoScore=$playerTwoScore+1;endif;
				if($card=="d1"):$playerTwoAsScore++;$playerTwoScore=$playerTwoScore+1;endif;
			endforeach;
			$playerOneScore=$playerOneScore+($row_room['player_one_soor']*5);
			$playerTwoScore=$playerTwoScore+($row_room['player_two_soor']*5);
			$playerOneScoresShow="";
			$playerOneScoresShow.="جمع امتیاز شما : ".$playerOneScore."<br>";
			$playerOneScoresShow.=$playerOneClubsAdd==1?"هفت خاج<br>":"";
			$playerOneScoresShow.=$playerOneSoldierScore>=1?$playerOneSoldierScore." سرباز<br>":"";
			$playerOneScoresShow.=$playerOneAsScore>=1?$playerOneAsScore." آس<br>":"";
			$playerOneScoresShow.=$playerOneAs10D>=1?"10 لو خشت<br>":"";
			$playerOneScoresShow.=$playerOneAs2C>=1?"2 لو گشنیز<br>":"";
			$playerOneScoresShow.="تعداد سور شما : ".$row_room['player_one_soor']."<br>";
			$playerTwoScoresShow="";
			$playerTwoScoresShow.="جمع امتیاز شما : ".$playerTwoScore."<br>";
			$playerTwoScoresShow.=$playerTwoClubsAdd==1?"هفت خاج<br>":"";
			$playerTwoScoresShow.=$playerTwoSoldierScore>=1?$playerTwoSoldierScore." سرباز<br>":"";
			$playerTwoScoresShow.=$playerTwoAsScore>=1?$playerTwoAsScore." آس<br>":"";
			$playerTwoScoresShow.=$playerTwoAs10D>=1?"10 لو خشت<br>":"";
			$playerTwoScoresShow.=$playerTwoAs2C>=1?"2 لو گشنیز<br>":"";
			$playerTwoScoresShow.="تعداد سور شما : ".$row_room['player_two_soor']."<br>";
			$winner=$playerTwoScore<$playerOneScore?"player_one":"player_two";
			$winnerID=$playerTwoScore<$playerOneScore?$row_room['player_one_id']:$row_room['player_two_id'];
			$otherID=$playerTwoScore<$playerOneScore?$row_room['player_two_id']:$row_room['player_one_id'];
			if($row_room['add_price_to_players']==0||$row_room['add_price_to_players']=="1"):
				$main_connection->query("UPDATE `users` SET `cash`=`cash`+".$row_room['price_money']." WHERE `id`='".$winnerID."'");
				$main_connection->query("UPDATE `users` SET `cash`=`cash`-".$row_room['price_money']." WHERE `id`='".$otherID."'");
				$main_connection->query("UPDATE `seven_clubs` SET `end_date`='".time()."',`add_price_to_players`='1' WHERE `id`='".$game_id."'");
			endif;
			return("getLastChanges2|endGame2|".$winner."|".$playerOneScoresShow."|".$playerTwoScoresShow."|".number_format($row_room['price_money']));
		elseif($row_room['end_date'] != 0 && $row_room['end_date'] != "0"):
			$meID=(($id==$row_room['player_one_id'])?$row_room['player_one_id']:$row_room['player_two_id']);
			$otherID=(($id==$row_room['player_one_id'])?$row_room['player_two_id']:$row_room['player_one_id']);
			$main_connection->query("UPDATE `users` SET `cash`=`cash`+".$row_room['price_money']." WHERE `id`='".$meID."'");
			$main_connection->query("UPDATE `users` SET `cash`=`cash`-".$row_room['price_money']." WHERE `id`='".$otherID."'");
			return("getLastChanges2|endGame|".number_format($row_room['price_money']));
		elseif($row_room['last_change']=="showCards"):
			$player_one_name = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $row_room['player_one_id'] . "' LIMIT 1")->fetch_array(MYSQLI_ASSOC);
			$player_one_name = (empty($player_one_name['username']) OR !is_string($player_one_name['username']) OR !isset($player_one_name['username'])) ? $player_one_name['email'] : $player_one_name['username'];
			$player_two_name = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $row_room['player_two_id'] . "' LIMIT 1")->fetch_array(MYSQLI_ASSOC);
			$player_two_name = (empty($player_two_name['username']) OR !is_string($player_two_name['username']) OR !isset($player_two_name['username'])) ? $player_two_name['email'] : $player_two_name['username'];
			return("getLastChanges2|showCards|".$row_room['ground_cards']."|".$row_room['player_one_cards']."|".$row_room['player_two_cards']."|".number_format($row_room['price_money'])."|".$row_room['player_one_id']."|".$row_room['player_two_id']."|".(string)$row_room['double_active']."|".$player_one_name."|".$player_two_name);
		elseif($row_room['last_change']=="newCards"):
			return("getLastChanges2|newCards|".$row_room['ground_cards']."|".$row_room['player_one_cards']."|".$row_room['player_two_cards']);
		elseif(strpos($row_room['last_change'],"sendCard") !== false):
			$main_connection->query("UPDATE `seven_clubs` SET `".$game_player."_read`=`".$game_player."_read`+1 WHERE `id`='".$game_id."'");
			$otherRead=$game_player=="player_one"?$row_room['player_two_read']:$row_room['player_one_read'];
			if($otherRead==2||$otherRead=="2"):
				$main_connection->query("UPDATE `seven_clubs` SET `player_one_read`='0',`player_two_read`='0',`last_change`='NOChange' WHERE `id`='".$game_id."'");
			endif;
			if(count(explode(",",$row_room['player_one_cards']))>=4 && count(explode(",",$row_room['player_two_cards']))>=4):
				$main_connection->query("UPDATE `seven_clubs` SET `last_change`='newCards' WHERE `id`='".$game_id."'");
			endif;
			return("getLastChanges2|".$row_room['last_change']."|".$row_room['player_one_cards']."|".$row_room['player_two_cards']."|".$row_room['ground_cards']."|".$row_room['player_one_soor']."|".$row_room['player_two_soor']);
		endif;
	endif;
	return("getLastChanges2|NOChange");
}
function socket_showVerdict($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_showVerdict|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$game_id=safe_codes($params[1]);
	$v=safe_codes($params[2]);
	$query_check_room=$main_connection->query("SELECT * FROM `two_verdicts_table` WHERE `id`='".$game_id."'");
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	if(strpos($row_room['last_change'],"Verdict:")===false):$main_connection->query("UPDATE `two_verdicts_table` SET `last_change`='Verdict:".$v."',`verdict_card`='".$v."' WHERE `id`='".$game_id."'");endif;
}
function socket_requestForDouble($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_requestForDouble|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$game_id=safe_codes($params[1]);
	$game_player=safe_codes($params[2]);
	$query_check_room=$main_connection->query("SELECT * FROM `two_verdicts_table` WHERE `id`='".$game_id."'");
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	if($row_room['double_active']=="false"):return("امکان ارسال درخواست دوبل برای این بازی غیرفعال شده است");endif;
	if(($row_room['double_status']=="player_one"||$row_room['double_status']=="player_twoAccept") && $game_player=="player_one"):return("شما قبلا برای این بازی درخواست دوبل کرده اید");endif;
	if(($row_room['double_status']=="player_two"||$row_room['double_status']=="player_oneAccept") && $game_player=="player_two"):return("شما قبلا برای این بازی درخواست دوبل کرده اید");endif;
	$main_connection->query("UPDATE `two_verdicts_table` SET `double_status`='".$game_player."',`double_count`=`double_count`+1,`double_view`='0' WHERE `id`='".$game_id."'");
}
function socket_requestForDouble2($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_requestForDouble2|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$game_id=safe_codes($params[1]);
	$game_player=safe_codes($params[2]);
	$query_check_room=$main_connection->query("SELECT * FROM `seven_clubs` WHERE `id`='".$game_id."'");
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	if($row_room['double_active']=="false"):return("امکان ارسال درخواست دوبل برای این بازی غیرفعال شده است");endif;
	if(($row_room['double_status']=="player_one"||$row_room['double_status']=="player_twoAccept") && $game_player=="player_one"):return("شما قبلا برای این بازی درخواست دوبل کرده اید");endif;
	if(($row_room['double_status']=="player_two"||$row_room['double_status']=="player_oneAccept") && $game_player=="player_two"):return("شما قبلا برای این بازی درخواست دوبل کرده اید");endif;
	$main_connection->query("UPDATE `seven_clubs` SET `double_status`='".$game_player."',`double_count`=`double_count`+1,`double_view`='0' WHERE `id`='".$game_id."'");
}
function socket_changeDoubleStatus($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_changeDoubleStatus|"),array(""),$fields));
	$type=safe_codes($params[0]);
	$id=safe_codes($params[1]);
	$game_id=safe_codes($params[2]);
	$game_player=safe_codes($params[3]);
	$query_check_room=$main_connection->query("SELECT * FROM `two_verdicts_table` WHERE `id`='".$game_id."'");
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	if($row_room['double_active']=="false"):return("امکان ارسال درخواست دوبل برای این بازی غیرفعال شده است");endif;
	if($type=="accept"):
		$main_connection->query("UPDATE `two_verdicts_table` SET `double_status`='".$game_player."Accept',`price_money`='".($row_room['price_money']*2)."',`double_view`='0' WHERE `id`='".$game_id."'");
	elseif($type=="decline"):
		$main_connection->query("UPDATE `two_verdicts_table` SET `double_status`='".$game_player."Decline',`double_view`='0' WHERE `id`='".$game_id."'");
	endif;
}
function socket_changeDoubleStatus2($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_changeDoubleStatus2|"),array(""),$fields));
	$type=safe_codes($params[0]);
	$id=safe_codes($params[1]);
	$game_id=safe_codes($params[2]);
	$game_player=safe_codes($params[3]);
	$query_check_room=$main_connection->query("SELECT * FROM `seven_clubs` WHERE `id`='".$game_id."'");
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	if($row_room['double_active']=="false"):return("امکان ارسال درخواست دوبل برای این بازی غیرفعال شده است");endif;
	if($type=="accept"):
		$main_connection->query("UPDATE `seven_clubs` SET `double_status`='".$game_player."Accept',`price_money`='".($row_room['price_money']*2)."',`double_view`='0' WHERE `id`='".$game_id."'");
	elseif($type=="decline"):
		$main_connection->query("UPDATE `seven_clubs` SET `double_status`='".$game_player."Decline',`double_view`='0' WHERE `id`='".$game_id."'");
	endif;
}
function socket_gameStartCards($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_gameStartCards|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$game_id=safe_codes($params[1]);
	$query_check_room=$main_connection->query("SELECT * FROM `two_verdicts_table` WHERE `id`='".$game_id."'");
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	if($row_room['last_change']!="GameStartCards"):
		$playerOneSortedCards=sortCards($row_room['player_one_cards']);
		$playerTwoSortedCards=sortCards($row_room['player_two_cards']);
		$main_connection->query("UPDATE `two_verdicts_table` SET `last_change`='GameStartCards',`player_one_cards`='".$playerOneSortedCards."',`player_two_cards`='".$playerTwoSortedCards."' WHERE `id`='".$game_id."'");
	endif;
}
function socket_removeFirstTwoCards($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_removeFirstTwoCards|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$game_id=safe_codes($params[1]);
	$game_player=safe_codes($params[2]);
	$cards=safe_codes($params[3]);
	$cardsExplode=explode(",",$cards);
	$query_check_room=$main_connection->query("SELECT * FROM `two_verdicts_table` WHERE `id`='".$game_id."'");
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	$meCards=explode(",",($game_player=="player_one"?$row_room['player_one_cards']:$row_room['player_two_cards']));
	$i=-1;
	foreach($meCards as $v):
		$i++;
		if(in_array($v,$cardsExplode)):unset($meCards[$i]);endif;
	endforeach;
	$main_connection->query("UPDATE `two_verdicts_table` SET `last_change`='".($game_player=="player_one"?"player_oneRemoveCards":"player_twoRemoveCards")."',`".$game_player."_cards`='".implode(",",$meCards)."',`".$game_player."_id`='".$id."' WHERE `id`='".$game_id."'");
}
function socket_sendCard($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_sendCard|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$game_id=safe_codes($params[1]);
	$game_player=safe_codes($params[2]);
	$sendedCard=safe_codes($params[3]);
	$query_check_room=$main_connection->query("SELECT * FROM `two_verdicts_table` WHERE `id`='".$game_id."'");
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	$meGroundCard=$game_player=="player_one"?$row_room['player_one_ground_card']:$row_room['player_two_ground_card'];
	$meCards=explode(",",($game_player=="player_one"?$row_room['player_one_cards']:$row_room['player_two_cards']));
	$i=-1;
	foreach($meCards as $v):
		$i++;
		if($v==$sendedCard):unset($meCards[$i]);endif;
	endforeach;
	if($row_room['player_one_ground_card']==""&&$row_room['player_two_ground_card']==""):
		$main_connection->query("UPDATE `two_verdicts_table` SET `last_change`='".($game_player=="player_one"?"player_oneSendCard":"player_twoSendCard")."',`".$game_player."_ground_card`='".$sendedCard."',`".$game_player."_cards`='".implode(",",$meCards)."' WHERE `id`='".$game_id."'");
	else:
		$otherSendedCard=$game_player=="player_one"?$row_room['player_two_ground_card']:$row_room['player_one_ground_card'];
		if($game_player=="player_one"):$meee="player_one,".$sendedCard;$otherrrr="player_two,".$otherSendedCard;
		else:$meee="player_two,".$sendedCard;$otherrrr="player_one,".$otherSendedCard;
		endif;
		$meSendedCardType=mb_substr($sendedCard,0,1,"utf-8");
		$otherSendedCardType=mb_substr($otherSendedCard,0,1,"utf-8");
		$meSendedCardNumber=(mb_substr($sendedCard,1,4,"utf-8")==1||mb_substr($sendedCard,1,4,"utf-8")=="1")?14:mb_substr($sendedCard,1,4,"utf-8");
		$otherSendedCardNumber=(mb_substr($otherSendedCard,1,4,"utf-8")==1||mb_substr($otherSendedCard,1,4,"utf-8")=="1")?14:mb_substr($otherSendedCard,1,4,"utf-8");
		if($meSendedCardType==$otherSendedCardType):
			if($meSendedCardNumber<$otherSendedCardNumber):$handWiner=$game_player=="player_one"?"player_two":"player_one";
			else:$handWiner=$game_player=="player_one"?"player_one":"player_two";
			endif;
		else:
			if($meSendedCardType!=$row_room['verdict_card']):$handWiner=$game_player=="player_one"?"player_two":"player_one";
			else:$handWiner=$game_player=="player_one"?"player_one":"player_two";
			endif;
		endif;
		$main_connection->query("UPDATE `two_verdicts_table` SET `last_change`='HandWin:".$handWiner."|".$meee."|".$otherrrr."',`player_one_ground_card`='',`player_two_ground_card`='',`".$handWiner."_score`=`".$handWiner."_score`+1,`".$game_player."_cards`='".implode(",",$meCards)."' WHERE `id`='".$game_id."'");
	endif;
}
function socket_sendCard2($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_sendCard2|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$game_id=safe_codes($params[1]);
	$game_player=safe_codes($params[2]);
	$sendedCard=safe_codes($params[3]);
	$query_check_room=$main_connection->query("SELECT * FROM `seven_clubs` WHERE `id`='".$game_id."'");
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	$meCards=explode(",",($game_player=="player_one"?$row_room['player_one_cards']:$row_room['player_two_cards']));
	$othersCards=explode(",",($game_player=="player_one"?$row_room['player_two_cards']:$row_room['player_one_cards']));
	$groundCards=explode(",",$row_room['ground_cards']);
	$groundCardsToShow=$row_room['ground_cards'];
	$i=-1;
	foreach($meCards as $v):
		$i++;
		if($v==$sendedCard):unset($meCards[$i]);endif;
	endforeach;
	$meSendedCardNumber=mb_substr($sendedCard,1,4,"utf-8");
	$groundCardsToShow=$groundCardsToShow.",".$sendedCard;
	if($meSendedCardNumber==13||$meSendedCardNumber=="13"):
		if(in_array("a13",$groundCards)||in_array("b13",$groundCards)||in_array("c13",$groundCards)||in_array("d13",$groundCards)):
			foreach($groundCards as $key=>$value):
				if(mb_substr($value,1,4,"utf-8")==13||mb_substr($value,1,4,"utf-8")=="13"):
					$winCart=$value;
					unset($groundCards[$key]);
					break;
				endif;
			endforeach;
			$winCarts=$row_room[$game_player."_score"].",".$winCart.",".$sendedCard;
			$_LastWin=true;
		else:
			$_LastWin=false;
			$groundCards=explode(",",implode(",",$groundCards).",".$sendedCard);
			$winCarts=$row_room[$game_player."_score"];
		endif;
	elseif($meSendedCardNumber==12||$meSendedCardNumber=="12"):
		if(in_array("a12",$groundCards)||in_array("b12",$groundCards)||in_array("c12",$groundCards)||in_array("d12",$groundCards)):
			foreach($groundCards as $key=>$value):
				if(mb_substr($value,1,4,"utf-8")==12||mb_substr($value,1,4,"utf-8")=="12"):
					$winCart=$value;
					unset($groundCards[$key]);
					break;
				endif;
			endforeach;
			$winCarts=$row_room[$game_player."_score"].",".$winCart.",".$sendedCard;
			$_LastWin=true;
		else:
			$_LastWin=false;
			$groundCards=explode(",",implode(",",$groundCards).",".$sendedCard);
			$winCarts=$row_room[$game_player."_score"];
		endif;
	elseif($meSendedCardNumber==11||$meSendedCardNumber=="11"):
		$soldierI=0;
		$winCarts=$row_room[$game_player."_score"];
		foreach($groundCards as $key=>$value):
			if(mb_substr($value,1,4,"utf-8")!=12&&mb_substr($value,1,4,"utf-8")!="12"&&mb_substr($value,1,4,"utf-8")!=13&&mb_substr($value,1,4,"utf-8")!="13"):
				$soldierI++;
				$winCarts=$winCarts.",".$value;
				unset($groundCards[$key]);
			endif;
		endforeach;
		if($soldierI<=0):
			$groundCards=explode(",",implode(",",$groundCards).",".$sendedCard);
			$_LastWin=false;
		else:
			$_LastWin=true;
			$winCarts=$winCarts.",".$sendedCard;
		endif;
	elseif($meSendedCardNumber==10||$meSendedCardNumber=="10"):
		if(in_array("a1",$groundCards)||in_array("b1",$groundCards)||in_array("c1",$groundCards)||in_array("d1",$groundCards)):
			foreach($groundCards as $key=>$value):
				if(mb_substr($value,1,4,"utf-8")==1||mb_substr($value,1,4,"utf-8")=="1"):
					$winCart=$value;
					unset($groundCards[$key]);
					break;
				endif;
			endforeach;
			$winCarts=$row_room[$game_player."_score"].",".$winCart.",".$sendedCard;
			$_LastWin=true;
		else:
			$_LastWin=false;
			$groundCards=explode(",",implode(",",$groundCards).",".$sendedCard);
			$winCarts=$row_room[$game_player."_score"];
		endif;
	elseif($meSendedCardNumber==9||$meSendedCardNumber=="9"):
		if(in_array("a2",$groundCards)||in_array("b2",$groundCards)||in_array("c2",$groundCards)||in_array("d2",$groundCards)):
			foreach($groundCards as $key=>$value):
				if(mb_substr($value,1,4,"utf-8")==2||mb_substr($value,1,4,"utf-8")=="2"):
					$winCart=$value;
					unset($groundCards[$key]);
					break;
				endif;
			endforeach;
			$winCarts=$row_room[$game_player."_score"].",".$winCart.",".$sendedCard;
			$_LastWin=true;
		else:
			$_LastWin=false;
			$groundCards=explode(",",implode(",",$groundCards).",".$sendedCard);
			$winCarts=$row_room[$game_player."_score"];
		endif;
	elseif($meSendedCardNumber==8||$meSendedCardNumber=="8"):
		if(in_array("a3",$groundCards)||in_array("b3",$groundCards)||in_array("c3",$groundCards)||in_array("d3",$groundCards)):
			foreach($groundCards as $key=>$value):
				if(mb_substr($value,1,4,"utf-8")==3||mb_substr($value,1,4,"utf-8")=="3"):
					$winCart=$value;
					unset($groundCards[$key]);
					break;
				endif;
			endforeach;
			$winCarts=$row_room[$game_player."_score"].",".$winCart.",".$sendedCard;
			$_LastWin=true;
		else:
			$_LastWin=false;
			$groundCards=explode(",",implode(",",$groundCards).",".$sendedCard);
			$winCarts=$row_room[$game_player."_score"];
		endif;
	elseif($meSendedCardNumber==7||$meSendedCardNumber=="7"):
		if(in_array("a4",$groundCards)||in_array("b4",$groundCards)||in_array("c4",$groundCards)||in_array("d4",$groundCards)):
			foreach($groundCards as $key=>$value):
				if(mb_substr($value,1,4,"utf-8")==4||mb_substr($value,1,4,"utf-8")=="4"):
					$winCart=$value;
					unset($groundCards[$key]);
					break;
				endif;
			endforeach;
			$winCarts=$row_room[$game_player."_score"].",".$winCart.",".$sendedCard;
			$_LastWin=true;
		else:
			$_LastWin=false;
			$groundCards=explode(",",implode(",",$groundCards).",".$sendedCard);
			$winCarts=$row_room[$game_player."_score"];
		endif;
	elseif($meSendedCardNumber==6||$meSendedCardNumber=="6"):
		if(in_array("a5",$groundCards)||in_array("b5",$groundCards)||in_array("c5",$groundCards)||in_array("d5",$groundCards)):
			foreach($groundCards as $key=>$value):
				if(mb_substr($value,1,4,"utf-8")==5||mb_substr($value,1,4,"utf-8")=="5"):
					$winCart=$value;
					unset($groundCards[$key]);
					break;
				endif;
			endforeach;
			$winCarts=$row_room[$game_player."_score"].",".$winCart.",".$sendedCard;
			$_LastWin=true;
		else:
			$_LastWin=false;
			$groundCards=explode(",",implode(",",$groundCards).",".$sendedCard);
			$winCarts=$row_room[$game_player."_score"];
		endif;
	elseif($meSendedCardNumber==5||$meSendedCardNumber=="5"):
		if(in_array("a6",$groundCards)||in_array("b6",$groundCards)||in_array("c6",$groundCards)||in_array("d6",$groundCards)):
			foreach($groundCards as $key=>$value):
				if(mb_substr($value,1,4,"utf-8")==6||mb_substr($value,1,4,"utf-8")=="6"):
					$winCart=$value;
					unset($groundCards[$key]);
					break;
				endif;
			endforeach;
			$winCarts=$row_room[$game_player."_score"].",".$winCart.",".$sendedCard;
			$_LastWin=true;
		else:
			$_LastWin=false;
			$groundCards=explode(",",implode(",",$groundCards).",".$sendedCard);
			$winCarts=$row_room[$game_player."_score"];
		endif;
	elseif($meSendedCardNumber==4||$meSendedCardNumber=="4"):
		if(in_array("a7",$groundCards)||in_array("b7",$groundCards)||in_array("c7",$groundCards)||in_array("d7",$groundCards)):
			foreach($groundCards as $key=>$value):
				if(mb_substr($value,1,4,"utf-8")==7||mb_substr($value,1,4,"utf-8")=="7"):
					$winCart=$value;
					unset($groundCards[$key]);
					break;
				endif;
			endforeach;
			$winCarts=$row_room[$game_player."_score"].",".$winCart.",".$sendedCard;
			$_LastWin=true;
		else:
			$_LastWin=false;
			$groundCards=explode(",",implode(",",$groundCards).",".$sendedCard);
			$winCarts=$row_room[$game_player."_score"];
		endif;
	elseif($meSendedCardNumber==3||$meSendedCardNumber=="3"):
		if(in_array("a8",$groundCards)||in_array("b8",$groundCards)||in_array("c8",$groundCards)||in_array("d8",$groundCards)):
			foreach($groundCards as $key=>$value):
				if(mb_substr($value,1,4,"utf-8")==8||mb_substr($value,1,4,"utf-8")=="8"):
					$winCart=$value;
					unset($groundCards[$key]);
					break;
				endif;
			endforeach;
			$winCarts=$row_room[$game_player."_score"].",".$winCart.",".$sendedCard;
			$_LastWin=true;
		else:
			$_LastWin=false;
			$groundCards=explode(",",implode(",",$groundCards).",".$sendedCard);
			$winCarts=$row_room[$game_player."_score"];
		endif;
	elseif($meSendedCardNumber==2||$meSendedCardNumber=="2"):
		if(in_array("a9",$groundCards)||in_array("b9",$groundCards)||in_array("c9",$groundCards)||in_array("d9",$groundCards)):
			foreach($groundCards as $key=>$value):
				if(mb_substr($value,1,4,"utf-8")==9||mb_substr($value,1,4,"utf-8")=="9"):
					$winCart=$value;
					unset($groundCards[$key]);
					break;
				endif;
			endforeach;
			$winCarts=$row_room[$game_player."_score"].",".$winCart.",".$sendedCard;
			$_LastWin=true;
		else:
			$_LastWin=false;
			$groundCards=explode(",",implode(",",$groundCards).",".$sendedCard);
			$winCarts=$row_room[$game_player."_score"];
		endif;
	elseif($meSendedCardNumber==1||$meSendedCardNumber=="1"):
		if(in_array("a10",$groundCards)||in_array("b10",$groundCards)||in_array("c10",$groundCards)||in_array("d10",$groundCards)):
			foreach($groundCards as $key=>$value):
				if(mb_substr($value,1,4,"utf-8")==10||mb_substr($value,1,4,"utf-8")=="10"):
					$winCart=$value;
					unset($groundCards[$key]);
					break;
				endif;
			endforeach;
			$winCarts=$row_room[$game_player."_score"].",".$winCart.",".$sendedCard;
			$_LastWin=true;
		else:
			$_LastWin=false;
			$groundCards=explode(",",implode(",",$groundCards).",".$sendedCard);
			$winCarts=$row_room[$game_player."_score"];
		endif;
	else:
		$_LastWin=false;
		$groundCards=explode(",",implode(",",$groundCards).",".$sendedCard);
		$winCarts=$row_room[$game_player."_score"];
	endif;
	if($_LastWin):$main_connection->query("UPDATE `seven_clubs` SET `last_win`='".$game_player."' WHERE `id`='".$game_id."'");endif;
	$winCarts=mb_substr($winCarts,0,1,"utf-8")==","?mb_substr($winCarts,1,(strlen($winCarts)-1),"utf-8"):$winCarts;
	if($game_player=="player_two"):
		$main_connection->query("UPDATE `seven_clubs` SET `player_one_read`='0',`player_two_read`='0' WHERE `id`='".$game_id."'");
	endif;
	foreach($meCards as $key=>$value):
		if(empty($value)):unset($meCards[$key]);endif;
	endforeach;
	foreach($othersCards as $key=>$value):
		if(empty($value)):unset($othersCards[$key]);endif;
	endforeach;
	$meSoor=$row_room[$game_player."_soor"];
	if(count($groundCards)<=0):$meSoor++;endif;
	$main_connection->query("UPDATE `seven_clubs` SET `".$game_player."_score`='".$winCarts."',`".$game_player."_cards`='".implode(",",$meCards)."',`ground_cards`='".implode(",",$groundCards)."',`last_change`='sendCard|".$game_player."|".$groundCardsToShow."',`".$game_player."_soor`='".$meSoor."' WHERE `id`='".$game_id."'");
	if(count($meCards)<=0 && count($othersCards)<=0):
		$playerOneCards=array();
		$playerTwoCards=array();
		$arrayCards=explode(",",$row_room['hide_cards']);
		shuffle($arrayCards);
		for($i=1;$i<=4;$i++):$random_one=array_rand($arrayCards);$playerOneCards[]=$arrayCards[$random_one];unset($arrayCards[$random_one]);endfor;
		for($i=1;$i<=4;$i++):$random_two=array_rand($arrayCards);$playerTwoCards[]=$arrayCards[$random_two];unset($arrayCards[$random_two]);endfor;
		sort($playerOneCards);
		sort($playerTwoCards);
		$main_connection->query("UPDATE `seven_clubs` SET `hide_cards`='".implode(",",$arrayCards)."',`player_one_cards`='".sortCards(implode(",",$playerOneCards))."',`player_two_cards`='".sortCards(implode(",",$playerTwoCards))."' WHERE `id`='".$game_id."'");
	endif;
}
function socket_showKing($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_showKing|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$game_id=safe_codes($params[1]);
	$query_check_room=$main_connection->query("SELECT * FROM `two_verdicts_table` WHERE `id`='".$game_id."'");
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	if(strpos($row_room['last_change'],"King:")===false):
		$playerOneCards=array();
		$playerTwoCards=array();
		/**
		a = Spades (Pig)
		b = Hearts (Dell)
		c = Clubs (Geshniz)
		d = Diamonds (Khesht)
		**/
		$arrayCards=array("a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13","b1","b2","b3","b4","b5","b6","b7","b8","b9","b10","b11","b12","b13","c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","d11","d12","d13");
		$removeble_cards=array(1,14,27,40);
		$removebaleCardsShow="";
		$arrayRemoveRandFirst=$removeble_cards[array_rand($removeble_cards)];
		$removebaleCardsShow.=$arrayCards[$arrayRemoveRandFirst].",";
		unset($arrayCards[$arrayRemoveRandFirst]);
		if($arrayRemoveRandFirst==1):unset($removeble_cards[0]);
		elseif($arrayRemoveRandFirst==14):unset($removeble_cards[1]);
		elseif($arrayRemoveRandFirst==27):unset($removeble_cards[2]);
		elseif($arrayRemoveRandFirst==40):unset($removeble_cards[3]);
		endif;
		$arrayRemoveRandSecond=$removeble_cards[array_rand($removeble_cards)];
		$removebaleCardsShow.=$arrayCards[$arrayRemoveRandSecond];
		unset($arrayCards[$arrayRemoveRandSecond]);
		if($arrayRemoveRandFirst==1):unset($removeble_cards[0]);
		elseif($arrayRemoveRandFirst==14):unset($removeble_cards[1]);
		elseif($arrayRemoveRandFirst==27):unset($removeble_cards[2]);
		elseif($arrayRemoveRandFirst==40):unset($removeble_cards[3]);
		endif;
		shuffle($arrayCards);
		for($i=1;$i<=5;$i++):$random_one=array_rand($arrayCards);$playerOneCards[]=$arrayCards[$random_one];unset($arrayCards[$random_one]);endfor;
		for($i=1;$i<=5;$i++):$random_two=array_rand($arrayCards);$playerTwoCards[]=$arrayCards[$random_two];unset($arrayCards[$random_two]);endfor;
		sort($playerOneCards);
		sort($playerTwoCards);
		$main_connection->query("UPDATE `two_verdicts_table` SET `last_change`='King:".randKing()."',`king`='".randKing()."',`player_one_cards`='".sortCards(implode(",",$playerOneCards))."',`player_two_cards`='".sortCards(implode(",",$playerTwoCards))."',`ground_cards`='".implode(",",$arrayCards)."',`removeble_cards`='".$removebaleCardsShow."' WHERE `id`='".$game_id."'");
	endif;
}
function socket_showCards($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_showCards|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$game_id=safe_codes($params[1]);
	$query_check_room=$main_connection->query("SELECT * FROM `seven_clubs` WHERE `id`='".$game_id."'");
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	if($row_room['last_change']!="showCards"):
		$playerOneCards=array();
		$playerTwoCards=array();
		$groundCards=array();
		$arrayCards=array("a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13","b1","b2","b3","b4","b5","b6","b7","b8","b9","b10","b11","b12","b13","c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","d11","d12","d13");
		shuffle($arrayCards);
		for($i=1;$i<=4;$i++):$random_one=array_rand($arrayCards);$playerOneCards[]=$arrayCards[$random_one];unset($arrayCards[$random_one]);endfor;
		for($i=1;$i<=4;$i++):$random_two=array_rand($arrayCards);$playerTwoCards[]=$arrayCards[$random_two];unset($arrayCards[$random_two]);endfor;
		for($i=1;$i<=4;$i++):
			$random_three=array_rand($arrayCards);
			if(in_array($arrayCards[$random_three],array("a11","b11","c11","d11"))):
				unset($random_three);
				$random_three=array_rand($arrayCards);
				if(in_array($arrayCards[$random_three],array("a11","b11","c11","d11"))):
					unset($random_three);
					$random_three=array_rand($arrayCards);
					if(in_array($arrayCards[$random_three],array("a11","b11","c11","d11"))):
						unset($random_three);
						$random_three=array_rand($arrayCards);
						if(in_array($arrayCards[$random_three],array("a11","b11","c11","d11"))):
							unset($random_three);
							$random_three=array_rand($arrayCards);
							if(in_array($arrayCards[$random_three],array("a11","b11","c11","d11"))):
								unset($random_three);
								$random_three=array_rand($arrayCards);
							endif;
						endif;
					endif;
				endif;
			endif;
			$groundCards[]=$arrayCards[$random_three];
			unset($arrayCards[$random_three]);
		endfor;
		sort($playerOneCards);
		sort($playerTwoCards);
		sort($groundCards);
		$main_connection->query("UPDATE `seven_clubs` SET `last_change`='showCards',`hide_cards`='".implode(",",$arrayCards)."',`ground_cards`='".sortCards(implode(",",$groundCards))."',`player_one_cards`='".sortCards(implode(",",$playerOneCards))."',`player_two_cards`='".sortCards(implode(",",$playerTwoCards))."',`last_change`='showCards' WHERE `id`='".$game_id."'");
	endif;
}
function socket_chooseCards($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_chooseCards|"),array(""),$fields));
	$choose_cards=safe_codes($params[0]);
	$id=safe_codes($params[1]);
	$game_id=safe_codes($params[2]);
	$game_player=safe_codes($params[3]);
	$query_check_room=$main_connection->query("SELECT * FROM `two_verdicts_table` WHERE `id`='".$game_id."'");
	$row_room=$query_check_room->fetch_array(MYSQLI_ASSOC);
	$choose_cards_2=explode(",",$choose_cards);
	$choose_cards_card_1=explode(":",$choose_cards_2[0]);
	$choose_cards_card_2=explode(":",$choose_cards_2[1]);
	if($choose_cards_card_1[1]=="choose"):$row_room[$game_player."_cards"]=$row_room[$game_player."_cards"].",".$choose_cards_card_1[0];endif;
	if($choose_cards_card_2[1]=="choose"):$row_room[$game_player."_cards"]=$row_room[$game_player."_cards"].",".$choose_cards_card_2[0];endif;
	$exploded=explode(",",$row_room['ground_cards']);
	unset($exploded[0]);
	unset($exploded[1]);
	$main_connection->query("UPDATE `two_verdicts_table` SET `last_change`='".($game_player=="player_one"?"player_twoChooseCard":"player_oneChooseCard")."',`ground_cards`='".implode(",",$exploded)."',`".$game_player."_cards`='".sortCards($row_room[$game_player."_cards"])."',`choose_card`='".($game_player=="player_one"?"player_two":"player_one")."' WHERE `id`='".$game_id."'");
}
function socket_clearLastChange($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_clearLastChange|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$main_connection->query("UPDATE `two_verdicts_table` SET `last_change`='' WHERE `id`='".$id."'");
}
function socket_gameClose($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_gameClose|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$game_id=safe_codes($params[1]);
	$query_check_game=$main_connection->query("SELECT * FROM `two_verdicts_table` WHERE `id`='".$game_id."'");
	$main_connection->query("UPDATE `two_verdicts_table` SET `end_date`='".time()."' WHERE `id`='".$game_id."'");
	return("gameClose|OK");
}
function socket_gameClose2($fields){
	global $main_connection;
	$params=explode("|",str_replace(array("socket_gameClose2|"),array(""),$fields));
	$id=safe_codes($params[0]);
	$game_id=safe_codes($params[1]);
	$query_check_game=$main_connection->query("SELECT * FROM `seven_clubs` WHERE `id`='".$game_id."'");
	$main_connection->query("UPDATE `seven_clubs` SET `end_date`='".time()."' WHERE `id`='".$game_id."'");
	return("gameClose|OK");
}
?>