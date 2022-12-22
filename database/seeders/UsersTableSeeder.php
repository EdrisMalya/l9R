<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Ahmad Edris',
                'last_name' => 'Malia',
                'email' => 'edris.malya@dab.gov.af',
                'phone_number' => '+93781357171',
                'email_verified_at' => NULL,
                'password' => '$2y$10$02./WWYTrZqRK8dTrlEts.gaPFdq5UcNMJ8.qtWB4pNBHu4lzas6u',
                'status' => 1,
                'change_password' => 0,
                'image' => 'users_picture/RMcNrJNazPLc6Cs2FUeTDwdBivTVYI3XnEaS5VI0.jpg',
                'remember_token' => NULL,
                'created_at' => '2022-12-13 10:37:32',
                'updated_at' => '2022-12-13 10:47:15',
            ),
            1 => 
            array (
                'id' => 3,
                'name' => 'Bilal',
                'last_name' => 'Malia',
                'email' => 'adrismalya@gmail.com',
                'phone_number' => '0799210807',
                'email_verified_at' => NULL,
                'password' => '$2y$10$BwjMNrHTiXQEYBViUUluVeGCoG4KyugyRxkDl4Wepi.K70C3JywOG',
                'status' => 1,
                'change_password' => 0,
                'image' => 'users_picture/KMLcxCM8DqWwlyWeB41nUOwADC5qPA2YDLQWrvQh.jpg',
                'remember_token' => NULL,
                'created_at' => '2022-12-11 07:05:06',
                'updated_at' => '2022-12-18 11:41:26',
            ),
            2 => 
            array (
                'id' => 9,
                'name' => 'Gillian',
                'last_name' => 'Clayton',
                'email' => 'haqy@mailinator.com',
            'phone_number' => '+1 (567) 109-1454',
                'email_verified_at' => NULL,
                'password' => '$2y$10$G3ZZY7V2d8SyCkzHVTfZ8.sOHGqpIsVilTJ30vHgjtinpCerzPkSG',
                'status' => 1,
                'change_password' => 1,
                'image' => 'users_picture/FckETvUWX13RwA2wEaNE9wt9m5vypmalCBcpV2Hs.jpg',
                'remember_token' => NULL,
                'created_at' => '2022-12-21 12:37:02',
                'updated_at' => '2022-12-21 12:37:02',
            ),
        ));
        
        
    }
}