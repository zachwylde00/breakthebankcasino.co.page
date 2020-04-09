<?php
require_once Soccerama_dir . 'SocceramaClient.php';
class Statistics extends SocceramaClient{
    public function byMatchId($matchId){
        return $this->call('statistics/match/' . $matchId);
    }
}
?>