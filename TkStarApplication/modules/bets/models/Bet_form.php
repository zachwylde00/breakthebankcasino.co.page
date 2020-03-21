<?php
class Bet_form extends Illuminate\Database\Eloquent\Model{
    protected $table = 'bet_form';
    protected $guarded = array();
    public function bet(){
        return($this->belongsTo('Bet', 'bets_id', 'id'));
    }
}
?>