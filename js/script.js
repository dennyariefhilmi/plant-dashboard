$(document).ready(() => {
    $('.menu').click(() => {
        $('.menu-wrapper').addClass('active')
    })

    $('.nav-btn-close').click(() => {
        $('.menu-wrapper').removeClass('active')
    })

    $('.btn-card-product').click((e) => {
        alert('Terimakasih sudah order😃')
        e.preventDefault()
    })

    $('.btn-contact').click((e) => {
        alert('Email anda telah terkirim😃')
        e.preventDefault()
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

var swiper = new Swiper(".mySwiperProduct", {
    slidesPerView: 4,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
        disabledClass: "bxs-chevron-circle-disable"
    },
    breakpoints: {
        320: {
            spaceBetween: 20,
            slidesPerView: "auto",
            centeredSlides: true,
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        1200: {
            spaceBetween: 40,
            slidesPerView: 4,
        }
    }
});

var swiper = new Swiper(".mySwiperTesti", {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000
    }
});
