<?php
class Template_plugin extends Plugin
{
    public function set_layout()
    {
        $this->template->set_layout($this->attribute('layout', 'default'));
    }
    public function add_javascript()
    {
        $this->template->add_javascript($this->attribute('file'));
    }
    public function add_stylesheet()
    {
        $this->template->add_stylesheet($this->attribute('file'));
    }
    public function set_meta_title($data)
    {
        $CI =& get_instance();
        $CI->load->library('parser');
        $content = $this->attribute('content', $this->content());
        $parsed_content = $CI->parser->parse_string($content, $data, TRUE);
        $this->template->set_meta_title(trim($parsed_content));
    }
    public function set_meta_description($data)
    {
        $CI =& get_instance();
        $CI->load->library('parser');
        $content = $this->attribute('content', $this->content());
        $parsed_content = $CI->parser->parse_string($content, $data, TRUE);
        $this->template->set_meta_description(trim($parsed_content));
    }
    public function set_meta_keywords($data)
    {
        $CI =& get_instance();
        $CI->load->library('parser');
        $content = $this->attribute('content', $this->content());
        $parsed_content = $CI->parser->parse_string($content, $data, TRUE);
        $this->template->set_meta_keywords(trim($parsed_content));
    }
    public function javascripts()
    {
        return $this->template->javascripts();
    }
    public function stylesheets()
    {
        return $this->template->stylesheets();
    }
    public function metadata()
    {
        return $this->template->metadata();
    }
    public function analytics()
    {
        return $this->template->analytics();
    }
    public function page_head()
    {
        return $this->template->page_head();
    }
    public function head()
    {
        return $this->template->head();
    }
    public function footer()
    {
        return $this->template->footer();
    }
    public function xml_output()
    {
        return xml_output();
    }
}
?>