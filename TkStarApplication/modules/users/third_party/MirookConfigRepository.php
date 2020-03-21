<?php

use Cartalyst\Sentinel\Native\ConfigRepository as ConfigRepository;

class MirookConfigRepository extends ConfigRepository {

    public function __construct($file = null) {
        $this->file = $file ? : __DIR__ . '/../config/config.php';
        
        $this->load();
    }

}
