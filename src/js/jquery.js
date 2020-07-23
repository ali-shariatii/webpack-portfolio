import $ from 'jquery';

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


});