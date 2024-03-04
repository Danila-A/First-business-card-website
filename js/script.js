// Анимация при загрузке
let title = document.querySelector('.title');
let link = document.querySelector('.contact__icon');
// Анимация при скролле
let elements = document.querySelectorAll('.element__animation');

// Анимация при загрузке сайта
document.addEventListener('DOMContentLoaded', function(){
    title.classList.add('title__show');
    link.classList.add('title__show');
});

// Анимации появления при прокрутки сайта
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element__show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);

if (screen.width > 767) {
  for (let elm of elements) {
    observer.observe(elm);
  }
}
else {
  for (let elm of elements) {
    elm.classList.add('element__show');
  }
}