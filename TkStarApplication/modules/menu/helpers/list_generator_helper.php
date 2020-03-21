<?php

if (!function_exists('list_generator')) {

    function list_generator($list, $attrs = [], $root = false) {
        $inner = '';
        $ul_attrs = [];
        $i = 0;
        foreach ($list as $menu) {
            $li_attrs = [];
            $prefix = '';
            $postfix = '';

            //li class binding
            key_exists('li_class', $attrs) && $li_attrs['class'][] = $attrs['li_class'];
            key_exists('li_active_class', $attrs) && key_exists('target', $menu) && base_url($menu['target']) == current_url() && $li_attrs['class'][] = $attrs['li_active_class'];
            key_exists('li_first_class', $attrs) && $root && ($i == 0) && $li_attrs['class'][] = $attrs['li_first_class'];
            key_exists('li_last_class', $attrs) && $root && ($i == count($list) - 1) && $li_attrs['class'][] = $attrs['li_last_class'];
            key_exists('class', $li_attrs) && $li_attrs['class'] = implode(' ', $li_attrs['class']);
            //icon prefix
            $icon = '';
            key_exists('icon', $attrs) && $attrs['icon'] == '1' && key_exists('icon', $menu) && $icon = list_generator_icon($menu['icon'], $attrs);
            key_exists('icon_position', $attrs) && $attrs['icon_position'] == 'after' ? $postfix.=$icon : $prefix .= $icon;

            if (key_exists('children', $menu)) {
                $inner .= list_generator_li(anchor(current_url() . '#', $prefix . ' ' . $menu['title']) . ' ' . $postfix . list_generator($menu['children'], $attrs), $li_attrs);
            } else {
                $inner .= list_generator_li(anchor(base_url($menu['target']), $prefix . ' ' . $menu['title']) . ' ' . $postfix, $li_attrs);
            }
            $i++;
        }
        key_exists('ul_class', $attrs) && $ul_attrs['class'] = $attrs['ul_class'];
        $output = list_generator_ul($inner, $ul_attrs);
        return $output;
    }

}
if (!function_exists('list_generator_ul')) {

    function list_generator_ul($inner, $attrs = []) {
        $params = '';
        if (key_exists('class', $attrs)) {
            $params = ' class="' . $attrs['class'] . '"';
        }
        return '<ul' . $params . '>' . $inner . '</ul>';
    }

}
if (!function_exists('list_generator_li')) {

    function list_generator_li($inner, $attrs = []) {
        $params = '';
        if (key_exists('class', $attrs)) {
            $params = ' class="' . $attrs['class'] . '"';
        }
        return '<li' . $params . '>' . $inner . '</li>';
    }

}
if (!function_exists('list_generator_icon')) {

    function list_generator_icon($icon, $attrs = []) {
        $tag = key_exists('icon_tag', $attrs) ? $attrs['icon_tag'] : 'i';
        $params = ' class="';
        if (key_exists('icon_default_class', $attrs)) {
            $params .= $attrs['icon_default_class'] . ' ';
        }
        $params .= $icon . '"';
        return '<' . $tag . $params . '>' . '</' . $tag . '>';
    }

}