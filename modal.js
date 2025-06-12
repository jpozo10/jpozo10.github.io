// modal.js
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("productModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalRegion = document.getElementById("modalRegion");
  const modalOrigin = document.getElementById("modalOrigin");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.querySelector(".close");

  const productData = {
    "sombrero-vueltiao": {
      title: "Sombrero Vueltiao",
      image: "https://www.nuestratiendaartesanal.com/wp-content/uploads/2020/06/VU03-Sombrero-Vueltiao-varios.jpg",
      region: "Caribe",
      origin: "Córdoba",
      description: "El sombrero vueltiao es símbolo de identidad nacional. Hecho con caña flecha por artesanos Zenúes, representa una tradición de generaciones."
    },
    "mochila-wayuu": {
      title: "Mochila Wayuu",
      image: "https://www.bolsoswayuu.com.co/wp-content/uploads/4B100JRYY-mochilas-guajiras-para-mujer.jpg",
      region: "Caribe",
      origin: "La Guajira",
      description: "Cada mochila es tejida a mano por mujeres wayuu, con diseños únicos que representan su cosmovisión y sabiduría ancestral."
    },
    "cafe-organico": {
      title: "Café Orgánico Premium",
      image: "https://somoscorbera.com/wp-content/uploads/2022/11/410CafeColombia_LME0137-1.webp",
      region: "Andina",
      origin: "Huila",
      description: "Cultivado en tierras altas sin pesticidas, este café es símbolo del compromiso colombiano con la sostenibilidad y la calidad."
    },
    "hamaca-wayuu": {
      title: "Hamaca Wayuu",
      image: "https://hamacasdedioses.com/wp-content/uploads/2021/01/chinchorro-1-9.jpg",
      region: "Caribe",
      origin: "La Guajira",
      description: "Tradicionalmente tejidas por hombres wayuu, estas hamacas son símbolo de descanso, arte y armonía con la naturaleza."
    },
    "manta-wayuu": {
      title: "Manta Wayuu",
      image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/manta_wayuu_colores.jpg",
      region: "Caribe",
      origin: "La Guajira",
      description: "Vestimenta tradicional usada por mujeres wayuu, cada manta es un testimonio de la cultura y colorido de su comunidad."
    }
  };

  document.querySelectorAll(".btn-view-history").forEach(button => {
    button.addEventListener("click", function () {
      const productCard = this.closest(".product-card");
      const productKey = productCard.dataset.product;

      if (productData[productKey]) {
        const data = productData[productKey];
        modalTitle.textContent = data.title;
        modalImage.src = data.image;
        modalRegion.textContent = data.region;
        modalOrigin.textContent = data.origin;
        modalDescription.textContent = data.description;
        modal.style.display = "block";
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const logoutLink = document.getElementById("logout-link");
  if (logoutLink) {
    logoutLink.addEventListener("click", function (e) {
      e.preventDefault();
      // Opcional: limpiar sesión
      localStorage.removeItem("userEmail"); // si lo usaste
      // Redireccionar a inicio.html
      window.location.href = "index.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cart = [];
  const toggleCartBtn = document.getElementById("toggle-cart");
  const closeCartBtn = document.getElementById("close-cart");
  const cartPopup = document.getElementById("shopping-cart");
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");

  toggleCartBtn.addEventListener("click", () => {
    cartPopup.style.display = (cartPopup.style.display === "block") ? "none" : "block";
  });

  closeCartBtn.addEventListener("click", () => {
    cartPopup.style.display = "none";
  });

  document.querySelectorAll(".btn-add-cart").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");
      const name = card.querySelector("h3").textContent;
      const price = parseFloat(card.querySelector(".product-price").textContent.replace(/[^\d.-]/g, ""));
      const img = card.querySelector("img").src;
      cart.push({ name, price, img });
      actualizarCarrito();
    });
  });

  function actualizarCarrito() {
    cartList.innerHTML = "";
    let total = 0;
    cart.forEach((item, i) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price.toLocaleString()}`;
      cartList.appendChild(li);
      total += item.price;
    });
    cartTotal.textContent = `Total: $${total.toLocaleString()}`;
  }

  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

const phone = prompt("📱 Ingresa tu número de celular:");
if (!phone) return alert("Número no ingresado.");

const address = prompt("📍 Ingresa tu dirección:");
if (!address) return alert("Dirección no ingresada.");

const id = Math.floor(10000 + Math.random() * 90000);
let msg = `🧾 *Pedido #${id}*\n\n`;

let total = 0;
cart.forEach((item, i) => {
  msg += `*Producto ${i + 1}:* ${item.name}\n💵 Precio: $${item.price}\n🖼️ ${item.img}\n\n`;
  total += item.price;
});

msg += `📍 *Dirección:* ${address}\n📞 *Tel:* ${phone}\n💰 *Total:* $${total}`;

const url = `https://wa.me/573184424004?text=${encodeURIComponent(msg)}`;
window.open(url, "_blank");

  });
});