<?php
class Contact_us extends Public_Controller {
    public function __construct () {
        parent::__construct();
        $this->load->eloquent('Contact');
		$this->load->sentinel();
    }
    public function delete ( $contact_id = null ) {
        if($Content_categories = Content_category::find($contact_id)){
            if($Content_categories->delete()){
                $this->message->set_message('دسته بندی محتوای مربوطه حذف گردید' , 'success' , 'حذف دسته بندی محتوا' , ADMIN_PATH . '/content/categories')->redirect();
			}else{
				return false;
			}
        }else{
            show_404();
        }
    }
}
?>