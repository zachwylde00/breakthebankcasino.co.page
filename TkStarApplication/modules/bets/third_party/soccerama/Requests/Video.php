<?php
require_once Soccerama_dir . 'SocceramaClient.php';
class Video extends SocceramaClient{
    public function byMatchId($matchId){
        return $this->callData('videos/match/' . $matchId);
    }
}
?>