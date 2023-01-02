<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('public_websites', function (Blueprint $table) {
            $table->id();
            $table->boolean('status')->default(true);
            $table->string('logo');
            $table->string('company_name');
            $table->string('title');
            $table->string('image_or_slider')->default('image');
            $table->string('image')->nullable();
            $table->string('short_description');
            $table->text('long_description')->nullable();
            $table->string('email');
            $table->string('phone_number');
            $table->string('address');
            $table->string('facebook')->nullable();
            $table->string('tweeter')->nullable();
            $table->string('youtube')->nullable();
            $table->string('instagram')->nullable();
            $table->string('copy_right')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('public_websites');
    }
};
