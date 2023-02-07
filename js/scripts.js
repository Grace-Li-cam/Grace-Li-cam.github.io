/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

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

<script src="jquery-3.3.1.min.js"></script>

var arrLang = {
  "en": {
    "HOME": "Home",
    "ABOUT": "About Us",
    "CONTACT": "Contact Us",
  },
  "zh": {
    "HOME": "首页",
    "ABOUT": "关于我们",
    "CONTACT": "联络我们",
  }
};
 
// The default language is English
var lang = "en";
// Check for localStorage support
if('localStorage' in window){
   var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
   if (!Object.keys(arrLang).includes(lang)) lang = 'en';
}
 
$(document).ready(function() {
  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});
 
// get/set the selected language
$(".translate").click(function() {
  var lang = $(this).attr("id");
 
  // update localStorage key
  if('localStorage' in window){
    localStorage.setItem('lang', lang);
    console.log( localStorage.getItem('lang') );
  }
 
  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});