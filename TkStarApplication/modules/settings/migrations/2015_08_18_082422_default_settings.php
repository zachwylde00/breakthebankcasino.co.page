<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class DefaultSettings extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::table('settings')->insert([
            'id' => '1',
            'name' => 'صفحه ی اصلی',
            'code' => 'homepage',
            'value' => 'home',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
        Capsule::table('settings')->insert([
            'id' => '2',
            'name' => 'نام سایت',
            'code' => 'site_name',
            'value' => 'سیستم مدیریت محتوای میروک',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
        Capsule::table('settings')->insert([
            'id' => '3',
            'name' => 'زبان سایت',
            'code' => 'lang',
            'value' => 'en',
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
        Capsule::table('settings')->delete(1);
        Capsule::table('settings')->delete(2);
        Capsule::table('settings')->delete(3);
    }

}
