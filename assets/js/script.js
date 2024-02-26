// $(".owl-carousel").owlCarousel({
//   loop: true,
//   autoWidth: true,
//   margin: 20,
//   nav: true,
//   dots: false,
//   center: true,
//   navText: [
//     "<img class='icon-control-carousel' src='./assets/img/svg/left-button.svg' alt='Previous'>",
//     "<img class='icon-control-carousel' src='./assets/img/svg/right-button.svg' alt='Next'>",
//   ],
//   responsiveClass: true,
//   responsive: {
//     0: {
//       items: 1,
//       nav: true,
//     },
//     600: {
//       items: 3,
//       nav: true,
//     },
//     1000: {
//       items: 5,
//       nav: true,
//     },
//   },
// });

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    navText: [
      "<img class='icon-control-carousel' src='./assets/img/svg/left-button.svg' alt='Previous'>",
      "<img class='icon-control-carousel' src='./assets/img/svg/right-button.svg' alt='Next'>",
    ],
    responsiveClass: true,

    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      900: {
        items: 2,
        nav: true,
      },
      1300: {
        items: 3,
        nav: true,
      },
    },
  });
});
