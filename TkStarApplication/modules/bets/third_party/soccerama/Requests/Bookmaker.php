<?php
require_once Soccerama_dir . 'SocceramaClient.php';
class Bookmaker extends SocceramaClient{
    public function all ($id){
        return $this->callData('bookmakers/'.$id);
    }
}
?>