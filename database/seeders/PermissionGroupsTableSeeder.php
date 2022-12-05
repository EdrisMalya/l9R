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
                'id' => 30,
                'permission_group_id' => 0,
                'name' => 'User management',
                'created_at' => '2022-12-01 13:45:56',
                'updated_at' => '2022-12-01 13:45:56',
            ),
            1 => 
            array (
                'id' => 31,
                'permission_group_id' => 30,
                'name' => 'Users',
                'created_at' => '2022-12-02 17:13:50',
                'updated_at' => '2022-12-02 17:16:52',
            ),
            2 => 
            array (
                'id' => 49,
                'permission_group_id' => 31,
                'name' => 'test4',
                'created_at' => '2022-12-04 06:05:13',
                'updated_at' => '2022-12-04 06:05:13',
            ),
        ));
        
        
    }
}