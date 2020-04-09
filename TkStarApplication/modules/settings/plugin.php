<?php
class Settings_plugin extends Plugin{
    public function get_param(){
        $name = $this->attribute('name', null);
        if(empty($name)){
            return false;
        }
        $this->load->eloquent('settings/Setting');
        if($setting = Setting::findByCode($name)){
            return($setting->value);
        }else{
			return false;
		}
    }
}
?>