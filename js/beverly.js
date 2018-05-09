$(function () {
  $("img.lazyload").lazyload();
});

$(function scrollDetection () {
  // 1. wrap the window scroll event handler in jquery dom ready function

  // 2. reuse jquery element selector, this function will be called quite often,
  //    so the performance improvement may be significant
  var $document = $(document);
  var $product = $('.product');
  var $space = $('.space');
  // ... the same goes for other variables
  // you can just try with those used more often,
  // and see if that makes the page more smooth

  $(window).scroll(function() {
    var scrollTop = $document.scrollTop();
    var productOffset = $product.offset().top;
    var spaceOffset = $space.offset().top;
    var moreOffset = $(".more").offset().top;
    var aboutOffset = $(".about").offset().top;
    var visitOffset = $(".visit").offset().top;
    console.log(spaceOffset);
    // console.log(scrollTop);
    if (scrollTop >= spaceOffset - 200) {
      spaceOpen();
      // $(".anchor").text("|  Space");
    } else {
      spaceClose();
    }
    if (scrollTop < productOffset - 200) {
      $(".logo_top").css("opacity", "0");
    } else {
      $(".logo_top").css("opacity", "1");
    }
    if (scrollTop >= visitOffset - 200) {
      $('.info.desktop').css('right', '0');
      $(".info.mobile").css("bottom", "0");
      $('footer').css('opacity', '1');
    } else {
      $(".info.desktop").css("right", "-60vw");
      $(".info.mobile").css("bottom", "-60vh");
      $("footer").css("opacity", "0");
    }
    if (scrollTop > (productOffset -200) && scrollTop < (spaceOffset-800)) {
      $(".anchor").text("New Arrival");
      $(".anchor").css("right", "0");
    } else if (scrollTop>(spaceOffset-500) && scrollTop<(moreOffset- 500)){
      $(".anchor").text("Space");
      $(".anchor").css("right", "0");
    } else if (scrollTop>(moreOffset-200) && scrollTop<(aboutOffset-500)){
      $(".anchor").text("More Inspiration");
      $(".anchor").css("right", "0");
    }else if (scrollTop>(aboutOffset-200) && scrollTop<(visitOffset-500)){
      $(".anchor").text("About");
      $(".anchor").css("right", "0");
    }else if (scrollTop>(visitOffset-200)) {
      $(".anchor").text("Visit Us");
      $(".anchor").css("right", "0");
    } else {
      $(".anchor").css("right", "-20vh");
    }
    if(scrollTop < spaceOffset-800){
      $(".scroll_down").css("opacity", "1");
      $(".scroll_down").css("z-index", "2");
    } else {
      $('.scroll_down').css('opacity', '0');
      $(".scroll_down").css("z-index", "-100");
    }
  });
});

// $("#product").click(function() {
// $("html").animate({ scrollTop: 8000 }, 500);
// console.log('hello');
// });

$(".status").click(function() {
  var status = $(this).attr("data-status");
  if (status == "open") {
    spaceClose();
  } else if (status == "close") {
    spaceOpen();
  }
});

// this event binding works is because we load beverly.js after the page is load
// i.e. we put the script tag at the bottom of html body
// generally it's better practice to wrap all the event binding in
// $(function() {
//   $('.dot').click(function() {};
// });
// which will wait for dom ready
$(".dot").click(function() {
  $(this).siblings().removeClass("active");
  $(this).toggleClass("active");
  $(".space_fur").toggleClass("active");

  // jquery selector can be resource consuming, so we store it to $dots here
  var $dots = $('.dot');

  var furCount = $dots.length;
  // console.log(furCount);

  var k=0;
  for(i=0; i < furCount; i++){
    if($dot.eq(i).hasClass('active')){
      k++;
    // } else {
    //   k=k+0;
    // remove redundant else clause
    }
  }
  if(k==0){
    $(".space_overall").addClass("active");
  }else{
    $(".space_overall").removeClass("active");
  }
  console.log(k);
});

function spaceClose(){
  $('.status').attr('data-status', 'close');
  $('.status_text').text('View Detail');
  $(".space_overall").removeClass("active");
  $(".dot").removeClass("active");
  $('.dot').css('opacity', '0');
  $('.space_left').removeClass('active');
  $('.space_pic').removeClass('active');
  $('.dot').removeClass('active');
  $('.status_line').removeClass('active');
  $(".space_fur").removeClass("active");
}

function spaceOpen(){
  $('.status').attr('data-status', 'open');
  $('.space_left').addClass('active');
  $('.space_pic').addClass('active');
  $('.status_line').addClass('active');
  $('.dot').css('opacity', '1');
  $('.status_text').text('Close');
  $(".space_fur").addClass("active");

  // since we are using jquery, we can replace following code
  /*
  var furCount = $(".dot").length;
  var k = 0;
  for (i = 0; i < furCount; i++) {
    if ($(".dot").eq(i).hasClass("active")) {
      k = k + 1;
    } else {
      k = k + 0;
    }
  }
  */

  // with this
  var hasActivedDot = ($('.dot.active').length > 0);

  if (!hasActivedDot) {
    $(".space_overall").addClass("active");
  } else {
    $(".space_overall").removeClass("active");
  }
}


$('.menu-icon').click(function () {
  $(this).toggleClass('active');
  $(this).find('div').removeClass('no-animation');
  $('.nav').toggleClass('active');
});
$('.nav li').click(function(){
  $('.nav').toggleClass('active');
  $('.menu-icon').toggleClass('active');
})
$('.nav li ul li').click(function () {
  $('.nav').toggleClass('active');
  $('.menu-icon').toggleClass('active');
})

// to prevent using global variables, we have several ways to achieve that
// one of the most intuitive way is, just wrap anything in one function
$(function initializeImageSlider() { // <-- and it's even better if we give it a meaningful name

  // so here we have insImg sit in this function scope
  // PS. in js if we are using var, it's function scope variable
  // look into `let` and `const` when you're ready to know more about variable declaration
  var insImg = [];

  // since now we have a function scope, and it will execute only after dom ready
  // we can cache some dom element here
  // Note: this is only for best practice, it's not always necessary
  var $slide = $('.slide');
  // ^ i'm too lazy so we're just using .slide for example
  // put a dollar sign before variable name is to indicate it's a jquery powered dom el
  // you can also have naming convention like slideEl, slideEle (as slide element) etc.

  function initiate(){
    insImg = ["living01.jpg", "living02.jpg", "living03.jpg", "living04.jpg", "living05.jpg", "living06.jpg", "living07.jpg", "living08.jpg"];
    var slideCount = insImg.length;
    var slideNum = 0;
    var slideWidth = $(".ins_right").width();
    $slide.width(slideCount * slideWidth);
    $(".change_right img").attr("src", "images/" + insImg[1]);
    $(".change_left img").attr("src", "images/" + insImg[slideCount - 1]);
    switchSlide(insImg);
  }
  initiate();

  // function is not a good naming, js just already got too many functions....
  $(".function li a").click(function() {
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');

    // here we are using the display text to tell what's the room type
    // better way to do it may be using html5 data-* attributes
    // something like
    // html
    // <li class="transition active" data-room-type="living_room">...</li>
    // js
    // var roomType = $(this).data('roomType');
    //
    // notice that we used data-room-type in html but using roomType in js to fetch it
    // to do it without jquery, just for you reference, will be
    // var roomType = this.dataset.roomType; <- not 100% sure if it works or not though
    var roomType = $(this).text();

    $(".ins_right .slide").empty();
    $slide.css("left", 0);
    $(".ins_text").empty();

    // ============= removing switch case begin ====================
    // not saying switch case is bad, just showing a different approach
    // if we are not using a switch case, what can we do?
    const roomTypeConfigs = {
      living_room: {
        images: ["living01.jpg", "living02.jpg", "living03.jpg", "living04.jpg", "living05.jpg", "living06.jpg", "living07.jpg", "living08.jpg"],
        content: `
          <div class="title title2 transition">
            <p>Living Room</p>
            <p class="pic_num">x/y</p>
          </div>
          <div class="content transition">
            <p>Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish. Put use set uncommonly announcing and travelling. Allowance sweetness direction to as necessary. Excellent you did therefore perfectly supposing described.</p>
            <p class="hide"> Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating. Spirits musical behaved on we he farther letters. </p>
          </div>
        `
      },
      bedroom: {
        // configs just as the same as living_room
      },
      // the same goes for other room types
    };

    const roomTypeConfig = roomTypeConfigs[roomType];
    insImg = roomTypeConfig.images;
    $('.ins_text').append(roomTypeConfig.content);
    // the benefit of doing this, is to separate data (configs) from the code
    // so we only have minimum code to actually doing manipulation
    // ============= removing switch case end ====================

    var slideCount = insImg.length;
    $(".pic_num").text("1/" + slideCount);
    var slideNum = 0;
    var slideWidth = $(".ins_right").width();
    $slide.width(slideCount * slideWidth);
    for (i = 0; i < slideCount; i++) {
      // consider use ``, which is called template string in js, to have better readibility
      // one possible concern to not to use it is, IE11 doesn't support it :(
      $(".ins_right .slide").append(`
        <figure>
          <img class="lazyload" src="images/${insImg[i]}" data-ins="${insImg[i]}" alt="">
        </figure>
      `);
    }
    // 改成data-src就不行
    $(".change_right img").attr("src", "images/" + insImg[1]);
    $(".change_left img").attr("src", "images/" + insImg[slideCount - 1]);

    switchSlide();
  });

  function switchSlide(){
    var slideCount = insImg.length;
    var slideNum = 0;
    var slideWidth = $(".ins_right").width();
    function move() {
      slideMove = 0 - slideNum * slideWidth;
      $slide.css("left", slideMove);
    }
    $(".ins_left .change_next").click(function() {
      slideNum = (slideNum + 1) % slideCount;
      move();
      $(".change_right img").attr("src", "images/" + insImg[(slideNum + 1) % slideCount]);
      $(".change_left img").attr("src", "images/" + insImg[Math.abs((slideNum - 1 + slideCount) % slideCount)]);
      $(".pic_num").text((slideNum+1) +"/" + slideCount);
    });
    $(".ins_left .change_prev").click(function() {
      slideNum = Math.abs((slideNum - 1 + slideCount) % slideCount);
      move();
      $(".change_right img").attr("src", "images/" + insImg[(slideNum + 1) % slideCount]);
      $(".change_left img").attr("src", "images/" + insImg[Math.abs((slideNum - 1 + slideCount) % slideCount)]);
      $(".pic_num").text((slideNum + 1) + "/" + slideCount);
    });
  }
})

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = { // How zoomed in you want the map to start at (always required)
    zoom: 16,
    center: new google.maps.LatLng(25.0322811, 121.5424883),
    styles: [{ featureType: "administrative.locality", elementType: "all", stylers: [{ hue: "#2c2e33" }, { saturation: 7 }, { lightness: 19 }, { visibility: "on" }] }, { featureType: "landscape", elementType: "all", stylers: [{ hue: "#ffffff" }, { saturation: -100 }, { lightness: 100 }, { visibility: "simplified" }] }, { featureType: "poi", elementType: "all", stylers: [{ hue: "#ffffff" }, { saturation: -100 }, { lightness: 100 }, { visibility: "off" }] }, { featureType: "road", elementType: "geometry", stylers: [{ hue: "#bbc0c4" }, { saturation: -93 }, { lightness: 31 }, { visibility: "simplified" }] }, { featureType: "road", elementType: "labels", stylers: [{ hue: "#bbc0c4" }, { saturation: -93 }, { lightness: 31 }, { visibility: "on" }] }, { featureType: "road.arterial", elementType: "labels", stylers: [{ hue: "#bbc0c4" }, { saturation: -93 }, { lightness: -2 }, { visibility: "simplified" }] }, { featureType: "road.local", elementType: "geometry", stylers: [{ hue: "#e9ebed" }, { saturation: -90 }, { lightness: -8 }, { visibility: "simplified" }] }, { featureType: "transit", elementType: "all", stylers: [{ hue: "#e9ebed" }, { saturation: 10 }, { lightness: 69 }, { visibility: "on" }] }, { featureType: "water", elementType: "all", stylers: [{ hue: "#e9ebed" }, { saturation: -78 }, { lightness: 67 }, { visibility: "simplified" }] }]
  };
  // This is where you would paste any style found on Snazzy Maps.
  // The latitude and longitude to center the map (always required)
  // How you would like to style the map. // New York

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById("map");

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(25.0322811, 121.5424883),
    map: map,
    title: "Snazzy!"
  });
}

$('.btn').click(function(){
  $('#map').toggleClass('active');
  $('.btn').toggleClass('active');
  if($('.btn').hasClass('active')){
    $('.btn').text('Hide Map');
  }else{
    $('.btn').text('Show Map');
  }
})

