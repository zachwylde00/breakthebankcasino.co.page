<?php
class catches{
	public function CreateCatch($value = 'default', $id = 'default', $time = 'default'){
		if($id == 'default'){
			$id = $_SESSION['panel_id'];
		}
		if($time == 'default'){
			$time = time();
		}
		$value = tkstar_safe($value);
		if($value == 'default'){
			$value = 'value = none\ntime = ' . $time;
		}
		file_put_contents($_SERVER["DOCUMENT_ROOT"] . '/panel/system/catches/' . $id . '_' . time() . '.txt', $value);
		return true;
	}
	public function ReadCatch($json = 'false', $id = 'default'){
		if($id == 'default'){
			$id = $_SESSION['panel_id'];
		}
		$result = array();
		$outputs = glob($_SERVER["DOCUMENT_ROOT"] . '/panel/system/catches/' . $id . '_*.txt');
		foreach($outputs as $output){
			$result[] = file_get_contents($output);
		}
		if($json == 'false'){
			return $result;
		}elseif($json == 'true'){
			return json_encode($result, JSON_UNESCAPED_UNICODE);
		}else{
			return 'null';
		}
	}
	public function DeleteCatch($id = 'default'){
		if($id == 'default'){
			$id = $_SESSION['panel_id'];
		}
		$catches = glob($_SERVER["DOCUMENT_ROOT"] . '/panel/system/catches/' . $id . '_*.txt');
		$i = '0';
		foreach($catches as $catche){
			if(file_exists($catche)){
				unlink($catche);
				$i++;
			}else{
				$i--;
			}
		}
		if($i > 0){
			return false;
		}elseif($i < 0){
			return true;
		}elseif(empty($i) OR $i == '0'){
			return 'None Catch Found';
		}else{
			return null;
		}
	}
	public function DeleteAllCatches(){
		$catches = glob($_SERVER["DOCUMENT_ROOT"] . '/panel/system/catches/*.txt');
		foreach($catches as $catche){
			if(file_exists($catche)){
				unlink($catche);
			}
		}
	}
}
?>