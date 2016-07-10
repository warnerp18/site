import '../imports/clients/startup';


$(function() {

  let height = $(window).height();
  let didScroll;
  let lastScrollTop = 0;
  let delta = 5;
  let navbarHeight = $('.menu').outerHeight();

  $(document).ready(function(){
    $('.header-image').css("height", height);
  });
  $(window).resize(function(){
  let resizeHeight = $(window).height();
    $('.header-image').css("height", resizeHeight);
  });

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 200);


  function hasScrolled() {
      var st = $(this).scrollTop();
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('.menu').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('.menu').removeClass('nav-up').addClass('nav-down');
          }
      }
      if(st > height ){
        $('.menu').addClass('black');
      }else {
        $('.menu').removeClass('black');
      }

      lastScrollTop = st;
  }
});

