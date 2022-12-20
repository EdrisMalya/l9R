<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call(FailedJobsTableSeeder::class);
        $this->call(MigrationsTableSeeder::class);
        $this->call(PasswordResetsTableSeeder::class);
        $this->call(PermissionsTableSeeder::class);
        $this->call(PermissionGroupsTableSeeder::class);
        $this->call(PersonalAccessTokensTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(RolesTableSeeder::class);
        $this->call(RoleGroupsTableSeeder::class);
        $this->call(RolePermissionsTableSeeder::class);
        $this->call(UserRolesTableSeeder::class);
        $this->call(LanguagesTableSeeder::class);
        $this->call(LanguageDictionariesTableSeeder::class);
        $this->call(ActivityLogTableSeeder::class);
        $this->call(LoginLogsTableSeeder::class);
    }
}
