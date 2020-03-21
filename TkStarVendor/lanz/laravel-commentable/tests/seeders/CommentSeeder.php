<?php

use Illuminate\Database\Capsule\Manager as DB;

class CommentSeeder
{
    public function run()
    {
        DB::table('comments')->delete();

        Comment::unguard();

        $post1 = Post::find(1);
        $post2 = Post::find(2);
        $user1 = User::find(1);
        $user2 = User::find(2);

        Comment::create(['id' => 1, 'body' => 'Root - Post 1', 'lft' => 1, 'rgt' => 10, 'depth' => 0, 'commentable_id' => $post1->id, 'commentable_type' => 'Post', 'user_id' => $user1->id]);
        Comment::create(['id' => 2, 'body' => 'Child 1 - Post 1', 'lft' => 2, 'rgt' => 3, 'depth' => 1, 'parent_id' => 1, 'commentable_id' => $post1->id, 'commentable_type' => 'Post', 'user_id' => $user2->id]);
        Comment::create(['id' => 3, 'body' => 'Child 2 - Post 1', 'lft' => 4, 'rgt' => 7, 'depth' => 1, 'parent_id' => 1, 'commentable_id' => $post1->id, 'commentable_type' => 'Post', 'user_id' => $user1->id]);
        Comment::create(['id' => 4, 'body' => 'Child 2.1 - Post 1', 'lft' => 5, 'rgt' => 6, 'depth' => 2, 'parent_id' => 3, 'commentable_id' => $post1->id, 'commentable_type' => 'Post', 'user_id' => $user2->id]);
        Comment::create(['id' => 5, 'body' => 'Child 3 - Post 1', 'lft' => 8, 'rgt' => 9, 'depth' => 1, 'parent_id' => 1, 'commentable_id' => $post1->id, 'commentable_type' => 'Post', 'user_id' => $user1->id]);
        Comment::create(['id' => 6, 'body' => 'Root - Post 2', 'lft' => 11, 'rgt' => 12, 'depth' => 0, 'commentable_id' => $post2->id, 'commentable_type' => 'Post', 'user_id' => $user1->id]);

        Comment::reguard();
    }
}
