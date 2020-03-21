<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class MenuInitialization extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->dropIfExists('menus');
        Capsule::schema()->create('menus', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 100);
            $table->string('target', 100);
            $table->string('icon', 20);
            $table->boolean('status');
            $table->integer('parent_id')->unsigned()->nullable();
            $table->integer('group_id')->unsigned()->nullable();
            $table->foreign('parent_id')->references('id')->on('menus');
            $table->foreign('group_id')->references('id')->on('menu_groups');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->drop('menus');
    }

}
