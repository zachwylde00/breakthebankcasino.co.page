<?php
function safe_codes($s){ if(is_array($s)): return((array)$s); endif; if(is_object($s)): return((object)$s); endif; if(is_numeric($s)||is_string($s)||is_bool($s)): $s=trim($s);$s=str_replace(array("<",">","{","}","[","]","/","\"","'","\\"),"",$s);$s=htmlentities($s,ENT_QUOTES|ENT_IGNORE,"UTF-8");$s=html_entity_decode($s,ENT_COMPAT|ENT_XHTML,"utf-8");$s=htmlspecialchars($s);$s=str_replace(array("<",">","{","}","[","]","/","\"","'","\\"),"",$s);$s=urldecode(trim(urlencode($s)));return($s); else: return(null); endif; }
function safe_number($n){ preg_match_all('!\d+!ium',$n,$result);return(!empty($result[0][0])?$result[0][0]:""); }
function safe_mail($s){ return(preg_match('/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9_](?:[a-zA-Z0-9_\-](?!\.)){0,61}[a-zA-Z0-9_-]?\.)+[a-zA-Z0-9_](?:[a-zA-Z0-9_\-](?!$)){0,61}[a-zA-Z0-9_]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/',$s)); }
function session($s,$v=false){ $p=session_prefixes."_";if(!$v): if(isset($_COOKIE[$p.$s])&&!empty($_COOKIE[$p.$s])): return($_COOKIE[$p.$s]); else: return(null); endif; elseif(!empty($v)): setcookie($p.$s,$v);return(true); endif; }
function unset_session($s){ $p=session_prefixes."_";if(empty($s)||!isset($_COOKIE[$p.$s])): return(false); endif;setcookie($p.$s,null,-1,"/");return(true); }
function ip(){ return((isset($_SERVER["HTTP_CF_CONNECTING_IP"]) AND !empty($_SERVER["HTTP_CF_CONNECTING_IP"])) ? (string)safe_codes($_SERVER["HTTP_CF_CONNECTING_IP"]) : (string)safe_codes($_SERVER["REMOTE_ADDR"])); }
function useragent(){$ua=$_SERVER['HTTP_USER_AGENT'];$bn="Unknown";$pt="Unknown";$vr="";if(preg_match("/linux/i",$ua)):$pt="Linux";elseif(preg_match("/macintosh|mac os x/i",$ua)):$pt="Mac";elseif (preg_match("/windows|win32/i",$ua)):$pt="Windows";endif;if(preg_match("/MSIE/i",$ua) && !preg_match("/Opera/i",$ua)):$bn="Internet Explorer";$ub="MSIE";elseif(preg_match("/Firefox/i",$ua)):$bn="Mozilla Firefox";$ub="Firefox";elseif(preg_match("/Chrome/i",$ua)):$bn="Google Chrome";$ub="Chrome";elseif(preg_match("/Safari/i",$ua)):$bn="Apple Safari";$ub="Safari";elseif(preg_match("/Opera/i",$ua)):$bn="Opera";$ub="Opera";elseif(preg_match("/Netscape/i",$ua)):$bn="Netscape";$ub="Netscape";endif;$kn=array("Version",$ub,"other");$pa="#(?<browser>".join("|",$kn).")[/ ]+(?<version>[0-9.|a-zA-Z.]*)#";preg_match_all($pa,$ua,$matches);$i=count($matches["browser"]);if($i!=1):if(strripos($ua,"Version")<strripos($ua,$ub)):$vr=$matches['version'][0];else:$vr=$matches['version'][1];endif;else:$vr=$matches['version'][0];endif; if($vr==null||$vr==""):$vr="?";endif;return($pt." - ".$bn." " .$vr);}
function random_character($s){ $c="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";return(safe_codes(substr(str_shuffle($c),0,$s),"utf-8")); }
function random_charactern($s){ $c="1234567890";return(safe_codes(substr(str_shuffle($c),0,$s),"utf-8")); }
function url($url="",$protocol="http://"){ if($url==""): $url="/"; else: $url="/".$url; endif;return($protocol.$_SERVER["SERVER_NAME"]."/casino".$url); }
function goo($url,$url_func=true){ $address=$url;if($url_func): $address=url($address); endif;header("Location:{$address}");exit(); }
function uri($p){$r=explode("/",mb_substr($_SERVER["REQUEST_URI"],1,(strlen($_SERVER["REQUEST_URI"])-1),"utf-8"));switch($p):case"pages":return((isset($r[0])&&!empty($r[0]))?rtrim(ltrim(trim($r[0]))):"");break;case"p1":return((isset($r[1])&&!empty($r[1]))?rtrim(ltrim(trim($r[1]))):"");break;case"p2":return((isset($r[2])&&!empty($r[2]))?rtrim(ltrim(trim($r[2]))):"");break;case"p3":return((isset($r[3])&&!empty($r[3]))?rtrim(ltrim(trim($r[3]))):"");break;case"p4":return((isset($r[4])&&!empty($r[4]))?rtrim(ltrim(trim($r[4]))):"");break;case"p5":return((isset($r[5])&&!empty($r[5]))?rtrim(ltrim(trim($r[5]))):"");break;case"p6":return((isset($r[6])&&!empty($r[6]))?rtrim(ltrim(trim($r[6]))):"");break;endswitch;}
function getCountries(){return array("Afghanistan"=>"+93","Albania"=>"+355","Algeria"=>"+213","American Samoa"=>"+1684","Andorra"=>"+376","Angola"=>"+244","Anguilla"=>"+1264","Antarctica"=>"+672","Argentina"=>"+54","Armenia"=>"+374","Aruba"=>"+297","Australia"=>"+61","Austria"=>"+43","Azerbaijan"=>"+994","Bahamas"=>"+1242","Bahrain"=>"+973","Bangladesh"=>"+880","Barbados"=>"+1246","Belarus"=>"+375","Belgium"=>"+32","Belize"=>"+501","Benin"=>"+229","Bermuda"=>"+1441","Bhutan"=>"+975","Bolivia"=>"+591","Bosnia and Herzegovina"=>"+387","Botswana"=>"+267","Brazil"=>"+55","British Indian Ocean Territory"=>"+246","British Virgin Islands"=>"+1284","Brunei"=>"+673","Bulgaria"=>"+359","Burkina Faso"=>"+226","Burundi"=>"+257","Cambodia"=>"+855","Cameroon"=>"+237","Canada"=>"+1","Cape Verde"=>"+238","Cayman Islands"=>"+1348","Central African Republic"=>"+236","Chad"=>"+235","Chile"=>"+56","China"=>"+86","Christmas Island"=>"+61","Cocos Islands"=>"+61","Colombia"=>"+57","Comoros"=>"+269","Cook Islands"=>"+682","Costa Rica"=>"+506","Croatia"=>"+385","Cuba"=>"+53","Curacao"=>"+599","Cyprus"=>"+257","Czech Republic"=>"+420","Democratic Republic of the Congo"=>"+243","Denmark"=>"+45","Djibouti"=>"+253","Dominica"=>"+1767","Dominican Republic"=>"+1809","East Timor"=>"+670","Ecuador"=>"+593","Egypt"=>"+20","El Salvador"=>"+503","Equatorial Guinea"=>"+240","Eritrea"=>"+291","Estonia"=>"+372","Ethiopia"=>"+251","Falkland Islands"=>"+500","Faroe Islands"=>"+298","Faroe Islands"=>"+679","Finland"=>"+358","France"=>"+33","French Polynesia"=>"+689","Gabon"=>"+241","Gambia"=>"+220","Georgia"=>"+995","Germany"=>"+49","Ghana"=>"+233","Gibraltar"=>"+350","Greece"=>"+30","Greenland"=>"+299","Grenada"=>"+1473","Guam"=>"+1671","Guatemala"=>"+502","Guernsey"=>"+1481","Guinea"=>"+224","Guinea-Bissau"=>"+245","Guyana"=>"+592","Haiti"=>"+509","Honduras"=>"+504","Hong Kong"=>"+852","Hungary"=>"+36","Iceland"=>"+354","India"=>"+91","Indonesia"=>"+62","Iran"=>"+98", /* Selected Country to Deafult */"Iraq"=>"+964","Ireland"=>"+353","Isle of Man"=>"+1624","Israel"=>"+972","Italy"=>"+39","Ivory Coast"=>"+225","Jamaica"=>"+1876","Japan"=>"+81","Jersey"=>"+44-1534","Jordan"=>"+962","Kazakhstan"=>"+7","Kenya"=>"+254","Kiribati"=>"+686","Kosovo"=>"+383","Kuwait"=>"+965","Kyrgyzstan"=>"+996","Laos"=>"+856","Latvia"=>"+371","Lebanon"=>"+961","Lesotho"=>"+266","Liberia"=>"+231","Libya"=>"+218","Liechtenstein"=>"+423","Lithuania"=>"+370","Luxembourg"=>"+352","Macau"=>"+853","Macedonia"=>"+389","Madagascar"=>"+261","Malawi"=>"+265","Malaysia"=>"+60","Maldives"=>"+960","Mali"=>"+223","Malta"=>"+356","Marshall Islands"=>"+692","Mauritania"=>"+222","Mauritius"=>"+230","Mayotte"=>"+262","Mexico"=>"+52","Micronesia"=>"+691","Moldova"=>"+373","Monaco"=>"+377","Mongolia"=>"+976","Montenegro"=>"+382","Montserrat"=>"+1664","Morocco"=>"+212","Mozambique"=>"+258","Myanmar"=>"+95","Namibia"=>"+264","Nauru"=>"+674","Nepal"=>"+977","Netherlands"=>"+31","Netherlands Antilles"=>"+599","New Caledonia"=>"+687","New Zealand"=>"+64","Nicaragua"=>"+505","Niger"=>"+227","Nigeria"=>"+234","Niue"=>"+683","North Korea"=>"+850","Northern Mariana Islands"=>"+1670","Norway"=>"+47","Oman"=>"+968","Pakistan"=>"+92","Palau"=>"+680","Palestine"=>"+970","Panama"=>"+507","Papua New Guinea"=>"+675","Paraguay"=>"+595","Peru"=>"+51","Philippines"=>"+63","Pitcairn"=>"+64","Poland"=>"+48","Portugal"=>"+351","Puerto Rico"=>"+1787","Qatar"=>"+974","Republic of the Congo"=>"+242","Reunion"=>"+262","Romania"=>"+40","Russia"=>"+7","Rwanda"=>"+250","Saint Barthelemy"=>"+590","Saint Helena"=>"+290","Saint Kitts and Nevis"=>"+1869","Saint Lucia"=>"+1758","Saint Martin"=>"+590","Saint Pierre and Miquelon"=>"+508","Saint Vincent and the Grenadines"=>"+1784","Samoa"=>"+685","San Marino"=>"+378","Sao Tome and Principe"=>"+239","Saudi Arabia"=>"+966","Senegal"=>"+221","Serbia"=>"+381","Seychelles"=>"+248","Sierra Leone"=>"+232","Singapore"=>"+65","Sint Maarten"=>"+1721","Slovakia"=>"+421","Slovenia"=>"+386","Solomon Islands"=>"+677","Somalia"=>"+252","South Africa"=>"+27","South Korea"=>"+82","South Sudan"=>"+211","Spain"=>"+34","Sri Lanka"=>"+94","Sudan"=>"+249","Suriname"=>"+597","Svalbard and Jan Mayen"=>"+47","Swaziland"=>"+268","Sweden"=>"+46","Switzerland"=>"+41","Syria"=>"+963","Taiwan"=>"+886","Tajikistan"=>"+992","Tanzania"=>"+255","Thailand"=>"+66","Togo"=>"+228","Tokelau"=>"+690","Tonga"=>"+676","Trinidad and Tobago"=>"+1868","Tunisia"=>"+216","Turkey"=>"+90","Turkmenistan"=>"+993","Turks and Caicos Islands"=>"+1649","Tuvalu"=>"+688","U.S. Virgin Islands"=>"+1340","Uganda"=>"+256","Ukraine"=>"+380","United Arab Emirates"=>"+971","United Kingdom"=>"+44","United States"=>"+598","Uruguay"=>"+598","Uzbekistan"=>"+998","Vanuatu"=>"+678","Vatican"=>"+379","Venezuela"=>"+58","Vietnam"=>"+84","Wallis and Futuna"=>"+681","Western Sahara"=>"+212","YemenYemen"=>"+967","Zambia"=>"+260","Zimbabwe"=>"+263");}
function get2countryname($name){$ss=array("Afghanistan"=>"AF","Albania"=>"AL","Algeria"=>"DZ","American Samoa"=>"AS","Andorra"=>"AD","Angola"=>"AO","Anguilla"=>"AI","Antarctica"=>"AQ","Antigua and Barbuda"=>"AG","Argentina"=>"AR","Armenia"=>"AM","Aruba"=>"AW","Australia"=>"AU","Austria"=>"AT","Azerbaijan"=>"AZ","Bahamas"=>"BS","Bahrain"=>"BH","Bangladesh"=>"BD","Barbados"=>"BB","Belarus"=>"BY","Belgium"=>"BE","Belize"=>"BZ","Benin"=>"BJ","Bermuda"=>"BM","Bhutan"=>"BT","Bolivia"=>"BO","Bosnia and Herzegovina"=>"BA","Botswana"=>"BW","Brazil"=>"BR","British Indian Ocean Territory"=>"IO","British Virgin Islands"=>"VG","Brunei"=>"BN","Bulgaria"=>"BG","Burkina Faso"=>"BF","Burundi"=>"BI","Cambodia"=>"KH","Cameroon"=>"CM","Canada"=>"CA","Cape Verde"=>"CV","Cayman Islands"=>"KY","Central African Republic"=>"CF","Chad"=>"TD","Chile"=>"CL","China"=>"CN","Christmas Island"=>"CX","Cocos Islands"=>"CC","Colombia"=>"CO","Comoros"=>"KM","Cook Islands"=>"CK","Costa Rica"=>"CR","Croatia"=>"HR","Cuba"=>"CU","Curacao"=>"CW","Cyprus"=>"CY","Czech Republic"=>"CZ","Democratic Republic of the Congo"=>"CD","Denmark"=>"DK","Djibouti"=>"DJ","Dominica"=>"DM","Dominican Republic"=>"DO","East Timor"=>"TL","Ecuador"=>"EC","Egypt"=>"EG","El Salvador"=>"SV","Equatorial Guinea"=>"GQ","Eritrea"=>"ER","Estonia"=>"EE","Ethiopia"=>"ET","Falkland Islands"=>"FK","Faroe Islands"=>"FO","Fiji"=>"FJ","Finland"=>"FI","France"=>"FR","French Polynesia"=>"PF","Gabon"=>"GA","Gambia"=>"GM","Georgia"=>"GE","Germany"=>"DE","Ghana"=>"GH","Gibraltar"=>"GI","Greece"=>"GR","Greenland"=>"GL","Grenada"=>"GD","Guam"=>"GU","Guatemala"=>"GT","Guernsey"=>"GG","Guinea"=>"GN","Guinea-Bissau"=>"GW","Guyana"=>"GY","Haiti"=>"HT","Honduras"=>"HN","Hong Kong"=>"HK","Hungary"=>"HU","Iceland"=>"IS","India"=>"IN","Indonesia"=>"ID","Iran"=>"IR","Iraq"=>"IQ","Ireland"=>"IE","Isle of Man"=>"IM","Israel"=>"IL","Italy"=>"IT","Ivory Coast"=>"CI","Jamaica"=>"JM","Japan"=>"JP","Jersey"=>"JE","Jordan"=>"JO","Kazakhstan"=>"KZ","Kenya"=>"KE","Kiribati"=>"KI","Kosovo"=>"XK","Kuwait"=>"KW","Kyrgyzstan"=>"KG","Laos"=>"LA","Latvia"=>"LV","Lebanon"=>"LB","Lesotho"=>"LS","Liberia"=>"LR","Libya"=>"LY","Liechtenstein"=>"LI","Lithuania"=>"LT","Luxembourg"=>"LU","Macau"=>"MO","Macedonia"=>"MK","Madagascar"=>"MG","Malawi"=>"MW","Malaysia"=>"MY","Maldives"=>"MV","Mali"=>"ML","Malta"=>"MT","Marshall Islands"=>"MH","Mauritania"=>"MR","Mauritius"=>"MU","Mayotte"=>"YT","Mexico"=>"MX","Micronesia"=>"FM","Moldova"=>"MD","Monaco"=>"MC","Mongolia"=>"MN","Montenegro"=>"ME","Montserrat"=>"MS","Morocco"=>"MA","Mozambique"=>"MZ","Myanmar"=>"MM","Namibia"=>"NA","Nauru"=>"NR","Nepal"=>"NP","Netherlands"=>"NL","Netherlands Antilles"=>"AN","New Caledonia"=>"NC","New Zealand"=>"NZ","Nicaragua"=>"NI","Niger"=>"NE","Nigeria"=>"NG","Niue"=>"NU","North Korea"=>"KP","Northern Mariana Islands"=>"MP","Norway"=>"NO","Oman"=>"OM","Pakistan"=>"PK","Palau"=>"PW","Palestine"=>"PS","Panama"=>"PA","Papua New Guinea"=>"PG","Paraguay"=>"PY","Peru"=>"PE","Philippines"=>"PH","Pitcairn"=>"PN","Poland"=>"PL","Portugal"=>"PT","Puerto Rico"=>"PR","Qatar"=>"QA","Republic of the Congo"=>"CG","Reunion"=>"RE","Romania"=>"RO","Russia"=>"RU","Rwanda"=>"RW","Saint Barthelemy"=>"BL","Saint Helena"=>"SH","Saint Kitts and Nevis"=>"KN","Saint Lucia"=>"LC","Saint Martin"=>"MF","Saint Pierre and Miquelon"=>"PM","Saint Vincent and the Grenadines"=>"VC","Samoa"=>"WS","San Marino"=>"SM","Sao Tome and Principe"=>"ST","Saudi Arabia"=>"SA","Senegal"=>"SN","Serbia"=>"RS","Seychelles"=>"SC","Sierra Leone"=>"SL","Singapore"=>"SG","Sint Maarten"=>"SX","Slovakia"=>"SK","Slovenia"=>"SI","Solomon Islands"=>"SB","Somalia"=>"SO","South Africa"=>"ZA","South Korea"=>"KR","South Sudan"=>"SS","Spain"=>"ES","Sri Lanka"=>"LK","Sudan"=>"SD","Suriname"=>"SR","Svalbard and Jan Mayen"=>"SJ","Swaziland"=>"SZ","Sweden"=>"SE","Switzerland"=>"CH","Syria"=>"SY","Taiwan"=>"TW","Tajikistan"=>"TJ","Tanzania"=>"TZ","Thailand"=>"TH","Togo"=>"TG","Tokelau"=>"TK","Tonga"=>"TO","Trinidad and Tobago"=>"TT","Tunisia"=>"TN","Turkey"=>"TR","Turkmenistan"=>"TM","Turks and Caicos Islands"=>"TC","Tuvalu"=>"TV","U.S. Virgin Islands"=>"VI","Uganda"=>"UG","Ukraine"=>"UA","United Arab Emirates"=>"AE","United Kingdom"=>"GB","United States"=>"US","Uruguay"=>"UY","Uzbekistan"=>"UZ","Vanuatu"=>"VU","Vatican"=>"VA","Venezuela"=>"VE","Vietnam"=>"VN","Wallis and Futuna"=>"WF","Western Sahara"=>"EH","Yemen"=>"YE","Zambia"=>"ZM","Zimbabwe"=>"ZW");return($ss[$name]);}
function count_rows($t,$w=""){global $main_connection, $_System_Options_Variebles;if(!empty($w)):$i=" WHERE ".$w;else:$i="";endif;$q=$main_connection->query("SELECT * FROM `".$t."`".$i);$num=$q->num_rows;return $num;}
function cities(){return array(1=>"تهران",2=>"کرج",3=>"مشهد",4=>"اصفهان",5=>"تبریز",6=>"شیراز",7=>"اهواز",8=>"قم",9=>"کرمانشاه",10=>"ارومیه",11=>"زاهدان",12=>"رشت",13=>"کرمان",14=>"همدان",15=>"اراک",16=>"یزد",17=>"اردبیل",18=>"بندرعباس",19=>"قزوین",20=>"زنجان",21=>"گرگان",22=>"ساری",23=>"دزفول",24=>"آبادان",25=>"بوشهر",26=>"بروجرد",27=>"خرم‌آباد",28=>"سنندج",29=>"اسلام‌شهر",30=>"کاشان",31=>"نجف‌آباد",32=>"ایلام",33=>"کیش",34=>"بیرجند",35=>"سمنان",36=>"شهرکرد",37=>"بندر ماهشهر",38=>"یاسوج",39=>"بجنورد",40=>"بهبهان",41=>"سبزوار",42=>"مسجد سلیمان",43=>"نیشابور",44=>"شوشتر",45=>"قشم",46=>"بانه",47=>"آمل",48=>"بابل",49=>"قائم‌شهر",50=>"ساوه",51=>"زابل",52=>"شاهرود",53=>"بندرانزلی",54=>"نوشهر");}
function check_session(){global $main_connection, $_System_Options_Variebles;if(empty($_COOKIE['always_id_for_casino'])):header("Location: http://" . $_SERVER['SERVER_NAME'] . "/users/login");exit();endif;$query_user_login_check=$main_connection->query("SELECT * FROM `users` WHERE `id`='".$_COOKIE['always_id_for_casino']."'");if($query_user_login_check->num_rows<=0):header("Location: http://" . $_SERVER['SERVER_NAME'] . "/users/login");exit();endif;$row_user_login_check=$query_user_login_check->fetch_array(MYSQLI_ASSOC);return true;}
function times_ago($time){$timee=time()-$time;if($timee<60):return("همین الان ...");elseif($timee>=60&&$timee<=3599):return(floor($timee/60)." دقیقه پیش");elseif($timee>=3600&&$timee<=86399):return(floor(($timee/60)/60)." ساعت پیش");elseif($timee>=86400&&$timee<=604799):return(floor((($timee/60)/60)/24)." روز پیش");elseif($timee>=604800&&$timee<=2419199):return(floor(((($timee/60)/60)/24)/7)." هفته پیش");elseif($timee>=2419200&&$timee<=29030399):return(floor((((($timee/60)/60)/24)/7)/4)." ماه پیش");elseif($timee>=29030400&&$timee<=10596096000):return(floor(((((($timee/60)/60)/24)/7)/4)/12)." سال پیش");else:return("نامشخص !");endif;}
function percentage($n,$p){return(($n/100)*$p);}
function urlSocket(){$url=str_replace(array("http://"),array(""),url());$url=mb_substr($url, 0, strlen($url)-1, 'utf-8');$url=str_replace($_SERVER['SERVER_NAME'], $_SERVER['SERVER_NAME'].":".socket_port, $url);return "ws://".$url.ds.socket_file;}
function randKing(){return rand(1,2);}
function sortCards($c){$o=array();$a=array("a1","a13","a12","a11","a10","a9","a8","a7","a6","a5","a4","a3","a2","b1","b13","b12","b11","b10","b9","b8","b7","b6","b5","b4","b3","b2","c1","c13","c12","c11","c10","c9","c8","c7","c6","c5","c4","c3","c2","d1","d13","d12","d11","d10","d9","d8","d7","d6","d5","d4","d3","d2");$e=explode(",",$c);foreach($a as $a2):if(in_array($a2,$e)):$o[]=$a2;endif;endforeach;return(implode(",",$o));}
function getPercentage($p,$n){global $main_connection, $_System_Options_Variebles;if($_System_Options_Variebles["percentageForSystemTwoVerdictActive"]=="true"):$nn=($p/100)*$n;return($n-$nn);else:return($n);endif;}
function getPercentage2($p,$n){global $main_connection, $_System_Options_Variebles;if($_System_Options_Variebles["percentageForSystemSevenClubActive"]=="true"):$nn=($p/100)*$n;return($n-$nn);else:return($n);endif;}
function _invoices_msg($t,$c){return("<center><br><br><br><font color=".$c."><b><h3>".$t."</h3></b></font></center>");}
function float_rand($Min, $Max, $round=0){ if ($Min>$Max){ $Min=$Max; $max=$Min; } else{ $Min=$Min; $max=$Max; }$randomfloat = $Min + mt_rand() / mt_getrandmax() * ($max - $Min);if($round>0) $randomfloat = round($randomfloat,$round); return $randomfloat;}
function getUser($user_id, $column){
	global $main_connection;
	$query_user = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $user_id . "'");
	if($query_user->num_rows <= 0){
		return false;
	}else{
		$row_user = $query_user->fetch_array(MYSQLI_ASSOC);
		$column = (isset($row_user[$column]) AND !empty($row_user[$column])) ? $row_user[$column] : false;
		return $column;
	}
}
?>