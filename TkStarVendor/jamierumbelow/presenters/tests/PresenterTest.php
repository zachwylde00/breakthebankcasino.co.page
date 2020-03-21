<?php
/**
 * Clean up your view code and remove nasty, brittle logic using
 * the presenters - from The CodeIgniter Handbook - Volume One - Who Needs Ruby?
 *
 * @link http://github.com/jamierumbelow/codeigniter-presenters
 * @copyright Copyright (c) 2012, Jamie Rumbelow <http://jamierumbelow.net>
 */

class PresenterTest extends PHPUnit_Framework_TestCase
{
	public function testConstructorStoresPresenterObjectFromGetClassByDefault()
	{
		$obj = new stdClass;
		$presenter = new Presenter($obj);

		$this->assertEquals($obj, $presenter->presenter);
	}

	public function testConstructorUsesNameArgument()
	{
		$obj = new stdClass;
		$presenter = new Presenter($obj, 'test_name');

		$this->assertEquals($obj, $presenter->test_name);
	}

	public function testCallFetchesPropertiesDynamically()
	{
		$obj = new stdClass;
		$obj->someKey = 'some value';
		$obj->anotherKey = 'another value';
		$presenter = new Presenter($obj);

		$this->assertEquals('some value', $presenter->someKey());
		$this->assertEquals('another value', $presenter->anotherKey());
	}

	public function testCallThrowsBadMethodCallException()
	{
		$presenter = new Presenter(new stdClass);

        try
        {
        	$presenter->someInvalidMethod();
        }
        catch (BadMethodCallException $e)
        {
        	$this->assertRegExp("/Presenter::someInvalidMethod\(\)/", $e->getMessage());
        	
            return;
        }
 
        $this->fail('BadMethodCallException has not been raised.');
	}
}