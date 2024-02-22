$(".owl-carousel").owlCarousel({
  loop: true,
  autoWidth: true,
  margin: 20,
  nav: true,
  dots: false,
  center: true,
  navText: [
    "<img class='icon-control-carousel' src='./assets/img/svg/left-button.svg' alt='Previous'>",
    "<img class='icon-control-carousel' src='./assets/img/svg/right-button.svg' alt='Next'>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
