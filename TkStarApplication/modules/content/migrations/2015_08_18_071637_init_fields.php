<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class InitFields extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->dropIfExists('content_fields');
        Capsule::schema()->create('content_fields', function (Blueprint $table) {
            $table->integer('content_entry_id')->unsigned();
            $table->increments('id');
            $table->string('slug', 200);
            $table->string('value', 40);
            $table->foreign('content_entry_id')->references('id')->on('content_entries');
            $table->foreign('slug')->references('slug')->on('content_type_content_field_types');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->drop('content_fields');
    }

}
