<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class MigrationsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('migrations')->delete();
        
        \DB::table('migrations')->insert(array (
            0 => 
            array (
                'id' => 1,
                'migration' => '2014_10_12_000000_create_users_table',
                'batch' => 1,
            ),
            1 => 
            array (
                'id' => 2,
                'migration' => '2014_10_12_100000_create_password_resets_table',
                'batch' => 1,
            ),
            2 => 
            array (
                'id' => 3,
                'migration' => '2019_08_19_000000_create_failed_jobs_table',
                'batch' => 1,
            ),
            3 => 
            array (
                'id' => 4,
                'migration' => '2019_12_14_000001_create_personal_access_tokens_table',
                'batch' => 1,
            ),
            4 => 
            array (
                'id' => 5,
                'migration' => '2022_11_30_050041_create_permission_groups_table',
                'batch' => 1,
            ),
            5 => 
            array (
                'id' => 6,
                'migration' => '2022_12_02_181022_create_permissions_table',
                'batch' => 1,
            ),
            6 => 
            array (
                'id' => 7,
                'migration' => '2022_12_06_052144_create_roles_table',
                'batch' => 1,
            ),
            7 => 
            array (
                'id' => 8,
                'migration' => '2022_12_06_052517_create_role_groups_table',
                'batch' => 1,
            ),
            8 => 
            array (
                'id' => 9,
                'migration' => '2022_12_06_105233_create_role_permissions_table',
                'batch' => 1,
            ),
            9 => 
            array (
                'id' => 10,
                'migration' => '2022_12_10_051106_create_user_roles_table',
                'batch' => 2,
            ),
            10 => 
            array (
                'id' => 11,
                'migration' => '2022_12_12_070531_create_languages_table',
                'batch' => 3,
            ),
            11 => 
            array (
                'id' => 12,
                'migration' => '2022_12_13_071728_create_language_dictionaries_table',
                'batch' => 4,
            ),
            12 => 
            array (
                'id' => 13,
                'migration' => '2022_12_18_070817_create_activity_log_table',
                'batch' => 5,
            ),
            13 => 
            array (
                'id' => 14,
                'migration' => '2022_12_18_070818_add_event_column_to_activity_log_table',
                'batch' => 5,
            ),
            14 => 
            array (
                'id' => 15,
                'migration' => '2022_12_18_070819_add_batch_uuid_column_to_activity_log_table',
                'batch' => 5,
            ),
            15 => 
            array (
                'id' => 16,
                'migration' => '2022_12_18_073237_create_login_logs_table',
                'batch' => 6,
            ),
            16 => 
            array (
                'id' => 17,
                'migration' => '2022_12_19_102550_create_system_backup_logs_table',
                'batch' => 7,
            ),
        ));
        
        
    }
}