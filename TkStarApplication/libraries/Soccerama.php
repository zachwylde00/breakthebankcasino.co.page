<?php
require_once APPPATH . "modules/bets/third_party/soccerama/BaseSoccerama.php";
class soccerama extends BaseSoccerama {

    public function __construct () {
        parent::__construct();
        error_reporting(E_ALL);
    }

}
?>