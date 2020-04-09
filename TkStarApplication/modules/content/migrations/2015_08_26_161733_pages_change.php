<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class PagesChange extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->table('pages', function (Blueprint $table) {
            $table->dropColumn('body');
            $table->dropColumn('order');
            $table->string('tpl', 100);
        });
        Capsule::schema()->rename('pages', 'content_pages');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->table('pages', function (Blueprint $table) {
            $table->dropColumn('tpl');
            $table->longText('body');
            $table->integer('order');
        });
        Capsule::schema()->rename('content_pages', 'pages');
    }

}
