
var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();

  if (st === 0) {
    $("header").removeClass("fixed no-fixed");
  } else if (st > lastScrollTop) {
    $("header").removeClass("fixed");
    $("header").addClass("no-fixed");
  } else {
    $("header").addClass("fixed");
    $("header").removeClass("no-fixed");
  }

  lastScrollTop = st;
});

$(document).ready(function () {
  $(".burger").click(function () {
    $(".burger").toggleClass("clicked");
  });
  $(".nav-link").click(function () {
    $(".show").toggleClass("show");
    $(".burger").removeClass("clicked");
  });

  var featured_slider = new Swiper(".featured-slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  var swiper = new Swiper(".report-slider-nav", {
    spaceBetween: 25,
    slidesPerView: 5,
    loop: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".report-slider", {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  document.querySelectorAll("[Heading]").forEach((heading) => {
    new SplitType(heading, { types: "lines, words, chars", tagName: "c" });
    gsap.from(heading.querySelectorAll(".word"), {
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: heading,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  document.querySelectorAll("[description]").forEach((description) => {
    new SplitType(description, { types: "lines, words, chars", tagName: "c" });
    gsap.from(description.querySelectorAll(".line"), {
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: description,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  document.querySelectorAll(".banner-box").forEach((ira) => {
    gsap.from(ira, {
      x: "10%",
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ira,
        start: "top 100%",
        toggleActions: "play none none none",
      },
    });
  });

  document.querySelectorAll(".btn-animate").forEach((button) => {
    gsap.from(button, {
      y: "50%",
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: button,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  document.querySelectorAll(".box-animation").forEach((box) => {
    gsap.from(box, {
      x: "-10%",
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: box,
        start: "left 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
  document.querySelectorAll(".img-animation").forEach((img) => {
    gsap.from(img, {
      y: "-10%",
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: img,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });



  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".timeline",
      scrub: 1,
      start: "top 50%",
      end: "bottom+=1000 top",
    },
  });

  tl.to(".grow-line", {
    scaleY: 1,
    ease: "none",
    duration: 1,
  });



  $(".chat").click(function () {
    $(".chat-box").show();
  });
  $(".minimize").click(function () {
    $(".chat-box").hide();
  });


});
