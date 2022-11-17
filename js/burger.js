(function () {
  const burger = document.querySelector('.burger__button');
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
  });
}());
