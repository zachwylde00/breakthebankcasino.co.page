<?php

class Field_type extends Illuminate\Database\Eloquent\Model {

    /**
     *
     * @var type 
     */
    protected $table = "content_field_types";

    /**
     * 
     * @return type
     */
    public function fields() {
        return $this->hasMany('Field');
    }

}
