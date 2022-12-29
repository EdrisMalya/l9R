<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RolePermissionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('role_permissions')->delete();
        
        \DB::table('role_permissions')->insert(array (
            0 => 
            array (
                'id' => 997,
                'role_id' => 1,
                'permission_id' => 4,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            1 => 
            array (
                'id' => 998,
                'role_id' => 1,
                'permission_id' => 5,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            2 => 
            array (
                'id' => 999,
                'role_id' => 1,
                'permission_id' => 3,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            3 => 
            array (
                'id' => 1000,
                'role_id' => 1,
                'permission_id' => 2,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            4 => 
            array (
                'id' => 1001,
                'role_id' => 1,
                'permission_id' => 6,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            5 => 
            array (
                'id' => 1002,
                'role_id' => 1,
                'permission_id' => 9,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            6 => 
            array (
                'id' => 1003,
                'role_id' => 1,
                'permission_id' => 11,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            7 => 
            array (
                'id' => 1004,
                'role_id' => 1,
                'permission_id' => 10,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            8 => 
            array (
                'id' => 1005,
                'role_id' => 1,
                'permission_id' => 12,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            9 => 
            array (
                'id' => 1006,
                'role_id' => 1,
                'permission_id' => 15,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            10 => 
            array (
                'id' => 1007,
                'role_id' => 1,
                'permission_id' => 16,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            11 => 
            array (
                'id' => 1008,
                'role_id' => 1,
                'permission_id' => 17,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            12 => 
            array (
                'id' => 1009,
                'role_id' => 1,
                'permission_id' => 18,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            13 => 
            array (
                'id' => 1010,
                'role_id' => 1,
                'permission_id' => 19,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            14 => 
            array (
                'id' => 1011,
                'role_id' => 1,
                'permission_id' => 21,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            15 => 
            array (
                'id' => 1012,
                'role_id' => 1,
                'permission_id' => 22,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            16 => 
            array (
                'id' => 1013,
                'role_id' => 1,
                'permission_id' => 23,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            17 => 
            array (
                'id' => 1014,
                'role_id' => 1,
                'permission_id' => 14,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            18 => 
            array (
                'id' => 1015,
                'role_id' => 1,
                'permission_id' => 26,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            19 => 
            array (
                'id' => 1016,
                'role_id' => 1,
                'permission_id' => 27,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            20 => 
            array (
                'id' => 1017,
                'role_id' => 1,
                'permission_id' => 28,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            21 => 
            array (
                'id' => 1018,
                'role_id' => 1,
                'permission_id' => 29,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            22 => 
            array (
                'id' => 1019,
                'role_id' => 1,
                'permission_id' => 30,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            23 => 
            array (
                'id' => 1020,
                'role_id' => 1,
                'permission_id' => 32,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            24 => 
            array (
                'id' => 1021,
                'role_id' => 1,
                'permission_id' => 1,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            25 => 
            array (
                'id' => 1022,
                'role_id' => 1,
                'permission_id' => 13,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            26 => 
            array (
                'id' => 1023,
                'role_id' => 1,
                'permission_id' => 33,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            27 => 
            array (
                'id' => 1024,
                'role_id' => 1,
                'permission_id' => 34,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            28 => 
            array (
                'id' => 1025,
                'role_id' => 1,
                'permission_id' => 35,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            29 => 
            array (
                'id' => 1026,
                'role_id' => 1,
                'permission_id' => 37,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            30 => 
            array (
                'id' => 1027,
                'role_id' => 1,
                'permission_id' => 36,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            31 => 
            array (
                'id' => 1028,
                'role_id' => 1,
                'permission_id' => 38,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
            32 => 
            array (
                'id' => 1029,
                'role_id' => 1,
                'permission_id' => 39,
                'created_at' => '2022-12-28 20:14:59',
                'updated_at' => '2022-12-28 20:14:59',
            ),
        ));
        
        
    }
}