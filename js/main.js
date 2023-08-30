const menu = document.querySelector('.header__menu-wrapper')
const menuBtn = document.querySelector('.menu__burger')

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')

  })
  menu.querySelectorAll('.menu__link').forEach(link =>{
    link.addEventListener('click', () =>{
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      body.classList.remove('lock')
    })
  })
}

/*====================================================*/


const swiper = new Swiper('.students__swiper', {
  slidesPerView: 1,
  spaceBetween: 25,
  // Navigation arrows
  navigation: {
    nextEl: '.students__swiper-next',
    prevEl: '.students__swiper-prev',
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1140: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});