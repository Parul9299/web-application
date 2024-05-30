// =====================sidebar==========================

$(document).on('click', '.menu_open', function () {
    $('.sidebar_links').css({
        display: 'flex',
    })
});

$(document).on('click', '.menu_close', function () {
    $('.sidebar_links').css({
        display: 'none',
    })
});

// =========scroll navbar===========//

let header = document.querySelector('header')
window.addEventListener('scroll', function () {
    if (window.scrollY >= 80) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
});

// =====================testimonial======================

$(document).on('mouseenter', '.person_1', function () {
    $('.person_1').addClass('hover-effect');
    $('.person_2').addClass('hover-effect-more');
    $('.person_3').addClass('hover-effect-most');
    // $('.content_img').fadeOut();
});

$(document).on('mouseleave', '.person_1', function () {
    $('.person_1').removeClass('hover-effect');
    $('.person_2').removeClass('hover-effect-more');
    $('.person_3').removeClass('hover-effect-most');
    // $('.content_img').fadeIn();
});

$(document).on('mouseenter', '.person_2', function () {
    $('.person_2').addClass('hover-effect');
    $('.person_1').addClass('hover-effect-more');
    $('.person_3').addClass('hover-effect-more');
    // $('.content_img').fadeOut();
});

$(document).on('mouseleave', '.person_2', function () {
    $('.person_2').removeClass('hover-effect');
    $('.person_1').removeClass('hover-effect-more');
    $('.person_3').removeClass('hover-effect-more');
    // $('.content_img').fadeIn();
});

$(document).on('mouseenter', '.person_3', function () {
    $('.person_3').addClass('hover-effect');
    $('.person_2').addClass('hover-effect-more');
    $('.person_1').addClass('hover-effect-most');
    // $('.content_img').fadeOut();
});

$(document).on('mouseleave', '.person_3', function () {
    $('.person_3').removeClass('hover-effect');
    $('.person_2').removeClass('hover-effect-more');
    $('.person_1').removeClass('hover-effect-most');
    // $('.content_img').fadeIn();
});