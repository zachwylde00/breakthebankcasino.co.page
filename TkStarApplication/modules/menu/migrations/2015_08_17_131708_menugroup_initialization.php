<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class MenugroupInitialization extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->dropIfExists('menu_groups');
        Capsule::schema()->create('menu_groups', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('is_admin');
            $table->string('name', 40);
            $table->string('code', 10);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->drop('menu_groups');
    }

}
