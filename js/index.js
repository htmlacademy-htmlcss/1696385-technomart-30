// Modal feedback
const modalLink = document.querySelector(".contacts-btn")
const modalFeedback = document.querySelector(".modal")
const btnClose = document.querySelector(".modal-btn")
const userName = modalFeedback.querySelector("[name=your-name]")
const modalForm = modalFeedback.querySelector(".modal-form")
const email = modalFeedback.querySelector("[name=email]")

modalLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show");
  userName.focus();
});

btnClose.addEventListener("click", () => {
  modalFeedback.classList.remove("modal-show");
  modalFeedback.classList.remove("modal-error");
});

window.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    if (modalFeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-show");
    }
  }
});

modalForm.addEventListener("submit", (evt) => {
  if (!userName.value || !email.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
    userName.focus();
  }
});

// Modal map
const mapLink = document.querySelector(".contacts-map")
const modalMap = document.querySelector(".modal-map")
const mapClose = document.querySelector(".map-close")

mapLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  modalMap.classList.add("modal-map-show");
});

mapClose.addEventListener("click", () => {
  modalMap.classList.remove("modal-map-show");
});

window.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    if (modalMap.classList.contains("modal-map-show")) {
      evt.preventDefault();
      modalMap.classList.remove("modal-map-show");
    }
  }
});

// Modal basket
const buyLinks = document.querySelectorAll(".card__button-buy")
const modalBasket = document.querySelector(".modal-basket")
const basketClose = document.querySelector(".modal-basket-top-btn-close")
const continueBuy = document.querySelector(".modal-basket-bottom-btn-close")
const basketLink = document.querySelector(".header-top-link-basket")

Array.from(buyLinks).forEach((link) => {
  link.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalBasket.classList.add("modal-basket-show");
    basketLink.classList.add("header-top-link-active");
  });
});

basketClose.addEventListener("click", () => {
  modalBasket.classList.remove("modal-basket-show");
});

continueBuy.addEventListener("click", () => {
  modalBasket.classList.remove("modal-basket-show");
});

window.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    if (modalBasket.classList.contains("modal-basket-show")) {
      evt.preventDefault();
      modalBasket.classList.remove("modal-basket-show");
    }
  }
});

// Slider promo

const allSlide = document.querySelectorAll(".promo-slider-img-wrapper")
const allPag = document.querySelectorAll(".promo-slider-pagination-radio")
const allArrow = document.querySelectorAll(".slider-btn")

const removeSliderActiveClass = () => {
  Array.from(allSlide).forEach((slide) => {
    slide.classList.remove("slider-active");
  });
};

const removePaginationActiveClass = () => {
  Array.from(allPag).forEach((pag) => {
    pag.classList.remove("radio-active");
  });
};

Array.from(allArrow).forEach((arrow, index) => {
  arrow.addEventListener("click", (evt) => {
    removeSliderActiveClass();
    removePaginationActiveClass();
    allSlide[index].classList.add("slider-active");
    allPag[index].classList.add("radio-active");
  });
});

Array.from(allPag).forEach((pag, index) => {
  pag.addEventListener("click", (evt) => {
    removeSliderActiveClass();
    removePaginationActiveClass();
    allPag[index].classList.add("radio-active");
    allSlide[index].classList.add("slider-active");
  });
});

// Slider services

const allBtn = document.querySelectorAll(".services-tabs-pagination-index")
const allTab = document.querySelectorAll(".services-tabs-item")

const removeTabActiveClass = () => {
  Array.from(allTab).forEach((tab) => {
    tab.classList.remove("services-tabs-item-active");
  });
};

const removeBtnActiveClass = () => {
  Array.from(allBtn).forEach((btn) => {
    btn.classList.remove("tab-active");
  });
};

Array.from(allBtn).forEach((btn, index) => {
  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    removeTabActiveClass();
    removeBtnActiveClass();
    allBtn[index].classList.add("tab-active");
    allTab[index].classList.add("services-tabs-item-active");
  });
});

// Bookmarks

const bookmarksBtns = document.querySelectorAll(".card__to-bookmark")
const bookmarksLink = document.querySelector(".header-top-link-bookmarks")

Array.from(bookmarksBtns).forEach((bookmark) => {
  bookmark.addEventListener("click", (evt) => {
    evt.preventDefault();
    bookmarksLink.classList.add("header-top-link-active");
  });
});
