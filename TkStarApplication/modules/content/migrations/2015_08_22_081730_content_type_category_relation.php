<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class ContentTypeCategoryRelation extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->table('content_categories', function (Blueprint $table) {
            $table->integer('content_type_id')->unsigned();
            $table->foreign('content_type_id')->references('id')->on('content_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->table('content_categories', function (Blueprint $table) {
            $table->dropForeign('content_type_id');
            $table->dropColumn('content_type_id')->unsigned();
        });
    }

}
