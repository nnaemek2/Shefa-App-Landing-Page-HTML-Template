/*
Author       : theme_ocean.
Template Name: Mastan - Responsive App Landing Page
Version      : 1.0
*/
(function($) {
	'use strict';
	

	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/

		/*START MENU JS*/		
			$(".mobile_menu").simpleMobileMenu({			
				"menuStyle": "slide"
			});
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});	
		/*END MENU JS*/

		/* START SCREENSHOTS SLIDER JS*/
		$('.s-slider').owlCarousel({ 
			autoPlay: 10000, //Set AutoPlay to 4 seconds	 
			items : 4,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [979,3],
			itemsTablet : [768,2],
			itemsMobile	: [479,1],
			pagination	: true,
		});
		/* END START SCREENSHOTS SLIDER JS*/
		
		/*START VIDEO JS*/
		 $('.magnific_popup').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/	

		/*START TESTIMONIAL JS*/	
		$("#testimonial-slider").owlCarousel({
		   items:3,
			itemsDesktop:[1000,3],
			itemsDesktopSmall:[980,2],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination:true,
			navigation:true,
			navigationText:["",""],
			slideSpeed:1000,
			autoPlay:false
		});
		/*END TESTIMONIAL JS*/	
		
		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */		

		/*AJAX CONTACT JS*/

    // Function for email address validation
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        return pattern.test(emailAddress);

    }
    $("#contactForm").on('submit', function(e) {
        e.preventDefault();
        var data = {
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        };

        if (isValidEmail(data['email']) && (data['message'].length > 1) && (data['name'].length > 1) && (data['subject'].length > 1)) {
            $.ajax({
                type: "POST",
                url: "sendmail.php",
                data: data,
                success: function() {
                    $('#contactForm .input-success').delay(500).fadeIn(1000);
                    $('#contactForm .input-error').fadeOut(500);
                }
            });
        } else {
            $('#contactForm .input-error').delay(500).fadeIn(1000);
            $('#contactForm .input-success').fadeOut(500);
        }

        return false;
    });			

		
	
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
	
	const lenis = new Lenis()


    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
				
})(jQuery);

/*START MAGIC MOUSE JS*/	
		// Mouse Follower
		const follower = document.querySelector(
			".mouse-follower .cursor-outline"
		);
		const dot = document.querySelector(".mouse-follower .cursor-dot");
		window.addEventListener("mousemove", (e) => {
			follower.animate(
				[
					{
						opacity: 1,
						left: `${e.clientX}px`,
						top: `${e.clientY}px`,
						easing: "ease-in-out",
					},
				],
				{
					duration: 3000,
					fill: "forwards",
				}
			);
			dot.animate(
				[
					{
						opacity: 1,
						left: `${e.clientX}px`,
						top: `${e.clientY}px`,
						easing: "ease-in-out",
					},
				],
				{
					duration: 1500,
					fill: "forwards",
				}
			);
		});

		// Mouse Follower Hide Function
		$("a, button").on("mouseenter mouseleave", function () {
			$(".mouse-follower").toggleClass("hide-cursor");
		});

		var terElement = $(
			"h1, h2, h3, h4, .display-one, .display-two, .display-three, .display-four, .display-five, .display-six"
		);
		$(terElement).on("mouseenter mouseleave", function () {
			$(".mouse-follower").toggleClass("highlight-cursor-head");
			$(this).toggleClass("highlight-cursor-head");
		});

		var terElement = $("p");
		$(terElement).on("mouseenter mouseleave", function () {
			$(".mouse-follower").toggleClass("highlight-cursor-para");
			$(this).toggleClass("highlight-cursor-para");
		});
/*END MAGIC MOUSE JS*/	
  
