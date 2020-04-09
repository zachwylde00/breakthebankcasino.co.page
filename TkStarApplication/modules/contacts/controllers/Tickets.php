<?php
class Tickets extends Public_Controller {
	public $validation_rules = array(
		'submit_ticket' => array(array('field' => 'subject' , 'rules' => 'htmlspecialchars|max_length[100]', 'label' => 'موضوع'), array('field' => 'content' , 'rules' => 'trim|max_length[1000]' , 'label' => 'متن پیام')),
		'submit_reply' => array(array('field' => 'content', 'rules' => 'htmlspecialchars|trim|max_length[1000]', 'label' => 'متن پیام'))
	);
	public function __construct () {
		parent::__construct();
		$this->load->eloquent('Ticket');
		$this->load->eloquent('Ticket_reply');
		$this->load->helper('cookie');
		$this->load->sentinel();
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
	public function new_ticket($user_id = null){
		$this->smart->assign(array('title' => 'ارسال تیکت جدید', 'Roles' => $this->sentinel->getRoleRepository()->all(), 'user_id' => $user_id, 'action' => site_url('contacts/tickets/submit-ticket')));
		$this->smart->view('new_ticket');
	}
	public function ticket_list(){
		$this->checkAuth(true);
		$user_id = $this->user->id;
		$Tickets = Ticket::where('user_id', $this->user->id)->orderBy('updated_at', 'DESC')->get();
		$this->smart->assign(array('title' => 'لیست تیکت ها', 'Tickets' => $Tickets, 'action' => site_url('contacts/tickets/submit-ticket')));
		$this->smart->view('tickets');
	}
	public function view_ticket($ticket_id){
		$ticket = Ticket::find($ticket_id);
		$this->show_404_on(!$ticket_id);
		$this->show_404_on(!$ticket);
		if($ticket->user_id != $this->user->id){
			redirect();exit();
		}else{
			$this->smart->assign(array('ticket_id' => $ticket_id, 'title' => 'مشاهده تیکت', 'ticket' => $ticket, 'action' => site_url('contacts/tickets/submit-reply/' . $ticket_id), 'logged_in_user_id' => $this->user->id));
			$this->smart->view('view_ticket');
		}
	}
	public function submit_ticket(){
		if($_SERVER['REQUEST_METHOD'] == 'POST' AND count($_POST) >= 1){
			$errors = array();
			$subject = $this->input->post('subject');
			$content = $this->input->post('content');
			(empty($subject)) ? $errors[] = 'انتخاب موضوع الزامیست' : '';
			(!empty($subject) AND !in_array($subject, array('charging', 'card_in_card_addfounds', 'pm_addfounds', 'forgot_password_or_email', 'betting_form', 'online_casino', 'feedbacks', 'buy_script', 'other_subject'))) ? $errors[] = 'موضوع انتخاب شده معتبر نمی باشد . لطفا فقط از بین موضوعات تعریف شده انتخاب کنید' : '';
			(empty($content)) ? $errors[] = 'وارد کردن متن تیکت الزامیست' : '';
			switch($subject){
				case('charging'): unset($subject); $subject = 'شارژ حساب کاربری'; break;
				case('card_in_card_addfounds'): unset($subject); $subject = 'شارژ حساب از طریق کارت به کارت'; break;
				case('pm_addfounds'): unset($subject); $subject = 'شارژ حساب از طریق پرفکت مانی / ووچر پرفکت مانی'; break;
				case('forgot_password_or_email'): unset($subject); $subject = 'فراموشی رمز عبور یا ایمیل'; break;
				case('betting_form'): unset($subject); $subject = 'فرم پیش بینی'; break;
				case('online_casino'): unset($subject); $subject = 'کازینو آنلاین'; break;
				case('feedbacks'): unset($subject); $subject = 'انتقادات و پیشنهادات'; break;
				case('buy_script'): unset($subject); $subject = 'خرید اسکریپت سایت پیش بینی'; break;
				case('other_subject'): unset($subject); $subject = 'سایر موضوعات'; break;
				default: unset($subject); $errors[] = 'موضوع انتخاب شده معتبر نمی باشد . لطفا فقط از بین موضوعات تعریف شده انتخاب کنید'; break;
			}
			if(count($errors) >= 1){
				$this->message->set_message(join('<br>', $errors), 'fail', 'ارسال تیکت جدید', 'contacts/tickets/new-ticket')->redirect();
			}else{
				if($this->formValidate(false)){
					$ticket = Ticket::create(array('user_id' => $this->user->id, 'status' => 0, 'subject' => $subject));
					$reply = array('user_id' => $this->user->id, 'ticket_id' => $ticket->id, 'content' => $content);
					if($ticket_id = Ticket_reply::create($reply)){
						$this->message->set_message('تیکت شما با موفقیت ارسال شد و در صف پاسخگویی قرار گرفت . لطفا تا زمانی بررسی کارشناسان ما صبور باشید', 'warning', 'مشاهده تیکت', 'contacts/tickets/view-ticket/' . $ticket->id)->redirect();
					}else{
						$this->message->set_message('خطایی هنگام ارسال تیکت پیش آمده است . لطفا دقایقی دیگر مجددا تلاش فرمایید' , 'fail' , 'ارسال تیکت جدید' , 'contacts/tickets/new-ticket')->redirect();
					}
				}else{
					$this->message->set_message('خطایی هنگام ارسال تیکت پیش آمده است . لطفا دقایقی دیگر مجددا تلاش فرمایید' , 'fail' , 'ارسال تیکت جدید' , 'contacts/tickets/new-ticket')->redirect();
				}
			}
		}else{
			$this->message->set_message('خطایی هنگام ارسال تیکت پیش آمده است . لطفا دقایقی دیگر مجددا تلاش فرمایید' , 'fail' , 'ارسال تیکت جدید' , 'contacts/tickets/new-ticket')->redirect();
		}
	}
	public function submit_reply($ticket_id){
		$contact = Ticket::find($ticket_id);
		$this->show_404_on(!$ticket_id);
		$this->show_404_on(!$contact);
		if($contact->user_id != $this->user->id){
			redirect();exit();
		}else{
			if($_SERVER['REQUEST_METHOD'] == 'POST' AND count($_POST) >= 1){
				$errors = array();
				$content = $this->input->post('content');
				(empty($content)) ? $errors[] = 'وارد کردن متن پاسخ الزامیست' : '';
				if(count($errors) >= 1){
					$this->message->set_message(join('<br>', $errors), 'fail', 'ارسال تیکت جدید', 'contacts/tickets/view-ticket/' . $ticket_id)->redirect();
				}else{
					if($this->formValidate(false)){
						if(Ticket_reply::create(array('user_id' => $this->user->id, 'ticket_id' => $ticket_id, 'content' => $content))){
							$contact->update(array('status' => 0, 'updated_at' => date('Y-m-d H:i:s')));
							$this->message->set_message('پاسخ شما با موفقیت ارسال شد و در صف پاسخگویی قرار گرفت . لطفا تا زمانی بررسی کارشناسان ما صبور باشید', 'warning', 'مشاهده تیکت', 'contacts/tickets/view-ticket/' . $ticket_id)->redirect();
						}else{
							$this->message->set_message('خطایی هنگام ارسال تیکت پیش آمده است . لطفا دقایقی دیگر مجددا تلاش فرمایید' , 'fail' , 'ارسال تیکت جدید' , 'contacts/tickets/view-ticket/' . $ticket_id)->redirect();
						}
					}else{
						$this->message->set_message('خطایی هنگام ارسال تیکت پیش آمده است . لطفا دقایقی دیگر مجددا تلاش فرمایید' , 'fail' , 'ارسال تیکت جدید' , 'contacts/tickets/view-ticket/' . $ticket_id)->redirect();
					}
				}
			}
		}
	}
	public function set_seen(){
		$id = $this->input->post('input');
		$this->show_404_on(!$id);
		header('Content-type: application/json');
		$ticket = Ticket::find($id);
		$ticket->status = 1;
		$ticket->seen_datetime = date('Y-m-d H:i:s');
		if($ticket->save()){
			echo(json_encode(array('success' => 1)));exit();
		}else{
			echo(json_encode(array('success' => 0)));exit();
		}
	}
	public function __fetch_from_PostArray(){
		$posts = array();
		foreach($this->input->post() as $post_key => $post_value){
			$posts[$post_key] = $post_value;
		}
		return $posts;
	}
	public function delete($ticket_id){
		if($ticket = Contact::find($ticket_id)){
			if($ticket->delete()){
				$this->message->set_message('تیکت مورد نظر حذف شد' , 'success' , 'حذف تیکت' , 'contacts/contact-us/tickets')->redirect();
			}else{
				return false;
			}
		}else{
			show_404();
		}
	}
}
?>