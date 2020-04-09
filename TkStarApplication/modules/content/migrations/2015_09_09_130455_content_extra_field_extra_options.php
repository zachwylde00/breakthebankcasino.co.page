<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class ContentExtraFieldExtraOptions extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->table('content_type_content_field_types', function (Blueprint $table) {
            $table->longText('extra_options');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->table('content_type_content_field_types', function (Blueprint $table) {
            $table->dropColumn('extra_options');
        });
    }

}
