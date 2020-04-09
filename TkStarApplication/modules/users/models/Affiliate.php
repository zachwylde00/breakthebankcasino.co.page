<?php

use Cartalyst\Sentinel\Users\EloquentUser as EloquentUser;

/**
 * Description of User
 *
 *  *
 */
class Affiliate extends EloquentUser {

    /**
     * {@inheritDoc}
     */
    protected $guarded = [ ];
    protected $table = "affiliate";

    /**
     * 
     * @return type
     */
    public function user () {
        return $this->belongsTo(CI::$APP->sentinel->getModel());
    }

}
