<?php

class Content_enum extends ContentField implements ContentFieldInterface, ExtraOptionableInterface {

    public $haveExtraOptions = true;

    public function getFormFieldHTML() {
        return $this->smartyFetch();
    }

    public function getPreparedValueForDB() {
        return $this->newValue;
    }

    public function getPreparedValueForShow() {
        return $this->value;
    }

    public function extraOptionsFormHTML() {
        return $this->smartyFetch(true);
    }

    public function getPreparedExtraOptionsForDB() {
        $required = $this->CI->input->post('required-enum') ? TRUE : FALSE;
        return json_encode([
            'required' => $required,
            'options' => $this->CI->input->post('options')
        ]);
    }

    public function parseExtraOptionsFromDB($value) {
        return (array) json_decode($value);
    }

}
