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

// Bookmarks

const bookmarksBtns = document.querySelectorAll(".card__to-bookmark")
const bookmarksLink = document.querySelector(".header-top-link-bookmarks")

Array.from(bookmarksBtns).forEach((bookmark) => {
  bookmark.addEventListener("click", (evt) => {
    evt.preventDefault();
    bookmarksLink.classList.add("header-top-link-active");
  });
});
