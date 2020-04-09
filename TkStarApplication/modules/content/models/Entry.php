<?php

class Entry extends Illuminate\Database\Eloquent\Model {

    /**
     *
     * @var type 
     */
    protected $table = "content_entries";

    /**
     * @inheritdoc
     */
    protected $guarded = [''];

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
    public function categories() {
        return $this->belongsToMany('Content_category',
                        'content_category_content_entries', 'content_entry_id');
    }

    /**
     * 
     * @return type
     */
    public function fields() {
        return $this->hasMany('Field', 'content_entry_id');
    }

    /**
     * 
     * @return type
     */
    public function user() {
        return $this->belongsTo(CI::$APP->sentinel->getModel());
    }

    /**
     * 
     * @return type
     */
    public function comments() {
        return $this->hasMany('Comment', 'entry_id','id');
    }

    /**
     * 
     * @param type $content_type_field_type_id
     * @return string
     */
    public function extra_field($content_type_field_type_id) {
        if (($value = $this->fields->where('content_type_field_type_id',
                        $content_type_field_type_id)->first())) {
            return $value->valuable->value;
        } else {
            return '';
        }
    }

    /**
     * 
     * @param type $query
     * @param type $excludes
     * @return type
     */
    public function scopeExclude($query, $excludes) {
        foreach ($excludes as $exclude) {
            // if range given, where clause on range,
            // else do one statement if
            if (strpos($exclude, '-')) {
                $rangeSides = explode('-', $exclude);
                $query->whereNotBetween('id',
                        array($rangeSides[0], $rangeSides[1]));
            } else {
                $query->where('id', '!=', $exclude);
            }
        }
        return $query;
    }

    /**
     * 
     * @param type $query
     * @param type $posts
     * @return type
     */
    public function scopeJustInclude($query, $posts) {
        return $query->where(function($query) use ($posts) {
                    foreach ($posts as $post) {
                        // if range given, where clause on range,
                        // else do one statement if
                        if (strpos($post, '-')) {
                            $rangeSides = explode('-', $post);
                            $query->orWhereBetween('id',
                                    array($rangeSides[0], $rangeSides[1]));
                        } else {
                            $query->orWhere('id', '=', $post);
                        }
                    }
                });
    }

    /**
     * 
     * @param type $query
     * @param type $category_ids
     * @return type
     */
    public function scopeWhereCategories($query, $category_ids) {
        return $query->whereHas('categories',
                        function($query) use ($category_ids) {
                    $query->whereIn('id', $category_ids);
                });
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
