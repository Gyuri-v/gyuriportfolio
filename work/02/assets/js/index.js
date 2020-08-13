$(document).ready(function(){
    //AOS 
    AOS.init();
    
    //NICE SELECT
    $('select').niceSelect();
    
    
    //header 네비게이션 스크롤  
    var navOffset = $('.header_con').offset();
    $(window).scroll(function(){
        if( $(document).scrollTop() > navOffset.top ){
            $('.header_con').addClass('header_fixed');
        }
        else{
            $('.header_con').removeClass('header_fixed');
        }
    })
    
    //header 네비게이션 호버시 sub_menu 생성
    $('.main_menu > li').hover(function(){
        $('.menu_bg').stop().animate({height:'380px'},300).addClass('on');
        $('.sub_menu').stop().animate({height:'380px'},300);
    },function(){
        $('.menu_bg').stop().animate({height:'0'},300).addClass('on');
        $('.sub_menu').stop().animate({height:'0'},300);
    })
    
    
    
    
    //VISUAL slide
    var swiper = new Swiper('.visual.swiper-container', {
      loop : true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.visual .swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.visual .swiper-button-next',
        prevEl: '.visual .swiper-button-prev',
      },
    });
    
    
    
    
    //NOTICE slide
    var swiper = new Swiper('.notice .swiper-container', {
      direction: 'vertical',
      loop : true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
    
    //NOTICE CARD_CON toggle
    $('.card .inner a').click(function(){
        $('.card_con').stop().slideToggle();
        
        
    //NOTICE CARD slide
        var swiper = new Swiper('.card_con .swiper-container', {
          slidesPerView: 3,
          spaceBetween: 30,
          loop : true,
          pagination: {
            el: '.card_con .swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.card_con .swiper-button-next',
            prevEl: '.card_con .swiper-button-prev',
          },
        });
        
    })    
    
    
    
    
    
    //NEW MENU slide 
    var swiper = new Swiper('.main_new .swiper-container.new_slide1', {
          slidesPerView: 1.5,
          spaceBetween: 30,
          loop : true,
          pagination: {
            el: '.slide1_nav .swiper-pagination',
            type: 'fraction',
          },
            navigation: {
            nextEl: '.slide1_nav .swiper-button-next',
            prevEl: '.slide1_nav .swiper-button-prev',
          },
          observer: true,
          observeParents: true,
        });
    var swiper = new Swiper('.main_new .swiper-container.new_slide2', {
          slidesPerView: 1.5,
          spaceBetween: 30,
          loop : true,
          pagination: {
            el: '.slide2_nav .swiper-pagination',
            type: 'fraction',
          },
            navigation: {
            nextEl: '.slide2_nav .swiper-button-next',
            prevEl: '.slide2_nav .swiper-button-prev',
          },
          observer: true,
          observeParents: true,
        });
    var swiper = new Swiper('.main_new .swiper-container.new_slide3', {
          slidesPerView: 1.5,
          spaceBetween: 30,
          loop : true,
          pagination: {
            el: '.slide3_nav .swiper-pagination',
            type: 'fraction',
          },
            navigation: {
            nextEl: '.slide3_nav .swiper-button-next',
            prevEl: '.slide3_nav .swiper-button-prev',
          },
          observer: true,
          observeParents: true,
        });
    
    
    //NEW MENU CONTROL toggle
    $('.new_slide_label').click(function(){
        $('.new_slide_type').slideToggle();
    });
    
    
    //NEW MENU CONTROL slide_type 선택
    $('.new_slide_type a').click(function(){
        $('.new_slide_type').slideUp();
        
        //버튼 글씨
        $('.new_slide_label button').text($(this).text());
        
        idx = $(this).index() + 1;
        //슬라이드
        $('.new_slide1, .new_slide2, .new_slide3').removeClass('on');
        $('.new_slide' + idx).addClass('on');
        
        //네비게이션
        $('.slide1_nav, .slide2_nav, .slide3_nav').removeClass('on');
        $('.slide' + idx + '_nav').addClass('on');
        
        //배너
        $('.new_slide_banner>img').attr('src','assets/img/banner/bn_new_slide' + idx + '.jpg')
    });
    
    //NEW MENU text effet
    $(window).scroll(function(){
        sc_t = $('.main_notice').offset().top - 300;
        sc_h = $(this).scrollTop();
        
        if( sc_h >= sc_t ){
            $('.tit').addClass('on').fitText(0.5).textillate({ in: {  effect: 'flipInY',  delay: 200  }});
        }
    })

    
    
    //EVENT slide
    
    var swiper = new Swiper('.main_event .swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      loop : true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.main_event .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.main_event .swiper-button-next',
        prevEl: '.main_event .swiper-button-prev',
      },
    });

    
})
