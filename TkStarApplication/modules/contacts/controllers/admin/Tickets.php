<?php


/**
 * Ticket Controller
 *
 *
 * @copyright   Copyright (c) 2015
 * @license     MIT License
 */
class Tickets extends Admin_Controller {

    public $validation_rules = array(
        'submit_ticket' => array(
            ['field' => 'subject' , 'rules' => 'required|htmlspecialchars|max_length[100]' ,
                'label' => 'موضوع' ] ,
            ['field' => 'content' , 'rules' => 'required|trim|max_length[1000]' , 'label' => 'متن پیام' ] ,
        )
    );

    public function __construct () {
        parent::__construct();
        $this->load->eloquent('Ticket');
        $this->load->eloquent('Ticket_reply');
    }

    public function index ( $user_id = null ) {
        $this->smart->addJS('js/ckeditor/ckeditor.js');
        $this->smart->addJS('js/ckeditor/jquery.ckeditor.js');
        $this->smart->assign(
                [
                    'title' => 'ارسال تیکت به مدیریت' ,
                    'Roles' => $this->sentinel->getRoleRepository()->all() ,
                    'user_id' => $user_id ,
                    'action' => site_url(ADMIN_PATH . '/contacts/tickets/submit-ticket') ,
                ]
        );
        $this->smart->view('ticket');
    }

    public function ticket_list () {
        $is_admin = $this->sentinel->getUser()->getRoles()->contains('slug' , SUPER_ADMIN);
        $user_id = $this->user->id;
        $messages = Ticket::orderBy('created_at' , 'desc')->get();
        $this->smart->assign(
                [
                    'title' => 'ارسال تیکت' ,
                    'Contacts' => $messages ,
                    'action' => site_url(ADMIN_PATH . '/contacts/tickets/submit-ticket') ,
                ]
        );
        $this->smart->view('list_ticket');
    }

    public function ticket_user () {
        $is_admin = $this->sentinel->getUser()->getRoles()->contains('slug' , SUPER_ADMIN);
        $user_id = $this->user->id;
        $messages = Ticket::orderBy('created_at' , 'desc')->get();
        $this->smart->assign(
                [
                    'title' => 'ارسال تیکت' ,
                    'Contacts' => $messages ,
                    'action' => site_url(ADMIN_PATH . '/contacts/tickets/submit-ticket') ,
                ]
        );
        $this->smart->view('list_ticket');
    }

    public function view_ticket ( $id ) {
        $this->smart->addJS('js/ckeditor/ckeditor.js');
        $this->smart->addJS('js/ckeditor/jquery.ckeditor.js');
        $Contact = Ticket::find($id);
        $this->show_404_on(!$id);
        $this->show_404_on(!$Contact);
        $this->smart->assign(
                [
                    'title' => 'تیکت ها' ,
                    'Contact' => $Contact ,
                    'action' => site_url(ADMIN_PATH . '/contacts/tickets/submit-ticket/' . $id) ,
                    'logged_in_user_id' => $this->user->id ,
                ]
        );
        $this->smart->view('contacts/view_ticket');
    }

    public function submit_ticket ( $id ) {
        $Contact = Ticket::find($id);
        $data = [ ];
        if ( $this->formValidate(FALSE) ) {
            $reply['user_id'] = $this->user->id;
            $reply['ticket_id'] = $id;
            $reply['content'] = $this->input->post('content' , true);
            if ( Ticket_reply::create($reply) ) {
                $Contact->update(array( 'status' => 2 ));
                $this->message->set_message('پیام شما ارسال شد' , 'success' , 'ارسال تیکت' , ADMIN_PATH . '/contacts/tickets/ticket-list')->redirect();
            }
        }
        else {
            $this->message->set_message('پیام ارسال نشد.' . validation_errors() , 'warning' , 'ارسال تیکت' , ADMIN_PATH . '/contacts/tickets/view-ticket/' . $id)->redirect();
        }
    }

    public function set_seen () {
        $id = $this->input->post('input');
        $this->show_404_on(!$id);
        header('Content-type: application/json');
        $saeed = Ticket::find($id);
        if ( $this->user->id == $saeed->from )
            die();

        $saeed->status = 1;
        $saeed->seen_datetime = date("Y-m-d H:i:s");
        if ( $saeed->save() )
            echo json_encode(array( 'success' => 1 ));
        else
            echo json_encode(array( 'success' => 0 ));
        die();
    }

    public function __fetch_from_PostArray () {
        $data = [ ];
        foreach ( $this->input->post() as $name => $value ) {
            $data[$name] = $value;
        }
        return $data;
    }

    public function delete ( $ticket_id = null ) {
        if ( $Ticket = Contact::find($ticket_id) ) {
            if ( $Ticket->delete() )
                $this->message->set_message('تیکت مربوطه حذف گردید' , 'success' , 'حذف تیکت' , ADMIN_PATH . '/contacts/contact-us/tickets')->redirect();
        }
        else {
            show_404();
        }
    }

}
