<?php

class Content_short_text extends ContentField implements ContentFieldInterface {


    public function getFormFieldHTML() {
        return $this->smartyFetch();
    }

    public function getPreparedValueForDB() {
        return $this->newValue;
    }

    public function getPreparedValueForShow() {
        return $this->value;
    }

}
