let itemCurrent = 0;
let carouselContainer = document.querySelector(".carousel__container");
let buttonElements = Array.from(document.querySelectorAll(".carousel__button"));

function resetProgress() {
  buttonElements.forEach((button) => {
    let progress = button.querySelector(".carousel__button__progress");
    progress.classList.remove("carousel__button__progress--active");
  });
}

function progressBar(itemCurrent) {
  let progress = buttonElements[itemCurrent].querySelector(
    ".carousel__button__progress"
  );
  resetProgress();
  progress.classList.add("carousel__button__progress--active");
  carouselContainer.style = `transform: translateX(-${itemCurrent * 100}%)`;
  itemCurrent = (itemCurrent + 1) % buttonElements.length
  setTimeout(() => {
    progressBar(itemCurrent);
  }, 5000);
}

progressBar(itemCurrent);
