import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export function createSlider() {
  return new Swiper(".slider", {
    slidesPerView: 6,
    preloadImages: false,
    lazy: true,
    loop: true,
    loopAdditionalSlides: 1,

    pagination: {
      el: ".slider__pagination",
      clickable: true,
    },
  });
}

export function createFashionChoice() {
  return new Swiper(".fashion-choice__category.swiper", {
    slidesPerView: "auto",
    preloadImages: false,
    lazy: true,
    loopAdditionalSlides: 1,
    centeredSlides: true,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".fashion-choice__pagination",
      clickable: true,
    },
  });
}
