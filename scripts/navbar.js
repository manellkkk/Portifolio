const navbarMobile = document.getElementById("navbarMobile");
const navbarPC = document.getElementById("navbarPC");

function openMobileMenu(){
    if (navbarPC.classList.contains('activeMobileNavbar')) {
        navbarPC.classList.remove('activeMobileNavbar');
        navbarMobile.classList.remove('activeMenuSimple');
    } else {
        navbarPC.classList.add('activeMobileNavbar');
        navbarMobile.classList.add('activeMenuSimple');
    }
}