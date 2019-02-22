$(document).ready(function () {

    //DEV

    $('#group').addClass('selected');
    $('#group-content').removeClass('dis-none');

    //VARIABLES

    var minimizedsidenav = true;
    var schoolsOpts = false;
    var minimizedconfnav = true;

    // SIDE login-school-controller BTN EVENT WILL HIDE LOGIN LIGHTBOX

    // $(".login-school-controller").click(function () {

    $('.login').addClass('logged');
    $('.login').removeClass('not-logged');
    $('.app').removeClass('no-app');


    setTimeout(function () {
        $('.login').hide();
    }, 500)

    // });

    // SIDEside-school-controller BTN EVENT WILL TOGGLE SIDE NAV

    $(".side-school-controller").click(function () {

        if (schoolsOpts) {

            $('.school-opts').addClass('dis-none');
            schoolsOpts = false;

        } else {
            $('.school-opts').removeClass('dis-none');
            schoolsOpts = true;
        }
    });


    // SIDE side-nav-controller BTN EVENT WILL TOGGLE SIDE NAV

    $(".side-nav-controller").click(function () {
        if (minimizedsidenav) {
            $('.content').addClass('minimized');
            $('.side-nav-controller').find("i").addClass('fa-rotate-90');
            minimizedsidenav = false;
        } else {
            $('.content').removeClass('minimized');
            $('.side-nav-controller').find("i").removeClass('fa-rotate-90');
            minimizedsidenav = true;
        }
    });

    // SIDE side-nav-controller BTN EVENT WILL TOGGLE SIDE NAV

    $(".conf-controller").click(function () {
        if (minimizedconfnav) {
            $('.conf-opts').removeClass('dis-none');
            $('.conf-controller').find("i").addClass('fa-rotate-90');
            minimizedconfnav = false;
        } else {
            $('.conf-opts').addClass('dis-none');
            $('.conf-controller').find("i").removeClass('fa-rotate-90');
            minimizedconfnav = true;
        }
    });

    $("#home").click(function () {
        changeTab("home");
    });
    $("#group").click(function () {
        changeTab("group");
    });

    //GROUP TAB FUNCTIONS

    $('#choice-one').click(function () {
        changeChoice('one');
    });
    $('#choice-two').click(function () {
        changeChoice('two');
    });
    $('#choice-three').click(function () {
        changeChoice('three');
    });
    $('#choice-four').click(function () {
        changeChoice('four');
    });

});

function changeTab(tabName) {

    $('#home').removeClass('selected');
    $('#group').removeClass('selected');

    $('#home-content').addClass('dis-none');
    $('#group-content').addClass('dis-none');

    switch (tabName) {
        case "home":
            $('#home').addClass('selected');
            $('#home-content').removeClass('dis-none');
            break;
        case "group":
            $('#group').addClass('selected');
            $('#group-content').removeClass('dis-none');
            break;
        default:
            break;
    }
}

function changeChoice(choice) {

    $('.group-choice-selected').removeClass('choice-pos1');
    $('.group-choice-selected').removeClass('choice-pos2');
    $('.group-choice-selected').removeClass('choice-pos3');
    $('.group-choice-selected').removeClass('choice-pos4');
    $('.group-stack').hide();    
    $('.group-new').hide();

    switch (choice) {

        case 'one':
            $('.group-choice-selected').addClass('choice-pos1');
            $('.group-stack').show(); 
            break;
        case 'two':
            $('.group-choice-selected').addClass('choice-pos2');
            break;
        case 'three':
            $('.group-choice-selected').addClass('choice-pos3');
            break;
        case 'four':
            $('.group-choice-selected').addClass('choice-pos4');
            break;
    }
}