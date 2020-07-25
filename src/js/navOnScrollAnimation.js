
import $ from 'jquery';
//import(/* webpackChunkName: 'jquery' */'jquery').then((jquery) => {
//window.jQuery = jquery;
//window.$ = jquery;

$(document).ready(function() {

    // navbar on scroll functions
    $(window).scroll(function() {

        var scroll = $(window).scrollTop(),

            homeStart = $('#home-grid').offset().top,
            homeEnd = $('#home-grid').height(),

            aboutStart = $('#about-container').offset().top,
            aboutEnd = $('#about-container').height(),

            workStart = $('#work-container').offset().top,
            workEnd = $('#work-container').height(),

            testimonialsStart = $('#testimonials-container').offset().top,
            testimonialsEnd = $('#testimonials-container').height(),

            contactStart = $('#contact-container').offset().top;
        //var contactEnd = $('#contact-grid').height();

        if (scroll <= homeStart + homeEnd) {
            $("#nav-grid").removeClass("dark-colored-navbar fixed-nav").addClass("hidden-fixed-nav shadow-filter-effect");
            $("#nav-item-4").removeClass("dark-colored-navbar unhidden-dropdown").addClass("hidden-dropdown");
            $("#hamburgerLine1").addClass("animateTimesLine1").removeClass("animateHamburgerLine1");
            $("#hamburgerLine2").addClass("animateTimesLine2").removeClass("animateHamburgerLine2");
            $("ul li a.active-tab").removeClass('active-tab');
            $('#home-tab').addClass('active-tab');
            $("#home-tab-min").addClass('active-tab');
        }

        if (scroll >= homeEnd && scroll < aboutStart + aboutEnd) {
            $("#nav-grid").removeClass("dark-colored-navbar hidden-fixed-nav").addClass("light-colored-navbar fixed-nav shadow-filter-effect");
            $("#nav-item-4").removeClass("dark-colored-navbar").addClass("light-colored-navbar");
            $("ul li a.active-tab").removeClass('active-tab');
            $('#about-tab').addClass('active-tab');
            $("#about-tab-min").addClass('active-tab');
        }

        if (scroll >= aboutStart + aboutEnd && scroll <= workStart + workEnd) {
            $("#nav-grid").removeClass("light-colored-navbar hidden-fixed-nav").addClass("dark-colored-navbar fixed-nav shadow-filter-effect");
            $("#nav-item-4").removeClass("light-colored-navbar").addClass("dark-colored-navbar ");
            $("ul li a.active-tab").removeClass('active-tab');
            $("#work-tab").addClass('active-tab');
            $("#work-tab-min").addClass('active-tab');
        }

        if (scroll >= testimonialsStart && scroll <= testimonialsStart + testimonialsEnd) {
            $("#nav-grid").removeClass("dark-colored-navbar hidden-fixed-nav").addClass("light-colored-navbar fixed-nav shadow-filter-effect");
            $("#nav-item-4").removeClass("dark-colored-navbar").addClass("light-colored-navbar");
            $("ul li a.active-tab").removeClass('active-tab');
            $("#testimonials-tab").addClass('active-tab');
            $("#testimonials-tab-min").addClass('active-tab');
        }

        if (scroll >= contactStart) {
            $("#nav-grid").removeClass("light-colored-navbar hidden-fixed-nav").addClass("dark-colored-navbar fixed-nav shadow-filter-effect");
            $("#nav-item-4").removeClass("light-colored-navbar").addClass("dark-colored-navbar");
            $("ul li a.active-tab").removeClass('active-tab');
            $("#contact-tab").addClass('active-tab');
            $("#contact-tab-min").addClass('active-tab');
        }

        var scrollBottom = $(window).scrollTop() + $(window).height();
        var footerBottom = $('#footer-wrapper').offset().top + $('#footer-wrapper').height();

        if (scrollBottom > footerBottom) {
            $("#nav-grid").removeClass("light-colored-navbar hidden-fixed-nav").addClass("dark-colored-navbar fixed-nav shadow-filter-effect");
            $("#nav-item-4").removeClass("light-colored-navbar").addClass("dark-colored-navbar");
            $("ul li a.active-tab").removeClass('active-tab');
            $("#contact-tab").addClass('active-tab');
            $("#contact-tab-min").addClass('active-tab');
        }

    });

});

//});