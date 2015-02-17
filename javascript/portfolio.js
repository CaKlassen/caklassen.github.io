$(document).ready(function() 
{
	$('a[href^="#"]').on('click', function (element) 
	{
		// Stop the standard jump-to-div
	    element.preventDefault();

	    // Retrive the target element
	    var target = this.hash;
	    var $target = $(target);

	    // Slide to the target
	    $('html, body').stop().animate(
	    {
	        'scrollTop': $target.offset().top - 120
	    }, 1000, 'swing', function() 
	    {
	    	// Update the address bar
	        window.location.hash = target;
    	});
	});
});


/*
* Function: navigation
* Author: Chris Klassen
* Notes:
*	This function sets up window scrolling functionality and
*	navigation button functionality.
*/
function navigation()
{
	// Unbind the default window scroll function
	$(window).unbind("scroll");

	// Set the navigation bar to initially be locked in place
	$("#navbar").addClass("navbar-locked");
	$("#title").css("top", $(window).height() / 2 - 230);

	// Set the new scroll functionality
	$(window).scroll(function()
	{
		// Determine how far down the page we are
		var percent = ($(window).scrollTop() / $(window).height());

		// Set the navbar opacity based on percent
		document.getElementById("navbar").style.background = "rgba(0, 0, 0, " + Math.max(0.85, percent + 0.1) + ")";

		// Scroll the title information up faster than the window
		$("#title").css("top", (1 - percent) * ($(window).height() / 2 - 230));

		// Offset the background scrolling
		var scrollOffset = $(document).scrollTop();
		var offset = ($("#content").offset().top - scrollOffset) * 0.2;
		$("#content").css("background-position", "center " + offset + "px");

		// If we are far enough down the page to unlock the navbar
		if ($(window).scrollTop() > $(window).height() - 64)
		{
			if ($("#navbar").hasClass("navbar-locked"))
			{
				$("#navbar").addClass("navbar-unlocked");
				$("#navbar").removeClass("navbar-locked");
			}
		}
		else
		{
			if (!$("#navbar").hasClass("navbar-locked"))
			{
				$("#navbar").addClass("navbar-locked");
				$("#navbar").removeClass("navbar-unlocked");
			}
		}
	});

}