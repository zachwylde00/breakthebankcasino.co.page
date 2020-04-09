<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class AddThemeSetting extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        Capsule::table('settings')->insert([
            'id' => 8,
            'name' => 'قالب سایت',
            'code' => 'theme',
            'value' => 'mirook-2015',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        //
        Capsule::table('settings')->delete(6);
    }

}
