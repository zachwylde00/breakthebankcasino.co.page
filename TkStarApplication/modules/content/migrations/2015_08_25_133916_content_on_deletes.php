<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Capsule\Manager as Capsule;

class ContentOnDeletes extends Migration {

    /**
     * Run the migrations.
     *
     * @return void->onDelete('cascade')
     */
    public function up() {
        
        Capsule::schema()->table('content_types', function (Blueprint $table) {
            $table->dropForeign('content_types_parent_id_foreign');
            $table->foreign('parent_id')->references('id')->on('content_types')->onDelete('cascade');
        });
        
        
        Capsule::schema()->table('content_entries', function (Blueprint $table) {
            $table->dropForeign('content_entries_content_type_id_foreign');
            $table->dropForeign('content_entries_user_id_foreign');
            $table->foreign('content_type_id')->references('id')->on('content_types')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        
        
        
        Capsule::schema()->table('content_categories', function (Blueprint $table) {
            $table->dropForeign('content_categories_content_type_id_foreign');
            $table->foreign('content_type_id')->references('id')->on('content_types')->onDelete('cascade');
        });
        
        
        
        Capsule::schema()->table('content_category_content_entries', function (Blueprint $table) {
            $table->dropForeign('content_category_content_entries_content_category_id_foreign');
            $table->dropForeign('content_category_content_entries_content_entry_id_foreign');
            $table->foreign('content_entry_id')->references('id')->on('content_entries')->onDelete('cascade');
            $table->foreign('content_category_id')->references('id')->on('content_categories')->onDelete('cascade');
        });
        
        
        
        Capsule::schema()->table('content_type_content_field_types', function (Blueprint $table) {
            $table->dropForeign('content_type_content_field_types_content_type_id_foreign');
            $table->dropForeign('content_type_content_field_types_content_field_type_id_foreign');
            $table->foreign('content_type_id')->references('id')->on('content_types')->onDelete('cascade');
            $table->foreign('content_field_type_id')->references('id')->on('content_field_types')->onDelete('cascade');
        });
        
        
        
        Capsule::schema()->table('content_entry_relations', function (Blueprint $table) {
            $table->dropForeign('content_entry_relations_content_entry_1_id_foreign');
            $table->dropForeign('content_entry_relations_content_entry_2_id_foreign');
            $table->foreign('content_entry_1_id')->references('id')->on('content_entries')->onDelete('cascade');
            $table->foreign('content_entry_2_id')->references('id')->on('content_entries')->onDelete('cascade');
        });
        
        
        
        Capsule::schema()->table('content_entry_fields', function (Blueprint $table) {
            $table->dropForeign('content_entry_fields_content_entry_id_foreign')->onDelete('cascade');
            $table->dropForeign('content_entry_fields_content_type_field_type_id_foreign')->onDelete('cascade');
            $table->foreign('content_entry_id')->references('id')->on('content_entries')->onDelete('cascade');
            $table->foreign('content_type_field_type_id')->references('id')->on('content_type_content_field_types')->onDelete('cascade');
        });
        
        
        
        Capsule::schema()->table('content_entry_field_int', function (Blueprint $table) {
            $table->dropForeign('content_entry_field_int_content_entry_field_id_foreign');
            $table->foreign('content_entry_field_id')->references('id')->on('content_entry_fields')->onDelete('cascade');
        });
        
        
        Capsule::schema()->table('content_entry_field_short', function (Blueprint $table) {
            $table->dropForeign('content_entry_field_short_content_entry_field_id_foreign');
            $table->foreign('content_entry_field_id')->references('id')->on('content_entry_fields')->onDelete('cascade');
        });
        
        
        Capsule::schema()->table('content_entry_field_long', function (Blueprint $table) {
            $table->dropForeign('content_entry_field_long_content_entry_field_id_foreign');
            $table->foreign('content_entry_field_id')->references('id')->on('content_entry_fields')->onDelete('cascade');
        });
        
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        
        Capsule::schema()->table('content_types', function (Blueprint $table) {
            $table->dropForeign('content_types_parent_id_foreign');
            $table->foreign('parent_id')->references('id')->on('content_types');
        });
        
        
        Capsule::schema()->table('content_entries', function (Blueprint $table) {
            $table->dropForeign('content_entries_content_type_id_foreign');
            $table->dropForeign('content_entries_user_id_foreign');
            $table->foreign('content_type_id')->references('id')->on('content_types');
            $table->foreign('user_id')->references('id')->on('users');
        });
        
        
        
        Capsule::schema()->table('content_categories', function (Blueprint $table) {
            $table->dropForeign('content_categories_content_type_id_foreign');
            $table->foreign('content_type_id')->references('id')->on('content_types');
        });
        
        
        
        Capsule::schema()->table('content_category_content_entries', function (Blueprint $table) {
            $table->dropForeign('content_category_content_entries_content_category_id_foreign');
            $table->dropForeign('content_category_content_entries_content_entry_id_foreign');
            $table->foreign('content_entry_id')->references('id')->on('content_entries');
            $table->foreign('content_category_id')->references('id')->on('content_categories');
        });
        
        
        
        Capsule::schema()->table('content_type_content_field_types', function (Blueprint $table) {
            $table->dropForeign('content_type_content_field_types_content_type_id_foreign');
            $table->dropForeign('content_type_content_field_types_content_field_type_id_foreign');
            $table->foreign('content_type_id')->references('id')->on('content_types');
            $table->foreign('content_field_type_id')->references('id')->on('content_field_types');
        });
        
        
        
        Capsule::schema()->table('content_entry_relations', function (Blueprint $table) {
            $table->dropForeign('content_entry_relations_content_entry_1_id_foreign');
            $table->dropForeign('content_entry_relations_content_entry_2_id_foreign');
            $table->foreign('content_entry_1_id')->references('id')->on('content_entries');
            $table->foreign('content_entry_2_id')->references('id')->on('content_entries');
        });
        
        
        
        Capsule::schema()->table('content_entry_fields', function (Blueprint $table) {
            $table->dropForeign('content_entry_fields_content_entry_id_foreign');
            $table->dropForeign('content_entry_fields_content_type_field_type_id_foreign');
            $table->foreign('content_entry_id')->references('id')->on('content_entries');
            $table->foreign('content_type_field_type_id')->references('id')->on('content_type_content_field_types');
        });
        
        
        
        Capsule::schema()->table('content_entry_field_int', function (Blueprint $table) {
            $table->dropForeign('content_entry_field_int_content_entry_field_id_foreign');
            $table->foreign('content_entry_field_id')->references('id')->on('content_entry_fields');
        });
        
        
        Capsule::schema()->table('content_entry_field_short', function (Blueprint $table) {
            $table->dropForeign('content_entry_field_short_content_entry_field_id_foreign');
            $table->foreign('content_entry_field_id')->references('id')->on('content_entry_fields');
        });
        
        
        Capsule::schema()->table('content_entry_field_long', function (Blueprint $table) {
            $table->dropForeign('content_entry_field_long_content_entry_field_id_foreign');
            $table->foreign('content_entry_field_id')->references('id')->on('content_entry_fields');
        });
        
    }

}
