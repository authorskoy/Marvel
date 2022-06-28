

const chooseCategories = document.getElementById('choose-categories-button');
const categoriesButton = document.getElementsByClassName('categories-button');
const categoriesButton5 = document.getElementsByClassName('categories-button')[4];


chooseCategories.onclick = function () {
  if (categoriesButton5.style.display == 'none') {
    for (let i = categoriesButton.length - 1; i >= 4; i--) {
      categoriesButton[i].style.display = 'block';
    }
  } else {
    for (let i = categoriesButton.length - 1; i >= 4; i--) {
      categoriesButton[i].style.display = 'none';
    }
  }
};

for (let i = categoriesButton.length - 1; i >= 4; i--) {
  categoriesButton[i].style.display = 'none';
};







const slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide showing';
}

const next = document.getElementById('next');
const previous = document.getElementById('previous');
next.onclick = function () {
  nextSlide();
};
previous.onclick = function () {
  previousSlide();
};




const stub = document.getElementById('stub');
const googleMap = document.getElementById('google-map');
const map = document.getElementById('map');

stub.onclick = function () {
  stub.style.display = 'none';
  googleMap.style.height = '500px';
  map.style.height = '500px';
};

if (navigator.userAgent.search(/Firefox/) > 0) {
  const flipper = document.getElementsByClassName('flipper');
  flipper[0].style.transform = 'rotateY(0deg)';
  flipper[0].style.cursor = 'pointer';
  flipper[1].style.transform = 'rotateY(0deg)';
  flipper[1].style.cursor = 'pointer';
  flipper[2].style.transform = 'rotateY(0deg)';
  flipper[2].style.cursor = 'pointer';

  const front = document.getElementsByClassName('front');
  const back = document.getElementsByClassName('back');
  flipper[0].onmousedown = function () {
    front[0].style.display = 'none';
    flipper[0].style.transform = 'rotateY(180deg)';
    flipper[0].style.cursor = 'default';
  }
  flipper[1].onmousedown = function () {
    front[1].style.display = 'none';
    flipper[1].style.transform = 'rotateY(180deg)';
    flipper[1].style.cursor = 'default';
  }
  flipper[2].onmousedown = function () {
    front[2].style.display = 'none';
    flipper[2].style.transform = 'rotateY(180deg)';
    flipper[2].style.cursor = 'default';
  }

};

if (navigator.userAgent.search(/Edge/) > 0) {
  const CiAboutBid = document.getElementsByClassName('circle-about-big')[0];
  CiAboutBid.style.display = 'none';
};

const offset = 1000;
const buttonUp = document.querySelector('.button-up');
const topPosition = () => document.documentElement.scrollTop || window.pageXOffset;



window.addEventListener('scroll', () => {
  if (topPosition() > offset) {
    buttonUp.classList.add('button-up-visible');
  } else {
    buttonUp.classList.remove('button-up-visible');
  }
});

buttonUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});