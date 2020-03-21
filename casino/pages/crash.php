<?php
global $main_connection, $_System_Options_Variebles;
check_session();
$id=$_COOKIE['always_id_for_casino'];
$query_get_user=$main_connection->query("SELECT * FROM `users` WHERE `id`='".$id."'");
$row_get_user=$query_get_user->fetch_array(MYSQLI_ASSOC);
$all_users_array=array();
$query_get_all_users=$main_connection->query("SELECT * FROM `users`");
while($row_get_all_users=$query_get_all_users->fetch_array(MYSQLI_ASSOC)):
    $all_users_array[$row_get_all_users['id']]=$row_get_all_users;
endwhile;
$my_username = $row_get_user['first_name'] . ' ' . $row_get_user['last_name'];
$best_wins = array();
$best_crashes_query = $main_connection->query("SELECT * FROM `crash_table` WHERE `play` = '0' AND `finish_time` != '0' AND `users` != '{}' AND `users` != '[]'");
while($best_crashes_row = $best_crashes_query->fetch_array(MYSQLI_ASSOC)){
	$users = $best_crashes_row['users'];
	$users = json_decode($users, true);
	foreach($users as $user){
		if($user['win'] != 1 AND $user['win'] != 1){
			continue;
		}else{
			$win_price = $user['price'] * $user['odd'];
			$best_wins[$win_price] = $user['username'];
		}
	}
}
krsort($best_wins);
$best_wins = array_slice($best_wins, 0, 3, true);
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $action = safe_codes($_POST['action']);
    if($action == 'new_chat'){
        $message_text = safe_codes($_POST['message_text']);
        if(empty($message_text)){
            echo('وارد کردن متن پیام الزامیست');exit();
        }else{
            $main_connection->query("INSERT INTO `crash_chats` (`id`, `time`, `user`, `username`, `message`) VALUES (NULL, '" . time() . "', '" . $id . "', '" . $my_username . "', '" . $message_text . "')");
            $_SESSION['message_' . $main_connection->insert_id] = 'true';
            echo('ok-' . jdate::start('H:i', time()));exit();
        }
    } else if($action == 'get_new_chats'){
        $chats_time = time() - 30;
        $messages = array();
        $query_messages = $main_connection->query("SELECT * FROM `crash_chats` WHERE `time` >= '" . $chats_time . "' ORDER BY `id` DESC");
        while($row_messages = $query_messages->fetch_array(MYSQLI_ASSOC)){
            if(isset($_SESSION['message_' . $row_messages['id']]) AND $_SESSION['message_' . $row_messages['id']] == 'true'){
                continue;
            }else{
                $_SESSION['message_' . $row_messages['id']] = 'true';
                $messages[$row_messages['id']] = '<div style="display: none;" id="message_' . $row_messages['id'] . '" class="user_chat"><span>' . $row_messages['username'] . ' (' . jdate::start('H:i', $row_messages['time']) . ')</span><br><span>' . $row_messages['message'] . '</span></div>';
            }
        }
        echo(json_encode(array('data' => $messages), JSON_UNESCAPED_UNICODE));exit();
    } else {
        echo('این درخواست معتبر نمی باشد');exit();
    }
}
?>
<!DOCTYPE html>
<html lang="fa">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Crash - Casino</title>
    
    <meta name="viewport" content="width=device-width, initial-scale=0, shrink-to-fit=no">
    <link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' .ds . 'crash' .ds . 'material-design-iconic-font.min.css')); ?>" />
    <link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' .ds . 'crash' .ds . 'animate.min.css')); ?>" />
    <link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' .ds . 'crash' .ds . 'app.min.css')); ?>" />
    <link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' .ds . 'crash' .ds . 'custom.css')); ?>" />
    <link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' .ds . 'crash' .ds . 'range.css')); ?>" />
    <link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' .ds . 'crash' .ds . 'chart.css')); ?>" />
    <link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' .ds . 'crash' .ds . 'dt.css')); ?>" />
    <script src="<?php echo(url(templates . ds . 'js' .ds . 'jquery.js')); ?>"></script>
    <script src="<?php echo(url(templates . ds . 'js' .ds . 'crash' . ds . 'tether.min.js')); ?>"></script>
    <script src="<?php echo(url(templates . ds . 'js' .ds . 'crash' . ds . 'bootstrap.min.js')); ?>"></script>
    <script src="<?php echo(url(templates . ds . 'js' .ds . 'crash' . ds . 'buttons.print.min.js')); ?>"></script>
    <script src="<?php echo(url(templates . ds . 'js' .ds . 'crash' . ds . 'buttons.html5.min.js')); ?>"></script>
    <script src="<?php echo(url(templates . ds . 'js' .ds . 'crash' . ds . 'jquery.datatables.min.js')); ?>"></script>
    <script src="<?php echo(url(templates . ds . 'js' .ds . 'crash' . ds . 'jquery.scrollbar.min.js')); ?>"></script>
    <script src="<?php echo(url(templates . ds . 'js' .ds . 'crash' . ds . 'waves.min.js')); ?>"></script>
    <script src="<?php echo(url(templates . ds . 'js' .ds . 'crash' . ds . 'app.min.js')); ?>"></script>
    <script src="<?php echo(url(templates . ds . 'js' .ds . 'crash' . ds . 'switchery.min.js')); ?>"></script>
    <script src="<?php echo(url(templates . ds . 'js' .ds . 'crash' . ds . 'dt.js')); ?>"></script>
    <script src="<?php echo(url(templates . ds . 'js' .ds . 'tkstar.js')); ?>"></script>
    <script src="<?php echo(url(templates . ds . 'js' .ds . 'range.js')); ?>"></script>
    <script src="<?php echo(url(templates . ds . 'js' .ds . 'crash' . ds . 'chart.js')); ?>"></script>
	<script type="text/javascript">
		jQuery(document).ready(function(){
			jQuery('#history_table').DataTable({
				responsive: true,
				bPaginate: false,
				bSort: false,
				bAutoWidth: true,
				bInfo: false,
				sSearchPlaceholder: 'جستوجو در تاریخچه'
			});
            jQuery(window).load(function(){
                setTimeout(function(){
                    jQuery(jQuery.fn.dataTable.tables(true)).css('width', '100%');
                    jQuery(jQuery.fn.dataTable.tables(true)).DataTable().columns.adjust().responsive.recalc();
                }, 100);
            })
			jQuery('window, document, html, body, table').on('resize change click keyup', function (e) {
                setTimeout(function(){
                    jQuery(jQuery.fn.dataTable.tables(true)).css('width', '100%');
                    jQuery(jQuery.fn.dataTable.tables(true)).DataTable().columns.adjust().responsive.recalc();
                }, 100);
			});
		});
	</script>
</head>
<body data-ma-theme="blue">
<main>
    <header class="header">
        <div class="col-md-6">
            <span><text class="hidden-xs-down hidden-sm-down">موجودی : </text><text id="price_user_show"><?php echo(number_format($row_get_user['cash'])); ?> تومان</text></span>
        </div>
        <div class="col-md-3">
            <span><text class="hidden-xs-down hidden-sm-down">حساب کاربری : </text><text id="username_user_show"><?php echo($row_get_user['first_name'] . ' ' . $row_get_user['last_name']); ?></text></span>
        </div>
        <div class="col-md-3">
            <span><button onclick="window.location = '<?php echo 'http://' . $_SERVER['SERVER_NAME'] . '/users/casino/'; ?>';" class="btn btn-md btn-block btn-defualt">بازگشت به سایت</button></span>
        </div>
    </header>
    <div style="margin-top:100px !important;" class="col-lg-12">
        <div class="row">
            <div class="col-lg-7">
                <div class="panel panel-warning">
                    <div style="direction:rtl !important;" class="panel-heading"><i class="zmdi zmdi-lg-hc zmdi-view-list"></i> پنل شرط</div>
                    <div class="panel-body">
                        <script type="text/javascript">
                            jQuery(document).ready(function(){
                                var ticker_wait_id = setInterval(function(){
                                    var $ticks = jQuery('#ticker_wait').text();
                                    if($ticks === '.......'){
                                        $ticks = '';
                                    }else if($ticks == ''){
                                        $ticks = '.';
                                    }else if($ticks == '.'){
                                        $ticks = '..';
                                    }else if($ticks == '..'){
                                        $ticks = '...';
                                    }else if($ticks == '...'){
                                        $ticks = '....';
                                    }else if($ticks == '....'){
                                        $ticks = '.....';
                                    }else if($ticks == '.....'){
                                        $ticks = '......';
                                    }else if($ticks == '......'){
                                        $ticks = '.......';
                                    }
                                    jQuery('#ticker_wait').text($ticks);
                                }, 100);
                                window.localStorage.clear();
                                self.submit_odd = 'false';
                                self.setTimeoutCrashNumber = 0;
                                self.start_game = 'false';
                                self.last_odd = '0.00';
                                self.game_id = 0;
                                self.game_price = 0;
                                self.auto_crash_range = 'true';
                                self.user_amount = '<?php echo($row_get_user['cash']); ?>';
                                self.timer_number = '7';
                                self.submit_odd_for_user = 'false';
                                self.submit_odd_by_user = 'false';
                                self.interval_timer_tick_id = '0';
								self.fake_users_last_odd = [];
                                var socketUrl = '<?php echo(urlSocket()); ?>';
                                socket = window.MozWebSocket ? new MozWebSocket(socketUrl) : new WebSocket(socketUrl);
                                socket.binaryType = 'blob';
                                socket.onclose = function(){
                                    window.location = 'http://gang4bet.com/casino/crash';
                                }
                                socket.onerror = function(){
                                    window.location = 'http://gang4bet.com/casino/crash';
                                }
                                socket.onopen = function(msg){
                                    socket.send('crash_new_round|<?php echo($id); ?>');
									setInterval(function(){
										socket.send('crash_new_round|<?php echo($id); ?>');
									}, 5000);
                                };
                                socket.onmessage = function(msg) {
                                    var $split = msg.data.split('|');
                                    if ($split[0] == 'round_start'){
                                        clearAllSetInterval();
                                        clearAllSetTimeouts();
                                        setInterval(new_messages, 2000);
                                        jQuery('#submit_odd').attr('disabled', false).html('ثبت شرط');
                                        jQuery('#waiting_lobbay').hide();
                                        jQuery('#main_lobbay').show();
                                        clearInterval(ticker_wait_id);
                                        jQuery('#close_odd_div').hide();
                                        jQuery('#submit_odd_div').show();
                                        self.setTimeoutCrashNumber = 100;
                                        self.game_id = $split[1];
                                        self.random_number = $split[2];
                                        self.timer_number = '7';
                                        jQuery('.seconds-to-wait').show();
                                        self.last_odd = '0.00';
										self.fake_users_last_odd = [];
                                        jQuery('#show_odd').html('0.00');
                                        self.interval_timer_tick_id = setInterval(timer_tick, 100);
										jQuery('#dataTable tbody').html('');
                                        jQuery('#submit_odd').removeClass('btn-primary').addClass('btn-warning').html('ثبت شرط').attr('disabled', false);
                                        jQuery('#show_odd').removeClass('red_important_odd');
										jQuery('#history_table tbody').html($split[3]);
										setInterval(function(){
											socket.send('check_crash_users|' + $split[1]);
										}, 1000);
										var $fake_users = JSON.parse($split[4]);
										var timeout_id = 1000;
                                        jQuery.each($fake_users, function($index, $value){
                                            setTimeout(function(){
											timeout_id = timeout_id + 500;
												
											}, timeout_id);var $odd = $value['odd'] == '0' ? ' - ' : $value['odd'];
                                            var $price = $value['win'] == '0' ? ' - ' : ($value['win'] == '1' ? number_format(parseInt($value['price'] * $value['odd'])) + ' تومان' : '0 تومان');
                                            var $color = $value['win'] == '0' ? 'orange' : ($value['win'] == '1' ? 'green' : 'red');
                                            var $sood = $value['win'] == '1' ? number_format(parseInt(parseInt($value['price'] * $value['odd']) - $value['price'])) + ' تومان' : ' - ';
                                            $users += '<tr class="text-center" style="color: ' + $color + ' !important;"><td>' + $value['username'] + '</td><td>' + $odd + '</td><td>' + number_format($value['price']) + ' تومان</td><td>' + $sood + '</td></tr>';
											jQuery('#dataTable tbody').html($users);
                                        });
                                    }else if($split[0] == 'list_users'){
                                        var $users = '';
                                        var $lists = JSON.parse($split[1]);
                                        jQuery.each($lists, function($index, $value){
											if($value['fake_last_odd'] != '' && $value['fake_last_odd'] != 'undefined' && $value['fake_last_odd'] != undefined && $value['fake_last_odd'] != null && $value['fake_last_odd'] != 'null'){
												var show_odd_number = jQuery('#show_odd').text();
												if($value['fake_last_odd'] <= show_odd_number){
													$value['win'] = 1;
												}
											}
                                            var $odd = $value['odd'] == '0' ? ' - ' : $value['odd'];
                                            var $price = $value['win'] == '0' ? ' - ' : ($value['win'] == '1' ? number_format(parseInt($value['price'] * $value['odd'])) + ' تومان' : '0 تومان');
                                            var $color = $value['win'] == '0' ? 'orange' : ($value['win'] == '1' ? 'green' : 'red');
                                            var $sood = $value['win'] == '1' ? number_format(parseInt(parseInt($value['price'] * $value['odd']) - $value['price'])) + ' تومان' : ' - ';
                                            $users += '<tr class="text-center" style="color: ' + $color + ' !important;"><td>' + $value['username'] + '</td><td>' + $odd + '</td><td>' + number_format($value['price']) + ' تومان</td><td>' + $sood + '</td></tr>';
                                        });
                                        jQuery('#dataTable tbody').html($users);
										jQuery('#history_table tbody').html($split[2]);
                                    }else if($split[0] == 'crash_users'){
                                        var $users = '';
                                        var $lists = JSON.parse($split[2]);
                                        jQuery.each($lists, function($index, $value){
											if($value['fake_last_odd'] != '' && $value['fake_last_odd'] != 'undefined' && $value['fake_last_odd'] != undefined && $value['fake_last_odd'] != null && $value['fake_last_odd'] != 'null'){
												var show_odd_number = jQuery('#show_odd').text();
												if($value['fake_last_odd'] <= show_odd_number){
													$value['win'] = 1;
													if(self.fake_users_last_odd[$index] == '' || self.fake_users_last_odd[$index] == 'undefined' || self.fake_users_last_odd[$index] == undefined || self.fake_users_last_odd[$index] == null || self.fake_users_last_odd[$index] == 'null'){
														self.fake_users_last_odd[$index] = show_odd_number;
													}
													$value['odd'] = self.fake_users_last_odd[$index]
												}
											}
                                            var $odd = $value['odd'] == '0' ? ' - ' : $value['odd'];
                                            var $price = $value['win'] == '0' ? ' - ' : ($value['win'] == '1' ? number_format(parseInt($value['price'] * $value['odd'])) + ' تومان' : '0 تومان');
                                            var $color = $value['win'] == '0' ? 'orange' : ($value['win'] == '1' ? 'green' : 'red');
                                            var $sood = $value['win'] == '1' ? number_format(parseInt(parseInt($value['price'] * $value['odd']) - $value['price'])) + ' تومان' : ' - ';
                                            $users += '<tr class="text-center" style="color: ' + $color + ' !important;"><td>' + $value['username'] + '</td><td>' + $odd + '</td><td>' + number_format($value['price']) + ' تومان</td><td>' + $sood + '</td></tr>';
                                        });
                                        jQuery('#dataTable tbody').html($users);
									}
                                }
                                jQuery('#timer_inner').html(self.timer_number + ' ثانیه');
                                new Chartist.Line('#chart_crash', {
                                    labels: ['', '', ''],
                                    series: [
                                        ['', 0, '']
                                    ]
                                }, {
                                    fullWidth: true,
                                    chartPadding: {
                                        right: 40
                                    },
                                    showLine: false,
                                    showArea: true
                                });
                                jQuery('#submit_odd').click(function(){
                                    if(self.submit_odd_by_user == 'true'){
                                        self.submit_odd_by_user = 'false';
                                        jQuery('#submit_odd').removeClass('btn-primary').addClass('btn-warning').html('ثبت شرط');
                                        self.swithcery.disable();
                                        jQuery('#price_crash').attr('disabled', false);
                                        jQuery('#auto_crash_range').prop('disabled', false).rangeslider('update');
                                        jQuery('#auto_crash_range_number').attr('disabled', false);
                                        jQuery('#submit_odd_div').show();
                                        jQuery('#close_odd_div').hide();
                                        socket.send('crash_add_user|' + self.game_id + '|' + self.game_price +  '|<?php echo($id); ?>');
                                    }else{
                                        if(self.submit_odd_for_user == 'false'){
                                            return alert('در حال حاضر امکان ثبت شرط وجود ندارد');
                                        }else{
                                            var $price_crash = jQuery('#price_crash').val().trim();
                                            $price_crash = parseInt($price_crash);
                                            if((self.user_amount - $price_crash) <= -1){
                                                return alert('موجودی شما برای ثبت این شرط کافی نیست . لطفا موجودی خود را افزایش دهید');
                                            }else{
                                                self.submit_odd_by_user = 'true';
                                                jQuery('#submit_odd').removeClass('btn-warning').addClass('btn-primary').html('لغو شرط');
                                                self.swithcery.disable();
                                                jQuery('#price_crash').attr('disabled', true);
                                                jQuery('#auto_crash_range').prop('disabled', true).rangeslider('update');
                                                jQuery('#auto_crash_range_number').attr('disabled', true);
                                                jQuery('#submit_odd_div').show();
                                                jQuery('#close_odd_div').hide();
                                                self.game_price = $price_crash;
                                                socket.send('crash_add_user|' + self.game_id + '|' + self.game_price +  '|<?php echo($id); ?>');
                                            }
                                        }
                                    }
                                });
                                jQuery('#close_odd').click(function(){
                                    if(self.start_game == 'true'){
                                        var $odd_price = self.last_odd * self.game_price;
                                        var $wallet_price = self.user_amount + $odd_price;
                                        self.submit_odd_by_user = 'false';
                                        jQuery('#submit_odd').removeClass('btn-primary').addClass('btn-warning').html('ثبت شرط').attr('disabled', true);
                                        self.swithcery.enable();
                                        jQuery('#price_crash').attr('disabled', false);
                                        jQuery('#auto_crash_range').prop('disabled', false).rangeslider('update');
                                        jQuery('#auto_crash_range_number').attr('disabled', false);
                                        jQuery('#submit_odd_div').show();
                                        jQuery('#close_odd_div').hide();
                                        jQuery('#price_user_show').text(number_format($wallet_price) + ' تومان');
                                        socket.send('crash_add_wallet|' + $odd_price + '|<?php echo($id); ?>' + '|' + self.last_odd + '|' + self.game_id);
                                    }else{
                                        return alert('در حال حاضر امکان ثبت شرط وجود ندارد');
                                    }
                                });
                                jQuery('[data-toggle=rangeSlider]').rangeslider({ polyfill: false });
                                jQuery('[data-toggle=switchery]').each(function(){
                                    self.swithcery = new Switchery(this, {size: 'small'});
                                });
                                jQuery('#auto_crash_range_number').on('keyup keydown change', function(){
                                    var $range_value = jQuery(this).val();
                                    jQuery('#auto_crash_range').val($range_value);
                                });
                                jQuery('#auto_crash_range').on('change', function(){
                                    var $range_value = jQuery(this).val();
                                    jQuery('#auto_crash_range_number').val($range_value).rangeslider('update');
                                });
                                jQuery('#auto_range_cash_checkbox').change(function(){
                                    if(jQuery(this).is(':checked')){
                                        jQuery('#auto_crash_range').prop('disabled', false).rangeslider('update');
                                        jQuery('#auto_crash_range_number').attr('disabled', false);
                                    }else{
                                        jQuery('#auto_crash_range').prop('disabled', true).rangeslider('update');
                                        jQuery('#auto_crash_range_number').attr('disabled', true);
                                    }
                                });
                            });
                            function chart_change(){
                                var show_odd_number = jQuery('#show_odd').text();
                                show_odd_number = parseFloat(show_odd_number);
								var plus = show_odd_number <= 26.99 ? 0.01 : 0.1;
                                show_odd_number = (show_odd_number + plus);
                                show_odd_number = show_odd_number.toFixed(2);
                                if(show_odd_number >= 0.01 && show_odd_number <= 0.99){
                                    delete show_odd_number;
                                    show_odd_number = 1.00;
                                }
                                show_odd_number = parseFloat(show_odd_number);
                                self.random_number = parseFloat(self.random_number);
                                var new_wallet_price = show_odd_number * self.game_price;
                                jQuery('#close_odd').html('برداشت ' + number_format(new_wallet_price) + ' تومان');
                                var auto_cash_range = parseFloat(jQuery('#auto_crash_range_number').val().trim());
                                if(show_odd_number > self.random_number){
                                    socket.send('crash_close_round|' + self.game_id + '|<?php echo($id); ?>');
                                    setTimeout(function(){
                                        socket.send('crash_new_round|<?php echo($id); ?>');
                                    }, 2000);
                                    jQuery('#show_odd').addClass('red_important_odd');
                                    self.start_game = 'false';
                                    self.last_odd = '0.00';
                                    self.game_id = 0;
                                    self.game_price = 0;
                                    self.setTimeoutCrashNumber = 0;
                                    self.submit_odd_by_user = 'false';
                                    jQuery('#submit_odd').removeClass('btn-primary').addClass('btn-warning').html('ثبت شرط').attr('disabled', true);
                                    self.swithcery.enable();
                                    jQuery('#price_crash').attr('disabled', false);
                                    jQuery('#auto_crash_range').prop('disabled', false).rangeslider('update');
                                    jQuery('#auto_crash_range_number').attr('disabled', false);
                                    jQuery('#submit_odd_div').show();
                                    jQuery('#close_odd_div').hide();
                                    return false;
                                } else if (self.start_game == 'true' && self.submit_odd_by_user == 'true' && auto_cash_range != '' && jQuery('#auto_range_cash_checkbox').is(':checked') && show_odd_number > auto_cash_range && (is_float(auto_cash_range) || is_numeric(auto_cash_range))){
                                    jQuery('#close_odd').click();
                                    setTimeout(chart_change, self.setTimeoutCrashNumber);
                                    return false;
                                } else {
                                    new Chartist.Line('#chart_crash', { labels: [ '', '', '' ], series: [ [ '', show_odd_number, '' ] ] }, { fullWidth: true, chartPadding: { right: 40 }, showLine: false, showArea: true } );
                                    jQuery('#show_odd').html(show_odd_number.toFixed(2));
                                    self.last_odd = show_odd_number;
									if(self.last_odd > 0 && self.last_odd < 1){
										self.setTimeoutCrashNumber = 82;
									}else if(self.last_odd >= 1 && self.last_odd < 2){
										self.setTimeoutCrashNumber = 78;
									}else if(self.last_odd >= 2 && self.last_odd < 3){
										self.setTimeoutCrashNumber = 70;
									}else if(self.last_odd >= 3 && self.last_odd < 4){
										self.setTimeoutCrashNumber = 62;
									}else if(self.last_odd >= 4 && self.last_odd < 5){
										self.setTimeoutCrashNumber = 56;
									}else if(self.last_odd >= 5 && self.last_odd < 6){
										self.setTimeoutCrashNumber = 48;
									}else if(self.last_odd >= 6 && self.last_odd < 7){
										self.setTimeoutCrashNumber = 40;
									}else if(self.last_odd >= 7 && self.last_odd < 8){
										self.setTimeoutCrashNumber = 30;
									}else if(self.last_odd >= 8 && self.last_odd < 9){
										self.setTimeoutCrashNumber = 20;
									}else if(self.last_odd >= 9 && self.last_odd < 10){
										self.setTimeoutCrashNumber = 19;
									}else if(self.last_odd >= 10 && self.last_odd < 11){
										self.setTimeoutCrashNumber = 18;
									}else if(self.last_odd >= 11 && self.last_odd < 12){
										self.setTimeoutCrashNumber = 17;
									}else if(self.last_odd >= 12 && self.last_odd < 13){
										self.setTimeoutCrashNumber = 16;
									}else if(self.last_odd >= 13 && self.last_odd < 14){
										self.setTimeoutCrashNumber = 15;
									}else if(self.last_odd >= 14 && self.last_odd < 15){
										self.setTimeoutCrashNumber = 14;
									}else if(self.last_odd >= 15 && self.last_odd < 16){
										self.setTimeoutCrashNumber = 13;
									}else if(self.last_odd >= 16 && self.last_odd < 17){
										self.setTimeoutCrashNumber = 12;
									}else if(self.last_odd >= 17 && self.last_odd < 18){
										self.setTimeoutCrashNumber = 11;
									}else if(self.last_odd >= 18 && self.last_odd < 19){
										self.setTimeoutCrashNumber = 10;
									}else if(self.last_odd >= 19 && self.last_odd < 20){
										self.setTimeoutCrashNumber = 9;
									}else if(self.last_odd >= 20 && self.last_odd < 21){
										self.setTimeoutCrashNumber = 8;
									}else if(self.last_odd >= 21 && self.last_odd < 22){
										self.setTimeoutCrashNumber = 7;
									}else if(self.last_odd >= 22 && self.last_odd < 23){
										self.setTimeoutCrashNumber = 6;
									}else if(self.last_odd >= 23 && self.last_odd < 24){
										self.setTimeoutCrashNumber = 5;
									}else if(self.last_odd >= 24 && self.last_odd < 25){
										self.setTimeoutCrashNumber = 4;
									}else if(self.last_odd >= 25 && self.last_odd < 26){
										self.setTimeoutCrashNumber = 3;
									}else if(self.last_odd >= 26 && self.last_odd < 27){
										self.setTimeoutCrashNumber = 2;
									}else{
										self.setTimeoutCrashNumber = 10;
									}
                                    setTimeout(chart_change, self.setTimeoutCrashNumber);
                                    return true;
                                }
                            }
                            function timer_tick(){
                                var timer_now_number = self.timer_number;
                                timer_now_number = timer_now_number - 0.1;
								timer_now_number = timer_now_number.toFixed(1);
                                if(timer_now_number <= 0){
                                    clearInterval(self.interval_timer_tick_id);
                                    self.timer_number = '5';
                                    jQuery('#timer_inner').html(self.timer_number + ' ثانیه');
                                    jQuery('#submit_odd').removeClass('btn-warning').addClass('btn-primary').html('لغو شرط');
                                    self.swithcery.disable();
                                    jQuery('#price_crash').attr('disabled', true);
                                    jQuery('#auto_crash_range').prop('disabled', true).rangeslider('update');
                                    jQuery('#auto_crash_range_number').attr('disabled', true);
                                    if(self.submit_odd_by_user == 'false'){
                                        jQuery('#submit_odd').attr('disabled', true).html('شرطی بسته نشده است !');
                                    }else{
                                        self.user_amount = self.user_amount - self.game_price;
                                        jQuery('#price_user_show').html(number_format(self.user_amount) + ' تومان');
                                        socket.send('crash_reduce_wallet|' + self.game_price + '|<?php echo($id); ?>' + '|' + self.last_odd + '|' + self.game_id);
                                        jQuery('#close_odd_div').show();
                                        jQuery('#submit_odd_div').hide();
                                    }
                                    jQuery('.seconds-to-wait').hide();
                                    self.submit_odd_for_user = 'false';
                                    self.start_game = 'true';
                                    chart_change();
                                }else{
                                    self.submit_odd_for_user = 'true';
                                    self.timer_number = timer_now_number;
                                    jQuery('#timer_inner').html(timer_now_number + ' ثانیه');
                                }
                            }
                        </script>
                        <div class="row rtled">
							<div class="waiting_lobbay" id="waiting_lobbay">
								<div data-child><span>لطفا منتظر بمانید تا انفجار دیگران تمام شود</span><small id="ticker_wait">.......</small></div>
							</div>
							<div class="col-lg-12" id="main_lobbay">
								<div class="row">
									<div class="col-lg-5">
										<div class="row">
											<div class="col-lg-12">
												<span class="">مبلغ (تومان)</span><br>
												<div class="price-cash-div">
													<span class="price-cash-text">تومان</span>
													<span><input class="price-cash ltred" value="100" id="price_crash"></span>
												</div>
											</div>
											<div class="col-lg-12"><hr></div>
											<div class="col-lg-12">
												<span class="">برداشت اتوماتیک در این ضریب <text class="pull-left"><input type="checkbox" id="auto_range_cash_checkbox" data-toggle="switchery"></text></span><br>
												<div class="price-cash-div">
													<span style="direction:ltr;" class="auto-range-text"><input disabled class="" id="auto_crash_range" type="range" min="1.01" max="20" step="0.01" value="1.01" data-toggle="rangeSlider"></span>
													<span class="auto-range-cash-div"><input disabled id="auto_crash_range_number" value="1.01" class="ltred auto-range-cash" id="price_crash"></span>
												</div>
											</div>
											<div class="col-lg-12"><hr></div>
										</div>
										<div class="row" id="close_odd_div" style="display: none;">
											<div class="col-lg-12">
												<button class="btn btn-primary btn-block" style="height:100px;" id="close_odd">برداشت وجه</button>
											</div>
										</div>
										<div class="row" id="submit_odd_div">
											<div class="col-lg-12">
												<button class="btn btn-warning btn-block" style="height:100px;" id="submit_odd">ثبت شرط</button>
											</div>
										</div>
									</div>
									<div class="col-lg-7">
										<div class="row">
											<div class="seconds-to-wait" style="display: none;">
												<div data-child><span id="timer_inner"></span><small>تا شروع بازی</small></div>
											</div>
											<div class="col-lg-6 rtled"><text id="show_odd">0.00</text></div>
											<div class="col-lg-6 rtled">
												<span>بهترین برنده ها :</span><br>
												<?php
												$i = 0;
												foreach($best_wins as $user_price => $user_username){
													$i++;
													if($i >= 4){
														break;
													}else{
														$margin = $i == 1 ? '7px' : '3px';
														$color = $i == 1 ? 'red' : ($i == 2 ? 'green' : ($i == 3 ? 'blue' : 'black'));
														echo('<div style="margin-top: ' . $margin . ' !important; color: ' . $color . ' !important;">' . number_format($user_price) . ' تومان (' . $user_username . ')</div>');
													}
												}
												?>
											</div>
											<div class="col-lg-12"><div id="chart_crash"></div></div>
										</div>
									</div>
								</div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="panel panel-warning">
                    <div style="direction:rtl !important;" class="panel-heading"><i class="zmdi zmdi-lg-hc zmdi-money"></i> آخرین شرط ها</div>
                    <div class="panel-body">
                        <table id="dataTable" class="table table-hover rtled">
                            <thead>
                            <tr>
                                <th class="text-center">کاربر</th>
                                <th class="text-center">ضریب</th>
                                <th class="text-center">مبلغ شرط (تومان)</th>
                                <th class="text-center">سود (تومان)</th>
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <script type="text/javascript">
                function new_messages(){
                    jQuery.ajax({
                        type: 'POST',
                        url: '',
                        data: {action: 'get_new_chats'},
                        success: function($result){
                            var $json = JSON.parse($result);
                            var $lists = $json.data;
                            jQuery.each($lists, function($index, $value){
                                if(typeof $value != undefined && typeof $value != 'undefined' && $value != ''){
                                    jQuery('.chats').prepend($value);
                                    jQuery('#message_' + $index).toggle(500);
                                }
                            })
                        }
                    })
                }
                jQuery(document).ready(function(){
                    setInterval(new_messages, 2000);
                    jQuery('#btn_send_message').click(function(){
                        var message_text = jQuery('#message_text').val().trim().toString();
                        if(message_text === ''){
                            return false;
                        }else{
                            jQuery('#message_text').val('');
                            var id = ((Math.random() * Math.random()) * Math.random());
                            id = id + '';
                            id = id.replace(/./g, '_');
                            jQuery('.chats').prepend('<div style="display:none;" id="message_' + id + '" class="user_chat"><span><?php echo($my_username); ?> <text id="message_' + id + '_date">(همین الان ...)</text></span><br><span>' + message_text + '</span></div>');
                            jQuery('#message_' + id).toggle(500);
                            jQuery.ajax({
                                type: 'POST',
                                url: '',
                                data: {
                                    action: 'new_chat',
                                    message_text: message_text
                                },
                                success: function($result){
                                    if($result.trim().indexOf('-') != -1){
                                        $explode = $result.trim().split('-');
                                        if($explode[0] === 'ok'){
                                            jQuery('#message_' + id + '_date').text('(' + $explode[1] + ')');
                                            new_messages()
                                        }else{
                                            alert($result)
                                        }
                                    }else{
                                        alert($result)
                                    }
                                }
                            })
                        }
                    });
                    jQuery('#message_text').on('keypress', function($event){
                        if($event.keyCode == '13' || $event.keyCode == 13 || $event.key.toLowerCase() == 'enter'){
                            jQuery('#btn_send_message').click();
                        }
                    })
                })
            </script>
            <div class="col-lg-12">
            <ul class="nav nav-tabs" style="direction: rtl !important;">
                <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#online-chat">گفتگوی انلاین</a></li>
                <li class="nav-item"><a onclick="setTimeout(function(){ jQuery('#history_table').click(); }, 100);" class="nav-link" data-toggle="tab" href="#history">تاریخچه بازی</a></li>
            </ul>
            <div class="tab-content">
                <div id="online-chat" class="tab-pane fade in show active">
					<div class="panel panel-warning">
						<div style="direction:rtl !important;" class="panel-heading"><i class="zmdi zmdi-comment"></i> چت باکس</div>
						<div class="panel-body">
							<div class="row rtled">
								<div class="col-lg-10">
									<label>متن پیام را وارد کنید</label>
									<input type="text" class="form-control" placeholder="متن پیام ..." id="message_text" />
								</div>
								<div class="col-lg-2">
									<button style="height:100%" class="btn btn-warning btn-block" id="btn_send_message">ارسال پیام</button>
								</div>
								<div class="col-lg-12">
									<div class="chats">
										<?php
										$chats_time = time() - 30;
										$query_messages = $main_connection->query("SELECT * FROM `crash_chats` WHERE `time` >= '" . $chats_time . "'");
										while($row_messages = $query_messages->fetch_array(MYSQLI_ASSOC)){
											if(isset($_SESSION['message_' . $row_messages['id']]) AND $_SESSION['message_' . $row_messages['id']] == 'true'){
												continue;
											}else{
												$_SESSION['message_' . $row_messages['id']] = 'true';
												?>
												<div class="user_chat">
													<span><?php echo($row_messages['username']); ?> (<?php echo(jdate::start('H:i', $row_messages['time'])); ?>)</span><br>
													<span><?php echo($row_messages['message']); ?></span>
												</div>
												<?php
											}
										}
										?>
									</div>
								</div>
							</div>
						</div>
					</div>
                </div>
                <div id="history" class="tab-pane fade in show">
					<div class="panel panel-warning">
						<div style="direction:rtl !important;" class="panel-heading"><i class="zmdi zmdi-view-list"></i> تاریخچه بازی</div>
						<div class="panel-body">
							<div class="row rtled">
								<div class="col-lg-12">
									<table class="table hover bordered" id="history_table">
										<thead>
											<tr>
												<th style="text-align: center !important;" class="hidden-xs hidden-sm">شناسه بازی</th>
												<th style="text-align: center !important;">ضریب انفجار</th>
												<th style="text-align: center !important;">مبلغ شرط شما</th>
												<th style="text-align: center !important;">ضریب انفجار شما</th>
												<th style="text-align: center !important;">سود</th>
												<th style="text-align: center !important;" class="hidden-xs hidden-sm">شناسه MD2</th>
												<th style="text-align: center !important;" class="hidden-xs hidden-sm">شناسه MD5</th>
											</tr>
										</thead>
										<tbody>
											<?php
											$query_history = $main_connection->query("SELECT * FROM `crash_table` ORDER BY `id` DESC LIMIT 50");
											while($row_history = $query_history->fetch_array(MYSQLI_ASSOC)){
												$users = $row_history['users'];
												$users = json_decode($users, true);
												$me_in_this_crash = 'false';
												foreach($users as $user_id => $user_odd){
													if($user_id == $id){
														$me_in_this_crash = 'true';
														break;
													}else{
														$me_in_this_crash = 'false';
														continue;
													}
												}
												if($me_in_this_crash == 'true'){
													if($users[$id]['win'] == '2'){
														$my_sood = '<span class="text-danger">0 تومان</span>';
													}else{
														if($users[$id]['win'] == '1'){
															$my_odd = $users[$id]['odd'];
															$my_price = $users[$id]['price'];
															$my_win_price = $my_odd * $my_price;
															$my_sood = '<span class="text-success">' . number_format($my_win_price - $my_price) . ' تومان</span>';
														}else{
															$my_sood = '-';
														}
													}
												}else{
													$my_sood = '-';
												}
											?>
													<tr>
														<td style="text-align: center !important;" class="hidden-xs hidden-sm"><?php echo($row_history['id']); ?></td>
														<td style="text-align: center !important;"><?php echo($row_history['finish_time'] == 0 ? '-' : $row_history['last_odd']);?></td>
														<td style="text-align: center !important;"><?php echo($me_in_this_crash == 'true' ? number_format($users[$id]['price']) . ' تومان' : '-'); ?></td>
														<td style="text-align: center !important;"><?php echo($me_in_this_crash == 'true' ? ($users[$id]['win'] == '1' ? '<span class="text-success">' . round($users[$id]['odd'], 2) . '</span' : ($users[$id]['win'] == '2' ? '<span class="text-danger">' . $row_history['last_odd'] . '</span>' : '-')) : '-'); ?></td>
														<td style="text-align: center !important;"><?php echo($my_sood); ?></td>
														<td style="text-align: center !important;" class="hidden-xs hidden-sm"><?php echo(hash('md2', $row_history['time'])); ?></td>
														<td style="text-align: center !important;" class="hidden-xs hidden-sm"><?php echo($row_history['finish_time'] == '0' ? '-' : hash('md5', $row_history['finish_time'])); ?></td>
													</tr>
											<?php
											}
											?>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
                </div>
            </div>
        </div>
    </div>
</div>
</main>
</body>
</html>