<?php


class CommentableTestCase extends PHPUnit_Framework_TestCase
{
    public static function setUpBeforeClass()
    {
        with(new UserMigrator())->up();
        with(new PostMigrator())->up();
        with(new CommentMigrator())->up();
    }

    public function setUp()
    {
        with(new UserSeeder())->run();
        with(new PostSeeder())->run();
        with(new CommentSeeder())->run();
    }
}
