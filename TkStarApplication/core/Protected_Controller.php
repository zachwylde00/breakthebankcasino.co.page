<?php
class Protected_Controller extends MY_Controller {
	function __construct(){
		parent::__construct();
        $this->secure->unauthenticated_redirect('users/login')->require_auth();
        $this->template->add_package('jquery');
	}
}
?>