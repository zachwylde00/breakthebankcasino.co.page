<?php
$array_random_bank_cash = array(2500, 0, 5000, 10000, 0, 1000);
$random_bank_cash = $array_random_bank_cash[array_rand($array_random_bank_cash)];
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
<title>Royal Roulette - Casino</title>
<style>body {
background: url(http://gang4bet.com/casino/templates/images/logoes/royal_roulette.png) no-repeat center center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
filter:
progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://gang4bet.com/casino/templates/images/logoes/royal_roulette.png', sizingMethod='scale');
-ms-filter:
"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://gang4bet.com/casino/templates/images/logoes/royal_roulette.png', sizingMethod='scale')";
}</style>
<meta http-equiv="refresh" content="2">
</head>
</html>
<?php }else{?>
<!DOCTYPE html>
<html>
	<head>
		<title>Royal Roulette - Casino</title>
		<link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' . ds . 'roulette' . ds . 'reset.css')); ?>" type="text/css">
		<link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' . ds . 'roulette' . ds . 'main.css')); ?>" type="text/css">
		<link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' . ds . 'roulette' . ds . 'orientation_utils.css')); ?>" type="text/css">
		<link rel="stylesheet" href="<?php echo(url(templates . ds . 'css' . ds . 'tkstar.css')); ?>" type="text/css">
		
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,minimal-ui">
		<meta name="msapplication-tap-highlight" content="no">
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'roulette' . ds . 'jquery-3.js')); ?>"></script>
		<script type="text/javascript">
			jQuery(document).ready(function(){
				self.javascript_location = '<?php echo(url(templates . ds . 'js' . ds . 'roulette' . ds)); ?>';
				self.images_location = '<?php echo(url(templates . ds . 'images' . ds . 'roulette' . ds)); ?>';
				self.css_location = '<?php echo(url(templates . ds . 'css' . ds . 'roulette' . ds)); ?>';
				self.sounds_location = '<?php echo(url(templates . ds . 'sounds' . ds . 'roulette' . ds)); ?>';
			})
		</script>
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'roulette' . ds . 'createjs-2015.js')); ?>"></script>
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'roulette' . ds . 'howler.js')); ?>"></script>
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'swal.js')); ?>"></script>
		<script type="text/javascript" src="<?php echo(url(templates . ds . 'js' . ds . 'roulette' . ds . 'main.js')); ?>"></script>
		<script type="text/javascript">
			jQuery(document).ready(function(){
				self._user_credit = '<?php echo($row_get_user['cash']); ?>';
				var oMain = new CMain({
                    money: <?php echo($row_get_user['cash']); ?>,
                    min_bet: 50,
                    max_bet: 100000000000,
                    time_bet: 0,
                    time_winner: 1500,
                    win_occurrence: 10000000,
                    casino_cash: <?php echo($random_bank_cash); ?>,
                    fullscreen: true,
                    check_orientation: true,
                    show_credits: false,
                    num_hand_before_ads: 10
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
						socket.send('roulette_save_wallet|<?php echo($id); ?>|' + new_wallet + '|' + type);
					}
				});
				jQuery(oMain).on('show_interlevel_ad', function($event) {
					if(getParamValue('ctl-arcade') === 'true'){
						parent.__ctlArcadeShowInterlevelAD();
					}else{
						return false
					}
				});
				jQuery(oMain).on('share_event', function($event, $iScore) {
					return false;
				});
				if(isIOS()){
					setTimeout(function(){
						sizeHandler();
					}, 200);
				}else{
					sizeHandler();
				}
			});
		</script>
	</head>
	<body ondragstart="return false;" ondrop="return false;">
        <canvas id="canvas" class="ani_hack" width="1280" height="768"></canvas>
        <div data-orientation="landscape" class="orientation-msg-container"><p class="orientation-msg-text">لطفا دستگاه خود را بچرخانید و به حالت LandScape در آورید</p></div>
        <div id="block_game" style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; display:none"></div>
	</body>
</html>
<?php
}
?>