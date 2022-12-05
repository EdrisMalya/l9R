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
                'name' => 'Edris malya',
                'email' => 'adrismalya@gmail.com',
                'email_verified_at' => NULL,
                'password' => '$2y$10$.SiFXJAv40rR3UAtdJog2u8NpkONKU5m.V.5bUIOHX/6sMBp4oALe',
                'remember_token' => NULL,
                'created_at' => '2022-11-28 05:45:33',
                'updated_at' => '2022-11-28 05:46:59',
            ),
        ));
        
        
    }
}