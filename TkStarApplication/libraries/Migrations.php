<?php
Class Migrations {
    public function migration_create($module, $name) {
        $path = APPPATH . 'modules/' . $module;
        $repo = new Illuminate\Database\Migrations\MigrationCreator(new \Illuminate\Filesystem\Filesystem());
        $repo->create($name, $path . '/migrations');
    }
    public function migration_do($module) {
        $path = APPPATH . 'modules/' . $module;
        $file_system = new \Illuminate\Filesystem\Filesystem();
        $repo = new MirookMigrationRepository(Illuminate\Database\Eloquent\Model::getConnectionResolver(), 'migrations');
        $migrator = new MirookMigrator($repo, Illuminate\Database\Eloquent\Model::getConnectionResolver(), $file_system);
        $migrator->run($path . '/migrations');
    }
    public function migration_down_batch($module) {
        $path = APPPATH . 'modules/' . $module;
        $file_system = new \Illuminate\Filesystem\Filesystem();
        $repo = new MirookMigrationRepository(Illuminate\Database\Eloquent\Model::getConnectionResolver(), 'migrations');
        $migrator = new MirookMigrator($repo, Illuminate\Database\Eloquent\Model::getConnectionResolver(), $file_system);
        $migrator->mirook_back_by_batch($path . '/migrations');
    }
    public function migration_down_last($module) {
        $path = APPPATH . 'modules/' . $module;
        $file_system = new \Illuminate\Filesystem\Filesystem();
        $repo = new MirookMigrationRepository(Illuminate\Database\Eloquent\Model::getConnectionResolver(), 'migrations');
        $migrator = new MirookMigrator($repo, Illuminate\Database\Eloquent\Model::getConnectionResolver(), $file_system);
        $migrator->mirook_back_by_last($path . '/migrations');
    }
    public function migration_reset($module) {
        $path = APPPATH . 'modules/' . $module;
        $file_system = new \Illuminate\Filesystem\Filesystem();
        $repo = new MirookMigrationRepository(Illuminate\Database\Eloquent\Model::getConnectionResolver(), 'migrations');
        $migrator = new MirookMigrator($repo, Illuminate\Database\Eloquent\Model::getConnectionResolver(), $file_system);
        $migrator->mirook_reset($path . '/migrations');
    }
}
class MirookMigrator extends \Illuminate\Database\Migrations\Migrator {
    public function mirook_reset($path, $pretend = false) {
        $this->notes = array();
        $files = $this->getMigrationFiles($path);
        $ran = $this->repository->getRan();
        $files = array_intersect($files, $ran);
        $migrations = array();
        foreach ($files as $file) {
            $migrations[] = $this->repository->get_migration($file);
        }
        $this->requireFiles($path, $files);
        $this->downMigrationList($migrations, $pretend);
    }
    public function mirook_back_by_batch($path, $pretend = false) {
        $this->notes = array();
        $files = $this->getMigrationFiles($path);
        $ran = $this->repository->getRan();
        $files = array_reverse(array_intersect($files, $ran));
        if (count($files) == 0) {
            $this->note('<info>Nothing to migrate down.</info>');
            return;
        }
        $migrations = array();
        foreach ($files as $key => $file) {
            $temp = (object) $this->repository->get_migration($file);
            if (!isset($batch_number)) {
                $batch_number = $temp->batch;
            }
            if ($batch_number == $temp->batch) {
                $migrations[] = $temp;
            } else {
                unset($files[$key]);
            }
        }
        $this->requireFiles($path, $files);
        $this->downMigrationList($migrations, $pretend);
    }
    public function mirook_back_by_last($path, $pretend = false) {
        $this->notes = array();
        $files = $this->getMigrationFiles($path);
        $ran = $this->repository->getRan();
        $files = array_intersect($files, $ran);
        if (count($files) == 0) {
            $this->note('<info>Nothing to migrate down.</info>');
            return;
        }
        $last_file = array_pop($files);
        $last_migration = (object) $this->repository->get_migration($last_file);
        $this->requireFiles($path, [$last_file]);
        $this->downMigrationList([$last_migration], $pretend);
    }
    public function downMigrationList($migrations, $pretend = false) {
        if (count($migrations) == 0) {
            $this->note('<info>Nothing to migrate down.</info>');
            return;
        }
        foreach ($migrations as $migration) {
            $this->runDown((object) $migration, $pretend);
        }
    }
}
class MirookMigrationRepository extends Illuminate\Database\Migrations\DatabaseMigrationRepository {
    public function get_migration($file) {
        return $this->table()->where('migration', $file)->first();
    }
}
?>