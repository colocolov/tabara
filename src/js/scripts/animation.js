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

  // Misiunea title
  gsap.from(".misiunea__head", {
    xPercent: -130,
    scrollTrigger: {
      trigger: '.whoweare',
      start: 'bottom 70%',
      toggleActions: 'play none none none',
      // markers: true
    }
  });

  //Misiunea text blocks
  gsap.from(".misiunea__item", {
    stagger: 0.3,
    opacity: 1,
    yPercent: 130,
    scrollTrigger: {
      trigger: '.misiunea',
      start: 'top 30%',
      toggleActions: 'play none none reverse',
      // markers: true
    }
  });

   // Blog title
  gsap.from(".blog__head", {
    xPercent: -130,
    scrollTrigger: {
      trigger: '.misiunea',
      start: 'bottom 70%',
      toggleActions: 'play none none none',
      // markers: true
    }
  });

  // Services title
  gsap.from(".services__head", {
    xPercent: -130,
    scrollTrigger: {
      trigger: '.blog',
      start: 'bottom 70%',
      toggleActions: 'play none none none',
      // markers: true
    }
  });

  // Services wrap
  gsap.from(".services__wrapper", {
    yPercent: 130,
    opacity: 1,
    scrollTrigger: {
      trigger: '.services',
      start: 'top 20%',
      toggleActions: 'play none none none',
      markers: true
    }
  });

  // end HOME
}
