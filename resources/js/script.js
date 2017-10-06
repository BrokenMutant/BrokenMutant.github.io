$(document).ready(function() {
    
    $('.view').hover(function() {
                    $(this).toggleClass('hovered');
                },function() {
                    $(this).toggleClass('hovered');
                });
    
    if(window.matchMedia('(max-width: 1023px)').matches){
                $('.view').addClass('hovered');
                $('.hero-text h1').html('Aniket <br> Bhattacharyea');
            }
  
    $(window).resize(function() {
            
            if(window.matchMedia('(max-width: 1023px)').matches){
                $('.view').addClass('hovered');
                $('.hero-text h1').html('Aniket <br> Bhattacharyea');
                
            }
            if(window.matchMedia('(max-width: 2000px)').matches) {
                $('.view').removeClass('hovered');
                $('.hero-text h1').html('Aniket Bhattacharyea');
            }
        
        }
    );
    
    $('.mobile-nav-icon').click(function() {
        $(this).toggleClass('ion-close-round').toggleClass('ion-navicon-round');
        $('.main-nav').slideToggle(200);
    });
  /*  $('.tools-details').textillate({
        autostart: false,
        in: {
            effect: 'fadeInLeftBig'
        },
        out: {
            effect: 'fadeOutRight'
        }
    });
     var e = $('.tools-details');
    e.hide();
   $('.tools-name a').hover(function() {
       
       $(this).parent().parent().children('.tools-details').textillate({ 
           in: {
               effect: 'rollIn',
               sync: true
           },
           out: {
               effect: 'rollIn'
           }
       });
       var e = $(this).parent().parent().children('.tools-details');
       e.show(200,'swing',function() {
           e.textillate('in');
       })
       
       
   },function() {
        var e = $(this).parent().parent().children('.tools-details');
        e.textillate('out',function() {
          e.hide();
       });
       
   });
  
     $('.tools-name a').hover(function() {
         
         $(this).animate({
             fontSize: '200%'
         },500);
         $(this).parent().parent().animate({
             maxHeight: '500px'
         }, 2000);
         $(this).parent().parent().children('.tools-image').children('img').animate({
             height: '50px',
             width: '50px'
         }, 2000);
     },
        function() {
         $(this).animate({
             fontSize: '100%'
         },500);
         $(this).parent().parent().animate({
             maxHeight: '30px'
         }, 2000);
     });
    
    */
    $('.about-me').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav .row').addClass('sticky');
        }
        else {
            $('nav .row').removeClass('sticky');
        }
    }, {
        offset: '580px'
    });
    
   // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, 'swing', function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
            console.log('tt');
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    $('.hero-call-to-action').waypoint(function(direction){
        if(direction == 'down') {
            $('.sticky').css({
                backgroundColor: '#c0392b'
            }); 
            $('.sticky').find('a').css({
                color: '#fff'
            }).hover(function() {
               $(this).css({
                   color: '#555'
               });
           },
                    function() {
               $(this).css({
                    color: '#fff'
               });
               
           });
            $('.mobile-nav-icon').css({
              color: '#fff' 
           });
        }
       else {
           $('.sticky').css({
           backgroundColor: '#fff'
       }); 
           $('.mobile-nav-icon').css({
              color: '#555' 
           });
           $('.sticky').find('a').css({
                color: '#555',
               
            }).unbind('mouseenter mouseleave');
           $('nav .row').removeAttr('style').find('a').removeAttr('style');
           $('.mobile-nav-icon').removeAttr('style');
       }
    });

 
});