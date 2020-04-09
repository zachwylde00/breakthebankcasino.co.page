<?php

class Content_type extends Illuminate\Database\Eloquent\Model {

    /**
     *
     * @var type 
     */
    protected $table = "content_types";
    protected $guarded = [''];

    /**
     * 
     * @return type
     */
    public function entries() {
        return $this->hasMany('Entry', 'content_type_id');
    }

    /**
     * 
     * @return type
     */
    public function fields() {
        return $this->hasMany('Content_type_field')->with('fieldType');
    }

    /**
     * 
     * @return type
     */
    public function categories() {
        return $this->hasMany('Content_category');
    }

    /**
     * 
     * @param type $slug
     * @return type
     */
    public static function findBySlug($slug) {
        return self::whereSlug($slug)->first();
    }

}
