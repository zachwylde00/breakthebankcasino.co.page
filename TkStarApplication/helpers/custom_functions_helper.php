<?php
if (!function_exists('_pr')) {
    function _pr($a) {
        echo "<pre>";
        print_r($a);
        echo "</pre>";
    }
}
if (!function_exists('_vd')) {
    function _vd($a) {
        echo "<pre>";
        var_dump($a);
        echo "</pre>";
    }
}
if (!function_exists('array_to_object')) {
    function array_to_object($array) {
        $Object = new stdClass();
        foreach ($array as $key => $value) {
            $Object->$key = $value;
        }
        return $Object;
    }
}
if (!function_exists('object_to_array')) {
    function object_to_array($Object) {
        $array = get_object_vars($Object);
        return $array;
    }
}
if (!function_exists('is_ajax')) {
    function is_ajax() {
        return (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && ($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest'));
    }
}
if (!function_exists('image_thumb')) {
    function image_thumb($source_image, $width = 0, $height = 0, $crop = FALSE, $props = array()) {
        $CI = & get_instance();
        $CI->load->library('image_cache');
        $props['source_image'] = '/' . str_replace(base_url(), '', $source_image);
        $props['width'] = $width;
        $props['height'] = $height;
        $props['crop'] = $crop;
        $CI->image_cache->initialize($props);
        $image = $CI->image_cache->image_cache();
        $CI->image_cache->clear();
        return $image;
    }
}
if (!function_exists('br2nl')) {
    function br2nl($text) {
        return preg_replace('/<br\\s*?\/??>/i', '', $text);
    }
}
if (!function_exists('option_array_value')) {
    function option_array_value($object_array, $key, $value, $default = array()) {
        $option_array = array();
        if (!empty($default)) {
            $option_array = $default;
        }
        foreach ($object_array as $Object) {
            $option_array[$Object->$key] = $Object->$value;
        }
        return $option_array;
    }
}
if (!function_exists('in_uri')) {
    function in_uri($uri_array, $uri = null, $array_keys = FALSE) {
        if (!is_array($uri_array)) {
            $uri_array = array($segments);
        }
        $CI = & get_instance();
        if (!empty($uri)) {
            $uri_string = '/' . trim($uri, '/');
        } else {
            $uri_string = '/' . trim($CI->uri->uri_string(), '/');
        }
        $uri_array = ($array_keys) ? array_keys($uri_array) : $uri_array;
        foreach ($uri_array as $string) {
            if (strpos($uri_string, ($string != '') ? '/' . trim($string, '/') : ' ') === 0) {
                return true;
            }
        }
        return false;
    }
}
if (!function_exists('theme_partial')) {

    function theme_partial($view, $vars = array(), $return = TRUE) {
        $CI = & get_instance();
        return base_url('themes/' . $this->CI->smart->theme_parent_folder . '/' . $this->CI->smart->template_name . '/partials/' . $view);
    }
}
if (!function_exists('theme_url')) {
    function theme_url($uri = '') {
        $CI = & get_instance();
        return base_url($CI->template->theme_path . '/' . $CI->template->theme . '/' . trim($uri, '/'));
    }
}
if (!function_exists('domain_name')) {
    function domain_name() {
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
        $domainName = $_SERVER['HTTP_HOST'] . '/';
        return $domainName;
    }
}
if (!function_exists('glob_recursive')) {
    function glob_recursive($pattern, $flags = 0) {
        $files = glob($pattern, $flags);
        foreach (glob(dirname($pattern) . '/*', GLOB_ONLYDIR | GLOB_NOSORT) as $dir) {
            $files = array_merge($files, glob_recursive($dir . '/' . basename($pattern), $flags));
        }
        return $files;
    }
}
if (!function_exists('url_base64_encode')) {
    function url_base64_encode(&$str = "") {
        return strtr(
                base64_encode($str), array(
            '+' => '.',
            '=' => '-',
            '/' => '~'
                )
        );
    }
}
if (!function_exists('url_base64_decode')) {
    function url_base64_decode(&$str = "") {
        return base64_decode(strtr(
                        $str, array(
            '.' => '+',
            '-' => '=',
            '~' => '/'
                        )
        ));
    }
}
if (!function_exists('xml_output')) {
    function xml_output() {
        $CI = & get_instance();
        $CI->output->set_content_type('text/xml');
        $CI->output->set_output("<?xml version=\"1.0\"?>\r\n");
    }
}
if (!function_exists('js_start')) {
    function js_start() {
        ob_start();
    }

}
if (!function_exists('js_end')) {
    function js_end() {
        $CI = & get_instance();
        $CI->template->add_script(ob_get_contents());
        ob_end_clean();
    }
}
if (!function_exists('str_to_bool')) {
    function str_to_bool($str) {
        if (is_bool($str)) {
            return $str;
        }
        $str = (string) $str;
        if (in_array(strtolower($str), array('false', '0', ''))) {
            return false;
        } else {
            return true;
        }
    }
}
if (!function_exists('is_inline_editable')) {
    function is_inline_editable($content_type_id = null) {
        $CI = & get_instance();
        $CI->load->eloquent('content_types_model');
        if ($CI->settings->enable_inline_editing && $CI->settings->enable_admin_toolbar && $CI->secure->group_types(array(ADMINISTRATOR))->is_auth()) {
            if (empty($content_type_id)) {
                return TRUE;
            }
            if ($CI->Group_session->type != SUPER_ADMIN) {
                if (!isset($CI->content_types_model->has_permission_cache[$content_type_id])) {
                    $Content_types_model = new Content_types_model();
                    $Content_type = $Content_types_model->group_start()
                            ->where('restrict_admin_access', 0)
                            ->or_where_related('admin_groups', 'group_id', $CI->Group_session->id)
                            ->group_end()
                            ->get_by_id($content_type_id);
                    $CI->content_types_model->has_permission_cache[$content_type_id] = ($Content_type->exists()) ? TRUE : FALSE;
                }

                return $CI->content_types_model->has_permission_cache[$content_type_id];
            } else {
                return TRUE;
            }
        } else {
            return FALSE;
        }
    }
}  
?>