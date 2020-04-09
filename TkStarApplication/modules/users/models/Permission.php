<?php

use \Illuminate\Database\Eloquent\Model as Model;
use Illuminate\Contracts\Support\Jsonable;
use Illuminate\Contracts\Support\Arrayable;
class Permission extends Model implements ArrayAccess {

    /**
     *
     * @var string 
     */
    protected $table = "permissions";
    protected $fillable = ['module_name', 'permission'];

}
