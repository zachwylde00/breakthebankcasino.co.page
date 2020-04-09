<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class DefaultMenu extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Capsule::table('menu_groups')->insert([
            'id' => '1',
            'name' => 'منوی کناری پنل مدیریت',
            'is_admin' => 1,
            'code' => 'admin_side',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
        Capsule::table('menus')->insertGetId([
            'title' => 'داشبورد',
            'target' => '#',
            'parent_id' => null,
            'group_id' => 1,
            'status' => 1,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
        $id = Capsule::table('menus')->insertGetId([
            'title' => 'کاربران',
            'target' => '#',
            'parent_id' => null,
            'group_id' => 1,
            'status' => 1,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
        Capsule::table('menus')->insert([
            'title' => 'لیست کاربران',
            'target' => ADMIN_PATH.'/users',
            'parent_id' => $id,
            'group_id' => 1,
            'status' => 1,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
        Capsule::table('menus')->insert([
            'title' => 'گروه ها',
            'target' =>ADMIN_PATH. '/users/roles',
            'parent_id' => $id,
            'group_id' => 1,
            'status' => 1,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
        $id = Capsule::table('menus')->insertGetId([
            'title' => 'محتوا',
            'target' => '#',
            'parent_id' => null,
            'group_id' => 1,
            'status' => 1,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
        Capsule::table('menus')->insert([
            'title' => 'نوع محتوا',
            'target' => ADMIN_PATH.'/content/content-types',
            'parent_id' => $id,
            'group_id' => 1,
            'status' => 1,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
        Capsule::table('menus')->insert([
            'title' => 'دسته بندی محتوا',
            'target' => ADMIN_PATH.'/content/content-categories',
            'parent_id' => $id,
            'group_id' => 1,
            'status' => 1,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
        Capsule::table('menus')->insert([
            'title' => 'پست ها',
            'target' => ADMIN_PATH.'/content/entries',
            'parent_id' => $id,
            'group_id' => 1,
            'status' => 1,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
        $id = Capsule::table('menus')->insertGetId([
            'title' => 'منوها',
            'target' => ADMIN_PATH.'/menu/menus',
            'parent_id' => null,
            'group_id' => 1,
            'status' => 1,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
        Capsule::table('menus')->insert([
            'title' => 'لیست گروه های منو',
            'target' => ADMIN_PATH.'/menu/menu-groups',
            'parent_id' => $id,
            'group_id' => 1,
            'status' => 1,
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
        ]);
        Capsule::table('menus')->insert([
            'title' => 'لیست لینک ها',
            'target' => ADMIN_PATH.'/menu/menus',
            'parent_id' => $id,
            'group_id' => 1,
            'status' => 1,
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
    }

}
