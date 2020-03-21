function getVerdictName($v,$s="40px"){
	if($v=="a"){return("<img style='width:"+$s+";height:auto !important;' src='templates/images/cards/icons/a.png' />");}
	if($v=="b"){return("<img style='width:"+$s+";height:auto !important;' src='templates/images/cards/icons/b.png' />");}
	if($v=="c"){return("<img style='width:"+$s+";height:auto !important;' src='templates/images/cards/icons/c.png' />");}
	if($v=="d"){return("<img style='width:"+$s+";height:auto !important;' src='templates/images/cards/icons/d.png' />");}
	return("NONE");
}
function showPictureOfCard($ci){
	switch($ci){
		/**
		a = Spades (Pig)
		b = Hearts (Dell)
		c = Clubs (Geshniz)
		d = Diamonds (Khesht)
		**/
		case("a1"):return("/casino/templates/images/cards/a/1.png");break;case("a2"):return("/casino/templates/images/cards/a/2.png");break;case("a3"):return("/casino/templates/images/cards/a/3.png");break;case("a4"):return("/casino/templates/images/cards/a/4.png");break;case("a5"):return("/casino/templates/images/cards/a/5.png");break;case("a6"):return("/casino/templates/images/cards/a/6.png");break;case("a7"):return("/casino/templates/images/cards/a/7.png");break;case("a8"):return("/casino/templates/images/cards/a/8.png");break;case("a9"):return("/casino/templates/images/cards/a/9.png");break;case("a10"):return("/casino/templates/images/cards/a/10.png");break;case("a11"):return("/casino/templates/images/cards/a/11.png");break;case("a12"):return("/casino/templates/images/cards/a/12.png");break;case("a13"):return("/casino/templates/images/cards/a/13.png");break;
		case("b1"):return("/casino/templates/images/cards/b/1.png");break;case("b2"):return("/casino/templates/images/cards/b/2.png");break;case("b3"):return("/casino/templates/images/cards/b/3.png");break;case("b4"):return("/casino/templates/images/cards/b/4.png");break;case("b5"):return("/casino/templates/images/cards/b/5.png");break;case("b6"):return("/casino/templates/images/cards/b/6.png");break;case("b7"):return("/casino/templates/images/cards/b/7.png");break;case("b8"):return("/casino/templates/images/cards/b/8.png");break;case("b9"):return("/casino/templates/images/cards/b/9.png");break;case("b10"):return("/casino/templates/images/cards/b/10.png");break;case("b11"):return("/casino/templates/images/cards/b/11.png");break;case("b12"):return("/casino/templates/images/cards/b/12.png");break;case("b13"):return("/casino/templates/images/cards/b/13.png");break;
		case("c1"):return("/casino/templates/images/cards/c/1.png");break;case("c2"):return("/casino/templates/images/cards/c/2.png");break;case("c3"):return("/casino/templates/images/cards/c/3.png");break;case("c4"):return("/casino/templates/images/cards/c/4.png");break;case("c5"):return("/casino/templates/images/cards/c/5.png");break;case("c6"):return("/casino/templates/images/cards/c/6.png");break;case("c7"):return("/casino/templates/images/cards/c/7.png");break;case("c8"):return("/casino/templates/images/cards/c/8.png");break;case("c9"):return("/casino/templates/images/cards/c/9.png");break;case("c10"):return("/casino/templates/images/cards/c/10.png");break;case("c11"):return("/casino/templates/images/cards/c/11.png");break;case("c12"):return("/casino/templates/images/cards/c/12.png");break;case("c13"):return("/casino/templates/images/cards/c/13.png");break;
		case("d1"):return("/casino/templates/images/cards/d/1.png");break;case("d2"):return("/casino/templates/images/cards/d/2.png");break;case("d3"):return("/casino/templates/images/cards/d/3.png");break;case("d4"):return("/casino/templates/images/cards/d/4.png");break;case("d5"):return("/casino/templates/images/cards/d/5.png");break;case("d6"):return("/casino/templates/images/cards/d/6.png");break;case("d7"):return("/casino/templates/images/cards/d/7.png");break;case("d8"):return("/casino/templates/images/cards/d/8.png");break;case("d9"):return("/casino/templates/images/cards/d/9.png");break;case("d10"):return("/casino/templates/images/cards/d/10.png");break;case("d11"):return("/casino/templates/images/cards/d/11.png");break;case("d12"):return("/casino/templates/images/cards/d/12.png");break;case("d13"):return("/casino/templates/images/cards/d/13.png");break;
		default:return("NONE");break;
	}
}
function pow(m,p){
	var k=Math.pow(10,p);
	return(""+(Math.round(m*k)/k));
}
function clearAllSetTimeouts(){
	var timeoutID=window.setTimeout(function(){},0);
	while(timeoutID--){window.clearTimeout(timeoutID);}
}
function clearAllSetInterval(){
	var intervalID=window.setInterval(function(){},0);
	while(intervalID--){window.clearInterval(intervalID);}
}
function notifyShow($ti,$te,$i,$ty){
	$.notify({
		title:$ti,
		text:$te,
		image:"<i class='fa fa-"+$i+"'></i>"
	},{
		style:"metro",
		className:$ty,
		globalPosition:"top right",
		showAnimation:"show",
		autoHide:true,
		clickToHide:true
	});
}
function number_format (number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}
function is_float(n){
    return Number(n) === n && n % 1 !== 0;
}
function is_numeric(n){
    return Number(n) === n && n % 1 === 0;
}
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}