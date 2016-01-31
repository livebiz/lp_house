// Меню

$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:-140 });
    return false;
});

$(function($){
    var topnav = $('.top');
    var label = $('.label');
    $h = label.offset().top;

    $(window).scroll(function(){
        // Если прокрутили скролл ниже макушки блока, включаем фиксацию

        if ( $(window).scrollTop() > $h) {
            topnav.addClass('fix-top');
        }else{
            //Иначе возвращаем всё назад. Тут вы вносите свои данные
            topnav.removeClass('fix-top');
        }
    });
});


//  Modal

$(".btn-modal").fancybox({
    'padding'    : 0,
    'tpl'        : {
        closeBtn : '<a title="Close" class="btn_close" href="javascript:;"></a>'
    }
});