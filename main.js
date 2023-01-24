const header = document.querySelector('header');
const menuResponsive = document.querySelector('.toggle');
const navigation = document.querySelector('nav');

window.addEventListener("scroll", stickyHeader);

menuResponsive.addEventListener("click", toggleMenu);

function stickyHeader() {
    header.classList.toggle('sticky', window.scrollY > 0);
}

function toggleMenu() {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}