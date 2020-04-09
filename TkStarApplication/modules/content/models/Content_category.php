<?php

class Content_category extends Illuminate\Database\Eloquent\Model {

    /**
     *
     * @var type 
     */
    protected $table = "content_categories";
    protected $guarded = [];

    /**
     * 
     * @return type
     */
    public function contentType() {
        return $this->belongsTo('Content_type');
    }

    /**
     * 
     * @return type
     */
    public function entries() {
        return $this->belongsToMany('Entry','content_category_content_entries','content_category_id','content_entry_id');
    }


    public static function findBySlug($slug) {
        return self::whereSlug($slug)->first();
    }

}
