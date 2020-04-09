<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class ContentEntryContentEntries extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->create('content_entry_relations', function (Blueprint $table) {
            $table->integer('content_entry_1_id')->unsigned();
            $table->integer('content_entry_2_id')->unsigned();
            $table->foreign('content_entry_1_id')->references('id')->on('content_entries');
            $table->foreign('content_entry_2_id')->references('id')->on('content_entries');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->drop('content_entry_relations');
    }

}
