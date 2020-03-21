<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class UserPermissions extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::schema()->create('permissions', function(Blueprint $table) {
            $table->string('module_name', 255);
            $table->string('permission', 255);
            $table->string('label', 255);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {

        Capsule::schema()->dropIfExists('permissions');
    }

}
