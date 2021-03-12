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

btn.onclick = function () {
   modal.style.margin = "0px", modal.style.transition = "all .7s";
};
window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.margin = "-1500px  0 0 0", modal.style.transition = ".5s";
   }
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