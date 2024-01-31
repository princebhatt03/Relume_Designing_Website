AOS.init({
  offset: 300,
  duration: 1000,
});

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true,
// });

var tl = gsap.timeline();
tl.from('h1 ', {
  y: -30,
  duration: 0.5,
  delay: 0.3,
  stagger: 0.3,
  opacity: 0,
});
// tl.from('p', {
//   y: -30,
//   duration: 0.5,
//   delay: 0.3,
//   stagger: 0.3,
//   opacity: 0,
// });
// tl.from('h4 ', {
//   y: -30,
//   duration: 0.5,
//   delay: 0.3,
//   stagger: 0.3,
//   opacity: 0,
// });
// tl.from('h6 ', {
//   y: -30,
//   duration: 0.8,
//   delay: 0.3,
//   stagger: 0.3,
//   opacity: 0,
// });
// tl.from('h3', {
//   x: -30,
//   duration: 0.8,
//   delay: 0.3,
//   stagger: 0.3,
//   opacity: 0,
// });
// tl.from('h5', {
//   x: -30,
//   duration: 0.8,
//   delay: 0.3,
//   stagger: 0.3,
//   opacity: 0,
// });
