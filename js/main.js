$(document).ready(function () {

    var activeBar = true;

    $(".side-nav-controller").click(function () {
        if (activeBar) {
            $('.content').addClass('minimized');
            $('.side-nav-controller').find("i").addClass('fa-rotate-90');
            activeBar =  false;
        } else {
            $('.content').removeClass('minimized');
            $('.side-nav-controller').find("i").removeClass('fa-rotate-90');
            activeBar = true;
        }
        
    });

});