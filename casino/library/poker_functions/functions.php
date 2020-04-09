<?php
function tk_check($player_cards, $check_card){
	$player_cards = trim($player_cards);
	$player_cards = explode(',', $player_cards);
	$check_card = trim($check_card);
	$in_array_result = in_array($check_card, $player_cards);
	if($in_array_result !== false){
		return true;
	}else{
		return false;
	}
}
function full_house_check($player_cards, $first_card, $second_card){
	$player_cards = trim($player_cards);
	$player_cards = explode(',', $player_cards);
	$first_card = trim($first_card);
	$second_card = trim($second_card);
	$first_count = 0;
	$second_count = 0;
	foreach($player_cards as $card){
		$card_number = preg_replace('/[^0-9]/imu', '', $card);
		$first_card_number = preg_replace('/[^0-9]/imu', '', $first_card);
		$second_card_number = preg_replace('/[^0-9]/imu', '', $second_card);
		$first_count = $card_number == $first_card_number ? ($first_count + 1) : $first_count;
		$second_count = $card_number == $second_card_number ? ($second_count + 1) : $second_count;
	}
	if($first_count == 2 AND $second_count == 3){
		return true;
	}else if($first_count == 3 AND $second_count == 2){
		return true;
	}else{
		return false;
	}
}
function straight_check($player_cards, $numbers){
	$player_cards = trim($player_cards);
	$player_cards = preg_replace('/[^0-9,]/imu', '', $player_cards);
	$numbers = trim($numbers);
	$numbers = preg_replace('/[^0-9,]/imu', '', $numbers);
	$numbers = explode(',', $numbers);
	$straight_count = 0;
	foreach($numbers as $number){
		if(tk_check($player_cards, $number)){
			$straight_count++;
			continue;
		}else{
			return false;
		}
	}
	if($straight_count >= 5){
		return true;
	}else{
		return false;
	}
}
function three_of_kind_check($player_cards, $number){
	$player_cards = trim($player_cards);
	$player_cards = preg_replace('/[^0-9,]/imu', '', $player_cards);
	$player_cards = explode(',', $player_cards);
	$number = trim($number);
	$array_count_values = array_count_values($player_cards);
	if(isset($array_count_values[$number]) AND !empty($array_count_values[$number]) AND is_numeric($array_count_values[$number]) AND $array_count_values[$number] >= 3){
		return true;
	}else{
		return false;
	}
}
?>