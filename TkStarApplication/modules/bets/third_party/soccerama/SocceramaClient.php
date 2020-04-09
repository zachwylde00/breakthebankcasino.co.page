<?php
use GuzzleHttp\Client;
require_once Soccerama_dir . 'Exceptions/ApiRequestException.php';
class SocceramaClient{
    protected $client;
    protected $apiToken;
    protected $withoutData;
    protected $include = [ ];
    public function __construct($apiToken, $include = [ ], $withoutData = false){
        $options = [
            'base_uri' => 'https://soccer.sportmonks.com/api/v2.0/' ,
            'verify' => false ,
        ];
        $this->client = new Client($options);

        $this->apiToken = $apiToken;
        if(empty($this->apiToken)){
            throw new \InvalidArgumentException('No API token set');
        }
        if(count($include) )
            $this->setInclude($include);
        $this->withoutData = $withoutData;
    }
    protected function call($url, $hasData = false){
        $query = ['api_token' => $this->apiToken ];
        if(count((array)$this->include)){
            $query['include'] = $this->include;
        }
        $response = $this->client->get('v1.2/'.$url, ['query' => $query ]);
        $body = json_decode($response->getBody()->getContents());
        if(property_exists($body, 'error')){
            print_r($response->getBody());
			exit();
        }
        if($hasData && $this->withoutData){
            return $body->data;
        }
        return json_encode($body);
    }
    protected function callData($url){
        return $this->call($url, true);
    }
    public function setInclude($include){
        if(is_array($include)){
            $include = implode(',', $include);
        }
        $this->include = $include;
        return $this;
    }
}
?>