<?php

class Field_handler {

    public function __construct() {
        list($path, $file) = Modules::find('ContentFieldInterface', 'content', 'third_party/Field_type/');
        if ($path) {
            require_once $path . $file . EXT;
        } else {
            return false;
        }
        list($path, $file) = Modules::find('ExtraOptionableInterface', 'content', 'third_party/Field_type/');
        if ($path) {
            require_once $path . $file . EXT;
        } else {
            return false;
        }
        list($path, $file) = Modules::find('ContentField', 'content', 'third_party/Field_type/');
        if ($path) {
            require_once $path . $file . EXT;
        } else {
            return false;
        }
    }

    /**
     * 
     * @param type $fieldType
     * @param type $field
     * @return ContentField|ContentFieldInterface|boolean
     */
    public function getFieldObj($fieldType, $field) {
        $objName = 'Content_' . lcfirst($fieldType->slug);
        list($path, $file) = Modules::find($objName, 'content', 'third_party/Field_type/');
        if ($path) {
            require_once $path . $file . EXT;
            return new $objName($fieldType, $field);
        } else {
            return false;
        }
    }

}
