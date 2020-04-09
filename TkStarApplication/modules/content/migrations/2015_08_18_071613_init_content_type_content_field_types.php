<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class InitContentTypeContentFieldTypes extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->dropIfExists('content_type_content_field_types');
        Capsule::schema()->create('content_type_content_field_types', function (Blueprint $table) {
            $table->integer('content_type_id')->unsigned();
            $table->integer('content_field_type_id')->unsigned();
            $table->string('name', 40);
            $table->string('slug', 200);
            $table->primary('slug');
            $table->foreign('content_type_id')->references('id')->on('content_types');
            $table->foreign('content_field_type_id')->references('id')->on('content_field_types');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->drop('content_type_content_field_types');
    }

}
