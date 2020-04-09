<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class ContentTypeFieldTypeRev2 extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->dropIfExists('content_fields');
        Capsule::schema()->table('content_type_content_field_types', function (Blueprint $table) {
            $table->dropPrimary('slug');
        });
        Capsule::schema()->table('content_type_content_field_types', function (Blueprint $table) {
            $table->increments('id');
        });
        Capsule::schema()->create('content_entry_fields', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('content_entry_id')->unsigned();
            $table->integer('content_type_field_type_id')->unsigned();
            $table->morphs('valuable');
            $table->foreign('content_entry_id')->references('id')->on('content_entries');
            $table->foreign('content_type_field_type_id')->references('id')->on('content_type_content_field_types');
        });
        Capsule::schema()->create('content_entry_field_int', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('content_entry_field_id')->unsigned()->nulllable();
            $table->integer('value')->unsigned();
            $table->foreign('content_entry_field_id')->references('id')->on('content_entry_fields');
        });
        Capsule::schema()->create('content_entry_field_short', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('content_entry_field_id')->unsigned()->nulllable();
            $table->string('value');
            $table->foreign('content_entry_field_id')->references('id')->on('content_entry_fields');
        });
        Capsule::schema()->create('content_entry_field_long', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('content_entry_field_id')->unsigned()->nulllable();
            $table->longText('value');
            $table->foreign('content_entry_field_id')->references('id')->on('content_entry_fields');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->dropIfExists('entry_field_int');
        Capsule::schema()->dropIfExists('entry_field_short');
        Capsule::schema()->dropIfExists('entry_field_long');
        Capsule::schema()->dropIfExists('content_entry_fields');
        Capsule::schema()->table('content_type_content_field_types', function (Blueprint $table) {
            $table->dropColumn('id');
            $table->primary('slug');
        });
        Capsule::schema()->create('content_fields', function (Blueprint $table) {
            $table->integer('content_entry_id')->unsigned();
            $table->increments('id');
            $table->string('slug', 10);
            $table->string('value', 40);
            $table->foreign('content_entry_id')->references('id')->on('content_entries');
            $table->foreign('slug')->references('slug')->on('content_type_content_field_types');
            $table->timestamps();
        });
    }

}
