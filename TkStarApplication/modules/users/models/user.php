<?php
namespace App\Modules\Users\User; 
use Cartalyst\Sentinel\Users\EloquentUser as EloquentUser;

/**
 * Description of User
 *
 *  *
 */
class User extends EloquentUser {

    /**
     * {@inheritDoc}
     */
    protected $fillable = [
        'email',
        'password',
        'last_name',
        'first_name',
        'permissions',
        'username',
    ];

    public function __construct(array $attributes = array()) {
        parent::__construct($attributes);
    }

}
