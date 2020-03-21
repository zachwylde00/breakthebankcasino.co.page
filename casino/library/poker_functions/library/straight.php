<?php
function Straight($player_cards, $player_score){
	if(straight_check($player_cards, '1,2,3,4,5')){
		return($player_score <= 0 ? 50 : $player_score);
	}else if(straight_check($player_cards, '2,3,4,5,6')){
		return($player_score <= 0 ? 50 : $player_score);
	}else if(straight_check($player_cards, '3,4,5,6,7')){
		return($player_score <= 0 ? 50 : $player_score);
	}else if(straight_check($player_cards, '4,5,6,7,8')){
		return($player_score <= 0 ? 50 : $player_score);
	}else if(straight_check($player_cards, '5,6,7,8,9')){
		return($player_score <= 0 ? 50 : $player_score);
	}else if(straight_check($player_cards, '6,7,8,9,10')){
		return($player_score <= 0 ? 50 : $player_score);
	}else if(straight_check($player_cards, '7,8,9,10,11')){
		return($player_score <= 0 ? 50 : $player_score);
	}else if(straight_check($player_cards, '8,9,10,11,12')){
		return($player_score <= 0 ? 50 : $player_score);
	}else if(straight_check($player_cards, '9,10,11,12,13')){
		return($player_score <= 0 ? 50 : $player_score);
	}else if(straight_check($player_cards, '10,11,12,13,1')){
		return($player_score <= 0 ? 50 : $player_score);
	}else{
		return($player_score);
	}
}
?>