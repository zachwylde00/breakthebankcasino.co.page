<?php

use Sirius\Upload\Container\Local as LocalContainer;

class Content_image extends ContentField implements ContentFieldInterface {

    public function getFormFieldHTML() {
        return $this->smartyFetch();
    }

    public function getPreparedValueForDB() {
        if ($this->isNew) {
            //json encode uploaded file
            return json_encode([
                $this->tplName . $this->fieldSlug . '/',
                $this->CI->input->imageFile($this->fieldSlug, 'content/fields/' . $this->tplName . $this->fieldSlug . '/')
            ]);
        } elseif ($this->isEdited) {
            //json_decode last file and delete it
            list($path, $file) = json_decode($this->value);
            if ($path) {
                $folderContainer = new LocalContainer(FCPATH . 'upload/content/fields/' . $path);
                $folderContainer->delete($file);
            }
            //json encode new file to save in db
            return json_encode([
                $this->tplName . $this->fieldSlug . '/',
                $this->CI->input->imageFile($this->fieldSlug, 'content/fields/' . $this->tplName . $this->fieldSlug . '/')
            ]);
        }
        return $this->value;
    }

    public function getPreparedValueForShow() {
        list($path, $file) = json_decode($this->value);
        return base_url('upload/content/fields/' . $path . $file);
    }

}
