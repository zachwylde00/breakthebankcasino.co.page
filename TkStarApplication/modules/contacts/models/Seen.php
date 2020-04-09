<?php

class Seen extends Illuminate\Database\Eloquent\Model{

    /**
     *
     * @var type 
     */
    protected $table = "seen_annouce";
    protected $guarded = [];
    public $timestamps = false;

    public function contacts()
    {
        return $this->belongsTo('Contact');
    }

    /**
     * 
     * @return type
     */
    public function user()
    {
        return $this->belongsTo(CI::$APP->sentinel->getModel(), 'user_id',
                        'username');
    }

}
