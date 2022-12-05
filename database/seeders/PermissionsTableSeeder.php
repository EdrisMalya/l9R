<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('permissions')->delete();
        
        \DB::table('permissions')->insert(array (
            0 => 
            array (
                'id' => 1,
                'permission_group_id' => 30,
                'name' => 'Access',
                'key' => 'access',
                'created_at' => '2022-12-02 18:13:11',
                'updated_at' => '2022-12-02 18:13:11',
            ),
            1 => 
            array (
                'id' => 2,
                'permission_group_id' => 30,
                'name' => 'Access',
                'key' => 'access',
                'created_at' => '2022-12-02 18:13:41',
                'updated_at' => '2022-12-02 18:13:41',
            ),
            2 => 
            array (
                'id' => 3,
                'permission_group_id' => 30,
                'name' => 'Test5',
                'key' => 'test5',
                'created_at' => '2022-12-02 18:25:38',
                'updated_at' => '2022-12-02 18:25:38',
            ),
            3 => 
            array (
                'id' => 4,
                'permission_group_id' => 30,
                'name' => 'Test5',
                'key' => 'test5',
                'created_at' => '2022-12-02 18:25:42',
                'updated_at' => '2022-12-02 18:25:42',
            ),
            4 => 
            array (
                'id' => 5,
                'permission_group_id' => 31,
                'name' => 'Test',
                'key' => 'test',
                'created_at' => '2022-12-02 18:36:02',
                'updated_at' => '2022-12-02 18:36:02',
            ),
            5 => 
            array (
                'id' => 6,
                'permission_group_id' => 31,
                'name' => 'Test3',
                'key' => 'test3',
                'created_at' => '2022-12-04 05:19:41',
                'updated_at' => '2022-12-04 05:19:41',
            ),
            6 => 
            array (
                'id' => 7,
                'permission_group_id' => 31,
                'name' => 'test',
                'key' => 'test',
                'created_at' => '2022-12-04 06:03:34',
                'updated_at' => '2022-12-04 06:03:34',
            ),
            7 => 
            array (
                'id' => 8,
                'permission_group_id' => 49,
                'name' => 'This is edris',
                'key' => 'this-is-edris',
                'created_at' => '2022-12-04 06:05:21',
                'updated_at' => '2022-12-04 06:05:21',
            ),
        ));
        
        
    }
}