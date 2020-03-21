<?php


/**
 * Contact_us Controller
 *
 *
 * @copyright   Copyright (c) 2015
 * @license     MIT License
 * @link http://www.mirook.ir exclusive CMS for mirookSoft Co.
 */
class Contact_us extends Admin_Controller{

    public function __construct()
    {
        parent::__construct();
        $this->load->eloquent('Contact');
        $this->load->eloquent("Seen");
    }

    public function index()
    {
        $Contacts = Contact::getContacts();
        $this->smart->assign(
                [
                    'title' => 'پیام ها',
                    'Contacts' => $Contacts,
                ]
        );
        $this->smart->view('contacts/index');
    }

    public function view_announce($id)
    {
        $Contact = Contact::find($id);
        $this->show_404_on(!$id);
        $this->show_404_on(!$Contact);
        if(Seen::where(['contact_id' => $id, 'user_id' => $this->user->id])->count() > 0) {
            $Contact['seen_status'] = 1;
        }
        else {
            $Contact['seen_status'] = 0;
        }
        $this->smart->assign(
                [
                    'title' => 'اعلانیه ها',
                    'Contact' => $Contact,
                ]
        );
        $this->smart->view('contacts/view_announce');
    }

    public function view_contact($id)
    {
        $Contact = Contact::find($id);
        $this->show_404_on(!$id);
        $this->show_404_on(!$Contact);
        $this->smart->assign(
                [
                    'title' => 'تماس از سایت',
                    'Contact' => $Contact,
                ]
        );
        $this->smart->view('contacts/view_contact');
    }

    public function list_announce()
    {
        $this->load->eloquent('Seen');
        $Contacts = Contact::getAnnouncement();
        $Contacts_personal = Contact::getAnnounceFront($this->user->id);
        $Contacts = $Contacts->merge($Contacts_personal);
        foreach($Contacts as $key => $val):
            if(Seen::where(['contact_id' => $val->id, 'user_id' => $this->user->id])->count() > 0) {
                $Contacts[$key]['seen_status'] = 1;
                $Contacts[$key]['seen_date'] = $val->seen->seen_date;
            }
            else {
                $Contacts[$key]['seen_status'] = 0;
            }
        endforeach;
        //  dd($Contacts);
        $this->show_404_on(!$Contacts);
        $this->smart->assign(
                [
                    'title' => 'اعلانیه ها',
                    'Contacts' => $Contacts,
                ]
        );
        $this->smart->view('contacts/list_announce');
    }

    public function set_seen()
    {
        $id = $this->input->post('input');
        $this->show_404_on(!$id);
        $saeed = new Seen();
        $saeed->user_id = $this->user->id;
        $saeed->contact_id = $id;
        $saeed->seen = 1;
        $saeed->seen_date = date('Y-m-d H:i:s');
        header('Content-type: application/json');
        if($saeed->save()) echo json_encode(array('success' => 1));
        else echo json_encode(array('success' => 0));
        die();
    }

    public function set_seen_contact()
    {
        $id = $this->input->post('input');
        $this->show_404_on(!$id);
        $contact = Contact::find($id);
        $this->show_404_on(!$contact);
        $contact->seen_status_contact = 1;
        header('Content-type: application/json');
        if($contact->save()) echo json_encode(array('success' => 1));
        else echo json_encode(array('success' => 0));
        die();
    }

    public function tickets()
    {
        $Tickets = Contact::getTickets();
        $this->smart->assign(
                [
                    'title' => 'تیکت های کاربران',
                    'Tickets' => $Tickets,
                ]
        );
        $this->smart->view('contacts/admin_ticket');
    }
    public function ticket_user ( $user_id = null ) {die('s');
        $this->smart->addJS('js/ckeditor/ckeditor.js');
        $this->smart->addJS('js/ckeditor/jquery.ckeditor.js');
        $this->smart->assign(
            [
                'title' => 'asas' ,
                'action' => site_url(ADMIN_PATH . '/contacts/tickets/submit-ticket'),
            ]
        );
        $this->smart->view('ticket');
    }

    public function delete($contact_id = null)
    {
        if($contact = Contact::find($contact_id)) {
            if($contact->delete())
                    $this->message->set_message('  تماس مربوطه حذف گردید',
                        'success', 'حذف پیغام',
                        ADMIN_PATH . '/contacts/contact-us')->redirect();
        }
        else {
            show_404();
        }
    }

}
