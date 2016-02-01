// Меню

$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:-125 });
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


$('.portfolio-slider').slick({
    arrows: false,
    autoplay: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.slider-nav.prev').click(function(){
    $('.portfolio-slider').slick('slickPrev');
});

$('.slider-nav.next').click(function(){
    $('.portfolio-slider').slick('slickNext');
});


// Modal Gallery

$('.thumb').click(function (event) {
    event.preventDefault();
    var arr = '.' + $(this).attr("data-target");
    var box = $(this).closest('.specification-gallery');

    console.log(arr);
    console.log(box);

    box.find('.image-large-item').hide();
    box.find(arr).show();
    box.find('.thumb').removeClass('active');
    $(this).addClass('active');
});

ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [43.1625,131.9524],
        zoom: 17,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark([43.1625,131.9524], {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [47, 69],
        iconImageOffset: [-23, -70]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.geoObjects.add(myPlacemark);
}