// Modal basket
const buyLinks = document.querySelectorAll(".card__button-buy")
const modalBasket = document.querySelector(".modal-basket")
const basketClose = document.querySelector(".modal-basket-top-btn-close")
const continueBuy = document.querySelector(".modal-basket-bottom-btn-close")
const cardButtons = document.querySelectorAll(".card__buttons")

buyLinks.forEach(function (evt) {
  evt.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalBasket.classList.add("modal-basket-show");
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
