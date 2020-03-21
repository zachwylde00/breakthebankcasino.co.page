<?php

use Illuminate\Database\Eloquent\Model as EloquentModel;
class Page extends EloquentModel {

    /**
     *
     * @var type 
     */
    protected $table = 'content_pages';
    
    protected $guarded = [];

    /**
     * 
     * @param type $slug
     * @return type
     */
    public static function findBySlug($slug) {
        return self::where('slug', $slug)->where('status',1)->first();
    }

    public static function getPossibleEnumValues($name = 'compiler') {
        $instance = new static; // create an instance of the model to be able to get the table name
        $type = Page::selectRaw("FIELD($name, \"smarty\")");
        dd($type);
        preg_match('/^enum\((.*)\)$/', $type, $matches);
        $enum = array();
        foreach (explode(',', $matches[1]) as $value) {
            $v = trim($value, "'");
            $enum[] = $v;
        }
        return $enum;
    }

}
