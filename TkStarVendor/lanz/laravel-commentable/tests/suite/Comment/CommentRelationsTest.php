<?php

class CommentRelationsTest extends CommentableTestCase
{
    public function testCommentableIsAMorphTo()
    {
        $comment = new Comment();

        $this->assertInstanceOf('Illuminate\Database\Eloquent\Relations\MorphTo', $comment->commentable());
    }

    public function testUserIsABelongsTo()
    {
        $comment = new Comment();

        $this->assertInstanceOf('Illuminate\Database\Eloquent\Relations\BelongsTo', $comment->user());
    }
}
