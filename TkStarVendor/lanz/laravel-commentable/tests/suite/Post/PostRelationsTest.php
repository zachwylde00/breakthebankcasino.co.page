<?php

class PostRelationsTest extends CommentableTestCase
{
    public function testCommentsIsAMorphMany()
    {
        $post = new Post();

        $this->assertInstanceOf('Illuminate\Database\Eloquent\Relations\MorphMany', $post->comments());
    }

    public function testCommentsReturnRelatedComments()
    {
        $post1 = Post::find(1);
        $post2 = Post::find(2);

        $this->assertEquals(5, $post1->comments()->count());
        $this->assertEquals(1, $post2->comments()->count());
    }
}
