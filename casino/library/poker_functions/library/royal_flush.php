<?php
function RoyalFlush($player_cards, $player_score){
	if(tk_check($player_cards, 'a1') AND tk_check($player_cards, 'a13') AND tk_check($player_cards, 'a12') AND tk_check($player_cards, 'a11') AND tk_check($player_cards, 'a10')){
		return($player_score <= 0 ? 100 : $player_score);
	}else if(tk_check($player_cards, 'b1') AND tk_check($player_cards, 'b13') AND tk_check($player_cards, 'b12') AND tk_check($player_cards, 'b11') AND tk_check($player_cards, 'b10')){
		return($player_score <= 0 ? 100 : $player_score);
	}else if(tk_check($player_cards, 'c1') AND tk_check($player_cards, 'c13') AND tk_check($player_cards, 'c12') AND tk_check($player_cards, 'c11') AND tk_check($player_cards, 'c10')){
		return($player_score <= 0 ? 100 : $player_score);
	}else if(tk_check($player_cards, 'd1') AND tk_check($player_cards, 'd13') AND tk_check($player_cards, 'd12') AND tk_check($player_cards, 'd11') AND tk_check($player_cards, 'd10')){
		return($player_score <= 0 ? 100 : $player_score);
	}else{
		return($player_score);
	}
}
?>