<?php

class Menu extends \Illuminate\Database\Eloquent\Model {

    /**
     *
     * @var string 
     */
    protected $table = "menus";
    protected $fillable = ['title', 'target', 'icon', 'is_admin', 'parent_id', 'group_id','weight', 'created_at', 'updated_at'];
    public $timestamps = false;
    /**
     * Get the phone record associated with the user.
     */
    public function group() {
        return $this->belongsTo('Menu_group');
    }

    /**
     * Get the phone record associated with the user.
     */
    public function childs() {
        return $this->hasMany('Menu', 'parent_id');
    }

    /**
     * Get the phone record associated with the user.
     */
    public function parent_node() {
        return $this->belongsTo('Menu', 'parent_id');
    }

    public static function getMenu($group = 'admin_side') {
        $tree = array();
        try {
            $group_model = Menu_group::where('code', $group)->first();
            if (!$group_model)
                throw new Exception;
            $group_id = $group_model->getKey();
            $parents = $group_model->menus->where('parent_id', null)->sortBy('weight');
            foreach ($parents as $parent) {
                $tree[$parent->id] = array(
                    'title' => $parent->title,
                    'icon' => $parent->icon,
                    'children' => array()
                );
                Menu::getChildsRec($tree[$parent->id], $parent);
            }
            return collect($tree);
        } catch (Exception $e) {
            return $tree;
        }
    }

    public static function getChildsRec(&$tree, $node) {
        $parents = $node->childs->all();
        if (empty($parents)) {
            $tree = array(
                'title' => $node->title,
                'icon' => $node->icon,
                'target' => $node->target
            );
        } else {
            foreach ($parents as $parent) {
                $tree['children'][$parent->id] = array('title' => $parent->title, 'children' => array());
                Menu::getChildsRec($tree['children'][$parent->id], $parent);
            }
        }
    }

}
