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
	$query_get_rooms=$main_connection->query("SELECT * FROM `two_verdicts_table` WHERE `end_date`='0' AND `player_one_id`!='".$my_ID."' AND `player_two_id`='0' ORDER BY `create_date` DESC");
	while($row_get_rooms=$query_get_rooms->fetch_array(MYSQLI_ASSOC)):
		$i++;
		$o.="<tr class=\"text-center\"><td class=\"text-center\">".$i."</td><td class=\"text-center\">حکم دو نفره</td><td class=\"text-center\">".(jdate::start("ساعت H:i:s",$row_get_rooms['create_date'])." (".times_ago($row_get_rooms['create_date'])).")</td><td class=\"text-center\">".number_format($row_get_rooms['price_money'])."T</td><td class=\"text-center\">".($row_get_rooms['double_active']=="true"?"<font color=lightgreen><b><i class='fa fab far fas fa-check'></i> فعال</b></font>":"<font color=red><b><i class='fa fab far fas fa-times'></i> غیرفعال</b></font>")."</td><td class=\"text-center\">".$row_get_rooms["player_one_id"]."</td><td class=\"text-center\"><button class=\"btn btn-block button roomJoin\" data-room-id=\"".$row_get_rooms['id']."\" data-creator-id=\"".$row_get_rooms['player_one_id']."\" onclick='socket.send(\"socket_roomJoin|".$my_ID."|\"+jQuery(this).data(\"creator-id\")+\"|\"+jQuery(this).data(\"room-id\"));'>ورود</button></td></tr>";
	endwhile;
	echo($o);exit();
endif;
$main_connection->query("UPDATE `two_verdicts_table` SET `end_date`='".time()."' WHERE (`player_one_id`='".$my_ID."' OR `player_two_id`='".$my_ID."') AND `end_date`='0'");
$main_connection->query("UPDATE `two_verdicts_table` SET `end_date`='".time()."' WHERE `create_date` <= '".strtotime("-3 minute")."'");
?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta content="width=device-width, initial-scale=1" name="viewport" />
		<title>Two Verdicts - Casino</title>
		<meta content="TkStar Team" name="author" />
		<link rel="stylesheet" href="<?=url(templates.ds."css".ds."bootstrap-rtl.min.css");?>">
		<link rel="stylesheet" href="<?=url(templates.ds."css".ds."tkstar.css");?>">
		<link rel="stylesheet" href="<?=url(templates.ds."css".ds."script.css");?>">
		<script type="text/javascript" src="<?=url(templates.ds."js".ds."jquery.js");?>"></script>
		<script type="text/javascript" src="<?=url(templates.ds."js".ds."bootstrap.min.js");?>"></script>
		<script type="text/javascript" src="<?=url(templates.ds."js".ds."tkstar.js");?>"></script>
		<script type="text/javascript">
			jQuery(document).ready(function(){
				tableTdShowFunc(jQuery("#tableInputShow").val().trim().toString());
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
					if($split[0]=="roomCreate"){
						if($split[1]=="OK"){
							jQuery("#game_id").val($split[2]);
							jQuery("#roomCreate_result").html("<div class='alert alert-success'>اتاق با موفقیت ساخته شد. هم اکنون به اتاق هدایت میشوید ...</div>");
							setTimeout(function(){
								jQuery('#game_table').show();
								jQuery('.col').css('background', 'url(<?php echo(url(templates . ds . 'images' . ds . 'pattern.jpg'));?>) repeat');
								jQuery('.form').hide(0);
								jQuery("#roomCreate_result").html("");
								jQuery("#loading_div").hide();
								jQuery("#loading_for_player").show();
							},<?=interval_time;?>);
							setTimeout(function(){
								socket.send("socket_getLastChanges|<?=$my_ID;?>|"+$split[2]);
							},500);
							clearInterval(self.getRoomsForShowFuncID);
						}else{
							jQuery("#roomCreate_result").html($split[1]);
						}
					}else if($split[0]=="roomJoin"){
						if($split[1]=="OK"){
							jQuery("#game_id").val($split[2]);
							jQuery("#game_start").val("1");
							setTimeout(function(){
								jQuery('#game_table').show();
								jQuery('.col').css('background', 'url(<?php echo(url(templates . ds . 'images' . ds . 'pattern.jpg'));?>) repeat');
								jQuery('.form').hide(0);
							},<?=interval_time;?>);
							setTimeout(function(){
								socket.send("socket_getLastChanges|<?=$my_ID;?>|"+$split[2]);
							},500);
							clearInterval(self.getRoomsForShowFuncID);
						}else{
							alert($split[1]);
						}
					}else if($split[0]=="getLastChanges"){
						setTimeout(function(){
							socket.send("socket_getLastChanges|<?=$my_ID;?>|"+jQuery("#game_id").val().trim().toString());
						},500);
						if($split[1]=="gameStart"){
							jQuery("#loading_for_player").hide();
							if(self.firstGameStartShow=="false"){
								jQuery("#game_start").val("1");
								jQuery("#loading_div").show();
								jQuery("#loading_div").html("بازی در حال آغاز است");
								setTimeout(function(){
									if(self.firstShowKing=="false"){
										jQuery("#loading_div").html("در حال تعیین حاکم");
										socket.send("socket_showKing|<?=$my_ID;?>|"+jQuery("#game_id").val().trim().toString());
									}
								},1500);
								self.firstGameStartShow="true";
							}
						}else if($split[1].indexOf("King:") != -1){
							if(self.firstShowKing=="false"){
								var $king_id=$split[1].replace("King","").replace(":","");
								if($king_id=="<?=$my_ID;?>"){
									jQuery("#loading_div").html("شما حاکم هستید !<br>لطفا حکم را تعیین کنید :<div class='margin-top-15'><a onclick=\"vardict('a');\"><img class='verdict-icons' src='templates/images/cards/icons/a.png' /></a><a onclick=\"vardict('b');\"><img class='verdict-icons' src='templates/images/cards/icons/b.png' /></a><a onclick=\"vardict('c');\"><img class='verdict-icons' src='templates/images/cards/icons/c.png' /></a><a onclick=\"vardict('d');\"><img class='verdict-icons' src='templates/images/cards/icons/d.png' /></a></div></center>");
									jQuery("#game_player").val("player_one");
								}else{
									jQuery("#loading_div").html("حاکم بازیکن مقابل است !<br>منتظر تعیین حکم باشید");
									jQuery("#game_player").val("player_two");
								}
								if($split[6]=="<?=$row_get_user['id'];?>"){
									jQuery("#game_details #other_players_name_show").html($split[9]);
								}else{
									jQuery("#game_details #other_players_name_show").html($split[8]);
								}
								jQuery(".me-cards-div, .others-cards-div-1").parent().removeClass("display-hide");
								jQuery(".others-cards-div-1").html('<img class="cards other-players-cards" src="templates/images/cards/back.png" /><img class="cards other-players-cards" src="templates/images/cards/back.png" /><img class="cards other-players-cards" src="templates/images/cards/back.png" /><img class="cards other-players-cards" src="templates/images/cards/back.png" /><img class="cards other-players-cards" src="templates/images/cards/back.png" />');
								$meCardsSplit=(jQuery("#game_player").val().trim().toString()=="player_one")?$split[2]:$split[3];
								var $meCards="";
								var $meCardsSplit=$meCardsSplit.split(",");
								for($i=1;$i<=$meCardsSplit.length;$i++){
									$meCards+='<img onclick="firstTwoCardsRemovea(this);" class="cards img-responsive card-'+$i+'" id="card-'+$meCardsSplit[$i-1]+'" src="'+showPictureOfCard($meCardsSplit[$i-1])+'" />';
								}
								self.groundCards=$split[4];
								jQuery(".me-cards-div").html($meCards);
								$removebleCardsSplit=$split[5].split(",");
								jQuery("#removebleCardsDiv #removebleCardsOne").prop("src",showPictureOfCard($removebleCardsSplit[0]));
								jQuery("#removebleCardsDiv #removebleCardsTwo").prop("src",showPictureOfCard($removebleCardsSplit[1]));
								jQuery("#removebleCardsDiv").show();
								self.firstShowKing="true";
							}
						}else if($split[1].indexOf("Verdict:") != -1){
							var $verdict=$split[1].replace("Verdict","").replace(":","");
							if(self.firstShowVerdict=="false"){
								jQuery("#loading_div").html("حکم مشخص شد : "+getVerdictName($verdict,"40px"));
								jQuery("#game_details").show();
								self.verdictCard=$verdict;
								self.firstShowVerdict="true";
							}
							if(self.firstTwoCardsRemoveShow=="false"){
								jQuery("#game_details").show();
								jQuery("#game_details #show_verdict_div #show_verdict").html(getVerdictName($verdict,"80px"));
								jQuery("#game_details #other_players_score_show").html("0");
								jQuery("#game_details #me_score_show").html("0");
								jQuery("#game_details #game_play_score #price_money_show").html(number_format($split[4]));
								self.doubleAcitveForThisGame=$split[5];
								setTimeout(function(){
									if(jQuery("#game_player").val().trim().toString()=="player_one"){
										jQuery("#loading_div").html("لطفا دو کارت حذف کنید");
										self.firstTwoCardsRemoveActive="true";
										self.firstTwoCardsRemove="";
									}else{
										jQuery("#loading_div").html("لطفا منتظر بمانید حریف دو کارت حذف کند");
										self.firstTwoCardsRemoveActive="false";
										self.firstTwoCardsRemove="";
									}
								},3000);
								self.firstTwoCardsRemoveShow="true";
							}
						}else if($split[1]=="player_oneRemoveCards"){
							if(self.showplayer_oneRemoveCards=="false"){
								if(jQuery("#game_player").val().trim().toString()=="player_one"){
									jQuery("#loading_div").html("لطفا منتظر بمانید حریف دو کارت حذف کند");
									self.firstTwoCardsRemoveActive="false";
									self.firstTwoCardsRemove="";
								}else{
									jQuery(".others-cards-div-1").html('<img class="cards other-players-cards" src="templates/images/cards/back.png" /><img class="cards other-players-cards" src="templates/images/cards/back.png" /><img class="cards other-players-cards" src="templates/images/cards/back.png" />');
									jQuery("#loading_div").html("حاکم دو کارت حذف کرد<br>اکنون شما دو کارت حذف کنید");
									self.firstTwoCardsRemoveActive="true";
									self.firstTwoCardsRemove="";
								}
								self.showplayer_oneRemoveCards="true";
							}
						}else if($split[1]=="player_twoRemoveCards"){
							if(self.firstSetTimeOut=="false"){
								if(jQuery("#game_player").val().trim().toString()=="player_one"){
									if(self.firstChoose=="false"){
										$first=self.groundCards.split(",")[0];
										jQuery("#choseCardShowImage").prop("src",showPictureOfCard($first));
										self.chooseCount=1;
									}
									jQuery(".others-cards-div-1").html('<img class="cards other-players-cards" src="templates/images/cards/back.png" /><img class="cards other-players-cards" src="templates/images/cards/back.png" /><img class="cards other-players-cards" src="templates/images/cards/back.png" />');
									jQuery("#loading_div").html("لطفا کارت انتخاب کنید");
									jQuery("#loading_div").show(0);
									jQuery(".choose-card").show(0);
								}else{
									jQuery("#loading_div").html("لطفا منتظر باشید حریف کارت انتخاب کند");
									jQuery("#loading_div").show(0);
								}
								self.firstSetTimeOut="true";
							}
						}else if($split[1]=="player_oneChooseCard"){
							self.groundCards=$split[2];
							$spliter2=self.groundCards.split(",");
							$first2=$spliter2[0];
							$second2=$spliter2[1];
							self.meCardsSelf=(jQuery("#game_player").val().trim().toString()=="player_one")?$split[3]:$split[4];
							if(jQuery("#game_player").val().trim().toString()=="player_one"){
								var $meCards="";
								var $meCardsSplit=$split[3].split(",");
								for($i=1;$i<=$meCardsSplit.length;$i++){
									$meCards += '<img class="cards me-cards card-'+$i+'" id="card-'+$meCardsSplit[$i-1]+'" src="'+showPictureOfCard($meCardsSplit[$i-1])+'" />';
								}
								jQuery(".me-cards-div").html($meCards);
							}else{
								var $meCards="";
								var $meCardsSplit=$split[4].split(",");
								for($i=1;$i<=$meCardsSplit.length;$i++){
									$meCards += '<img class="cards me-cards card-'+$i+'" id="card-'+$meCardsSplit[$i-1]+'" src="'+showPictureOfCard($meCardsSplit[$i-1])+'" />';
								}
								jQuery(".me-cards-div").html($meCards);
							}
							if(self.groundCards==""||$first2==""||$second2==""){
								jQuery("#loading_div").html("");
								jQuery("#loading_div").hide(0);
								jQuery(".choose-card").hide(0);
								if(jQuery(".others-cards-div-1").children().length==12||jQuery(".others-cards-div-1").children().length=="12"){
									if(self.addToOther=="true"){
										jQuery(".others-cards-div-1").append('<img class="cards other-players-cards" src="templates/images/cards/back.png" />');
										self.addToOther="false";
									}
								}
								socket.send("socket_gameStartCards|<?=$my_ID;?>|"+jQuery("#game_id").val().trim().toString());
								return false;
							}else{
								if(jQuery("#game_player").val().trim().toString()=="player_two"){
									jQuery("#loading_div").html("لطفا منتظر باشید حریف کارت انتخاب کند");
									jQuery("#loading_div").show(0);
									jQuery(".choose-card").hide(0);
								}else{
									if(self.addToOther=="true"){
										jQuery(".others-cards-div-1").append('<img class="cards other-players-cards" src="templates/images/cards/back.png" />');
										self.addToOther="false";
									}
									if(self.firstChoose=="false"){
										jQuery("#choseCardShowImage").prop("src",showPictureOfCard($first2));
										self.chooseCount=1;
									}
									jQuery("#loading_div").html("لطفا کارت انتخاب کنید");
									jQuery("#loading_div").show(0);
									jQuery(".choose-card").show(0);
								}
							}
						}else if($split[1]=="player_twoChooseCard"){
							self.groundCards=$split[2];
							$spliter=self.groundCards.split(",");
							$first=$spliter[0];
							$second=$spliter[1];
							self.meCardsSelf=(jQuery("#game_player").val().trim().toString()=="player_one")?$split[3]:$split[4];
							if(jQuery("#game_player").val().trim().toString()=="player_one"){
								var $meCards="";
								var $meCardsSplit=$split[3].split(",");
								for($i=1;$i<=$meCardsSplit.length;$i++){
									$meCards += '<img class="cards me-cards card-'+$i+'" id="card-'+$meCardsSplit[$i-1]+'" src="'+showPictureOfCard($meCardsSplit[$i-1])+'" />';
								}
								jQuery(".me-cards-div").html($meCards);
							}else{
								var $meCards="";
								var $meCardsSplit=$split[4].split(",");
								for($i=1;$i<=$meCardsSplit.length;$i++){
									$meCards += '<img class="cards me-cards card-'+$i+'" id="card-'+$meCardsSplit[$i-1]+'" src="'+showPictureOfCard($meCardsSplit[$i-1])+'" />';
								}
								jQuery(".me-cards-div").html($meCards);
							}
							if(self.groundCards==""||$first==""||$second==""){
								jQuery("#loading_div").html("");
								jQuery("#loading_div").hide(0);
								jQuery(".choose-card").hide(0);
								if(jQuery(".others-cards-div-1").children().length==12||jQuery(".others-cards-div-1").children().length=="12"){
									if(self.addToOther=="true"){
										jQuery(".others-cards-div-1").append('<img class="cards other-players-cards" src="templates/images/cards/back.png" />');
										self.addToOther="false";
									}
								}
								socket.send("socket_gameStartCards|<?=$my_ID;?>|"+jQuery("#game_id").val().trim().toString());
								return false;
							}else{
								if(jQuery("#game_player").val().trim().toString()=="player_one"){
									jQuery("#loading_div").html("لطفا منتظر باشید حریف کارت انتخاب کند");
									jQuery("#loading_div").show(0);
									jQuery(".choose-card").hide(0);
								}else{
									if(self.addToOther=="true"){
										jQuery(".others-cards-div-1").append('<img class="cards other-players-cards" src="templates/images/cards/back.png" />');
										self.addToOther="false";
									}
									if(self.firstChoose=="false"){
										jQuery("#choseCardShowImage").prop("src",showPictureOfCard($first));
										self.chooseCount=1;
									}
									jQuery("#loading_div").html("لطفا کارت انتخاب کنید");
									jQuery("#loading_div").show(0);
									jQuery(".choose-card").show(0);
								}
							}
						}else if($split[1]=="requestForDouble"){
							if(self.showRequestDouble=="false"){
								$requester=$split[2];
								if($requester==jQuery("#game_player").val().trim().toString()){
									alert("درخواست دوبل ارسال شد لطفا منتظر باشید ...");
								}else{
									$confirm=window.confirm("حریف از شما درخواست دوبل کرده است آیا قبول میکنید ؟ توجه کنید قبول نکردن شرط دوبل به منزله ی قبول باخت شماس و مبلغ شرط را از دست می دهید");
									if($confirm){
										socket.send("socket_changeDoubleStatus|accept|<?=$my_ID;?>|"+jQuery("#game_id").val().trim().toString()+"|"+jQuery("#game_player").val().trim().toString());
									}else{
										socket.send("socket_changeDoubleStatus|decline|<?=$my_ID;?>|"+jQuery("#game_id").val().trim().toString()+"|"+jQuery("#game_player").val().trim().toString());
									}
								}
								self.showRequestDouble="true";
							}
						}else if($split[1]=="doubleAccept"){
							$requester=$split[2].replace("Accept","");
							if($requester==jQuery("#game_player").val().trim().toString()){
								alert("درخواست دوبل با موفقیت قبول شد. به بازی ادامه دهید ...");
							}else{
								alert("حریف درخواست دوبل را قبول کرد. به بازی ادامه دهید ...");
							}
							self.showRequestDouble="false";
							jQuery("#game_details #game_play_score #price_money_show").html($split[3]);
						}else if($split[1]=="doubleDecline"){
							$requester=$split[2].replace("Decline","");
							reset_everithings();
							jQuery("#loading_div").show();
							if($requester==jQuery("#game_player").val().trim().toString()){
								jQuery("#loading_div").html("شما درخواست دوبل را رد کردید. این به منزله ی قبول باخت شماست. مبلغ "+$split[3]+" از حساب شما کسر و به حساب حریف واریز شد<br>تا 10 ثانیه دیگر به صفحه اصلی باز میگردید");
							}else{
								jQuery("#loading_div").html("حریف درخواست دوبل را قبول نکرد. شما برنده بازی هستید و مبلغ "+$split[3]+" از حساب حریف کسر و به حساب شما واریز شد<br>تا 10 ثانیه دیگر به صفحه اصلی باز میگردید");
							}
							setTimeout(function(){
								jQuery("#game_table").hide(0);
								jQuery('.col').css('background', 'url(<?php echo(url(templates . ds . 'images' . ds . 'body.png'));?>) no-repeat center center fixed');
								jQuery('.col').css('-o-background-size', 'cover');
								jQuery('.col').css('-webkit-background-size', 'cover');
								jQuery('.col').css('-moz-background-size', 'cover');
								jQuery('.col').css('background-size', 'cover');
								jQuery(".form").show(0);
							},10000);
							jQuery("#game_id").val("");
							jQuery("#game_start").val("");
						}else if($split[1]=="GameStartCards"){
							if(self.firstSortCards=="false"){
								if(self.doubleAcitveForThisGame=="true"){
									jQuery("#sendDouble").show();
								}else{
									jQuery("#sendDouble").hide();
								}
								self.firstTwoCardsRemoveActive="false";
								self.firstTwoCardsRemove="";
								self.meCardsSelf=(jQuery("#game_player").val().trim().toString()=="player_one")?$split[2]:$split[3];
								if(jQuery("#game_player").val().trim().toString()=="player_one"){
									jQuery("#loading_div").html("دست ها مرتب شدند<br>شما حاکم هستید لطفا زمینه را مشخص کنید !");
									jQuery("#loading_div").show(0);
									var $meCards="";
									var $meCardsSplit=$split[2].split(",");
									for($i=1;$i<=$meCardsSplit.length;$i++){
										$meCards += '<img onclick="goToGround(this);" class="cards me-cards card-'+$i+'" id="card-'+$meCardsSplit[$i-1]+'" src="'+showPictureOfCard($meCardsSplit[$i-1])+'" />';
									}
									jQuery(".me-cards-div").html($meCards);
								}else{
									jQuery("#loading_div").html("دست ها مرتب شدند<br>لطفا منتظر باشید حاکم زمینه را مشخص کند !");
									jQuery("#loading_div").show(0);
									var $meCards="";
									var $meCardsSplit=$split[3].split(",");
									for($i=1;$i<=$meCardsSplit.length;$i++){
										$meCards += '<img onclick="goToGround(this);" class="cards me-cards card-'+$i+'" id="card-'+$meCardsSplit[$i-1]+'" src="'+showPictureOfCard($meCardsSplit[$i-1])+'" />';
									}
									jQuery(".me-cards-div").html($meCards);
								}
								self.firstSortCards="true";
							}
							self.goToGroundActive=jQuery("#game_player").val().trim().toString()=="player_one"?"true":"false";
						}else if($split[1]=="player_oneSendCard"){
							jQuery(".ground-cards1").html('<img src="'+showPictureOfCard($split[2])+'" />');
							if(jQuery("#game_player").val().trim().toString()=="player_one"){
								jQuery("#loading_div").html("لطفا منتظر باشید حریف کارت ارسال کنید");
							}else{
								jQuery("#loading_div").html("حریف کارت ارسال کرد. اکنون شما کارت ارسال کنید");
							}
							self.meCardsSelf=(jQuery("#game_player").val().trim().toString()=="player_one")?$split[3]:$split[4];
							if(self.sortCard2=="false"){
								if(jQuery("#game_player").val().trim().toString()=="player_one"){
									var $meCards="";
									var $meCardsSplit=$split[3].split(",");
									for($i=1;$i<=$meCardsSplit.length;$i++){
										$meCards += '<img onclick="goToGround(this);" class="cards me-cards card-'+$i+'" id="card-'+$meCardsSplit[$i-1]+'" src="'+showPictureOfCard($meCardsSplit[$i-1])+'" />';
									}
									jQuery(".me-cards-div").html($meCards);
									self.otherPlayerGroundCard="";
								}else{
									var $meCards="";
									var $meCardsSplit=$split[4].split(",");
									for($i=1;$i<=$meCardsSplit.length;$i++){
										$meCards+='<img onclick="goToGround(this);" class="cards me-cards card-'+$i+'" id="card-'+$meCardsSplit[$i-1]+'" src="'+showPictureOfCard($meCardsSplit[$i-1])+'" />';
									}
									jQuery(".me-cards-div").html($meCards);
									self.otherPlayerGroundCard=$split[2];
								}
								self.sortCard2="true";
							}
							self.goToGroundActive=jQuery("#game_player").val().trim().toString()=="player_one"?"false":"true";
							self.firstSortCards="true";
						}else if($split[1]=="player_twoSendCard"){
							jQuery(".ground-cards2").html('<img src="'+showPictureOfCard($split[2])+'" />');
							if(jQuery("#game_player").val().trim().toString()=="player_one"){
								jQuery("#loading_div").html("حریف کارت ارسال کرد. اکنون شما کارت ارسال کنید");
							}else{
								jQuery("#loading_div").html("لطفا منتظر باشید حریف کارت ارسال کنید");
							}
							self.meCardsSelf=(jQuery("#game_player").val().trim().toString()=="player_one")?$split[3]:$split[4];
							if(self.sortCard3=="false"){
								if(jQuery("#game_player").val().trim().toString()=="player_one"){
									var $meCards="";
									var $meCardsSplit=$split[3].split(",");
									for($i=1;$i<=$meCardsSplit.length;$i++){
										$meCards+='<img onclick="goToGround(this);" class="cards me-cards card-'+$i+'" id="card-'+$meCardsSplit[$i-1]+'" src="'+showPictureOfCard($meCardsSplit[$i-1])+'" />';
									}
									jQuery(".me-cards-div").html($meCards);
									self.otherPlayerGroundCard=$split[2];
								}else{
									var $meCards="";
									var $meCardsSplit=$split[4].split(",");
									for($i=1;$i<=$meCardsSplit.length;$i++){
										$meCards+='<img onclick="goToGround(this);" class="cards me-cards card-'+$i+'" id="card-'+$meCardsSplit[$i-1]+'" src="'+showPictureOfCard($meCardsSplit[$i-1])+'" />';
									}
									jQuery(".me-cards-div").html($meCards);
									self.otherPlayerGroundCard="";
								}
								self.sortCard3="true";
							}
							self.goToGroundActive=jQuery("#game_player").val().trim().toString()=="player_one"?"true":"false";
							self.firstSortCards="true";
						}else if($split[1].indexOf("HandWin") != -1){
							self.sortCard2="false";
							self.sortCard3="false";
							self.otherPlayerGroundCard="";
							if(self.showGroundCards=="false"){
								jQuery(".others-cards-div-1").children(":first").remove();
								$firstSendedCard=$split[2].split(",");
								$secondSendedCard=$split[3].split(",");
								if($firstSendedCard[0]=="player_one" && $secondSendedCard[0]=="player_two"){
									jQuery(".ground-cards1").html('<img src="'+showPictureOfCard($firstSendedCard[1])+'" />');
									jQuery(".ground-cards2").html('<img src="'+showPictureOfCard($secondSendedCard[1])+'" />');
								}else if($firstSendedCard[0]=="player_two"&&$secondSendedCard[0]=="player_one"){
									jQuery(".ground-cards1").html('<img src="'+showPictureOfCard($secondSendedCard[1])+'" />');
									jQuery(".ground-cards2").html('<img src="'+showPictureOfCard($firstSendedCard[1])+'" />');
								}else{
									return alert("Unknown Change !");
								}
								jQuery("#loading_div").html("");
								self.showGroundCards="true";
							}
							if(self.afterShowGroundCards=="false"){
								setTimeout(function(){
									var $handWiner=$split[1].replace("HandWin:","");
									jQuery(".ground-cards1").html("");
									jQuery(".ground-cards2").html("");
									if(jQuery("#game_player").val().trim().toString()=="player_one"){
										self.meCardsSelf=$split[6];
										var $meCards="";
										var $meCardsSplit=$split[6].split(",");
										for($i=1;$i<=$meCardsSplit.length;$i++){
											$meCards+='<img onclick="goToGround(this);" class="cards me-cards card-'+$i+'" id="card-'+$meCardsSplit[$i-1]+'" src="'+showPictureOfCard($meCardsSplit[$i-1])+'" />';
										}
										jQuery(".me-cards-div").html($meCards);
									}else{
										self.meCardsSelf=$split[7];
										var $meCards="";
										var $meCardsSplit=$split[7].split(",");
										for($i=1;$i<=$meCardsSplit.length;$i++){
											$meCards+='<img onclick="goToGround(this);" class="cards me-cards card-'+$i+'" id="card-'+$meCardsSplit[$i-1]+'" src="'+showPictureOfCard($meCardsSplit[$i-1])+'" />';
										}
										jQuery(".me-cards-div").html($meCards);
									}
									if($handWiner==jQuery("#game_player").val().trim().toString()){
										jQuery("#loading_div").show();
										jQuery("#loading_div").html("دست به نفع شما ! زمینه جدید را مشخص کنید");
										if(self.addScoreForHandWin=="false"){
											$playerElementAddScore=parseInt(jQuery("#me_score_show").html());
											$playerElementAddScore++;
											jQuery("#me_score_show").html($playerElementAddScore);
											self.addScoreForHandWin="true";
										}
									}else{
										jQuery("#loading_div").show();
										jQuery("#loading_div").html("دست به نفع حریف ! منتظر تعیین زمینه باشید");
										if(self.addScoreForHandWin=="false"){
											$playerElementAddScore=parseInt(jQuery("#other_players_score_show").html());
											$playerElementAddScore++;
											jQuery("#other_players_score_show").html($playerElementAddScore);
											self.addScoreForHandWin="true";
										}
									}
									self.goToGroundActive=$handWiner==jQuery("#game_player").val().trim().toString()?"true":"false";
									self.firstSortCards="true";
								},1000);
								self.afterShowGroundCards="true";
							}
						}else if($split[1]=="endGame"){
							reset_everithings();
							jQuery("#loading_div").show();
							jQuery("#loading_div").html("حریف از بازی خارج شد. شما برنده بازی هستید و مبلغ "+$split[2]+" تومان به حسابتان واریز و از حساب حریف کسر شد. تا 10 ثانیه دیگر به صفحه اصلی هدایت میشوید");
							setTimeout(function(){
								jQuery("#game_table").hide(0);
								jQuery('.col').css('background', 'url(<?php echo(url(templates . ds . 'images' . ds . 'body.png'));?>) no-repeat center center fixed');
								jQuery('.col').css('-o-background-size', 'cover');
								jQuery('.col').css('-webkit-background-size', 'cover');
								jQuery('.col').css('-moz-background-size', 'cover');
								jQuery('.col').css('background-size', 'cover');
								jQuery(".form").show(0);
							},10000);
							jQuery("#game_id").val("");
							jQuery("#game_start").val("");
							self.getRoomsForShowFuncID = setInterval(function(){
								getRoomsForShowFunc();
							}, 2000);
						}else if($split[1]=="endGame2"){
							reset_everithings();
							jQuery("#loading_div").show();
							var $winerID=$split[2];
							var $winprice=$split[3];
							var $wintypeWiner=$split[4]=="kote"?"شما حریف خود را کوت کردید !":($split[4]=="king_kote"?"شما حریف را حاکم کوت کردید !":"شما به صورت معمولی بازی را بردید !");
							var $wintypeOther=$split[4]=="kote"?"شما توسط حریف کوت شدید !":($split[4]=="king_kote"?"شما توسط حریف حاکم کوت شدید !":"شما به صورت معمولی بازی را باختید !");
							var $endText;
							if($winerID=="<?=$my_ID;?>"){
								$endText="شما برنده بازی شدید<br>"+$wintypeWiner+"<br>مبلغ "+$winprice+" به حساب شما واریز و از حساب حریف کسر شد<br>تا 10 ثانیه دیگر به صفحه اصلی باز میگردید";
							}else{
								$endText="شما بازنده شدید<br>"+$wintypeOther+"<br>مبلغ "+$winprice+" از حساب شما کسر شد و به حساب حریف واریز شد<br>تا 10 ثانیه دیگر به صفحه اصلی هدایت میشوید";
							}
							jQuery("#loading_div").html($endText);
							setTimeout(function(){
								jQuery("#game_table").hide(0);
								jQuery('.col').css('background', 'url(<?php echo(url(templates . ds . 'images' . ds . 'body.png'));?>) no-repeat center center fixed');
								jQuery('.col').css('-o-background-size', 'cover');
								jQuery('.col').css('-webkit-background-size', 'cover');
								jQuery('.col').css('-moz-background-size', 'cover');
								jQuery('.col').css('background-size', 'cover');
								jQuery(".form").show(0);
							},10000);
							jQuery("#game_id").val("");
							jQuery("#game_start").val("");
							self.getRoomsForShowFuncID = setInterval(function(){
								getRoomsForShowFunc();
							}, 2000);
						}
					};
					return true;
				};
				jQuery(".roomCreate").click(function(){
					$roomCreate_priceMoney=self.priceForFirstSeen;
					$doubleActive=jQuery("#doubleActive").hasClass("btn-danger")?"false":"true";
					socket.send("socket_roomCreate|<?=$my_ID;?>|"+$roomCreate_priceMoney+"|"+$doubleActive);
				});
				jQuery("#game_table_close").click(function(){
					if(jQuery("#game_id").val().trim().toString()=="0"){
						jQuery("#game_table").hide(0);
						jQuery('.col').css('background', 'url(<?php echo(url(templates . ds . 'images' . ds . 'body.png'));?>) no-repeat center center fixed');
						jQuery('.col').css('-o-background-size', 'cover');
						jQuery('.col').css('-webkit-background-size', 'cover');
						jQuery('.col').css('-moz-background-size', 'cover');
						jQuery('.col').css('background-size', 'cover');
						jQuery(".form").show(0);
						reset_everithings();
						return false;
						jQuery(".form").show();
						self.getRoomsForShowFuncID = setInterval(function(){
							getRoomsForShowFunc();
						}, 2000);
					}
					if(jQuery("#game_start").val().trim().toString()==1||jQuery("#game_start").val().trim().toString()=="1"){
						var $confirm=window.confirm("آیا از خروج از این اتاق مطمئن هستید ؟ خروج از این اتاق به منزله باخت شما است و مبلغ شرط بندی را از دست میدهید !");
						if($confirm && typeof($confirm) != undefined && $confirm != "undefined"){
							socket.send("socket_gameClose|<?=$my_ID;?>|"+jQuery("#game_id").val().trim().toString());
							reset_everithings();
							jQuery("#game_table").hide(0);
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
						socket.send("socket_gameClose|<?=$my_ID;?>|"+jQuery("#game_id").val().trim().toString());
						reset_everithings();
						jQuery("#game_table").hide(0);
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
				jQuery("#choose, #decline").click(function(){
					$spliter=self.groundCards.split(",");
					$first=$spliter[0];
					$second=$spliter[1];
					if(self.chooseCount==1){
						self.chooseCount=2;
						self.chooseCards=$first+":"+jQuery(this).prop("id")+",";
						self.lastChooseMode=jQuery(this).prop("id");
						if(self.lastChooseMode=="decline"){
							jQuery("#decline").hide(0);
							jQuery("#choose").show(0);
						}else{
							jQuery("#decline").show(0);
							jQuery("#choose").hide(0);
						}
						self.firstChoose="true";
						jQuery("#choseCardShowImage").prop("src",showPictureOfCard($second));
					}else if(self.chooseCount==2){
						if(self.lastChooseMode=="decline" && jQuery(this).prop("id")=="decline"){
							return false;
						}else if(self.lastChooseMode=="choose" && jQuery(this).prop("id")=="choose"){
							return false;
						}
						jQuery("#decline").css({color:"red"});
						jQuery("#choose").css({color:"green"});
						jQuery("#decline").show(0);
						jQuery("#choose").show(0);
						self.chooseCards=self.chooseCards+$second+":"+jQuery(this).prop("id");
						socket.send("socket_chooseCards|"+self.chooseCards+"|<?=$my_ID;?>|"+jQuery("#game_id").val().trim().toString()+"|"+jQuery("#game_player").val().trim().toString());
						self.chooseCards="";
						self.chooseCount=0;
						self.firstChoose="false";
						self.addToOther="true";
						self.sortCards="false";
						jQuery("#choseCardShowImage").prop("src","");
						jQuery(".choose-card").hide(0);
					}
				});
				jQuery("#doubleActive").click(function(){
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
			function firstTwoCardsRemovea($e){
				if(self.firstTwoCardsRemoveActive=="true"){
					if(self.firstTwoCardsRemove==""){
						self.firstTwoCardsRemove=jQuery($e).prop("id").replace("card-","")+",";
						jQuery($e).remove();
						jQuery("#loading_div").html("لطفا یک کارت دیگر حذف کنید");
					}else{
						self.firstTwoCardsRemove=self.firstTwoCardsRemove+jQuery($e).prop("id").replace("card-","");
						jQuery($e).remove();
						if(jQuery("#game_player").val().trim().toString()=="player_one"){
							jQuery("#loading_div").html("لطفا منتظر بمانید حریف دو کارت حذف کند");
						}else{
							jQuery("#loading_div").html("");
						}
						socket.send("socket_removeFirstTwoCards|<?=$my_ID;?>|"+jQuery("#game_id").val().trim().toString()+"|"+jQuery("#game_player").val().trim().toString()+"|"+self.firstTwoCardsRemove);
						self.firstTwoCardsRemove="";
						self.firstTwoCardsRemoveActive="false";
					}
				}else{return false;};
			}
			function goToGround($elem){
				if(self.goToGroundActive=="true"){
					var $meGroundElement=jQuery("#game_player").val().trim().toString()=="player_one"?jQuery(".ground-cards1"):jQuery(".ground-cards2");
					var $otherGroundElement=jQuery("#game_player").val().trim().toString()=="player_one"?jQuery(".ground-cards2"):jQuery(".ground-cards1");
					var $sendedCard=jQuery($elem).prop("id").replace("card-","");
					if(self.otherPlayerGroundCard != ""){
						var $meGroundCardType=$sendedCard.substr(0,1);
						var $otherPlayerGroundCardType=self.otherPlayerGroundCard.substr(0,1);
						if(self.meCardsSelf.indexOf($otherPlayerGroundCardType) != -1 && $meGroundCardType != $otherPlayerGroundCardType){
							jQuery($elem).addClass("cardsError");
							setTimeout(function(){
								jQuery($elem).removeClass("cardsError");
							},2000);
							return false;
						}
					}
					$meGroundElement.html('<img src="'+showPictureOfCard($sendedCard)+'">');
					jQuery($elem).remove();
					socket.send("socket_sendCard|<?=$my_ID;?>|"+jQuery("#game_id").val().trim().toString()+"|"+jQuery("#game_player").val().trim().toString()+"|"+$sendedCard);
					self.goToGroundActive="false";
					self.addScoreForHandWin="false";
					self.otherPlayerGroundCard="";
					self.showGroundCards="false";
					self.afterShowGroundCards="false";
					jQuery("#loading_div").html("");
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
			function vardict($v){
				socket.send("socket_showVerdict|<?=$my_ID;?>|"+jQuery("#game_id").val().trim().toString()+"|"+$v);
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
			function tableTdShowFunc($v){
				if($v<=999){
					jQuery('#tableInputShow').val('1000');
					jQuery('#tableInputShow').trigger('change');
				}else{
					jQuery('#tableTdShow1').html(number_format(parseInt($v * 3)) + ' <span class="hidden-xs">تومان</span><span class="hidden-sm hidden-md hidden-lg">T</span>');
					jQuery('#tableTdShow2').html(number_format(parseInt(parseInt($v * 3) * 2)) + ' <span class="hidden-xs">تومان</span><span class="hidden-sm hidden-md hidden-lg">T</span>');
					jQuery('#tableTdShow3').html(number_format(parseInt(parseInt($v * 3) * 4)) + ' <span class="hidden-xs">تومان</span><span class="hidden-sm hidden-md hidden-lg">T</span>');
					jQuery('#tableTdShow4').html(number_format(parseInt($v * 2)) + ' <span class="hidden-xs">تومان</span><span class="hidden-sm hidden-md hidden-lg">T</span>');
					jQuery('#tableTdShow5').html(number_format(parseInt(parseInt($v * 2) * 2)) + ' <span class="hidden-xs">تومان</span><span class="hidden-sm hidden-md hidden-lg">T</span>');
					jQuery('#tableTdShow6').html(number_format(parseInt(parseInt($v * 2) * 4)) + ' <span class="hidden-xs">تومان</span><span class="hidden-sm hidden-md hidden-lg">T</span>');
					jQuery('#tableTdShow7').html(number_format($v) + ' <span class="hidden-xs">تومان</span><span class="hidden-sm hidden-md hidden-lg">T</span>');
					jQuery('#tableTdShow8').html(number_format(parseInt($v * 2)) + ' <span class="hidden-xs">تومان</span><span class="hidden-sm hidden-md hidden-lg">T</span>');
					jQuery('#tableTdShow9').html(number_format(parseInt($v * 4)) + ' <span class="hidden-xs">تومان</span><span class="hidden-sm hidden-md hidden-lg">T</span>');
				}
			}
			function sendDoubleFunc(){
				var $confirm=window.confirm("آیا از ارسال درخواست دوبل مطمئن هستید ؟ این عمل قابل بازگردانی نمی باشد !");
				if(!$confirm||typeof($confirm)==undefined){
					return false;
				}else{
					socket.send("socket_requestForDouble|<?=$my_ID;?>|"+jQuery("#game_id").val().trim().toString()+"|"+jQuery("#game_player").val().trim().toString());
					jQuery("#sendDouble").hide();
				}
			}
		</script>
	</head>
	<body class="col old-browser">
		<div id="game_table">
			<div id="loading_for_player" align="center">
				<div class="row" align="center" style="text-align: center !important;">
					<div class="col-lg-4 col-lg-offset-4 col-md-12 col-sm-12 col-xs-12" style="margin-top: 20px !important; color: white !important; direction: rtl !important; font-size: 30px !important">در انتظار ورود بازیکن دیگر ...</div>
					<div class="col-lg-4 col-lg-offset-4 col-md-12 col-sm-12 col-xs-12" style="margin-top: 40px !important;"><i class="fa fa-5x fa-pulse fa-spinner" style="color: #ffffff !important;"></i><br></div>
					<div class="col-lg-4 col-lg-offset-4 col-md-12 col-sm-12 col-xs-12" style="margin-top: 40px !important;"><button style="direction: rtl !important;" class="btn btn-danger" onclick="return jQuery('#game_table_close').click();"><i class="fa fa-sign-out-alt"></i> بستن میز</button></div>
				</div>
			</div>
			<input type="hidden" value="0" id="game_id" />
			<input type="hidden" value="0" id="game_start" />
			<input type="hidden" value="Unknown" id="game_player" />
			<div id="removebleCardsDiv" class="hidden-xs hidden-sm hidden-md">
				<div class="textRemove">کارت های حذف شده :</div><br>
				<img id="removebleCardsOne" alt="کارت های حذف شده از بازی" title="کارت های حذف شده از بازی" class="cards" src="<?php echo(url(templates . ds . 'images' . ds . 'cards' . ds . 'back.png')); ?>"><br>
				<img id="removebleCardsTwo" alt="کارت های حذف شده از بازی" title="کارت های حذف شده از بازی" class="cards" src="<?php echo(url(templates . ds . 'images' . ds . 'cards' . ds . 'back.png')); ?>">
			</div>
			<div class="col-lg-3" style="margin-top: 10px !important;">
				<div class="row">
					<div class="col-lg-12">
						<button class="btn btn-block btn-danger" id="game_table_close">خروج از بازی</button>
						<div id="game_details" style="direction: rtl !important;">
							<div id="show_verdict_div"><text>حکم :</text><div id="show_verdict"></div></div>
							<div id="other_players_name"><text id="other_players_name_show">نامشخص</text> (حریف) <text id="other_players_score_show">0</text> امتیاز</div>
							<div id="game_play_score">مبلغ شرط : <text id="price_money_show">0</text> تومان</div>
							<div id="me_name"><text id="me_name_show"><?=(empty($row_get_user['username']) OR !is_string($row_get_user['username']) OR !isset($row_get_user['username'])) ? $row_get_user['email'] : $row_get_user['username'];?></text> (شما) <text id="me_score_show">0</text> امتیاز</div>
							<div id="sendDouble"><a href="javascript:;" onclick="sendDoubleFunc()">ارسال درخواست دوبل</a></div>
						</div>
					</div>
					<div class="col-lg-12"><div id="loading_div"></div></div>
				</div>
			</div>
			<div class="col-lg-8" style="margin-top: 10px !important; min-height: 95% !important;" align="center">
				<div class="cards-div" style="width: 95% !important;position: absolute !important; top: 0px !important;"><div class="others-cards-div-1"></div></div>
				<div class="ground-cards1" style="width: 95% !important; position: absolute !important; top: 35% !important;"></div>
				<div class="ground-cards2" style="width: 95% !important; position: absolute !important; top: 35% !important;left: 10% !important;"></div>
				<div class="cards-div" style="width: 95% !important;position: absolute !important; bottom: 0px !important;"><div class="me-cards-div"></div></div>
				<div class="display-hide choose-card" style="width: 95% !important; position: absolute !important; top: 35% !important;">
					<div class="card"><img style="margin-top: -15px !important;" id="choseCardShowImage" class="cards" src="<?php echo(url(templates . ds . 'images' . ds . 'cards' . ds . 'back.png')); ?>"></div>
					<div class="tools"><img style="width:40px;height:40px;" src="<?php echo(url(templates . ds . 'images' . ds . 'icons' . ds . 'check.png')); ?>" id="choose" title="این کارت را انتخاب کن"><img style="width:40px;height:40px;" src="<?php echo(url(templates . ds . 'images' . ds . 'icons' . ds . 'times.png')); ?>" id="decline" title="این کارت را نمی خواهم"></div>
				</div>
			</div>
		</div>
		<div class="form display-hide">
			<ul class="tab-group">
				<li class="tab"><a href="<?="http://" . $_SERVER['SERVER_NAME'] . '/users/casino/';?>">خروج <i class="fa fab far fas fa-sign-out-alt"></i></a></li>
				<li class="tab active"><a href="javascript:;" onclick="jQuery('.tab-group > .active').removeClass('active');jQuery(this).parent().addClass('active');jQuery('.tab-content-divs').slideUp(0);jQuery('#roomsList').slideDown(0);getRoomsForShowFunc();">لیست میز ها <i class="fa fab fa-windows"></i></a></li>
				<li class="tab"><a href="javascript:;" onclick="jQuery('.tab-group > .active').removeClass('active');jQuery(this).parent().addClass('active');jQuery('.tab-content-divs').slideUp(0);jQuery('#roomCreate').slideDown(0);">ساخت میز بازی <i class="fa fab far fas fa-play"></i></a></li>
			</ul>
			<div class="tab-content">
				<div id="roomCreate" class="tab-content-divs display-hide">   
					<div id="chooseGameDiv">
						<h1>حکم دو نفره <div class="pull-right"><button class="btn btn-danger" onclick="jQuery('.gamesDiv').hide(500,function(){jQuery('#chooseGameDiv').show(500);});">بازگشت <i class="fa fab far fas fa-sign-out-alt"></i></button></div></h1>
						<div class="row">
							<div class="col-lg-7">
								<div class="rtled" id="roomCreate_result"></div>
								<div class="rtled field-wrap">
									<div class="row">
										<div class="col-lg-5">
											<button onclick="self.priceForFirstSeen='1000';jQuery('.buttonsPrice').attr('disabled',false);jQuery(this).attr('disabled',true);" style="font-size:15px !important;width:100% !important;margin:5px 0px 5px 0px !important;" class="buttonsPrice btn btn-lg btn-success" disabled>اتاق 1,000 تومانی</button>
											<button onclick="self.priceForFirstSeen='2000';jQuery('.buttonsPrice').attr('disabled',false);jQuery(this).attr('disabled',true);" style="font-size:15px !important;width:100% !important;margin:5px 0px 5px 0px !important;" class="buttonsPrice btn btn-lg btn-success">اتاق 2,000 تومانی</button>
											<button onclick="self.priceForFirstSeen='5000';jQuery('.buttonsPrice').attr('disabled',false);jQuery(this).attr('disabled',true);" style="font-size:15px !important;width:100% !important;margin:5px 0px 5px 0px !important;" class="buttonsPrice btn btn-lg btn-success">اتاق 5,000 تومانی</button>
											<button onclick="self.priceForFirstSeen='10000';jQuery('.buttonsPrice').attr('disabled',false);jQuery(this).attr('disabled',true);" style="font-size:15px !important;width:100% !important;margin:5px 0px 5px 0px !important;" class="buttonsPrice btn btn-lg btn-success">اتاق 10,000 تومانی</button>
											<button onclick="self.priceForFirstSeen='25000';jQuery('.buttonsPrice').attr('disabled',false);jQuery(this).attr('disabled',true);" style="font-size:15px !important;width:100% !important;margin:5px 0px 5px 0px !important;" class="buttonsPrice btn btn-lg btn-primary">اتاق 25,000 تومانی</button>
											<button onclick="self.priceForFirstSeen='50000';jQuery('.buttonsPrice').attr('disabled',false);jQuery(this).attr('disabled',true);" style="font-size:15px !important;width:100% !important;margin:5px 0px 5px 0px !important;" class="buttonsPrice btn btn-lg btn-primary">اتاق 50,000 تومانی</button>
											<button onclick="self.priceForFirstSeen='100000';jQuery('.buttonsPrice').attr('disabled',false);jQuery(this).attr('disabled',true);" style="font-size:15px !important;width:100% !important;margin:5px 0px 5px 0px !important;" class="buttonsPrice btn btn-lg btn-danger">اتاق 100,000 تومانی</button>
										</div>
										<div style="margin-top:18% !important;" class="col-lg-7">
											<button id="doubleActive" style="width:100% !important;" class="buttonsPrice btn btn-lg btn-danger"><i class='fa fab far fas fa-times'></i> ارسال درخواست دوبل غیرفعال باشد</button>
											<button style="margin-top:10px !important;" class="btn roomCreate btn-success btn-lg btn-block"/>ساخت میز بازی</button>
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
												<input class="form-control" value="1000" onchange="return tableTdShowFunc(this.value);" id="tableInputShow" min="1000" max="1000000" step="1000" type="number">
												<span class="input-group-addon hidden-xs">تومان</span>
											</div>
											<table class="table">
												<tr>
													<td style="border-color: black;">نوع بردن</td>
													<td style="border-color: black;">معمولی</td>
													<td style="border-color: black;">x2</td>
													<td style="border-color: black;">x4</td>
												</tr>
												<tr>
													<td style="border-color: black;">معمولی</td>
													<td id="tableTdShow7" style="border-color: black;"></td>
													<td id="tableTdShow8" style="border-color: black;"></td>
													<td id="tableTdShow9" style="border-color: black;"></td>
												</tr>
												<tr>
													<td style="border-color: black;">کوت</td>
													<td id="tableTdShow4" style="border-color: black;"></td>
													<td id="tableTdShow5" style="border-color: black;"></td>
													<td id="tableTdShow6" style="border-color: black;"></td>
												</tr>
												<tr>
													<td style="border-color: black;">حاکم کوت</td>
													<td id="tableTdShow1" style="border-color: black;"></td>
													<td id="tableTdShow2" style="border-color: black;"></td>
													<td id="tableTdShow3" style="border-color: black;"></td>
												</tr>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="roomsList" class="tab-content-divs" style="display: block;">   
					<h1 id="loadingForLoadRooms">لیست میز ها</h1>
					<div class="rtled" id="roomsList_result"></div>
					<div class="rtled">
						<table id="roomsTableShow" class="table-white table table-bordered">
							<thead>
								<tr>
									<th class="text-center">#</th>
									<th class="text-center">نوع بازی</th>
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