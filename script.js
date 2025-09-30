// script.js
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

let cart = [];
function addToCart(item, price) {
  cart.push({ item, price });
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";
  let total = 0;
  cart.forEach(c => {
    const li = document.createElement("li");
    li.textContent = `${c.item} - ${c.price} AED`;
    list.appendChild(li);
    total += c.price;
  });
  document.getElementById("cart-total").textContent = total.toFixed(2);
}
