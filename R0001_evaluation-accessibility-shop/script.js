/*****************************
 * DONNÉES
 *****************************/

// Tableau de 4 produits minimum, comme demandé dans l'énoncé.
const products = [
  {
    id: 1,
    name: "Casque Audio Pro",
    price: 199.99,
    category: "audio",
    description: "Casque audio professionnel avec réduction de bruit active",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    id: 2,
    name: "Enceinte Bluetooth",
    price: 89.99,
    category: "audio",
    description: "Enceinte portable avec une bonne autonomie",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    id: 3,
    name: "Clavier Mécanique",
    price: 129.99,
    category: "périphériques",
    description: "Clavier confortable pour travailler et jouer",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    id: 4,
    name: "Écran 4K",
    price: 349.99,
    category: "écrans",
    description: "Écran haute résolution idéal pour le multimédia",
    image: "https://picsum.photos/600/400?random=4",
  },
];

/*****************************
 * ÉTAT DE L'APPLICATION
 *****************************/

let currentFontSize = 16;

/*****************************
 * FONCTIONS PRINCIPALES
 *****************************/

/**
 * Affiche les produits dans la page.
 * On utilise filter() pour filtrer et map() pour créer le HTML.
 */
function displayProducts(category = "all") {
  const productList = document.querySelector(".product-list");

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  productList.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card" data-product-id="${product.id}">
          <div
            class="img-placeholder"
            style="background-image: url('${product.image}')"
          ></div>
          <div class="product-info">
            <div class="product-info-top">
              <h2>${product.name}</h2>
              <span>${product.category}</span>
            </div>
            <p>${product.price.toFixed(2)} €</p>
            <button class="add-to-cart" data-product-id="${product.id}">
              Ajouter au panier
            </button>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      showProductDetails(Number(card.dataset.productId));
    });
  });
}

/**
 * Affiche la modale d'un produit.
 * On utilise find() pour retrouver le produit cliqué grâce à son id.
 */
function showProductDetails(productId) {
  const product = products.find((product) => product.id === productId);

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <img class="modal-image" src="${product.image}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p class="price">${product.price.toFixed(2)} €</p>
      <p>${product.description}</p>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".close").addEventListener("click", () => {
    modal.remove();
  });
}

/*****************************
 * FONCTIONS D'ACCESSIBILITÉ
 *****************************/

// Augmente ou diminue la taille du texte.
function changeFontSize(value) {
  currentFontSize += value;
  document.documentElement.style.fontSize = `${currentFontSize}px`;
}

// Active ou désactive le thème sombre.
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Active ou désactive la police dyslexie.
function toggleDyslexiaFont() {
  document.body.classList.toggle("dyslexia");
}

// Ouvre ou ferme la fenêtre d'accessibilité.
function toggleAccessibilityPanel() {
  document.querySelector(".accessibility-panel").toggleAttribute("hidden");
}

/*****************************
 * INITIALISATION
 *****************************/

document.addEventListener("DOMContentLoaded", () => {
  displayProducts();

  document.querySelectorAll(".categories button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".categories .active").classList.remove("active");
      button.classList.add("active");
      displayProducts(button.dataset.category);
    });
  });

  document
    .querySelector("#increase-font")
    .addEventListener("click", () => changeFontSize(1));

  document
    .querySelector("#decrease-font")
    .addEventListener("click", () => changeFontSize(-1));

  document
    .querySelector("#toggle-dark")
    .addEventListener("click", toggleDarkMode);

  document
    .querySelector("#toggle-dyslexia")
    .addEventListener("click", toggleDyslexiaFont);

  document
    .querySelector("#toggle-accessibility")
    .addEventListener("click", toggleAccessibilityPanel);

  document
    .querySelector("#close-accessibility")
    .addEventListener("click", toggleAccessibilityPanel);
});
