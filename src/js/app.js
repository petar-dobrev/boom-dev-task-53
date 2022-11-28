import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const product = document.querySelector(".product");
  const priceValue = document.querySelector(".price").innerText;
  product.setAttribute("data-price", priceValue);
});
