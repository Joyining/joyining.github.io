        
        $(function () {
                $("img.lazyload").lazyload();
            });
        $(window).scroll(function() {
            var scrollTop = $(document).scrollTop();
            var productOffset = $(".product").offset().top;
            var spaceOffset = $(".space").offset().top;
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
            }else{
                $('.scroll_down').css('opacity', '0');
                $(".scroll_down").css("z-index", "-100");
            }
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

        $(".dot").click(function() {
            $(this).siblings().removeClass("active");
            $(this).toggleClass("active");
            $(".space_fur").toggleClass("active");
            var furCount = $('.dot').length;
            // console.log(furCount);
            var k=0;
            for(i=0; i<furCount; i++){
                if($('.dot').eq(i).hasClass('active')){
                    k=k+1;
                }else{
                    k=k+0;
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
            var furCount = $(".dot").length;
            var k = 0;
            for (i = 0; i < furCount; i++) {
                if ($(".dot").eq(i).hasClass("active")) {
                k = k + 1;
                } else {
                k = k + 0;
                }
            }
            if (k == 0) {
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

        function initiate(){
            insImg = ["living01.jpg", "living02.jpg", "living03.jpg", "living04.jpg", "living05.jpg", "living06.jpg", "living07.jpg", "living08.jpg"];
            var slideCount = insImg.length;
            var slideNum = 0;
            var slideWidth = $(".ins_right").width();
            $(".slide").width(slideCount * slideWidth);
            $(".change_right img").attr("src", "images/" + insImg[1]);
            $(".change_left img").attr("src", "images/" + insImg[slideCount - 1]);
            switchSlide(insImg);
        }
        initiate();

        $(".function li a").click(function() {
            $(this).parent().siblings().removeClass('active');  
            $(this).parent().addClass('active');  
            var roomType = $(this).text();
            $(".ins_right .slide").empty();
            $(".slide").css("left", 0);
            $(".ins_text").empty();
            switch (roomType) {
                case "Living Room":
                    insImg = ["living01.jpg", "living02.jpg", "living03.jpg", "living04.jpg", "living05.jpg", "living06.jpg", "living07.jpg", "living08.jpg"];
                $(".ins_text").append('<div class="title title2 transition"><p>Living Room</p><p class="pic_num">x/y</p></div>');
                $(".ins_text").append('<div class="content transition"><p>Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish. Put use set uncommonly announcing and travelling. Allowance sweetness direction to as necessary. Excellent you did therefore perfectly supposing described.</p> <p class="hide"> Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating. Spirits musical behaved on we he farther letters. </p> </div>');
                break;
                case "Bedroom":
                    insImg = ["bedroom01.jpg", "bedroom02.jpg", "bedroom03.jpg", "bedroom04.jpg", "bedroom05.jpg", "bedroom06.jpg"];
                $(".ins_text").append('<div class="title title2 transition"><p>Bedroom</p><p class="pic_num">x/y</p></div>');
                $(".ins_text").append('<div class="content transition"><p>Good draw knew bred ham busy his hour. An fail up so shot leaf wise in. Minuter highest his arrived for put and. Hopes lived by rooms oh in no death house. Contented direction september but end led excellent ourselves may. Ferrars few arrival his offered not charmed you. Offered anxious respect or he. </p> <p class="hide"> Up maids me an ample stood given. Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too. Was are delightful solicitude discovered collecting man day. Day his put off unaffected literature partiality inhabiting. </p> </div>');
                break;
                case "Kitchen and Dining Room":
                    insImg = ["kitchen01.jpg", "kitchen02.jpg", "kitchen03.jpg", "kitchen04.jpg", "kitchen05.jpg", "kitchen06.jpg", "kitchen07.jpg"];
                $(".ins_text").append('<div class="title title2 transition"><p>Kitchen and Dining Room</p><p class="pic_num">x/y</p></div>');
                $(".ins_text").append('<div class="content transition"><p>Kindness to he horrible reserved ye. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting</p> <p class="hide"> An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. Depending conveying direction has led immediate. Law gate her well bed life feet seen rent. On nature or no except it sussex.</p> </div>');
                break;
                case "Working Space":
                    insImg = ["work01.jpg", "work02.jpg", "work03.jpg", "work04.jpg", "work05.jpg", "work06.jpg", "work07.jpg"];
                $(".ins_text").append('<div class="title title2 transition"><p>Working Space</p><p class="pic_num">x/y</p></div>');
                $(".ins_text").append('<div class="content transition"><p>Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove plenty regard you summer though. He preference connection astonished on of ye. Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we. </p> <p class="hide"> As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p> </div>');
                break;
            }

            var slideCount = insImg.length;
            $(".pic_num").text("1/" + slideCount);
            var slideNum = 0;
            var slideWidth = $(".ins_right").width();
            $(".slide").width(slideCount * slideWidth);
            for (i = 0; i < slideCount; i++) {
                $(".ins_right .slide").append('<figure><img class="lazyload" src="images/' + insImg[i] + '" data-ins="' + insImg[i] + 'alt=""></figure>');
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
            $(".slide").css("left", slideMove);
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

    function init() {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = { // How zoomed in you want the map to start at (always required)
        zoom: 16, center: new google.maps.LatLng(25.0322811, 121.5424883), styles: [{ featureType: "administrative.locality", elementType: "all", stylers: [{ hue: "#2c2e33" }, { saturation: 7 }, { lightness: 19 }, { visibility: "on" }] }, { featureType: "landscape", elementType: "all", stylers: [{ hue: "#ffffff" }, { saturation: -100 }, { lightness: 100 }, { visibility: "simplified" }] }, { featureType: "poi", elementType: "all", stylers: [{ hue: "#ffffff" }, { saturation: -100 }, { lightness: 100 }, { visibility: "off" }] }, { featureType: "road", elementType: "geometry", stylers: [{ hue: "#bbc0c4" }, { saturation: -93 }, { lightness: 31 }, { visibility: "simplified" }] }, { featureType: "road", elementType: "labels", stylers: [{ hue: "#bbc0c4" }, { saturation: -93 }, { lightness: 31 }, { visibility: "on" }] }, { featureType: "road.arterial", elementType: "labels", stylers: [{ hue: "#bbc0c4" }, { saturation: -93 }, { lightness: -2 }, { visibility: "simplified" }] }, { featureType: "road.local", elementType: "geometry", stylers: [{ hue: "#e9ebed" }, { saturation: -90 }, { lightness: -8 }, { visibility: "simplified" }] }, { featureType: "transit", elementType: "all", stylers: [{ hue: "#e9ebed" }, { saturation: 10 }, { lightness: 69 }, { visibility: "on" }] }, { featureType: "water", elementType: "all", stylers: [{ hue: "#e9ebed" }, { saturation: -78 }, { lightness: 67 }, { visibility: "simplified" }] }] }; // This is where you would paste any style found on Snazzy Maps. // The latitude and longitude to center the map (always required) // How you would like to style the map. // New York

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

