const carousel = new Siema({
  selector: '.carousel',
  duration: 500,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  loop: true,
  rtl: true
});

setInterval(() => {
  carousel.next()
}, 4000)