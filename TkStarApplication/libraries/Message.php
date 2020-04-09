<?php
class Message {
	public $link_url = '';
    public function set_message($message, $type, $title, $link_url) {
        $this->link_url = base_url($link_url);
        $_SESSION['message_' . $this->link_url] = array(
            'message' => $message,
            'type' => $type,
            'title' => $title,
            'link_url' => $link_url
        );
		header('Location: ' . $this->link_url);exit();
    }
    public function redirect(){
        redirect($this->link_url);exit();
    }
	public function clear_message(){
		$_SESSION['message_' . current_url()] = null;
		unset($_SESSION['message_' . current_url()]);
		return true;
	}
    public function get_message() {
		$session = isset($_SESSION['message_' . current_url()]) ? $_SESSION['message_' . current_url()] : '';
        if (is_array($session)) {
            return $session;
        } else {
            return false;
        }
    }
}
?>