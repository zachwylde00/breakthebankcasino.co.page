<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class ContentTypeDataV2 extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->table('content_entry_field_int', function (Blueprint $table) {
            $table->timestamps();
        });
        Capsule::schema()->table('content_entry_field_short', function (Blueprint $table) {
            $table->timestamps();
        });
        Capsule::schema()->table('content_entry_field_long', function (Blueprint $table) {
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->table('content_entry_field_int', function (Blueprint $table) {
            $table->dropTimestamps();
        });
        Capsule::schema()->table('content_entry_field_short', function (Blueprint $table) {
            $table->dropTimestamps();
        });
        Capsule::schema()->table('content_entry_field_long', function (Blueprint $table) {
            $table->dropTimestamps();
        });
    }

}
