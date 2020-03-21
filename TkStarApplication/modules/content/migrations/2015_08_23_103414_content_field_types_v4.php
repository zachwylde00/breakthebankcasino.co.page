<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class ContentFieldTypesV4 extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->table('content_field_types', function (Blueprint $table) {
            $table->string('dest_table');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->table('content_field_types', function (Blueprint $table) {
            $table->dropColumn('dest_table');
        });
    }

}
