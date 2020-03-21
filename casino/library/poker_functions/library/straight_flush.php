<?php
function StraightFlush($player_cards, $player_score){
	if(tk_check($player_cards, 'a1') AND tk_check($player_cards, 'a2') AND tk_check($player_cards, 'a3') AND tk_check($player_cards, 'a4') AND tk_check($player_cards, 'a5')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'a2') AND tk_check($player_cards, 'a3') AND tk_check($player_cards, 'a4') AND tk_check($player_cards, 'a5') AND tk_check($player_cards, 'a6')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'a3') AND tk_check($player_cards, 'a4') AND tk_check($player_cards, 'a5') AND tk_check($player_cards, 'a6') AND tk_check($player_cards, 'a7')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'a4') AND tk_check($player_cards, 'a5') AND tk_check($player_cards, 'a6') AND tk_check($player_cards, 'a7') AND tk_check($player_cards, 'a8')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'a5') AND tk_check($player_cards, 'a6') AND tk_check($player_cards, 'a7') AND tk_check($player_cards, 'a8') AND tk_check($player_cards, 'a9')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'a6') AND tk_check($player_cards, 'a7') AND tk_check($player_cards, 'a8') AND tk_check($player_cards, 'a9') AND tk_check($player_cards, 'a10')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'a7') AND tk_check($player_cards, 'a8') AND tk_check($player_cards, 'a9') AND tk_check($player_cards, 'a10') AND tk_check($player_cards, 'a11')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'a8') AND tk_check($player_cards, 'a9') AND tk_check($player_cards, 'a10') AND tk_check($player_cards, 'a11') AND tk_check($player_cards, 'a12')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'a9') AND tk_check($player_cards, 'a10') AND tk_check($player_cards, 'a11') AND tk_check($player_cards, 'a12') AND tk_check($player_cards, 'a13')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'b1') AND tk_check($player_cards, 'b2') AND tk_check($player_cards, 'b3') AND tk_check($player_cards, 'b4') AND tk_check($player_cards, 'b5')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'b2') AND tk_check($player_cards, 'b3') AND tk_check($player_cards, 'b4') AND tk_check($player_cards, 'b5') AND tk_check($player_cards, 'b6')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'b3') AND tk_check($player_cards, 'b4') AND tk_check($player_cards, 'b5') AND tk_check($player_cards, 'b6') AND tk_check($player_cards, 'b7')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'b4') AND tk_check($player_cards, 'b5') AND tk_check($player_cards, 'b6') AND tk_check($player_cards, 'b7') AND tk_check($player_cards, 'b8')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'b5') AND tk_check($player_cards, 'b6') AND tk_check($player_cards, 'b7') AND tk_check($player_cards, 'b8') AND tk_check($player_cards, 'b9')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'b6') AND tk_check($player_cards, 'b7') AND tk_check($player_cards, 'b8') AND tk_check($player_cards, 'b9') AND tk_check($player_cards, 'b10')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'b7') AND tk_check($player_cards, 'b8') AND tk_check($player_cards, 'b9') AND tk_check($player_cards, 'b10') AND tk_check($player_cards, 'b11')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'b8') AND tk_check($player_cards, 'b9') AND tk_check($player_cards, 'b10') AND tk_check($player_cards, 'b11') AND tk_check($player_cards, 'b12')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'b9') AND tk_check($player_cards, 'b10') AND tk_check($player_cards, 'b11') AND tk_check($player_cards, 'b12') AND tk_check($player_cards, 'b13')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'c1') AND tk_check($player_cards, 'c2') AND tk_check($player_cards, 'c3') AND tk_check($player_cards, 'c4') AND tk_check($player_cards, 'c5')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'c2') AND tk_check($player_cards, 'c3') AND tk_check($player_cards, 'c4') AND tk_check($player_cards, 'c5') AND tk_check($player_cards, 'c6')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'c3') AND tk_check($player_cards, 'c4') AND tk_check($player_cards, 'c5') AND tk_check($player_cards, 'c6') AND tk_check($player_cards, 'c7')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'c4') AND tk_check($player_cards, 'c5') AND tk_check($player_cards, 'c6') AND tk_check($player_cards, 'c7') AND tk_check($player_cards, 'c8')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'c5') AND tk_check($player_cards, 'c6') AND tk_check($player_cards, 'c7') AND tk_check($player_cards, 'c8') AND tk_check($player_cards, 'c9')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'c6') AND tk_check($player_cards, 'c7') AND tk_check($player_cards, 'c8') AND tk_check($player_cards, 'c9') AND tk_check($player_cards, 'c10')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'c7') AND tk_check($player_cards, 'c8') AND tk_check($player_cards, 'c9') AND tk_check($player_cards, 'c10') AND tk_check($player_cards, 'c11')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'c8') AND tk_check($player_cards, 'c9') AND tk_check($player_cards, 'c10') AND tk_check($player_cards, 'c11') AND tk_check($player_cards, 'c12')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'c9') AND tk_check($player_cards, 'c10') AND tk_check($player_cards, 'c11') AND tk_check($player_cards, 'c12') AND tk_check($player_cards, 'c13')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'd1') AND tk_check($player_cards, 'd2') AND tk_check($player_cards, 'd3') AND tk_check($player_cards, 'd4') AND tk_check($player_cards, 'd5')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'd2') AND tk_check($player_cards, 'd3') AND tk_check($player_cards, 'd4') AND tk_check($player_cards, 'd5') AND tk_check($player_cards, 'd6')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'd3') AND tk_check($player_cards, 'd4') AND tk_check($player_cards, 'd5') AND tk_check($player_cards, 'd6') AND tk_check($player_cards, 'd7')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'd4') AND tk_check($player_cards, 'd5') AND tk_check($player_cards, 'd6') AND tk_check($player_cards, 'd7') AND tk_check($player_cards, 'd8')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'd5') AND tk_check($player_cards, 'd6') AND tk_check($player_cards, 'd7') AND tk_check($player_cards, 'd8') AND tk_check($player_cards, 'd9')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'd6') AND tk_check($player_cards, 'd7') AND tk_check($player_cards, 'd8') AND tk_check($player_cards, 'd9') AND tk_check($player_cards, 'd10')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'd7') AND tk_check($player_cards, 'd8') AND tk_check($player_cards, 'd9') AND tk_check($player_cards, 'd10') AND tk_check($player_cards, 'd11')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'd8') AND tk_check($player_cards, 'd9') AND tk_check($player_cards, 'd10') AND tk_check($player_cards, 'd11') AND tk_check($player_cards, 'd12')){
		return($player_score <= 0 ? 90 : $player_score);
	}else if(tk_check($player_cards, 'd9') AND tk_check($player_cards, 'd10') AND tk_check($player_cards, 'd11') AND tk_check($player_cards, 'd12') AND tk_check($player_cards, 'd13')){
		return($player_score <= 0 ? 90 : $player_score);
	}else{
		return($player_score);
	}
}
?>