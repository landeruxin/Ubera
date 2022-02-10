/*!
* Start Bootstrap - Grayscale v7.0.4 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    $("#submenu").css("display","none");

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



//MUGIMENDUA

//lehengo partia 
$('.ubera').click(function() {
    $('html, body').animate({ scrollTop: $("#ubera").offset().top }, 500);
    return false;
});

//bigarrena


$('#jatetxeaNav').click(function() {
    $('html, body').animate({ scrollTop: $("#jatetxea").offset().top }, 500);
    return false;
});

//hirugarrena


$('#kontaktoaNav').click(function() {
    $('html, body').animate({ scrollTop: $("#kontaktoa").offset().top }, 500);
    return false;
});

//ardo karta

$('#karta').click(function() {
    $('html, body').animate({ scrollTop: ($("#karta").offset().top + 300) }, 500);
    return false;
});


// Hizkuntzak

$("#hizkuntzakNav").click(function(){

    var value = $("#submenu").css("display");

    if(value=="none"){
        $("#submenu").css("display","block");
    }else{
        $("#submenu").css("display","none");
    }

});