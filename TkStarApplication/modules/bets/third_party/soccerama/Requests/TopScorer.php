<?php
require_once Soccerama_dir . 'SocceramaClient.php';
class TopScorer extends SocceramaClient{
    public function bySeasonId($seasonId){
        return $this->callData('topscorers/season/' . $seasonId);
    }
}
?>