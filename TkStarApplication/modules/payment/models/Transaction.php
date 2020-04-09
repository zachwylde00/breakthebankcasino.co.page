<?php
use Illuminate\Database\Eloquent\Model as EloquentModel;
class Transaction extends EloquentModel{
    protected $table = 'transactions';
    protected $guarded = array();
    public function user(){
        return($this->belongsTo(CI::$APP->sentinel->getModel()));
    }
}
?>