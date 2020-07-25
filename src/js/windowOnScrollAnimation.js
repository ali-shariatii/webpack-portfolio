

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
                testimonialsEnd = $('#testimonials-container').height();

            function globalScrollAnimation() {
                //large ultrawide monitors
                if (window.matchMedia("(min-width: 1300px) and (min-aspect-ratio: 21/9)").matches) {
        
                    //about section
                    if (scroll >= homeStart + homeEnd / 2) {
                        $("#about-grid-item-1 h4").addClass("left-slide-in");
                    };

                    if (scroll >= homeStart + homeEnd * 0.75) {
                        $("#highlights-grid-item-1").addClass("scale-in");
                        $("#highlights-grid-item-2").addClass("scale-in");
                        $("#highlights-grid-item-3").addClass("scale-in");
                    };

                    if (scroll >= homeStart + homeEnd * 1.1) {
                        $("#about-grid-item-3 p").addClass("appear-in");
                    };

                    if (scroll >= homeStart + homeEnd * 1.4) {
                        $("#about-grid-item-4").addClass("appear-in");
                    };

                    //work section
                    if (scroll >= aboutStart + aboutEnd * 0.6) {
                        $("#work-grid-item-1 h4").addClass("left-slide-in");
                    };

                    if (scroll >= aboutStart + aboutEnd * 0.85) {
                        $("#gallery-grid-item-1").addClass("scale-in");
                        $("#gallery-grid-item-2").addClass("scale-in");
                    };

                    //testimonials section
                    if (scroll >= workStart + workEnd / 2) {
                        $("#testimonials-grid-item-1 h4").addClass("left-slide-in");
                    };

                    if (scroll >= workStart + workEnd * .75) {
                        $("#recom-item-1").addClass("scale-in");
                        $("#recom-item-2").addClass("scale-in");
                        $("#recom-item-3").addClass("scale-in");
                    };

                    if (scroll >= workStart + workEnd * .85) {
                        $("#recom-item-4").addClass("appear-in");
                    };

                    //contact
                    if (scroll >= testimonialsStart + testimonialsEnd * .35) {
                        $("#contact-grid-item-1 h4").addClass("left-slide-in");
                    }

                    if (scroll >= testimonialsStart + testimonialsEnd * .6) {
                        $("#contact-grid-item-2").removeClass("init-scale-in").addClass("scale-in");
                    };

                } else if (window.matchMedia("(min-width: 1300px)").matches) {

                    //about section
                    if (scroll >= homeStart + homeEnd / 2) {
                        $("#about-grid-item-1 h4").addClass("left-slide-in");
                    };

                    if (scroll >= homeStart + homeEnd * .625) {
                        $("#highlights-grid-item-1").addClass("scale-in");
                        $("#highlights-grid-item-2").addClass("scale-in");
                        $("#highlights-grid-item-3").addClass("scale-in");
                    };

                    if (scroll >= homeStart + homeEnd * .75) {
                        $("#about-grid-item-3 p").addClass("appear-in");
                    };

                    if (scroll >= homeStart + homeEnd * .875) {
                        $("#about-grid-item-4").addClass("appear-in");
                    };

                    //work section
                    if (scroll >= aboutStart + aboutEnd / 2) {
                        $("#work-grid-item-1 h4").addClass("left-slide-in");
                    };

                    if (scroll >= aboutStart + aboutEnd * .7) {
                        $("#gallery-grid-item-1").addClass("scale-in");
                        $("#gallery-grid-item-2").addClass("scale-in");
                    };

                    //testimonials section
                    if (scroll >= workStart + workEnd / 2) {
                        $("#testimonials-grid-item-1 h4").addClass("left-slide-in");
                    };

                    if (scroll >= workStart + workEnd * .65) {
                        $("#recom-item-1").addClass("scale-in");
                        $("#recom-item-2").addClass("scale-in");
                        $("#recom-item-3").addClass("scale-in");
                    };

                    if (scroll >= workStart + workEnd * .75) {
                        $("#recom-item-4").addClass("appear-in");
                    };

                    //contact
                    if (scroll >= testimonialsStart + testimonialsEnd * .2) {
                        $("#contact-grid-item-1 h4").addClass("left-slide-in");
                    }

                    if (scroll >= testimonialsStart + testimonialsEnd * .4) {
                        $("#contact-grid-item-2").removeClass("init-scale-in").addClass("scale-in");
                    };
                }else {
                    //about section
                    $("#about-grid-item-1 h4").addClass("left-slide-in");
                    $("#highlights-grid-item-1").addClass("scale-in");
                    $("#highlights-grid-item-2").addClass("scale-in");
                    $("#highlights-grid-item-3").addClass("scale-in");
                    $("#about-grid-item-3 p").addClass("appear-in");
                    $("#about-grid-item-4").addClass("appear-in");
                    //work section
                    $("#work-grid-item-1 h4").addClass("left-slide-in");
                    $("#gallery-grid-item-1").addClass("scale-in");
                    $("#gallery-grid-item-2").addClass("scale-in");
                    //testimonials section
                    $("#testimonials-grid-item-1 h4").addClass("left-slide-in");
                    $("#recom-item-1").addClass("scale-in");
                    $("#recom-item-2").addClass("scale-in");
                    $("#recom-item-3").addClass("scale-in");
                    $("#recom-item-4").addClass("appear-in");
                    //contact
                    $("#contact-grid-item-1 h4").addClass("left-slide-in");
                    $("#contact-grid-item-2").removeClass("init-scale-in").addClass("scale-in");          
                }
            };

            globalScrollAnimation();
        });
    });
//});