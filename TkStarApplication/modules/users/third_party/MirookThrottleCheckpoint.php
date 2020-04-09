<?php
use Cartalyst\Sentinel\Checkpoints\ThrottleCheckpoint;
use Cartalyst\Sentinel\Users\UserInterface;

class MirookThrottleCheckpoint extends ThrottleCheckpoint {

  

    /**
     * Checks the throttling status of the given user.
     *
     * @param  string  $action
     * @param  \Cartalyst\Sentinel\Users\UserInterface|null  $user
     * @return bool
     */
    protected function checkThrottling($action, UserInterface $user = null)
    {
    	 try {
            parent::checkThrottling($action,$user);
        } catch(Exception $e) {
            
        	$CI =& get_instance();
        	$CI->message->set_message(' &#1578;&#1593;&#1583;&#1575;&#1583; &#1578;&#1604;&#1575;&#1588; &#1607;&#1575;&#1740; &#1588;&#1605;&#1575; &#1583;&#1585; &#1608;&#1585;&#1608;&#1583; &#1606;&#1575;&#1605;&#1608;&#1601;&#1602; &#1576;&#1607; &#1581;&#1583;&#1575;&#1705;&#1579;&#1585; &#1585;&#1587;&#1740;&#1583;&#1607; &#1575;&#1587;&#1578;. &#1578;&#1575; &#1583;&#1602;&#1575;&#1740;&#1602;&#1740; &#1583;&#1740;&#1711;&#1585; &#1605;&#1580;&#1583;&#1583;&#1575; &#1578;&#1604;&#1575;&#1588; &#1606;&#1605;&#1575;&#1740;&#1740;&#1583;', 'fail',' &#1608;&#1585;&#1608;&#1583;', '/users/login')->redirect();

        }
    }
    
}
