<?php namespace Lanz\Commentable;

trait Commentable
{
    /**
     * This model has many comments.
     *
     * @return Comment
     */
    public function comments()
    {
        return $this->morphMany('Lanz\Commentable\Comment', 'commentable');
    }
}
