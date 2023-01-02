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
        
        \DB::table('public_websites')->insert(array (
            0 => 
            array (
                'id' => 1,
                'status' => 1,
                'logo' => 'website_logo/IT1oCKRlAYmSxkLWzgWQAaEGkGXIWU5yNbVxmv5R.png',
                'company_name' => 'Zahin Oxus',
                'title' => 'Plan Your Business And Financial Future',
                'image_or_slider' => 'image',
                'image' => 'website_main_page_image/doTf86LgmpUBHAAikaZUNOv0TKhtAm7SCXEuAyMe.jpg',
                'short_description' => 'Welcome to Zahin Oxus, where expert financial advice meets personalized service. Our team of professionals is dedicated to helping you achieve your financial goals. Contact us now to learn more.',
                'long_description' => '<p>At Zahin Oxus, we believe that expert financial advice is the key to success. Our team of highly qualified professionals is here to help you navigate the complex world of accounting and finance. Whether you\'re a small business owner, an individual, or a large corporation, we have the knowledge and experience to support you. Let us help you achieve your financial goals. Contact us now to schedule a consultation.</p>',
                'email' => 'test@test.com',
                'phone_number' => '+93 3344 12321',
                'address' => 'Kabul, Afghanistan',
                'facebook' => 'facebook.com',
                'tweeter' => 'tweeter.com',
                'youtube' => 'youtube.com',
                'instagram' => 'instagram.com',
                'copy_right' => 'Copyright 2022 Finco. All right reserved.',
                'created_at' => '2022-12-28 12:44:35',
                'updated_at' => '2022-12-29 09:10:48',
            ),
        ));
        
        
    }
}