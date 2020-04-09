<?php
define('Soccerama_dir', __DIR__ . DIRECTORY_SEPARATOR);
require_once Soccerama_dir . 'Requests/Bookmaker.php';
require_once Soccerama_dir . 'Requests/Commentary.php';
require_once Soccerama_dir . 'Requests/Competition.php';
require_once Soccerama_dir . 'Requests/Country.php';
require_once Soccerama_dir . 'Requests/Event.php';
require_once Soccerama_dir . 'Requests/livescore.php';
require_once Soccerama_dir . 'Requests/Match.php';
require_once Soccerama_dir . 'Requests/Odds.php';
require_once Soccerama_dir . 'Requests/Player.php';
require_once Soccerama_dir . 'Requests/Season.php';
require_once Soccerama_dir . 'Requests/Standings.php';
require_once Soccerama_dir . 'Requests/Statistics.php';
require_once Soccerama_dir . 'Requests/Team.php';
require_once Soccerama_dir . 'Requests/TopScorer.php';
require_once Soccerama_dir . 'Requests/Video.php';
class BaseSoccerama{
    protected $apiToken = 'uJyUFezw9Ltn5hhEcWYdO5umJfTfa9kwo688lAJ5vRvhtfxBwSXCOEhLzEUM';
    public function __construct(){
		
    }
    public function bookmakers($include = [ ]){
        return new Bookmaker($this->apiToken, $include);
    }
    public function commentaries($include = [ ]){
        return new Commentary($this->apiToken, $include);
    }
    public function competitions($include = [ ]){
        return new Competition($this->apiToken, $include);
    }
    public function countries($include = [ ]){
        return new Country($this->apiToken, $include);
    }
    public function events($include = [ ]){
        return new Event($this->apiToken, $include);
    }
    public function livescore($include = [ ]){
        return new livescore($this->apiToken, $include);
    }
    public function matches($include = [ ]){
        return new Match($this->apiToken, $include);
    }
    public function odds(){
        return new Odds($this->apiToken);
    }
    public function players($include = [ ]){
        return new Player($this->apiToken, $include);
    }
    public function seasons($include = [ ]){
        return new Season($this->apiToken, $include);
    }
    public function statistics($include = [ ]){
        return new Statistics($this->apiToken, $include);
    }
    public function standings($include = [ ]){
        return new Standings($this->apiToken, $include);
    }
    public function teams($include = [ ]){
        return new Team($this->apiToken, $include);
    }
    public function topscorers($include = [ ]){
        return new TopScorer($this->apiToken, $include);
    }
    public function videos($include = [ ]){
        return new Video($this->apiToken, $include);
    }
}
?>