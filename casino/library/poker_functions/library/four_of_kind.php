<?php
function FourOfKind($player_cards, $player_score){
	if(tk_check($player_cards, 'a1') AND tk_check($player_cards, 'b1') AND tk_check($player_cards, 'c1') AND tk_check($player_cards, 'd1')){
		return($player_score <= 0 ? 80 : $player_score);
	}else if(tk_check($player_cards, 'a2') AND tk_check($player_cards, 'b2') AND tk_check($player_cards, 'c2') AND tk_check($player_cards, 'd2')){
		return($player_score <= 0 ? 80 : $player_score);
	}else if(tk_check($player_cards, 'a3') AND tk_check($player_cards, 'b3') AND tk_check($player_cards, 'c3') AND tk_check($player_cards, 'd3')){
		return($player_score <= 0 ? 80 : $player_score);
	}else if(tk_check($player_cards, 'a4') AND tk_check($player_cards, 'b4') AND tk_check($player_cards, 'c4') AND tk_check($player_cards, 'd4')){
		return($player_score <= 0 ? 80 : $player_score);
	}else if(tk_check($player_cards, 'a5') AND tk_check($player_cards, 'b5') AND tk_check($player_cards, 'c5') AND tk_check($player_cards, 'd5')){
		return($player_score <= 0 ? 80 : $player_score);
	}else if(tk_check($player_cards, 'a6') AND tk_check($player_cards, 'b6') AND tk_check($player_cards, 'c6') AND tk_check($player_cards, 'd6')){
		return($player_score <= 0 ? 80 : $player_score);
	}else if(tk_check($player_cards, 'a7') AND tk_check($player_cards, 'b7') AND tk_check($player_cards, 'c7') AND tk_check($player_cards, 'd7')){
		return($player_score <= 0 ? 80 : $player_score);
	}else if(tk_check($player_cards, 'a8') AND tk_check($player_cards, 'b8') AND tk_check($player_cards, 'c8') AND tk_check($player_cards, 'd8')){
		return($player_score <= 0 ? 80 : $player_score);
	}else if(tk_check($player_cards, 'a9') AND tk_check($player_cards, 'b9') AND tk_check($player_cards, 'c9') AND tk_check($player_cards, 'd9')){
		return($player_score <= 0 ? 80 : $player_score);
	}else if(tk_check($player_cards, 'a10') AND tk_check($player_cards, 'b10') AND tk_check($player_cards, 'c10') AND tk_check($player_cards, 'd9')){
		return($player_score <= 0 ? 80 : $player_score);
	}else if(tk_check($player_cards, 'a11') AND tk_check($player_cards, 'b11') AND tk_check($player_cards, 'c11') AND tk_check($player_cards, 'd11')){
		return($player_score <= 0 ? 80 : $player_score);
	}else if(tk_check($player_cards, 'a12') AND tk_check($player_cards, 'b12') AND tk_check($player_cards, 'c12') AND tk_check($player_cards, 'd12')){
		return($player_score <= 0 ? 80 : $player_score);
	}else if(tk_check($player_cards, 'a13') AND tk_check($player_cards, 'b13') AND tk_check($player_cards, 'c13') AND tk_check($player_cards, 'd13')){
		return($player_score <= 0 ? 80 : $player_score);
	}else{
		return($player_score);
	}
}
?>