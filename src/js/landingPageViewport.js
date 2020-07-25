/* NAVIGATION */
//background music
//const AudioContext = window.AudioContext || window.webkitAudioContext;
//const audioCtx = new AudioContext();

/*var bgMusic = document.getElementById("bgMusic"),
    musicBtn = document.getElementById("musicBtn"),
    music = false;

musicBtn.onclick = function() {
    if (music) {
        bgMusic.pause()
    } else {
        bgMusic.play();
    }
};

bgMusic.onplaying = function() {
    musicBtn.classList.remove("playBtn");
    musicBtn.classList.add("pauseBtn");
    music = true;
};

bgMusic.onpause = function() {
    musicBtn.classList.remove("pauseBtn");
    musicBtn.classList.add("playBtn");
    music = false;
};*/

//click  sound effects
/*var clickSnd = document.getElementById("clickSnd"),
    clickSnd2 = document.getElementById("clickSnd2");

function clickEffect() {
    clickSnd.play();
}

function clickEffect2() {
    clickSnd2.play();
}*/



/*SECTION 1: HOME / LANDING PAGE */
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


