<?php

namespace Mirook\Users\Reminders;

use Cartalyst\Sentinel\Reminders\IlluminateReminderRepository as ReminderRepo;
use \Cartalyst\Sentinel\Users\EloquentUser as EloquentUser;

class ReminderRepository extends ReminderRepo {

    function __construct(EloquentUser $users, $model = null, $expires = null) {

        $this->users = $users;

        if (isset($model)) {
            $this->model = $model;
        }

        if (isset($expires)) {
            $this->expires = $expires;
        }
    }

    /**
     * Returns a random string for a reminder code.
     *
     * @return string
     */
    protected function generateReminderCode() {
        return rand(10000, 99999);
    }

}
