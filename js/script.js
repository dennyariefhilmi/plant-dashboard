$(document).ready(() => {
    $('.menu').click(() => {
        $('.menu-wrapper').addClass('active')
    })

    $('.nav-btn-close').click(() => {
        $('.menu-wrapper').removeClass('active')
    })


})

$(document).ready(function () {
    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active')
        $(this).addClass('active')
        $('.menu-wrapper').removeClass('active')
    })

})

$(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
        $('.navbar').addClass('active')
    } else {
        $('.navbar').removeClass('active')
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000
    }

});
