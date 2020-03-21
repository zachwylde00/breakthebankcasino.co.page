<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of bets
 *
 */
class Bets extends Admin_Controller {

    public function __construct () {
        parent::__construct();
        $this->load->eloquent('Bet');
        $this->load->eloquent('Bet_form');
    }

    public function index ( $page = 0 ) {
        $betRecords = Bet::orderBy('id' , 'desc')->take($this->config->item('per_page'))->skip($this->config->item('per_page') * ($page ))->get();
        $config["base_url"] = base_url() . ADMIN_PATH . "/bets/bets/index";
        $config["total_rows"] = $betRecords->count();
        $config["uri_segment"] = 5;
        $this->pagination->initialize($config);
        $this->smart->assign([
            'betRecords' => $betRecords ,
            'title' => 'همه پیش بینی ها' ,
            'paging' => $this->pagination->create_links() ,
        ]);
        $this->smart->view('allBets');
    }

    public function view ( $id ) {
        $this->load->eloquent('users/withdraw');
        $totalStake = 0;
        $totalGift = 0;
        $giftCount = 0;
        $sumWithdraw = 0;
        $Obj = Bet::where('user_id' , $id)->orderBy('id' , 'desc')->get();
        $user = $this->sentinel->getUserRepository()->find($id);
        foreach ( $Obj as $row ):
            $totalStake += $row->stake;
            if ( $row->status == 1 ):
                $totalGift += $row->stake;
                $giftCount++;
            endif;
        endforeach;
        $withdraw = Withdraw::where('user_id' , $id)->where('status' , 1)->get();
        foreach ( $withdraw as $val ):
            $sumWithdraw += $val->amount;
        endforeach;
        $this->load->eloquent('payment/Transaction');
        $varizi = Transaction::where(array( 'user_id' => $id , 'status' => 1 , 'invoice_type' => 1 ))->get();
        $sumVarizi = 0;
        foreach ( $varizi as $val ):
            $sumVarizi += $val->price;
        endforeach;

        $jayzeTrans = Transaction::where(array( 'user_id' => $id , 'invoice_type' => 2 , 'status' => 1 ))->get();
        $jayzeSum = 0;
        foreach ( $jayzeTrans as $log ):
            $jayzeSum += $log->price;
        endforeach;
        $this->smart->assign([
            'user' => $user ,
            'title' => 'اطلاعات شرط ها ' ,
            'bets' => $Obj ,
            'totalStake' => $totalStake ,
            'giftCount' => $giftCount ,
            'totalGift' => $totalGift ,
            'withdraw' => $sumWithdraw ,
            'varizi' => $sumVarizi ,
            'jayze' => $jayzeSum ,
        ]);



        /**
         * Monitoring parameters
         */
        $MsumWithdraw = 0;
        $Monitoring = 0;
        $M_withdraw = Withdraw::where('user_id' , $id)->get();
        foreach ( $M_withdraw as $val ):
            $MsumWithdraw += $val->amount;
        endforeach;

        $adminTrans = Transaction::where(array( 'user_id' => $id , 'invoice_type' => 10 , 'status' => 1 ))->get();
        $adminTransSum = 0;
        foreach ( $adminTrans as $log ):
            $adminTransSum += $log->price;
        endforeach;
        $adminTransBardasht = Transaction::where(array( 'user_id' => $id , 'invoice_type' => 11 , 'status' => 1 ))->get();
        $adminTransBardashtSum = 0;
        foreach ( $adminTransBardasht as $log ):
            $adminTransBardashtSum += $log->price;
        endforeach;

        $Monitoring = ($jayzeSum + $adminTransSum) - $totalStake + $sumVarizi - ($user->cash - $adminTransBardashtSum) - $MsumWithdraw;

        $this->smart->assign([
            'user' => $user ,
            'Monitoring' => $Monitoring ,
        ]);

        $this->smart->view('view');
    }

    public function search () {
        $q = $this->input->get('q');
        $betRecords = Bet::find($q);
        $this->smart->assign([
            'betRecords' => [$betRecords] ,
            'title' => 'شرط با شناسه ' . $q ,
        ]);
        $this->smart->view('allBets');
    }
        public function dasti () {
        $home = $this->input->post('home');
        $away = $this->input->post('away');
        
      dd($home);
        $this->smart->view('allBets');
    }

}
