<?php
class Carter extends Public_Controller {
    public function __construct(){
        parent::__construct();
        $this->load->eloquent('Carttocart');
		$this->load->sentinel();
    }
    public function index(){
        $this->checkAuth(true);
        $carttocart = carter::where('user_id' , $this->user->id)->orderBy('created_at' , 'DESC')->get();
        $this->smart->assign(array('title' => 'کارت به کارت های من', 'carttocart' => $carttocart, '_GET' => $_GET));
    }
}
?>