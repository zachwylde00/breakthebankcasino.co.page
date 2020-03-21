<?php

class CommentTest extends CommentableTestCase
{
    public function testHasChildrenReturnsTrueIfCommentsHasChildren()
    {
        $comment = Comment::find(3);

        $this->assertTrue($comment->hasChildren());
    }

    public function testHasChildrenReturnsFalseIfCommentsHasntChildren()
    {
        $comment = Comment::find(2);

        $this->assertFalse($comment->hasChildren());
    }
}
