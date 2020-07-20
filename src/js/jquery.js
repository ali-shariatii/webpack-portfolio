//  \_(o_o)_/


$(document).ready(function() {

    /* MEDIA WIDOW */

    /* NAVIGATION & GLOBAL ON-SCROLL ANIMATIONS */
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

        //global on-scroll animations + media queries

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

                //portrait smartphones
            } else if (window.matchMedia("(min-width: 10px) and (max-width: 1399.98px) and (min-aspect-ratio: 9/20) and (max-aspect-ratio: 57/100)").matches) {

                //about section
                if (scroll >= homeStart + homeEnd * 0.38) {
                    $("#about-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= homeStart + homeEnd * 0.7) {
                    $("#highlights-grid-item-1").addClass("scale-in");
                    $("#highlights-grid-item-2").addClass("scale-in");
                    $("#highlights-grid-item-3").addClass("scale-in");
                };

                if (scroll >= homeStart + homeEnd * 1.05) {
                    $("#about-grid-item-3 p").addClass("appear-in");
                };

                if (scroll >= homeStart + homeEnd * 1.33) {
                    $("#about-grid-item-4").addClass("appear-in");
                };

                //work section
                if (scroll >= aboutStart + aboutEnd / 2) {
                    $("#work-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= aboutStart + aboutEnd * .75) {
                    $("#gallery-grid-item-1").addClass("scale-in");
                    $("#gallery-grid-item-2").addClass("scale-in");
                };

                //testimonials section
                if (scroll >= workStart + workEnd * 0.35) {
                    $("#testimonials-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= workStart + workEnd * 0.55) {
                    $("#recom-item-1").addClass("scale-in");
                    $("#recom-item-2").addClass("scale-in");
                    $("#recom-item-3").addClass("scale-in");
                };

                if (scroll >= workStart + workEnd * 0.885) {
                    $("#recom-item-4").addClass("appear-in");
                };

                //contact
                if (scroll >= testimonialsStart + testimonialsEnd * .2) {
                    $("#contact-grid-item-1 h4").addClass("left-slide-in");
                }

                if (scroll >= testimonialsStart + testimonialsEnd * .4) {
                    $("#contact-grid-item-2").removeClass("init-scale-in").addClass("scale-in");
                };

                //landscape smartphones
            } else if (window.matchMedia("(min-width: 10px) and (max-width: 1399.98px) and (min-aspect-ratio: 175/100) and (max-aspect-ratio: 20/9)").matches) {

                //about section
                if (scroll >= homeStart + homeEnd * 0.35) {
                    $("#about-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= homeStart + homeEnd * 0.77) {
                    $("#highlights-grid-item-1").addClass("scale-in");
                    $("#highlights-grid-item-2").addClass("scale-in");
                    $("#highlights-grid-item-3").addClass("scale-in");
                };

                if (scroll >= homeStart + homeEnd * 1.25) {
                    $("#about-grid-item-3 p").addClass("appear-in");
                };

                if (scroll >= homeStart + homeEnd * 1.5) {
                    $("#about-grid-item-4").addClass("appear-in");
                };

                //work section
                if (scroll >= aboutStart + aboutEnd * 0.7) {
                    $("#work-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= aboutStart + aboutEnd * 0.9) {
                    $("#gallery-grid-item-1").addClass("scale-in");
                    $("#gallery-grid-item-2").addClass("scale-in");
                };

                //testimonials section
                if (scroll >= workStart + workEnd * 0.6) {
                    $("#testimonials-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= workStart + workEnd * 0.73) {
                    $("#recom-item-1").addClass("scale-in");
                    $("#recom-item-2").addClass("scale-in");
                    $("#recom-item-3").addClass("scale-in");
                };

                if (scroll >= workStart + workEnd * 0.83) {
                    $("#recom-item-4").addClass("appear-in");
                };

                //contact
                if (scroll >= testimonialsStart + testimonialsEnd * 0.65) {
                    $("#contact-grid-item-1 h4").addClass("left-slide-in");
                }

                if (scroll >= testimonialsStart + testimonialsEnd * 0.86) {
                    $("#contact-grid-item-2").removeClass("init-scale-in").addClass("scale-in");
                };

                //portrait medium & small tablets
            } else if (window.matchMedia("(min-width: 10px) and (max-width: 767.98px) and (min-aspect-ratio: 6/10) and (max-aspect-ratio: 3/4)").matches) {

                //about section
                if (scroll >= homeStart + homeEnd * 0.11) {
                    $("#about-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= homeStart + homeEnd * 0.38) {
                    $("#highlights-grid-item-1").addClass("scale-in");
                    $("#highlights-grid-item-2").addClass("scale-in");
                    $("#highlights-grid-item-3").addClass("scale-in");
                };

                if (scroll >= homeStart + homeEnd * 0.67) {
                    $("#about-grid-item-3 p").addClass("appear-in");
                };

                if (scroll >= homeStart + homeEnd * 0.86) {
                    $("#about-grid-item-4").addClass("appear-in");
                };

                //work section
                if (scroll >= aboutStart + aboutEnd * 0.23) {
                    $("#work-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= aboutStart + aboutEnd * 0.48) {
                    $("#gallery-grid-item-1").addClass("scale-in");
                    $("#gallery-grid-item-2").addClass("scale-in");
                };

                //testimonials section
                if (scroll >= workStart + workEnd * 0.1) {
                    $("#testimonials-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= workStart + workEnd * 0.29) {
                    $("#recom-item-1").addClass("scale-in");
                    $("#recom-item-2").addClass("scale-in");
                    $("#recom-item-3").addClass("scale-in");
                };

                if (scroll >= workStart + workEnd * 0.58) {
                    $("#recom-item-4").addClass("appear-in");
                };

                //contact
                if (scroll >= workStart + workEnd * 0.78) {
                    $("#contact-grid-item-1 h4").addClass("left-slide-in");
                }

                if (scroll >= workStart + workEnd * 0.88) {
                    $("#contact-grid-item-2").removeClass("init-scale-in").addClass("scale-in");
                };

                //portrait large tablets
            } else if (window.matchMedia("(min-width: 767.98px) and (max-width: 1399.98px) and (min-aspect-ratio: 6/10) and (max-aspect-ratio: 3/4)").matches) {

                //about section
                if (scroll >= homeStart + homeEnd * 0.15) {
                    $("#about-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= homeStart + homeEnd * 0.25) {
                    $("#highlights-grid-item-1").addClass("scale-in");
                    $("#highlights-grid-item-2").addClass("scale-in");
                    $("#highlights-grid-item-3").addClass("scale-in");
                };

                if (scroll >= homeStart + homeEnd * 0.35) {
                    $("#about-grid-item-3 p").addClass("appear-in");
                };

                if (scroll >= homeStart + homeEnd * 0.55) {
                    $("#about-grid-item-4").addClass("appear-in");
                };

                //work section
                if (scroll >= homeStart + homeEnd * 0.81) {
                    $("#work-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= aboutStart + aboutEnd * 0.15) {
                    $("#gallery-grid-item-1").addClass("scale-in");
                    $("#gallery-grid-item-2").addClass("scale-in");
                };

                //testimonials section
                if (scroll >= aboutStart + aboutEnd * 0.42) {
                    $("#testimonials-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= aboutStart + aboutEnd * 0.63) {
                    $("#recom-item-1").addClass("scale-in");
                    $("#recom-item-2").addClass("scale-in");
                    $("#recom-item-3").addClass("scale-in");
                };

                if (scroll >= aboutStart + aboutEnd * 0.7) {
                    $("#recom-item-4").addClass("appear-in");
                };

                //contact
                if (scroll >= aboutStart + aboutEnd * 0.93) {
                    $("#contact-grid-item-1 h4").addClass("left-slide-in");
                }

                if (scroll >= workStart + workEnd * 0.35) {
                    $("#contact-grid-item-2").removeClass("init-scale-in").addClass("scale-in");
                };

                //landscape medium & small tablets
            } else if (window.matchMedia("(min-width: 10px) and (max-width: 1024.98px) and (min-aspect-ratio: 4/3) and (max-aspect-ratio: 17/10)").matches) {

                //about section
                if (scroll >= homeStart + homeEnd * 0.15) {
                    $("#about-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= homeStart + homeEnd * 0.25) {
                    $("#highlights-grid-item-1").addClass("scale-in");
                    $("#highlights-grid-item-2").addClass("scale-in");
                    $("#highlights-grid-item-3").addClass("scale-in");
                };

                if (scroll >= homeStart + homeEnd * 0.5) {
                    $("#about-grid-item-3 p").addClass("appear-in");
                };

                if (scroll >= homeStart + homeEnd * 0.65) {
                    $("#about-grid-item-4").addClass("appear-in");
                };

                //work section
                if (scroll >= aboutStart + aboutEnd * 0.25) {
                    $("#work-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= aboutStart + aboutEnd * 0.4) {
                    $("#gallery-grid-item-1").addClass("scale-in");
                    $("#gallery-grid-item-2").addClass("scale-in");
                };

                //testimonials section
                if (scroll >= aboutStart + aboutEnd * 0.77) {
                    $("#testimonials-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= workStart + workEnd * 0.1) {
                    $("#recom-item-1").addClass("scale-in");
                    $("#recom-item-2").addClass("scale-in");
                    $("#recom-item-3").addClass("scale-in");
                };

                if (scroll >= workStart + workEnd * 0.19) {
                    $("#recom-item-4").addClass("appear-in");
                };

                //contact
                if (scroll >= workStart + workEnd * 0.6) {
                    $("#contact-grid-item-1 h4").addClass("left-slide-in");
                }

                if (scroll >= workStart + workEnd * 0.75) {
                    $("#contact-grid-item-2").removeClass("init-scale-in").addClass("scale-in");
                };

                //landscape large tablets
            } else if (window.matchMedia("(min-width: 1025px) and (max-width: 1399.98px) and (min-aspect-ratio: 4/3) and (max-aspect-ratio: 17/10)").matches) {

                //about section
                if (scroll >= homeStart + homeEnd * 0.2) {
                    $("#about-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= homeStart + homeEnd * 0.35) {
                    $("#highlights-grid-item-1").addClass("scale-in");
                    $("#highlights-grid-item-2").addClass("scale-in");
                    $("#highlights-grid-item-3").addClass("scale-in");
                };

                if (scroll >= homeStart + homeEnd * 0.45) {
                    $("#about-grid-item-3 p").addClass("appear-in");
                };

                if (scroll >= homeStart + homeEnd * 0.55) {
                    $("#about-grid-item-4").addClass("appear-in");
                };

                //work section
                if (scroll >= homeStart + homeEnd * 0.95) {
                    $("#work-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= aboutStart + aboutEnd * 0.15) {
                    $("#gallery-grid-item-1").addClass("scale-in");
                    $("#gallery-grid-item-2").addClass("scale-in");
                };

                //testimonials section
                if (scroll >= aboutStart + aboutEnd * 0.7) {
                    $("#testimonials-grid-item-1 h4").addClass("left-slide-in");
                };

                if (scroll >= aboutStart + aboutEnd * 0.85) {
                    $("#recom-item-1").addClass("scale-in");
                    $("#recom-item-2").addClass("scale-in");
                    $("#recom-item-3").addClass("scale-in");
                };

                if (scroll >= aboutStart + aboutEnd * 0.97) {
                    $("#recom-item-4").addClass("appear-in");
                };

                //contact
                if (scroll >= workStart + workEnd * 0.35) {
                    $("#contact-grid-item-1 h4").addClass("left-slide-in");
                }

                if (scroll >= workStart + workEnd * 0.75) {
                    $("#contact-grid-item-2").removeClass("init-scale-in").addClass("scale-in");
                };

            } else {
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
            }
        };

        globalScrollAnimation();
    });

    //on click functions
    $(function() {
        $("#nav-item-2 ul a, #nav-item-4 ul a").click(function() {
            $("html, body").animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 800);
        });
    });

    $(function() {
        $(".logoPointer").click(function() {
            $("html, body").animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 800);
        });
    });

    //hamburger/dropdown menu
    $("#nav-item-4 ul li").click(function() {
        $("#nav-item-4").removeClass("unhidden-dropdown").addClass("hidden-dropdown");
        $("#hamburgerLine1").addClass("animateTimesLine1").removeClass("animateHamburgerLine1");
        $("#hamburgerLine2").addClass("animateTimesLine2").removeClass("animateHamburgerLine2");
        $("#nav-grid").addClass("shadow-filter-effect");
    });

    $(window).on('resize', function() {
        var win = $(this);
        if (win.width() > 991.98) { /*set this number to a size that hamburger menu is set to display none*/
            $("#nav-item-4").removeClass("unhidden-dropdown").addClass("hidden-dropdown");
            $("#hamburgerLine1").removeClass("animateHamburgerLine1 animateTimesLine1");
            $("#hamburgerLine2").removeClass("animateHamburgerLine2 animateTimesLine2");
            $("#nav-grid").addClass("shadow-filter-effect");
        }
    });

    /* SECTION 1: HOME / LANDING PAGE */

    /* SECTION 2: ABOUT */

    /* SECTION 3: WORK */

    /* SECTION 4: TESTIMONIALS */

    /* SECTION 5: CONTACT */

    /* SECTION 6: FOOTER */


});