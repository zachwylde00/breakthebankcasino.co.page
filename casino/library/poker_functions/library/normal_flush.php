<?php
function NormalFlush($player_cards, $player_score){
	if(mb_substr_count($player_cards, 'a') >= 5){
		return($player_score <= 0 ? 60 : $player_score);
	}else if(mb_substr_count($player_cards, 'b') >= 5){
		return($player_score <= 0 ? 60 : $player_score);
	}else if(mb_substr_count($player_cards, 'c') >= 5){
		return($player_score <= 0 ? 60 : $player_score);
	}else if(mb_substr_count($player_cards, 'd') >= 5){
		return($player_score <= 0 ? 60 : $player_score);
	}else{
		return($player_score);
	}
}
?>