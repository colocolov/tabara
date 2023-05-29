const animHome = document.querySelector('.body-home');
if (animHome) {

  // Whoweare title
  gsap.from(".whoweare__head", {
      xPercent: -130,
    scrollTrigger: {
      trigger: '.hero',
      start: 'bottom 70%',
      toggleActions: 'play none none none',
    }
  });

  //Whoweare text blocks
  gsap.from(".whoweare__text", {
    stagger: 0.3,
    opacity: 1,
    yPercent: 130,
    scrollTrigger: {
      trigger: '.whoweare',
      start: 'top 60%',
      toggleActions: 'play none none reverse',
      // markers: true
    }
  });

  // end HOME
}
