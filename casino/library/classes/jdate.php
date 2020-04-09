<?php
class jdate{
    static function start($type,$maket="now"){
    	$transnumber=0;
    	$TZhours=0;
    	$TZminute=0;
    	$need="";
    	$result1="";
    	$result="";
    	if($maket=="now"){
    		$year=date("Y");
    		$month=date("m");
    		$day=date("d");
    		list( $jyear, $jmonth, $jday ) = self::gregorian_to_jalali($year, $month, $day);
    		$maket=mktime(date("H")+$TZhours,date("i")+$TZminute,date("s"),date("m"),date("d"),date("Y"));
    	}else{
    		$maket+=$TZhours*3600+$TZminute*60;
    		$date=date("Y-m-d",$maket);
    		list( $year, $month, $day ) = preg_split ( '/-/', $date );
    		list( $jyear, $jmonth, $jday ) = self::gregorian_to_jalali($year, $month, $day);
        }
    	$need= $maket;
    	$year=date("Y",$need);
    	$month=date("m",$need);
    	$day=date("d",$need);
    	$i=0;
    	$subtype="";
    	$subtypetemp="";
    	list( $jyear, $jmonth, $jday ) = self::gregorian_to_jalali($year, $month, $day);
    	while($i<strlen($type)){
    		$subtype=substr($type,$i,1);
    		if($subtypetemp=="\\"){
    			$result.=$subtype;$i++;continue;
    		}
    		switch ($subtype){
                case "A":$result1=date("a",$need);if($result1=="pm") $result.= "&#1576;&#1593;&#1583;&#1575;&#1586;&#1592;&#1607;&#1585;";else $result.="&#1602;&#1576;&#1604;&#8207;&#1575;&#1586;&#1592;&#1607;&#1585;";break;
                case "a":$result1=date("a",$need);if($result1=="pm") $result.= "&#1576;&#46;&#1592;";else $result.="&#1602;&#46;&#1592;";break;
    			case "d":if($jday<10)$result1="0".$jday;else $result1=$jday;if($transnumber==1) $result.=self::Convertnumber2farsi($result1);else $result.=$result1;break;
                case "D":$result1=date("D",$need);if($result1=="Thu") $result1="&#1662;";else if($result1=="Sat") $result1="&#1588;";else if($result1=="Sun") $result1="&#1609;";else if($result1=="Mon") $result1="&#1583;";else if($result1=="Tue") $result1="&#1587;";else if($result1=="Wed") $result1="&#1670;";else if($result1=="Thu") $result1="&#1662;";else if($result1=="Fri") $result1="&#1580;";$result.=$result1;break;
    			case "F":$result.=self::monthname($jmonth);break;
                case "g":$result1=date("g",$need);if($transnumber==1) $result.=self::Convertnumber2farsi($result1);else $result.=$result1;break;
                case "G":$result1=date("G",$need);if($transnumber==1) $result.=self::Convertnumber2farsi($result1);else $result.=$result1;break;
                case "h":$result1=date("h",$need);if($transnumber==1) $result.=self::Convertnumber2farsi($result1);else $result.=$result1;break;
    			case "H":$result1=date("H",$need);if($transnumber==1) $result.=self::Convertnumber2farsi($result1);else $result.=$result1;break;
    			case "i":$result1=date("i",$need);if($transnumber==1) $result.=self::Convertnumber2farsi($result1);else $result.=$result1;break;
    			case "j":$result1=$jday;if($transnumber==1) $result.=self::Convertnumber2farsi($result1);else $result.=$result1;break;
    			case "l":$result1=date("l",$need);if($result1=="Saturday") $result1="شنبه";else if($result1=="Sunday") $result1="یکشنبه";else if($result1=="Monday") $result1="دوشنبه";else if($result1=="Tuesday") $result1="سه شنبه";else if($result1=="Wednesday") $result1="چهارشنبه";else if($result1=="Thursday") $result1="پنجشنبه";else if($result1=="Friday") $result1="جمعه";$result.=$result1;break;
    			case "m":if($jmonth<10) $result1="0".$jmonth;else	$result1=$jmonth;if($transnumber==1) $result.=self::Convertnumber2farsi($result1);else $result.=$result1;break;
    			case "M":$result.=self::short_monthname($jmonth);break;
    			case "n":$result1=$jmonth;if($transnumber==1) $result.=self::Convertnumber2farsi($result1);else $result.=$result1;break;
                case "s":$result1=date("s",$need);if($transnumber==1) $result.=self::Convertnumber2farsi($result1);else $result.=$result1;break;
    			case "S":$result.="&#1575;&#1605;";break;
    			case "t":$result.=self::lastday ($month,$day,$year);break;
    			case "w":$result1=date("w",$need);if($transnumber==1) $result.=self::Convertnumber2farsi($result1);else $result.=$result1;break;
    			case "y":$result1=substr($jyear,2,4);if($transnumber==1) $result.=self::Convertnumber2farsi($result1);else $result.=$result1;break;
    			case "Y":$result1=$jyear;if($transnumber==1) $result.=self::Convertnumber2farsi($result1);else $result.=$result1;break;		
    			case "U" :$result.=mktime();break;
    			case "Z" :$result.=self::days_of_year($jmonth,$jday,$jyear);break;
    			case "L" :list( $tmp_year, $tmp_month, $tmp_day ) = self::jalali_to_gregorian(1384, 12, 1);echo $tmp_day;break;
    			default:$result.=$subtype;
    		}
    		$subtypetemp=substr($type,$i,1);$i++;
    	}
    	return $result;
    }
    static function gregorian_to_jalali ($g_y, $g_m, $g_d) {
        $g_days_in_month = array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 
        $j_days_in_month = array(31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29);     
        $gy = $g_y-1600; $gm = $g_m-1;$gd = $g_d-1; 
       $g_day_no = 365*$gy+self::div($gy+3,4)-self::div($gy+99,100)+self::div($gy+399,400); 
       for ($i=0; $i < $gm; ++$i)$g_day_no += $g_days_in_month[$i]; 
       if ($gm>1 && (($gy%4==0 && $gy%100!=0) || ($gy%400==0)))$g_day_no++; 
       $g_day_no += $gd; 
       $j_day_no = $g_day_no-79; 
       $j_np = self::div($j_day_no, 12053);
       $j_day_no = $j_day_no % 12053; 
       $jy = 979+33*$j_np+4*self::div($j_day_no,1461);
       $j_day_no %= 1461;
       if ($j_day_no >= 366) { $jy += self::div($j_day_no-1, 365); $j_day_no = ($j_day_no-1)%365; }
       for ($i = 0; $i < 11 && $j_day_no >= $j_days_in_month[$i]; ++$i)$j_day_no -= $j_days_in_month[$i]; 
       $jm = $i+1; 
       $jd = $j_day_no+1; 
       return array($jy, $jm, $jd); 
    }
    static function Convertnumber2farsi($srting){
    	$num0="&#1776;";
    	$num1="&#1777;";
    	$num2="&#1778;";
    	$num3="&#1779;";
    	$num4="&#1780;";
    	$num5="&#1781;";
    	$num6="&#1782;";
    	$num7="&#1783;";
    	$num8="&#1784;";
    	$num9="&#1785;";
    	$stringtemp="";
    	$len=strlen($srting);
    	for($sub=0;$sub<$len;$sub++){
            if(substr($srting,$sub,1)=="0")$stringtemp.=$num0;
            elseif(substr($srting,$sub,1)=="1")$stringtemp.=$num1;
            elseif(substr($srting,$sub,1)=="2")$stringtemp.=$num2;
            elseif(substr($srting,$sub,1)=="3")$stringtemp.=$num3;
            elseif(substr($srting,$sub,1)=="4")$stringtemp.=$num4;
            elseif(substr($srting,$sub,1)=="5")$stringtemp.=$num5;
            elseif(substr($srting,$sub,1)=="6")$stringtemp.=$num6;
            elseif(substr($srting,$sub,1)=="7")$stringtemp.=$num7;
            elseif(substr($srting,$sub,1)=="8")$stringtemp.=$num8;
            elseif(substr($srting,$sub,1)=="9")$stringtemp.=$num9;
            else $stringtemp.=substr($srting,$sub,1);
    	}
        return $stringtemp;
    }
    static function lastday ($month,$day,$year){
    	$jday2="";$jdate2 ="";
    	$lastdayen=date("d",mktime(0,0,0,$month+1,0,$year));
    	list( $jyear, $jmonth, $jday ) = self::gregorian_to_jalali($year, $month, $day);
    	$lastdatep=$jday;$jday=$jday2;
    	while($jday2!="1"){
    		if($day<$lastdayen){
    			$day++;
    			list( $jyear, $jmonth, $jday2 ) = self::gregorian_to_jalali($year, $month, $day);
    			if($jdate2=="1") break;
                if($jdate2!="1") $lastdatep++;
    		}else{ 
    			$day=0;$month++;
    			if($month==13){$month="1";$year++;}
    		}
    	}
    	return $lastdatep-1;
    }
    static function days_of_year($jmonth,$jday,$jyear){
    	$year="";$month="";$result="";
    	if($jmonth=="01")return $jday;
    	for($i=1;$i<$jmonth || $i==12;$i++){
    		list( $year, $month, $day ) = self::jalali_to_gregorian($jyear, $i, "1");
    		$result+=self::lastday($month,$day,$year);
    	}
    	return $result+$jday;
    }
    static function monthname($month){
        switch($month){
            case('01'):return('فروردین');break;
            case('02'):return('اردیبهشت');break;
            case('03'):return('خرداد');break;
            case('04'):return('تیر');break;
            case('05'):return('مرداد');break;
            case('06'):return('شهریور');break;
            case('07'):return('مهر');break;
            case('08'):return('آبان');break;
            case('09'):return('آذر');break;
            case('10'):return('دی');break;
            case('11'):return('بهمن');break;
            case('12'):return('اسفند');break;
        }
    }
    static function mstart($month,$day,$year){
    	list( $jyear, $jmonth, $jday ) = self::gregorian_to_jalali($year, $month, $day);
    	list( $year, $month, $day ) = self::jalali_to_gregorian($jyear, $jmonth, "1");
    	$timestamp=mktime(0,0,0,$month,$day,$year);
    	return date("w",$timestamp);
    }
    static function short_monthname($month){
        switch($month){
            case('01'):return('فرو');break;
            case('02'):return('ارد');break;
            case('03'):return('خرد');break;
            case('04'):return('تیر');break;
            case('05'):return('مرد');break;
            case('06'):return('شهر');break;
            case('07'):return('مهر');break;
            case('08'):return('آبا');break;
            case('09'):return('آذر');break;
            case('10'):return('دی');break;
            case('11'):return('بهم');break;
            case('12'):return('اسف');break;
        }
    }
    static function jmaketime($jyear=1300,$jmonth=0,$jday=1,$hour=0,$minute=0,$second=0){
    	list( $year, $month, $day ) = self::jalali_to_gregorian($jyear, $jmonth, $jday);	
    	return mktime($hour,$minute,$second,$month,$day,$year);
    }
    static function is_kabise($year){
    	if($year%4==0 && $year%100!=0)return true;else return false;
    }
    static function jcheckdate($month,$day,$year){
    	$j_days_in_month = array(31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29);
    	if($month<=12 && $month>0){
    		if($j_days_in_month[$month-1]>=$day && 	$day>0)return 1;
    		if(self::is_kabise($year))echo "Asdsd";
    		if(self::is_kabise($year) && $j_days_in_month[$month-1]==31)return 1;
    	}
    	return 0;
    }
    static function jtime(){
    	return mktime();
    }
    static function jgetdate($timestamp=""){
    	if($timestamp=="")$timestamp=mktime();
    	return array(
    		0=>$timestamp,
    		"seconds"=>self::start("s",$timestamp),
    		"minutes"=>self::start("i",$timestamp),
    		"hours"=>self::start("G",$timestamp),
    		"mday"=>self::start("j",$timestamp),
    		"wday"=>self::start("w",$timestamp),
    		"mon"=>self::start("n",$timestamp),
    		"year"=>self::start("Y",$timestamp),
    		"yday"=>self::days_of_year(self::start("m",$timestamp),self::start("d",$timestamp),self::start("Y",$timestamp)),
    		"weekday"=>self::start("l",$timestamp),
            "month"=>self::start("F",$timestamp),
    	);
    }
    static function div($a,$b) {return (int) ($a / $b);}
    static function jalali_to_gregorian($j_y, $j_m, $j_d){
        $g_days_in_month = array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 
        $j_days_in_month = array(31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29);
        $jy = $j_y-979; 
        $jm = $j_m-1; 
        $jd = $j_d-1; 
        $j_day_no = 365*$jy + self::div($jy, 33)*8 + self::div($jy%33+3, 4); 
        for($i=0; $i < $jm; ++$i) 
          $j_day_no += $j_days_in_month[$i]; 
        $j_day_no += $jd; 
        $g_day_no = $j_day_no+79; 
        $gy = 1600 + 400*self::div($g_day_no, 146097);
        $g_day_no = $g_day_no % 146097; 
        $leap = true; 
        if ($g_day_no >= 36525){
          $g_day_no--;$gy += 100*self::div($g_day_no,  36524);$g_day_no = $g_day_no % 36524; 
          if ($g_day_no >= 365)$g_day_no++;else $leap = false;
        }
        $gy += 4*self::div($g_day_no, 1461);
        $g_day_no %= 1461; 
        if ($g_day_no >= 366) { 
          $leap = false; 
          $g_day_no--; 
          $gy += self::div($g_day_no, 365); 
          $g_day_no = $g_day_no % 365; 
        }
        for ($i=0;$g_day_no>=$g_days_in_month[$i]+($i == 1 && $leap);$i++)
        $g_day_no -= $g_days_in_month[$i] + ($i == 1 && $leap); $gm = $i+1; $gd = $g_day_no+1; 
        return array($gy, $gm, $gd); 
    }
}
?>