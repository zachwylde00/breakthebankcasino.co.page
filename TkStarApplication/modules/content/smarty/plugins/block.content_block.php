<?php

$GLOBALS['smarty_content_block'] = '';
/*
 * Smarty plugin
 * -------------------------------------------------------------
 * File:     block.content_block.php
 * Type:     block
 * Name:     assign
 * Purpose:  assign a value to a template variable
 * -------------------------------------------------------------
 */

function smarty_block_content_block($params, $content, Smarty_Internal_Template $template, &$repeat) {
    if (!isset($params['content_type'])) {
        return false;
    }
    // first loop
    if (!$content && $repeat) {
        // intializing variables on first run
        if ($GLOBALS['smarty_content_block'] == '') {
            $defaults = array(
                'categories' => null,
                'start' => 0,
                'limit' => 20,
                'sort' => "id",
                'order' => "desc",
                'text_limit' => null,
                'post' => null,
                'exclude' => null,
                'read_more' => false
            );
            $mergedParams = array_merge($defaults, $params);
            $GLOBALS['smarty_content_block'] = CI::$APP->plugins->locate('content:getContent', $mergedParams, null, null);
            $GLOBALS['smarty_content_block_loop'] = 0;
        }
    }
    if ($content && !$repeat && $GLOBALS['smarty_content_block'] && $GLOBALS['smarty_content_block']->count() > $GLOBALS['smarty_content_block_loop']) {
        $index = $GLOBALS['smarty_content_block_loop'];
        $activeItem = $GLOBALS['smarty_content_block'][$index];
        foreach ($activeItem->fields as $field) {
            $activeItem->{$field->contentTypeField->slug} = json_decode($field->valuable->value);
            if (is_array($activeItem->{$field->contentTypeField->slug}))
                $activeItem->{$field->contentTypeField->slug} = site_url('upload/content/fields/'.implode('', json_decode($field->valuable->value)));
        }
        if (isset($params['content_type']) && $activeItem->slug) {
            $activeItem['link'] = site_url($activeItem->contentType->slug . '/' . $activeItem->slug);
        }
//        dump($activeItem->categories);
        if (isset($params['text_limit']) AND (int) $params['text_limit'] > 0) {
            //limiting full story
            $activeItem->short_story = mb_substr(trim(str_replace('<br>', '<br />', strip_tags($activeItem->full_story, '<br>'))), 0, $params['text_limit']) . '...';
            //limiting short story
            $activeItem->short_story = mb_substr(trim(str_replace('<br>', '<br />', strip_tags($activeItem->short_story, '<br>'))), 0, $params['text_limit']) . '...';
        }
        $template->smarty->assign('item', $activeItem);
        $template->smarty->setLeftDelimiter('<(');
        $template->smarty->setRightDelimiter(')>');
        if ($GLOBALS['smarty_content_block']->count() > $index) {
            $repeat = true;
            $GLOBALS['smarty_content_block_loop'] ++;
            return $template->smarty->fetch('string:' . $content);
        }
    }

    //last loop
    if (!$repeat) {
        //free up memory and assignments
        $GLOBALS['smarty_content_block'] = '';
        $GLOBALS['smarty_content_block_loop'] = 0;
        $template->smarty->setLeftDelimiter('{');
        $template->smarty->setRightDelimiter('}');
    }
}
