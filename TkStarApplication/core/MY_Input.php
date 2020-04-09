<?php
use Sirius\Upload\Handler as UploadHandler;
class MY_Input extends CI_Input {
    public function __construct() {
        parent::__construct();
    }
    public function file($index = null, $path = null, $extension = null, $size = 0) {
        if (empty($_FILES))
            return NULL;
        if ($path === null)
            $path = FCPATH . 'upload/other/file';
        else {
            if (!str_contains($path, FCPATH))
                $path = FCPATH . 'upload/' . $path;
            elseif (!str_contains($path, 'upload/')) {
                $path = 'upload/' . $path;
            }
        }
        if ($extension === null) {
            $extension = ['jpg', 'jpeg', 'png', 'bmp', 'gif', 'pdf', 'csv', 'xls', 'xlsx', 'ods', 'xml', 'txt'];
        }
        if (!is_array($extension))
            $extensionxt = explode(',', $extension);
        $uploadHandler = new UploadHandler($path);
        $uploadHandler->setOverwrite(false);
        $uploadHandler->setPrefix(time() . '_');
        $uploadHandler->addRule('extension', ['allowed' => $extension], '{label} &#1576;&#1575;&#1740;&#1583; &#1601;&#1575;&#1740;&#1604; &#1576;&#1575; &#1662;&#1587;&#1608;&#1606;&#1583;&#1607;&#1575;&#1740;  &#1605;&#1593;&#1578;&#1576;&#1585; &#1576;&#1575;&#1588;&#1583;', '&#1601;&#1575;&#1740;&#1604;');
        if ($size > 0)
            $uploadHandler->addRule('filesize', ['max' => $size.'M'], '&#1587;&#1575;&#1740;&#1586; {label} &#1576;&#1575;&#1740;&#1583; &#1705;&#1605;&#1578;&#1585; &#1575;&#1586;  {max} &#1576;&#1575;&#1588;&#1583;', '&#1601;&#1575;&#1740;&#1604; &#1593;&#1705;&#1587;');
        $result = $uploadHandler->process($_FILES[$index]);
        if ($result->isValid()) {
            try {
                $result->confirm();
                return $result->name;
            } catch (\Exception $e) {
                $result->clear();
                return false;
            }
        } else {
            return false;
        }
    }
    public function imageFile($index_name, $path = null) {
        if ($path === null)
            $path = FCPATH . 'upload/other/img';
        return $this->file($index_name, $path, ['jpg', 'jpeg', 'png', 'bmp', 'gif']);
    }
    public function videoFile($index_name, $path = null) {
        if ($path === null)
            $path = FCPATH . 'upload/other/video';
        return $this->file($index_name, $path, ['mov', 'mp4', 'mpeg', 'mp4a', 'avi', 'mpg', '3gp', 'm4a', 'mca', 'wmv','webm'],10);
    }
    public function pdfFile($index_name, $path = null) {
        if ($path === null)
            $path = FCPATH . 'upload/other/pdf';
        return $this->file($index_name, $path, ['pdf']);
    }
    public function audioFile($index_name, $path = null) {
        if ($path === null)
            $path = FCPATH . 'upload/other/pdf';
        return $this->file($index_name, $path, ['mp3', 'ogg', 'wav', 'mka', 'wma', 'mpga', 'mp2', 'midi', 'mid']);
    }
    public function dataFile($index_name, $path = null) {
        if ($path === null)
            $path = FCPATH . 'upload/other/datafile';
        return $this->file($index_name, $path, ['csv', 'xls', 'xlsx', 'ods', 'xml', 'txt']);
    }
}
?>