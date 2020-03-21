<?php
require_once Soccerama_dir . 'SocceramaClient.php';
class Standings extends SocceramaClient{
    public function bySeasonId($seasonId){
        return $this->callData('standings/season/' . $seasonId);
    }
}
?>