/* tabs in section "container tabs"*/
const tabTitle = document.querySelectorAll(".tabs-title-item");
const lengthTabTitile = tabTitle.length;
const tabSwitcher = () => {
  return function () {
    let tabContent = document.querySelector(
      `.tabs-content-item[data-content="${this.dataset.content}"]`
    );
    document
      .querySelector(".tabs-title-item.active")
      .classList.remove("active");
    document
      .querySelector(".tabs-content-item.active")
      .classList.remove("active");
    tabContent.classList.add("active");
    this.classList.add("active");
  };
};

for (let i = 0; i < lengthTabTitile; i++) {
  tabTitle[i].addEventListener("click", tabSwitcher());
}

/*<section class="portfolio">*/
const tabsFoto = document.querySelectorAll(".portfolio-title-item");
const wrapCard = document.querySelectorAll(".portfolio-gallery-card");
portfolioTabsList.onclick = (e) => {
  let target = e.target;
  tabsFoto.forEach((elem) => {
    elem.classList.remove("active");
  });
  target.classList.add("active");
  let tabCategory = target.dataset.content;
  wrapCard.forEach((e) => {
    e.classList.add("hidden");
    let cardCategory = e.dataset.content;
    let loadAttr = e.getAttribute("data-load");
    if (tabCategory === "All" && loadAttr === null) {
      e.classList.remove("hidden");
    } else if (tabCategory === cardCategory && loadAttr === null) {
      e.classList.remove("hidden");
    }
  });
};

/*--Обработчик на кнопку Load more--*/
morePhoto.onclick = () => {
  wrapCard.forEach((e) => {
    e.removeAttribute("data-load");
  });
  tabsFoto.forEach((el) => {
    if (el.classList.contains("active")) {
      let a = el.getAttribute("data-content");
      wrapCard.forEach((element) => {
        let we = element.getAttribute("data-content");
        if (a === we) {
          element.classList.remove("hidden");
        } else if (a === "All") {
          element.classList.remove("hidden");
        }
      });
    }
  });
  morePhoto.remove();
};

/*--присваиваю категории карточкам картинок--*/
showCategory = () => {
  for (let i = 0; i < wrapCard.length; i++) {
    let show = wrapCard[i].querySelector(".img-card-category");
    show.textContent = wrapCard[i].dataset.content;
  }
};
showCategory();

/*=====SLIDER=====*/

let currentSlide = 0;
const navigation = document.querySelectorAll(".slider-user-foto-small");
const slides = document.querySelectorAll(".slider-user-review");
const next = document.getElementById("arrowRight");
const previous = document.getElementById("arrowLeft");

for (let i = 0; i < navigation.length; i++) {
  navigation[i].onclick = function () {
    currentSlide = i;
    document
      .querySelector(".slider-user-review.container.active")
      .classList.remove("active");
    document
      .querySelector(".slider-user-foto-small.active")
      .classList.remove("active");
    navigation[currentSlide].classList.add("active");
    slides[currentSlide].classList.add("active");
  };
}

next.onclick = function () {
  nextSlide(currentSlide);
};

previous.onclick = function () {
  previousSlide(currentSlide);
};

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  hideSlides();
  currentSlide = (n + slides.length) % slides.length;
  showSlides();
}

function hideSlides() {
  slides[currentSlide].className = "slider-user-review container";
  navigation[currentSlide].className = "slider-user-foto-small";
}

function showSlides() {
  slides[currentSlide].className = "slider-user-review container active";
  navigation[currentSlide].className = "slider-user-foto-small active";
}
