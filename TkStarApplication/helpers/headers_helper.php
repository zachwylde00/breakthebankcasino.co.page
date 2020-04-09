<?php
if (!function_exists('add_js')) {
    function add_js($file = '') {
        $str = '';
        $ci = &get_instance();
        $header_js = $ci->config->item('header_js');
        if (empty($file)) {
            return;
        }
        if (is_array($file)) {
            if (!is_array($file) && count($file) <= 0) {
                return;
            }
            foreach ($file AS $item) {
                $header_js[] = $item;
            }
            $ci->config->set_item('header_js', $header_js);
        } else {
            $str = $file;
            $header_js[] = $str;
            $ci->config->set_item('header_js', $header_js);
        }
    }
}
if (!function_exists('add_css')) {
    function add_css($file = '') {
        $str = '';
        $ci = &get_instance();
        $header_css = $ci->config->item('header_css');
        if (empty($file)) {
            return;
        }
        if (is_array($file)) {
            if (!is_array($file) && count($file) <= 0) {
                return;
            }
            foreach ($file AS $item) {
                $header_css[] = $item;
            }
            $ci->config->set_item('header_css', $header_css);
        } else {
            $str = $file;
            $header_css[] = $str;
            $ci->config->set_item('header_css', $header_css);
        }
    }
}
if (!function_exists('put_header_css')) {
    function put_header_css() {
        $str = '';
        $ci = &get_instance();
        $header_css = $ci->config->item('header_css');

        foreach ($header_css AS $item) {
            $str .= '<link rel="stylesheet" href="' . base_url() . $item . '" type="text/css" />' . "\n";
        }
        return $str;
    }
}
if (!function_exists('put_header_js')) {
    function put_header_js() {
        $str = '';
        $ci = &get_instance();
        $header_js = $ci->config->item('header_js');
        foreach ($header_js AS $item) {
            $str .= '<script type="text/javascript" src="' . base_url() . $item . '"></script>' . "\n";
        }
        return $str;
    }
}
?>