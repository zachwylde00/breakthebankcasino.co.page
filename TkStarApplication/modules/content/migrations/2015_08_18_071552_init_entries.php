<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class InitEntries extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->dropIfExists('content_entries');
        Capsule::schema()->create('content_entries', function (Blueprint $table) {
            $table->integer('content_type_id')->unsigned();
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('slug', 200);
            $table->string('title', 40);
            $table->longText('body');
            $table->tinyInteger('status');
            $table->foreign('content_type_id')->references('id')->on('content_types');
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->drop('content_entries');
    }

}
