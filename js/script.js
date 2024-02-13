// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});

//animated transition

function muncul() {
    let elements = document.querySelector(".about", ".menu", ".contact");
    for (let i = 0; i < element.length; i++) {
        let windowHeight = window.innerHeight;
        let position = element.getBoundingClientRect().top;
        let ukuran = 150;

        if (position < windowHeight - ukuran) {
            elements[i].classList.add('show');
        }
    }
};

//button kembali keatas
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Untuk Safari
    document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
}