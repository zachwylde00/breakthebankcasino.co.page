<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class UserPermissionDump extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        Capsule::table('permissions')->insert([
            'module_name' => 'کاربران',
            'permission' => 'users.admin',
            'label' => 'کاربران',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'کاربران',
            'permission' => 'users.admin.users.delete',
            'label' => 'حذف کاربران',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'کاربران',
            'permission' => 'users.admin.users.edit',
            'label' => 'افزودن و ویرایش کاربران',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'کاربران',
            'permission' => 'users.admin.users.index',
            'label' => 'مشاهده لیست کاربران',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'گروه های کاربری',
            'permission' => 'users.admin.users.roles.index',
            'label' => 'مشاهده لیست گروه های کاربران',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'گروه های کاربری',
            'permission' => 'users.admin.users.roles.edit',
            'label' => 'افزودن و ویرایش گروه کاربران',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'گروه های کاربری',
            'permission' => 'users.admin.users.roles.delete',
            'label' => 'حذف گروه کاربران',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'تنظیمات',
            'permission' => 'settings.admin',
            'label' => 'تنظیمات سیستم',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'منو',
            'permission' => 'menu.admin.menus',
            'label' => 'منو',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'منو',
            'permission' => 'menu.admin.menus.index',
            'label' => 'مشاهده لیست منوها',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'منو',
            'permission' => 'menu.admin.menus.edit',
            'label' => 'ویرایش و افزودن منو',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'منو',
            'permission' => 'menu.admin.menus.delete',
            'label' => 'حذف منو',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'محتوا',
            'permission' => 'content.admin.content_types.edit',
            'label' => 'ویرایش و افزودن نوع محتوا',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'محتوا',
            'permission' => 'content.admin.content_types.delete',
            'label' => 'حذف نوع محتوا',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'محتوا',
            'permission' => 'content.admin.content_types.index',
            'label' => 'مشاهده لیست نوع محتوا',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'محتوا',
            'permission' => 'content.admin.content_types',
            'label' => 'نوع محتوا',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'محتوا',
            'permission' => 'content.admin.entries',
            'label' => 'پست ها',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'محتوا',
            'permission' => 'content.admin.entries.index',
            'label' => 'مشاهده لیست پست ها',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'محتوا',
            'permission' => 'content.admin.entries.edit',
            'label' => 'ویرایش و افزودن پست ها',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'محتوا',
            'permission' => 'content.admin.entries.delete',
            'label' => 'حذف پست ها',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'محتوا',
            'permission' => 'content.admin.categories',
            'label' => 'دسته بندی ها',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'محتوا',
            'permission' => 'content.admin.categories.edit',
            'label' => 'افزودن و ویرایش دسته بندی ها',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'محتوا',
            'permission' => 'content.admin.categories.delete',
            'label' => 'حذف دسته بندی ها',
        ]);
        Capsule::table('permissions')->insert([
            'module_name' => 'محتوا',
            'permission' => 'content.admin.categories.index',
            'label' => 'مشاهده لیست دسته بندی ها',
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        //
    }

}
