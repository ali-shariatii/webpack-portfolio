
import $ from 'jquery';
//import(/* webpackChunkName: 'jquery' */'jquery').then((jquery) => {
//window.jQuery = jquery;
//window.$ = jquery;
$(document).ready(function() {

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
});
//});

var hamburgerLine1 = document.getElementById("hamburgerLine1"),
    hamburgerLine2 = document.getElementById("hamburgerLine2"),
    hamburgerContainer = document.getElementById("hamburger-menu-container"),
    dropDownMenu = document.getElementById("nav-item-4"),
    navGrid = document.getElementById("nav-grid");

hamburgerContainer.onclick = function() {

    if (hamburgerLine1.classList.contains("animateHamburgerLine1") && hamburgerLine2.classList.contains("animateHamburgerLine2")) {
        hamburgerLine1.classList.replace("animateHamburgerLine1", "animateTimesLine1");
        hamburgerLine2.classList.replace("animateHamburgerLine2", "animateTimesLine2");
        dropDownMenu.classList.replace("unhidden-dropdown", "hidden-dropdown");
        navGrid.classList.add("shadow-filter-effect");
    } else if (hamburgerLine1.classList.contains("animateTimesLine1") && hamburgerLine2.classList.contains("animateTimesLine2")) {
        hamburgerLine1.classList.replace("animateTimesLine1", "animateHamburgerLine1");
        hamburgerLine2.classList.replace("animateTimesLine2", "animateHamburgerLine2");
        dropDownMenu.classList.replace("hidden-dropdown", "unhidden-dropdown");
        navGrid.classList.remove("shadow-filter-effect");
    } else {
        hamburgerLine1.classList.add("animateHamburgerLine1");
        hamburgerLine2.classList.add("animateHamburgerLine2");
        dropDownMenu.classList.replace("hidden-dropdown", "unhidden-dropdown");
        navGrid.classList.remove("shadow-filter-effect");
    }
};

