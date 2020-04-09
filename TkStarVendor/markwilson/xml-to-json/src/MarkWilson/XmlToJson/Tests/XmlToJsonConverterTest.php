<?php

namespace MarkWilson\XmlToJson\Tests;

class XmlToJsonConverterTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider getConvertData
     */
    public function testConvert($xmlString, $expectedJson)
    {
        $xml = new \SimpleXMLElement($xmlString);

        $converter = new \MarkWilson\XmlToJson\XmlToJsonConverter();
        $json = $converter->convert($xml);

        $this->assertEquals($expectedJson, $json);
    }

    public function getConvertData()
    {
        return [
            [
                '<testing myattr="attribute"><test>Testing</test></testing>',
                '{"testing":{"-myattr":"attribute","test":"Testing"}}'
            ], [
                '<Element>Value</Element>',
                '{"Element":"Value"}'
            ], [
                '<Element attribute="Attribute value">value</Element>',
                '{"Element":{"-attribute":"Attribute value","#text":"value"}}'
            ], [
                '<Element><FirstSubElement>1st value</FirstSubElement><SecondSubElement>2nd value</SecondSubElement></Element>',
                '{"Element":{"FirstSubElement":"1st value","SecondSubElement":"2nd value"}}'
            ], [
                '<Element><SubElement>1st</SubElement><SubElement>2nd</SubElement></Element>',
                '{"Element":{"SubElement":["1st","2nd"]}}'
            ], [
                '<Element><Test /></Element>',
                '{"Element":{"Test":""}}'
            ], [
                '<Element><SubElement>Value 1</SubElement><SubElement>Value 2</SubElement></Element>',
                '{"Element":{"SubElement":["Value 1","Value 2"]}}'
            ], [
                '<Metadata><SubscriptionCreate url="http://www.google.com/home#anchor"/><SubscriptionValidate url="https://yahoo.com/login" required="N"/><Studio email="studio@gmail.com" phone="020 7607 3200"/></Metadata>',
                '{"Metadata":{"SubscriptionCreate":{"-url":"http:\/\/www.google.com\/home#anchor"},"SubscriptionValidate":{"-url":"https:\/\/yahoo.com\/login","-required":"N"},"Studio":{"-email":"studio@gmail.com","-phone":"020 7607 3200"}}}'
            ],
            [
                '<Main><Child demo="something" another="something else" /><Child demo="something" another="something else" /><Child demo="something" another="something else" /></Main>',
                '{"Main":{"Child":[{"-demo":"something","-another":"something else"},{"-demo":"something","-another":"something else"},{"-demo":"something","-another":"something else"}]}}'
            ]
        ];
    }

    /**
     * @dataProvider getAsArrayData
     */
    public function testAsArray($xmlString, $expectedArray)
    {
        $xml = new \SimpleXMLElement($xmlString);

        $converter = new \MarkWilson\XmlToJson\XmlToJsonConverter();
        $array = $converter->asArray($xml);

        $this->assertEquals($expectedArray, $array);
    }

    public function getAsArrayData()
    {
        return [
            [
                '<testing myattr="attribute"><test>Testing</test></testing>',
                ['testing' => ['-myattr' => 'attribute', 'test' => 'Testing']]
            ], [
                '<Element>Value</Element>',
                ['Element' => 'Value']
            ], [
                '<Element attribute="Attribute value">value</Element>',
                ['Element' => ['-attribute' => 'Attribute value', '#text' => 'value']]
            ], [
                '<Element><FirstSubElement>1st value</FirstSubElement><SecondSubElement>2nd value</SecondSubElement></Element>',
                ['Element' => ['FirstSubElement' => '1st value', 'SecondSubElement' => '2nd value']]
            ], [
                '<Element><SubElement>1st</SubElement><SubElement>2nd</SubElement></Element>',
                ['Element' => ['SubElement' => ['1st', '2nd']]]
            ], [
                '<Element><Test /></Element>',
                ['Element' => ['Test' => '']]
            ], [
                '<Element><SubElement>Value 1</SubElement><SubElement>Value 2</SubElement></Element>',
                ['Element' => ['SubElement' => ['Value 1', 'Value 2']]]
            ], [
                '<Metadata><SubscriptionCreate url="http://www.google.com/home#anchor"/><SubscriptionValidate url="https://yahoo.com/login" required="N"/><Studio email="studio@gmail.com" phone="020 7607 3200"/></Metadata>',
                ['Metadata' => ['SubscriptionCreate' => ['-url' => 'http://www.google.com/home#anchor'], 'SubscriptionValidate' => ['-url' => 'https://yahoo.com/login', '-required' => 'N'], 'Studio' => ['-email' => 'studio@gmail.com', '-phone' => '020 7607 3200']]]
            ],
            [
                '<Main><Child demo="something" another="something else" /><Child demo="something" another="something else" /><Child demo="something" another="something else" /></Main>',
                ['Main' => ['Child' => [['-demo' => 'something', '-another' => 'something else'], ['-demo' => 'something', '-another' => 'something else'], ['-demo' => 'something', '-another' => 'something else']]]]
            ]
        ];
    }
}
