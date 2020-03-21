<?php
class Transactions extends Public_Controller {
    public function __construct(){
        parent::__construct();
        $this->load->eloquent('Transaction');
		$this->load->sentinel();
    }
    public function index(){
        $this->checkAuth(true);
        $transactions = Transaction::where('user_id' , $this->user->id)->orderBy('created_at' , 'DESC')->get();
        $this->smart->assign(array('title' => 'تراکنش های من', 'transactions' => $transactions, '_GET' => $_GET));
    }
}
?>