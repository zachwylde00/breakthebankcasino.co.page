<?php

/**
 * Description of ExtraOptionableInterface
 *
 * @author NITC
 */
interface ExtraOptionableInterface {

    /**
     * 
     */
    public function extraOptionsFormHTML();

    /**
     * 
     */
    public function getPreparedExtraOptionsForDB();

    /**
     * 
     */
    public function parseExtraOptionsFromDB($value);
}
