<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserRolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('user_roles')->delete();
        
        \DB::table('user_roles')->insert(array (
            0 => 
            array (
                'id' => 1,
                'user_id' => 2,
                'role_id' => 1,
                'created_at' => '2022-12-11 06:08:37',
                'updated_at' => '2022-12-11 06:08:37',
            ),
            1 => 
            array (
                'id' => 18,
                'user_id' => 3,
                'role_id' => 1,
                'created_at' => '2022-12-18 11:41:26',
                'updated_at' => '2022-12-18 11:41:26',
            ),
            2 => 
            array (
                'id' => 20,
                'user_id' => 9,
                'role_id' => 1,
                'created_at' => '2022-12-21 12:37:02',
                'updated_at' => '2022-12-21 12:37:02',
            ),
        ));
        
        
    }
}