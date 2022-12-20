<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class GenerateAllTableSeeders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:seeders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command will generate all tables seeder file';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Retrieving all tables');
        $files = [];
        foreach (\Illuminate\Support\Facades\File::allFiles(base_path('database/migrations')) as $file){
            $files[] = $file->getFilename();
        }
        $file_names = [];
        foreach ($files as $file){
            $file_array = explode('_create_', $file);
            if(count($file_array) > 1){
                $file_name = explode('_table.php', $file_array[1]);
                $file_names[] = $file_name[0];
            }
        }
        $file_names[] = 'migrations';
        $tables = implode(',', $file_names);
        $this->info('Seeding started');
        Artisan::call('iseed '.$tables.' --force');
        $this->info('Seeding finished successfully');
        return Command::SUCCESS;
    }
}
