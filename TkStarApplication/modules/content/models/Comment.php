<?php

class Comment extends Illuminate\Database\Eloquent\Model {

    /**
     *
     * @var type 
     */
    protected $table = "comments";
    protected $guarded = [''];

    /**
     * 
     * @return type
     */
    public function entry() {
        return $this->belongsTo('Entry', 'entry_id', 'id');
    }

    /**
     * 
     * @return type
     */
    public function user() {
        return $this->belongsTo(CI::$APP->sentinel->getModel());
    }

    /**
     * مدیریت وضعیت کامنت ها
     * @param object $obj
     * @return type
     */
    public static function toggleStatus($obj) {
        if ($obj->status == 1)
            return $obj->update(['status' => 2]);
        elseif ($obj->status == 0)
            return $obj->update(['status' => 1]);
    }

}
