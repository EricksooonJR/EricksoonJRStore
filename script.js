const products = [
  {
    id: 1,
    name: "Stanley Activate Shaker",
    category: "Termos",
    brand: "Stanley",
    capacity: "20 oz",
colors: [
  { name: "Negro", code: "rgb(0, 0, 0)", image: "img/shaker3.png" },
  { name: "Azul", code: "rgb(77, 167, 236)", image: "img/shaker1.png" },
  { name: "Café", code: "rgb(202, 189, 158)", image: "img/shaker2.png" },
  { name: "Gris", code: "rgb(127, 146, 164)", image: "img/shaker4.png" },
  { name: "Morado", code: "rgb(123, 125, 170)", image: "img/shaker5.png" }
],
    price: 550,
    image: "img/shaker3.png",
    whatsapp: "522381445102"
  },
  {
    id: 2,
    name: "Stanley IceFlow",
    category: "Termos",
    brand: "Stanley",
    capacity: "16 oz",
colors: [
  { name: "Negro", code: "rgb(0, 0, 0)", image: "img/iceflownegro.png" },
  { name: "Azul", code: "rgb(77, 167, 236)", image: "img/iceflowazul.png" }
],
    price: 350,
    image: "img/iceflownegro.png",
    whatsapp: "522381445102"
  },
   {
    id: 4,
    name: "Alo",
    category: "Termos",
    brand: "Alo",
    capacity: "40 oz",
colors: [
  { name: "Negro", code: "rgb(0, 0, 0)", image: "img/alonegro.png" },
  { name: "Turquesa", code: "rgb(122, 236, 242)", image: "img/aloturquesa.png" },
  { name: "Rosa", code: "rgb(249, 63, 150)", image: "img/alorosa.png" },
  { name: "Gris", code: "rgb(208, 212, 210)", image: "img/alogris.png" }
],
    price: 350,
    image: "img/alonegro.png",
    whatsapp: "522381445102"
  },
   {
    id: 5,
    name: "Cristiano Ronaldo",
    category: "Termos",
    brand: "Owala",
    capacity: "32 oz",
colors: [
  { name: "Verde", code: "rgb(82, 193, 158)", image: "img/crverde.png" }
],
    price: 550,
    image: "img/crverde.png",
    whatsapp: "522381445102"
  },
   
  {
    id: 7,
    name: "Owala FreeSip",
    category: "Termos",
    brand: "Owala",
    capacity: "40 oz",
colors: [
  { name: "Morado", code: "rgb(197, 80, 225)", image: "img/owala40morado.png" },
    { name: "Turquesa", code: "rgb(117, 232, 235)", image: "img/owala40turquesa.png" }
],
    price: 500,
    image: "img/owala27.png",
    whatsapp: "522381445102"
  },
    {
    id: 8,
    name: "Owala FreeSip Twist Diseño",
    category: "Termos",
    brand: "Owala",
    capacity: "24 oz",
colors: [
  { name: "Tiburones", code: "rgb(160, 187, 205)", image: "img/owalatwisttibu.png" }
],
    price: 450,
    image: "img/owala27.png",
    whatsapp: "522381445102"
  },
      {
    id: 9,
    name: "Owala FreeSip Diseño",
    category: "Termos",
    brand: "Owala",
    capacity: "32 oz",
colors: [
  { name: "Dona", code: "rgb(212, 128, 160)", image: "img/32dona.png" },
  { name: "Flores Rojo", code: "rgb(145, 38, 62)", image: "img/32floresrojo.png" },
  { name: "Flores Verde", code: "rgb(153, 200, 114)", image: "img/32floresverde.png" },
  { name: "Stitch", code: "rgb(83, 103, 188)", image: "img/32stitch.png" },
  { name: "Wicked", code: "rgb(32, 74, 46)", image: "img/32wicked.png" },  
  { name: "Flores", code: "rgb(43, 44, 53)", image: "img/32floresnegro.png" },  
  { name: "Cuadros verde", code: "rgb(66, 71, 62)", image: "img/32cuadrosverde.png" }
],
    price: 500,
    image: "img/diseño32.png",
    whatsapp: "522381445102"
  },
        {
    id: 10,
    name: "Owala FreeSip Tumbler",
    category: "Termos",
    brand: "Owala",
    capacity: "40 oz",
colors: [
  { name: "Azul", code: "rgb(15, 32, 67)", image: "img/owalatumblerazul.png" },
 { name: "Rosa", code: "rgb(166, 112, 120)", image: "img/owalatumblerrosa.png" }
],
    price: 500,
    image: "img/diseño32.png",
    whatsapp: "522381445102"
  },
   {
    id: 11,
    name: "Owala Kids' Tumbler",
    category: "Termos",
    brand: "Owala",
    capacity: "12 oz",
colors: [
  { name: "Amarillo", code: "rgb(190, 151, 74)", image: "img/12amarillo.png" }
],
    price: 280,
    image: "img/12amarillo.png",
    whatsapp: "522381445102"
  },
  {
    id: 12,
    name: "Owala FreeSip",
    category: "Termos",
    brand: "Owala",
    capacity: "27 oz",
colors: [
  { name: "Morado", code: "rgb(197, 80, 225)", image: "img/owala27.png" }
],
    price: 500,
    image: "img/owala27.png",
    whatsapp: "522381445102"
  },
  {
    id: 20,
    name: "Llavero Termo Stanley",
    category: "Llaveros",
    brand: "Llavero Stanley",
    colors: [
  { name: "Azul Rey", code: "rgb(42, 57, 211)", image: "img/llaverostanley.png" },
  { name: "Azul", code: "rgb(75, 162, 254)", image: "img/llaverostanley.png" },
  { name: "Blanco", code: "rgb(235, 242, 239)", image: "img/llaverostanley.png" },
  { name: "Verde", code: "rgb(217, 245, 91)", image: "img/llaverostanley.png" },
],
    price: 50,
    image: "img/llaverostanley.png",
    whatsapp: "522381445102"
  },
  {
    id: 21,
    name: "Llavero Nike",
    category: "Llaveros",
    brand: "Llavero Nike",
    colors: [
  { name: "Azul Rey", code: "rgb(74, 143, 199)", image: "img/tenisazul.png" },
  { name: "Negro", code: "rgb(0, 0, 0)", image: "img/tenisnegro.png" },
  { name: "Blanco", code: "rgb(255, 255, 255)", image: "img/tenisblanco.png" },
  { name: "Rosa", code: "rgb(209, 119, 122)", image: "img/tenisrosa.png" },
  { name: "Verde", code: "rgb(84, 182, 203)", image: "img/tenisverde.png" }

],
    price: 150,
    image: "img/tenisazul.png",
    whatsapp: "522381445102"
  },
    {
    id: 22,
    name: "Llavero Mundial",
    category: "Llaveros",
    brand: "Llavero Mundial",
    colors: [
  { name: "Multicolor", code: "rgb(255, 255, 255)", image: "img/mundial.png" }
],
    price: 65,
    image: "img/mundial.png",
    whatsapp: "522381445102"
  }
  
];

let selectedCategory = "Todos";
let selectedBrands = [];
let selectedColorByProduct = {};

const productsContainer = document.getElementById("productsContainer");
const brandFilters = document.getElementById("brandFilters");
const searchInput = document.getElementById("searchInput");
const resultsCount = document.getElementById("resultsCount");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderBrands() {
  const brands = [...new Set(products.map(product => product.brand))];

  brandFilters.innerHTML = brands.map(brand => `
    <label>
      <input type="checkbox" value="${brand}" class="brand-checkbox" />
      ${brand}
    </label>
  `).join("");

  document.querySelectorAll(".brand-checkbox").forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      selectedBrands = [...document.querySelectorAll(".brand-checkbox:checked")].map(cb => cb.value);
      renderProducts();
    });
  });
}

function renderProducts() {
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.brand.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText);

    return matchCategory && matchBrand && matchSearch;
  });

  resultsCount.textContent = `${filteredProducts.length} producto(s)`;

  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = `
      <div class="no-results">
        <h3>No se encontraron productos</h3>
        <p>Prueba con otra búsqueda o cambia los filtros.</p>
      </div>
    `;
    return;
  }

  productsContainer.innerHTML = filteredProducts.map(product => {
    const selectedColor = selectedColorByProduct[String(product.id)] || (product.colors && product.colors.length > 0 ? product.colors[0].name : "No especificado");
    const message = encodeURIComponent(`Hola, me interesa este producto: ${product.name} - Color: ${selectedColor}`);
    const whatsappLink = `https://wa.me/${product.whatsapp}?text=${message}`;

    return `
      <div class="product-card">
        <img src="${product.colors && product.colors.length > 0 ? (product.colors.find(color => color.name === selectedColor)?.image || product.image) : product.image}" alt="${product.name}" class="product-image" />

        <div class="product-info">
          <p class="product-brand">${product.brand}</p>
          <h3 class="product-title">${product.name}</h3>
          
          ${product.capacity ? `<p class="product-capacity">${product.capacity}</p>` : ""}
          
          <span class="product-category">${product.category}</span>

          ${
            product.colors && product.colors.length > 0
              ? `
                <div class="color-options">
                  ${product.colors.map((color, index) => `
                    <span
                      class="color-circle ${((selectedColorByProduct[String(product.id)] ? selectedColorByProduct[String(product.id)] === color.name : index === 0)) ? "active" : ""}"
                      style="background:${color.code}"
                      data-image="${color.image}"
                      data-product="${product.id}"
                      data-color="${color.name}"
                      title="${color.name}"
                    ></span>
                  `).join("")}
                </div>
              `
              : ""
          }

          <p class="product-price">$${product.price} MXN</p>

          <div class="product-actions">
            <button class="btn-buy" data-id="${product.id}">Ver producto</button>
            <a href="${whatsappLink}" target="_blank" class="btn-whatsapp">WhatsApp</a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    selectedCategory = button.dataset.category;
    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);
document.getElementById("searchBtn").addEventListener("click", renderProducts);

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("color-circle")) {
    const circles = e.target.parentElement.querySelectorAll(".color-circle");
    circles.forEach(circle => circle.classList.remove("active"));
    e.target.classList.add("active");

    const newImage = e.target.getAttribute("data-image");
    const selectedColor = e.target.getAttribute("data-color");
    const productId = e.target.getAttribute("data-product");
    const card = e.target.closest(".product-card");
    const img = card.querySelector(".product-image");
    const whatsappBtn = card.querySelector(".btn-whatsapp");
    const product = products.find(item => String(item.id) === productId);

    selectedColorByProduct[String(productId)] = selectedColor;

    if (newImage && img) {
      img.src = newImage;
    }

    if (whatsappBtn && product) {
      const currentColor = selectedColorByProduct[String(productId)] || selectedColor || "No especificado";
      const message = encodeURIComponent(`Hola, me interesa este producto: ${product.name} - Color: ${currentColor}`);
      whatsappBtn.href = `https://wa.me/${product.whatsapp}?text=${message}`;
    }
  }
});
const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");

document.addEventListener("click", function (e) {

  // ABRIR MODAL
  if (e.target.classList.contains("btn-buy")) {
  const productId = Number(e.target.getAttribute("data-id"));
  const product = products.find(p => p.id === productId);

  if (!product) return;

  const selectedColor =
    selectedColorByProduct[String(product.id)] ||
    (product.colors && product.colors.length > 0 ? product.colors[0].name : "No especificado");

  const selectedColorData =
    product.colors?.find(color => color.name === selectedColor) || null;

  const modalImage = selectedColorData?.image || product.image;

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa este producto: ${product.name} - Color: ${selectedColor}`
  );

  modal.style.display = "flex";

  modalBody.innerHTML = `
    <h2>${product.name}</h2>

    <img
      id="modalProductImage"
      src="${modalImage}"
      alt="${product.name}"
      style="width:100%; border-radius:10px; margin:10px 0;"
    />

    <p><strong>Marca:</strong> ${product.brand}</p>
    ${product.capacity ? `<p><strong>Capacidad:</strong> ${product.capacity}</p>` : ""}
    <p><strong>Precio:</strong> $${product.price} MXN</p>

    ${
      product.colors && product.colors.length > 0
        ? `
          <div class="modal-color-section">
            <p><strong>Color:</strong> <span id="modalSelectedColor">${selectedColor}</span></p>
            <div class="color-options modal-color-options">
              ${product.colors.map(color => `
                <span
                  class="color-circle modal-color-circle ${selectedColor === color.name ? "active" : ""}"
                  style="background:${color.code}"
                  data-modal-product="${product.id}"
                  data-modal-color="${color.name}"
                  data-modal-image="${color.image}"
                  title="${color.name}"
                ></span>
              `).join("")}
            </div>
          </div>
        `
        : ""
    }

    <a
      id="modalWhatsappBtn"
      href="https://wa.me/${product.whatsapp}?text=${whatsappMessage}"
      target="_blank"
      class="btn-whatsapp"
      style="margin-top:15px; display:block; text-align:center;"
    >
      Comprar por WhatsApp
    </a>
  `;
}

  // CERRAR MODAL
  if (e.target.classList.contains("close-modal")) {
    modal.style.display = "none";
  }
if (e.target.classList.contains("modal-color-circle")) {
  const productId = e.target.getAttribute("data-modal-product");
  const selectedColor = e.target.getAttribute("data-modal-color");
  const newImage = e.target.getAttribute("data-modal-image");

  const product = products.find(item => String(item.id) === String(productId));
  if (!product) return;

  selectedColorByProduct[String(productId)] = selectedColor;

  const modalImage = document.getElementById("modalProductImage");
  const modalSelectedColor = document.getElementById("modalSelectedColor");
  const modalWhatsappBtn = document.getElementById("modalWhatsappBtn");

  document.querySelectorAll(".modal-color-circle").forEach(circle => {
    circle.classList.remove("active");
  });
  e.target.classList.add("active");

  if (modalImage && newImage) {
    modalImage.src = newImage;
  }

  if (modalSelectedColor) {
    modalSelectedColor.textContent = selectedColor;
  }

  if (modalWhatsappBtn) {
    const whatsappMessage = encodeURIComponent(
      `Hola, me interesa este producto: ${product.name} - Color: ${selectedColor}`
    );
    modalWhatsappBtn.href = `https://wa.me/${product.whatsapp}?text=${whatsappMessage}`;
  }

  renderProducts();
}
});
renderBrands();
renderProducts();
