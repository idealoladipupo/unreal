var menu = document.querySelector(".navmobile-menu")
var mobileLinks = document.querySelector(".mobile-navigation")

function hamburgerHandler(){
menu.classList.toggle('showMenu')
mobileLinks.classList.toggle('show-mobile-navigation')
}