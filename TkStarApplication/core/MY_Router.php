<?php
require_once(APPPATH . 'libraries' . DS . 'Core' . DS . 'Router.php');
class MY_Router extends MX_Router {
    public $module;
    public function fetch_module(){
        return $this->module;
    }
    public function _validate_request($segments){
        if (count($segments) == 0){
            return($segments);
		}
        if ($located = $this->locate($segments)){
            return($located);
		}
        if (isset($this->routes['404_override']) AND $this->routes['404_override']){
            $segments = explode('/', $this->routes['404_override']);
            if($located = $this->locate($segments)){
                return($located);
			}
        }
        show_404();
    }
    public function locate($segments) {
        $this->located = 0;
        $ext = $this->config->item('controller_suffix') . EXT;
        if (isset($segments[0]) && $routes = Modules::parse_routes($segments[0], implode('/', $segments))){
            $segments = $routes;
        }
        list($module, $directory, $controller) = array_pad($segments, 3, NULL);
        $module = str_replace('_', ' ', $module);
        $module = str_replace('-', '_', $module);
        $controller = str_replace('_', ' ', $controller);
        $controller = str_replace('-', '_', $controller);
        $directory = str_replace('_', ' ', $directory);
        $directory = str_replace('-', '_', $directory);
        foreach (Modules::$locations as $location => $offset) {
            if (is_dir($source = $location . $module . '/controllers/')) {
                $this->module = $module;
                $this->directory = $offset . $module . '/controllers/';
                if ($directory) {
                    if (is_dir($source . $directory . '/')) {
                        $source .= $directory . '/';
                        $this->directory .= $directory . '/';
                        if ($controller) {
                            if (is_file($source . ucfirst($controller) . $ext)) {
                                $this->located = 3;
                                return array_slice($segments, 2);
                            } else
                                $this->located = -1;
                        }
                    }
                    else
                    if (is_file($source . ucfirst($directory) . $ext)) {
                        $this->located = 2;
                        return array_slice($segments, 1);
                    } else
                        $this->located = -1;
                }
                if (is_file($source . ucfirst($module) . $ext)) {
                    $this->located = 1;
                    return $segments;
                }
                if ($directory == 'admin') {
                    if ($controller AND is_file($source . $module . $ext)) {
                        $segments = array_slice($segments, 2);
                        array_unshift($segments, $module);
                        return $segments;
                    }
                }
            }
        }
        if (!empty($this->directory))
            return;
        if ($directory) {
            if (is_file(APPPATH . 'controllers/' . $module . '/' . ucfirst($directory) . $ext)) {
                $this->directory = $module . '/';
                return array_slice($segments, 1);
            }
            if ($controller) {
                if (is_file(APPPATH . 'controllers/' . $module . '/' . $directory . '/' . ucfirst($controller) . $ext)) {
                    $this->directory = $module . '/' . $directory . '/';
                    return array_slice($segments, 2);
                }
            }
        }
        if (is_dir(APPPATH . 'controllers/' . $module . '/')) {
            $this->directory = $module . '/';
            return array_slice($segments, 1);
        }
        if (is_file(APPPATH . 'controllers/' . ucfirst($module) . $ext)) {
            return $segments;
        }

        $this->located = -1;
    }
    public function set_class($class) {
        $this->class = str_replace('_', ' ', $class) . $this->config->item('controller_suffix');
        $this->class = str_replace('-', '_', $this->class) . $this->config->item('controller_suffix');
    }
    public function set_method($method) {
        $this->method = str_replace('_', ' ', $method);
        $this->method = str_replace('-', '_', $this->method);
    }
}
?>