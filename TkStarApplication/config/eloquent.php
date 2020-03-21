<?php
require_once(APPPATH . 'config/database.php');
$Manager = new Illuminate\Database\Capsule\Manager;
$Manager->addConnection(array('driver' => $database['dbdriver'], 'host' => $database['hostname'], 'database' => $database['database'], 'username' => $database['username'], 'password' => $database['password'], 'charset' => $database['char_set'], 'collation' => $database['dbcollat'], 'prefix' => $database['dbprefix']));
use Illuminate\Events\Dispatcher;
use Illuminate\Container\Container;
$Manager->setEventDispatcher(new Dispatcher(new Container));
$Manager->setAsGlobal();
$Manager->bootEloquent();
?>