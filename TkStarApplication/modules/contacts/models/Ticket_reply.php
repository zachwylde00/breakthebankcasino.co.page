<?php

/**
 * Contact Model
 * 
 * @package		
 * @subpackage	
 * @copyright	
 *
 */
class Ticket_reply extends \Illuminate\Database\Eloquent\Model {

    /**
     *
     * @var string 
     */
    protected $table = "ticket_replies";

    /**
     *
     * @var array 
     */
    protected $guarded = [ ];

    /**
     * 
     * @return type
     */
    public function ticket () {
        return $this->belongsTo('Ticket' , 'ticket_id' , 'id');
    }

    /**
     * 
     * @return type
     */
    public function user () {
        return $this->belongsTo(CI::$APP->sentinel->getModel());
    }

}
