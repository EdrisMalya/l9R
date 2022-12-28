<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PublicWebsitesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('public_websites')->delete();
        
        
        
    }
}