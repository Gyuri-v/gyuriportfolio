$(document).ready(function(){
    //
    AOS.init();
    
    
    //header event
    var screenWidth = $(window).width();
    
    if( screenWidth > 768){
      // store hover event
        $('.store').hover(function(){
            $('.manu_bg').stop().animate({height:'380px'},300);
            $('.nav_store').stop().animate({height:'380px'},300);
        },function(){
            $('.manu_bg').stop().animate({height:'0'},300);
            $('.nav_store').stop().animate({height:'0'},300);
        })
    }
    if( screenWidth <= 768){
      // nav click event
        $('.btn_nav').click(function(){
            if( $(this).hasClass('on_m')){
                $('.btn_nav').removeClass('on_m');
                $('body').css({overflow:'auto'})
                $('.gnb').animate({left:'-100%'});
            }
            else{
                $('.btn_nav').addClass('on_m');
                $('body').css({overflow:'hidden'})
                $('.gnb').animate({left:'0'});
                $('.left_nav').animate({marginLeft:'0'},300);
                $('.right_nav').animate({marginLeft:'0'},300);
                $('.nav_store').fadeOut();
            }
        })
        
      // nav store event
        $('.nav_store').hide();
        $('.store>a').click(function(){
            $('.left_nav').animate({marginLeft:'100%'},300);
            $('.right_nav').animate({marginLeft:'100%'},300);
            $('.nav_store').fadeIn();
        })
        $('.s_m_tit').click(function(){
            $('.left_nav').animate({marginLeft:'0'},300);
            $('.right_nav').animate({marginLeft:'0'},300);
            $('.nav_store').fadeOut();
        })
    }
    
    //main_best - slide
    var swiper = new Swiper('.main_best .swiper-container', {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      scrollbar: {
        el: '.main_best .swiper-scrollbar',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      }
    });
    
    //main_col2 scroll event
    $(window).scroll(function(){
        if($(document).scrollTop()+500 >= $('.main_col2').offset().top){
            gsap.to(".main_col2 .col2_left_img", 0.5, { marginLeft : 0, opacity : 1 } );
            gsap.to(".main_col2 .txt_wrap h3", 0.6, { marginLeft : 0, opacity : 1 } );
            gsap.to(".main_col2 .txt_wrap p", 0.7, { marginLeft : 0, opacity : 1 } );
            gsap.to(".main_col2 .txt_wrap .more", 0.8, { marginLeft : 0, opacity : 1 } );
            gsap.to(".main_col2 .col2_right_img .img_wrap", 1, { marginLeft : 0, opacity : 1, } );
        }
    })
    
    
    //main_frag - ripples plugin
    $('.main_frag .bg_con').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 1,
    });
    try {

		$('.main_frag .bg_con').ripples({
			resolution: 128,
			dropRadius: 10, //px
			perturbance: 0.04,
			interactive: false
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}

	$('.js-ripples-disable').on('click', function() {
		$('.main_frag .bg_con').ripples('destroy');
		$(this).hide();
	});

	$('.js-ripples-play').on('click', function() {
		$('.main_frag .bg_con').ripples('play');
	});

	$('.js-ripples-pause').on('click', function() {
		$('.main_frag .bg_con').ripples('pause');
	});

	   // Automatic drops
	setInterval(function() {
		var $el = $('.main_frag .bg_con');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.04 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 400);
    
    
    //main_gift scroll event   
    if ( screenWidth > 1024 ){
        $(window).scroll(function(){
            if($(document).scrollTop()+600 >= $('.main_gift').offset().top){
                $('.main_gift .list1').css({transform: 'translateY(-'+($(window).scrollTop()/50-100)+'%)'});
                $('.main_gift .list2').css({transform: 'translateY(-'+($(window).scrollTop()/50-110)+'%)'});
                $('.main_gift .list3').css({transform: 'translateY(-'+($(window).scrollTop()/50-100)+'%)'});
            }
        })  
    }
    
    
})