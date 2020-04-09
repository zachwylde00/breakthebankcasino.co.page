<?php
use Cartalyst\Sentinel\Users\EloquentUser as EloquentUser;
class carter extends EloquentUser {
    protected $table = 'carter';
    protected $guarded = array();
    public function user(){
        return($this->belongsTo(CI::$APP->sentinel->getModel()));
    }
}
?>