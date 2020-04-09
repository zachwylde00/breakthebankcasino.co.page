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
		<title>BlackJack - Casino</title>
<style>body {
background: url(http://gang4bet.com/casino/templates/images/logoes/blackjack.png) no-repeat center center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
filter:
progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://gang4bet.com/casino/templates/images/logoes/blackjack.png', sizingMethod='scale');
-ms-filter:
"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://gang4bet.com/casino/templates/images/logoes/blackjack.png', sizingMethod='scale')";
}</style>
<meta http-equiv="refresh" content="2">
</head>
</html>
<?php }else{?>
<!DOCTYPE html>
<html>
	<head>
		<title>BlackJack - Casino</title>
		<link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' . ds . 'blackjack' . ds . 'reset.css')); ?>" type="text/css">
		<link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' . ds . 'blackjack' . ds . 'main.css')); ?>" type="text/css">
		<link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' . ds . 'blackjack' . ds . 'orientation_utils.css')); ?>" type="text/css">
		<link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' . ds . 'tkstar.css')); ?>" type="text/css">
		
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,minimal-ui">
		<meta name="msapplication-tap-highlight" content="no">
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'blackjack' . ds . 'jquery-3.js')); ?>"></script>
		<script type="text/javascript">
			jQuery(document).ready(function(){
				self.javascript_location = '<?php echo(url(templates . ds . 'js' . ds . 'blackjack' . ds)); ?>';
				self.images_location = '<?php echo(url(templates . ds . 'images' . ds . 'blackjack' . ds)); ?>';
				self.css_location = '<?php echo(url(templates . ds . 'css' . ds . 'blackjack' . ds)); ?>';
				self.sounds_location = '<?php echo(url(templates . ds . 'sounds' . ds . 'blackjack' . ds)); ?>';
			})
		</script>
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'blackjack' . ds . 'createjs-2015.js')); ?>"></script>
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'blackjack' . ds . 'howler.js')); ?>"></script>
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'swal.js')); ?>"></script>
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'blackjack' . ds . 'main.js')); ?>"></script>
		<script type="text/javascript">
			jQuery(document).ready(function(){
				self._user_credit = '<?php echo($row_get_user['cash']); ?>';
				var oMain = new CMain({
					win_occurrence: 10000000,
					min_bet: 50,
					max_bet: 100000000000,
					bet_time: 10000000000,
					money: <?php echo($row_get_user['cash']); ?>,
					blackjack_payout: 1.5,
					game_cash: 1500,
					show_credits: false,
					fullscreen: true,
					check_orientation: true,
					ad_show_counter: 3
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
					}else{
						return false;
					}
				});
				jQuery(oMain).on('end_session', function($event) {
					if(getParamValue('ctl-arcade') === 'true'){
						parent.__ctlArcadeEndSession();
					}else{
						return false;
					}
				});
				jQuery(oMain).on('save_score', function($event, new_wallet, type) {
					if(getParamValue('ctl-arcade') === 'true'){
						parent.__ctlArcadeSaveScore({ score: new_wallet });
					}else{
						socket.send('blackjack_save_wallet|<?php echo($id); ?>|' + new_wallet + '|' + type);
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
        <canvas id="canvas" class="ani_hack" width="1700" height="768"></canvas>
        <div data-orientation="landscape" class="orientation-msg-container"><p class="orientation-msg-text">لطفا دستگاه خود را بچرخانید و به حالت LandScape در آورید</p></div>
		<div id="block_game" style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; display:none"></div>
	</body>
</html>
<?php }?>