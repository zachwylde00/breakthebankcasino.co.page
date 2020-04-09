<?php
require_once Soccerama_dir . 'SocceramaClient.php';
class Player extends SocceramaClient{
    public function byTeamAndSeasonId($teamId, $seasonId){
        return $this->callData('players/team/' . $teamId . '/season/' . $seasonId);
    }
    public function byTeamId($teamId){
        return $this->callData('players/team/' . $teamId);
    }
    public function byId($playerId){
        return $this->callData('players/' . $playerId);
    }
}
?>