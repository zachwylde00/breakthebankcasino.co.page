TkStarFreamWork(document).ready(function(){
	var mobile_menu = 'false';
	var active_menu = 'none';
	TkStarFreamWork('.tr-click').click(function(event){
		if(event.target.parentNode.nodeName != 'UL' && event.target.parentNode.nodeName.toLowerCase() != 'ul' && event.target.parentNode.nodeName != 'LI' && event.target.parentNode.nodeName.toLowerCase() != 'li'){
			var link = TkStarFreamWork(this).data('link-to-tr');
			window.location = link;
		}
		return true;
	});
    TkStarFreamWork('.mainnav li a').removeClass('active');
    TkStarFreamWork('.mainnav li a.home').addClass('active');
	TkStarFreamWork('.mobile-menu-action').click(function(){
		TkStarFreamWork('.mobile-menu-panel').not('.mobile-menu').slideUp(500);
		TkStarFreamWork('.mobile-menu').slideToggle(500);
		return true;
	});
	TkStarFreamWork('.mobile-menu-bet-action').click(function(){
		TkStarFreamWork('.mobile-menu-panel').not('.mobile-right-menu').slideUp(500);
		TkStarFreamWork('.mobile-right-menu').slideToggle(500);
		return true;
	});
	TkStarFreamWork('.mobile-menu-filter-action').click(function(){
		var this_element = TkStarFreamWork(this);
		TkStarFreamWork('.mobile-menu-panel').not('.mobile-left-menu').slideUp(500);
		TkStarFreamWork('.mobile-left-menu').slideToggle(500);
		return true;
	});
});