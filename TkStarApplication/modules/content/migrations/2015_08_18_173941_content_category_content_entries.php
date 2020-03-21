<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class ContentCategoryContentEntries extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->create('content_category_content_entries', function (Blueprint $table) {
            $table->integer('content_entry_id')->unsigned();
            $table->integer('content_category_id')->unsigned();
            $table->foreign('content_entry_id')->references('id')->on('content_entries');
            $table->foreign('content_category_id')->references('id')->on('content_categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->drop('content_category_content_entries');
    }

}
