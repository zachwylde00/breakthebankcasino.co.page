<?php
class MY_Controller extends CI_Controller {
    function __construct () {
        date_default_timezone_set('Asia/Tehran');
        parent::__construct();
        if ( $get_message = $this->message->get_message() ) {
            $this->smart->assign([
                'system_message' => $get_message ,
            ]);
        }
        else {
            $this->smart->assign([
                'system_message' => '' ,
            ]);
        }
        $this->cms_parameters = array();
        $this->cms_base_route = '';
        if ( in_uri($this->config->item('ssl_pages')) ) {
            force_ssl();
        }
        else {
            remove_ssl();
        }
        $this->load->sentinel();
    }
    public function formValidate ( $attach_global_validation = TRUE ) {
        $rule_collections = array_slice(func_get_args() , 1);
        if ( isset($this->validation_rules) && !empty($this->validation_rules) ) {
            $this->load->library('form_validation');
            $method_name = $this->router->fetch_method();
            if ( $attach_global_validation AND key_exists('__global__' , $this->validation_rules) ) {
                $this->form_validation->set_rules($this->validation_rules['__global__']);
            }
            if ( key_exists($method_name , $this->validation_rules) ) {
                $this->form_validation->set_rules($this->validation_rules[$method_name]);
            }
            if ( count($rule_collections) > 0 ) {
                foreach ( $rule_collections as $rule_collection ) {
                    if ( key_exists($rule_collection , $this->validation_rules) ) {
                        $this->form_validation->set_rules($this->validation_rules[$rule_collection]);
                    }
                }
            }
            if ( $this->form_validation->run() === TRUE ) {
                return TRUE;
            }
            else {
                return FALSE;
            }
        }
        return TRUE;
    }
    public function __sendSms ( $numbers = array() , $message = '' ) {
        $client = new SoapClient("http://parsasms.com/webservice/v2.asmx?WSDL");
        $params = array(
            'username' => 'a.behzadi' ,
            'password' => 'mor8825172' ,
            'senderNumbers' => array( '10005000200010' ) ,
            'recipientNumbers' => $numbers ,
            'messageBodies' => array( $message )
        );
        $results = $client->SendSMS($params);
        return $results;
    }
    public function message ( $message , $type , $title , $link_url ) {
        $this->template->set_message($message , $type , $title , $link_url);
        redirect($link_url);
    }
    public function announcements () {

        return 0;
    }
    public function show_404_on ( $condition ) {
        if ( $condition ) {
            show_404();
        }
    }
}
?>