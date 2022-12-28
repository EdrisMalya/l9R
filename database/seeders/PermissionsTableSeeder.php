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
                'permission_group_id' => 1,
                'name' => 'Access',
                'key' => 'user-management-access',
                'created_at' => '2022-12-11 06:04:55',
                'updated_at' => '2022-12-11 06:04:55',
            ),
            1 => 
            array (
                'id' => 2,
                'permission_group_id' => 2,
                'name' => 'Access',
                'key' => 'users-access',
                'created_at' => '2022-12-11 06:05:18',
                'updated_at' => '2022-12-11 06:05:18',
            ),
            2 => 
            array (
                'id' => 3,
                'permission_group_id' => 2,
                'name' => 'Create user',
                'key' => 'users-create-user',
                'created_at' => '2022-12-11 06:05:30',
                'updated_at' => '2022-12-11 06:05:30',
            ),
            3 => 
            array (
                'id' => 4,
                'permission_group_id' => 2,
                'name' => 'Edit user',
                'key' => 'users-edit-user',
                'created_at' => '2022-12-11 06:05:39',
                'updated_at' => '2022-12-11 06:05:39',
            ),
            4 => 
            array (
                'id' => 5,
                'permission_group_id' => 2,
                'name' => 'Delete user',
                'key' => 'users-delete-user',
                'created_at' => '2022-12-11 06:05:48',
                'updated_at' => '2022-12-11 06:05:48',
            ),
            5 => 
            array (
                'id' => 6,
                'permission_group_id' => 3,
                'name' => 'Access',
                'key' => 'roles-access',
                'created_at' => '2022-12-11 06:05:55',
                'updated_at' => '2022-12-11 06:05:55',
            ),
            6 => 
            array (
                'id' => 9,
                'permission_group_id' => 3,
                'name' => 'View role details',
                'key' => 'roles-view-role-details',
                'created_at' => '2022-12-11 06:06:23',
                'updated_at' => '2022-12-11 06:06:23',
            ),
            7 => 
            array (
                'id' => 10,
                'permission_group_id' => 3,
                'name' => 'Create role',
                'key' => 'roles-create-role',
                'created_at' => '2022-12-11 06:06:50',
                'updated_at' => '2022-12-11 06:06:50',
            ),
            8 => 
            array (
                'id' => 11,
                'permission_group_id' => 3,
                'name' => 'Edit role',
                'key' => 'roles-edit-role',
                'created_at' => '2022-12-11 06:06:54',
                'updated_at' => '2022-12-11 06:06:54',
            ),
            9 => 
            array (
                'id' => 12,
                'permission_group_id' => 3,
                'name' => 'Delete role',
                'key' => 'roles-delete-role',
                'created_at' => '2022-12-11 06:06:58',
                'updated_at' => '2022-12-11 06:06:58',
            ),
            10 => 
            array (
                'id' => 13,
                'permission_group_id' => 2,
                'name' => 'View profile',
                'key' => 'users-view-profile',
                'created_at' => '2022-12-11 08:13:11',
                'updated_at' => '2022-12-11 08:13:11',
            ),
            11 => 
            array (
                'id' => 14,
                'permission_group_id' => 4,
                'name' => 'Access',
                'key' => 'configuration-access',
                'created_at' => '2022-12-11 10:24:17',
                'updated_at' => '2022-12-11 10:24:17',
            ),
            12 => 
            array (
                'id' => 15,
                'permission_group_id' => 5,
                'name' => 'Access',
                'key' => 'language-access',
                'created_at' => '2022-12-11 10:43:21',
                'updated_at' => '2022-12-11 10:43:21',
            ),
            13 => 
            array (
                'id' => 16,
                'permission_group_id' => 5,
                'name' => 'Create language',
                'key' => 'language-create-language',
                'created_at' => '2022-12-12 06:22:13',
                'updated_at' => '2022-12-12 06:22:13',
            ),
            14 => 
            array (
                'id' => 17,
                'permission_group_id' => 5,
                'name' => 'Edit language name',
                'key' => 'language-edit-language-name',
                'created_at' => '2022-12-13 05:26:42',
                'updated_at' => '2022-12-13 05:26:42',
            ),
            15 => 
            array (
                'id' => 18,
                'permission_group_id' => 5,
                'name' => 'Delete language',
                'key' => 'language-delete-language',
                'created_at' => '2022-12-13 05:26:49',
                'updated_at' => '2022-12-13 05:26:49',
            ),
            16 => 
            array (
                'id' => 19,
                'permission_group_id' => 6,
                'name' => 'Access',
                'key' => 'language-dictionary-access',
                'created_at' => '2022-12-13 05:27:28',
                'updated_at' => '2022-12-13 05:27:28',
            ),
            17 => 
            array (
                'id' => 21,
                'permission_group_id' => 6,
                'name' => 'Add new word to dictionary',
                'key' => 'language-dictionary-add-new-word-to-dictionary',
                'created_at' => '2022-12-13 05:44:26',
                'updated_at' => '2022-12-13 05:44:26',
            ),
            18 => 
            array (
                'id' => 22,
                'permission_group_id' => 6,
                'name' => 'Edit word',
                'key' => 'language-dictionary-edit-word',
                'created_at' => '2022-12-13 07:32:33',
                'updated_at' => '2022-12-13 07:32:33',
            ),
            19 => 
            array (
                'id' => 23,
                'permission_group_id' => 6,
                'name' => 'Delete word',
                'key' => 'language-dictionary-delete-word',
                'created_at' => '2022-12-13 07:32:39',
                'updated_at' => '2022-12-13 07:32:39',
            ),
            20 => 
            array (
                'id' => 26,
                'permission_group_id' => 9,
                'name' => 'Access',
                'key' => 'log-activity-access',
                'created_at' => '2022-12-18 10:06:53',
                'updated_at' => '2022-12-18 10:06:53',
            ),
            21 => 
            array (
                'id' => 27,
                'permission_group_id' => 2,
                'name' => 'View user login log',
                'key' => 'users-view-user-login-log',
                'created_at' => '2022-12-18 10:39:43',
                'updated_at' => '2022-12-18 10:39:43',
            ),
            22 => 
            array (
                'id' => 28,
                'permission_group_id' => 9,
                'name' => 'View log details',
                'key' => 'log-activity-view-log-details',
                'created_at' => '2022-12-18 11:01:30',
                'updated_at' => '2022-12-18 11:01:30',
            ),
            23 => 
            array (
                'id' => 29,
                'permission_group_id' => 9,
                'name' => 'Delete log',
                'key' => 'log-activity-delete-log',
                'created_at' => '2022-12-18 11:01:48',
                'updated_at' => '2022-12-18 11:01:48',
            ),
            24 => 
            array (
                'id' => 30,
                'permission_group_id' => 10,
                'name' => 'Access',
                'key' => 'login-log-access',
                'created_at' => '2022-12-19 06:29:09',
                'updated_at' => '2022-12-19 06:29:09',
            ),
            25 => 
            array (
                'id' => 31,
                'permission_group_id' => 10,
                'name' => 'Truncate',
                'key' => 'login-log-truncate',
                'created_at' => '2022-12-19 06:29:17',
                'updated_at' => '2022-12-19 06:29:17',
            ),
            26 => 
            array (
                'id' => 32,
                'permission_group_id' => 11,
                'name' => 'Access',
                'key' => 'backups-access',
                'created_at' => '2022-12-19 15:37:12',
                'updated_at' => '2022-12-19 15:37:12',
            ),
            27 => 
            array (
                'id' => 33,
                'permission_group_id' => 13,
                'name' => 'Access',
                'key' => 'log-activity-access',
                'created_at' => '2022-12-22 10:29:09',
                'updated_at' => '2022-12-22 10:29:09',
            ),
            28 => 
            array (
                'id' => 34,
                'permission_group_id' => 13,
                'name' => 'View details',
                'key' => 'log-activity-view-details',
                'created_at' => '2022-12-22 10:29:14',
                'updated_at' => '2022-12-22 10:29:14',
            ),
            29 => 
            array (
                'id' => 35,
                'permission_group_id' => 14,
                'name' => 'Access',
                'key' => 'public-website-access',
                'created_at' => '2022-12-26 20:11:00',
                'updated_at' => '2022-12-26 20:11:00',
            ),
            30 => 
            array (
                'id' => 36,
                'permission_group_id' => 16,
                'name' => 'Access',
                'key' => 'pages-access',
                'created_at' => '2022-12-27 17:49:27',
                'updated_at' => '2022-12-27 17:49:27',
            ),
            31 => 
            array (
                'id' => 37,
                'permission_group_id' => 15,
                'name' => 'Access',
                'key' => 'home-page-access',
                'created_at' => '2022-12-27 17:49:33',
                'updated_at' => '2022-12-27 17:49:33',
            ),
        ));
        
        
    }
}