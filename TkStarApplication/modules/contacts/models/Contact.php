<?php


/**
 * Contact Model
 * 
 * @package		
 * @subpackage	
 * @copyright	
 *
 */
class Contact extends \Illuminate\Database\Eloquent\Model{

    /**
     *
     * @var string 
     */
    protected $table = "contacts";

    /**
     *
     * @var array 
     */
    protected $guarded = [];

    public function seen()
    {
        return $this->hasOne('Seen');
    }

    public static function getTickets()
    {
        return self::where('is_ticket', 1)->get();
    }

    public static function getAnnouncement($user_id = null)
    {
        return self::where(function($query) use ($user_id) {
                    $query->where('is_announcement', 1);
                })->orderBy('created_at', 'desc')->get();
    }

    public static function getContacts()
    {
        return self::where(['is_announcement' => 0, 'is_ticket' => 0, 'is_site_contact' => 1])->get();
    }

    public static function getAnnounceFront($user_id)
    {
        return self::where(function($query) use ($user_id) {

                    $query->where('is_announcement', 1)
                            ->orWhere(['is_announcement' => 0, 'user_id' => $user_id]);
                })->orderBy('created_at', 'desc')->get();
    }

    public static function setSeen($id)
    {
        return self::where(['id' => $id, 'is_announcement' => 1, 'seen' => 0])->update(['seen' => 1,
                    'seen_date' => date('Y-m-d H:i:s')]);
    }

}
