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
   if (popup.style.visibility == "visible") {
      body.style.overflow = "hidden";
   };
};
exit.onclick = function () {
   popup.style.opacity = "0", popup.style.visibility = "hidden", popup.style.transition = ".6s";
   if (popup.style.visibility == "hidden") {
      body.style.overflow = "auto";
   };
};
popup.onclick = function (event) {
   if (event.target == popup) {
      popup.style.opacity = "0", popup.style.visibility = "hidden", popup.style.transition = "all .6s", body.style.overflow = "auto";
   };
};
let myVideo = document.getElementById("myVideo");
let video = document.getElementById("video");
let click = document.getElementById("video-btn");
let span = document.getElementsByClassName("video__exit")[0];

click.onclick = function () {
   video.style.visibility = "visible", video.style.opacity = "1", video.style.transition = "all .5s ease-in";
   if (video.style.visibility == "visible") {
      body.style.overflow = "hidden";
      myVideo.play();
   };
};
span.onclick = function () {
   video.style.visibility = "hidden", video.style.opacity = "0", video.style.transition = ".3s";
   if (video.style.visibility == "hidden") {
      body.style.overflow = "auto";
      myVideo.pause();
   };
};
video.onclick = function (event) {
   if (event.target == video) {
      video.style.opacity = "0", video.style.visibility = "hidden", video.style.transition = "all .6s", body.style.overflow = "auto";
      myVideo.pause();
   };
};

new Swiper('.quotes__slider.swiper-container', {

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
