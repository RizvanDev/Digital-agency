document.querySelector('.header-menu').addEventListener('click', function (e) {
   e.preventDefault();
   if (this.classList.contains('active')) {
      this.classList.remove('active');
      document.querySelector('.menu__list').classList.remove('nav-active');
   }
   else {
      this.classList.add('active');
      document.querySelector('.menu__list').classList.add('nav-active');
   }
});

let modal = document.getElementById("header__popup");
let btn = document.getElementById("my-modal");
let close = document.getElementsByClassName("header__popup-close")[0];


btn.onclick = function () {
   modal.style.margin = "0px", modal.style.transition = "all .5s";
};
close.onclick = function () {
   modal.style.margin = "-1500px 0 0 0", modal.style.transition = ".3s";
};


new Swiper('.about__slider.swiper-container', {
   navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   simulateTouch: false,
   initialSlide: 1,
   loop: false,
   autoplay: {
      delay: 3000,
      disableOnIntegration: true,
   },
   speed: 1000,
});

let popup = document.getElementById("feedback");
let button = document.getElementById("feedback-btn");
let exit = document.getElementsByClassName("feedback__exit")[0];

button.onclick = function () {
   popup.style.opacity = "1", popup.style.visibility = "visible", popup.style.transition = "all 0.8s";
};
exit.onclick = function () {
   popup.style.opacity = "0", popup.style.visibility = "hidden", popup.style.transition = ".6s";
};
window.onclick = function (event) {
   if (event.target == popup) {
      popup.style.opacity = "0", popup.style.visibility = "hidden", popup.style.transition = "all .6s";
   }
};