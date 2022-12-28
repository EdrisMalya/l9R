<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class UpdateTablesWithDataCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:tables';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command first generate all seeds and then fresh the tables';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->call('generate:seed');
        $this->call('migrate:fresh --seed');
        return Command::SUCCESS;
    }
}
