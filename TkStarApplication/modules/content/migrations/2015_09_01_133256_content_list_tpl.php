<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class ContentListTpl extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->table('content_types', function (Blueprint $table) {
            $table->string('list_tpl', 100);
        });
        Capsule::schema()->table('content_categories', function (Blueprint $table) {
            $table->string('list_tpl', 100);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->table('content_types', function (Blueprint $table) {
            $table->dropColumn('list_tpl');
        });
        Capsule::schema()->table('content_categories', function (Blueprint $table) {
            $table->dropColumn('list_tpl');
        });
    }

}
