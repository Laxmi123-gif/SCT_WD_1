// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  // If user scrolls more than 50px
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});

// ===============================
// ACTIVE NAVIGATION
// ===============================

navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Remove active from all links
    navItems.forEach(function (link) {
      link.classList.remove("active");
    });

    // Add active to clicked link
    item.classList.add("active");
  });
});

// ===============================
// SEARCH
// ===============================

const searchBtn = document.getElementById("searchBtn");

const searchContainer = document.getElementById("searchContainer");

const closeSearch = document.getElementById("closeSearch");

searchBtn.addEventListener("click", function () {
  searchContainer.classList.toggle("show");
});

closeSearch.addEventListener("click", function () {
  searchContainer.classList.remove("show");
});

// ===============================
// SEARCH PRODUCTS
// ===============================

const searchInput = document.getElementById("searchInput");

const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  productCards.forEach(function (card) {
    const productName = card.querySelector("h3").textContent.toLowerCase();

    const category = card
      .querySelector(".product-category")
      .textContent.toLowerCase();

    if (productName.includes(searchText) || category.includes(searchText)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});

// ===============================
// ADD TO CART
// ===============================

const addCartButtons = document.querySelectorAll(".add-cart");

const cartCount = document.getElementById("cartCount");

let cartItems = 0;

addCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Increase cart count
    cartItems++;

    // Update cart number
    cartCount.textContent = cartItems;

    // Get product name
    const productName = button.getAttribute("data-product");

    // Change button temporarily
    button.innerHTML = '<i class="fa-solid fa-check"></i> Added';

    button.style.background = "#222";

    button.style.color = "white";

    setTimeout(function () {
      button.innerHTML = '<i class="fa-solid fa-cart-plus"></i> Add';

      button.style.background = "";

      button.style.color = "";
    }, 1500);

    // Small notification

    showNotification(productName + " added to cart!");
  });
});


function showNotification(message) {
  const notification = document.createElement("div");

  notification.textContent = message;

  notification.style.position = "fixed";

  notification.style.bottom = "25px";

  notification.style.right = "25px";

  notification.style.background = "#1d1d1f";

  notification.style.color = "white";

  notification.style.padding = "14px 20px";

  notification.style.borderRadius = "8px";

  notification.style.fontSize = "13px";

  notification.style.zIndex = "2000";

  notification.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";

  document.body.appendChild(notification);

  setTimeout(function () {
    notification.remove();
  }, 2000);
}


const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const icon = button.querySelector("i");

    if (icon.classList.contains("fa-regular")) {
      icon.classList.remove("fa-regular");

      icon.classList.add("fa-solid");

      icon.style.color = "#ff5a36";

      showNotification("Added to wishlist ❤️");
    } else {
      icon.classList.remove("fa-solid");

      icon.classList.add("fa-regular");

      icon.style.color = "";

      showNotification("Removed from wishlist");
    }
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Remove active class
    filterButtons.forEach(function (btn) {
      btn.classList.remove("active-filter");
    });

    // Add active class
    button.classList.add("active-filter");
  });
});
