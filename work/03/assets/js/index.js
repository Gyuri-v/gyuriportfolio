$(document).ready(function(){
    
    //plugin - aos 
    AOS.init();
    
    //header scroll event
    var headerOffset = $('.header').offset();
    
    $(window).scroll(function(){
        if($(document).scrollTop() > headerOffset.top){
            $('.header').addClass('on');
            $('.header .gnb h1 a').css({'background': 'url(assets/img/logo/logo_black.svg) no-repeat', 'background-size': '100%', 'background-position' : 'center'})
            $('.btn_cart img').attr('src','assets/img/icon/btn_cart_black.svg');
            $('.btn_user img').attr('src','assets/img/icon/btn_user_black.svg');
            $('.btn_nav img').attr('src','assets/img/icon/btn_nav_black.svg');
        }
        else{
            $('.header').removeClass('on');
            $('.header .gnb h1 a').css({'background': 'url(assets/img/logo/logo_white.svg) no-repeat', 'background-size': '100%', 'background-position' : 'center'})
            $('.btn_cart img').attr('src','assets/img/icon/btn_cart_white.svg');
            $('.btn_user img').attr('src','assets/img/icon/btn_user_white.svg');
            $('.btn_nav img').attr('src','assets/img/icon/btn_nav_white.svg');
        }
    })
    
    //navigation toggle
    $('.btn_nav').click(function(){
        $('.nav').animate({right : '0'})
        $('body').css({overflow : 'hidden'})
    })
    $('.close').click(function(){
        $('.nav').animate({right : '-100%'})
        $('body').css({overflow : 'auto'})
    })
    
    //navigation sub menu accordian
    $('.tit_menu>li').click(function(){
//        $(this).children('.sub_menu').slideToggle();
        var subHight = $(this).find('.sub_menu ul').outerHeight();
        
        if( $(this).hasClass('on') ){
            $(this).removeClass('on');
            $(this).children('.sub_menu').css({height : 0});
        }
        else{
            $(this).addClass('on');
            $(this).children('.sub_menu').css({height : subHight});
        }
    })
    
    
    //main_vis slide
    var mySwiper = new Swiper('.main_vis .swiper-container', {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.main_vis .swiper-pagination',
      },
      navigation: {
        nextEl: '.main_vis .swiper-button-next',
        prevEl: '.main_vis .swiper-button-prev',
      },
    })
    
    //main_best slide-nav
     var swiper = new Swiper('.main_best .slide_nav .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
    });
    
    $('.main_best .swiper-slide').click(function(){
        $(this).addClass('on');
        $(this).siblings('div').removeClass('on');
        
        idx = $(this).index() + 1;
        $('.slide1, .slide2, .slide3, .slide4, .slide5, .slide6').removeClass('on');
        $('.slide' + idx).addClass('on');
    })
    
    //main_best best_con slide
     var swiper = new Swiper('.main_best .best_con .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        observer: true,
        observeParents: true,
    });
    
    
    //main_event slide
    var mySwiper = new Swiper('.main_event .swiper-container', {
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.main_event .swiper-pagination',
      },
      navigation: {
        nextEl: '.main_event .swiper-button-next',
        prevEl: '.main_event .swiper-button-prev',
      },
    })
    
    //main_category
    $(window).scroll(function(){
        if($(document).scrollTop()+800 >= $('.main_cat ul li').offset().top){
            $('.main_cat ul li span').css({transform: 'translateY('+($(window).scrollTop()/160-30)+'%)'});
        }
    })
    
    //main_brand txt moving
    var controller = new ScrollMagic.Controller();

    //brand_story
    var tween1 = TweenMax.to('.brand_story strong', 0.5, {
        left: 130
    });
    var scene = new ScrollMagic.Scene({
        triggerElement: ".brand_story",
        duration: "100%",
        offset : -200,
        })
        .setTween(tween1)
        .addTo(controller)
    //    .addIndicators({
    //        name: "1"
    //    }) 

    //brand_visual
    var tween2 = TweenMax.to('.brand_visual strong', 0.5, {
        right: 130
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: ".brand_visual",
        duration: "100%",
        offset : -200,
        })
        .setTween(tween2)
        .addTo(controller)
    //    .addIndicators({
    //        name: "1"
    //    })

})