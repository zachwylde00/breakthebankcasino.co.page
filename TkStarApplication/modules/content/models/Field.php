<?php

class Field extends Illuminate\Database\Eloquent\Model {

    /**
     *
     * @var type 
     */
    protected $table = "content_entry_fields";

    /**
     * 
     * @return type
     */
    public function entry() {
        return $this->belongsTo('Entry', 'content_entry_id');
    }

    /**
     * 
     * @return type
     */
    public function fieldType() {
        return $this->belongsTo('Content_type_field', 'content_type_field_type_id')->getResults()->belongsTo('Field_type');
    }

    /**
     * 
     * @return type
     */
    public function contentType() {
        return $this->belongsTo('Content_type_field', 'content_type_field_type_id')->getResults()->belongsTo('Content_type');
    }

    /**
     * 
     * @return type
     */
    public function contentTypeField() {
        return $this->belongsTo('Content_type_field', 'content_type_field_type_id');
    }

    /**
     * 
     * @return type
     */
    public function valuable() {
        return $this->morphTo();
    }

}
