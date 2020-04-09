<?php
use Carbon\Carbon;
require_once Soccerama_dir . 'SocceramaClient.php';
class Match extends SocceramaClient{
    public function byDate($fromDate, $toDate){
        if($fromDate instanceof Carbon){
            $fromDate = $fromDate->format('Y-m-d');
        }
        if($toDate instanceof Carbon){
            $toDate = $toDate->format('Y-m-d');
        }
        return $this->callData('matches/' . $fromDate . '/' . $toDate);
    }
    public function byId($matchId){
        return $this->call('matches/' . $matchId);
    }
}
?>