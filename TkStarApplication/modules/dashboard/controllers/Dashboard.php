<?php
class Dashboard extends Public_Controller{
    function __construct(){
        parent::__construct();
    }
    public function index(){
        $this->checkAuth(true);
        $this->load->eloquent('bets/bet');
        $this->load->eloquent('bets/bet_form');
        $this->load->eloquent('payment/transaction');
		$this->load->helper('cookie');
		$this->load->sentinel();
		$this->CI = get_instance();
		$this->CI->load->database();
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
        $totalStake = 0;
        $totalGift = 0;
        $giftCount = 0;
        $withdrawSum = 0;
        $withdrawInSum = 0;
        $creditSum = 0;
        $Obj = Bet::where('user_id' , $this->user->id)->get();
        foreach($Obj as $row ):
            $totalStake += $row->stake;
            if($row->status == 1 ):
                $totalGift += $row->stake * $row->effective_odd;
                $giftCount++;
            endif;
        endforeach;
		$query_baccarat_transactions = $this->CI->db->conn_id->query("SELECT * FROM `baccarats_table` WHERE `user` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
		$query_blackjack_transactions = $this->CI->db->conn_id->query("SELECT * FROM `blackjacks_table` WHERE `user` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
		$query_plinko_transactions = $this->CI->db->conn_id->query("SELECT * FROM `plinkoes_table` WHERE `user` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
		$query_roulette_transactions = $this->CI->db->conn_id->query("SELECT * FROM `roulettes_table` WHERE `user` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
		$query_craps_transactions = $this->CI->db->conn_id->query("SELECT * FROM `craps_table` WHERE `user` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
		$query_high_low_transactions = $this->CI->db->conn_id->query("SELECT * FROM `high_low_table` WHERE `user` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
		$query_fortune_wheel_transactions = $this->CI->db->conn_id->query("SELECT * FROM `fortune_wheel_table` WHERE `user` = '" . $this->user->id . "'")->fetch_all(MYSQLI_ASSOC);
		$query_crash_transactions = $this->CI->db->conn_id->query("SELECT * FROM `crash_table` WHERE `users` != '{}' AND `users` != '[]' AND `play` = '0'")->fetch_all(MYSQLI_ASSOC);
		$all_casino_prices = 0;
		$all_casino_prices_count = 0;
		$all_win_casino_prices = 0;
		$all_win_casino_prices_count = 0;
		foreach($query_baccarat_transactions as $transaction){
			$transaction = (object)$transaction;
			$all_casino_prices = $all_casino_prices + str_replace('-', '', $transaction->price);
			$all_casino_prices_count++;
			$all_win_casino_prices = ($transaction->price >= 1) ? $all_win_casino_prices + $transaction->price : $all_win_casino_prices;
			($transaction->price >= 1) ? $all_win_casino_prices_count++ : '';
		}
		foreach($query_blackjack_transactions as $transaction){
			$transaction = (object)$transaction;
			$all_casino_prices = $all_casino_prices + str_replace('-', '', $transaction->price);
			$all_casino_prices_count++;
			$all_win_casino_prices = ($transaction->price >= 1) ? $all_win_casino_prices + $transaction->price : $all_win_casino_prices;
			($transaction->price >= 1) ? $all_win_casino_prices_count++ : '';
		}
		foreach($query_plinko_transactions as $transaction){
			$transaction = (object)$transaction;
			$all_casino_prices = $all_casino_prices + str_replace('-', '', $transaction->price);
			$all_casino_prices_count++;
			$all_win_casino_prices = ($transaction->price >= 1) ? $all_win_casino_prices + $transaction->price : $all_win_casino_prices;
			($transaction->price >= 1) ? $all_win_casino_prices_count++ : '';
		}
		foreach($query_roulette_transactions as $transaction){
			$transaction = (object)$transaction;
			$all_casino_prices = $all_casino_prices + str_replace('-', '', $transaction->price);
			$all_casino_prices_count++;
			$all_win_casino_prices = ($transaction->price >= 1) ? $all_win_casino_prices + $transaction->price : $all_win_casino_prices;
			($transaction->price >= 1) ? $all_win_casino_prices_count++ : '';
		}
		foreach($query_craps_transactions as $transaction){
			$transaction = (object)$transaction;
			$all_casino_prices = $all_casino_prices + str_replace('-', '', $transaction->price);
			$all_casino_prices_count++;
			$all_win_casino_prices = ($transaction->price >= 1) ? $all_win_casino_prices + $transaction->price : $all_win_casino_prices;
			($transaction->price >= 1) ? $all_win_casino_prices_count++ : '';
		}
		foreach($query_high_low_transactions as $transaction){
			$transaction = (object)$transaction;
			$all_casino_prices = $all_casino_prices + str_replace('-', '', $transaction->price);
			$all_casino_prices_count++;
			$all_win_casino_prices = ($transaction->price >= 1) ? $all_win_casino_prices + $transaction->price : $all_win_casino_prices;
			($transaction->price >= 1) ? $all_win_casino_prices_count++ : '';
		}
		foreach($query_fortune_wheel_transactions as $transaction){
			$transaction = (object)$transaction;
			$all_casino_prices = $all_casino_prices + str_replace('-', '', $transaction->price);
			$all_casino_prices_count++;
			$all_win_casino_prices = ($transaction->price >= 1) ? $all_win_casino_prices + $transaction->price : $all_win_casino_prices;
			($transaction->price >= 1) ? $all_win_casino_prices_count++ : '';
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
						$all_casino_prices = $all_casino_prices + str_replace('-', '', $user_odd->price);
						$all_casino_prices_count++;
						$all_win_casino_prices = ($price >= 1) ? $all_win_casino_prices + $price : $all_win_casino_prices;
						($price >= 1) ? $all_win_casino_prices_count++ : '';
					}else{
						continue;
					}
				}
			}
		}
        $withdraw = Transaction::where(array('user_id' => $this->user->id, 'invoice_type' => 4, 'status' => 1))->orWhere(array('user_id' => $this->user->id, 'invoice_type' => 1, 'status' =>1))->get();
        $withdraw_in_progress = Transaction::where(array('user_id' => $this->user->id, 'invoice_type' => 4, 'status' => 0))->get();
        $referral = $this->user->ref_id;
        if(!empty($referral) AND is_numeric($referral) AND $referral >= 1){
            $query_get_referral = $this->CI->db->conn_id->query("SELECT * FROM `users` WHERE `id` = '" . $referral . "'");
            if($query_get_referral->num_rows >= 1){
                $query_get_referral = $query_get_referral->fetch_all(MYSQLI_ASSOC);
                $query_get_referral = $query_get_referral[0];
                $query_get_referral = (object)$query_get_referral;
                $referral = $query_get_referral->first_name . ' ' . $query_get_referral->last_name . ' (' . $query_get_referral->email . ')';
            }else{
                $referral = 'شما معرفی ندارید !';
            }
        }else{
            $referral = 'شما معرفی ندارید !';
        }
        foreach($withdraw as $log){
			($log->invoice_type == 4) ? $withdrawSum = $withdrawSum + $log->price : '';
			($log->invoice_type == 1) ? $creditSum = $creditSum + $log->price : '';
		}
        foreach($withdraw_in_progress as $log){
			($log->invoice_type == 4) ? $withdrawInSum = $withdrawInSum + $log->price : '';
		}
        $this->smart->assign(array('title' => 'حساب کاربری', 'referral' => $referral, 'totalStake' => $totalStake, 'giftCount' => $giftCount, 'withdrawInSum' => $withdrawInSum, 'totalGift' => $totalGift, 'totalBetCount' => $Obj->count(), 'withdrawSum' => $withdrawSum, 'creditSum' => $creditSum, 'all_casino_prices' => $all_casino_prices, 'all_casino_prices_count' => $all_casino_prices_count, 'all_win_casino_prices' => $all_win_casino_prices, 'all_win_casino_prices_count' => $all_win_casino_prices_count));
        $this->smart->view('dashboard');
    }
}
?>