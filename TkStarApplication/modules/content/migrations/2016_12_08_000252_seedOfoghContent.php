<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class SeedOfoghContent extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up () {
        $content_type_id = Capsule::table('content_types')->insertGetId([
            'name' => 'معرفی جایزه دهم' ,
            'slug' => 'جایزه-10' ,
            'status' => 1 ,
        ]);
        Capsule::table('content_categories')->insert([
            'name' => 'معرفی برنامه' ,
            'slug' => 'معرفی-برنامه' ,
            'content_type_id' => $content_type_id ,
        ]);
        Capsule::table('content_categories')->insert([
            'name' => 'معرفی مسابقه' ,
            'slug' => 'معرفی-مسابقه' ,
            'content_type_id' => $content_type_id ,
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down () {
        //
    }

}
