
//modal1 var
var modalOpener1 = document.getElementById("modalOpener1"),
    modalCloser1 = document.getElementById("modalCloser1"),
    modalContentWindow1 = document.getElementById("modalContentWindow1"),
    modalFullWindow1 = document.getElementById("modalFullWindow1");

//modal2 var
var modalOpener2 = document.getElementById("modalOpener2"),
    modalCloser2 = document.getElementById("modalCloser2"),
    modalContentWindow2 = document.getElementById("modalContentWindow2"),
    modalFullWindow2 = document.getElementById("modalFullWindow2");

//modal1 func
modalOpener1.onclick = function() {
    modalFullWindow1.classList.remove("full-window-disappear");
    modalContentWindow1.classList.remove("content-window-disappear");
    modalFullWindow1.classList.add("full-window-appear");
    modalContentWindow1.classList.add("content-window-appear");
    document.body.classList.add("noscroll");
    document.body.classList.remove("noscroll-x");
};

modalCloser1.onclick = function() {
    modalFullWindow1.classList.remove("full-window-appear");
    modalContentWindow1.classList.remove("content-window-appear");
    modalContentWindow1.classList.add("content-window-disappear");
    modalFullWindow1.classList.add("full-window-disappear");
    document.body.classList.remove("noscroll");
    document.body.classList.add("noscroll-x");
};

//modal2 func
modalOpener2.onclick = function() {
    modalFullWindow2.classList.remove("full-window-disappear");
    modalContentWindow2.classList.remove("content-window-disappear");
    modalFullWindow2.classList.add("full-window-appear");
    modalContentWindow2.classList.add("content-window-appear");
    document.body.classList.add("noscroll");
    document.body.classList.remove("noscroll-x");
};

modalCloser2.onclick = function() {
    modalFullWindow2.classList.remove("full-window-appear");
    modalContentWindow2.classList.remove("content-window-appear");
    modalContentWindow2.classList.add("content-window-disappear");
    modalFullWindow2.classList.add("full-window-disappear");
    document.body.classList.remove("noscroll");
    document.body.classList.add("noscroll-x");
};

//close all modals on window click
window.onclick = function(event) {
    if (event.target == modalFullWindow1) {
        modalFullWindow1.classList.remove("full-window-appear");
        modalContentWindow1.classList.remove("content-window-appear");
        modalContentWindow1.classList.add("content-window-disappear");
        modalFullWindow1.classList.add("full-window-disappear");
        document.body.classList.remove("noscroll");
        document.body.classList.add("noscroll-x");
    } else if (event.target == modalFullWindow2) {
        modalFullWindow2.classList.remove("full-window-appear");
        modalContentWindow2.classList.remove("content-window-appear");
        modalContentWindow2.classList.add("content-window-disappear");
        modalFullWindow2.classList.add("full-window-disappear");
        document.body.classList.remove("noscroll");
        document.body.classList.add("noscroll-x");
    }

}