$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });
});

var typed = new Typed(".typing", {
    strings: ["Code World "],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0)
});

