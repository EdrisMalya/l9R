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
                'id' => 1030,
                'role_id' => 1,
                'permission_id' => 4,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            1 => 
            array (
                'id' => 1031,
                'role_id' => 1,
                'permission_id' => 5,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            2 => 
            array (
                'id' => 1032,
                'role_id' => 1,
                'permission_id' => 3,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            3 => 
            array (
                'id' => 1033,
                'role_id' => 1,
                'permission_id' => 2,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            4 => 
            array (
                'id' => 1034,
                'role_id' => 1,
                'permission_id' => 6,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            5 => 
            array (
                'id' => 1035,
                'role_id' => 1,
                'permission_id' => 9,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            6 => 
            array (
                'id' => 1036,
                'role_id' => 1,
                'permission_id' => 11,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            7 => 
            array (
                'id' => 1037,
                'role_id' => 1,
                'permission_id' => 10,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            8 => 
            array (
                'id' => 1038,
                'role_id' => 1,
                'permission_id' => 12,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            9 => 
            array (
                'id' => 1039,
                'role_id' => 1,
                'permission_id' => 15,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            10 => 
            array (
                'id' => 1040,
                'role_id' => 1,
                'permission_id' => 16,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            11 => 
            array (
                'id' => 1041,
                'role_id' => 1,
                'permission_id' => 17,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            12 => 
            array (
                'id' => 1042,
                'role_id' => 1,
                'permission_id' => 18,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            13 => 
            array (
                'id' => 1043,
                'role_id' => 1,
                'permission_id' => 19,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            14 => 
            array (
                'id' => 1044,
                'role_id' => 1,
                'permission_id' => 21,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            15 => 
            array (
                'id' => 1045,
                'role_id' => 1,
                'permission_id' => 22,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            16 => 
            array (
                'id' => 1046,
                'role_id' => 1,
                'permission_id' => 23,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            17 => 
            array (
                'id' => 1047,
                'role_id' => 1,
                'permission_id' => 14,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            18 => 
            array (
                'id' => 1048,
                'role_id' => 1,
                'permission_id' => 26,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            19 => 
            array (
                'id' => 1049,
                'role_id' => 1,
                'permission_id' => 27,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            20 => 
            array (
                'id' => 1050,
                'role_id' => 1,
                'permission_id' => 28,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            21 => 
            array (
                'id' => 1051,
                'role_id' => 1,
                'permission_id' => 29,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            22 => 
            array (
                'id' => 1052,
                'role_id' => 1,
                'permission_id' => 30,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            23 => 
            array (
                'id' => 1053,
                'role_id' => 1,
                'permission_id' => 32,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            24 => 
            array (
                'id' => 1054,
                'role_id' => 1,
                'permission_id' => 1,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            25 => 
            array (
                'id' => 1055,
                'role_id' => 1,
                'permission_id' => 13,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            26 => 
            array (
                'id' => 1056,
                'role_id' => 1,
                'permission_id' => 33,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            27 => 
            array (
                'id' => 1057,
                'role_id' => 1,
                'permission_id' => 34,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            28 => 
            array (
                'id' => 1058,
                'role_id' => 1,
                'permission_id' => 35,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            29 => 
            array (
                'id' => 1059,
                'role_id' => 1,
                'permission_id' => 37,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            30 => 
            array (
                'id' => 1060,
                'role_id' => 1,
                'permission_id' => 36,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            31 => 
            array (
                'id' => 1061,
                'role_id' => 1,
                'permission_id' => 38,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            32 => 
            array (
                'id' => 1062,
                'role_id' => 1,
                'permission_id' => 39,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            33 => 
            array (
                'id' => 1063,
                'role_id' => 1,
                'permission_id' => 40,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
            34 => 
            array (
                'id' => 1064,
                'role_id' => 1,
                'permission_id' => 41,
                'created_at' => '2022-12-29 12:55:24',
                'updated_at' => '2022-12-29 12:55:24',
            ),
        ));
        
        
    }
}