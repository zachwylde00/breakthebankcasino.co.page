<?php
class Users extends Public_Controller{
	public $now_time;
	public $one_year;
	public $cookies_time;
	public $validation_rules = array(
		'login' => array(array('field' => 'email', 'rules' => 'htmlspecialchars|trim'), array('field' => 'password', 'rules' => 'htmlspecialchars|trim')),
		'register' => array(array('field' => 'password', 'rules' => 'htmlspecialchars|trim'), array('field' => 'email', 'rules' => 'htmlspecialchars|trim'), array('field' => 'first_name', 'rules' => 'htmlspecialchars|trim'), array('field' => 'last_name', 'rules' => 'htmlspecialchars|trim'), array('field' => 'mobile', 'rules' => 'htmlspecialchars|trim')),
		'resetPasswordByEmail' => array(array('field' => 'new_password', 'rules' => 'htmlspecialchars|trim'), array('field' => 're_new_password', 'rules' => 'htmlspecialchars|trim')),
		'profile' => array(array('field' => 'current_password', 'rules' => 'htmlspecialchars|trim'), array('field' => 'new_password', 'rules' => 'htmlspecialchars|trim'), array('field' => 're_new_password', 'rules' => 'htmlspecialchars|trim')),
		'resetPassword' => array(array('field' => 'email', 'rules' => 'htmlspecialchars|trim')),
		'changeProfile' => array(array('field' => 'username', 'rules' => 'htmlspecialchars|trim')),
		'withdraw' => array(array('field' => 'amount', 'rules' => 'htmlspecialchars|trim'), array('field' => 'sheba', 'rules' => 'htmlspecialchars|htmlspecialchars|trim'), array('field' => 'bank_name', 'rules' => 'htmlspecialchars|htmlspecialchars|trim'), array('field' => 'account_number', 'rules' => 'htmlspecialchars|htmlspecialchars|trim'), array('field' => 'card_number', 'rules' => 'htmlspecialchars|htmlspecialchars|trim'))
	);
	public function __construct(){
		parent::__construct();
		$this->now_time = time();
		$this->one_year = 86400 * 365;
		$this->cookies_time = $this->now_time + $this->one_year;
		$this->load->sentinel();
		$this->load->eloquent('user');
		$this->load->eloquent('settings/setting');
		$this->load->helper('cookie');
		$this->load->helper('security');
		if(!empty($this->message->get_message())){
			define('get_message', $this->message->get_message());
			$this->message->clear_message();
		}else{
			define('get_message', '');
			$this->message->clear_message();
		}
	}
	public function casino(){
		$this->smart->view('casino');
	}
	public function help($help_id = 0){
		$help_id = $this->input->xss_clean($help_id);
		$help_file = in_array($help_id, array('100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112')) ? $help_id : 'default';
		$this->smart->view('help/' . $help_file);
	}
	public function activeAccount($user_id, $activation_code){
		$this->CI = get_instance();
		$this->CI->load->database();
		$query_check_user = $this->CI->db->conn_id->query("SELECT * FROM `activations` WHERE `user_id` = '" . $user_id . "'");
		if($query_check_user->num_rows <= 0){
			$this->message->set_message('این حساب کاربری در سیستم ما وجود ندارد', 'fail', 'ورود', 'users/login')->redirect();
		}else{
			$row_check_user = $query_check_user->fetch_array(1);
			if($row_check_user['completed'] != 0){
				$this->message->set_message('این حساب کاربری قبلا در سیستم فعال شده است و دیگر نیازی به فعالسازی ندارد', 'fail', 'ورود', 'users/login')->redirect();
			}else{
				$query_user = $this->CI->db->conn_id->query("SELECT * FROM `users` WHERE `id` = '" . $row_check_user['user_id'] . "'");
				if($query_user->num_rows <= 0){
					$this->message->set_message('این حساب کاربری در سیستم ما وجود ندارد', 'fail', 'ورود', 'users/login')->redirect();
				}else{
					if($activation_code != $row_check_user['code']){
						$this->message->set_message('لینک وارد شده معتبر نمی باشد. در صورتی که در فعالسازی اکانت خود به مشکل خورده اید با مدیریت تماس بگیرید', 'fail', 'ورود', 'users/login')->redirect();
					}else{
						$row_user = $query_user->fetch_array(1);
						$this->CI->db->conn_id->query("UPDATE `users` SET `status` = '1' WHERE `id` = '" . $row_check_user['user_id'] . "'");
						$this->CI->db->conn_id->query("UPDATE `activations` SET `completed` = '1', `completed_at` = '" . date('Y-m-d H:i:s', time()) . "', `updated_at` = '" . date('Y-m-d H:i:S', time()) . "' WHERE `id` = '" . $row_check_user['id'] . "'");
						include_once(APPPATH . '/libraries/PHPMailer/class.phpmailer.php');
						include_once(APPPATH . '/libraries/PHPMailer/class.smtp.php');
						try{
							$link_active = site_url('users/activeAccount/' . $row_check_user['user_id'] . '/' . $row_check_user['code']);
							$body = '<html><body><table style="width:100%;"><tbody><td><div><div style="direction:rtl;text-align:right;font-family:Tahoma;font-size:8pt;background-color:White"><div style="width:100%;margin:0;padding:0;background-color:#f5f5f5"><div style="display:block;min-height:5px;background-color:#29B6F6"></div><table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%"><tbody><tr><td align="center" valign="top" style="border-collapse:collapse;color:#525252;border-radius:6px"><table border="0" cellpadding="0" cellspacing="0" width="90%"><tbody><tr><td align="center" height="38" style="border-collapse:collapse;color:#525252"></td></tr><tr><td align="center" valign="top" style="border-collapse:collapse;color:#525252"><table width="100%" valign="top" border="0" cellpadding="0" cellspacing="0"> <tbody><tr> <td width="100%" style="direction:rtl;border-collapse:collapse;color:#525252;padding:10px;background-color:rgb(255,255,255);border-color:rgb(221,221,221);border-width:1px;border-radius:5px;border-style:solid;font-size:8pt;padding:15px 40px!important" align="justify" dir="rtl" valign="top"><table dir="rtl" style="direction:rtl"> <tbody><tr> <td style="border-collapse:collapse;color:#525252;padding:0px!important;text-align:justify;direction:rtl;font-family:Tahoma;line-height:20px;font-size:8pt" align="right" valign="top"><font color="#550055"><div dir="rtl">حساب کاربری شما در تاریخ ' . Miladr\Jalali\jDateTime::date('l d F Y ساعت H:i:s', time()) . ' با موفقیت فعال شد<br><br>اکنون می توانید وارد حساب کاربری خود شوید<br><br>با تشکر از همراهی شما با مجموعه سایت ما</div></font></td></tr></tbody></table></td> </tr></tbody></table></td></tr><tr><td style="border-collapse:collapse;color:#525252"><table width="100%" border="0" style="font-size:8pt;line-height:15px;color:#999;text-align:right;direction:rtl"><tbody><tr><td width="30px" style="border-collapse:collapse;color:#525252"><br><br></td><td style="border-collapse:collapse;color:#525252;font-family:Tahoma;font-size:7pt"><br>این ایمیل به صورت خودکار و از طرف سیستم برای شما ارسال شده است<br>لطفا از ارسال پاسخ برای آن خودداری فرمایید و جهت هرگونه پرسش و پاسخ از طریق محیط کاربری => سیستم پشتیبانی اقدام فرمایید<br> </td></tr></tbody></table></td></tr><tr><td align="center" valign="top" height="30" style="border-collapse:collapse;color:#525252"></td></tr></tbody></table></td></tr></tbody></table></div></div></div></td></tbody></table></body></html>';
							$mail = new PHPMailer(true);
							$mail->IsSMTP();
							$mail->Host = MAIL_SENDER_SERVER;
							$mail->SMTPAuth = true;
							$mail->SMTPSecure = false;
							$mail->Port = 25;
							$mail->Username = MAIL_SENDER_USERNAME;
							$mail->Password = MAIL_SENDER_PASSWORD;
							$mail->AddAddress($row_user['email']);
							$mail->SetFrom(MAIL_SENDER_USERNAME, MAIL_SENDER_NAME);
							$mail->Subject = 'تاییدیه فعالسازی حساب';
							$mail->AltBody = 'مرورگر شما از این قابلیت پشتیبانی نمی کند . لطفا مرورگر خود را بروز رسانی کنید';
							$mail->CharSet = 'utf-8';
							$mail->ContentType = 'text/html';
							$mail->MsgHTML($body);
							$mail->isHTML(true);
							$mail->Send();
							$this->message->set_message('حساب کاربری شما با موفقیت فعال شد. اکنون می توانید وارد حساب کاربری خود شوید', 'success', 'ورود', 'users/login')->redirect();
						} catch(phpmailerException $error){
							print_r($error);exit();
						} catch(Exception $error){
							print_r($error);exit();
						}
					}
				}
			}
		}
	}
	public function activationEmailSend($user_id, $send_type){
		$this->CI = get_instance();
		$this->CI->load->database();
		$query_check_user = $this->CI->db->conn_id->query("SELECT * FROM `activations` WHERE `user_id` = '" . $user_id . "'");
		if($query_check_user->num_rows <= 0){
			$this->message->set_message('این حساب کاربری در سیستم ما وجود ندارد', 'fail', 'ورود', 'users/login')->redirect();
		}else{
			$row_check_user = $query_check_user->fetch_array(1);
			if($row_check_user['completed'] != 0){
				$this->message->set_message('این حساب کاربری قبلا در سیستم فعال شده است و دیگر نیازی به فعالسازی ندارد', 'fail', 'ورود', 'users/login')->redirect();
			}else{
				$query_user = $this->CI->db->conn_id->query("SELECT * FROM `users` WHERE `id` = '" . $row_check_user['user_id'] . "'");
				if($query_user->num_rows <= 0){
					$this->message->set_message('این حساب کاربری در سیستم ما وجود ندارد', 'fail', 'ورود', 'users/login')->redirect();
				}else{
					$row_user = $query_user->fetch_array(1);
					include_once(APPPATH . '/libraries/PHPMailer/class.phpmailer.php');
					include_once(APPPATH . '/libraries/PHPMailer/class.smtp.php');
					try{
						$link_active = site_url('users/activeAccount/' . $row_check_user['user_id'] . '/' . $row_check_user['code']);
						$body = '<html><body><table style="width:100%;"><tbody><td><div><div style="direction:rtl;text-align:right;font-family:Tahoma;font-size:8pt;background-color:White"><div style="width:100%;margin:0;padding:0;background-color:#f5f5f5"><div style="display:block;min-height:5px;background-color:#29B6F6"></div><table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%"><tbody><tr><td align="center" valign="top" style="border-collapse:collapse;color:#525252;border-radius:6px"><table border="0" cellpadding="0" cellspacing="0" width="90%"><tbody><tr><td align="center" height="38" style="border-collapse:collapse;color:#525252"></td></tr><tr><td align="center" valign="top" style="border-collapse:collapse;color:#525252"><table width="100%" valign="top" border="0" cellpadding="0" cellspacing="0"> <tbody><tr> <td width="100%" style="direction:rtl;border-collapse:collapse;color:#525252;padding:10px;background-color:rgb(255,255,255);border-color:rgb(221,221,221);border-width:1px;border-radius:5px;border-style:solid;font-size:8pt;padding:15px 40px!important" align="justify" dir="rtl" valign="top"><table dir="rtl" style="direction:rtl"> <tbody><tr> <td style="border-collapse:collapse;color:#525252;padding:0px!important;text-align:justify;direction:rtl;font-family:Tahoma;line-height:20px;font-size:8pt" align="right" valign="top"><font color="#550055"><div dir="rtl">یک حساب کاربری برای ایمیل شما در سایت ما ثبت شده است<br><br>برای فعالسازی حساب کاربری خود روی <a href="' . $link_active . '" target="_blank">این لینک</a> کلیک کنید<br><br>اگر به هر دلیلی لینک بالا برای شما باز نمی شود لینک زیر رادر URL مرورگر خود وارد کنید<br>' . $link_active . '<br><br>با تشکر از همراهی شما با مجموعه سایت ما</div></font></td></tr></tbody></table></td> </tr></tbody></table></td></tr><tr><td style="border-collapse:collapse;color:#525252"><table width="100%" border="0" style="font-size:8pt;line-height:15px;color:#999;text-align:right;direction:rtl"><tbody><tr><td width="30px" style="border-collapse:collapse;color:#525252"><br><br></td><td style="border-collapse:collapse;color:#525252;font-family:Tahoma;font-size:7pt"><br>این ایمیل به صورت خودکار و از طرف سیستم برای شما ارسال شده است<br>لطفا از ارسال پاسخ برای آن خودداری فرمایید و جهت هرگونه پرسش و پاسخ از طریق محیط کاربری => سیستم پشتیبانی اقدام فرمایید<br> </td></tr></tbody></table></td></tr><tr><td align="center" valign="top" height="30" style="border-collapse:collapse;color:#525252"></td></tr></tbody></table></td></tr></tbody></table></div></div></div></td></tbody></table></body></html>';
						$mail = new PHPMailer(true);
						$mail->IsSMTP();
						$mail->Host = MAIL_SENDER_SERVER;
						$mail->SMTPAuth = true;
						$mail->SMTPSecure = false;
						$mail->Port = 25;
						$mail->Username = MAIL_SENDER_USERNAME;
						$mail->Password = MAIL_SENDER_PASSWORD;
						$mail->AddAddress($row_user['email']);
						$mail->SetFrom(MAIL_SENDER_USERNAME, MAIL_SENDER_NAME);
						$mail->Subject = 'اطلاعات حساب کاربری';
						$mail->AltBody = 'مرورگر شما از این قابلیت پشتیبانی نمی کند . لطفا مرورگر خود را بروز رسانی کنید';
						$mail->CharSet = 'utf-8';
						$mail->ContentType = 'text/html';
						$mail->MsgHTML($body);
						$mail->isHTML(true);
						$mail->Send();
						$message = $send_type == 'resend' ? 'ایمیل فعالسازی حساب کاربری مجددا به ایمیل شما ارسال شد. لطفا پوشه Junk و Spam ایمیل خود را نیز چک کنید' : 'حساب کاربری شما با موفقیت ساخته شد. اکنون می بایست حساب خود را فعال کنید<br>ایمیل فعالسازی برای حساب کاربری شما به ایمیلتان ارسال شد. لطفا پوشه Junk و Spam خود را نیز چک کنید';
						$this->message->set_message($message, 'success', 'ورود', 'users/login')->redirect();
					} catch(phpmailerException $error){
						print_r($error);exit();
					} catch(Exception $error){
						print_r($error);exit();
					}
				}
			}
		}
	}
	public function login(){
		$redirect_to = $this->session->userdata('requested_url');
		$redirect_to = empty($redirect) ? $redirect = '/dashboard' : $redirect_to;
		($this->sentinel->check()) ? redirect('dashboard') : '';
		if($_SERVER['REQUEST_METHOD'] == 'POST' AND count($_POST) >= 1){
			$errors = array();
			$email = $this->input->post('email');
			$password = $this->input->post('password');
			(empty($email)) ? $errors[] = 'وارد کردن ایمیل الزامیست' : '';
			(!filter_var($email, FILTER_VALIDATE_EMAIL) AND !empty($email)) ? $errors[] = 'ایمیل وارد شده معتبر نمی باشد . لطفا ایمیل دیگری وارد کنید' : '';
			(empty($password)) ? $errors[] = 'وارد کردن کلمه  عبور الزامیست' : '';
			if(count($errors) >= 1){
				$this->message->set_message(join('<br>', $errors), 'fail', 'ورود', 'users/login')->redirect();
			}else{
				if($this->formValidate()){
					$credentials = array('email' => $email, 'password' => $password);
					$remember_me = $this->input->post('remember_me');
					$auth_user = $this->sentinel->authenticate($credentials);
					if($auth_user == true){
						(isset($remember_me) AND !empty($remember_me)) ? setcookie('auto_login', $credentials['email'] . '{{TkStar_Cookie}}' . $credentials['password'], $this->cookies_time, '/') : setcookie('auto_login', '', $this->cookies_time, '/');
						setcookie('username', $credentials['email'], $this->cookies_time, '/');
						setcookie('username', $credentials['email'], $this->cookies_time, '/casino/');
						setcookie('password', $credentials['password'], $this->cookies_time, '/');
						setcookie('password', $credentials['password'], $this->cookies_time, '/casino/');
						setcookie('login_bet', 'true', $this->cookies_time, '/');
						setcookie('login_bet', 'true', $this->cookies_time, '/casino/');
						setcookie('always_id_for_casino', $auth_user->id, $this->cookies_time, '/');
						setcookie('always_id_for_casino', $auth_user->id, $this->cookies_time, '/casino/');
						if($this->uri->segment(1) == ADMIN_PATH){
							redirect(site_url(ADMIN_PATH));
						}else{
							redirect($redirect_to);
						}
					}else{
						$this->message->set_message('مشخصات وارد شده صحیح نمی باشد . لطفا ایمیل و کلمه عبور خود را بررسی کنید و مجددا تلاش فرمایید', 'fail', 'ورود', 'users/login')->redirect();
					}
				}
			}
		}else{
			if($this->uri->segment(1) == ADMIN_PATH){
				$this->smart->assign(array( 'title' => 'ورود به پنل مدیریت'));
				$this->smart->load('default', true);
				$this->smart->setLayout('login_layout');
				$this->smart->view('login');
			}else{
				$this->smart->assign(array('loginaction' => site_url('users/login'), 'registeraction' => site_url('users/register')));
				$this->smart->view('login');
			}
		}
	}
	public function register($referral_id = '0'){
		$this->CI = get_instance();
		$this->CI->load->database();
		($this->sentinel->check()) ? redirect('dashboard') : '';
		if($_SERVER['REQUEST_METHOD'] == 'POST' AND count($_POST) >= 1){
			$errors = array();
			$referral_id = (empty($referral_id) OR !is_numeric($referral_id) OR $referral_id <= 0) ? 0 : $referral_id;
			$first_name = $this->input->post('first_name');
			$last_name = $this->input->post('last_name');
			$email = $this->input->post('email');
			$mobile = $this->input->post('mobile');
			$mobile = str_replace(array('(', ')', ' ', '+'), array('', '', '', ''), $mobile);
			$mobile = (mb_substr($mobile, 0, 1, 'utf-8') == 0 OR mb_substr($mobile, 0, 1, 'utf-8') == '0') ? mb_substr($mobile, 1, (strlen($mobile) - 1), 'utf-8') : $mobile;
			$mobile = (mb_substr($mobile, 0, 2, 'utf-8') == 98 OR mb_substr($mobile, 0, 1, 'utf-8') == '98') ? mb_substr($mobile, 2, (strlen($mobile) - 2), 'utf-8') : $mobile;
			$password = $this->input->post('password');
			$confirmPassword = $this->input->post('confirmPassword');
			(empty($first_name)) ? $errors[] = 'وارد کردن نام الزامیست' : '';
			(empty($last_name)) ? $errors[] = 'وارد کردن نام خانوادگی الزامیست' : '';
			(empty($email)) ? $errors[] = 'وارد کردن ایمیل الزامیست' : '';
			(!filter_var($email, FILTER_VALIDATE_EMAIL) AND !empty($email)) ? $errors[] = 'ایمیل وارد شده معتبر نمی باشد . لطفا ایمیل دیگری وارد کنید' : '';
			$query_check_email = $this->CI->db->conn_id->query("SELECT * FROM `users` WHERE `email` = '" . $email . "'");
			($query_check_email->num_rows >= 1 AND filter_var($email, FILTER_VALIDATE_EMAIL) AND !empty($email)) ? $errors[] = 'ایمیل وارد شده قبلا در سیستم ما ثبت شده است . لطفا ایمیل دیگری وارد کنید' : '';
			(empty($mobile)) ? $errors[] = 'وارد کردن شماره موبایل الزامیست' : '';
			((strlen($mobile) <= 9 OR !is_numeric($mobile)) AND !empty($mobile)) ? $errors[] = 'شماره موبایل وارد شده معتبر نمی باشد' : '';
			$query_check_phone = $this->CI->db->conn_id->query("SELECT * FROM `users` WHERE `mobile` = '0" . $mobile . "'");
			($query_check_phone->num_rows >= 1 AND strlen($mobile) == 10 AND is_numeric($mobile) AND !empty($mobile)) ? $errors[] = 'شماره موبایل وارد شده قبلا در سیستم ما ثبت شده است . لطفا شماره موبایل دیگری وارد کنید' : '';
			(empty($password)) ? $errors[] = 'وارد کردن کلمه  عبور الزامیست' : '';
			(empty($confirmPassword)) ? $errors[] = 'وارد کردن تکرار کلمه عبور الزامیست' : '';
			(!empty($password) AND !empty($confirmPassword) AND ($password != $confirmPassword OR md5($password) != md5($confirmPassword))) ? $errors[] = 'کلمه عبور های وارد شده با هم مطابقت ندارند' : '';
			if(count($errors) >= 1){
				$this->message->set_message(join('<br>', $errors), 'fail', 'ثبت نام', 'users/register/' . $referral_id)->redirect();
			}else{
				if($this->formValidate()){
					$credentials = array('email' => $email, 'ref_id' => $referral_id, 'username' => $email, 'password' => $password, 'mobile' => '0' . $mobile, 'first_name' => $first_name, 'last_name' => $last_name, 'status' => '0');
					if($this->sentinel->validForCreation($credentials)){
						$user = $this->sentinel->register($credentials, false);
						if($user){
							header('Location: ' . site_url('users/activationEmailSend/' . $user->id . '/new'));exit();
						}else{
							$this->message->set_message('متاسفانه مشکلی در ثبت کاربر به وجود آمده است . لطفا چند ساعت دیگر مجددا تلاش فرمایید', 'warning', 'ثبت نام', 'users/register/' . $referral_id)->redirect();
						}
					}
				}else{
					$this->message->set_message('متاسفانه مشکلی در ثبت کاربر به وجود آمده است . لطفا چند ساعت دیگر مجددا تلاش فرمایید', 'warning', 'ثبت نام', 'users/register/' . $referral_id)->redirect();
				}
			}
		}
		$this->smart->assign(array('title' => 'ثبت نام', 'action' => 'users/register/' . $referral_id));
		$this->smart->view('register');
	}
	public function profile(){
		(!$this->sentinel->check()) ? redirect('users/login') : '';
		if($_SERVER['REQUEST_METHOD'] == 'POST' AND count($_POST) >= 1){
			$current_password = $this->input->post('current_password');
			$new_password = $this->input->post('new_password');
			$re_new_password = $this->input->post('re_new_password');
			$errors = array();
			(empty($current_password)) ? $errors[] = 'وارد کردن کلمه عبور فعلی الزامیست' : '';
			(empty($new_password)) ? $errors[] = 'وارد کردن کلمه عبور جدید الزامیست' : '';
			(empty($re_new_password)) ? $errors[] = 'وارد کردن تکرار کلمه عبور جدید الزامیست' : '';
			(!empty($new_password) AND !empty($re_new_password) AND ($new_password != $re_new_password OR md5($new_password) != md5($re_new_password))) ? $errors[] = 'کلمه عبور های جدید وارد شده با هم مطابقت ندارند' : '';
			$validation = $this->sentinel->validateCredentials($this->user, array('email' => $this->user->email, 'password' => $current_password));
			(!$validation OR $validation !== true) ? $errors[] = 'کلمه عبور فعلی وارد شده معتبر نمی باشد' : '';
			$reminder = $this->sentinel->getReminderRepository()->create($this->user);
			if(count($errors) >= 1){
				$this->message->set_message(join('<br>', $errors), 'fail', 'ثبت نام', 'users/profile')->redirect();
			}else{
				if($this->formValidate()){
					$this->sentinel->getReminderRepository()->complete($this->user, $reminder->code, $new_password);
					$user = $this->sentinel->check();
					$this->sentinel->logout($user);
					setcookie('auto_login', '', $this->cookies_time, '/');
					setcookie('tkstar_script_id', '', (time() - 1000000), '/');
					setcookie('tkstar_script_id', '', (time() - 1000000), '/casino/');
					setcookie('login_bet', '', (time() - 1000000), '/');
					setcookie('login_bet', '', (time() - 1000000), '/casino/');
					setcookie('always_id_for_casino', '', (time() - 100000), '/');
					setcookie('always_id_for_casino', '', (time() - 100000), '/casino/');
					$this->message->set_message('کلمه عبور شما با موفقیت تغییر کرد . اکنون می بایست با کلمه عبور جدید خود وارد محیط کاربری شوید', 'success', 'ورود به حساب کاربری', 'users/login')->redirect();
				}else{
					$this->message->set_message('متاسفانه مشکلی در هنگام ویرایش پروفایل به وجود آمده است . لطفا چند دقیقه دیگر مجددا تلاش فرمایید', 'fail', 'پروفایل من', 'users/profile')->redirect();
				}
			}
		}else{
			$my_mobile = $this->user->mobile;
			$my_mobile = (empty($my_mobile) OR !is_string($my_mobile)) ? 'وارد نشده !' : $my_mobile;
			$my_mobile = (mb_substr($my_mobile, 0, 1, 'utf-8') == '0' OR mb_substr($my_mobile, 0, 1, 'utf-8') == 0) ? mb_substr($my_mobile, 1, (strlen($my_mobile) - 1), 'utf-8') : $my_mobile;
			$my_mobile_real = $my_mobile;
			$my_mobile = array();
			$my_mobile['first'] = mb_substr($my_mobile_real, 0, 3, 'utf-8');
			$my_mobile['second'] = mb_substr($my_mobile_real, 3, 3, 'utf-8');
			$my_mobile['third'] = mb_substr($my_mobile_real, 6, 4, 'utf-8');
			$my_mobile = '+(98) ' . join(' ', $my_mobile);
			$this->smart->assign(array('title' => 'پروفایل من', 'my' => $this->user, 'my_mobile' => $my_mobile));
			$this->smart->view('profile');
		}
	}
	public function changeProfile(){
		(!$this->sentinel->check()) ? redirect('users/login') : '';
		if($_SERVER['REQUEST_METHOD'] == 'POST' AND count($_POST) >= 1){
			$username = $this->input->post('username');
			(empty($username)) ? $errors[] = 'وارد کردن نام مستعار الزامیست' : '';
			$this->CI = get_instance();
			$this->CI->load->database();
			$query_check_username = $this->CI->db->conn_id->query("SELECT * FROM `users` WHERE `username` = '" . $username . "' AND `username` != '" . $this->user->username . "'");
			($query_check_username->num_rows >= 1 AND !empty($username)) ? $errors[] = 'این نام مستعار متعلق به کاربر دیگری است' : '';
			if(count($errors) >= 1){
				$this->message->set_message(join('<br>', $errors), 'fail', 'ثبت نام', 'users/profile')->redirect();
			}else{
				if($this->formValidate()){
					$this->CI->db->conn_id->query("UPDATE `users` SET `username` = '" . $username . "' WHERE `id` = '" . $this->user->id . "'");
					$this->message->set_message('نام مستعار شما با موفقیت تغییر کرد', 'success', 'پروفایل من', 'users/profile')->redirect();
				}else{
					$this->message->set_message('متاسفانه مشکلی در تغییر پروفایل شما پیش آمده است . لطفا دقایقی دیگر مجددا تلاش فرمایید', 'fail', 'پروفایل من', 'users/profile')->redirect();
				}
			}
		}else{
			redirect('users/profile');
		}
	}
	public function logout(){
		if($user = $this->sentinel->check()){
			$this->sentinel->logout($user);
			setcookie('auto_login', '', $this->cookies_time, '/');
			setcookie('tkstar_script_id', '', (time() - 1000000), '/');
			setcookie('tkstar_script_id', '', (time() - 1000000), '/casino/');
			setcookie('login_bet', '', (time() - 1000000), '/');
			setcookie('login_bet', '', (time() - 1000000), '/casino/');
			setcookie('always_id_for_casino', '', (time() - 100000), '/');
			setcookie('always_id_for_casino', '', (time() - 100000), '/casino/');
			if($this->uri->segment(1) == ADMIN_PATH){
				redirect(ADMIN_PATH . '/users/login');
			}else{
				redirect('users/login');
			}
		}else{
			redirect('/');
		}
	}
	public function resetPassword(){
		($this->sentinel->check()) ? redirect('dashboard') : '';
		if($_SERVER['REQUEST_METHOD'] == 'POST' AND count($_POST) >= 1){
			$errors = array();
			$email = $this->input->post('email');
			(empty($email)) ? $errors[] = 'وارد کردن ایمیل الزامیست' : '';
			(!filter_var($email, FILTER_VALIDATE_EMAIL) AND !empty($email)) ? $errors[] = 'ایمیل وارد شده معتبر نمی باشد . لطفا ایمیل دیگری وارد کنید' : '';
			if(count($errors) >= 1){
				$this->message->set_message(join('<br>', $errors), 'fail', 'ثبت نام', 'users/resetPassword')->redirect();
			}else{
				if($this->formValidate()){
					$user = $this->sentinel->getUserRepository();
					$user = $user->findByCredentials(array('email' => $email));
					if(!empty($user)){
						$reminder = $this->sentinel->getReminderRepository();
						$new_reminder = $reminder->create($user);
						if($this->sendEmailReminder($user, $new_reminder)){
							$this->message->set_message('یک ایمیل حاوی لینک بازیابی کلمه عبور برای ایمیل شما ارسال شد . در صورت عدم مشاهده پوشه Spam خود را چک کنید', 'success', 'بازیابی کلمه عبور', 'users/resetPassword')->redirect();
						}else{
							$this->message->set_message('خطایی هنگام ارسال ایمیل بازیابی کلمه عبور پیش آمده است . لطفا دقایقی دیگر مجددا تلاش فرمایید', 'fail', 'بازیابی کلمه عبور', 'users/resetPassword')->redirect();
						}
					}else{
						$this->message->set_message('ایمیل وارد شده در سیستم ما ثبت نشده است', 'fail', 'بازیابی کلمه عبور', 'users/resetPassword')->redirect();
					}
				}else{
					$this->message->set_message('خطایی هنگام ارسال ایمیل بازیابی کلمه عبور پیش آمده است . لطفا دقایقی دیگر مجددا تلاش فرمایید', 'fail', 'بازیابی کلمه عبور', 'users/resetPassword')->redirect();
				}
			}
		}else{
			$this->smart->view('reset_password');
		}
	}
	public function sendEmailReminder($user, $Reminder){
		include_once(APPPATH . '/libraries/PHPMailer/class.phpmailer.php');
		include_once(APPPATH . '/libraries/PHPMailer/class.smtp.php');
		try{
			$showLink = site_url('users/resetPasswordByEmail/' . $user->id . '/' . $Reminder->code);
			$body = '<html><body><table style="width:100%;"><tbody><td><div><div style="direction:rtl;text-align:right;font-family:Tahoma;font-size:8pt;background-color:White"><div style="width:100%;margin:0;padding:0;background-color:#f5f5f5"><div style="display:block;min-height:5px;background-color:#29B6F6"></div><table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%"><tbody><tr><td align="center" valign="top" style="border-collapse:collapse;color:#525252;border-radius:6px"><table border="0" cellpadding="0" cellspacing="0" width="90%"><tbody><tr><td align="center" height="38" style="border-collapse:collapse;color:#525252"></td></tr><tr><td align="center" valign="top" style="border-collapse:collapse;color:#525252"><table width="100%" valign="top" border="0" cellpadding="0" cellspacing="0"> <tbody><tr> <td width="100%" style="direction:rtl;border-collapse:collapse;color:#525252;padding:10px;background-color:rgb(255,255,255);border-color:rgb(221,221,221);border-width:1px;border-radius:5px;border-style:solid;font-size:8pt;padding:15px 40px!important" align="justify" dir="rtl" valign="top"><table dir="rtl" style="direction:rtl"> <tbody><tr> <td style="border-collapse:collapse;color:#525252;padding:0px!important;text-align:justify;direction:rtl;font-family:Tahoma;line-height:20px;font-size:8pt" align="right" valign="top"><font color="#550055"><div dir="rtl">یک درخواست برای تغییر کلمه عبور حساب کاربری شما توسط ما دریافت شده است<br>جهت تغییر کلمه عبور حساب کاربری خود, روی <a href="' . $showLink . '" target="_blank">این لینک</a> کلیک کنید<br><br>اگر به هر دلیلی لینک بالا برای شما باز نمی شود, لینک زیر را در URL مرورگر خود وارد کنید:<br>' . $showLink . '<br><br>از همراهی شما با مجموعه BWin7 خرسندیم, از اینکه مجموعه ما را انتخاب کرده اید به خود می بالیم</div></font></td></tr></tbody></table></td> </tr></tbody></table></td></tr><tr><td style="border-collapse:collapse;color:#525252"><table width="100%" border="0" style="font-size:8pt;line-height:15px;color:#999;text-align:right;direction:rtl"><tbody><tr><td width="30px" style="border-collapse:collapse;color:#525252"><br><br></td><td style="border-collapse:collapse;color:#525252;font-family:Tahoma;font-size:7pt"><br>این ایمیل به صورت خودکار و از طرف سیستم برای شما ارسال شده است<br>لطفا از ارسال پاسخ برای آن خودداری فرمایید و جهت هرگونه پرسش و پاسخ از طریق محیط کاربری => سیستم پشتیبانی اقدام فرمایید<br> </td></tr></tbody></table></td></tr><tr><td align="center" valign="top" height="30" style="border-collapse:collapse;color:#525252"></td></tr></tbody></table></td></tr></tbody></table></div></div></div></td></tbody></table></body></html>';
			$mail = new PHPMailer(true);
			$mail->IsSMTP();
			$mail->Host = MAIL_SENDER_SERVER;
			$mail->SMTPAuth = true;
			$mail->SMTPSecure = false;
			$mail->Port = 587;
			$mail->Username = MAIL_SENDER_USERNAME;
			$mail->Password = MAIL_SENDER_PASSWORD;
			$mail->AddAddress($user->email);
			$mail->SetFrom(MAIL_SENDER_USERNAME, MAIL_SENDER_NAME);
			$mail->Subject = 'فراموشی کلمه عبور';
			$mail->AltBody = 'مرورگر شما از این قابلیت پشتیبانی نمی کند . لطفا مرورگر خود را بروز رسانی کنید';
			$mail->CharSet = 'utf-8';
			$mail->ContentType = 'text/html';
			$mail->MsgHTML($body);
			$mail->isHTML(true);
			$mail->Send();
			return true;
		} catch(phpmailerException $error){
			print_r($error);exit();
		} catch(Exception $error){
			print_r($error);exit();
		}
	}
	public function resetPasswordByEmail($user_id, $reminder_code){
		$user_id_2 = $this->input->post('user_id');
		if(!empty($user_id_2)){
			$user_id = $user_id_2;
			$reminder_code = $this->input->post('reminder_code');
		}
		$user = $this->sentinel->getUserRepository()->find($user_id);
		$this->CI = get_instance();
		$this->CI->load->database();
		$query_check_reminder_code = $this->CI->db->conn_id->query("SELECT * FROM `reminders` WHERE `code` = '" . $reminder_code . "'");
		$row_check_reminder_code = $query_check_reminder_code->fetch_array(MYSQLI_ASSOC);
		$row_check_reminder_code = (object)$row_check_reminder_code;
		if($row_check_reminder_code->user_id == $user_id OR $query_check_reminder_code->num_rows <= 0){
			if($row_check_reminder_code->completed != 0 AND $row_check_reminder_code->completed != '0'){
				$this->message->set_message('این لینک قبلا استفاده شده و دیگر امکان استفاده از آن وجود ندارد', 'fail', 'بازیابی کلمه عبور حساب کاربری', 'users/login')->redirect();
			}else{
				if($_SERVER['REQUEST_METHOD'] == 'POST' AND count($_POST) >= 1){
					$errors = array();
					$new_password = $this->input->post('new_password');
					$re_new_password = $this->input->post('re_new_password');
					(empty($new_password)) ? $errors[] = 'وارد کردن کلمه عبور جدید الزامیست' : '';
					(empty($re_new_password)) ? $errors[] = 'وارد کردن تکرار کلمه عبور جدید الزامیست' : '';
					(!empty($new_password) AND !empty($re_new_password) AND ($new_password != $re_new_password OR md5($new_password) != md5($re_new_password))) ? $errors[] = 'کلمه عبور های جدید وارد شده با هم مطابقت ندارند' : '';
					$hasher = new Cartalyst\Sentinel\Hashing\Sha256Hasher;
					$new_password_hash = $hasher->hash($new_password);
					($hasher->check($new_password, $user->password)) ? $errors[] = 'کلمه عبور جدید با کلمه عبور فعلی شما برابر است . چنانچه هنوز مایل به تغییر کلمه عبور خود هستید کلمه عبور جدیدی وارد کنید' : '';
					if(count($errors) >= 1){
						$this->message->set_message(join('<br>', $errors), 'fail', 'ورود به حساب کاربری', 'users/resetPasswordByEmail/' . $user_id . '/' . $reminder_code)->redirect();
					}else{
						if($this->formValidate()){
							$this->CI->db->conn_id->query("UPDATE `users` SET `password` = '" . $new_password_hash . "' WHERE `id` = '" . $user_id . "'");
							$this->CI->db->conn_id->query("UPDATE `reminders` SET `completed` = '1', `completed_at` = '" . date('Y-m-d H:i:s', time()) . "', `updated_at` = '" . date('Y-m-d H:i:s', time()) . "' WHERE `code` = '" . $reminder_code . "'");
							include_once(APPPATH . '/libraries/PHPMailer/class.phpmailer.php');
							include_once(APPPATH . '/libraries/PHPMailer/class.smtp.php');
							$mail = new PHPMailer(true);
							$mail->IsSMTP();
							try{
								$body = '<html><body><table style="width:100%;"><tbody><td><div><div style="direction:rtl;text-align:right;font-family:Tahoma;font-size:8pt;background-color:White"><div style="width:100%;margin:0;padding:0;background-color:#f5f5f5"><div style="display:block;min-height:5px;background-color:#29B6F6"></div><table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%"><tbody><tr><td align="center" valign="top" style="border-collapse:collapse;color:#525252;border-radius:6px"><table border="0" cellpadding="0" cellspacing="0" width="90%"><tbody><tr><td align="center" height="38" style="border-collapse:collapse;color:#525252"></td></tr><tr><td align="center" valign="top" style="border-collapse:collapse;color:#525252"><table width="100%" valign="top" border="0" cellpadding="0" cellspacing="0"> <tbody><tr> <td width="100%" style="direction:rtl;border-collapse:collapse;color:#525252;padding:10px;background-color:rgb(255,255,255);border-color:rgb(221,221,221);border-width:1px;border-radius:5px;border-style:solid;font-size:8pt;padding:15px 40px!important" align="justify" dir="rtl" valign="top"><table dir="rtl" style="direction:rtl"> <tbody><tr> <td style="border-collapse:collapse;color:#525252;padding:0px!important;text-align:justify;direction:rtl;font-family:Tahoma;line-height:20px;font-size:8pt" align="right" valign="top"><font color="#550055"><div dir="rtl">کلمه عبور حساب کاربری شما با موفقیت تغییر کرد<br><br>ایمیل حساب کاربری: ' . $user->email . '<br>کلمه عبور جدید: ' . $new_password . '<br><br>از همراهی شما با مجموعه BWin7 خرسندیم, از اینکه مجموعه ما را انتخاب کرده اید به خود می بالیم</div></font></td></tr></tbody></table></td> </tr></tbody></table></td></tr><tr><td style="border-collapse:collapse;color:#525252"><table width="100%" border="0" style="font-size:8pt;line-height:15px;color:#999;text-align:right;direction:rtl"><tbody><tr><td width="30px" style="border-collapse:collapse;color:#525252"><br><br></td><td style="border-collapse:collapse;color:#525252;font-family:Tahoma;font-size:7pt"><br>این ایمیل به صورت خودکار و از طرف سیستم برای شما ارسال شده است<br>لطفا از ارسال پاسخ برای آن خودداری فرمایید و جهت هرگونه پرسش و پاسخ از طریق محیط کاربری => سیستم پشتیبانی اقدام فرمایید<br> </td></tr></tbody></table></td></tr><tr><td align="center" valign="top" height="30" style="border-collapse:collapse;color:#525252"></td></tr></tbody></table></td></tr></tbody></table></div></div></div></td></tbody></table></body></html>';
								$mail->Host = MAIL_SENDER_SERVER;
								$mail->SMTPAuth = true;
								$mail->SMTPSecure = false;
								$mail->Port = 587;
								$mail->Username = MAIL_SENDER_USERNAME;
								$mail->Password = MAIL_SENDER_PASSWORD;
								$mail->AddAddress($user->email);
								$mail->SetFrom(MAIL_SENDER_USERNAME, MAIL_SENDER_NAME);
								$mail->Subject = 'تغییر کلمه عبور';
								$mail->AltBody = 'مرورگر شما از این قابلیت پشتیبانی نمی کند . لطفا مرورگر خود را بروز رسانی کنید';
								$mail->CharSet = 'utf-8';
								$mail->ContentType = 'text/html';
								$mail->MsgHTML($body);
								$mail->isHTML(true);
								$mail->Send();
							} catch(phpmailerException $error){
								print_r($error);exit();
							} catch(Exception $error){
								print_r($error);exit();
							}
							$messageSMS = "کلمه عبور شما با موفقیت تغییر کرد\n\nکلمه عبور جدید: " . $new_password . "\n\nاز حضور شما در جمع BWin7 خرسندیم";
							file_get_contents('http://webone-sms.ir/SMSInOutBox/SendSms?username=' . SMS_USERNAME . '&password=' . SMS_PASSWORD . '&from=' . SMS_DEDICATED_NUMBER . '&to=' . $user->mobile . '&text=' . urlencode($messageSMS));
							$this->message->set_message('کلمه عبور حساب کاربری شما با موفقیت تغییر کرد . اکنون می توانید با مشخصات جدید وارد حساب کاربری خود شوید', 'success', 'بازیابی کلمه عبور حساب کاربری', 'users/login')->redirect();
						}else{
							$this->message->set_message('متاسفانه خطایی هنگام بازیابی کلمه عبور پیش آمده است . لطفا دقایقی دیگر مجددا تلاش فرمایید', 'fail', 'بازیابی کلمه عبور حساب کاربری', 'users/resetPasswordByEmail/' . $user_id . '/' . $reminder_code)->redirect();
						}
					}
				}else{
					$this->smart->assign(array('title' => 'بازیابی کلمه عبور حساب کاربری', 'reminder_code' => $reminder_code, 'user_id' => $user_id, 'email' => $user->email));
					$this->smart->view('users/set_new_password');
				}
			}
		}else{
			$this->message->set_message('کد بازیابی کلمه عبور نا معتبر است و امکان بازیابی کلمه عبور از این لینک وجود ندارد', 'fail', 'بازیابی کلمه عبور حساب کاربری', 'users/login')->redirect();
		}
	}
	public function activate($user_id, $activation_code){
		$data = array();
		(empty($user_id) OR empty($activation_code)) ? redirect('users/login') : '';
		$user = $this->sentinel->findById($user_id);
		if(!empty($user)){
			$activation = $this->sentinel->getActivationRepository()->exists($user);
			if (!empty($activation)){
				if($this->sentinel->getActivationRepository()->complete($user, $activation->code)){
					if($this->sentinel->login($user)){
						$this->message->set_message('ایمیل شما تایید و حساب کاربری شما با موفقیت فعال شد', 'success', 'فعالسازی حساب کاربری', 'dashboard')->redirect();
					}else{
						$this->message->set_message('حساب شما فعال شد اما به دلایلی امنیتی عملیات ورود اتوماتیک انجام نشد ! لطفا برای ورود به حساب کاربری مجدد تلاش فرمایید', 'fail', 'فعالسازی حساب کاربری', 'users/login')->redirect();
					}
				}else{
					$this->message->set_message('خطایی هنگام فعالسازی حساب شما به وجود آمده است', 'fail', 'فعالسازی حساب کاربری', 'users/login')->redirect();
				}
			}else{
				redirect('users/login');
			}
		}else{
			redirect('users/login');
		}
	}
	public function representation(){
		$this->CI = get_instance();
		$this->CI->load->database();
		$query_referrals = $this->CI->db->conn_id->query("SELECT * FROM `users` WHERE `ref_id` = '" . $this->user->id . "' AND `status` = '1'");
		$referrals = ($query_referrals->num_rows <= 0) ? array() : $query_referrals->fetch_all(MYSQLI_ASSOC);
		$this->load->eloquent('settings');
		$site_name = Setting::findByCode('site_name');
		$site_name = $site_name->value;
		$affiliate_count = Setting::findByCode('affiliate_count');
		$affiliate_count = $affiliate_count->value;
		$this->smart->assign(array('referrals' => $referrals, 'sub_count' => $sub_count, 'site_name' => $site_name, 'affiliate_count' => $affiliate_count));
		$this->smart->view('representation');
	}
	public function withdraw($withdraw_type = 'choose'){
		$this->load->eloquent('Withdraw');
		$this->load->eloquent('payment/transaction');
		if($_SERVER['REQUEST_METHOD'] == 'POST' AND count($_POST) >= 1){
			$cash = $this->__getUserCash();
			$errors = array();
			$bank_name = $this->input->post('bank_name');
			$amount = $this->input->post('amount');
			$amount = str_replace(array(' ', ','), array('', ''), $amount);
			$account_number = $this->input->post('account_number');
			$account_number = empty($account_number) ? '' : $account_number;
			$card_number = $this->input->post('card_number');
			$card_number = str_replace(array(' ', '-'), array('', ''), $card_number);
			$sheba = $this->input->post('sheba');
			$sheba = str_replace(array(' ', '-', '(', ')', 'IR'), array('', '', '', '', ''), $sheba);
			$last_withdraw = Withdraw::where('user_id', $this->user->id)->orderBy('created_at', 'desc')->first();
			(empty($amount) OR !is_numeric($amount)) ? $errors[] = 'وارد کردن مبلغ الزامیست' : '';
			($amount <= 109999 AND !empty($amount) AND is_numeric($amount)) ? $errors[] = 'حداقل مبلغ قابل برداشت 100,000 تومان می باشد' : '';
			($amount >= 50000001 AND !empty($amount) AND is_numeric($amount)) ? $errors[] = 'حداکثر مبلغ قابل برداشت 50,000,000 تومان می باشد' : '';
			(($cash < $amount OR ($cash - $amount) <= -1) AND !empty($amount) AND is_numeric($amount)) ? $errors = array('موجودی حساب شما برای برداشت این مقدار کافی نیست') : '';
			(empty($bank_name)) ? $errors[] = 'مشخص کردن نام بانک الزامیست' : '';
			(!in_array($bank_name, array('refah', 'ansar', 'sina', 'saman', 'meli', 'melat', 'pasargad', 'tejarat', 'saderat', 'sepah', 'parsian', 'ayande', 'sarmaye', 'keshavarzi', 'ghavamin', 'eghtesad_novin', 'maskan', 'dey', 'shahr')) AND !empty($bank_name)) ? $errors[] = 'نام بانک مشخص شده معتبر نمی باشد . لطفا بانک معتبر انتخاب کنید' : '';
			(empty($sheba)) ? $errors[] = 'وارد کردن شماره شبا الزامیست' : '';
			(strlen($sheba) != 24 AND !empty($sheba)) ? $errors[] = 'شماره شبا وارد شده معتبر نمی باشد . شماره شبا 24 رقم و بدون IR می باشد' : '';
			($bank_name == 'saman' AND empty($account_number)) ? $errors[] = 'وارد کردن شماره حساب برای پرداخت های بانک سامان الزامیست' : '';
			(empty($card_number)) ? $errors[] = 'وارد کردن شماره کارت الزامیست' : '';
			(strlen($card_number) != 16 AND !empty($card_number)) ? $errors[] = 'شماره کارت وارد شده معتبر نمی باشد . شمارت کارت 16 رقم می باشد' : '';
			(isset($last_withdraw->created_at) AND date('Y-m-d', strtotime($last_withdraw->created_at)) == date('Y-m-d')) ? $errors = array('در هر روز فقط یک بار امکان درخواست برداشت جایزه از حساب وجود دارد . لطفا تا تاریخ ' . Miladr\Jalali\jDateTime::date('l d F Y ساعت H:i:s', strtotime($last_withdraw->created_at) + 86400) . ' صبر کنید و مجددا درخواست برداشت جایزه ثبت کنید') : '';
			$account_holder = $this->user->first_name . ' ' . $this->user->last_name;
			if(count($errors) >= 1){
				$this->message->set_message(join('<br>', $errors), 'fail', 'درخواست جایزه', 'users/withdraw')->redirect();
			}else{
				if($this->formValidate()){
					Withdraw::create(array('amount' => $amount, 'account_holder' => $account_holder, 'bank_name' => $bank_name, 'card_no' => $card_number, 'sheba' => $sheba, 'account_number' => $account_number, 'status' => 0, 'user_id' => $this->user->id, 'type' => 'rial_iran'));
					$user = $this->sentinel->getUserRepository();
					$currentCash = $this->__getUserCash();
					if($user->update($this->user, array('cash' => $currentCash - $amount))){
						switch($bank_name){
							case('saman'): $bank_name_persian = 'بانک سامان'; break;
							case('meli'): $bank_name_persian = 'بانک ملی'; break;
							case('melat'): $bank_name_persian = 'بانک ملت'; break;
							case('pasargad'): $bank_name_persian = 'بانک پاسارگاد'; break;
							case('tejarat'): $bank_name_persian = 'بانک تجارت'; break;
							case('saderat'): $bank_name_persian = 'بانک صادرات'; break;
							case('sepah'): $bank_name_persian = 'بانک سپه'; break;
							case('parsian'): $bank_name_persian = 'بانک پارسیان'; break;
							case('ayande'): $bank_name_persian = 'بانک آینده'; break;
							case('sarmaye'): $bank_name_persian = 'بانک سرمایه'; break;
							case('keshavarzi'): $bank_name_persian = 'بانک کشاورزی'; break;
							case('ghavamin'): $bank_name_persian = 'بانک قوامین'; break;
							case('eghtesad_novin'): $bank_name_persian = 'بانک اقتصاد نوین'; break;
							case('maskan'): $bank_name_persian = 'بانک مسکن'; break;
							case('dey'): $bank_name_persian = 'بانک دِی'; break;
							case('shahr'): $bank_name_persian = 'بانک شهر'; break;
							case('refah'): $bank_name_persian = 'بانک رفاه'; break;
							case('ansar'): $bank_name_persian = 'بانک انصار'; break;
							case('sina'): $bank_name_persian = 'بانک سینا'; break;
							default: $bank_name_persian = 'نامشخص !'; break;
						}
						Transaction::create(array('trans_id' => $this->user->id, 'price' => $amount, 'invoice_type' => 4, 'cash' => $currentCash - $amount, 'user_id' => $this->user->id, 'description' => 'درخواست جایزه'));
						include_once(APPPATH . '/libraries/PHPMailer/class.phpmailer.php');
						include_once(APPPATH . '/libraries/PHPMailer/class.smtp.php');
						$mail = new PHPMailer(true);
						$mail->IsSMTP();
						try{
							$body = '<html><body><table style="width:100%;"><tbody><td><div><div style="direction:rtl;text-align:right;font-family:Tahoma;font-size:8pt;background-color:White"><div style="width:100%;margin:0;padding:0;background-color:#f5f5f5"><div style="display:block;min-height:5px;background-color:#29B6F6"></div><table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%"><tbody><tr><td align="center" valign="top" style="border-collapse:collapse;color:#525252;border-radius:6px"><table border="0" cellpadding="0" cellspacing="0" width="90%"><tbody><tr><td align="center" height="38" style="border-collapse:collapse;color:#525252"></td></tr><tr><td align="center" valign="top" style="border-collapse:collapse;color:#525252"><table width="100%" valign="top" border="0" cellpadding="0" cellspacing="0"> <tbody><tr> <td width="100%" style="direction:rtl;border-collapse:collapse;color:#525252;padding:10px;background-color:rgb(255,255,255);border-color:rgb(221,221,221);border-width:1px;border-radius:5px;border-style:solid;font-size:8pt;padding:15px 40px!important" align="justify" dir="rtl" valign="top"><table dir="rtl" style="direction:rtl"> <tbody><tr> <td style="border-collapse:collapse;color:#525252;padding:0px!important;text-align:justify;direction:rtl;font-family:Tahoma;line-height:20px;font-size:8pt" align="right" valign="top"><font color="#550055"><div dir="rtl">درخواست جایزه شما با موفقیت ثبت شد و در صف بررسی قرار گرفت<br>در صورت تایید درخواست شما توسط کارشناسان ما مبلغ به حساب شما واریز خواهد شد<br>لطفا دقت داشته باشید که عملیات پایا در روز های جمعه و تعطیلات رسمی توسط بانک انجام نمیشود<br><br>مبلغ درخواست جایزه: ' . number_format($amount) . ' تومان<br>بانک عامل: ' . $bank_name_persian . '<br><br>از همراهی شما با مجموعه BWin7 خرسندیم, از اینکه مجموعه ما را انتخاب کرده اید به خود می بالیم</div></font></td></tr></tbody></table></td> </tr></tbody></table></td></tr><tr><td style="border-collapse:collapse;color:#525252"><table width="100%" border="0" style="font-size:8pt;line-height:15px;color:#999;text-align:right;direction:rtl"><tbody><tr><td width="30px" style="border-collapse:collapse;color:#525252"><br><br></td><td style="border-collapse:collapse;color:#525252;font-family:Tahoma;font-size:7pt"><br>این ایمیل به صورت خودکار و از طرف سیستم برای شما ارسال شده است<br>لطفا از ارسال پاسخ برای آن خودداری فرمایید و جهت هرگونه پرسش و پاسخ از طریق محیط کاربری => سیستم پشتیبانی اقدام فرمایید<br> </td></tr></tbody></table></td></tr><tr><td align="center" valign="top" height="30" style="border-collapse:collapse;color:#525252"></td></tr></tbody></table></td></tr></tbody></table></div></div></div></td></tbody></table></body></html>';
							$mail->Host = MAIL_SENDER_SERVER;
							$mail->SMTPAuth = true;
							$mail->SMTPSecure = false;
							$mail->Port = 578;
							$mail->Username = MAIL_SENDER_USERNAME;
							$mail->Password = MAIL_SENDER_PASSWORD;
							$mail->AddAddress($this->user->email);
							$mail->SetFrom(MAIL_SENDER_USERNAME, MAIL_SENDER_NAME);
							$mail->Subject = 'درخواست جایزه';
							$mail->AltBody = 'مرورگر شما از این قابلیت پشتیبانی نمی کند . لطفا مرورگر خود را بروز رسانی کنید';
							$mail->CharSet = 'utf-8';
							$mail->ContentType = 'text/html';
							$mail->MsgHTML($body);
							$mail->isHTML(true);
							$mail->Send();
						} catch(phpmailerException $error){
							print_r($error);exit();
						} catch(Exception $error){
							print_r($error);exit();
						}
						$messageSMS = "درخواست برداشت وجه شما با موفقیت ثبت شد و در صف بررسی قرار گرفت\n\nمبلغ درخواستی: " . number_format($amount) . " تومان\nبانک عامل: " . $bank_name_persian . "\n\nاز حضور شما در جمع BWin7 خرسندیم";
						file_get_contents('http://webone-sms.ir/SMSInOutBox/SendSms?username=' . SMS_USERNAME . '&password=' . SMS_PASSWORD . '&from=' . SMS_DEDICATED_NUMBER . '&to=' . $this->user->mobile . '&text=' . urlencode($messageSMS));
						$this->message->set_message('درخواست جایزه شما با موفقیت ثبت شد و در صف بررسی قرار گرفت . به زودی نتیجه آن به اطلاع شما رسانده خواهد شد', 'success', 'درخواست جایزه', 'users/withdraw')->redirect();
					}
				}else{
					$this->message->set_message('متاسفانه خطایی هنگام ثبت درخواست جایزه شما پیش آمده است . لطفا دقایقی دیگر مجددا تلاش فرمایید', 'fail', 'درخواست جایزه', 'users/withdraw')->redirect();
				}
			}
		}else{
			$my_name = $this->user->first_name . ' ' . $this->user->last_name;
			$withdrawList = Withdraw::where('user_id', $this->user->id)->orderBy('id', 'desc')->get();
			$this->smart->assign(array('cash' => $this->__getUserCash(), 'withdrawList' => $withdrawList, 'action' => site_url('users/withdraw'), 'my_name' => $my_name, 'withdraw_type' => $withdraw_type, 'dollar_price' => $dollar_price));
			$this->smart->view('withdraw');
		}
	}
	public function email_exists($email){
		$credentials = array('email' => $email);
		$user = $this->sentinel->getUserRepository()->where($credentials)->first();
		if(isset($user)){
			$this->message->set_message('ایمیل وارد شده متعلق به شخص دیگری است . لطفا ایمیل دیگری وارد کنید یا اگر مطمئن هستید این ایمیل متعلق به شماست از بخش فراموشی کلمه عبور درخواست کلمه عبور جدید کنید', 'fail', 'ثبت نام', 'users/register');
			return false;
		}else{
			return true;
		}
	}
}
?>