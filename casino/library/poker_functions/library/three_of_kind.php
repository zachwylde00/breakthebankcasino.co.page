<?php
function ThreeOfKind($player_cards, $player_score){
	if(three_of_kind_check($player_cards, '1')){
		return($player_score <= 0 ? 30 : $player_score);
	}else if(three_of_kind_check($player_cards, '2')){
		return($player_score <= 0 ? 30 : $player_score);
	}else if(three_of_kind_check($player_cards, '3')){
		return($player_score <= 0 ? 30 : $player_score);
	}else if(three_of_kind_check($player_cards, '4')){
		return($player_score <= 0 ? 30 : $player_score);
	}else if(three_of_kind_check($player_cards, '5')){
		return($player_score <= 0 ? 30 : $player_score);
	}else if(three_of_kind_check($player_cards, '6')){
		return($player_score <= 0 ? 30 : $player_score);
	}else if(three_of_kind_check($player_cards, '7')){
		return($player_score <= 0 ? 30 : $player_score);
	}else if(three_of_kind_check($player_cards, '8')){
		return($player_score <= 0 ? 30 : $player_score);
	}else if(three_of_kind_check($player_cards, '9')){
		return($player_score <= 0 ? 30 : $player_score);
	}else if(three_of_kind_check($player_cards, '10')){
		return($player_score <= 0 ? 30 : $player_score);
	}else if(three_of_kind_check($player_cards, '11')){
		return($player_score <= 0 ? 30 : $player_score);
	}else if(three_of_kind_check($player_cards, '12')){
		return($player_score <= 0 ? 30 : $player_score);
	}else if(three_of_kind_check($player_cards, '13')){
		return($player_score <= 0 ? 30 : $player_score);
	}else{
		return($player_score);
	}
}
?>