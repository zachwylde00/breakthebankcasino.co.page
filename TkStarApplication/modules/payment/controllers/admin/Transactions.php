<?php



/*

 * To change this license header, choose License Headers in Project Properties.

 * To change this template file, choose Tools | Templates

 * and open the template in the editor.

 */



/**

 * Description of Transactions

 *

 */

class Transactions extends Admin_Controller {



    public function __construct () {

        parent::__construct();

        $this->load->eloquent('Transaction');

    }



    public function index ( $user_id = null ) {

        if ( $user_id ) {

            $transactions = Transaction::where('status' , 1)->where('user_id' , $user_id)->orderBy('id' , 'desc')->get();

        }

        else {

            $transactions = Transaction::where('status' , 1)->orderBy('id' , 'desc')->get();

        }

        $this->smart->assign([

            'title' => 'تراکنش های مالی کاربران' ,

            'transactions' => $transactions

        ]);

        $this->smart->view('trans');

    }



    public function credit () {

        $transactions = Transaction::where('invoice_type' , 1)->where('status' , 1)->orderBy('id' , 'desc')->get();

        $this->smart->assign([

            'title' => 'تراکنش های مالی کاربران-شارژ حساب' ,

            'transactions' => $transactions

        ]);

        $this->smart->view('trans_credit');

    }



    public function withdraw () {

        $this->load->eloquent('users/withdraw');

        $transactions = Withdraw::where('status' , 1)->orderBy('id' , 'desc')->get();

        $this->smart->assign([

            'title' => 'تراکنش های مالی کاربران-درخواست جایزه' ,

            'transactions' => $transactions

        ]);

        $this->smart->view('trans_withdraw');

    }

}

