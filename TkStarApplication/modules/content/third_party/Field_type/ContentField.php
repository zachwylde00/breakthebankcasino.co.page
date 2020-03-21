<?php

abstract class ContentField implements ArrayAccess {

    /**
     *
     * @var 
     */
    public $fieldName;

    /**
     *
     * @var type 
     */
    public $fieldSlug;

    /**
     *
     * @var bool 
     */
    public $haveExtraOptions = false;

    /**
     *
     * @var array 
     */
    public $extraOptions = [];

    /**
     *
     * @var type 
     */
    public $tplName;

    /**
     *
     * @var bool 
     */
    protected $isNew = TRUE;

    /**
     *
     * @var bool 
     */
    protected $isEdited = FALSE;

    /**
     *
     * @var mixed
     */
    protected $value;

    /**
     *
     * @var mixed
     */
    protected $newValue;

    /**
     *
     * @var string
     */
    protected $name;

    /**
     *
     * @var string 
     */
    public $errorMessage;

    /**
     * instance of ci controller
     * @var CI_Controller
     */
    protected $CI;

    /**
     *
     * @var type 
     */
    private $smartyVariableGroup;

    /**
     * 
     * @param type $fieldType
     * @param type $field
     */
    public function __construct($fieldType, $field) {
        $this->fieldName = $field->name;
        $this->fieldSlug = $field->slug;
        $this->tplName = $fieldType->slug;
        $this->CI = get_instance();
        if ($this->haveExtraOptions && $field->extra_options) {
            $this->extraOptions = $this->parseExtraOptionsFromDB($field->extra_options);
        }
        $this->smartyVariableGroup = new Smarty_Data();
    }

    /**
     * 
     * @param type $value
     */
    public function setValue($value) {
        $this->isNew = FALSE;
        $this->value = $value;
    }

    /**
     * 
     * @param type $value
     */
    public function setNewValue($value) {
        $this->isEdited = TRUE;
        $this->newValue = $value;
    }

    /**
     * 
     * @return type
     */
    protected function smartyFetch($extra_options = false) {
        $this->smartyAssign('field', $this);
        $this->smartyAssign('new', (bool) $this->isNew);
        if ($this->haveExtraOptions && $extra_options) {
            return $this->CI->smart->fetchView('field_types/extra-' . $this->tplName, $this->smartyVariableGroup);
        }
        if ($this->haveExtraOptions) {
            $this->smartyAssign('options', $this->extraOptions);
        }
        return $this->CI->smart->fetchView('field_types/' . $this->tplName, $this->smartyVariableGroup);
    }

    /**
     * 
     * @param type $tpl_var
     * @param type $value
     */
    protected function smartyAssign($tpl_var, $value = null) {
        if (!$value && is_array($tpl_var)) {
            $this->smartyVariableGroup->assign($tpl_var);
        }
        $this->smartyVariableGroup->assign($tpl_var, $value);
    }

    /**
     * 
     * @return boolean
     */
    public function validate() {
        return true;
    }

    /**
     * 
     * @param type $offset
     * @return boolean
     */
    public function offsetExists($offset) {
        if (isset($this->$offset)) {
            return TRUE;
        }
        return FALSE;
    }

    /**
     * 
     * @param type $offset
     * @return type
     */
    public function offsetGet($offset) {
        if ($offset == 'value') {
            return $this->getPreparedValueForShow();
        }
        return $this->$offset;
    }

    /**
     * 
     * @param type $offset
     * @param type $value
     * @return boolean
     */
    public function offsetSet($offset, $value) {
        return true;
    }

    /**
     * 
     * @param type $offset
     * @return boolean
     */
    public function offsetUnset($offset) {
        return true;
    }

}
