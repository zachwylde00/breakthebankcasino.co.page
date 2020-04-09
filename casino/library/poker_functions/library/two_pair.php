<?php
function TwoPair($player_cards, $player_score){
	$player_cards = trim($player_cards);
	$player_cards = preg_replace('/[^0-9,]/imu', '', $player_cards);
	$player_cards = explode(',', $player_cards);
	$player_cards = array_count_values($player_cards);
	$first_pair = false;
	$second_pair = false;
	foreach($player_cards as $player_card_count){
		if($player_card_count >= 2){
			if($first_pair === false AND $second_pair === false){
				$first_pair = true;
			}else if($first_pair === true AND $second_pair === false){
				$second_pair = true;
			}else if($first_pair === true AND $second_pair === true){
				break;
			}else{
				continue;
			}
		}
	}
	if($first_pair === true AND $second_pair === true){
		return($player_score <= 0 ? 15 : $player_score);
	}else{
		return($player_score);
	}
}
?>