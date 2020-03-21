<?php
function smarty_block_message($params, $content, Smarty_Internal_Template $template, &$repeat) {
    if (!$repeat) {
        if (isset($content)) {
            $message = CI::$APP->message->get_message();
            $content = str_replace('#message', $message['message'], $content);
            $content = str_replace('#class', $message['type'], $content);
            $content = str_replace('#title', $message['title'], $content);
            return $content;
        }
    }
}
?>