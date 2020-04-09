<?php

use Lanz\Commentable\Commentable;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use Commentable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public $fillable = ['title', 'body'];
}
