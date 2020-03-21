<?php
require_once Soccerama_dir . 'SocceramaClient.php';
class Commentary extends SocceramaClient{
    public function byMatchId($matchId){
        return $this->callData('commentaries/match/' . $matchId);
    }
}
?>