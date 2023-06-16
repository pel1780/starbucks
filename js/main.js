const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to_top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    // _.throttle(함수, 시간)
    if (window.scrollY > 300) {
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        // 뱃지 숨기기
        opacity: 0,
        display: "none",
      });

      // totop 보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
        opacity: 1,
        display: "flex",
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        // 뱃지 보이기
        opacity: 1,
        display: "block",
      });

      // totop 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
        opacity: 0,
        display: "none",
      });
    }
  }, 300)
);

toTopEl.addEventListener("click", function () {
  gsap.to(window, 1, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".mainVisual .fade_in");

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".mainNotice .notice_line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".mainNotice .promotion .swiper-container", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper("footer .awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: "footer .awards .swiper-prev",
    nextEl: "footer .awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(
  ".mainNotice .toggle_promotion"
);

let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;

  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay), //지연시키는
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll_spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
