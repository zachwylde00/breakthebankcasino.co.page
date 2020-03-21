<?php
use Illuminate\Database\Eloquent\Model as EloquentModel;
class Carttocart extends EloquentModel{
    protected $table = 'Carter';
    protected $guarded = array();
    public function user(){
        return($this->belongsTo(CI::$APP->sentinel->getModel()));
    }
}
?>