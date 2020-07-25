window.onresize = function() {
    skyCity();
};

var header = document.getElementById("home-grid");
var cityLights = [];
for (var i = 0; i < 400; i++) {
    cityLights.push(document.createElement("i"));
};

function skyCity() {
    for (var i = 0; i < 400; i++) {
        var cityLight = cityLights[i],
            x = Math.floor(Math.random() * window.innerWidth * .98),
            y = Math.floor(Math.random() * window.innerHeight),
            size = Math.random() * 1.5,
            animate = Math.random() * 50;

        cityLight.style.left = x + 'px';
        cityLight.style.top = y + 'px';
        cityLight.style.width = size + 1.5 + 'px';
        cityLight.style.height = size + 1.5 + 'px';
        cityLight.style.opacity = Math.random();
        cityLight.style.animationDuration = 10 + animate + 's';

        header.appendChild(cityLight);
    }
};
skyCity();