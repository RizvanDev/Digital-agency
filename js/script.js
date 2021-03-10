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
