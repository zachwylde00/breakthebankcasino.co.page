<?php
require_once Soccerama_dir . 'SocceramaClient.php';
class Team extends SocceramaClient{
    public function allBySeasonId($seasonId){
        return $this->callData('teams/season/' . $seasonId);
    }
    public function byId($teamId){
        return $this->call('teams/' . $teamId);
    }
    public function bySeasonId($teamId, $seasonId){
        return $this->call('teams/' . $teamId . '/season/' . $seasonId);
    }
}
?>