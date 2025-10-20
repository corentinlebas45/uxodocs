$(document).ready(function () {
    scrollToTableContentAtInit();
    scrollToTableContentOnClick();
    applyCssInTableContent();
    backtotop();
    tableOfContents();
});

function tableOfContents() {
    $('#TableOfContents a').each(function (e) {
        var href = $(this).attr('href');
        $(this).attr('id', href.substring(1, href.length));
        $(this).addClass('nav-link');
    });
    $('#TableOfContents ul ul').each(function (e) {
        $(this).addClass('nav d-flex');
    });
    $(window).on('activate.bs.scrollspy', function () {
        $("#toc.nav .nav-link").parents('ul.collapse').removeClass('d-flex');
        $("#toc.nav .active").next('.nav.collapse').addClass('d-flex');
        $("#toc.nav .active").parents('ul.collapse').addClass('d-flex');
    });   
}

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

function scrollToTableContentAtInit() {
  var hash = window.location.hash;
  if (hash) {
    // Scroll to the target section with an offset (adjust the value as needed)
    var yOffset = - (document.getElementById("navbar").offsetHeight + document.getElementById("breadcrumb").offsetHeight + 10); // The vertical shift to adjust the page position
    var targetElement = $(hash);
    if (targetElement.length) {
      var targetOffset = targetElement.offset().top + yOffset;
      $('html, body').animate({
        scrollTop: targetOffset
      }, 800); // Adjust the animation speed as needed
    }
  }
}

function scrollToTableContentOnClick() {
    // Handle click events on table of content items
  $('#TableOfContents a').on('click', function(event) {
    event.preventDefault();

    var target = $(this).attr('href');
    var yOffset = - (document.getElementById("navbar").offsetHeight + document.getElementById("breadcrumb").offsetHeight + 10); // The vertical shift to adjust the page position
    var targetElement = $(target);
    var url = window.location.href.split('#')[0] + target;
    
    if (targetElement.length) {
        var targetOffset = targetElement.offset().top + yOffset;
            $('html, body').animate({
            scrollTop: targetOffset
            }, 800); // Adjust the animation speed as needed
        history.pushState({}, '', url);
    }
  });
}

function applyCssInTableContent() {
    var links = document.querySelectorAll('#TableOfContents a');

    function adjustActiveClass() {
        links.forEach(function(link) {
            var targetId = link.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);
  
            if (targetElement) {
                var rect = targetElement.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    // Remove the active class from all items
                    links.forEach(function(link) {
                        link.classList.remove("active");
                    });
                    // Add the active class to the current item
                    link.classList.add("active");
                }
            }
        });
    }
    window.addEventListener("scroll", adjustActiveClass);
    window.addEventListener("resize", adjustActiveClass);
    window.addEventListener("click", adjustActiveClass);
}

function startHoverShowAll(elem) {
    elem.parentNode.parentNode.classList.add("card-clickable-parent");
}

function endHoverShowAll(elem) {
    elem.parentNode.parentNode.classList.remove("card-clickable-parent");
}