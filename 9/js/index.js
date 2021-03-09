// Modal feedback
const modalLink = document.querySelector(".contacts-btn")
const modalFeedback = document.querySelector(".modal")
const btnClose = document.querySelector(".modal-btn")
const name = modalFeedback.querySelector("[name=your-name]")
const modalForm = modalFeedback.querySelector(".modal-form")
const email = modalFeedback.querySelector("[name=email]")

modalLink.addEventListener("click", function (event) {
  event.preventDefault();
  modalFeedback.classList.add("modal-show");
  name.focus();
});

btnClose.addEventListener("click", function () {
  modalFeedback.classList.remove("modal-show");
  modalFeedback.classList.remove("modal-error");
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (modalFeedback.classList.contains("modal-show")) {
      event.preventDefault();
      modalFeedback.classList.remove("modal-show");
    }
  }
});

modalForm.addEventListener("submit", function (event) {
  if (!name.value || !email.value) {
    event.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-error");
    name.focus();
  }
});

// Modal map
const mapLink = document.querySelector(".contacts-map")
const modalMap = document.querySelector(".modal-map")
const mapClose = document.querySelector(".map-close")

mapLink.addEventListener("click", function (event) {
  event.preventDefault();
  modalMap.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function () {
  modalMap.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (modalMap.classList.contains("modal-map-show")) {
      event.preventDefault();
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
const cardButtons = document.querySelectorAll(".card__buttons")

buyLinks.forEach(function (evt) {
  evt.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalBasket.classList.add("modal-basket-show");
    basketLink.classList.add("header-top-link-active");
  });
});

basketClose.addEventListener("click", function () {
  modalBasket.classList.remove("modal-basket-show");
});

continueBuy.addEventListener("click", function () {
  modalBasket.classList.remove("modal-basket-show");
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (modalBasket.classList.contains("modal-basket-show")) {
      event.preventDefault();
      modalBasket.classList.remove("modal-basket-show");
    }
  }
});

// Slider promo
const radio1 = document.querySelector(".radio-back")
const radio2 = document.querySelector(".radio-next")
const arrowBack = document.querySelector(".promo-slider-arrow-left")
const arrowNext = document.querySelector(".promo-slider-arrow-right")
const slider1 = document.querySelector(".promo-slider-img-punch")
const slider2 = document.querySelector(".promo-slider-img-drill")

radio1.addEventListener("click", function () {
  slider2.classList.remove("slider-active");
  slider1.classList.add("slider-active");
  radio2.classList.remove("active-radio");
  radio1.classList.add("active-radio");
});

radio2.addEventListener("click", function () {
  slider1.classList.remove("slider-active");
  slider2.classList.add("slider-active");
  radio1.classList.remove("active-radio");
  radio2.classList.add("active-radio");
});

arrowNext.addEventListener("click", function () {
  slider1.classList.remove("slider-active");
  slider2.classList.add("slider-active");
  radio1.classList.remove("active-radio");
  radio2.classList.add("active-radio");
});

arrowBack.addEventListener("click", function () {
  slider2.classList.remove("slider-active");
  slider1.classList.add("slider-active");
  radio2.classList.remove("active-radio");
  radio1.classList.add("active-radio");
});

// Slider services
const deliveryBtn = document.querySelector(".delivery")
const quaranteeBtn = document.querySelector(".quarantee")
const creditBtn = document.querySelector(".credit")
const deliveryDscr = document.querySelector(".services-tabs-item-delivery")
const quaranteeDscr = document.querySelector(".services-tabs-item-quarantee")
const creditDscr = document.querySelector(".services-tabs-item-credit")

quaranteeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  quaranteeBtn.classList.add("active-tab");
  quaranteeDscr.classList.add("services-tabs-item-active");
  deliveryBtn.classList.remove("active-tab");
  deliveryDscr.classList.remove("services-tabs-item-active");
  creditBtn.classList.remove("active-tab");
  creditDscr.classList.remove("services-tabs-item-active");
});

creditBtn.addEventListener("click", function (event) {
  event.preventDefault();
  creditBtn.classList.add("active-tab");
  creditDscr.classList.add("services-tabs-item-active");
  deliveryBtn.classList.remove("active-tab");
  deliveryDscr.classList.remove("services-tabs-item-active");
  quaranteeBtn.classList.remove("active-tab");
  quaranteeDscr.classList.remove("services-tabs-item-active");
});

deliveryBtn.addEventListener("click", function (event) {
  event.preventDefault();
  deliveryBtn.classList.add("active-tab");
  deliveryDscr.classList.add("services-tabs-item-active");
  creditBtn.classList.remove("active-tab");
  creditDscr.classList.remove("services-tabs-item-active");
  quaranteeBtn.classList.remove("active-tab");
  quaranteeDscr.classList.remove("services-tabs-item-active");
});

// Bookmarks

const bookmarksBtns = document.querySelectorAll(".card__to-bookmark")
const bookmarksLink = document.querySelector(".header-top-link-bookmarks")

bookmarksBtns.forEach(function (evt) {
  evt.addEventListener("click", function(evt) {
    evt.preventDefault();
    bookmarksLink.classList.add("header-top-link-active");
  });
});
