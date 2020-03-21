<?php
require_once(APPPATH . 'libraries' . DS . 'Core' . DS . 'Config.php');
class MY_Config extends MX_Config
{
    function site_url($uri = '', $protocol = NULL)
    {
        $config_item = (isset($this->config['site_url'])) ? 'site_url' : 'base_url';
        if ($uri == '')
        {
            return $this->slash_item($config_item).$this->item('index_page');
        }
        if ($this->item('enable_query_strings') == FALSE)
        {
            $suffix = ($this->item('url_suffix') == FALSE) ? '' : $this->item('url_suffix');
            return $this->slash_item($config_item).$this->slash_item('index_page').$this->_uri_string($uri).$suffix;
        }
        else
        {
            return $this->slash_item($config_item).$this->item('index_page').'?'.$this->_uri_string($uri);
        }
    }
}
?>