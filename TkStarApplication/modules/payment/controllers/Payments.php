<?php
class Payments extends Public_Controller{
    public function __construct(){
        parent::__construct();
        $this->load->eloquent('settings/setting');
        $this->load->eloquent('Carttocart');
		$this->load->sentinel();
		$this->load->helper('cookie');
		if(!$this->sentinel->check()){
			if(isset($_COOKIE['auto_login']) AND !empty($_COOKIE['auto_login'])){
				$auto_login = $_COOKIE['auto_login'];
				$auto_login = explode('{{TkStar_Cookie}}', $auto_login);
				if(isset($auto_login[0]) AND isset($auto_login[1]) AND !empty($auto_login[0]) AND !empty($auto_login[1])){
					$credentials = array('email' => $auto_login[0], 'password' => $auto_login[1]);
					$auth_user = $this->sentinel->authenticate($credentials);
					if($auth_user){
						header('Location: ' . base_url($_SERVER['REQUEST_URI']));exit();
					}
				}
			}elseif(isset($_COOKIE['always_id_for_casino']) AND !empty($_COOKIE['always_id_for_casino'])){
				$username = $_COOKIE['username'];
				$password = $_COOKIE['password'];
				if(!empty($username) AND !empty($password)){
					$credentials = array('email' => $username, 'password' => $password);
					$auth_user = $this->sentinel->authenticate($credentials);
					if($auth_user){
						header('Location: ' . base_url($_SERVER['REQUEST_URI']));exit();
					}
				}
			}
		}
		if(!empty($this->message->get_message())){
			define('get_message', $this->message->get_message());
			$this->message->clear_message();
		}else{
			define('get_message', '');
			$this->message->clear_message();
		}
    }
	public function verify(){
		if(isset($_POST['PAYEE_ACCOUNT']) AND isset($_POST['PAYMENT_AMOUNT']) AND isset($_POST['PAYMENT_UNITS']) AND isset($_POST['PAYMENT_ID']) AND isset($_POST['PAYMENT_BATCH_NUM'])){
		    if($_POST['PAYMENT_BATCH_NUM'] == '' OR empty($_POST['PAYMENT_BATCH_NUM'])){
				header('Location: http://www.richbet.xyz/payment/transactions/?pay=false');exit();
		    }else{
		        $invoice_id = $_POST['PAYMENT_ID'];
                $this->CI = get_instance();
                $this->CI->load->database();
                $invoice = $this->CI->db->conn_id->query("SELECT * FROM `transactions` WHERE `id` = '" . $invoice_id . "'");
    			foreach($invoice as $i){
    				$i = (object)$i;
    				if($i->status == '0' OR $i->status == 0){
    					$this->CI->db->conn_id->query("UPDATE `users` SET `cash` = `cash` + " . $i->price . " WHERE `id` = '" . $i->user_id . "'");
    					$this->CI->db->conn_id->query("UPDATE `transactions` SET `status` = '1' WHERE `id` = '" . $invoice_id . "'");
    					header('Location: http://www.richbet.xyz/payment/transactions/?pay=true');exit();
    				}else{
    					header('Location: http://www.richbet.xyz/payment/transactions/?pay=false');exit();
    				}
    			}
		    }
		}else{
    		$invoice_id = $_GET['invoice_id'];
    		$status = $_GET['status'];
    		if($status === 'OK'){
                $this->CI = get_instance();
                $this->CI->load->database();
                $invoice = $this->CI->db->conn_id->query("SELECT * FROM `transactions` WHERE `id` = '" . $invoice_id . "'");
    			foreach($invoice as $i){
    				$i = (object)$i;
    				if($i->status == '0' OR $i->status == 0){
    					$this->CI->db->conn_id->query("UPDATE `users` SET `cash` = `cash` + " . $i->price . " WHERE `id` = '" . $i->user_id . "'");
    					$this->CI->db->conn_id->query("UPDATE `transactions` SET `status` = '1' WHERE `id` = '" . $invoice_id . "'");
    					header('Location: http://www.richbet.xyz/payment/transactions/?pay=true');exit();
    				}else{
    					header('Location: http://www.richbet.xyz/payment/transactions/?pay=false');exit();
    				}
    			}
    		}else{
    			header('Location: http://www.richbet.xyz/payment/transactions/?pay=false');exit();
    		}
		}
	}
    public function credit () {
        $this->checkAuth(true);
        $this->load->library('zahedipal');
        $amount = $this->input->post('amount');       
        $type = $this->input->post('type');
        if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
            $this->CI = get_instance();
            $this->CI->load->database();
            if($type == 'online'){
                $this->CI->db->conn_id->query("INSERT INTO `transactions` (`id`, `price`, `invoice_type`, `description`, `user_id`, `transaction_states`, `created_at`, `updated_at`, `trans_id`, `cash`, `status`, `savano`) VALUES (NULL, '" . $amount . "', '1', 'افزایش موجودی حساب از طریق درگاه آنلاین', '" . $this->user->id . "', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '', '" . $this->user->cash . "', '0', '')");
                header('Location: http://www.shopdonir.info/pay/send.php?amount=' . $amount . '&invoice_id=' . $this->CI->db->insert_id());exit();
            }else if($type == 'perfect_money'){
                $amount_dollar = $amount / 14000;
                $amount_dollar = round($amount_dollar, 2);
                $this->CI->db->conn_id->query("INSERT INTO `transactions` (`id`, `price`, `invoice_type`, `description`, `user_id`, `transaction_states`, `created_at`, `updated_at`, `trans_id`, `cash`, `status`, `savano`) VALUES (NULL, '" . $amount . "', '1', 'افزایش موجودی حساب از طریق درگاه پرفکت مانی', '" . $this->user->id . "', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '', '" . $this->user->cash . "', '0', '')");
                echo('<form name="my_form" action="https://perfectmoney.is/api/step1.asp" method="POST"><input type="hidden" name="PAYEE_ACCOUNT" value="U16039696"><input type="hidden" name="PAYEE_NAME" value="RichBet Betting Site"><input type="hidden" name="PAYMENT_AMOUNT" value="' . $amount_dollar . '"><input type="hidden" name="PAYMENT_UNITS" value="USD"><input type="hidden" name="STATUS_URL" value="' . site_url('payment/verify') . '"><input type="hidden" name="PAYMENT_URL" value="' . site_url('payment/verify') . '"><input type="hidden" name="NOPAYMENT_URL" value="' . site_url('payment/verify') . '"><input type="hidden" name="PAYMENT_ID" value="' . $this->CI->db->conn_id->insert_id . '"></form><script type="text/javascript">document.forms["my_form"].submit();</script>');die;
            }else{
               $name = $this->user->first_name;
               $family = $this->user->last_name;
               $codeddd = $this->user->id;
               $card4 = $this->input->post('card4');
               $time = $this->input->post('time');
               $paygiricod = $this->input->post('paygiricod');
               $this->CI->db->conn_id->query("INSERT INTO `carter` (`id`, `price`,`user_id`,`card4`,`time`,`paygiricod`,`created_at`, `updated_at`,`description`,`savano`) VALUES (NULL, '" . $amount . "','".$this->user->id."','".$card4."','".$time."','".$paygiricod."','CURRENT_TIMESTAMP','CURRENT_TIMESTAMP','پرداخت از طریق کارت به کارت','".$name.",".$family."')");
               $site_urldddss = 'http://' . $_SERVER['SERVER_NAME'];
			   $telegram_text = "Name: " . $name . "\nFamily: " . $family . "\nCode User: " . $codeddd . "\nPrice: " . $amount . "\n4 Shomareh Kart (4 Ragham Akhar): " . $card4 . "\nTime: " . $time . "\nsite: " . $site_urldddss . "\nCode Paygiri: " . $paygiricod;
			   file_get_contents('https://api.telegram.org/bot855545176:AAFyvOUEuqneevDVi5WP0Wqc1iA8o1Aiuvc/sendMessage?text=' . urlencode($telegram_text) . '&chat_id=791712927');
               redirect('payment/transactions/?pay=cart');exit();
            }
        } else {
            $this->smart->view('credit');
        }
    }
    public function transactions(){
          $this->checkAuth(true);
          $this->load->eloquent('transaction');
		$this->CI = get_instance();
		$this->CI->load->database();
		$all_transactions = array();
		$query_baccarat_transactions = $this->CI->db->conn_id->query("SELECT * FROM `baccarats_table` WHERE `user` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
		$query_blackjack_transactions = $this->CI->db->conn_id->query("SELECT * FROM `blackjacks_table` WHERE `user` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
		$query_plinko_transactions = $this->CI->db->conn_id->query("SELECT * FROM `plinkoes_table` WHERE `user` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
		$query_roulette_transactions = $this->CI->db->conn_id->query("SELECT * FROM `roulettes_table` WHERE `user` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
		$query_craps_transactions = $this->CI->db->conn_id->query("SELECT * FROM `craps_table` WHERE `user` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
		$high_low_transactions = $this->CI->db->conn_id->query("SELECT * FROM `high_low_table` WHERE `user` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
		$fortune_wheel_transactions = $this->CI->db->conn_id->query("SELECT * FROM `fortune_wheel_table` WHERE `user` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
		$query_crash_transactions = $this->CI->db->conn_id->query("SELECT * FROM `crash_table` WHERE `users` != '{}' AND `users` != '[]' AND `play` = '0'")->fetch_all(MYSQLI_ASSOC);
          $transactions = Transaction::where('user_id', $this->user->id)->orderBy('id', 'desc')->get();
		foreach($query_baccarat_transactions as $transaction){
			$transaction = (object)$transaction;
			if($transaction->price == 0 OR $transaction->price == '0'){
				continue;
			}else{
				$all_transactions[$transaction->time] = array('trans_id' => 1000000 . $transaction->time, 'created_at' => $transaction->time, 'description' => 'بازی باکارات - کازینو', 'price' => $transaction->price, 'status' => '1');
			}
		}
		foreach($query_blackjack_transactions as $transaction){
			$transaction = (object)$transaction;
			if($transaction->price == 0 OR $transaction->price == '0'){
				continue;
			}else{
				$all_transactions[$transaction->time] = array('trans_id' => 1000000 . $transaction->time, 'created_at' => $transaction->time, 'description' => 'بازی بلک جک (21) - کازینو', 'price' => $transaction->price, 'status' => '1');
			}
		}
		foreach($query_plinko_transactions as $transaction){
			$transaction = (object)$transaction;
			if($transaction->price == 0 OR $transaction->price == '0'){
				continue;
			}else{
				$all_transactions[$transaction->time] = array('trans_id' => 1000000 . $transaction->time, 'created_at' => $transaction->time, 'description' => 'بازی توپ و سبد - کازینو', 'price' => $transaction->price, 'status' => '1');
			}
		}
		foreach($query_roulette_transactions as $transaction){
			$transaction = (object)$transaction;
			if($transaction->price == 0 OR $transaction->price == '0'){
				continue;
			}else{
				$all_transactions[$transaction->time] = array('trans_id' => 1000000 . $transaction->time, 'created_at' => $transaction->time, 'description' => 'بازی رویال رولت - کازینو', 'price' => $transaction->price, 'status' => '1');
			}
		}
		foreach($query_craps_transactions as $transaction){
			$transaction = (object)$transaction;
			if($transaction->price == 0 OR $transaction->price == '0'){
				continue;
			}else{
				$all_transactions[$transaction->time] = array('trans_id' => 1000000 . $transaction->time, 'created_at' => $transaction->time, 'description' => 'بازی زمین و تاس (کرپس) - کازینو', 'price' => $transaction->price, 'status' => '1');
			}
		}
		foreach($high_low_transactions as $transaction){
			$transaction = (object)$transaction;
			if($transaction->price == 0 OR $transaction->price == '0'){
				continue;
			}else{
				$all_transactions[$transaction->time] = array('trans_id' => 1000000 . $transaction->time, 'created_at' => $transaction->time, 'description' => 'بازی کمتر بیشتر - کازینو', 'price' => $transaction->price, 'status' => '1');
			}
		}
		foreach($fortune_wheel_transactions as $transaction){
			$transaction = (object)$transaction;
			if($transaction->price == 0 OR $transaction->price == '0'){
				continue;
			}else{
				$all_transactions[$transaction->time] = array('trans_id' => 1000000 . $transaction->time, 'created_at' => $transaction->time, 'description' => 'بازی گردونه شانس - کازینو', 'price' => $transaction->price, 'status' => '1');
			}
		}
		foreach($query_crash_transactions as $crash){
			$crash = (object)$crash;
			$users = $crash->users;
			$users = json_decode($users, true);
			if(count($users) <= 0){
				continue;
			}else{
				$users = (object)$users;
				foreach($users as $user_id => $user_odd){
					if($user_id == $this->user->id){
						$user_odd = (object)$user_odd;
						$price = ($user_odd->win == '1' OR $user_odd->win == 1) ? $user_odd->price : $user_odd->price - ($user_odd->price * 2);
						$all_transactions[$crash->finish_time] = array('trans_id' => 1000000 . $crash->finish_time, 'created_at' => $crash->finish_time, 'description' => 'بازی انفجار - کازینو', 'price' => $price, 'status' => '1');
					}else{
						continue;
					}
				}
			}
		}
		foreach($transactions as $transaction){
			$transaction = (object)$transaction;
			$all_transactions[strtotime($transaction->created_at)] = array('trans_id' => $transaction->trans_id, 'created_at' => strtotime($transaction->created_at), 'description' => $transaction->description, 'price' => $transaction->price, 'status' => $transaction->status);
		}
		krsort($all_transactions);
          $cart_transaction = array();
          $cart_transactions = $this->CI->db->conn_id->query("SELECT * FROM `carter` WHERE `user_id` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
          foreach($cart_transactions as $transaction){
               $transaction = (object)$transaction;
               if($transaction->price == 0 OR $transaction->price == '0'){
                    continue;
               }else{
                    $cart_transaction[strtotime($transaction->created_at)] = array('paygiricod' => $transaction->paygiricod,'card4'=>$transaction->card4,'description'=>$transaction->description,'created_at' => strtotime($transaction->created_at), 'time' => $transaction->time, 'price' => $transaction->price, 'status' => $transaction->status);
               }
          }
        $this->smart->assign(array('transactions' => $all_transactions, 'cart_transaction' => $cart_transaction, 'title' => 'سابقه تراکنش ها', 'cash' => $this->__getUserCash(), 'transaction_states' => 1, '_GET' => $_GET));
        $this->smart->view('transactions');
    }
}
?>