<?php

class Settings extends Admin_Controller {

    public $validation_rules = array(
        'index' => array(
            ['field' => 'site_name' , 'rules' => 'trim|required|htmlspecialchars' , 'label' => 'عنوان سایت' ] ,
            ['field' => 'homepage' , 'rules' => 'numeric|required|htmlspecialchars' , 'label' => 'صفحه اصلی' ] ,
            ['field' => 'custom_error_page' , 'rules' => 'htmlspecialchars' , 'label' => 'صفحه خطا' ] ,
            ['field' => 'site_status' , 'rules' => 'numeric|htmlspecialchars' , 'label' => 'وضعیت سایت' ] ,
            ['field' => 'footer' , 'rules' => 'htmlspecialchars' , 'label' => 'متن فوتر سایت' ] ,
        )
    );

    public function __construct () {
        parent::__construct();
        $this->load->eloquent('Setting');
    }

    public function trans () {
        
        if ( $this->input->post('fa') ) {
            $fa = addslashes($this->input->post('fa'));
            $en = addslashes($this->input->post('en'));
            $txt = "\$lang['$en'] = '$fa'; \n";
            file_put_contents(APPPATH . 'application/language/persian/team_lang.php' , $txt , FILE_APPEND | LOCK_EX);
            redirect(ADMIN_PATH.'/settings/settings/trans');
        }
        else {
            $this->smart->assign(['title'=>'ترجمه نام تیم‌ها']);
            $this->smart->view('trans');
        }
    }

    public function bannInplays () {
        
        if ( $this->input->post('bannID') && $this->input->post('oddO')) {
            $bannID = addslashes($this->input->post('bannID'));
            $oddO = addslashes($this->input->post('oddO'));
            $txt = "\$banned[] = array('id' => $bannID, 'oddO' => " . $oddO . ");\n";
            file_put_contents(APPPATH . 'application/language/persian/bannInplays.php' , $txt , FILE_APPEND | LOCK_EX);
            redirect(ADMIN_PATH.'/settings/settings/bannInplays');
        }
        else {
            $this->smart->assign(['title'=>'حذف ضرایب آنلاین']);
            $this->smart->view('bannInplays');
        }
    }

    public function deleteBannInplays ($bannID, $oddO) {
        $file_get_contents = file_get_contents(APPPATH . 'application/language/persian/bannInplays.php');
		$file_get_contents = (string)$file_get_contents;
		$txt = "\$banned[] = array('id' => $bannID, 'oddO' => $oddO);";
		$txt_replace = "";
		$file_get_contents = str_replace($txt, $txt_replace, $file_get_contents);
		$file_get_contents = trim($file_get_contents);
		$file_get_contents = str_replace("\n", "", $file_get_contents);
		$file_get_contents = str_replace("<?php", "<?php\n", $file_get_contents);
		file_put_contents(APPPATH . 'application/language/persian/bannInplays.php', (string)$file_get_contents . "\n");
		redirect(ADMIN_PATH.'/settings/settings/bannInplays');
	}

    public function leaguesHandle () {

        if ( $this->input->post('leagueName') && $this->input->post('visitorTeam') && $this->input->post('localTeam')) {
            $leagueName = addslashes($this->input->post('leagueName'));
            $visitorTeam = addslashes($this->input->post('visitorTeam'));
            $localTeam = addslashes($this->input->post('localTeam'));
            $txt = "\$leagues[] = array('league' => '" . $leagueName . "', 'visitor' => '" . $visitorTeam . "', 'local' => '" . $localTeam . "');\n";
            file_put_contents(APPPATH . 'application/language/persian/leagues.php' , $txt , FILE_APPEND | LOCK_EX);
            redirect(ADMIN_PATH.'/settings/settings/leaguesHandle');
        }
        else {
            $this->smart->assign(['title'=>'دسته بندی لیگ ها']);
            $this->smart->view('leaguesHandle');
        }
    }

    public function deleteLeaguesHandle ($league, $local, $visitor) {
        $file_get_contents = file_get_contents(APPPATH . 'application/language/persian/leagues.php');
		$file_get_contents = (string)$file_get_contents;
        $txt = "\$leagues[] = array('league' => '" . urldecode($league) . "', 'visitor' => '" . urldecode($visitor) . "', 'local' => '" . urldecode($local) . "');";
		$txt_replace = "";
		$file_get_contents = str_replace($txt, $txt_replace, $file_get_contents);
		$file_get_contents = trim($file_get_contents);
		$file_get_contents = str_replace("\n", "", $file_get_contents);
		$file_get_contents = str_replace("<?php", "<?php\n", $file_get_contents);
		file_put_contents(APPPATH . 'application/language/persian/leagues.php', (string)$file_get_contents . "\n");
		redirect(ADMIN_PATH.'/settings/settings/leaguesHandle');
	}

    public function index () {
        $site_name = Setting::findByCode('site_name');
        $homepage = Setting::findByCode('homepage');
        $site_status = Setting::findByCode('site_status');
        $footer = Setting::findByCode('footer');
        $theme = Setting::findByCode('theme');
        $affiliate_count = Setting::findByCode('affiliate_count');
        $copyright = Setting::findByCode('copyright');
        $theme = Setting::findByCode('theme');
        $available_themes = new \League\Flysystem\Adapter\Local(FCPATH . 'themes/default');
        $themes = $available_themes->listContents();
        $custom_error_page = Setting::findByCode('custom_error_page');
        $this->smart->assign([
            'title' => 'تنظیمات کلی سیستم' ,
            'server_signature' => $this->input->server('SERVER_SIGNATURE') ,
            'display_errors' => ini_get('display_errors') ? 'فعال' : 'غیرفعال' ,
            'post_max_size' => ini_get('post_max_size') ,
            'site_name' => $site_name->value ,
            'copyright' => $copyright->value ,
            'homepage' => $homepage ,
            'site_status' => $site_status->value ,
            'footer' => $footer->value ,
            'affiliate_count' => $affiliate_count->value ,
            'themes' => $themes ,
            'current_theme' => $theme->value ,
            'custom_error_page' => $custom_error_page ,
        ]);
        if ( $this->formValidate(FALSE) ) {
            $data = [
                'site_name' => $this->input->post('site_name') ,
                'copyright' => $this->input->post('copyright') ,
                'custom_error_page' => $this->input->post('custom_error_page') ,
                'homepage' => $this->input->post('homepage') ,
                'site_status' => $this->input->post('site_status') ,
                'footer' => $this->input->post('footer') ,
                'affiliate_count' => $this->input->post('affiliate_count') ,
                'theme' => $this->input->post('theme') ,
            ];
            foreach ( $data as $key => $val ) {
                $affected_row = Setting::where('code' , $key)->update(['value' => $val ]);
            }
            if ( $affected_row ) {
                $this->message->set_message('اطلاعات با موفقیت بروزرسانی شد' , 'success' , 'بروزرسانی' , ADMIN_PATH . '/settings')->redirect();
            }
            else {
                $this->message->set_message('ذخیره سازی انجام نشد. مجدد تلاش کنید' , 'fail' , 'خطا در ذخیره سازی' , ADMIN_PATH . '/settings')->redirect();
            }
            redirect(ADMIN_PATH . '/settings');
        }
        $this->smart->view('edit');
    }
}
?>