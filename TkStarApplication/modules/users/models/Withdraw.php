<?php
use Cartalyst\Sentinel\Users\EloquentUser as EloquentUser;
class Withdraw extends EloquentUser {
    protected $table = 'withdraw';
    protected $guarded = array();
    public function user(){
        return($this->belongsTo(CI::$APP->sentinel->getModel()));
    }
}
?>