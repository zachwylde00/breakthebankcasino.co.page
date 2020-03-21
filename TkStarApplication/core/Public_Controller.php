<?php
class Public_Controller extends MY_Controller {
    public $user;
    function __construct () {
        parent::__construct();
        if ( !($this->user = $this->sentinel->check() ) ) {
            $is_logged_in = false;
        }
        else {
            $is_logged_in = true;
        }
        $this->load->eloquent('settings/Setting');
        $this->load->helper('admin_helper');
        $this->load->eloquent('content/comment');
        $this->load->eloquent('contacts/contact');
        $this->load->eloquent('Contacts/ticket');
        if ( isset($this->user->id) ) {
            $Contacts = $this->announcements($this->user->id);
            $AnnounceCount = 0;
            $support_badge = Ticket::where('user_id' , $this->user->id)->where('status' , 2)->get()->count();
            foreach ( $Contacts as $val ):
                if ( $val->seen_status == 0 )
                    $AnnounceCount += 1;
            endforeach;
        }
        $this->load->helper('admin_helper');
        if ( !$this->sentinel->guest() ) {
            $this->smart->assign(
                    [
                        'is_admin' => $this->sentinel->getUser()->getRoles()->contains('slug' , SUPER_ADMIN) ,
                        'is_operator' => $this->sentinel->getUser()->getRoles()->contains('slug' , 'sh_operator') ,
                        'user_role' => $this->sentinel->getUser()->getRoles() ,
                        'AnnounceCount' => $AnnounceCount ,
                        'is_logged_in' => $is_logged_in ,
                        'user' => $this->user ,
                        'support_badge' => $support_badge ,
                    ]
            );
        }
        else {
            $this->smart->assign([
                'is_logged_in' => $is_logged_in ,
                'user' => $this->user ,
                'support_badge' => 0 ,
            ]);
        }
        $site_theme = Setting::findByCode('theme')->value;
        if ( isset($site_theme) ) {
            $this->smart->load($site_theme , false);
        }
        else {
            $this->smart->load('mirook-2015' , false);
        }
        if ( Setting::findByCode('site_status')->value == 0 ) {
            $this->smart->setLayout('maintenance_mode');
        }
    }
    public function checkAuth ( $auth = true ) {
        if ( !($this->user = $this->sentinel->check() ) AND $auth ) {
            $this->session->set_userdata('requested_url' , current_url());
            redirect('/users/login');
        }
        else
            return $this->user;
    }
    function price_format ( $number ) {
        $number = str_replace(array( '0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' ) , array( '&#1776;' , '&#1777;' , '&#1778;' , '&#1779;' , '&#1780;' , '&#1781;' , '&#1782;' , '&#1783;' , '&#1784;' , '&#1785;' ) , number_format($number));
        return $number . ' &#1578;&#1608;&#1605;&#1575;&#1606;';
    }
    public function __getUserCash ( $user_id = null ) {
        $this->checkAuth(true);
        $User = $this->sentinel->getUser();
        return $User->cash;
    }
    public function __updateUserCash ( $amount , $bet_id ) {
        $user = $this->sentinel->getUserRepository();
        $currentCash = $this->__getUserCash();
        if ( $user->update($this->user , array( 'cash' => $currentCash - $amount )) ) {
            $this->load->eloquent('payment/Transaction');
            Transaction::create([
                'trans_id' => $this->user->id ,
                'price' => $amount ,
                'invoice_type' => 3 ,
                'status' => 1 ,
                'cash' => $currentCash - $amount ,
                'user_id' => $this->user->id ,
                'description' => '&#1576;&#1585;&#1583;&#1575;&#1588;&#1578; &#1575;&#1586; &#1581;&#1587;&#1575;&#1576; &#1576;&#1585;&#1575;&#1740; &#1579;&#1576;&#1578; &#1588;&#1585;&#1591; &#1576;&#1607; &#1588;&#1606;&#1575;&#1587;&#1607; ' . $bet_id ,
            ]);
            return true;
        }
        return false;
    }
    function searchArrayForKey ( $key , $value , $array ) {
        foreach ( $array as $index => $val ) {
            if ( $val->$key == $value ) {
                return $index;
            }
        }
        return null;
    }
}
?>