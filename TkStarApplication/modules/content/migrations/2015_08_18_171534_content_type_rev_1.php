<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class ContentTypeRev1 extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->table('content_types', function (Blueprint $table) {
            $table->dropColumn('compiler');
            $table->dropColumn('template');
            $table->string('short_tpl', 100);
            $table->string('full_tpl', 100);
            $table->integer('parent_id')->unsigned()->nullable();
            $table->foreign('parent_id')->references('id')->on('content_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->table('content_types', function (Blueprint $table) {
            $table->enum('compiler', array('php', 'smarty', 'none'));
            $table->longText('template');
            $table->dropColumn('short_tpl');
            $table->dropColumn('full_tpl');
            $table->dropColumn('parent_id');
        });
    }

}
