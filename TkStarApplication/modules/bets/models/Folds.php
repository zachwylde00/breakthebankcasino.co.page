<?php
class Folds{
    public static function calc1Fold($bet){
        $c = count($bet);
        $indexes = array();
        $sumOdd = array();
        for($i = 1; $i <= $c; $i++){
            $indexes[] = [$i ];
            $sumOdd[] = $bet[$i - 1]['odd'];
        }
        return [$indexes, $sumOdd ];
    }
    public static function calc2Fold($bet){
        $c = count($bet);
        $indexes = array();
        $sumOdd = array();
        for($i = 1; $i <= $c; $i++){
            for($j = $i + 1; $j <= $c; $j++){
                $indexes[] = [$i, $j ];
                $sumOdd[] = $bet[$i - 1]['odd'] * $bet[$j - 1]['odd'];
            }
        }
        return [$indexes, $sumOdd ];
    }
    public static function calc3Fold($bet){
        $c = count($bet);
        $indexes = array();
        $sumOdd = array();
        for($i = 1; $i <= $c; $i++){
            for($j = $i + 1; $j <= $c; $j++){
                for($k = $j + 1; $k <= $c; $k++){
                    $indexes[] = [$i, $j, $k ];
                    $sumOdd[] = $bet[$i - 1]['odd'] * $bet[$j - 1]['odd'] * $bet[$k - 1]['odd'];
                }
            }
        }
        return [$indexes, $sumOdd ];
    }
    public static function calc4Fold($bet){
        $c = count($bet);
        $indexes = array();
        $sumOdd = array();
        for($i = 1; $i <= $c; $i++){
            for($j = $i + 1; $j <= $c; $j++){
                for($k = $j + 1; $k <= $c; $k++){
                    for($l = $k + 1; $l <= $c; $l++){
                        $indexes[] = [$i, $j, $k, $l ];
                        $sumOdd[] = $bet[$i - 1]['odd'] * $bet[$j - 1]['odd'] * $bet[$k - 1]['odd'] * $bet[$l - 1]['odd'];
                    }
                }
            }
        }
        return [$indexes, $sumOdd ];
    }
    public static function calc5Fold($bet){
        $c = count($bet);
        $indexes = array();
        $sumOdd = array();
        for($i = 1; $i <= $c; $i++){
            for($j = $i + 1; $j <= $c; $j++){
                for($k = $j + 1; $k <= $c; $k++){
                    for($l = $k + 1; $l <= $c; $l++){
                        for($m = $l + 1; $m <= $c; $m++){
                            $indexes[] = [$i, $j, $k, $l, $m ];
                            $sumOdd[] = $bet[$i - 1]['odd'] * $bet[$j - 1]['odd'] * $bet[$k - 1]['odd'] * $bet[$l - 1]['odd'] * $bet[$m - 1]['odd'];
                        }
                    }
                }
            }
        }
        return [$indexes, $sumOdd ];
    }
    public static function calc6Fold($bet){
        $c = count($bet);
        $indexes = array();
        $sumOdd = array();
        for($i = 1; $i <= $c; $i++){
            for($j = $i + 1; $j <= $c; $j++){
                for($k = $j + 1; $k <= $c; $k++){
                    for($l = $k + 1; $l <= $c; $l++){
                        for($m = $l + 1; $m <= $c; $m++){
                            for($n = $m + 1; $n <= $c; $n++){
                                $indexes[] = [$i, $j, $k, $l, $m, $n ];
                                $sumOdd[] = $bet[$i - 1]['odd'] * $bet[$j - 1]['odd'] * $bet[$k - 1]['odd'] * $bet[$l - 1]['odd'] * $bet[$m - 1]['odd'] * $bet[$n - 1]['odd'];
                            }
                        }
                    }
                }
            }
        }
        return [$indexes, $sumOdd ];
    }
    public static function calc7Fold($bet){
        $c = count($bet);
        $indexes = array();
        $sumOdd = array();
        for($i = 1; $i <= $c; $i++){
            for($j = $i + 1; $j <= $c; $j++){
                for($k = $j + 1; $k <= $c; $k++){
                    for($l = $k + 1; $l <= $c; $l++){
                        for($m = $l + 1; $m <= $c; $m++){
                            for($n = $m + 1; $n <= $c; $n++){
                                for($o = $n + 1; $o <= $c; $o++){
                                    $indexes[] = [$i, $j, $k, $l, $m, $n, $o ];
                                    $sumOdd[] = $bet[$i - 1]['odd'] * $bet[$j - 1]['odd'] * $bet[$k - 1]['odd'] * $bet[$l - 1]['odd'] * $bet[$m - 1]['odd'] * $bet[$n - 1]['odd'] * $bet[$o - 1]['odd'];
                                }
                            }
                        }
                    }
                }
            }
        }
        return [$indexes, $sumOdd ];
    }
    public static function calc8Fold($bet){
        $c = count($bet);
        $indexes = array();
        $sumOdd = array();
        for($i = 1; $i <= $c; $i++){
            for($j = $i + 1; $j <= $c; $j++){
                for($k = $j + 1; $k <= $c; $k++){
                    for($l = $k + 1; $l <= $c; $l++){
                        for($m = $l + 1; $m <= $c; $m++){
                            for($n = $m + 1; $n <= $c; $n++){
                                for($o = $n + 1; $o <= $c; $o++){
                                    for($p = $o + 1; $p <= $c; $p++){
                                        $indexes[] = [$i, $j, $k, $l, $m, $n, $o, $p ];
                                        $sumOdd[] = $bet[$i - 1]['odd'] * $bet[$j - 1]['odd'] * $bet[$k - 1]['odd'] * $bet[$l - 1]['odd'] * $bet[$m - 1]['odd'] * $bet[$n - 1]['odd'] * $bet[$o - 1]['odd'] * $bet[$p - 1]['odd'];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return [$indexes, $sumOdd ];
    }
}
?>