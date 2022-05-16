let searchForm = document.querySelector('.searchform');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');  
    loginForm.classList.remove('active');
    shoppingStore.classList.remove('active');
    menuBar.classList.remove('active');   
}

let loginForm = document.querySelector('.login');

document.querySelector('#user-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    shoppingStore.classList.remove('active');
    searchForm.classList.remove('active'); 
    menuBar.classList.remove('active');
}

let shoppingStore = document.querySelector('.shopping');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingStore.classList.toggle('active');
    searchForm.classList.remove('active');  
    loginForm.classList.remove('active');
    menuBar.classList.remove('active');
}

let menuBar = document.querySelector('.navbar');

document.querySelector('#bars-btn').onclick = () =>{
    menuBar.classList.toggle('active');
    shoppingStore.classList.remove('active');
    searchForm.classList.remove('active');  
    loginForm.classList.remove('active');
    
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}

