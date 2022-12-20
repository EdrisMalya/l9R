<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class LanguagesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('languages')->delete();
        
        \DB::table('languages')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Dari',
                'abbr' => 'da',
                'direction' => 'rtl',
                'created_at' => '2022-12-14 07:01:43',
                'updated_at' => '2022-12-14 07:03:41',
            ),
            1 => 
            array (
                'id' => 6,
                'name' => 'Pashto',
                'abbr' => 'pas',
                'direction' => 'rtl',
                'created_at' => '2022-12-15 06:50:12',
                'updated_at' => '2022-12-15 06:50:48',
            ),
        ));
        
        
    }
}