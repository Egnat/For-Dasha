//запуск npm start / npx webpack --watch / npm run build
import './css/styles.css';// для того, чтоб дев сервер хавал стили.
//import html from "./index.html";
//import photo from './imegas/logo.png';
document.write('Hello, world!!!'); //скрипт не работает,когда запускаешь через npm srart

var slides = document.querySelectorAll('#slides .slide');//скрипт работает
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1) % slides.length;
  slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = 'Pause';
  playing = true;
  slideInterval = setInterval(nextSlide,5000);
}

pauseButton.onclick = function() {
  if (playing) { pauseSlideshow(); }
  else { playSlideshow(); }
};