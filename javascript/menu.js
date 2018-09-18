$(function () {
    "use strict";
    $('#menuBtn').click(function () {
        $(this).toggleClass('btn-menu-open');
    });
    $('#menuBtn').click(function () {
        $('#menu').toggleClass('menu-in');
    });
});

$("a").on("click", function () {
    "use strict";
    if (this.hash !== "") {
        $('#menu').removeClass('menu-in'); // close right menu after click
        $('#menuBtn').removeClass('btn-menu-open');
    }
});