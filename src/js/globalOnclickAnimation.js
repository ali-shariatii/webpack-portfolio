import $ from 'jquery';
//import(/* webpackChunkName: 'jquery' */'jquery').then((jquery) => {

    //window.jQuery = jquery;
    //window.$ = jquery;
    
    $(document).ready(function() {
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
    });
//});