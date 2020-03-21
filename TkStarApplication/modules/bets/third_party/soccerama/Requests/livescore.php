<?php
use Carbon\Carbon;
require_once Soccerama_dir . 'SocceramaClient.php';
class LiveScore extends SocceramaClient{
    public function byDate($date){
        if($date instanceof Carbon){
            $date = $date->format('Y-m-d');
        }
        return $this->callData('livescore/date/' . $date);
    }
    public function byMatchId($matchId){
        return $this->call('livescore/match/' . $matchId);
    }
    public function today(){
        return $this->callData('livescore');
    }
    public function now(){
        return $this->callData('livescore/now');
    }
}
?>