
var scrollTop = document.body.scrollTop;
var menu = document.querySelector('.menu');
var offset = menu.getBoundingClientRect();
var menuOffsetTop = offset.top + scrollTop;
var isMenuSticked = false;

function stickyMenu() {
    var scrollTop = document.body.scrollTop;
    if (scrollTop > menuOffsetTop && !isMenuSticked) {
        menu.classList.add('menu-sticky');
        isMenuSticked = true;
    } else if (scrollTop <= menuOffsetTop && isMenuSticked) {
        isMenuSticked = false;
        menu.classList.remove('menu-sticky');
    }
}

function scrollHandler() {
    stickyMenu();
}

document.addEventListener('scroll', scrollHandler);