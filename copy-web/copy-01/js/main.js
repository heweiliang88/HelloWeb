const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', function () {
        navMenu.classList.add('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.add('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))