<?php
require_once Soccerama_dir . 'SocceramaClient.php';
class Event extends SocceramaClient{
    public function byMatchId($matchId){
        return $this->callData('events/match/' . $matchId);
    }
}
?>