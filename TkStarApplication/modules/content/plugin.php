<?php

class Content_plugin extends Plugin {

    /**
     * 
     */
    public function __construct() {
        $this->load->eloquent('content/Field');
        $this->load->eloquent('content/Content_type');
        $this->load->eloquent('content/Content_category');
        $this->load->eloquent('content/Content_type_field');
        $this->load->eloquent('content/Field_short');
        $this->load->eloquent('content/Field_long');
        $this->load->eloquent('content/Field_int');
        $this->load->eloquent('content/entry');
    }

    /**
     * 
     * @return type
     */
    public function getContent() {
        //get params
        $params = $this->attributes();

        //get content_type entries
        if (ctype_digit($params['content_type']))
            $content_type = Content_type::find($params['content_type']);
        else
            $content_type = Content_type::findBySlug($params['content_type']);
        if ($content_type)
            $entries = $content_type->entries();
        else
            $entries = null;

        //filter by category
        $category_ids = explode(',', $params['categories']);
        if ($params['categories'] && $entries && count($category_ids) > 0) {
            $entries->whereCategories($category_ids);
        }

        // implement start condition
        if ($params['start'] && $params['start'] > 0) {
            $entries->skip($params['start']);
        }

        // implement limit condition
        if ($params['limit'] && $params['limit'] > 0) {
            if ($entries)
                $entries->take($params['limit']);
        }

        //implement post
        $posts = explode(',', $params['post']);
        if ($params['post'] != "" && count($posts) > 0 && $entries) {
            $entries->justInclude($posts);
        }

        //implement exclude
        $excludes = explode(',', $params['exclude']);
        if ($params['exclude'] != "" && count($excludes) > 0 && $entries) {
            $entries->exclude($excludes);
        }

        //implement sort and order
        if ($entries)
            $entries = $entries->orderBy($params['sort'], $params['order']);

        return $entries != null ? $entries->get() : null;
    }

}
