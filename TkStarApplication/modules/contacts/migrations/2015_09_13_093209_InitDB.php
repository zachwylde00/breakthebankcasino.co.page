<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class InitDB extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->create('contacts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name_family', 100);
            $table->string('email', 60);
            $table->string('subject', 100)->nullable();
            $table->string('contact_page_desc', 1000)->nullable();
            $table->longText('message');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {

        Capsule::schema()->drop('contacts');
    }

}
