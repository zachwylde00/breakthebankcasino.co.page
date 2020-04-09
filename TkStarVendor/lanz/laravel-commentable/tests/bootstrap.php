<?php

require __DIR__.'/../vendor/autoload.php';

$capsule = new Illuminate\Database\Capsule\Manager();

$capsule->addConnection(require(__DIR__.'/config/database.php'));

$capsule->setEventDispatcher(new Illuminate\Events\Dispatcher(new Illuminate\Container\Container()));

$capsule->bootEloquent();

$capsule->setAsGlobal();

$__autoload_paths = array('models', 'migrators', 'seeders');

foreach ($__autoload_paths as $path) {
    foreach (glob(__DIR__."/$path/*.php") as $dep) {
        require_once $dep;
    }
}

require __DIR__.'/suite/CommentableTestCase.php';
