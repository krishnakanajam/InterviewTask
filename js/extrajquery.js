
$(document).ready(function () {
	
	
	//for menu dropdowns

    $(".dropdown").hover(function () {

        $(".dropdown-menu", this).show();
        $(".dropdown-menu", this).addClass('animated fadeIn');

    }, function () {

        $(".dropdown-menu", this).hide();

        });


    // scroll to top of the page

    $("#top").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    //Right click Disable start

    var isNS = (navigator.appName == "Netscape") ? 1 : 0;
    if (navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);
    function mischandler() {
        return false;
    }

    function mousehandler(e) {
        var myevent = (isNS) ? e : event;
        var eventbutton = (isNS) ? myevent.which : myevent.button;
        if ((eventbutton == 2) || (eventbutton == 3)) return false;
    }
    document.oncontextmenu = mischandler;
    document.onmousedown = mousehandler;
    document.onmouseup = mousehandler;
    
    //Right click Disable End


    document.onkeydown = function (e) {

        if (event.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
        
    }


   
});




// after scroll fixed header


jQuery(function ($) {

    function fixDiv() {
       
        if ($(window).scrollTop() > 100) {
            
            $("div.det").css("display", "none");
            $(".navbar-inverse").css({ "background" : "rgba(0,0,0,0.7)", "padding-top" : "1%" });
        }
        else {

            $("div.det").css("display", "block");
           
            $(".navbar-inverse").css({ "background": "rgba(0,0,0,0.3)", "padding-top": "0" });
        }
    }
    $(window).scroll(fixDiv);
    fixDiv();
});