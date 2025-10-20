/*================================================
[  Table of contents  ]
================================================

::page loader
::Back to top
::Accordion
::Amazing Tab
::Header
::Img Skrollr
::Magnific Popup
::countdown
::Progress Bar
::widget
::counter
::Screenshots silder
::Wow Animation

======================================
[ End table content ]
======================================*/

"use strict";

/*************************
page loader
*************************/
function preloader() {
    $("#load").fadeOut();
    $('#loading').delay().fadeOut();

}

/*************************
Back to top
*************************/
function backtotop() {
    $('#back-to-top').fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1500);
        } else {
            $('#back-to-top').fadeOut(500);
        }
    });
    // scroll body to 0px on click
    $('#top').on('click', function () {
        $('top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
}

/*************************
Amazing Tab
*************************/
function Tabbar() {
    $('#iq-amazing-tab').on('click', 'li', function () {
        $('#iq-amazing-tab  li.active1').removeClass('active1');
        $(this).addClass('active1');
    });
}

/*************************
Accordion
*************************/
function accordion() {
    var $acpanel = $(".iq-accordion .iq-fd-block > .fd-details"),
        $acsnav = $(".iq-accordion .iq-fd-block > .fd-title");

    $acpanel.hide().first().slideDown("easeOutExpo");
    $acsnav.first().addClass("fd-active");
    $acsnav.on('click', function () {
        var $this = $(this).next(".fd-details");
        $acsnav.parent().removeClass("fd-active");
        $(this).parent().addClass("fd-active");
        $acpanel.not($this).slideUp("easeInExpo");
        $(this).next().slideDown("easeOutExpo");
        return false;
    });

}

/*************************
Header
*************************/
function header() {
    $('a.page-scroll').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1500);
        e.preventDefault();
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('body').addClass('menu-sticky');
        } else {
            $('body').removeClass('menu-sticky');
        }
    });
}



/*************************
Img Skrollr
*************************/
function imgskrollr() {
    var mySkrollr = skrollr.init({
        forceHeight: false,
        easings: {
            easeOutBack: function (p, s) {
                s = 1.70158;
                p = p - 1;
                return (p * p * ((s + 1) * p + s) + 1);
            }
        },
        mobileCheck: function () {
            //hack - forces mobile version to be off
            return false;
        }
    });
}

/*************************
Magnific Popup
*************************/

function popupgallery() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

}



/*************************
Progress Bar
*************************/

function progress() {
    $('.iq-progress-bar > span').each(function () {
        var $this = $(this);
        var width = $(this).data('percent');
        $this.css({
            'transition': 'width 2s'
        });
        setTimeout(function () {
            $this.appear(function () {
                $this.css('width', width + '%');
            });
        }, 500);
    });
}


/*************************
widget
*************************/


function widget() {
    $('.iq-widget-menu > ul > li > a').on('click', function () {
        var checkElement = $(this).next();
        $('.iq-widget-menu li').removeClass('active');
        $(this).closest('li').addClass('active');
        if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('.iq-widget-menu ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if ($(this).closest('li').find('ul').children().length === 0) {
            return true;
        } else {
            return false;
        }
    });
}


/*************************
counter
*************************/

function counter() {
    //$('.timer').countTo();
}


/*************************
Screenshots silder
*************************/
function screensilder() {
    var slide = $('.slider-single');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;

    function slideInitial() {
        slide.addClass('proactivede');
        setTimeout(function () {
            slideRight();
        }, 500);
    }

    function slideRight() {
        if (slideCurrent < slideTotal) {
            slideCurrent++;
        } else {
            slideCurrent = 0;
        }

        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);

        }

        slide.each(function () {
            var thisSlide = $(this);
            if (thisSlide.hasClass('preactivede')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
            if (thisSlide.hasClass('preactive')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    function slideLeft() {
        if (slideCurrent > 0) {
            slideCurrent--;
        } else {
            slideCurrent = slideTotal;
        }

        if (slideCurrent < slideTotal) {
            var proactiveSlide = slide.eq(slideCurrent + 1);
        } else {
            var proactiveSlide = slide.eq(0);
        }
        var activeSlide = slide.eq(slideCurrent);
        if (slideCurrent > 0) {
            var preactiveSlide = slide.eq(slideCurrent - 1);
        } else {
            var preactiveSlide = slide.eq(slideTotal);
        }
        slide.each(function () {
            var thisSlide = $(this);
            if (thisSlide.hasClass('proactivede')) {
                thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
            }
            if (thisSlide.hasClass('proactive')) {
                thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
            }
        });
        preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
        activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
        proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
    }

    var left = $('.slider-left');
    var right = $('.slider-right');
    left.on('click', function () {
        slideLeft();
    });
    right.on('click', function () {
        slideRight();
    });
    slideInitial();
}

/*************************
Wow Animation
*************************/
function wowanimation() {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    wow.init();
}

/*************************
CLA Expandable block code
*************************/
function expandableCode() {
    var $acpanel = $(".expandable-code .code-block"),
        $acsnav = $(".expandable-code .fd-title");
    $acpanel.hide();
    $acsnav.on('click', function () {
        $(this).toggleClass("fd-active");
        var $this = $(this).next(".code-block");
        if ($this.is(":visible")) {
            $this.slideUp("easeInExpo");
        } else {
            $this.slideDown("easeOutExpo")
        }
        return false;
    });
}

function setTableStyleIfNoneIsDefined() {
    $('table').each(function () {
        if (!$(this).attr('class') || !$(this).attr('class').length) $(this).addClass('table table-striped table-hover table-bordered')
    })
}

/*************************
Inline javadoc links
*************************/
function inlineJavadocLinks() {
    $('.javadoc-link').parent().css('display', 'inline');
    $('.javadoc-link').parent().prev().css('display','inline');
}

function themeFilter() {
    var lastFilteredTheme = "";
    $('.theme').on('click', function () {
        $('.theme.active').each(function (e) {
            $(this).removeClass('active');
        });
        var filter = $(this).attr('xfd-theme');
        if (lastFilteredTheme != filter) {
            $('.module').each(function (e) {
                $(this).hide();
            });
            $('.modules').find(".module." + filter).css('display', 'inline-block');
            lastFilteredTheme = filter;
            $(this).addClass('active');
        } else {
            $('.module').each(function (e) {
                $(this).show();
            });
            lastFilteredTheme = "";
        }
    });
}

function tabs() {
    $('.tabs .nav-tabs').each(function () {
        $(this).children('.nav-item').children('a:first').tab('show');
    });
}
function copy() {
    $(".highlight").each(function () {
        var id = 'code-' + Math.floor(Math.random() * 1000000);
        $(this).children('pre').attr("id", id);

        var btn = "<button class='btn copy-btn p-0 float-right' data-clipboard-target='#" + id + "'><i class='far fa-clone'></i></button>";
        $(this).prepend(btn);
    });
    new ClipboardJS('.copy-btn');
}
/*************************
All function are called here 
*************************/
$(document).ready(function () {
    backtotop(),
        popupgallery(),
        sliders(),
        accordion(),
        Tabbar(),
        imgskrollr(),
        preloader(),
        header(),
        progress(),
        widget(),
        screensilder(),
        counter(),
        setTableStyleIfNoneIsDefined(),
        expandableCode(),
        inlineJavadocLinks(),
        themeFilter(),
        tabs(),
        copy();
});


$(window).on('load', function () {
    wowanimation();



});