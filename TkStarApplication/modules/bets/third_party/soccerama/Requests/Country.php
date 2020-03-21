<?php
require_once Soccerama_dir . 'SocceramaClient.php';
class Country extends SocceramaClient{
    public function all(){
        return $this->callData('countries');
    }
    public function byId($countryId){
        return $this->call('countries/' . $countryId);
    }
}
?>