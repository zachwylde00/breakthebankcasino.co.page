<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class InitContentFieldTypes extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->dropIfExists('content_field_types');
        Capsule::schema()->create('content_field_types', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 40);
            $table->string('slug', 200);
            $table->tinyInteger('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->drop('content_field_types');
    }

}
