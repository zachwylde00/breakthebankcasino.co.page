<?php

interface ContentFieldInterface {

    /**
     * gets input field for form
     * @param type $inputName
     */
    public function getFormFieldHTML();

    /**
     * gets value appropriated for saving in database
     * @param type $formValue
     */
    public function getPreparedValueForDB();

    /**
     * get value appropriated for rendering entry
     * @param type $dbValue
     */
    public function getPreparedValueForShow();
}
