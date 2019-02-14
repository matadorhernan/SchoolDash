$(document).ready(function () {

    var activeBar = true;
    var Logged = false;


    $(".side-nav-controller").click(function () {
        if (activeBar) {
            $('.content').addClass('minimized');
            $('.side-nav-controller').find("i").addClass('fa-rotate-90');
            activeBar = false;
        } else {
            $('.content').removeClass('minimized');
            $('.side-nav-controller').find("i").removeClass('fa-rotate-90');
            activeBar = true;
        }

    });

    $(".login-school-controller").click(function () {
        if (Logged) {
            $('.app').
            $('.login').addClass('not-logged');
            $('.login').removeClass('logged');
            Logged = false;
        } else {
            $('.login').addClass('logged');
            $('.login').removeClass('not-logged');
            $('.app').removeClass('no-app');
            Logged = true;
        }

    });

  
});