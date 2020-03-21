<?php

class Content_long_text extends ContentField implements ContentFieldInterface, ExtraOptionableInterface {

    /**
     *
     * @var bool 
     */
    public $haveExtraOptions = true;

    public function getFormFieldHTML() {
        return $this->smartyFetch();
    }

    public function getPreparedValueForDB() {
        return $this->newValue ? $this->newValue : "";
    }

    public function getPreparedValueForShow() {
        return $this->value;
    }

    public function extraOptionsFormHTML() {
        return $this->smartyFetch(true);
    }

    public function getPreparedExtraOptionsForDB() {
        $required = $this->CI->input->post('required-enum') ? TRUE : FALSE;
        switch ($this->CI->input->post('editor')):
            case '0':
                $editor = 'textarea';
                break;
            case '1':
                $editor = 'ckeditor';
                break;
        endswitch;
        return json_encode([
            'required' => $required,
            'editor' => $editor
        ]);
    }

    public function parseExtraOptionsFromDB($value) {
        return (array) json_decode($value);
    }

    public function validate() {
        if ($this->extraOptions['required']) {
            if ($this->newValue && $this->newValue != '')
                return TRUE;
            $this->errorMessage = 'فیلد ضروری است.';
            return FALSE;
        } else {
            return TRUE;
        }
    }

}
