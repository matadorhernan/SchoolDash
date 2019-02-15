$(document).ready(function () {

    var activeBar = true;
    var Logged = false;
    var schoolsOpts = false;


    $(".login-school-controller").click(function () {
        if (Logged) {
            $('.login').removeClass('logged');
            $('.login').addClass('not-logged');
            $('.app').addClass('no-app');
            Logged = false;
        } else {
            $('.login').addClass('logged');
            $('.login').removeClass('not-logged');
            $('.app').removeClass('no-app');
            Logged = true;
        }
    });

    $(".side-school-controller").click(function () {

        if (schoolsOpts) {

            $('.school-opts').addClass('dis-none');
            schoolsOpts = false;

        } else {
            $('.school-opts').removeClass('dis-none');
            schoolsOpts = true;
        }
    });


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

});