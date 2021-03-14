	// Typed Text Change 
	if($('#typedStrings').length > 0){
	  document.addEventListener('DOMContentLoaded', function() {
	    var typed = new Typed('#textTyped', {
	      stringsElement: '#typedStrings',
	      typeSpeed: 50,
	      backSpeed: 50,
	      startDelay: 50,
	      loop: true,
	      loopCount: Infinity,
	    });
	  });
	}
	// owl sarousel
	$(document).ready(function() {
      $('.testimonial-slider-item-wrapper').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 1,
            nav: true
          },
          1000: {
            items: 1,
            nav: true,
            loop: true,
            margin: 20
          }
        },
        autoplay: true,
        loop: true,
    	smartSpeed:1000,
   		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
      });
    });
	// Counter 
	$(document).ready(function(){
		$(window).scroll(testScroll);
		var viewed = false;
		function isScrolledIntoView(elem) {
		    var docViewTop = $(window).scrollTop();
		    var docViewBottom = docViewTop + $(window).height();

		    var elemTop = $(elem).offset().top;
		    var elemBottom = elemTop + $(elem).height();

		    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
		}
		function testScroll() {
		  if (isScrolledIntoView($(".counter-item-outer")) && !viewed) {
		      viewed = true;
		      $('.counter-number').each(function () {
		      $(this).prop('Counter',0).animate({
		          Counter: $(this).text()
		      }, {
		          duration: 3000,
		          easing: 'swing',
		          step: function (now) {
		              $(this).text(Math.ceil(now));
		          }
		      });
		    });
		  }
		}
	});




// $('.progressbar-init').each(function(){
// 	$(this).LineProgressbar({
// 		percentage:$(this).attr('data-val'),
// 		radius: '3px',
// 		height: '20px',
// 		fillBackgroundColor: $(this).attr('data-color'),
// 	});
// });

$(function() {
    var $section = $('.skill-info-section');
    var $queue = $({});
    
    function loadDaBars() {
        $('.progressbar-init').each(function(){
			$(this).LineProgressbar({
				percentage:$(this).attr('data-val'),
				radius: '3px',
				height: '20px',
				fillBackgroundColor: $(this).attr('data-color'),
			});
		});
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset+10 >= containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });
});
