function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartDiv = document.getElementById("cartItems");
  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartDiv.innerHTML += `
      <p>${item.name} - Ksh ${item.price} 
      <button onclick="removeItem(${index})">Remove</button></p>
    `;
  });

  document.getElementById("total").textContent = "Total: Ksh " + total;
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
}

function checkout() {
  const method = prompt("Choose payment method:\n1 - M-Pesa (Pay Now)\n2 - Cash on Delivery");
  if (method === "1" || method === "2") {
    alert("Your order has been placed! Please prepare payment on delivery.");
    localStorage.removeItem("cart");
    displayCart();
  } else {
    alert("Checkout cancelled.");
  }
}

window.onload = displayCart;
