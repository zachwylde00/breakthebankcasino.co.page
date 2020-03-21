<?php
class Smart extends Smarty {
    private $layout;
    private $template_name;
    private $theme_parent_folder;
    private $cssArray = [ ];
    private $jsArray = [ ];
    private $jsHeadArray = [ ];
    private $template_config_parsed = false;
    private $loaded_modules = array();
    public function load ( $template_name , $admin = FALSE ) {
        $this->theme_parent_folder = $admin == true ? 'admin' : 'default';
        $this->template_name = $template_name;
        $this->setTemplateDir([
            FCPATH . 'themes/' . $this->theme_parent_folder . '/' . $template_name ,
            'adminTheme' => FCPATH . 'themes/' . $this->theme_parent_folder . '/' . $template_name ,
            'publicTheme' => FCPATH . 'themes/' . $this->theme_parent_folder . '/default'
        ]);
        $this->setCompileDir(FCPATH . 'cache/smarty/' . $this->theme_parent_folder . '/cache/' . $template_name);
        $this->setCacheDir(FCPATH . 'cache/smarty/' . $this->theme_parent_folder . '/compile/' . $template_name);
        $this->addPluginsDir(APPPATH . 'smarty/plugins');
        $this->loadModulePluginsAutoLoad();
        $this->setConfigDir(APPPATH . 'smarty/config');
        $this->setLayout("default");
    }
    public function loadModulePluginsAutoLoad () {
        if ( file_exists(APPPATH . 'config/autoload.php') ) {
            include(APPPATH . 'config/autoload.php');
        }
        if ( file_exists(APPPATH . 'config/' . ENVIRONMENT . '/autoload.php') ) {
            include(APPPATH . 'config/' . ENVIRONMENT . '/autoload.php');
        }
        if ( !isset($autoload) ) {
            return;
        }
        if ( !key_exists('smarty_module_plugins' , $autoload) ) {
            return;
        }
        foreach ( $autoload['smarty_module_plugins'] as $modulePlugins ) {
            $this->addModulePluginsDir($modulePlugins);
        }
    }
    public function addModulePluginsDir ( $module_name = null ) {
        if ( !$module_name ) {
            $module_name = CI::$APP->router->fetch_module();
        }

        if ( in_array($module_name , $this->loaded_modules) ) {
            return false;
        }
        $module_plugin_dir_name = APPPATH . 'modules/' . $module_name . '/smarty/plugins';
        if ( is_dir($module_plugin_dir_name) ) {
            $this->addPluginsDir($module_plugin_dir_name);
        }
    }

    /**
     * 
     * @param type $layout
     */
    public function setLayout ( $layout ) {
        $this->layout = $layout;
    }

    /**
     * 
     * @param string $file 
     * @param boolean $specialfile load a special file from a module
     */
    public function view ( $file ) {

        $content = $this->fetchView($file);
        $this->assign('content' , $content);
        $this->display('layout/' . $this->layout . '.tpl');
    }

    /**
     * 
     * @param type $file
     */
    public function fetchView ( $file , $variableGroup = null ) {
        $module_name = CI::$APP->router->fetch_module();
        $module_view_dir = APPPATH . 'modules/' . $module_name . '/views/' . $file . '.tpl';

        if ( file_exists($module_view_dir) ) {

            $tplURI = $module_view_dir;
        }
        elseif ( $this->moduleTemplateExists($file . '.tpl') ) {
            $tplURI = 'modules/' . $module_name . '/' . $file . '.tpl';
        }
        elseif ( $this->templateExists('modules/' . $file . '.tpl') ) {
            $tplURI = 'modules/' . $file . '.tpl';
        }
        else {
            return false;
        }
        if ( $variableGroup ) {
            return $this->fetch($tplURI , $variableGroup);
        }
        else {
            return $this->fetch($tplURI);
        }
    }

    /**
     * 
     * @param type $file
     * @param type $media
     */
    public function addCSS ( $file , $media = 'all' ) {
        $this->cssArray[] = [
            'file' => '{assets_url}/' . $file ,
            'media' => $media
        ];
    }

    /**
     * 
     * @param type $file
     * @param type $position
     */
    public function addJS ( $file , $position = 'footer' ) {
        $jsPath = '{assets_url}/' . $file;
        if ( $position == 'footer' ) {
            $this->jsArray[] = $jsPath;
        }
        else if ( $position == 'header' ) {
            $this->jsHeadArray[] = $jsPath;
        }
    }

    /**
     * 
     * @param type $file
     * @param type $media
     */
    public function addModuleCSS ( $file , $media = 'all' ) {
        $module_name = CI::$APP->router->fetch_module();
        $this->jsArray[] = [
            'file' => '{assets_url}/' . $module_name . '/css/' . $file ,
            'media' => $media
        ];
    }

    /**
     * 
     * @param type $file
     * @param type $position
     */
    public function addModuleJS ( $file , $position = 'footer' ) {
        $module_name = CI::$APP->router->fetch_module();
        $jsPath = '{assets_url}/' . $module_name . '/js' . $file;
        if ( $position == 'footer' ) {
            $this->jsArray[] = $jsPath;
        }
        else if ( $position == 'header' ) {
            $this->jsHeadArray[] = $jsPath;
        }
    }

    /**
     * 
     * @return boolean
     */
    public function parseTemplateConfig () {
        $config_file_path = FCPATH . 'themes/' . $this->theme_parent_folder . '/' . $this->template_name . '/config.json';
        if ( !file_exists($config_file_path) ) {
            return false;
        }
        $config = json_decode(file_get_contents($config_file_path));
        if ( isset($config->cssRequire) ) {
            $cssRequire = $this->parseCssRequire($config->cssRequire);
            if ( $cssRequire && is_array($cssRequire) ) {
                $this->cssArray = array_merge($cssRequire , $this->cssArray);
            }
        }
        if ( isset($config->jsRequire) ) {
            $jsRequire = $this->parseJsRequire($config->jsRequire);
            if ( $jsRequire && is_array($jsRequire) ) {
                $this->jsArray = array_merge($jsRequire , $this->jsArray);
            }
        }
        if ( isset($config->jsHeadRequire) ) {
            $jsHeadRequire = $this->parseJsRequire($config->jsHeadRequire);
            if ( $jsHeadRequire && is_array($jsHeadRequire) ) {
                $this->jsHeadArray = array_merge($jsHeadRequire , $this->jsHeadArray);
            }
        }
        $this->template_config_parsed = true;
    }

    /**
     * 
     * @param type $list
     * @return boolean
     */
    public function parseJsRequire ( $list ) {
        if ( is_array($list) ) {
            return $list;
        }
        else {
            return FALSE;
        }
    }

    /**
     * 
     * @param type $list
     * @return boolean
     */
    public function parseCssRequire ( $list ) {
        if ( !is_array($list) ) {
            return FALSE;
        }
        foreach ( $list as &$cssField ) {
            $cssFieldArr = explode('|' , $cssField);
            if ( is_array($cssFieldArr) ) {
                $cssField = [
                    'file' => $cssFieldArr[0] ,
                    'media' => $cssFieldArr[1]
                ];
            }
            else {
                $cssField = [
                    'file' => $cssField ,
                    'media' => 'all'
                ];
            }
        }
        return $list;
    }

    /**
     * 
     * @return type
     */
    public function getCssList () {
        if ( !$this->template_config_parsed ) {
            $this->parseTemplateConfig();
        }
        return $this->cssArray;
    }

    /**
     * 
     * @return type
     */
    public function getJsList () {
        if ( !$this->template_config_parsed ) {
            $this->parseTemplateConfig();
        }
        return $this->jsArray;
    }

    /**
     * 
     * @return type
     */
    public function getHeadJsList () {
        if ( !$this->template_config_parsed ) {
            $this->parseTemplateConfig();
        }
        return $this->jsHeadArray;
    }

    /**
     * 
     * @return type
     */
    public function getAssetsURL () {
        return base_url('assets/' . $this->theme_parent_folder . '/' . $this->template_name . '/');
    }

    /**
     * 
     * @return type
     */
    public function theme_partial () {
        return base_url('themes/' . $this->theme_parent_folder . '/' . $this->template_name . '/partials');
    }

    /**
     * 
     * @return type
     */
    public function getCSSURL () {
        return base_url('assets/' . $this->theme_parent_folder . '/' . $this->template_name . '/css');
    }

    /**
     * 
     * @return type
     */
    public function getJSURL () {
        return base_url('assets/' . $this->theme_parent_folder . '/' . $this->template_name . '/js/');
    }

    public function moduleTemplateExists ( $template ) {
        return $this->templateExists('modules/' . CI::$APP->router->fetch_module() . '/' . $template);
    }

}
