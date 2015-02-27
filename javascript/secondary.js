$(document).ready(function() 
{
	// Set the navbar opacity to 1
	document.getElementById("navbar").style.background = "rgba(0, 0, 0, 1)";

	// Set the starting background position
	$("#content").css("background-position", "center " + ($("#content").offset().top * 0.2) + "px");
});


function setHeadImage(image)
{
	$("#phead").css("background-image", "url(../images/" + image + ")");
}


/*
* Function: navigation
* Author: Chris Klassen
* Notes:
*	This function sets up window scrolling functionality.
*/
function navigation()
{
	// Unbind the default window scroll function
	$(window).unbind("scroll");

	// Set the navigation bar to be unlocked
	$("#navbar").addClass("navbar-unlocked");

	// Set the position of the title text
	$("#ptitle").css("top", $(window).height() / 2 - $(window).height() * 0.1);


	// Set the new scroll functionality
	$(window).scroll(function()
	{
		// Determine how far down the page we are
		var percent = ($(window).scrollTop() / $(window).height());

		// Scroll the title information up faster than the window
		$("#ptitle").css("top", (1 - percent) * ($(window).height() / 2 - $(window).height() * 0.1));

		// Offset the background scrolling
		var scrollOffset = $(document).scrollTop();
		var offset = ($("#content").offset().top - scrollOffset) * 0.2;
		$("#content").css("background-position", "center " + offset + "px");
	});
}