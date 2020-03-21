<?php

class Content_type_field extends Illuminate\Database\Eloquent\Model {

    /**
     *
     * @var type 
     */
    protected $table = 'content_type_content_field_types';

    /**
     *
     * @var type 
     */
    protected $fillable = [
        'name',
        'slug',
        'field_type',
        'status'
    ];

    /**
     * 
     * @return type
     */
    public function contentType() {
        return $this->belongsTo('Content_type', 'content_type_id');
    }

    /**
     * 
     * @return type
     */
    public function fieldType() {
        return $this->belongsTo('Field_type', 'content_field_type_id');
    }

    /**
     * 
     * @param type $value
     * @return type
     */
    public function getFieldTypeSlugAttribute($value) {
        return $this->fieldType->slug;
    }

    /**
     * 
     * @param type $value
     * @return type
     */
    public function getFieldTypeNameAttribute($value) {
        return $this->fieldType->name;
    }

    /**
     * 
     * @param type $value
     * @return type
     */
    public function getFieldTypeTableAttribute($value) {
        return $this->fieldType->dest_table;
    }

}
