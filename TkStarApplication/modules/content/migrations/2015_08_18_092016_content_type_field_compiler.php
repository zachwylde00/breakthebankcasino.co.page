<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class ContentTypeFieldCompiler extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->table('content_types', function (Blueprint $table) {
            $table->enum('compiler', array('php', 'smarty', 'none'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->table('content_types', function (Blueprint $table) {
//            $table->dropColumn('compiler');
        });
    }

}
