<?php

use Cartalyst\Sentinel\Activations\IlluminateActivationRepository as ActivationRepo;
use \Cartalyst\Sentinel\Users\EloquentUser as EloquentUser;

class ActivationRepository extends ActivationRepo {

    function __construct ( $model = null , $expires = null ) {
        parent::__construct($model , $expires);
    }

    /**
     * Return a random string for an activation code.
     *
     * @return string
     */
    protected function generateActivationCode () {
        return rand(1000 , 9999) . rand(52 , 95);
    }

}
