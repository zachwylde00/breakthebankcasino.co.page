<?php
require_once(APPPATH . 'libraries' . DS . 'Core' . DS . 'Loader.php');
class MY_Loader extends MX_Loader {
    protected $_ci_presenter;
    protected $_ci_repository;
    private $_ci_eloquents = [];
    public function theme($view, $vars = array(), $return = FALSE, $path = 'themes') {
        $absolute_path = CMS_ROOT . trim($path, '/') . '/';
        $this->_ci_view_paths = array($absolute_path => TRUE) + $this->_ci_view_paths;
        return $this->_ci_load(array('_ci_view' => $view, '_ci_vars' => $this->_ci_object_to_array($vars), '_ci_return' => $return));
    }
    public function theme_xml($view, $vars = array(), $return = FALSE, $path = 'themes') {
        $absolute_path = CMS_ROOT . trim($path, '/') . '/';
        $this->_ci_view_paths = array($absolute_path => TRUE) + $this->_ci_view_paths;
        return $this->_ci_xml(array('_ci_view' => $view, '_ci_vars' => $this->_ci_object_to_array($vars), '_ci_return' => $return));
    }
    public function xml($view, $vars = array(), $return = FALSE) {
        return $this->_ci_xml(array('_ci_view' => $view, '_ci_vars' => $this->_ci_object_to_array($vars), '_ci_return' => $return));
    }
    protected function _ci_xml($_ci_data) {
        foreach (array('_ci_view', '_ci_vars', '_ci_path', '_ci_return') as $_ci_val) {
            $$_ci_val = (!isset($_ci_data[$_ci_val])) ? FALSE : $_ci_data[$_ci_val];
        }
        $file_exists = FALSE;
        if ($_ci_path != '') {
            $_ci_x = explode('/', $_ci_path);
            $_ci_file = end($_ci_x);
        } else {
            $_ci_ext = pathinfo($_ci_view, PATHINFO_EXTENSION);
            $_ci_file = ($_ci_ext == '') ? $_ci_view . '.php' : $_ci_view;
            foreach ($this->_ci_view_paths as $view_file => $cascade) {
                if (file_exists($view_file . $_ci_file)) {
                    $_ci_path = $view_file . $_ci_file;
                    $file_exists = TRUE;
                    break;
                }
                if (!$cascade) {
                    break;
                }
            }
        }
        if (!$file_exists && !file_exists($_ci_path)) {
            show_error('Unable to load the requested file: ' . $_ci_file);
        }
        $_ci_CI = & get_instance();
        foreach (get_object_vars($_ci_CI) as $_ci_key => $_ci_var) {
            if (!isset($this->$_ci_key)) {
                $this->$_ci_key = $_ci_CI->$_ci_key;
            }
        }
        if (is_array($_ci_vars)) {
            $this->_ci_cached_vars = array_merge($this->_ci_cached_vars, $_ci_vars);
        }
        extract($this->_ci_cached_vars);
        $content = file_get_contents($_ci_path);
        if ((bool) @ini_get('short_open_tag') === FALSE AND config_item('rewrite_short_tags') == TRUE) {
            $content = str_replace('<?=', '<?php echo ', file_get_contents($_ci_path));
        }
        if (strpos($content, '<?xml') !== FALSE) {
            $content = preg_replace('/\<\?xml(.*?)\?\>/', '<XML\\1/XML>', $content);
        }
        $_ci_CI->output->set_content_type('text/xml');
        ob_start();
        eval('?>' . preg_replace("/;*\s*\?>/", "; ?>", $content));
        $content = ob_get_contents();
        ob_end_clean();
        if (strpos($content, '<XML')) {
            preg_replace('/\<XML(.*?)\/XML\>/', '<?xml\1?>', $content);
        }
        ob_start();
        echo $content;
        log_message('debug', 'File loaded: ' . $_ci_path);
        if ($_ci_return === TRUE) {
            $buffer = ob_get_contents();
            @ob_end_clean();
            return $buffer;
        }
        if (ob_get_level() > $this->_ci_ob_level + 1) {
            ob_end_flush();
        } else {
            $_ci_CI->output->append_output(ob_get_contents());
            @ob_end_clean();
        }
    }
    public function view($view, $vars = array(), $return = FALSE) {
        list($path, $_view) = $this->find_view_in_theme($view, $this->_module, 'views/');
        if ($path != FALSE) {
            $this->_ci_view_paths = array($path => TRUE) + $this->_ci_view_paths;
            $view = $_view;
        } else {
            list($path, $_view) = Modules::find($view, $this->_module, 'views/');
            if ($path != FALSE) {
                $this->_ci_view_paths = array($path => TRUE) + $this->_ci_view_paths;
                $view = $_view;
            }
        }
        return $this->_ci_load(array('_ci_view' => $view, '_ci_vars' => $this->_ci_object_to_array($vars), '_ci_return' => $return));
    }
    public function find_view_in_theme($file, $module, $base) {
        $segments = explode('/', $file);
        $file = array_pop($segments);
        $file_ext = (pathinfo($file, PATHINFO_EXTENSION)) ? $file : $file . EXT;
        $path = ltrim(implode('/', $segments) . '/', '/');
        $module ? $modules[$module] = $path : $modules = array();
        if (!empty($segments)) {
            $modules[array_shift($segments)] = ltrim(implode('/', $segments) . '/', '/');
        }
        foreach (Modules::$locations as $location => $offset) {
            foreach ($modules as $module => $subpath) {
                $fullpath = CI::$APP->template->theme_path . '/' . CI::$APP->template->theme . '/views/modules/' . $module . '/' . $subpath;
                if (is_file($fullpath . $file_ext))
                    return array($fullpath, $file);
            }
        }
        return array(FALSE, $file);
    }
    public function eloquent($model, $object_name = NULL, $connect = FALSE) {
        if (is_array($model))
            return $this->eloquents($model);
        ($_alias = $object_name) OR $_alias = basename($model);
        if (in_array($_alias, $this->_ci_eloquents, TRUE))
            return $this;
        list($path, $_model) = Modules::find(strtolower($model), $this->_module, 'models/');
        if ($path == FALSE) {
            return $this;
        } else {
            Modules::load_file($_model, $path);
            $model = ucwords($_model);
            $this->_ci_eloquents[] = $_alias;
        }
        return $this;
    }
    public function eloquents($models) {
        foreach ($models as $_model)
            $this->eloquent($_model);
        return $this;
    }
    public function repository($repository, $object_name = NULL, $connect = FALSE) {
        ($_alias = $object_name) OR $_alias = basename($repository);
        list($path, $_repo) = Modules::find(strtolower($repository), $this->_module, 'repositories/');
        if ($path != FALSE) {
            Modules::load_file($_repo, $path);
            $repository = ucwords($_repo);
            $this->_ci_repository[] = $_alias;
        }
        return $this;
    }
    public function presenter($presenter, $object_name = NULL, $connect = FALSE) {
        ($_alias = $object_name) OR $_alias = basename($presenter);
        list($path, $_presneter) = Modules::find(strtolower($presenter), $this->_module, 'presenters/');
        if ($path != FALSE) {
            Modules::load_file($_presneter, $path);
            $presenter = ucwords($_presneter);
            $this->_ci_presenter[] = $_alias;
        }
        return $this;
    }
    public function sentinel($module = 'users', $path = 'third_party/') {
        if (isset(CI::$APP->sentinel))
            return $this;
        list($path, $_model) = Modules::find('Sentinel_loader', $module, $path);
        Modules::load_file($_model, $path);
        $loader = new Sentinel_loader();
        CI::$APP->sentinel = $loader->createSentinel();
        return $this;
    }
}
?>