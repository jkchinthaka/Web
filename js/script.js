let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#manu-bar');  // Fix the variable name here
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    // Remove or add the appropriate classes based on your HTML structure

    searchBar.classList.remove('fa-times', 'active');
    menu.classList.remove('fa-times');  // Fix the variable name here
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');  // Fix the variable name here
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;;
    });
});





