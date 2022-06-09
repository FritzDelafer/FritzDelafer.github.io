$(document).ready (function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');


        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }

    });

    $('a[href*="#"]').on('click', function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );
    });


    $(".img").click(function(){
        var path = $(this).attr('src');
        $(".popup img").attr('src', path);
        $(".popup").show();

    })

    document.querySelector('.popup span').onclick = () => {
        document.querySelector('.popup').style.display = 'none';
    }


});




