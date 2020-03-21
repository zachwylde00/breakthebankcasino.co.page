<?php
global $main_connection;
check_session();
$my_ID=$_COOKIE['always_id_for_casino'];
$query_get_user=$main_connection->query("SELECT * FROM `users` WHERE `id`='".$my_ID."'");
$row_get_user=$query_get_user->fetch_array(MYSQLI_ASSOC);
$all_users_array=array();
$query_get_all_users=$main_connection->query("SELECT * FROM `users`");
while($row_get_all_users=$query_get_all_users->fetch_array(MYSQLI_ASSOC)):
	$all_users_array['id']=$row_get_all_users;
endwhile;
if(isset($_POST["act"])&&safe_codes($_POST["act"])=="getRooms"):
	$o="";
	$i=0;
	$query_get_rooms=$main_connection->query("SELECT * FROM `seven_clubs` WHERE `end_date`='0' AND `player_one_id`!='".$my_ID."' AND (`player_two_id`='0' OR `player_two_id` = '') ORDER BY `create_date` DESC");
	while($row_get_rooms=$query_get_rooms->fetch_array(MYSQLI_ASSOC)):
		$i++;
		$player_name = $main_connection->query("SELECT * FROM `users` WHERE `id` = '" . $row_get_rooms["player_one_id"] . "'");
		$player_name = $player_name->fetch_array(MYSQLI_ASSOC);
		$player_name = (empty($player_name['username']) OR !is_string($player_name['username']) OR !isset($player_name['username'])) ? $player_name['email'] : $player_name['username'];
		$o.="<tr class=\"text-center\"><td class=\"text-center\">".$i."</td><td class=\"text-center\">".jdate::start("ساعت H:i:s",$row_get_rooms['create_date'])." (".times_ago($row_get_rooms['create_date']).")</td><td class=\"text-center\">".number_format($row_get_rooms['price_money'])."T</td><td class=\"text-center\">".($row_get_rooms['double_active']=="true"?"<font color=lightgreen><b><i class='fa fab far fas fa-check'></i> فعال</b></font>":"<font color=red><b><i class='fa fab far fas fa-times'></i> غیرفعال</b></font>")."</td><td class=\"text-center\">".$player_name."</td><td class=\"text-center\"><button class=\"btn btn-block button roomJoin2\" data-room-id=\"".$row_get_rooms['id']."\" data-creator-id=\"".$row_get_rooms['player_one_id']."\" onclick='socket.send(\"socket_roomJoin2|".$my_ID."|\"+jQuery(this).data(\"creator-id\")+\"|\"+jQuery(this).data(\"room-id\"));'>ورود</button></td></tr>";
	endwhile;
	echo($o);exit();
endif;
$main_connection->query("UPDATE `seven_clubs` SET `end_date`='".time()."' WHERE (`player_one_id`='".$my_ID."' OR `player_two_id`='".$my_ID."') AND `end_date`='0'");
$main_connection->query("UPDATE `seven_clubs` SET `end_date`='".time()."' WHERE `create_date` <= '".strtotime("-3 minute")."'");
?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta content="width=device-width, initial-scale=1" name="viewport" />
		<title>Seven Clubs - Casino</title>
		<meta content="TkStar Team" name="author" />
		<link rel="stylesheet" href="<?=url(templates.ds."css".ds."bootstrap-rtl.min.css");?>">
		<link rel="stylesheet" href="<?=url(templates.ds."css".ds."tkstar.css");?>">
		<link rel="stylesheet" href="<?=url(templates.ds."css".ds."script.css");?>">
		<script type="text/javascript" src="<?=url(templates.ds."js".ds."jquery.js");?>"></script>
		<script type="text/javascript" src="<?=url(templates.ds."js".ds."bootstrap.min.js");?>"></script>
		<script type="text/javascript" src="<?=url(templates.ds."js".ds."tkstar.js");?>"></script>
		<script type="text/javascript">
			jQuery(document).ready(function(){
				tableTdShowFunc2(jQuery("#tableInputShow2").val().trim().toString());
				self.getRoomsForShowFuncID = 0;
				self.groundCards="";
				self.chooseCount=0;
				self.chooseCards="";
				self.firstChoose="false";
				self.firstShowVerdict="false";
				self.lastChooseMode="";
				self.addToOther="true";
				self.firstSetTimeOut="false";
				self.firstTwoCardsRemoveActive="false";
				self.firstTwoCardsRemove="";
				self.showplayer_oneRemoveCards="false";
				self.firstTwoCardsRemoveShow="false";
				self.firstGameStartShow="false";
				self.firstGameStartShow2="false";
				self.firstShowKing="false";
				self.firstSortCards="false";
				self.sortCards="false";
				self.goToGroundActive="false";
				self.meCardsSelf="";
				self.otherPlayerGroundCard="";
				self.sortCard2="false";
				self.sortCard3="false";
				self.showGroundCards="false";
				self.afterShowGroundCards="false";
				self.priceForFirstSeen=1000;
				self.priceForFirstSeen2=1000;
				self.doubleAcitveForThisGame="false";
				self.firstShowCardsClub="false";
				self.sendCardClub="false";
				self.showSendCardClub="false";
				self.removeFromOthersClub="false";
				self.showRequestDouble="false";
				self.showRequestDouble2="false";
				self.getRoomsForShowFuncID = setInterval(function(){
					getRoomsForShowFunc();
				}, 2000);
				getRoomsForShowFunc();
				var socketUrl="<?=urlSocket();?>";
				socket=(window.MozWebSocket)?new MozWebSocket(socketUrl):new WebSocket(socketUrl);
                socket.binaryType = 'blob';
                socket.onclose = function(){
                    window.location = window.location;
                }
                socket.onerror = function(){
                    window.location = window.location;
                }
				socket.onopen=function(msg){jQuery(".form").slideDown(500);};
				socket.onmessage=function(msg){
					var $split=msg.data.split("|");
					if($split[0]=="roomCreate2"){
						if($split[1]=="OK"){
							jQuery("#game_id2").val($split[2]);
							jQuery("#roomCreate2_result").html("<div class='alert alert-success'>اتاق با موفقیت ساخته شد. هم اکنون به اتاق هدایت میشوید ...</div>");
							setTimeout(function(){
								jQuery('#game_player2').val("player_one");
								jQuery('#game_table2').show();
								jQuery('.col').css('background', 'url(<?php echo(url(templates . ds . 'images' . ds . 'pattern.jpg'));?>) repeat');
								jQuery('.form').hide(0);
								jQuery('#roomCreate2_result').html("");
								jQuery('#loading_div2').hide();
								jQuery('#loading_for_player2').show();
							},<?=interval_time;?>);
							setTimeout(function(){
								socket.send("socket_getLastChanges2|<?=$my_ID;?>|"+$split[2]+"|player_one");
							},500);
							clearInterval(self.getRoomsForShowFuncID);
						}else{
							jQuery("#roomCreate2_result").html($split[1]);
						}
					}else if($split[0]=="roomJoin2"){
						if($split[1]=="OK"){
							jQuery("#game_id2").val($split[2]);
							jQuery("#game_start2").val("1");
							setTimeout(function(){
								jQuery("#game_player2").val("player_two");
								jQuery("#game_table2").show(0);
								jQuery('.col').css('background', 'url(<?php echo(url(templates . ds . 'images' . ds . 'pattern.jpg'));?>) repeat');
								jQuery(".form").hide(0);
							},<?=interval_time;?>);
							setTimeout(function(){
								socket.send("socket_getLastChanges2|<?=$my_ID;?>|"+$split[2]+"|player_two");
							},500);
							clearInterval(self.getRoomsForShowFuncID);
						}else{
							alert($split[1]);
						}
					}else if($split[0]=="getLastChanges2"){
						setTimeout(function(){
							socket.send("socket_getLastChanges2|<?=$my_ID;?>|"+jQuery("#game_id2").val().trim().toString()+"|"+jQuery("#game_player2").val().trim().toString());
						},500);
						if($split[1]=="gameStart"){
							jQuery("#loading_for_player2").hide();
							if(self.firstGameStartShow2=="false"){
								jQuery("#game_start2").val("1");
								jQuery("#loading_div2").show();
								jQuery("#loading_div2").html("بازی در حال آغاز است");
								setTimeout(function(){
									if(self.firstShowKing=="false"){
										jQuery("#loading_div2").html("در حال تقسیم کارت");
										socket.send("socket_showCards|<?=$my_ID;?>|"+jQuery("#game_id2").val().trim().toString());
									}
								},1500);
								self.firstGameStartShow2="true";
							}
						}else if($split[1]=="showCards"){
							if(self.firstShowCardsClub=="false"){
								if($split[8]=="true"){
									jQuery("#sendDouble2").show();
								}else{
									jQuery("#sendDouble2").hide();
								}
								jQuery("#game_details2").show();
								jQuery("#price_money_show2").html($split[5]);
								$groundCards=$split[2];
								$meCardsClub=jQuery("#game_player2").val().trim().toString()=="player_one"?$split[3]:$split[4];
								$meCardsClubSplit=$meCardsClub.split(",");
								$groundCardsSplit=$groundCards.split(",");
								jQuery(".others-cards-div-12").parent().show();
								jQuery(".me-cards-div2").parent().show();
								$meCardsClub2="";
								$groundCards2="";
								for($i=0;$i<=$meCardsClubSplit.length;$i++){
									if(showPictureOfCard($meCardsClubSplit[$i-1])=="NONE")continue;
									$meCardsClub2+="<img onclick=\"goToGround2('"+$meCardsClubSplit[$i-1]+"',this)\" class=\"cards me-cards\" src=\""+showPictureOfCard($meCardsClubSplit[$i-1])+"\" />";
								}
								for($i=0;$i<=$groundCardsSplit.length;$i++){
									if(showPictureOfCard($groundCardsSplit[$i-1])=="NONE")continue;
									$groundCards2+="<img class=\"me-cards cards img-responsive card2-"+$groundCardsSplit[$i-1]+"\" src=\""+showPictureOfCard($groundCardsSplit[$i-1])+"\" />";
								}
								jQuery(".me-cards-div2").html($meCardsClub2);
								jQuery(".ground-cards3").html($groundCards2);
								jQuery(".others-cards-div-12").html("<img class=\"cards img-responsive\" src=\"templates/images/cards/back.png\"><img class=\"cards img-responsive\" src=\"templates/images/cards/back.png\"><img class=\"cards img-responsive\" src=\"templates/images/cards/back.png\"><img class=\"cards img-responsive\" src=\"templates/images/cards/back.png\"></div>");
								self.firstShowCardsClub="true";
								jQuery("#loading_div2").html(jQuery("#game_player2").val().trim().toString()=="player_one"?"نوبت شماست !":"نوبت حریف است !");
								self.sendCardClub=jQuery("#game_player2").val().trim().toString()=="player_one"?"true":"false";
								if($split[6]=="<?=$row_get_user['id'];?>"){
									jQuery("#game_details2 #other_players_name2 #other_players_name_show2").html($split[10]);
								}else{
									jQuery("#game_details2 #other_players_name2 #other_players_name_show2").html($split[9]);
								}
							}
						}else if($split[1]=="sendCard"){
							if(self.showSendCardClub=="false"){
								$meCardsClub2="";
								$groundCardsToShow2="";
								$player_sender=$split[2];
								$groundCardsToShow=$split[3];
								$groundCardsToShowSplit=$groundCardsToShow.split(",");
								for($i=0;$i<=$groundCardsToShowSplit.length;$i++){
									if(showPictureOfCard($groundCardsToShowSplit[$i-1])=="NONE")continue;
									$groundCardsToShow2+="<img class=\"cards img-responsive card2-"+$groundCardsToShowSplit[$i-1]+"\" src=\""+showPictureOfCard($groundCardsToShowSplit[$i-1])+"\" />";
								}
								jQuery(".ground-cards3").html($groundCardsToShow2);
								$meCardsClub=jQuery("#game_player2").val().trim().toString()=="player_one"?$split[4]:$split[5];
								$meCardsClubSplit=$meCardsClub.split(",");
								for($i=0;$i<=$meCardsClubSplit.length;$i++){
									if(showPictureOfCard($meCardsClubSplit[$i-1])=="NONE")continue;
									$meCardsClub2+="<img onclick=\"goToGround2('"+$meCardsClubSplit[$i-1]+"',this)\" class=\"cards me-cards\" src=\""+showPictureOfCard($meCardsClubSplit[$i-1])+"\" />";
								}
								if($player_sender!=jQuery("#game_player2").val().trim().toString()){
									if(self.removeFromOthersClub=="false"){
										jQuery(".others-cards-div-12").children(":first").remove();
										self.removeFromOthersClub="true";
									}
								}
								jQuery(".me-cards-div2").html($meCardsClub2);
								jQuery("#loading_div2").html($player_sender==jQuery("#game_player2").val().trim().toString()?"نوبت حریف است !":"نوبت شماست !");
								setTimeout(function(){
									$groundCardsToShow22="";
									$groundCardsToShow2=$split[6];
									$groundCardsToShowSplit2=$groundCardsToShow2.split(",");
									for($i=0;$i<=$groundCardsToShowSplit2.length;$i++){
										if(showPictureOfCard($groundCardsToShowSplit2[$i-1])=="NONE")continue;
										$groundCardsToShow22+="<img class=\"cards img-responsive card2-"+$groundCardsToShowSplit2[$i-1]+"\" src=\""+showPictureOfCard($groundCardsToShowSplit2[$i-1])+"\" />";
									}
									self.showSendCardClub="false";
									jQuery(".ground-cards3").html($groundCardsToShow22);
									self.sendCardClub=$player_sender==jQuery("#game_player2").val().trim().toString()?"false":"true";
								},1000);
								self.showSendCardClub="true";
								$meSoor=jQuery("#game_player2").val().trim().toString()=="player_one"?$split[7]:$split[8];
								$otherSoor=jQuery("#game_player2").val().trim().toString()=="player_one"?$split[8]:$split[7];
								jQuery("#meSoorCount").html($meSoor+" سور");
								jQuery("#otherSoorCount").html($otherSoor+" سور");
							}
						}else if($split[1]=="newCards"){
							$meCardsClub2="";
							$groundCardsToShow2="";
							$groundCardsToShow=$split[2];
							$groundCardsToShowSplit=$groundCardsToShow.split(",");
							for($i=0;$i<=$groundCardsToShowSplit.length;$i++){
								if(showPictureOfCard($groundCardsToShowSplit[$i-1])=="NONE")continue;
								$groundCardsToShow2+="<img class=\"cards img-responsive card2-"+$groundCardsToShowSplit[$i-1]+"\" src=\""+showPictureOfCard($groundCardsToShowSplit[$i-1])+"\" />";
							}
							jQuery(".ground-cards3").html($groundCardsToShow2);
							$meCardsClub=jQuery("#game_player2").val().trim().toString()=="player_one"?$split[3]:$split[4];
							$meCardsClubSplit=$meCardsClub.split(",");
							for($i=0;$i<=$meCardsClubSplit.length;$i++){
								if(showPictureOfCard($meCardsClubSplit[$i-1])=="NONE")continue;
								$meCardsClub2+="<img onclick=\"goToGround2('"+$meCardsClubSplit[$i-1]+"',this)\" class=\"cards me-cards\" src=\""+showPictureOfCard($meCardsClubSplit[$i-1])+"\" />";
							}
							jQuery(".others-cards-div-12").html("<img class=\"cards img-responsive\" src=\"templates/images/cards/back.png\"><img class=\"cards img-responsive\" src=\"templates/images/cards/back.png\"><img class=\"cards img-responsive\" src=\"templates/images/cards/back.png\"><img class=\"cards img-responsive\" src=\"templates/images/cards/back.png\">");
							jQuery(".me-cards-div2").html($meCardsClub2);
							jQuery("#loading_div2").html(jQuery("#game_player2").val().trim().toString()=="player_one"?"نوبت شماست !":"نوبت حریف است !");
							self.sendCardClub=jQuery("#game_player2").val().trim().toString()=="player_one"?"true":"false";
							self.showSendCardClub="false";
						}else if($split[1]=="requestForDouble"){
							if(self.showRequestDouble2=="false"){
								$requester=$split[2];
								if($requester==jQuery("#game_player2").val().trim().toString()){
									alert("درخواست دوبل ارسال شد لطفا منتظر باشید ...");
								}else{
									$confirm=window.confirm("حریف از شما درخواست دوبل کرده است آیا قبول میکنید ؟ توجه کنید قبول نکردن شرط دوبل به منزله ی قبول باخت شماس و مبلغ شرط را از دست می دهید");
									if($confirm){
										socket.send("socket_changeDoubleStatus2|accept|<?=$my_ID;?>|"+jQuery("#game_id2").val().trim().toString()+"|"+jQuery("#game_player2").val().trim().toString());
									}else{
										socket.send("socket_changeDoubleStatus2|decline|<?=$my_ID;?>|"+jQuery("#game_id2").val().trim().toString()+"|"+jQuery("#game_player2").val().trim().toString());
									}
								}
								self.showRequestDouble2="true";
							}
						}else if($split[1]=="doubleAccept"){
							$requester=$split[2].replace("Accept","");
							if($requester==jQuery("#game_player2").val().trim().toString()){
								alert("درخواست دوبل با موفقیت قبول شد. به بازی ادامه دهید ...");
							}else{
								alert("حریف درخواست دوبل را قبول کرد. به بازی ادامه دهید ...");
							}
							self.showRequestDouble2="false";
							jQuery("#game_details2 #game_play_score2 #price_money_show2").html($split[3]);
						}else if($split[1]=="doubleDecline"){
							$requester=$split[2].replace("Decline","");
							reset_everithings();
							jQuery("#loading_div2").show();
							if($requester==jQuery("#game_player2").val().trim().toString()){
								jQuery("#loading_div2").html("شما درخواست دوبل را رد کردید. این به منزله ی قبول باخت شماست. مبلغ "+$split[3]+" از حساب شما کسر و به حساب حریف واریز شد<br>تا 10 ثانیه دیگر به صفحه اصلی باز میگردید");
							}else{
								jQuery("#loading_div2").html("حریف درخواست دوبل را قبول نکرد. شما برنده بازی هستید و مبلغ "+$split[3]+" از حساب حریف کسر و به حساب شما واریز شد<br>تا 10 ثانیه دیگر به صفحه اصلی باز میگردید");
							}
							setTimeout(function(){
								jQuery("#game_table2").hide(0);
								jQuery('.col').css('background', 'url(<?php echo(url(templates . ds . 'images' . ds . 'body.png'));?>) no-repeat center center fixed');
								jQuery('.col').css('-o-background-size', 'cover');
								jQuery('.col').css('-webkit-background-size', 'cover');
								jQuery('.col').css('-moz-background-size', 'cover');
								jQuery('.col').css('background-size', 'cover');
								jQuery(".form").show(0);
							},10000);
							jQuery("#game_id2").val("");
							jQuery("#game_start2").val("");
						}else if($split[1]=="endGame2"){
							reset_everithings();
							$winner=$split[2];
							$textToShow=$winner==jQuery("#game_player2").val().trim().toString()?"شما برنده شدید !<br>":"شما باختید !<br>";
							$textToShow+=jQuery("#game_player2").val().trim().toString()=="player_one"?$split[3]:$split[4];
							$textToShow+="<br><br>";
							$textToShow+=$winner==jQuery("#game_player2").val().trim().toString()?"مبلغ "+$split[5]+" از حساب حریف کسر و به حساب شما واریز شد<br>تا 10 ثانیه دیگر به صفحه اصلی باز میگردید":"مبلغ "+$split[5]+" از حساب شما کسر و به حساب حریف واریز شد<br>تا 10 ثانیه دیگر به صفحه اصلی باز میگردید";
							jQuery("#loading_div2").show();
							jQuery("#loading_div2").html($textToShow);
							setTimeout(function(){
								jQuery("#game_table2").hide(0);
								jQuery('.col').css('background', 'url(<?php echo(url(templates . ds . 'images' . ds . 'body.png'));?>) no-repeat center center fixed');
								jQuery('.col').css('-o-background-size', 'cover');
								jQuery('.col').css('-webkit-background-size', 'cover');
								jQuery('.col').css('-moz-background-size', 'cover');
								jQuery('.col').css('background-size', 'cover');
								jQuery(".form").show(0);
							},10000);
							self.getRoomsForShowFuncID = setInterval(function(){
								getRoomsForShowFunc();
							}, 2000);
						}else if($split[1]=="endGame"){
							reset_everithings();
							jQuery("#game_id2").val("");
							jQuery("#game_start2").val("");
							jQuery("#loading_div2").show();
							jQuery("#loading_div2").html("حریف از بازی خارج شد. شما برنده بازی هستید و مبلغ "+$split[2]+" تومان به حسابتان واریز و از حساب حریف کسر شد. تا 10 ثانیه دیگر به صفحه اصلی هدایت میشوید");
							setTimeout(function(){
								jQuery("#game_table2").hide(0);
								jQuery('.col').css('background', 'url(<?php echo(url(templates . ds . 'images' . ds . 'body.png'));?>) no-repeat center center fixed');
								jQuery('.col').css('-o-background-size', 'cover');
								jQuery('.col').css('-webkit-background-size', 'cover');
								jQuery('.col').css('-moz-background-size', 'cover');
								jQuery('.col').css('background-size', 'cover');
								jQuery(".form").show(0);
							},10000);
							self.getRoomsForShowFuncID = setInterval(function(){
								getRoomsForShowFunc();
							}, 2000);
						}
					}
					return true;
				};
				jQuery(".roomCreate2").click(function(){
					$roomCreate_priceMoney=self.priceForFirstSeen2;
					$doubleActive2=jQuery("#doubleActive2").hasClass("btn-danger")?"false":"true";
					socket.send("socket_roomCreate2|<?=$my_ID;?>|"+$roomCreate_priceMoney+"|"+$doubleActive2);
				});
				jQuery("#game_table2_close").click(function(){
					if(jQuery("#game_id2").val().trim().toString()=="0"){
						jQuery("#game_table2").hide(0);
						jQuery('.col').css('background', 'url(<?php echo(url(templates . ds . 'images' . ds . 'body.png'));?>) no-repeat center center fixed');
						jQuery('.col').css('-o-background-size', 'cover');
						jQuery('.col').css('-webkit-background-size', 'cover');
						jQuery('.col').css('-moz-background-size', 'cover');
						jQuery('.col').css('background-size', 'cover');
						jQuery(".form").show(0);
						jQuery(".form").show();
						reset_everithings();
						self.getRoomsForShowFuncID = setInterval(function(){
							getRoomsForShowFunc();
						}, 2000);
						return false;
					}
					if(jQuery("#game_start2").val().trim().toString()==1||jQuery("#game_start2").val().trim().toString()=="1"){
						var $confirm=window.confirm("آیا از خروج از این اتاق مطمئن هستید ؟ خروج از این اتاق به منزله باخت شما است و مبلغ شرط بندی را از دست میدهید !");
						if($confirm && typeof($confirm) != undefined && $confirm != "undefined"){
							socket.send("socket_gameClose2|<?=$my_ID;?>|"+jQuery("#game_id2").val().trim().toString());
							reset_everithings();
							jQuery("#game_table2").hide(0);
							jQuery('.col').css('background', 'url(<?php echo(url(templates . ds . 'images' . ds . 'body.png'));?>) no-repeat center center fixed');
							jQuery('.col').css('-o-background-size', 'cover');
							jQuery('.col').css('-webkit-background-size', 'cover');
							jQuery('.col').css('-moz-background-size', 'cover');
							jQuery('.col').css('background-size', 'cover');
							jQuery(".form").show(0);
							self.getRoomsForShowFuncID = setInterval(function(){
								getRoomsForShowFunc();
							}, 2000);
						}
					}else{
						socket.send("socket_gameClose2|<?=$my_ID;?>|"+jQuery("#game_id2").val().trim().toString());
						reset_everithings();
						jQuery("#game_table2").hide(0);
						jQuery('.col').css('background', 'url(<?php echo(url(templates . ds . 'images' . ds . 'body.png'));?>) no-repeat center center fixed');
						jQuery('.col').css('-o-background-size', 'cover');
						jQuery('.col').css('-webkit-background-size', 'cover');
						jQuery('.col').css('-moz-background-size', 'cover');
						jQuery('.col').css('background-size', 'cover');
						jQuery(".form").show(0);
						self.getRoomsForShowFuncID = setInterval(function(){
							getRoomsForShowFunc();
						}, 2000);
					}
				});
				jQuery("#doubleActive2").click(function(){
					$thiss=this;
					if(jQuery($thiss).hasClass('btn-warning')){
						jQuery($thiss).addClass('btn-danger');
						jQuery($thiss).removeClass('btn-warning');
						jQuery($thiss).html("<i class='fa fab far fas fa-times'></i> ارسال درخواست دوبل غیرفعال باشد");
					}else{
						jQuery($thiss).addClass('btn-warning');
						jQuery($thiss).removeClass('btn-danger');
						jQuery($thiss).html("<i class='fa fab far fas fa-check'></i> با امکان ارسال درخواست دوبل");
					}
				});
			});
			function goToGround2($elem,$elem2){
				if(self.sendCardClub=="true"){
					jQuery($elem2).remove();
					socket.send("socket_sendCard2|<?=$my_ID;?>|"+jQuery("#game_id2").val().trim().toString()+"|"+jQuery("#game_player2").val().trim().toString()+"|"+$elem);
					self.sendCardClub="false";
					self.showSendCardClub="false";
					self.removeFromOthersClub="false";
					jQuery("#loading_div2").html("");
				}
			}
			function getRoomsForShowFunc(){
				jQuery("#loadingForLoadRooms").html("<i class='fa fab far fas fa-spinner fa-spin'></i> لیست میز ها <i class='fa fab far fas fa-spinner fa-spin'></i>");
				$.ajax({
					type:"POST",
					url:"",
					data:{act:"getRooms"},
					success:function($r){
						jQuery("#loadingForLoadRooms").html("لیست میز ها");
						jQuery("#roomsTableShow tbody").html($r.trim());
					},
					error:function(){},
					timeout:60000
				});
			}
			function reset_everithings(){
				self.groundCards="";
				self.chooseCount=0;
				self.chooseCards="";
				self.firstChoose="false";
				self.firstShowVerdict="false";
				self.lastChooseMode="";
				self.addToOther="true";
				self.firstSetTimeOut="false";
				self.firstTwoCardsRemoveActive="false";
				self.firstTwoCardsRemove="";
				self.showplayer_oneRemoveCards="false";
				self.firstTwoCardsRemoveShow="false";
				self.firstGameStartShow="false";
				self.firstGameStartShow2="false";
				self.firstShowKing="false";
				self.firstSortCards="false";
				self.sortCards="false";
				self.verdictCard="";
				self.meCardsSelf="";
				self.otherPlayerGroundCard="";
				self.sortCard2="false";
				self.sortCard3="false";
				self.showGroundCards="false";
				self.afterShowGroundCards="false";
				self.doubleAcitveForThisGame="false";
				self.firstShowCardsClub="false";
				self.sendCardClub="false";
				self.showSendCardClub="false";
				self.removeFromOthersClub="false";
				self.showRequestDouble="false";
				self.showRequestDouble2="false";
				jQuery(".others-cards-div-1").html("");
				jQuery(".me-cards-div").html("");
				jQuery(".ground-cards1").html("");
				jQuery(".ground-cards2").html("");
				jQuery(".choose-card .card img").prop("src","/templates/images/cards/back.png");
				jQuery(".choose-card .card img").prop("src","/templates/images/cards/back.png");
				jQuery("#removebleCardsOne").prop("src","/templates/images/cards/back.png");
				jQuery("#removebleCardsTwo").prop("src","/templates/images/cards/back.png");
				jQuery("#removebleCardsDiv").hide();
				jQuery("#game_details").hide();
				jQuery("#game_details2").hide();
				jQuery(".choose-card").hide();
				jQuery("#choose").show();
				jQuery("#decline").show();
				jQuery("#game_id").val("0");
				jQuery("#game_start").val("0");
				jQuery("#game_player").val("Unknown");
				jQuery("#loading_div").html("منتظر ورود بازیکن دیگر باشید ...");
				jQuery(".me-cards-div2").html("");
				jQuery(".others-cards-div-12").html("");
				jQuery(".ground-cards3").html("");
				clearAllSetTimeouts();
				clearAllSetInterval();
			}
			function tableTdShowFunc2($v){
				if($v<=999){
					jQuery('#tableInputShow2').val('1000');
					jQuery('#tableInputShow2').trigger('change');
				}else{
					jQuery('#tableTdShow12').html(number_format($v) + ' <span class="hidden-xs">تومان</span><span class="hidden-sm hidden-md hidden-lg">T</span>');
					jQuery('#tableTdShow22').html(number_format(parseInt($v * 2)) + ' <span class="hidden-xs">تومان</span><span class="hidden-sm hidden-md hidden-lg">T</span>');
					jQuery('#tableTdShow32').html(number_format(parseInt($v * 4)) + ' <span class="hidden-xs">تومان</span><span class="hidden-sm hidden-md hidden-lg">T</span>');
				}
			}
			function sendDoubleFunc2(){
				var $confirm=window.confirm("آیا از ارسال درخواست دوبل مطمئن هستید ؟ این عمل قابل بازگردانی نمی باشد !");
				if(!$confirm||typeof($confirm)==undefined){
					return false;
				}else{
					socket.send("socket_requestForDouble2|<?=$my_ID;?>|"+jQuery("#game_id2").val().trim().toString()+"|"+jQuery("#game_player2").val().trim().toString());
					jQuery("#sendDouble2").hide();
				}
			}
		</script>
	</head>
	<body class="col old-browser">
		<div id="game_table2">
			<div id="loading_for_player2" align="center">
				<div class="row" align="center" style="text-align: center !important;">
					<div class="col-lg-4 col-lg-offset-4 col-md-12 col-sm-12 col-xs-12" style="margin-top: 20px !important; color: white !important; direction: rtl !important; font-size: 30px !important">در انتظار ورود بازیکن دیگر ...</div>
					<div class="col-lg-4 col-lg-offset-4 col-md-12 col-sm-12 col-xs-12" style="margin-top: 40px !important;"><i class="fa fa-5x fa-pulse fa-spinner" style="color: #ffffff !important;"></i><br></div>
					<div class="col-lg-4 col-lg-offset-4 col-md-12 col-sm-12 col-xs-12" style="margin-top: 40px !important;"><button style="direction: rtl !important;" class="btn btn-danger" onclick="return jQuery('#game_table2_close').click();"><i class="fa fa-sign-out-alt"></i> بستن میز</button></div>
				</div>
			</div>
			<input type="hidden" value="0" id="game_id2" />
			<input type="hidden" value="0" id="game_start2" />
			<input type="hidden" value="Unknown" id="game_player2" />
			<div class="col-lg-3" style="margin-top: 10px !important;">
				<div class="row">
					<div class="col-lg-12">
						<button class="btn btn-block btn-danger" id="game_table2_close">خروج از بازی</button>
						<div id="game_details2" style="direction: rtl !important;">
							<div id="other_players_name2"><text id="other_players_name_show2">نامشخص</text> (حریف) <text id="otherSoorCount" style="margin-top:10px !important;">0 سور</text></div>
							<div id="game_play_score2">مبلغ شرط : <text id="price_money_show2">0</text> تومان</div>
							<div id="me_name2"><text id="me_name_show"><?=(empty($row_get_user['username']) OR !is_string($row_get_user['username']) OR !isset($row_get_user['username'])) ? $row_get_user['email'] : $row_get_user['username'];?></text> (شما) <text id="meSoorCount" style="margin-bottom:10px !important;">0 سور</text></div>
							<div id="sendDouble2"><a href="javascript:;" onclick="sendDoubleFunc2()">ارسال درخواست دوبل</a></div>
						</div>
					</div>
					<div class="col-lg-12"><div id="loading_div2"></div></div>
				</div>
			</div>
			<div class="col-lg-8" style="margin-top: 10px !important; min-height: 95% !important;" align="center">
				<div class="cards-div" style="width: 95% !important;position: absolute !important; top: 0px !important;"><div class="others-cards-div-12"></div></div>
				<div class="ground-cards3" style="width: 95% !important; position: absolute !important; top: 35% !important;"></div>
				<div class="cards-div" style="width: 95% !important;position: absolute !important; bottom: 0px !important;"><div class="me-cards-div2"></div></div>
			</div>
		</div>
		<div class="form display-hide">
			<ul class="tab-group">
				<li class="tab"><a href="<?="http://" . $_SERVER['SERVER_NAME'] . '/users/casino/';?>"><span class="hidden-xs hidden-sm">خروج</span> <i class="fa fab far fas fa-sign-out-alt"></i></a></li>
				<li class="tab active"><a href="javascript:;" onclick="jQuery('.tab-group > .active').removeClass('active');jQuery(this).parent().addClass('active');jQuery('.tab-content-divs').slideUp(0);jQuery('#roomsList').slideDown(0);getRoomsForShowFunc();"><span class="hidden-xs hidden-sm">لیست میز ها</span> <i class="fa fab fa-windows"></i></a></li>
				<li class="tab"><a href="javascript:;" onclick="jQuery('.tab-group > .active').removeClass('active');jQuery(this).parent().addClass('active');jQuery('.tab-content-divs').slideUp(0);jQuery('#roomCreate').slideDown(0);"><span class="hidden-xs hidden-sm">ساخت میز بازی</span> <i class="fa fab far fas fa-play"></i></a></li>
			</ul>
			<div class="tab-content">
				<div id="roomCreate" class="tab-content-divs display-hide">   
					<div id="chooseGameDiv">
						<h1>چهار برگ (پاسور)</h1>
						<div class="row">
							<div class="col-lg-7">
								<div class="rtled" id="roomCreate2_result"></div>
								<div class="rtled field-wrap">
									<div class="row">
										<div class="col-lg-5">
											<button onclick="self.priceForFirstSeen2='1000';jQuery('.buttonsPrice2').attr('disabled',false);jQuery(this).attr('disabled',true);" style="font-size:15px !important;width:100% !important;margin:5px 0px 5px 0px !important;" class="buttonsPrice2 btn btn-lg btn-success" disabled>اتاق 1,000 تومانی</button>
											<button onclick="self.priceForFirstSeen2='2000';jQuery('.buttonsPrice2').attr('disabled',false);jQuery(this).attr('disabled',true);" style="font-size:15px !important;width:100% !important;margin:5px 0px 5px 0px !important;" class="buttonsPrice2 btn btn-lg btn-success">اتاق 2,000 تومانی</button>
											<button onclick="self.priceForFirstSeen2='5000';jQuery('.buttonsPrice2').attr('disabled',false);jQuery(this).attr('disabled',true);" style="font-size:15px !important;width:100% !important;margin:5px 0px 5px 0px !important;" class="buttonsPrice2 btn btn-lg btn-success">اتاق 5,000 تومانی</button>
											<button onclick="self.priceForFirstSeen2='10000';jQuery('.buttonsPrice2').attr('disabled',false);jQuery(this).attr('disabled',true);" style="font-size:15px !important;width:100% !important;margin:5px 0px 5px 0px !important;" class="buttonsPrice2 btn btn-lg btn-success">اتاق 10,000 تومانی</button>
											<button onclick="self.priceForFirstSeen2='25000';jQuery('.buttonsPrice2').attr('disabled',false);jQuery(this).attr('disabled',true);" style="font-size:15px !important;width:100% !important;margin:5px 0px 5px 0px !important;" class="buttonsPrice2 btn btn-lg btn-primary">اتاق 25,000 تومانی</button>
											<button onclick="self.priceForFirstSeen2='50000';jQuery('.buttonsPrice2').attr('disabled',false);jQuery(this).attr('disabled',true);" style="font-size:15px !important;width:100% !important;margin:5px 0px 5px 0px !important;" class="buttonsPrice2 btn btn-lg btn-primary">اتاق 50,000 تومانی</button>
											<button onclick="self.priceForFirstSeen2='100000';jQuery('.buttonsPrice2').attr('disabled',false);jQuery(this).attr('disabled',true);" style="font-size:15px !important;width:100% !important;margin:5px 0px 5px 0px !important;" class="buttonsPrice2 btn btn-lg btn-danger">اتاق 100,000 تومانی</button>
										</div>
										<div style="margin-top:18% !important;" class="col-lg-7">
											<button id="doubleActive2" style="width:100% !important; white-space: normal !important;" class="buttonsPrice btn btn-lg btn-danger"><i class='fa fab far fas fa-times'></i> ارسال درخواست دوبل غیرفعال باشد</button>
											<button style="margin-top:10px !important;" class="btn roomCreate2 btn-success btn-lg btn-block"/>ساخت میز بازی</button>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-5">
								<div class="rtled alert alert-info">
									<div align="center">
										<h4><a onclick="jQuery('#simulator_form_verdict').toggle(500);" href="javascript:;">جدول مبالغ برد و باخت در بازی ها</a></h4>
										<div style="margin-top:20px !important;" id="simulator_form_verdict">
											<div class="form-group input-group">
												<span class="input-group-addon hidden-xs">بر اساس</span>
												<input class="form-control" value="1000" onchange="return tableTdShowFunc2(this.value);" id="tableInputShow2" min="1000" max="1000000" step="1000" type="number">
												<span class="input-group-addon hidden-xs">تومان</span>
											</div>
											<table class="table">
												<thead>
													<tr>
														<td style="border-color: black;">نوع بردن</td>
														<td style="border-color: black;">معمولی</td>
														<td style="border-color: black;">x2</td>
														<td style="border-color: black;">x4</td>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td style="border-color: black;">معمولی</td>
														<td style="border-color: black;" id="tableTdShow12"></td>
														<td style="border-color: black;" id="tableTdShow22"></td>
														<td style="border-color: black;" id="tableTdShow32"></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="roomsList" class="tab-content-divs tab-active" style="display: block;">   
					<h1 id="loadingForLoadRooms">لیست میز ها</h1>
					<div class="rtled" id="roomsList_result"></div>
					<div class="rtled">
						<table id="roomsTableShow" class="table-white table table-bordered">
							<thead>
								<tr>
									<th class="text-center">#</th>
									<th class="text-center">تاریخ ایجاد بازی</th>
									<th class="text-center">مبلغ میز</th>
									<th class="text-center">وضعیت دوبل در بازی</th>
									<th class="text-center">سازنده اتاق</th>
									<th class="text-center">ورود</th>
								</tr>
							</thead>
							<tbody></tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>