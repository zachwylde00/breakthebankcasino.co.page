<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class IntializePagesModule extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->dropIfExists('pages');
        Capsule::schema()->create('pages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50);
            $table->string('slug', 50);
            $table->longText('body');
            $table->integer('order');
            $table->boolean('status');
            $table->enum('compiler', array('php', 'smarty', 'none'));
            $table->timestamps();
        });
        Capsule::table('pages')->insert([
            'name' => 'صفحه ی اصلی',
            'slug' => 'home',
            'body' => 'Welcome to Home!',
            'order' => 1,
            'status' => 1,
            'compiler' => 'smarty'
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->drop('pages');
    }

}
