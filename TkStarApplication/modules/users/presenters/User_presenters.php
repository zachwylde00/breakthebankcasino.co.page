<?php

/**
 * 
 * User presenter for presenting user data in view layer
 */
class User_presenters extends Presenter{
    /**
     * Get full name of user
     * @return type
     */
    public function full_name(){
        return $this->first_name() . ' ' . $this->last_name();
    }
    
    
    
}