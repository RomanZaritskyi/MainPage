$(document).ready(function () {


    $('.carusel').slick({
        mobileFirst: true,
    })

    $('.multiple-slider').slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,
        speed: 900,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    });
})


