<?php
require_once Soccerama_dir . 'SocceramaClient.php';
class Competition extends SocceramaClient{
    public function all()
   {
        return $this->callData('competitions');
    }
    public function byId($competitionId)
   {
        return $this->call('competitions/' . $competitionId);
    }
}
?>