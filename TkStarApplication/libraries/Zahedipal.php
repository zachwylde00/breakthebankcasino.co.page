<?php
class Zahedipal {

    public function __construct () {
        error_reporting(E_ALL);
    }
    function zpCurl ( $data = array() , $verify = false ) {
        try {
            $r = ($verify == true) ? 'verify' : 'request';
			$ch = curl_init('https://developerapi.net/api/v1/' . $r);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
			curl_setopt($ch, CURLOPT_HTTPHEADER, array(
				'Content-Type: application/json',
				'Content-Length: ' . strlen($data))
			);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			$res = curl_exec($ch);
			curl_close($ch);
        } catch ( Exception $e ) {
            return false;
        }
        return $res;
    }
}
