<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PermissionGroupsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('permission_groups')->delete();
        
        \DB::table('permission_groups')->insert(array (
            0 => 
            array (
                'id' => 1,
                'permission_group_id' => 0,
                'name' => 'User management',
                'created_at' => '2022-12-11 06:04:50',
                'updated_at' => '2022-12-11 06:04:50',
            ),
            1 => 
            array (
                'id' => 2,
                'permission_group_id' => 1,
                'name' => 'Users',
                'created_at' => '2022-12-11 06:05:03',
                'updated_at' => '2022-12-11 06:05:03',
            ),
            2 => 
            array (
                'id' => 3,
                'permission_group_id' => 1,
                'name' => 'Roles',
                'created_at' => '2022-12-11 06:05:11',
                'updated_at' => '2022-12-11 06:05:11',
            ),
            3 => 
            array (
                'id' => 4,
                'permission_group_id' => 0,
                'name' => 'Configuration',
                'created_at' => '2022-12-11 10:24:12',
                'updated_at' => '2022-12-11 10:24:12',
            ),
            4 => 
            array (
                'id' => 5,
                'permission_group_id' => 4,
                'name' => 'Language',
                'created_at' => '2022-12-11 10:43:17',
                'updated_at' => '2022-12-11 10:43:17',
            ),
            5 => 
            array (
                'id' => 6,
                'permission_group_id' => 5,
                'name' => 'Language dictionary',
                'created_at' => '2022-12-13 05:27:22',
                'updated_at' => '2022-12-13 05:27:22',
            ),
            6 => 
            array (
                'id' => 9,
                'permission_group_id' => 2,
                'name' => 'Log activity',
                'created_at' => '2022-12-18 10:06:48',
                'updated_at' => '2022-12-18 10:06:48',
            ),
            7 => 
            array (
                'id' => 10,
                'permission_group_id' => 1,
                'name' => 'Login log',
                'created_at' => '2022-12-19 06:28:45',
                'updated_at' => '2022-12-19 06:28:45',
            ),
            8 => 
            array (
                'id' => 11,
                'permission_group_id' => 4,
                'name' => 'Backups',
                'created_at' => '2022-12-19 15:37:06',
                'updated_at' => '2022-12-19 15:37:06',
            ),
            9 => 
            array (
                'id' => 13,
                'permission_group_id' => 1,
                'name' => 'Log activity',
                'created_at' => '2022-12-22 10:29:02',
                'updated_at' => '2022-12-22 10:29:02',
            ),
            10 => 
            array (
                'id' => 14,
                'permission_group_id' => 4,
                'name' => 'Public website',
                'created_at' => '2022-12-26 20:10:54',
                'updated_at' => '2022-12-26 20:10:54',
            ),
            11 => 
            array (
                'id' => 15,
                'permission_group_id' => 14,
                'name' => 'Home page',
                'created_at' => '2022-12-27 17:49:11',
                'updated_at' => '2022-12-27 17:49:11',
            ),
            12 => 
            array (
                'id' => 16,
                'permission_group_id' => 14,
                'name' => 'Pages',
                'created_at' => '2022-12-27 17:49:22',
                'updated_at' => '2022-12-27 17:49:22',
            ),
        ));
        
        
    }
}