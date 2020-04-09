<?php namespace Lanz\Commentable;

use Illuminate\Console\Command;

class MigrationCommand extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'commentable:migration';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates a migration following the Commentable especifications.';

    /**
     * Execute the console command.
     */
    public function fire()
    {
        $this->line('');
        $this->info('Tables: comments');
        $this->comment('A migration that creates "comments" tables will be created in app/database/migrations directory');
        $this->line('');

        if ($this->confirm("Proceed with the migration creation? [Yes|no]")) {
            $this->line('');
            $this->info("Creating migration...");

            if ($this->createMigration()) {
                $this->info("Migration successfully created!");
            } else {
                $this->error(
                    "Coudn't create migration.\n Check the write permissions".
                    " within the app/database/migrations directory."
                );
            }

            $this->line('');
        }
    }

    /**
     * Create the migration.
     *
     * @return bool
     */
    protected function createMigration()
    {
        $migration_file = base_path('/database/migrations').'/'.date('Y_m_d_His').'_create_comments_table.php';

        if (! file_exists($migration_file) && $fs = fopen($migration_file, 'x')) {
            fwrite($fs, file_get_contents(__DIR__.'/../migrations/create_comments_table.php'));
            fclose($fs);

            return true;
        }

        return false;
    }
}
