<?php

use Illuminate\Database\Capsule\Manager as DB;

class CommentMigrator
{
    public function up()
    {
        DB::schema()->dropIfExists('comments');

        DB::schema()->create('comments', function ($table) {
            $table->increments('id');
            $table->timestamps();

            $table->string('title')->nullable();
            $table->text('body');

            $table->integer('parent_id')->nullable();
            $table->integer('lft')->nullable();
            $table->integer('rgt')->nullable();
            $table->integer('depth')->nullable();

            $table->morphs('commentable');
            $table->integer('user_id')->unsigned();

            $table->index('user_id');
            $table->index('commentable_id');
            $table->index('commentable_type');

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    public function down()
    {
        DB::schema()->drop('comments');
    }
}
