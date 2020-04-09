<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class ContentEntryRev1 extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->table('content_entries', function (Blueprint $table) {
            $table->dropColumn('body');
            $table->longText('full_story');
            $table->longText('short_story');
            $table->string('image', 100);
            $table->string('keyword', 100);
            $table->string('description', 100);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Capsule::schema()->table('content_entries', function (Blueprint $table) {
            $table->longText('body');
            $table->dropColumn('short_story');
            $table->dropColumn('full_story');
            $table->dropColumn('keyword');
            $table->dropColumn('description');
            $table->dropColumn('image');
        });
    }

}
