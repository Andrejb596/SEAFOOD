$(function () {

    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./images/prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./images/next.svg" alt="prev"></button>',
        fade: true,
        responsive: [
            {
                breakpoint: 381,
                settings: {
                    dots: false,
                    arrows: false,
                    autoplay: true,
                    autoplayspeed: 2000,
                }
            }
        ]
    });

    $('.product__name').slick({
        slidesToShow: 4.6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="./images/product-prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="product-next"><img src="./images/product-next.svg" alt="prev"></button>',
        centerMode: true,
        responsive: [
            {
                breakpoint: 930,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ],    

    });

    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false,
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

});

