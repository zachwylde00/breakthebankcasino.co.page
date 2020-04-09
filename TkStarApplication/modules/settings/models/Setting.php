<?php
use Illuminate\Database\Eloquent\Model as EloquentModel;
class Setting extends EloquentModel{
    public static function findByCode($code){
        return(self::where('code' , $code)->first());
    }
    public static function setHomePage($HomePageID){
		$homepage = Setting::where('code' , 'homepage');
        return($homepage->update(array('value' => $HomePageID)));
    }
}
?>