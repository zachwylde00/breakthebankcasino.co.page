<?php
global $main_connection, $_System_Options_Variebles;
check_session();
$id=$_COOKIE['always_id_for_casino'];
$query_get_user=$main_connection->query("SELECT * FROM `users` WHERE `id`='".$id."'");
$row_get_user=$query_get_user->fetch_array(MYSQLI_ASSOC);
?>
<?php
$result_socket = file_get_contents('http://www.gang4bet.com:8172', false, stream_context_create(array('http' => array('ignore_errors' => 1, 'method' => 'POST', 'timeout' => 10))));
if(!is_string($result_socket) OR $result_socket != ''){
?>
<!DOCTYPE html>
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Fortune Wheel - Casino</title>
<style>body {
background: url(http://gang4bet.com/casino/templates/images/logoes/fortune_wheel.png) no-repeat center center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
filter:
progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://gang4bet.com/casino/templates/images/logoes/fortune_wheel.png', sizingMethod='scale');
-ms-filter:
"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://gang4bet.com/casino/templates/images/logoes/fortune_wheel.png', sizingMethod='scale')";
}</style>
<meta http-equiv="refresh" content="2">
</head>
</html>
<?php }else{?>
<!DOCTYPE html>
<html>
	<head>
		<title>Fortune Wheel - Casino</title>
		<link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' . ds . 'fortune_wheel' . ds . 'reset.css')); ?>" type="text/css">
		<link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' . ds . 'fortune_wheel' . ds . 'main.css')); ?>" type="text/css">
		<link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' . ds . 'fortune_wheel' . ds . 'orientation_utils.css')); ?>" type="text/css">
		<link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' . ds . 'tkstar.css')); ?>" type="text/css">
		
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,minimal-ui">
		<meta name="msapplication-tap-highlight" content="no">
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'fortune_wheel' . ds . 'jquery-3.js')); ?>"></script>
		<script type="text/javascript">
			jQuery(document).ready(function(){
				self.javascript_location = '<?php echo(url(templates . ds . 'js' . ds . 'fortune_wheel' . ds)); ?>';
				self.images_location = '<?php echo(url(templates . ds . 'images' . ds . 'fortune_wheel' . ds)); ?>';
				self.css_location = '<?php echo(url(templates . ds . 'css' . ds . 'fortune_wheel' . ds)); ?>';
				self.sounds_location = '<?php echo(url(templates . ds . 'sounds' . ds . 'fortune_wheel' . ds)); ?>';
			})
		</script>
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'fortune_wheel' . ds . 'createjs-2015.js')); ?>"></script>
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'fortune_wheel' . ds . 'howler.js')); ?>"></script>
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'swal.js')); ?>"></script>
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'fortune_wheel' . ds . 'main.js')); ?>"></script>
		<script type="text/javascript">
			jQuery(document).ready(function(){
				self._user_credit = '<?php echo($row_get_user['cash']); ?>';
				var oMain = new CMain({
					start_credit: <?php echo($row_get_user['cash']); ?>,
					start_bet: 2500,	 	
					bet_offset: 2500,		
					max_bet: 100000000,	  	
					bank_cash : 1500,  	
					wheel_settings: [
						{prize: 2500, win_occurence: 7}, // x1
						{prize: 7500, win_occurence: 6}, // x3
						{prize: 15000, win_occurence: 6}, // x6
						{prize: 20000, win_occurence: 6}, // x8
						{prize: 0, win_occurence: 4}, // x0
						{prize: 5000, win_occurence: 6}, // x2
						{prize: 15000, win_occurence: 5}, // x6
						{prize: 30000, win_occurence: 4}, // x12
						{prize: 50000, win_occurence: 3}, // x20
						{prize: 0, win_occurence: 4}, // x0
						{prize: 10000, win_occurence: 5}, // x4
						{prize: 7500, win_occurence: 5}, // x3
						{prize: 5000, win_occurence: 6}, // x2
						{prize: 2500, win_occurence: 7}, // x1
						{prize: 0, win_occurence: 4}, // x0
						{prize: 20000, win_occurence: 4}, // x8
						{prize: 15000, win_occurence: 4}, // x6
						{prize: 10000, win_occurence: 5}, // x4
						{prize: 250000, win_occurence: 1}, // x100
						{prize: 0, win_occurence: 4} // x0
					],
					anim_idle_change_frequency: 10000,  	
					led_anim_idle1_timespeed: 2000,	 	
					led_anim_idle2_timespeed: 100,	  	
					led_anim_idle3_timespeed: 150,	  	
					led_anim_spin_timespeed: 50,			
					led_anim_win_duration: 5000,			
					led_anim_win1_timespeed: 300,	   	
					led_anim_win2_timespeed: 50,			
					led_anim_lose_duration: 5000,			
					show_credits: false,				   	
					fullscreen: true,					 	
					check_orientation: true,			  	
					ad_show_counter: 5	 	
			   });
				var socketUrl = '<?php echo(urlSocket()); ?>';
				socket = window.MozWebSocket ? new MozWebSocket(socketUrl) : new WebSocket(socketUrl);
				socket.binaryType = 'blob';
				jQuery(oMain).on('recharge', function($event) {
					window.location = '<?php echo('http://' . $_SERVER['SERVER_NAME'] . '/payment/credit'); ?>';
				});
				jQuery(oMain).on('start_session', function($event) {
					if(getParamValue('ctl-arcade') === 'true'){
						parent.__ctlArcadeStartSession();
					}
				});
				jQuery(oMain).on('end_session', function($event) {
					if(getParamValue('ctl-arcade') === 'true'){
						parent.__ctlArcadeEndSession();
					}
				});
				jQuery(oMain).on('save_score', function($event, new_wallet) {
					if(getParamValue('ctl-arcade') === 'true'){
						parent.__ctlArcadeSaveScore({ score: new_wallet });
					}else{
						socket.send('fortune_wheel_save_wallet|<?php echo($id); ?>|' + new_wallet);
					}
				});
				jQuery(oMain).on('show_interlevel_ad', function($event) {
					if(getParamValue('ctl-arcade') === 'true'){
						parent.__ctlArcadeShowInterlevelAD();
					}else{
						return false
					}
				});
				jQuery(oMain).on('share_event', function($event, iScore) {
					return false;
				});
				if (isIOS()) {
					setTimeout(function () {
						sizeHandler();
					}, 200);
				} else {
					sizeHandler();
				}
			});
		</script>
	</head>
	<body ondragstart="return false;" ondrop="return false;">
        <div class="check-fonts"><p class="check-font-1">TkStar Test</p></div> 
        <canvas id="canvas" class='ani_hack' width="1920" height="1080"></canvas>
        <div data-orientation="landscape" class="orientation-msg-container"><p class="orientation-msg-text">لطفا دستگاه خود را بچرخانید و به حالت LandScape در آورید</p></div>
        <div id="block_game" style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; display:none"></div>
	</body>
</html>
<?php }?>