<?php

/**
 * Contact Model
 * 
 * @author		Saeed Tavakoli
 * @package		
 * @subpackage	
 * @copyright	
 *
 */
class Ticket extends \Illuminate\Database\Eloquent\Model {

    /**
     *
     * @var string 
     */
    protected $table = "tickets";

    /**
     *
     * @var array 
     */
    protected $guarded = [ ];

    /**
     * 
     * @return type
     */
    public function user () {
        return $this->belongsTo(CI::$APP->sentinel->getModel());
    }

    public function replies () {
        return $this->hasMany('Ticket_reply' , 'ticket_id' , 'id');
    }

}
