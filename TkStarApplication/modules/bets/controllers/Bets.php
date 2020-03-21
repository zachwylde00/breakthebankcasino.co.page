<?php
class Bets extends Public_Controller{
	function __construct(){
		parent::__construct();
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
	}
	public function index(){
		$this->checkBetsResults();
		$this->smart->view('inplayMe');
	}
	public function inplayBet(){
		$this->checkBetsResults();
		$this->smart->view('inplayMe');
	}
	public function checkBetsResults(){
		$this->load->eloquent('bet');
		$this->load->eloquent('bet_form');
		$this->load->eloquent('str');
		$this->load->eloquent('payment/transaction');
		$bet_unsuccess_record = Bet::where('status', '0')->where('pay_stake_status', '0')->where('type', '1')->orderBy('id', 'desc')->get();
		foreach($bet_unsuccess_record as $key => $value){
			$bet_forms = Bet_form::where('bets_id', $value->id)->where('result_status', '0')->get();
			$transaction = 'false';
			foreach($bet_forms as $key_2 => $value_2){
				$bet_type = $value_2->bet_type;
				$bet_type = mb_strtolower($bet_type, ScriptChrst);
				$bet_type = str_replace(array('/'), array(' '), $bet_type);
				$match_details = file_get_contents('https://soccer.sportmonks.com/api/v2.0/fixtures/' . $value_2->match_id . '/?api_token=' . API_KEY . '&include=localTeam,visitorTeam&tz=' . TIMEZONE);
				$match_details = json_decode($match_details, false);
				$match_details = $match_details->data;
				$match_status = $match_details->time->status;
				if($match_status != 'FT' AND $match_status != 'ET' AND $match_status != 'PEN_LIVE' AND $match_status != 'AET'){
					continue;
				}else{
					$localTeam_name = $match_details->localTeam->data->name;
					$localTeam_name = Str::Start($localTeam_name, ' ');
					$visitorTeam_name = $match_details->visitorTeam->data->name;
					$visitorTeam_name = Str::Start($visitorTeam_name, ' ');
					$pick = $value_2->pick;
					$half_time_scores = $match_details->scores->ht_score;
					$half_time_scores = explode('-', $half_time_scores);
					$half_time_localteam_score = $half_time_scores[0];
					$half_time_visitorteam_score = $half_time_scores[1];
					$full_time_scores = $match_details->scores->ft_score;
					$full_time_scores = explode('-', $full_time_scores);
					$full_time_localteam_score = $full_time_scores[0];
					$full_time_visitorteam_score = $full_time_scores[1];
					$bet_win = 'false';
					if($bet_type == '3way result' OR $bet_type == '1x2'){
						if($full_time_localteam_score > $full_time_visitorteam_score){
							if($pick == 'local' OR $pick == 'میزبان' OR $pick == $localTeam_name OR $pick == 'home'){
								$bet_win = 'true';
							}else{
								$bet_win = 'false';
							}
						}elseif($full_time_visitorteam_score > $full_time_localteam_score){
							if($pick == 'visitor' OR $pick == 'میهمان' OR $pick == $visitorTeam_name OR $pick == 'away'){
								$bet_win = 'true';
							}else{
								$bet_win = 'false';
							}
						}elseif($full_time_visitorteam_score == $full_time_localteam_score){
							if($pick == 'draw' OR $pick == 'مساوی' OR $pick == $localTeam_name . '/' . $visitorTeam_name OR $pick == $visitorTeam_name . '/' . $localTeam_name){
								$bet_win = 'true';
							}else{
								$bet_win = 'false';
							}
						}else{
							$bet_win = 'false';
						}
					}elseif($bet_type == '3way result 1st half'){
						if($half_time_localteam_score > $half_time_visitorteam_score){
							if($pick == 'local' OR $pick == 'میزبان' OR $pick == $localTeam_name OR $pick == 'home'){
								$bet_win = 'true';
							}else{
								$bet_win = 'false';
							}
						}elseif($half_time_visitorteam_score > $half_time_localteam_score){
							if($pick == 'visitor' OR $pick == 'میهمان' OR $pick == $visitorTeam_name OR $pick == 'away'){
								$bet_win = 'true';
							}else{
								$bet_win = 'false';
							}
						}elseif($half_time_visitorteam_score == $half_time_localteam_score){
							if($pick == 'X' OR $pick == 'draw' OR $pick == 'مساوی' OR $pick == $localTeam_name . '/' . $visitorTeam_name OR $pick == $visitorTeam_name . '/' . $localTeam_name){
								$bet_win = 'true';
							}else{
								$bet_win = 'false';
							}
						}else{
							$bet_win = 'false';
						}
					}elseif($bet_type == 'over under' OR $bet_type == 'over under 1st half'){
						$pick = mb_strtolower($pick, ScriptChrst);
						$over_under = explode(' ', $pick);
						$over_under_type = $over_under[0];
						$over_under_bet = $over_under[1];
						$total_goals = $bet_type == 'over under' ? ($full_time_localteam_score + $full_time_visitorteam_score) : ($bet_type == 'over under 1st half' ? ($half_time_localteam_score + $half_time_visitorteam_score) : '1');
						settype($total_goals, 'float');
						if($over_under_type == 'over'){
							if($total_goals >= $over_under_bet){
								$bet_win = 'true';
							}else{
								$bet_win = 'false';
							}
						}elseif($over_under_type == 'under'){
							if($total_goals < $over_under_bet){
								$bet_win = 'true';
							}else{
								$bet_win = 'false';
							}
						}else{
							$bet_win = 'false';
						}
					}elseif($bet_type == 'both teams to score' OR $bet_type == 'both teams to score - 1st half'){
						if($bet_type == 'both teams to score'){
							if($pick == 'Yes' OR $pick == 'yes' OR $pick == 'بله'){
								if($full_time_localteam_score >= 1 AND $full_time_visitorteam_score >= 1){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}elseif($pick == 'No' OR $pick == 'no' OR $pick == 'خیر'){
								if($full_time_localteam_score <= 0 OR $full_time_visitorteam_score <= 0){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}
						}elseif($bet_type == 'both teams to score - 1st half'){
							if($pick == 'Yes' OR $pick == 'yes' OR $pick == 'بله'){
								if($half_time_localteam_score >= 1 AND $half_time_visitorteam_score >= 1){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}elseif($pick == 'No' OR $pick == 'no' OR $pick == 'خیر'){
								if($half_time_localteam_score <= 0 OR $half_time_visitorteam_score <= 0){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}
						}else{
							$bet_win = 'false';
						}
					}elseif($bet_type == 'correct score' OR $bet_type == 'correct score 1st half'){
						$final_result = $bet_type == 'correct score' ? $match_details->scores->ft_score : ($bet_type == 'correct score 1st half' ? $match_details->scores->ht_score : '0:0');
						$final_result = str_replace(array(':'), array('-'), $final_result);
						$pick = str_replace(array(':'), array('-'), $pick);
						if($final_result == $pick){
							$bet_win = 'true';
						}else{
							$bet_win = 'false';
						}
					}elseif($bet_type == 'odd even' OR $bet_type == 'odd even 1st half'){
						$final_result = $bet_type == 'odd even' ? ($full_time_localteam_score + $full_time_visitorteam_score) : ($bet_type == 'odd even 1st half' ? ($half_time_localteam_score + $half_time_visitorteam_score) : 0);
						if($pick == 'odd' OR $pick == 'Odd' OR $pick == 'فرد'){
							if(!(($final_result % 2) == 0)){
								$bet_win = 'true';
							}else{
								$bet_win = 'false';
							}
						}elseif($pick == 'even' OR $pick == 'Even' OR $pick == 'زوج'){
							if(($final_result % 2) == 0){
								$bet_win = 'true';
							}else{
								$bet_win = 'false';
							}
						}
					}elseif($bet_type == 'home team score a goal'){
						if($pick == 'Yes' OR $pick == 'yes' OR $pick == 'بله'){
							if($half_time_localteam_score >= 1 OR $full_time_localteam_score >= 1){
								$bet_win = 'true';
							}else{
								$bet_win = 'false';
							}
						}elseif($pick == 'No' OR $pick == 'no' OR $pick == 'خیر'){
							if($half_time_localteam_score <= 0 AND $full_time_localteam_score <= 0){
								$bet_win = 'true';
							}else{
								$bet_win = 'false';
							}
						}
					}elseif($bet_type == 'away team score a goal'){
						if($pick == 'Yes' OR $pick == 'yes' OR $pick == 'بله'){
							if($half_time_visitorteam_score >= 1 OR $full_time_visitorteam_score >= 1){
								$bet_win = 'true';
							}else{
								$bet_win = 'false';
							}
						}elseif($pick == 'No' OR $pick == 'no' OR $pick == 'خیر'){
							if($half_time_visitorteam_score <= 0 AND $full_time_visitorteam_score <= 0){
								$bet_win = 'true';
							}else{
								$bet_win = 'false';
							}
						}
					}elseif($bet_type == 'home away'){
						if($full_time_localteam_score == $full_time_visitorteam_score){
							$bet_win = 'false';
						}else{
							if($pick == 'home' OR $pick == 'local' OR $pick == 'میزبان'){
								if($full_time_localteam_score > $full_time_visitorteam_score){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}elseif($pick == 'away' OR $pick == 'visitor' OR $pick == 'میهمان' OR $pick == 'مهمان'){
								if($full_time_visitorteam_score > $full_time_localteam_score){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}else{
								$bet_win = 'false';
							}
						}
					}elseif($bet_type == 'double chance' OR $bet_type == 'double chance - 1st half' OR $bet_type == 'ht ft double'){
						$localTeam_name = mb_strtolower($localTeam_name, ScriptChrst);
						$localTeam_name = str_replace(array(' '), array(''), $localTeam_name);
						$visitorTeam_name = mb_strtolower($visitorTeam_name, ScriptChrst);
						$visitorTeam_name = str_replace(array(' '), array(''), $visitorTeam_name);
						$pick = mb_strtolower($pick, ScriptChrst);
						$pick = str_replace(array(' '), array(''), $pick);
						$pick = str_replace(array('/', '-'), array('/', '/'), $pick);
						$pick_explode = explode('/', $pick);
						$first_chance = $pick_explode[0];
						$second_chance = $pick_explode[1];
						$first_chance = mb_strtolower($first_chance, ScriptChrst);
						$second_chance = mb_strtolower($second_chance, ScriptChrst);
						$first_chance = str_replace(array('میزبان', 'local', 'home', $localTeam_name), array('local', 'local', 'local', 'local'), $first_chance);
						$second_chance = str_replace(array('میزبان', 'local', 'home', $localTeam_name), array('local', 'local', 'local', 'local'), $second_chance);
						$first_chance = str_replace(array('میهمان', 'مهمان', 'visitor', 'away', $visitorTeam_name), array('visitor', 'visitor', 'visitor', 'visitor', 'visitor'), $first_chance);
						$second_chance = str_replace(array('میهمان', 'مهمان', 'visitor', 'away', $visitorTeam_name), array('visitor', 'visitor', 'visitor', 'visitor', 'visitor'), $second_chance);
						$first_chance = str_replace(array('draw', 'x', 'مساوی'), array('draw', 'draw', 'draw'), $first_chance);
						$second_chance = str_replace(array('draw', 'x', 'مساوی'), array('draw', 'draw', 'draw'), $second_chance);
						if($bet_type == 'double chance'){
							if($full_time_localteam_score > $full_time_visitorteam_score){
								if($first_chance == 'local' OR $second_chance == 'local'){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}elseif($full_time_visitorteam_score > $full_time_localteam_score){
								if($first_chance == 'visitor' OR $second_chance == 'visitor'){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}elseif($full_time_visitorteam_score == $full_time_localteam_score){
								if($first_chance == 'draw' OR $second_chance == 'draw'){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}else{
								$bet_win = 'false';
							}
						}elseif($bet_type == 'double chance - 1st half'){
							if($half_time_localteam_score > $half_time_visitorteam_score){
								if($first_chance == 'local' OR $second_chance == 'local'){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}elseif($half_time_visitorteam_score > $half_time_localteam_score){
								if($first_chance == 'visitor' OR $second_chance == 'visitor'){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}elseif($half_time_visitorteam_score == $half_time_localteam_score){
								if($first_chance == 'draw' OR $second_chance == 'draw'){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}else{
								$bet_win = 'false';
							}
						}elseif($bet_type == 'ht ft double'){
							if($half_time_localteam_score > $half_time_visitorteam_score){
								if($first_chance == 'local' OR $second_chance == 'local'){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}elseif($half_time_visitorteam_score > $half_time_localteam_score){
								if($first_chance == 'visitor' OR $second_chance == 'visitor'){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}elseif($full_time_localteam_score > $full_time_visitorteam_score){
								if($first_chance == 'local' OR $second_chance == 'local'){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}elseif($full_time_visitorteam_score > $full_time_localteam_score){
								if($first_chance == 'visitor' OR $second_chance == 'visitor'){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}elseif($half_time_localteam_score == $half_time_visitorteam_score){
								if($first_chance == 'visitor' OR $second_chance == 'visitor'){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}elseif($full_time_localteam_score == $full_time_visitorteam_score){
								if($first_chance == 'visitor' OR $second_chance == 'visitor'){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}else{
								$bet_win = 'false';
							}
						}elseif($bet_type == 'total - home' OR $bet_type == 'total - away'){
							$pick = mb_strtolower($pick, ScriptChrst);
							$over_under = explode(' ', $pick);
							$over_under_type = $over_under[0];
							$over_under_bet = $over_under[1];
							$total_goals = $bet_type == 'total - home' ? $full_time_localteam_score : ($bet_type == 'total - away' ? $full_time_visitorteam_score : '0');
							settype($total_goals, 'float');
							if($over_under_type == 'over'){
								if($total_goals >= $over_under_bet){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}elseif($over_under_type == 'under'){
								if($total_goals < $over_under_bet){
									$bet_win = 'true';
								}else{
									$bet_win = 'false';
								}
							}else{
								$bet_win = 'false';
							}
						}elseif($bet_type == 'result total gouls'){
							$pick = mb_strtolower($pick, ScriptChrst);
							$pick = explode('/', $pick);
							$bet_result = $pick[0];
							$over_under = $pick[1];
							$over_under = explode(' ', $over_under);
							$over_under_type = $over_under[0];
							$over_under_bet = $over_under[1];
							$total_goals = $full_time_localteam_score + $full_time_visitorteam_score;
							settype($total_goals, 'float');
							if($full_time_localteam_score > $full_time_visitorteam_score){
								if($bet_result == 'home' OR $bet_result == 'local'){
									if($over_under_type == 'over'){
										if($total_goals >= $over_under_bet){
											$bet_win = 'true';
										}else{
											$bet_win = 'false';
										}
									}elseif($over_under_type == 'under'){
										if($total_goals < $over_under_bet){
											$bet_win = 'true';
										}else{
											$bet_win = 'false';
										}
									}else{
										$bet_win = 'false';
									}
								}else{
									$bet_win = 'false';
								}
							}elseif($full_time_visitorteam_score > $full_time_localteam_score){
								if($bet_result == 'away' OR $bet_result == 'visitor'){
									if($over_under_type == 'over'){
										if($total_goals >= $over_under_bet){
											$bet_win = 'true';
										}else{
											$bet_win = 'false';
										}
									}elseif($over_under_type == 'under'){
										if($total_goals < $over_under_bet){
											$bet_win = 'true';
										}else{
											$bet_win = 'false';
										}
									}else{
										$bet_win = 'false';
									}
								}else{
									$bet_win = 'false';
								}
							}elseif($full_time_visitorteam_score == $full_time_localteam_score){
								if($bet_result == 'draw'){
									if($over_under_type == 'over'){
										if($total_goals >= $over_under_bet){
											$bet_win = 'true';
										}else{
											$bet_win = 'false';
										}
									}elseif($over_under_type == 'under'){
										if($total_goals < $over_under_bet){
											$bet_win = 'true';
										}else{
											$bet_win = 'false';
										}
									}else{
										$bet_win = 'false';
									}
								}else{
									$bet_win = 'false';
								}
							}else{
								$bet_win = 'false';
							}
						}else{
							$bet_win = 'false';
						}
					}
					if($bet_win == 'true'){
						$this->load->sentinel();
						$userModal = $this->sentinel->getUserRepository();
						$user = $userModal->find($value->user_id);
						$cash = $user->cash;
						$user->update(array('cash' => $cash + ($value->stake * $value->effective_odd)));
						if($transaction == 'false'){
							Transaction::create(array('trans_id' => $value->user_id . time(), 'price' => ($value->stake * $value->effective_odd), 'invoice_type' => 2, 'status' => 1, 'cash' => $cash + ($value->stake * $value->effective_odd), 'user_id' => $value->user_id, 'description' => 'واریز جایزه برد شرط بندی با شناسه ' . $value->id));
							$transaction = 'true';
						}
					}
					$result_status = $bet_win == 'true' ? '1' : '2';
					$pay_stake_status = $bet_win == 'true' ? '1' : '2';
					Bet_form::where('id', $value_2->id)->update(array('result_status' => $result_status, 'status' => $match_status, 'home_score_ft' => $full_time_localteam_score, 'away_score_ft' => $full_time_visitorteam_score));
					Bet::where('id', $value->id)->update(array('status' => $result_status, 'pay_stake_status' => 1));
				}
			}
		}
	}
	public function inplayBets(){
		$this->load->eloquent('str');
		$this->load->helper('cookie');
		$cookie_change_bg_times = time() + 900;
		$inplay_time = file_get_contents(APPPATH . 'logs/API/inplay_time.txt');
		settype($inplay_time, 'int');
		$now_time = time();
		if(($now_time - $inplay_time) >= 5){
		    file_put_contents(APPPATH . 'logs/API/inplay_time.txt', $now_time);
		    file_put_contents(APPPATH . 'logs/API/inplay_api.txt', file_get_contents('https://soccer.sportmonks.com/api/v2.0/livescores/now?api_token=' . API_KEY . '&include=odds,inplay,localTeam,visitorTeam,league'));
		}
		$matches = file_get_contents(APPPATH . 'logs/API/inplay_api.txt');
		$matches = json_decode($matches, false);
		$output = array();
		$bannInplays = site_url('bets/inplays_banns');
		$bannInplays = file_get_contents($bannInplays);
		$bannInplays = json_decode($bannInplays, true);
		$leagues = array();
		$leagues_entered = site_url('bets/leagues_entered');
		$leagues_entered = file_get_contents();
		$leagues_entered = json_decode($leagues_entered, false);
		$leagues = array();
		if(isset($matches->data) AND !empty($matches->data) AND (is_array($matches->data) OR is_object($matches->data))){
			foreach($matches->data as $match){
				$localTeam = $match->localTeam->data->name;
				$localTeam = Str::Start($localTeam, ' ');
				$visitorTeam = $match->visitorTeam->data->name;
				$visitorTeam = Str::Start($visitorTeam, ' ');
				$league = $match->league->data->name;
				$league = Str::Start($league, ' ');
				if(!isset($leagues_entered->leagues) OR (is_array($leagues_entered->leagues) AND is_object($leagues_entered->leagues))){
					$leagues[$league][$match->id] = $match;
				}else{
					foreach($leagues_entered->leagues as $leagua){
						if(($leagua->local == trim($visitorTeam) AND $leagua->visitor == trim($localTeam->name)) OR ($leagua->visitor == trim($visitorTeam) AND $leagua->local == trim($localTeam->name))){
							$leagues[$leagua->league][$match->id] = $match;
							unset($leagues[$league][$match->id]);
						}else{
							$leagues[$league][$match->id] = $match;
						}
					}
				}
			}
		}
		krsort($leagues);
		$game = '';
		if(isset($leagues) AND !empty($leagues) AND (is_array($leagues) OR is_object($leagues))){
			foreach($leagues as $key => $value){
				$gotBreak = false;
				foreach($value as $match){
					if((isset($match->inplay->data[0]) AND (is_array($match->inplay->data[0]) OR is_object($match->inplay->data[0]))) OR (isset($match->odds->data[0]) AND (is_array($match->odds->data[0]) OR is_object($match->odds->data[0])))){
						if($match->time->minute <= 89 AND ($match->time->status == 'LIVE' OR $match->time->status == 'HT' OR $match->time->status == 'FT') AND (count($match->odds->data) >= 1 OR count($match->inplay->data) >= 1)){
							$gotBreak = true;
							break;
						}
					}else{
						continue;
					}
				}
				if($gotBreak === false){
					continue;
				}else{
					$game .= '<div class="event-row-parent-search sport-categories sport-categories-1"><div class="event-type"><div class="title"><div class="text"><span class="yellow"><i class="fa fa-soccer-ball-o" style="margin-left: 10px !important;"></i> ' . $this->persian_translate($key) . '</span></div><div class="odd-title">میزبان</div><div class="odd-title">مساوی</div><div class="odd-title">میهمان</div><div class="clear"></div></div><div class="odd-container">';
					foreach($value as $match){
						if($match->time->status == 'LIVE' OR $match->time->minute <= 89){
							$match_odds = $match->odds->data[0]->bookmaker->data[0]->odds;
							$match_inplay_odds = $match->inplay->data[0]->bookmaker->data[0]->odds;
							$last = (isset($match_inplay_odds) AND (is_array($match_inplay_odds) OR is_object($match_inplay_odds))) ? $match_inplay_odds : ((isset($match_odds) AND (is_array($match_odds) OR is_object($match_odds))) ? $match_odds : array());
							if((!is_array($last) AND !is_object($last)) OR count((array)$last) <= 0){
								continue;
							}else{
								$first_odd = $last->data[0]->value;
								$second_odd = $last->data[1]->value;
								$third_odd = $last->data[2]->value;
								$first_odd = $first_odd >= 75.01 ? '75.00' : $first_odd;
								$first_odd = ($first_odd < 1 AND $first_odd > 1) ? 1 : $first_odd;
								$first_odd = ($first_odd == 0 OR $first_odd == 0.0 OR $first_odd == 0.00) ? '' : $first_odd;
								$second_odd = $second_odd >= 75.01 ? '75.00' : $second_odd;
								$second_odd = ($second_odd < 1 AND $second_odd > 1) ? 1 : $second_odd;
								$second_odd = ($second_odd == 0 OR $second_odd == 0.0 OR $second_odd == 0.00) ? '' : $second_odd;
								$third_odd = $third_odd >= 75.01 ? '75.00' : $third_odd;
								$third_odd = ($third_odd < 1 AND $third_odd > 1) ? 1 : $third_odd;
								$third_odd = ($third_odd == 0 OR $third_odd == 0.0 OR $third_odd == 0.00) ? '' : $third_odd;
								if(isset($bannInplays['banns']) AND (is_object($bannInplays['banns']) OR is_array($bannInplays['banns']))){
									foreach($bannInplays['banns'] as $match_id => $oddO){
										if($oddO['id'] == $match->id){
											$first_odd = $oddO['oddO'] == 'local' ? 0 : $first_odd;
											$second_odd = $oddO['oddO'] == 'x' ? 0 : $second_odd;
											$third_odd = $oddO['oddO'] == 'visitor' ? 0 : $third_odd;
										}else{
											continue;
										}
									}
								}
								if(($match->scores->localteam_score - $match->scores->visitorteam_score) == 1){
									if($match->time->minute >= 0 AND $match->time->minute < 30){
										$first_odd = $first_odd / 2;
										$first_odd = round($first_odd, 2);
									}elseif($match->time->minute >= 30 AND $match->time->minute < 45){
										$first_odd = $first_odd / 2.25;
										$first_odd = round($first_odd, 2);
									}elseif($match->time->minute >= 46 AND $match->time->minute < 70){
										$first_odd = $first_odd / 2.5;
										$first_odd = round($first_odd, 2);
									}elseif($match->time->minute >= 70){
										$first_odd = 1.1;
									}
								}elseif(($match->scores->localteam_score - $match->scores->visitorteam_score) == 2){
									if($match->time->minute >= 0 AND $match->time->minute < 30){
										$first_odd = $first_odd / 2.5;
										$first_odd = round($first_odd, 2);
									}elseif($match->time->minute >= 30 AND $match->time->minute < 45){
										$first_odd = $first_odd / 2.75;
										$first_odd = round($first_odd, 2);
									}elseif($match->time->minute >= 46 AND $match->time->minute < 70){
										$first_odd = $first_odd / 3;
										$first_odd = round($first_odd, 2);
									}elseif($match->time->minute >= 70){
										$first_odd = 1.1;
									}
								}elseif(($match->scores->localteam_score - $match->scores->visitorteam_score) >= 3){
									if($match->time->minute >= 0 AND $match->time->minute < 30){
										$first_odd = $first_odd / 3;
										$first_odd = round($first_odd, 2);
									}elseif($match->time->minute >= 30 AND $match->time->minute < 45){
										$first_odd = $first_odd / 3.25;
										$first_odd = round($first_odd, 2);
									}elseif($match->time->minute >= 46 AND $match->time->minute < 70){
										$first_odd = $first_odd / 3.5;
										$first_odd = round($first_odd, 2);
									}elseif($match->time->minute >= 70){
										$first_odd = 1.1;
									}
								}
								if($match->scores->localteam_score == $match->scores->visitorteam_score){
									if($match->time->minute >= 0 AND $match->time->minute < 30){
										$second_odd = $second_odd / 2;
										$second_odd = round($second_odd, 2);
									}elseif($match->time->minute >= 30 AND $match->time->minute < 45){
										$second_odd = $second_odd / 2.25;
										$second_odd = round($second_odd, 2);
									}elseif($match->time->minute >= 46 AND $match->time->minute < 70){
										$second_odd = $second_odd / 2.5;
										$second_odd = round($second_odd, 2);
									}elseif($match->time->minute >= 70){
										$second_odd = 1.1;
									}
								}
								if(($match->scores->visitorteam_score - $match->scores->localteam_score) == 1){
									if($match->time->minute >= 0 AND $match->time->minute < 30){
										$third_odd = $third_odd / 2;
										$third_odd = round($third_odd, 2);
									}elseif($match->time->minute >= 30 AND $match->time->minute < 45){
										$third_odd = $third_odd / 2.25;
										$third_odd = round($third_odd, 2);
									}elseif($match->time->minute >= 46 AND $match->time->minute < 70){
										$third_odd = $third_odd / 2.5;
										$third_odd = round($third_odd, 2);
									}elseif($match->time->minute >= 70){
										$third_odd = 1.1;
									}
								}elseif(($match->scores->visitorteam_score - $match->scores->localteam_score) == 2){
									if($match->time->minute >= 0 AND $match->time->minute < 30){
										$third_odd = $third_odd / 2;
										$third_odd = round($third_odd, 2);
									}elseif($match->time->minute >= 30 AND $match->time->minute < 45){
										$third_odd = $third_odd / 2.25;
										$third_odd = round($third_odd, 2);
									}elseif($match->time->minute >= 46 AND $match->time->minute < 70){
										$third_odd = $third_odd / 2.5;
										$third_odd = round($third_odd, 2);
									}elseif($match->time->minute >= 70){
										$third_odd = 1.1;
									}
								}elseif(($match->scores->visitorteam_score - $match->scores->localteam_score) >= 3){
									if($match->time->minute >= 0 AND $match->time->minute < 30){
										$third_odd = $third_odd / 2;
										$third_odd = round($third_odd, 2);
									}elseif($match->time->minute >= 30 AND $match->time->minute < 45){
										$third_odd = $third_odd / 2.25;
										$third_odd = round($third_odd, 2);
									}elseif($match->time->minute >= 46 AND $match->time->minute < 70){
										$third_odd = $third_odd / 2.5;
										$third_odd = round($third_odd, 2);
									}elseif($match->time->minute >= 70){
										$third_odd = 1.1;
									}
								}
								$first_odd = $first_odd == 0 ? 0 : $first_odd;
								$first_odd = (($first_odd < 1 AND $first_odd > 0 AND $first_odd != 0) OR $first_odd == 1) ? 1.1 : $first_odd;
								$second_odd = $second_odd == 0 ? 0 : $second_odd;
								$second_odd = (($second_odd < 1 AND $second_odd > 0 AND $second_odd != 0) OR $second_odd == 1) ? 1.1 : $second_odd;
								$third_odd = $third_odd == 0 ? 0 : $third_odd;
								$third_odd = (($third_odd < 1 AND $third_odd > 0 AND $third_odd != 0) OR $third_odd == 1) ? 1.1 : $third_odd;
								$disabled_first_odd = 'false';
								$disabled_second_odd = 'false';
								$disabled_third_odd = 'false';
								$disabled_first_odd = ($match->scores->localteam_score > $match->scores->visitorteam_score AND $first_odd > 3) ? 'true' : 'false';
								$disabled_second_odd = ($match->scores->localteam_score > $match->scores->visitorteam_score AND $first_odd > 3) ? 'true' : 'false';
								$disabled_third_odd = ($match->scores->localteam_score > $match->scores->visitorteam_score AND $first_odd > 3) ? 'true' : 'false';
								$cookie_name_replace_first = str_replace(array('.'), array('_'), $first_odd) . '_' . $match->id . '_' . $last->data[0]->label;
								$cookie_name_replace_second = str_replace(array('.'), array('_'), $second_odd) . '_' . $match->id . '_' . $last->data[1]->label;
								$cookie_name_replace_third = str_replace(array('.'), array('_'), $third_odd) . '_' . $match->id . '_' . $last->data[3]->label;
								$cookie_name_write_first = $match->id . '_last_localTeamOdd';
								$cookie_name_write_second = $match->id . '_last_drawOdd';
								$cookie_name_write_third = $match->id . '_last_visitorTeamOdd';
								$show_bg_change_first_odd = '';
								$show_bg_change_second_odd = '';
								$show_bg_change_third_odd = '';
								// if($disabled_first_odd == 'false' AND empty($_COOKIE[$cookie_name_replace_first])){
								// 	setcookie($cookie_name_replace_first, $first_odd, $cookie_change_bg_times);
								// 	if(isset($_COOKIE[$cookie_name_write_first]) AND $first_odd < $_COOKIE[$cookie_name_write_first]){
								// 		$show_bg_change_first_odd = ' blink-red';
								// 	}elseif(isset($_COOKIE[$cookie_name_write_first]) AND $first_odd > $_COOKIE[$cookie_name_write_first]){
								// 		$show_bg_change_first_odd = ' blink-green';
								// 	}
								// 	setcookie($cookie_name_write_first, $first_odd, $cookie_change_bg_times);
								// }else{
								// 	$show_bg_change_first_odd = '';
								// }
								// if($disabled_second_odd == 'false' AND empty($_COOKIE[$cookie_name_replace_second])){
								// 	setcookie($cookie_name_replace_second, $second_odd, $cookie_change_bg_times);
								// 	if(isset($_COOKIE[$cookie_name_write_second]) AND $second_odd < $_COOKIE[$cookie_name_write_second]){
								// 		$show_bg_change_second_odd = ' blink-red';
								// 	}elseif(isset($_COOKIE[$cookie_name_write_second]) AND $second_odd > $_COOKIE[$cookie_name_write_second]){
								// 		$show_bg_change_second_odd = ' blink-green';
								// 	}
								// 	setcookie($cookie_name_write_second, $second_odd, $cookie_change_bg_times);
								// }else{
								// 	$show_bg_change_second_odd = '';
								// }
								// if($disabled_third_odd == 'false' AND empty($_COOKIE[$cookie_name_replace_third])){
								// 	setcookie($cookie_name_replace_third, $third_odd, $cookie_change_bg_times);
								// 	if(isset($_COOKIE[$cookie_name_write_third]) AND $third_odd < $_COOKIE[$cookie_name_write_third]){
								// 		$show_bg_change_third_odd = ' blink-red';
								// 	}elseif(isset($_COOKIE[$cookie_name_write_third]) AND $third_odd > $_COOKIE[$cookie_name_write_third]){
								// 		$show_bg_change_third_odd = ' blink-green';
								// 	}
								// 	setcookie($cookie_name_write_third, $third_odd, $cookie_change_bg_times);
								// }else{
								// 	$show_bg_change_third_odd = '';
								// }
								$show_bg_change_first_odd = (empty($first_odd) OR $first_odd <= 0 OR $disabled_first_odd != 'false') ? '' : $show_bg_change_first_odd;
								$show_bg_change_second_odd = (empty($second_odd) OR $second_odd <= 0 OR $disabled_second_odd != 'false') ? '' : $show_bg_change_second_odd;
								$show_bg_change_third_odd = (empty($third_odd) OR $third_odd <= 0 OR $disabled_third_odd != 'false') ? '' : $show_bg_change_third_odd;
								if(($match->scores->localteam_score - $match->scores->visitorteam_score) >= 3){
									$disabled_first_odd = 'true';
									$show_bg_change_first_odd = '';
								}
								if(($match->scores->visitorteam_score - $match->scores->localteam_score) >= 3){
									$disabled_third_odd = 'true';
									$show_bg_change_third_odd = '';
								}
								$suspend_class = 'hidden';
								if($match->deleted != false){
									$suspend_class = '';
									$show_bg_change_first_odd = '';
									$show_bg_change_second_odd = '';
									$show_bg_change_third_odd = '';
								}else{
									if(empty($first_odd) AND empty($second_odd) AND empty($third_odd)){
										$suspend_class = '';
										$show_bg_change_first_odd = '';
										$show_bg_change_second_odd = '';
										$show_bg_change_third_odd = '';
									}else{
										$suspend_class = 'hidden';
									}
								}
								$visitorTeam_name = $match->visitorTeam->data->name;
								$visitorTeam_name = Str::Start($visitorTeam_name, ' ');
								$localTeam_name = $match->localTeam->data->name;
								$localTeam_name = Str::Start($localTeam_name, ' ');
								if(isset($match->odds) AND (is_array($match->odds) OR is_object($match->odds))){
									if(!empty($match->odds->data[0]->name)){
										$bookmaker_name = $match->odds->data[0]->name;
									}else{
										$bookmaker_name = '3Way Result';
									}
								}elseif(isset($match->inplay) AND (is_array($match->inplay) OR is_object($match->inplay))){
									if(!empty($match->inplay->data[0]->name)){
										$bookmaker_name = $match->inplay->data[0]->name;
									}else{
										$bookmaker_name = '3Way Result';
									}
								}else{
									$bookmaker_name = '3Way Result';
								}
								$odds_array = (isset($match->inplay) AND (is_array($match->inplay) OR is_object($match->inplay))) ? count($match->inplay) : ((isset($match->odds) AND (is_array($match->odds) OR is_object($match->odds))) ? $match->odds : array());
								$odds_array = $odds_array->data;
								$odd_alls = 0;
								foreach($odds_array as $odd){
									$odd_name = $odd->name;
									$odd_name_lower = mb_strtolower($odd_name, ScriptChrst);
									$odd_name_lower = str_replace(array('/'), array(' '), $odd_name_lower);
									if($odd_name_lower != '3way result' AND $odd_name_lower != '3way result 1st half' AND $odd_name_lower != 'over under' AND $odd_name_lower != 'home away' AND $odd_name_lower != 'over under 1st half' AND $odd_name_lower != 'ht ft double' AND $odd_name_lower != 'both teams to score' AND $odd_name_lower != 'both teams to score - 1st half' AND $odd_name_lower != 'correct score' AND $odd_name_lower != 'correct score 1st half' AND $odd_name_lower != 'double chance' AND $odd_name_lower != 'double chance - 1st half' AND $odd_name_lower != 'odd even' AND $odd_name_lower != 'odd even 1st half' AND $odd_name_lower != 'home team score a goal' AND $odd_name_lower != 'away team score a goal' AND $odd_name_lower != 'total - home' AND $odd_name_lower != 'total - away' AND $odd_name_lower != 'result total goals'){
										continue;
									}else{
										if($odd_alls >= 19){
											break;
										}else{
											$odd_alls++;
										}
									}
								}
								$odd_alls = $odd_alls <= 0 ? '0' : ($odd_alls >= 1 ? ('+' . $odd_alls) : 'N/A');
								$odd_alls = (!empty($odd_alls) AND is_numeric($odd_alls) AND $odd_alls >= 20) ? '+19' : $odd_alls;
								$game .= '<div class="event-row event-row-search event-' . $match->id . '"><a href="' . site_url('bets/moreBets/' . $match->id . '/LIVE') . '" class="event-title"><div class="event-time live-event-time"><i class="fa fa-clock-o" style="margin-left: 10px !important;"></i> ' . ($match->time->minute != '' ? (strlen($match->time->minute) <= 1 ? ('0' . $match->time->minute) : $match->time->minute) : 00) . ':' . ($match->time->second != '' ? (strlen($match->time->second) <= 1 ? ('0' . $match->time->second) : $match->time->second) : 00) . '</div><div class="mt5"><div class="left score home-score">' . $match->scores->localteam_score . '</div><div class="left home-team" style="font-size: 12px !important;"><span class="host">' . $this->persian_translate($localTeam_name) . '</span></div><div class="clear"></div></div><div class="mt5"><div class="left score away-score">' . $match->scores->visitorteam_score . '</div><div class="left away-team" style="font-size: 12px !important;"><span class="guest">' . $this->persian_translate($visitorTeam_name) . '</span></div><div class="clear"></div></div><div class="clear"></div></a><span class="event-odds"><div class="market-box-10"><a data-eventid="' . $match->id . '" data-runnerid="' . $match->id . '-' . $last->data[0]->label . '-' . $bookmaker_name . '-' . $last->data[0]->label . '" data-pick="' . $match->localTeam->data->name . '" data-points="" href="javascript:;" class="inplaybtn odd-rate odd-main-button odd-link' . (($first_odd == '' OR $first_odd == 0 OR $first_odd == 0.0 OR $first_odd == 0.00 OR $disabled_first_odd != 'false') ? ' passive-ma' : '') . $show_bg_change_first_odd . '"><span>' . (($first_odd == '' OR $first_odd == 0 OR $first_odd == 0.0 OR $first_odd == 0.00) ? '...' : ($disabled_first_odd != 'true' ? $first_odd : '...')) . '</span></a><a data-eventid="' . $match->id . '" data-runnerid="' . $match->id . '-' . $last->data[0]->label . '-' . $bookmaker_name . '-' . $last->data[1]->label . '" data-pick="مساوی" data-points="" href="javascript:;" class="inplaybtn odd-rate odd-main-button odd-link' . (($second_odd == '' OR $second_odd == 0 OR $second_odd == 0.0 OR $second_odd == 0.00 OR $disabled_second_odd != 'false') ? ' passive-ma' : '') . $show_bg_change_second_odd . '"><span>' . (($second_odd == '' OR $second_odd == 0 OR $second_odd == 0.0 OR $second_odd == 0.00) ? '...' : ($disabled_second_odd != 'true' ? $second_odd : '...')) . '</span></a><a data-eventid="' . $match->id . '" data-runnerid="' . $match->id . '-' . $last->data[0]->label . '-' . $bookmaker_name . '-' . $last->data[2]->label . '" data-pick="' . $match->visitorTeam->data->name . '" data-points="" href="javascript:;" class="inplaybtn odd-rate odd-main-button odd-link ' . (($third_odd == '' OR $third_odd == 0 OR $third_odd == 0.0 OR $third_odd == 0.00 OR $disabled_third_odd != 'false') ? ' passive-ma' : '') . $show_bg_change_third_odd . '"><span>' . (($third_odd == '' OR $third_odd == 0 OR $third_odd == 0.0 OR $third_odd == 0.00) ? '...' : ($disabled_third_odd != 'true' ? $third_odd : '...')) . '</span></a></div></span><a href="' . site_url('bets/moreBets/' . $match->id . '/LIVE') . '" class="inplaybtn odd-rate odd-main-button odd-link has-tip odd-alls" title="شروط بیشتر"><span>' . $odd_alls . '</span></a><div class="clear"></div></div>';
							}
						}
					}
					$game .= '</div></div></div>';
				}
			}
		}
		if(empty($game) OR !is_string($game)){
			$game = '<div class="row"><div class="alert alert-danger" style="text-align: center !important; display: block !important; margin-bottom: 0px !important;"><i class="fa fa-info-circle fa-4x" style="margin-bottom: 15px !important;"></i><br>هیچ بازی زنده ای وجود ندارد</div></div>';
		}
		echo($game);exit();
	}
	public function inplays_banns(){
		require_once(APPPATH . 'application/language/persian/bannInplays.php');
		echo(json_encode(array('banns' => $banned), JSON_UNESCAPED_UNICODE));exit();
	}
	public function leagues_entered(){
		require_once(APPPATH . 'application/language/persian/leagues.php');
		echo(json_encode(array('leagues' => $leagues), JSON_UNESCAPED_UNICODE));exit();
	}
	public function persian_translate($text){
		$translate = CI::$APP->lang->line($text);
		if(!empty($translate)){
			settype($translate, 'string');
			return($translate);
		}else{
			return($text);
		}
	}
	public function moreBets($match_id, $type){
		ini_set('max_execution_time', '0');
		$grapich_address = file_get_contents(APPPATH . 'logs' . DS . 'API' . DS . 'other_site.txt');
		$matchDetails = file_get_contents('https://soccer.sportmonks.com/api/v2.0/fixtures/' . $match_id . '?api_token=' . API_KEY . '&include=localTeam,visitorTeam&tz=' . TIMEZONE);
		$matchDetails = json_decode($matchDetails, false);
		$matchDetails = $matchDetails->data;
		$dom_d = new DOMDocument;
		$dom_d->WhiteSpace = false;
		$dom_d->loadHTML($grapich_address);
		$localTeam_name = $matchDetails->localTeam->data->name;
		$localTeam_name = explode(' ', $localTeam_name);
		$visitorTeam_name = $matchDetails->visitorTeam->data->name;
		$visitorTeam_name = explode(' ', $visitorTeam_name);
		$all_names = array();
		foreach($localTeam_name as $name)$all_names[] = $name;
		foreach($visitorTeam_name as $name)$all_names[] = $name;
		$links = $dom_d->getElementsbyTagName('a');
		foreach($links as $link){
			if($link->getAttribute('class') != 'event-title')continue;
			foreach($all_names as $name){
				if(strpos($link->nodeValue, $name) !== false){
					$game_id = $link->getAttribute('href');
					break;
				}else{
					continue;
				}
			}
		}
		$game_id = preg_replace('/\D/imu', '', $game_id);
		$game_id = (string)$game_id;
		$game_id = str_replace(array('100000'), array(''), $game_id);
		$live_address = file_get_contents('http://b45b.com/sport/event?id=100000' . $game_id . '&type=live');
		preg_match('/src\=rtmp\:\/\/(.*)allowFullScreen\=true/imu', (string)$live_address, $matches);
		$param_address = $matches[0];
		$param_address = str_replace(array('src=rtmp://'), array(''), $param_address);
		$status = $matchDetails->data->time->status;
		$this->smart->assign(array('matches' => $matchDetails, 'match_id' => $match_id, 'param_address' => $param_address, 'game_id' => $game_id, 'type' => $type, 'status' => $status));
		$this->smart->view('moreBets');
	}
	public function moreBetsDetails($match_id, $type = 'inplay'){
		$this->load->eloquent('str');
		$this->load->helper('cookie');
		if(!in_array($type, array('NS', 'LIVE'))){
			echo('error|<div class="row"><div class="alert alert-danger" style="text-align: center !important; margin-bottom: auto !important; display: block !important;">وضعیت بازی به درستی انتخاب نشده است ! لطفا در URL ها دست نبرید !</div></div>');exit();
		}
		$this->load->helper('cookie');
		$matchDetails = file_get_contents('https://soccer.sportmonks.com/api/v2.0/fixtures/' . $match_id . '?api_token=' . API_KEY . '&include=localTeam,visitorTeam,league,cards,venue,stats&tz=' . TIMEZONE);
		$matchDetails = json_decode($matchDetails, false);
		$matchDetails = $matchDetails->data;
		$localTeam_name = $matchDetails->localTeam->data->name;
		$localTeam_name = Str::Start($localTeam_name, ' ');
		$visitorTeam_name = $matchDetails->visitorTeam->data->name;
		$visitorTeam_name = Str::Start($visitorTeam_name, ' ');
		$localteam_score = $matchDetails->scores->localteam_score;
		$visitorteam_score = $matchDetails->scores->visitorteam_score;
		$localTeam_position = (isset($matchDetails->standings->localteam_position) AND !empty($matchDetails->standings->localteam_position) AND is_numeric($matchDetails->standings->localteam_position)) ? $matchDetails->standings->localteam_position : '<i class="fa fa-question-circle has-tip" title="نامشخص"></i>';
		$visitorTeam_position = (isset($matchDetails->standings->visitorteam_position) AND !empty($matchDetails->standings->visitorteam_position) AND is_numeric($matchDetails->standings->visitorteam_position)) ? $matchDetails->standings->visitorteam_position : '<i class="fa fa-question-circle has-tip" title="نامشخص"></i>';
		$localTeam_formation = (isset($matchDetails->formations->localteam_formation) AND !empty($matchDetails->formations->localteam_formation)) ? $matchDetails->formations->localteam_formation : '<i class="fa fa-question-circle has-tip" title="نامشخص"></i>';
		$visitorTeam_formation = (isset($matchDetails->formations->visitorteam_formation) AND !empty($matchDetails->formations->visitorteam_formation)) ? $matchDetails->formations->visitorteam_formation : '<i class="fa fa-question-circle has-tip" title="نامشخص"></i>';
		$localTeam_penalties = (isset($matchDetails->scores->localteam_pen_score) AND !empty($matchDetails->scores->localteam_pen_score) AND is_numeric($matchDetails->scores->localteam_pen_score)) ? $matchDetails->scores->localteam_pen_score : '0';
		$visitorTeam_penalties = (isset($matchDetails->scores->visitorteam_pen_score) AND !empty($matchDetails->scores->visitorteam_pen_score) AND is_numeric($matchDetails->scores->visitorteam_pen_score)) ? $matchDetails->scores->visitorteam_pen_score : '0';
		$localTeam_stats = (isset($matchDetails->stats->data[0]) AND is_object($matchDetails->stats->data[0])) ? $matchDetails->stats->data[0] : array();
		$visitorTeam_stats = (isset($matchDetails->stats->data[1]) AND is_object($matchDetails->stats->data[1])) ? $matchDetails->stats->data[1] : array();
		$localTeam_corners = (isset($localTeam_stats->corners) AND !empty($localTeam_stats->corners) AND is_numeric($localTeam_stats->corners)) ? $localTeam_stats->corners : 0;
		$visitorTeam_corners = (isset($visitorTeam_stats->corners) AND !empty($visitorTeam_stats->corners) AND is_numeric($visitorTeam_stats->corners)) ? $visitorTeam_stats->corners : 0;
		$localTeam_cards = '';
		$visitorTeam_cards = '';
		$weather_report = $matchDetails->weather_report;
		$weather_type = mb_strtolower($weather_report->type, ScriptChrst);
		$weather_type = empty($weather_type) ? '' : $weather_type;
		switch($weather_type){
			case('clear-sky'): case('clear sky'): case('clearsky'): $weather_title = 'آسمان صاف'; break;
			case('few-clouds'): case('few clouds'): case('fewclouds'): $weather_title = 'نیمه ابری'; break;
			case('scattered-clouds'): case('scattered clouds'): case('scatteredclouds'): $weather_title = 'ابری پراکنده'; break;
			case('broken-clouds'): case('broken clouds'): case('brokenclouds'): $weather_title = 'ابری متراکم'; break;
			case('shower-rain'): case('shower rain'): case('showerrain'): $weather_title = 'بارانی شدید'; break;
			case('light-rain'): case('light rain'): case('lightrain'): $weather_title = 'نیمه بارانی'; break;
			case('rain'): $weather_title = 'باران'; break;
			case('thunderstorm'): $weather_title = 'نیمه ابری / رعد و برق'; break;
			case('snow'): $weather_title = 'برفی'; break;
			case('mist'): $weather_title = 'گرد و غبار'; break;
			default: $weather_title = 'نامشخص'; break;
		}
		if(isset($weather_report->icon) AND !empty($weather_report->icon)){
			$weather_icon = $weather_report->icon;
		}else{
			$weather_icon = site_url('assets/default/TkStarBet2018/images/icons/weather_none.svg');
			$weather_title = 'گزارش نشده !';
		}
		$weather_icon = '<img src="' . $weather_icon . '" class="weather-icons has-tip" title="' . $weather_title . '" />';
		if(isset($weather_report->temperature->temp) AND !empty($weather_report->temperature->temp)){
			$weather_temperature = $weather_report->temperature->temp;
			$weather_temperature = intval((($weather_temperature - 32) / 180) * 100);
			$weather_temperature = $weather_temperature . ' درجه سانتی گراد';
		}else{
			$weather_temperature = 'گزارش نشده !';
		}
		if(isset($weather_report->wind->speed) AND !empty($weather_report->wind->speed)){
			$weather_wind = $weather_report->wind->speed;
			$weather_wind = $weather_wind * 1.609344;
			$weather_wind = round($weather_wind, 1);
			$weather_wind = $weather_wind . ' کیلومتر در ساعت';
		}else{
			$weather_wind = 'گزارش نشده !';
		}
		$venue = $matchDetails->venue;
		$venue = $venue->data;
		$venue_name = $venue->name;
		$venue_name = $this->persian_translate($venue_name);
		$venue_city = $venue->city;
		$venue_city = $this->persian_translate($venue_city);
		$venue_capacity = $venue->capacity;
		$venue_capacity = number_format($venue_capacity);
		$venue_capacity = $venue_capacity . ' نفر';
		foreach($matchDetails->cards->data as $card){
			if($card->player_id == '' OR $card->player_name == '') continue;
			if($card->team_id == $matchDetails->localTeam->data->id){
				$localTeam_cards .= '<div class="' . ($card->type == 'yellowcard' ? 'yellowcard' : 'redcard') . '"></div>';
			}
		}
		foreach($matchDetails->cards->data as $card){
			if($card->player_id == '' OR $card->player_name == '') continue;
			if($card->team_id == $matchDetails->visitorTeam->data->id){
				$visitorTeam_cards .= '<div class="' . ($card->type == 'yellowcard' ? 'yellowcard' : 'redcard') . '"></div>';
			}
		}
		$status = $matchDetails->time->status;
		$status = mb_strtolower($status, ScriptChrst);
		if($status == 'ft'){
			$eninplaytime = '94:00';
		}elseif($status == 'ht'){
			$eninplaytime = '45:00';
		}elseif($status == 'ns'){
			$eninplaytime = '00:00';
		}else{
			$minute = $matchDetails->time->minute;
			$minute = strlen($minute) <= 1 ? '0' . $minute : $minute;
			$minute = (empty($minute) OR !is_numeric($minute)) ? '00' : $minute;
			$second = $matchDetails->time->second;
			$second = strlen($second) <= 1 ? '0' . $second : $second;
			$second = (empty($second) OR !is_numeric($second)) ? '00' : $second;
			$eninplaytime = $minute . ':' . $second;
		}
		echo(json_encode(array('localTeam_name' => $this->persian_translate($localTeam_name), 'visitorTeam_name' => $this->persian_translate($visitorTeam_name), 'localteam_score' => number_format(round($localteam_score)), 'visitorteam_score' => number_format(round($visitorteam_score)), 'localTeam_cards' => $localTeam_cards, 'visitorTeam_cards' => $visitorTeam_cards, 'localTeam_position' => number_format(round($localTeam_position)), 'visitorTeam_position' => number_format(round($visitorTeam_position)), 'localTeam_formation' => $localTeam_formation, 'visitorTeam_formation' => $visitorTeam_formation, 'localTeam_penalties' => number_format(round($localTeam_penalties)), 'visitorTeam_penalties' => number_format(round($visitorTeam_penalties)), 'localTeam_corners' => number_format(round($localTeam_corners)), 'visitorTeam_corners' => number_format(round($visitorTeam_corners)), 'eninplaytime' => $eninplaytime, 'weather_icon' => $weather_icon, 'weather_wind' => $weather_wind, 'venue_name' => $venue_name, 'venue_city' => $venue_city, 'venue_capacity' => $venue_capacity, 'weather_temperature' => $weather_temperature, 'leagua' => $matchDetails->league->data->name), JSON_UNESCAPED_UNICODE));exit();
	}
	public function moreBetsOdds($match_id, $type = 'inplay'){
		$this->load->eloquent('str');
		$this->load->helper('cookie');
		if($type == 'LIVE'){
			$url_prefix = 'odds/inplay/fixture';
		}elseif($type == 'NS'){
			$url_prefix = 'odds/fixture';
		}else{
			echo('<div class="row"><div class="alert alert-danger" style="text-align: center !important; margin-bottom: auto !important; display: block !important;">وضعیت بازی به درستی انتخاب نشده است ! لطفا در URL ها دست نبرید !</div></div>');exit();
		}
		$url_prefix = 'odds/fixture';
		$matchDetails = file_get_contents('https://soccer.sportmonks.com/api/v2.0/fixtures/' . $match_id . '?api_token=' . API_KEY . '&include=localTeam,visitorTeam,league,cards,odds&tz=' . TIMEZONE);
		$matchDetails = json_decode($matchDetails, false);
		$matchDetails = $matchDetails->data;
		$matchOdds = file_get_contents('https://soccer.sportmonks.com/api/v2.0/' . $url_prefix . '/' . $match_id . '?api_token=' . API_KEY . '&tz=' . TIMEZONE);
		$matchOdds = json_decode($matchOdds, false);
		$matchOdds = $matchOdds->data;
		$status = $matchDetails->time->status;
		$localTeam_name = $matchDetails->localTeam->data->name;
		$localTeam_name = Str::Start($localTeam_name, ' ');
		$visitorTeam_name = $matchDetails->visitorTeam->data->name;
		$visitorTeam_name = Str::Start($visitorTeam_name, ' ');
		$result = '';
		$sorted_match_odds = array();
		$sorted_match_odds_temporary = array();
		foreach($matchOdds as $key => $value){
			$odd_name = $value->name;
			$odd_name_lower = mb_strtolower($odd_name, ScriptChrst);
			$odd_name_lower = str_replace(array('/'), array(' '), $odd_name_lower);
			if($odd_name_lower != '3way result' AND $odd_name_lower != '3way result 1st half' AND $odd_name_lower != 'over under' AND $odd_name_lower != 'home away' AND $odd_name_lower != 'over under 1st half' AND $odd_name_lower != 'ht ft double' AND $odd_name_lower != 'both teams to score' AND $odd_name_lower != 'both teams to score - 1st half' AND $odd_name_lower != 'correct score' AND $odd_name_lower != 'correct score 1st half' AND $odd_name_lower != 'double chance' AND $odd_name_lower != 'double chance - 1st half' AND $odd_name_lower != 'odd even' AND $odd_name_lower != 'odd even 1st half' AND $odd_name_lower != 'home team score a goal' AND $odd_name_lower != 'away team score a goal' AND $odd_name_lower != 'total - home' AND $odd_name_lower != 'total - away' AND $odd_name_lower != 'result total goals'){
				continue;
			}else{
				if(!isset($sorted_match_odds[$value->name]) AND (!is_array($sorted_match_odds[$value->name]) OR !is_object($sorted_match_odds[$value->name])) AND !isset($sorted_match_odds_temporary[$odd_name_lower]) AND (!is_array($sorted_match_odds_temporary[$odd_name_lower]) OR !is_object($sorted_match_odds_temporary[$odd_name_lower]))){
					$sorted_match_odds[$value->name] = $value;
					$sorted_match_odds_temporary[$odd_name_lower] = $value;
				}else{
					continue;
				}
			}
		}
		unset($sorted_match_odds_temporary);
		if(!in_array($status, array('FT', 'AET', 'FT_PEN')) AND !empty($sorted_match_odds) AND (is_array($sorted_match_odds) OR is_object($sorted_match_odds))){
			ksort($sorted_match_odds);
			foreach($sorted_match_odds as $key => $value){
				$odd_name = $value->name;
				$odd_name_lower = mb_strtolower($odd_name, ScriptChrst);
				$odd_name_lower = str_replace(array('/'), array(' '), $odd_name_lower);
				$result .= '<div class="mt5 market-type"><a href="javascript:;" class="title box-title-action inplayheader"><span class="market-name"><b>' . $this->persian_translate($odd_name) . '</b></span></a><div class="odd-container odddetails">';
				sort($value->bookmaker->data[0]->odds->data);
				foreach($value->bookmaker->data[0]->odds->data as $odd){
					if($odd->label == '1' OR $odd->label == $localTeam_name){
						$odd_title = $odd_label = $localTeam_name;
					}elseif($odd->label == '2' OR $odd->label == $visitorTeam_name){
						$odd_title = $odd_label = $visitorTeam_name;
					}elseif($odd->label == 'x' OR $odd->label == 'X' OR $odd->label == 'Draw' OR $odd->label == 'draw'){
						$odd_title = $odd_label = 'مساوی';
					}else{
						$odd_label_str = Str::Start($odd->label, ' ');
						$explode_label = explode('/', $odd_label_str);
						if($odd_label_str == '1x' OR $odd_label_str == '1X' OR $explode_label[0] == $localTeam_name AND $explode_label[1] == 'Draw'){
							$odd_title = $odd_label = 'میزبان/مساوی';
						}elseif($odd_label_str == '2x' OR $odd_label_str == '2X' OR $explode_label[0] == $visitorTeam_name AND $explode_label[1] == 'Draw'){
							$odd_title = $odd_label = 'میهمان/مساوی';
						}elseif($odd_label_str == 'x1' OR $odd_label_str == 'X1' OR $explode_label[1] == $localTeam_name AND $explode_label[0] == 'Draw'){
							$odd_title = $odd_label = 'مساوی/میزبان';
						}elseif($odd_label_str == 'X2' OR $odd_label_str == 'X2' OR $explode_label[1] == $visitorTeam_name AND $explode_label[0] == 'Draw'){
							$odd_title = $odd_label = 'مساوی/میهمان';
						}elseif($odd_label_str == '21' OR $explode_label[1] == $visitorTeam_name AND $explode_label[0] == $localTeam_name){
							$odd_title = $odd_label = 'میهمان/میزبان';
						}elseif($odd_label_str == '12' OR $explode_label[0] == $visitorTeam_name AND $explode_label[1] == $localTeam_name){
							$odd_title = $odd_label = 'میزبان/میهمان';
						}elseif($odd_label_str == '11' OR $explode_label[0] == $localTeam_name AND $explode_label[1] == $localTeam_name){
							$odd_title = $odd_label = 'میزبان/میزبان';
						}elseif($odd_label_str == '22' OR $explode_label[0] == $visitorTeam_name AND $explode_label[1] == $visitorTeam_name){
							$odd_title = $odd_label = 'میهمان/میهمان';
						}elseif($odd_label_str == 'xX' OR $odd_label_str == 'Xx' OR $odd_label_str == 'XX' OR $odd_label_str == 'xx' OR $odd_label_str == 'Draw/Draw' OR ($explode_label[0] == 'Draw' AND $explode_label[1] == 'Draw')){
							$odd_title = 'مساوی/مساوی';
							$odd_label = 'مساوی/مساوی';
						}elseif(mb_strtolower($odd_label_str, ScriptChrst) == 'away'){
							$odd_title = $odd_label = $visitorTeam_name;
						}elseif(mb_strtolower($odd_label_str, ScriptChrst) == 'home'){
							$odd_title = $odd_label = $localTeam_name;
						}else{
							$odd_title = $odd_label = $this->persian_translate($odd_label_str);
						}
					}
					if(isset($odd->total) AND !empty($odd->total)){
						$odd_title = $odd_title . ' <span class="odd-line">' . $odd->total . '</span>';
					}elseif(isset($odd->handicap) AND !empty($odd->handicap)){
						$odd_title = $odd_title . ' <span class="odd-line">' . $odd->handicap . '</span>';
					}
					if($odd_name_lower == 'correct score' OR $odd_name_lower == 'correct score 1st half' OR $odd_name_lower == 'final score'){
						$odd_title = $odd_title . ' <span class="odd-line">' . $matchDetails->scores->localteam_score . ':' . $matchDetails->scores->visitorteam_score . '</span>';
					}
					if($odd->value >= 75.01){
						$odd->value = '75.00';
					}
					$caret = '';
					// $cookie_name = $matchDetails->id . '-' . $odd_name . '-' . $odd_label;
					// $cookie_name = str_replace(array(' '), array('-'), $cookie_name);
					// if(isset($_COOKIE[$cookie_name]) AND $odd->value < $_COOKIE[$cookie_name] AND $odd->value != $_COOKIE[$cookie_name] AND $odd_name != '2nd Goal'){
					// 	$caret = '<i class="fa fa-caret-down red-arrow"></i>';
					// }elseif(isset($_COOKIE[$cookie_name]) AND $odd->value > $_COOKIE[$cookie_name] AND $odd->value != $_COOKIE[$cookie_name] AND $odd_name != '2nd Goal'){
					// 	$caret = '<i class="fa fa-caret-up green-arrow"></i>';
					// }else{
					// 	$caret = '';
					// }
					// setcookie($cookie_name, $odd->value, (time() + 3600));
					$pick = $odd_label;
					if(isset($odd->total) AND !empty($odd->total)){
						$pick = $pick . ' ' . $odd->total;
					}elseif(isset($odd->handicap) AND !empty($odd->handicap)){
						$pick = $pick . ' ' . $odd->handicap;
					}
					
					if($odd_name_lower == '3way result'){
						if($match->scores->localteam_score == 1 AND $odd_label_str == $localTeam_name){
							if($match->time->minute >= 0 AND $match->time->minute < 30){
								$odd->value = $odd->value / 2;
								$odd->value = round($odd->value, 2);
							}elseif($match->time->minute >= 30 AND $match->time->minute < 45){
								$odd->value = $odd->value / 2.25;
								$odd->value = round($odd->value, 2);
							}elseif($match->time->minute >= 46 AND $match->time->minute < 70){
								$odd->value = $odd->value / 2.5;
								$odd->value = round($odd->value, 2);
							}elseif($match->time->minute >= 70){
								$odd->value = 1.1;
							}
						}elseif($match->scores->localteam_score == 2 AND $odd_label_str == $localTeam_name){
							if($match->time->minute >= 0 AND $match->time->minute < 30){
								$odd->value = $odd->value / 2.5;
								$odd->value = round($odd->value, 2);
							}elseif($match->time->minute >= 30 AND $match->time->minute < 45){
								$odd->value = $odd->value / 2.75;
								$odd->value = round($odd->value, 2);
							}elseif($match->time->minute >= 46 AND $match->time->minute < 70){
								$odd->value = $odd->value / 3;
								$odd->value = round($odd->value, 2);
							}elseif($match->time->minute >= 70){
								$odd->value = 1.1;
							}
						}elseif($match->scores->localteam_score >= 3 AND $odd_label_str == $localTeam_name){
							if($match->time->minute >= 0 AND $match->time->minute < 30){
								$odd->value = $odd->value / 3;
								$odd->value = round($odd->value, 2);
							}elseif($match->time->minute >= 30 AND $match->time->minute < 45){
								$odd->value = $odd->value / 3.25;
								$odd->value = round($odd->value, 2);
							}elseif($match->time->minute >= 46 AND $match->time->minute < 70){
								$odd->value = $odd->value / 3.5;
								$odd->value = round($odd->value, 2);
							}elseif($match->time->minute >= 70){
								$odd->value = 1.1;
							}
						}
						if($match->scores->localteam_score == $match->scores->visitorteam_score){
							if($match->time->minute >= 0 AND $match->time->minute < 30){
								$second_odd = $second_odd / 2;
								$second_odd = round($second_odd, 2);
							}elseif($match->time->minute >= 30 AND $match->time->minute < 45){
								$second_odd = $second_odd / 2.25;
								$second_odd = round($second_odd, 2);
							}elseif($match->time->minute >= 46 AND $match->time->minute < 70){
								$second_odd = $second_odd / 2.5;
								$second_odd = round($second_odd, 2);
							}elseif($match->time->minute >= 70){
								$second_odd = 1.1;
							}
						}
						if($match->scores->visitorteam_score == 1){
							if($match->time->minute >= 0 AND $match->time->minute < 30){
								$third_odd = $third_odd / 2;
								$third_odd = round($third_odd, 2);
							}elseif($match->time->minute >= 30 AND $match->time->minute < 45){
								$third_odd = $third_odd / 2.25;
								$third_odd = round($third_odd, 2);
							}elseif($match->time->minute >= 46 AND $match->time->minute < 70){
								$third_odd = $third_odd / 2.5;
								$third_odd = round($third_odd, 2);
							}elseif($match->time->minute >= 70){
								$third_odd = 1.1;
							}
						}elseif($match->scores->visitorteam_score == 2){
							if($match->time->minute >= 0 AND $match->time->minute < 30){
								$third_odd = $third_odd / 2;
								$third_odd = round($third_odd, 2);
							}elseif($match->time->minute >= 30 AND $match->time->minute < 45){
								$third_odd = $third_odd / 2.25;
								$third_odd = round($third_odd, 2);
							}elseif($match->time->minute >= 46 AND $match->time->minute < 70){
								$third_odd = $third_odd / 2.5;
								$third_odd = round($third_odd, 2);
							}elseif($match->time->minute >= 70){
								$third_odd = 1.1;
							}
						}elseif($match->scores->visitorteam_score >= 3){
							if($match->time->minute >= 0 AND $match->time->minute < 30){
								$third_odd = $third_odd / 2;
								$third_odd = round($third_odd, 2);
							}elseif($match->time->minute >= 30 AND $match->time->minute < 45){
								$third_odd = $third_odd / 2.25;
								$third_odd = round($third_odd, 2);
							}elseif($match->time->minute >= 46 AND $match->time->minute < 70){
								$third_odd = $third_odd / 2.5;
								$third_odd = round($third_odd, 2);
							}elseif($match->time->minute >= 70){
								$third_odd = 1.1;
							}
						}
					}
					$result .= '<a data-eventid="' . $matchDetails->id . '" data-runnerid="' . $matchDetails->id . '-' . $odd->value . '-' . $odd_name . '-' . $odd_label . '" data-pick="' . $pick . '" data-points="" class="inplaybtn eventodd odd-link odd-sub-button odd-' . ((count($value->bookmaker->data[0]->odds->data) % 3) == 0 ? 'triple' : 'double') . '" href="javascript:;"><div class="odd-title"><span>' . $odd_title . '</span></div><div class="odd-rate odd-main-button"><span>' . $odd->value . '</span> ' . $caret . '</div></a>';
				}
				$result .= '<div class="clear"></div></div></div>';
			}
		}else{
			$message = in_array($status, array('FT', 'AET', 'FT_PEN')) ? 'امکان شرط بستن برای بازی های تمام شده وجود ندارد' : ($status == 'NS' ? 'هیچ شرط اضافه ای برای این بازی وجود ندارد . برای ثبت شرط روی این بازی به پیش بینی پیش از بازی مراجعه کنید' : 'هیچ شرط اضافه ای برای این بازی وجود ندارد');
			$result .= '<div class="row"><div class="alert alert-info" style="text-align: center !important; margin-bottom: auto !important; display: block !important;">' . $message . '</div></div>';
		}
		echo($result);exit();
	}
	function searchArrayForKey($key, $value, $array){
		foreach($array as $index => $val){
			if($val->$key == $value){
				return $val;
			}
		}
		return null;
	}
	public function upComing($day = 0){
        date_default_timezone_set(TIMEZONE);
		$this->load->eloquent('str');
		$day = (is_numeric($day) AND !empty($day) AND $day <= 0 AND $day >= 7) ? 0 : $day;
		settype($day, 'int');
		$matches = file_get_contents(APPPATH . 'logs' . DS . 'API' . DS . 'upComing_' . $day . '.txt');
		$matches = json_decode($matches, false);
		$sorted_by_league = array();
		foreach($matches->data as $key => $value){
			$league = $value->league->data->name;
			$leagua = Str::Start($league, ' ');
			$sorted_by_league[$league][$key] = $value;
		}
		foreach($sorted_by_league as $league_key => $league_value){
		    foreach($league_value as $match_key => $match_value){
		        if(strtotime($match_value->time->starting_at->date_time) <= time()){
		            unset($sorted_by_league[$league_key][$match_key]);
		        }
		    }
		}
		foreach($sorted_by_league as $league_key => $league_value){
		    if(count($league_value) <= 0){
		        unset($sorted_by_league[$league_key]);
		    }
		}
		krsort($sorted_by_league);
		$this->smart->assign(array('matches' => $sorted_by_league, 'day' => $day, 'show_days_mobile' => 'true', 'count' => count($sorted_by_league)));
		$this->smart->view('upComing');
	}
	public function betPlace(){
		$this->load->eloquent('bet');
		$this->load->eloquent('bet_form');
		$this->load->eloquent('folds');
		$this->CI = get_instance();
		$this->CI->load->database();
		if(empty($this->user->id)){
			echo(json_encode(array('result' => 'login'), JSON_UNESCAPED_UNICODE));exit();
		}else{
			$bet_force = $this->input->post('bet_force');
			if(!in_array($bet_force, array('true', 'false'))){
				echo(json_encode(array('result' => 'bet_force_error'), JSON_UNESCAPED_UNICODE));exit();
			}else{
				$my_forms = $this->input->post('my_forms');
				$user_cash = $this->__getUserCash();
				if($user_cash <= 0){
					echo(json_encode(array('result' => 'zero_balance'), JSON_UNESCAPED_UNICODE));exit();
				}else{
					$my_mix_data = $this->input->post('my_mix_data');
					$my_mix_data = explode('/', $my_mix_data);
					$totalStake = 0;
					foreach($my_mix_data as $mix_key => $data){
						$explode = explode('-', $data);
						if(count($explode) <= 2){
							continue;
						}else{
							$stake = str_replace(array('x', ',', ' '), array('', '', ''), $explode[2]);
							$bet_count = str_replace(array('x', ',', ' '), array('', '', ''), $explode[1]);
							settype($stake, 'int');
							settype($bet_count, 'int');
							$totalStake += $stake * $bet_count;
						}
					}
					settype($totalStake, 'int');
					if($totalStake <= 999){
						echo(json_encode(array('result' => 'minimute_bet'), JSON_UNESCAPED_UNICODE));exit();
					}elseif($user_cash < $totalStake OR ($user_cash - $totalStake) <= -1){
						echo(json_encode(array('result' => 'low_balance'), JSON_UNESCAPED_UNICODE));exit();
					}else{
						foreach($my_mix_data as $mix){
							$mix_explode = explode('-', $mix);
							$mix_price = str_replace(array(',', ' '), array('', ''), $mix_explode[2]);
							settype($mix_price, 'int');
							if($mix_price <= 0){
								continue;
							}else{
								$type = str_replace(array('تایی ها'), array(''), $mix_explode[0]);
								$type = str_replace(array(' '), array(''), $type);
								$type = trim($type);
								switch($type){
									case('تکی ها'): case('تکیها'): case('1'): case(1): $my_forms_count = '1'; $form_indexs_array = Folds::calc1Fold($my_forms['data']); break;
									case('دو'): case('2'): case(2): $my_forms_count = '2'; $form_indexs_array = Folds::calc2Fold($my_forms['data']); break;
									case('سه'): case('3'): case(3): $my_forms_count = '3'; $form_indexs_array = Folds::calc3Fold($my_forms['data']); break;
									case('4'): case(4): $my_forms_count = $type; $form_indexs_array = Folds::calc4Fold($my_forms['data']); break;
									case('5'): case(5): $my_forms_count = $type; $form_indexs_array = Folds::calc5Fold($my_forms['data']); break;
									case('6'): case(6): $my_forms_count = $type; $form_indexs_array = Folds::calc6Fold($my_forms['data']); break;
									case('7'): case(7): $my_forms_count = $type; $form_indexs_array = Folds::calc7Fold($my_forms['data']); break;
									case('8'): case(8): $my_forms_count = $type; $form_indexs_array = Folds::calc8Fold($my_forms['data']); break;
								}
								foreach($form_indexs_array[0] as $bet_key => $row){
									$effective_odd = number_format($form_indexs_array[1][$bet_key], 2, '.', '');
									$bet_parent = Bet::create(array('stake' => $mix_price, 'user_id' => $this->user->id, 'type' => $my_forms_count, 'effective_odd' => $effective_odd));
									foreach($row as $bet_form_row){
										$bet_details = $my_forms['data'][$bet_form_row - 1];
										$bet_details_explode = explode('-', $bet_details['runner_id']);
										$match_details = file_get_contents('https://soccer.sportmonks.com/api/v2.0/fixtures/' . $bet_details['match_id'] . '?api_token=' . API_KEY . '&include=odds,localTeam,visitorTeam&tz=' . TIMEZONE);
										$match_details = json_decode($match_details, false);
										$match_details = $match_details->data;
										$status = $match_details->time->status;
										$status = mb_strtolower($status, ScriptChrst);
										if(!in_array($status, array('live', 'ns', 'ht', 'ns', 'ft'))){
											$this->CI->db->conn_id->query("DELETE FROM `bets` WHERE `id` = '" . $bet_parent->id . "'");
											echo(json_encode(array('result' => 'finished_match'), JSON_UNESCAPED_UNICODE));exit();
										}else{
											$bet_odd_update = 'false';
											if(isset($match_details->inplay) AND (is_array($match_details->inplay) OR is_object($match_details->inplay)) AND count((array)$match_details->inplay->data) >= 1){
												$bet_update = $this->searchArrayForKey('name', $bet_details_explode[2], $match_details->inplay->data);
												if(is_array($bet_update) OR is_object($bet_update)){
													$bet_update = $bet_update->bookmaker->data[0]->odds->data;
													$bet_odd_update = $this->searchArrayForKey('label', $bet_details_explode[3], $bet_update);
													if(is_array($bet_odd_update) OR is_object($bet_odd_update)){
														$bet_odd_update = $bet_odd_update->value;
														$bet_odd_update = round($bet_odd_update, 2);
														settype($bet_odd_update, 'float');
														if(empty($bet_odd_update) OR !is_float($bet_odd_update)){
															$bet_odd_update = 'false';
														}
													}else{
														$bet_odd_update = 'false';
													}
												}else{
													$bet_odd_update = 'false';
												}
											}
											if($bet_odd_update == 'false' AND isset($match_details->odds) AND (is_array($match_details->odds) OR is_object($match_details->odds)) AND count((array)$match_details->odds->data) >= 1){
												$bet_update = $this->searchArrayForKey('name', $bet_details_explode[2], $match_details->odds->data);
												if(is_array($bet_update) OR is_object($bet_update)){
													$bet_update = $bet_update->bookmaker->data[0]->odds->data;
													$bet_odd_update = $this->searchArrayForKey('label', $bet_details_explode[3], $bet_update);
													if(is_array($bet_odd_update) OR is_object($bet_odd_update)){
														$bet_odd_update = $bet_odd_update->value;
														$bet_odd_update = round($bet_odd_update, 2);
														settype($bet_odd_update, 'float');
														if(empty($bet_odd_update) OR !is_float($bet_odd_update)){
															$bet_odd_update = 'false';
														}
													}else{
														$bet_odd_update = 'false';
													}
												}else{
													$bet_odd_update = 'false';
												}
											}
											if($bet_odd_update != 'false' AND is_float($bet_odd_update)){
												if($bet_odd_update >= 70.01){
													$bet_odd_update = 75;
												}
											}
											if($bet_odd_update != $bet_details['odd'] AND $bet_force == 'false'){
												$this->CI->db->conn_id->query("DELETE FROM `bets` WHERE `id` = '" . $bet_parent->id . "'");
												echo(json_encode(array('result' => 'odd_change'), JSON_UNESCAPED_UNICODE));exit();
											}else{
												Bet_form::create(array('match_id' => $bet_details['match_id'], 'odd' => $bet_details['odd'], 'home_team' => $match_details->localTeam->data->name, 'away_team' => $match_details->visitorTeam->data->name, 'bet_type' => $bet_details_explode[2], 'bookmaker_id' => $bet_details_explode[1], 'home_score' => $match_details->scores->localteam_score, 'away_score' => $match_details->scores->visitorteam_score, 'status' => $match_details->time->status, 'odd_label' => $bet_details_explode[3], 'pick' => $bet_details['pick'], 'bets_id' => $bet_parent->id, 'bets_user_id' => $this->user->id, 'type' => $type));
											}
										}
									}
									$this->__updateUserCash($mix_price, $bet_parent->id);
								}
							}
						}
						echo(json_encode(array('result' => 'success', 'new_cash' => $this->price_format($this->__getUserCash())), JSON_UNESCAPED_UNICODE));exit();
					}
				}
			}
		}
	}
	public function myRecords(){
		$this->checkAuth(true);
		$this->load->eloquent('bet');
		$this->load->eloquent('bet_form');
		$myRecords = Bet::where('user_id', $this->user->id)->orderBy('id', 'desc')->get();
		$this->smart->assign(array('myRecords' => $myRecords, 'title' => 'پیش بینی های من'));
		$this->smart->view('myBets');
	}
	public function BetDetail($bet_id){
		$this->checkAuth(true);
		$this->load->eloquent('bet');
		$this->load->eloquent('bet_form');
		$betRecord = Bet::where('user_id', $this->user->id)->where('id', $bet_id)->first();
		$this->smart->assign(array('betRecord' => $betRecord, 'bet_id' => $bet_id, 'title' => 'جزئیات پیش بینی'));
		$this->smart->view('betDetail');
	}
}
?>