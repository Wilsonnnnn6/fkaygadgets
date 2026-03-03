const PRODUCTS = [
  { id: "ip6", name: "iPhone 6", year: 2014, storage: "16GB", price: 90000 },
  { id: "ip6p", name: "iPhone 6 Plus", year: 2014, storage: "16GB", price: 110000 },
  { id: "ip6s", name: "iPhone 6s", year: 2015, storage: "32GB", price: 115000 },
  { id: "ip6sp", name: "iPhone 6s Plus", year: 2015, storage: "32GB", price: 130000 },
  { id: "ipse", name: "iPhone SE (1st Gen)", year: 2016, storage: "32GB", price: 125000 },
  { id: "ip7", name: "iPhone 7", year: 2016, storage: "32GB", price: 140000 },
  { id: "ip7p", name: "iPhone 7 Plus", year: 2016, storage: "32GB", price: 165000 },
  { id: "ip8", name: "iPhone 8", year: 2017, storage: "64GB", price: 185000 },
  { id: "ip8p", name: "iPhone 8 Plus", year: 2017, storage: "64GB", price: 210000 },
  { id: "ipx", name: "iPhone X", year: 2017, storage: "64GB", price: 250000 },
  { id: "ipxr", name: "iPhone XR", year: 2018, storage: "64GB", price: 230000 },
  { id: "ipxs", name: "iPhone XS", year: 2018, storage: "64GB", price: 265000 },
  { id: "ipxsm", name: "iPhone XS Max", year: 2018, storage: "64GB", price: 300000 },
  { id: "ip11", name: "iPhone 11", year: 2019, storage: "64GB", price: 330000 },
  { id: "ip11p", name: "iPhone 11 Pro", year: 2019, storage: "64GB", price: 420000 },
  { id: "ip11pm", name: "iPhone 11 Pro Max", year: 2019, storage: "64GB", price: 470000 },
  { id: "ipse2", name: "iPhone SE (2nd Gen)", year: 2020, storage: "64GB", price: 300000 },
  { id: "ip12", name: "iPhone 12", year: 2020, storage: "64GB", price: 460000 },
  { id: "ip12m", name: "iPhone 12 mini", year: 2020, storage: "64GB", price: 430000 },
  { id: "ip12p", name: "iPhone 12 Pro", year: 2020, storage: "128GB", price: 560000 },
  { id: "ip12pm", name: "iPhone 12 Pro Max", year: 2020, storage: "128GB", price: 620000 },
  { id: "ip13", name: "iPhone 13", year: 2021, storage: "128GB", price: 640000 },
  { id: "ip13m", name: "iPhone 13 mini", year: 2021, storage: "128GB", price: 600000 },
  { id: "ip13p", name: "iPhone 13 Pro", year: 2021, storage: "128GB", price: 780000 },
  { id: "ip13pm", name: "iPhone 13 Pro Max", year: 2021, storage: "128GB", price: 860000 },
  { id: "ipse3", name: "iPhone SE (3rd Gen)", year: 2022, storage: "64GB", price: 470000 },
  { id: "ip14", name: "iPhone 14", year: 2022, storage: "128GB", price: 780000 },
  { id: "ip14p", name: "iPhone 14 Plus", year: 2022, storage: "128GB", price: 840000 },
  { id: "ip14pro", name: "iPhone 14 Pro", year: 2022, storage: "128GB", price: 950000 },
  { id: "ip14pm", name: "iPhone 14 Pro Max", year: 2022, storage: "128GB", price: 1100000 },
  { id: "ip15", name: "iPhone 15", year: 2023, storage: "128GB", price: 1020000 },
  { id: "ip15p", name: "iPhone 15 Plus", year: 2023, storage: "128GB", price: 1120000 },
  { id: "ip15pro", name: "iPhone 15 Pro", year: 2023, storage: "128GB", price: 1290000 },
  { id: "ip15pm", name: "iPhone 15 Pro Max", year: 2023, storage: "256GB", price: 1520000 },
  { id: "ip16", name: "iPhone 16", year: 2024, storage: "128GB", price: 1300000 },
  { id: "ip16p", name: "iPhone 16 Plus", year: 2024, storage: "128GB", price: 1420000 },
  { id: "ip16pro", name: "iPhone 16 Pro", year: 2024, storage: "256GB", price: 1680000 },
  { id: "ip16pm", name: "iPhone 16 Pro Max", year: 2024, storage: "256GB", price: 1890000 },
  { id: "ip17", name: "iPhone 17", year: 2025, storage: "128GB", price: 1540000 },
  { id: "ip17air", name: "iPhone 17 Air", year: 2025, storage: "256GB", price: 1760000 },
  { id: "ip17pro", name: "iPhone 17 Pro", year: 2025, storage: "256GB", price: 2010000 },
  { id: "ip17pm", name: "iPhone 17 Pro Max", year: 2025, storage: "512GB", price: 2340000 }
];

const CART_KEY = "gadget_cart_v1";
const DELIVERY_KEY = "gadget_delivery_v1";
const PRODUCT_IMAGES = {
  ip6: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6-ofic2.jpg",
  ip6p: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6-plus2.jpg",
  ip6s: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s.jpg",
  ip6sp: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s-plus.jpg",
  ipse: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se.jpg",
  ip7: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-7-new.jpg",
  ip7p: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-7-plus-r1.jpg",
  ip8: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-8-new.jpg",
  ip8p: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-8-plus-new.jpg",
  ipx: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x-new.jpg",
  ipxr: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg",
  ipxs: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg",
  ipxsm: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg",
  ip11: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",
  ip11p: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-.jpg",
  ip11pm: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg",
  ipse2: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020.jpg",
  ip12: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg",
  ip12m: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg",
  ip12p: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg",
  ip12pm: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max.jpg",
  ip13: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg",
  ip13m: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg",
  ip13p: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg",
  ip13pm: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",
  ipse3: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2022.jpg",
  ip14: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg",
  ip14p: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg",
  ip14pro: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",
  ip14pm: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max.jpg",
  ip15: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",
  ip15p: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-plus.jpg",
  ip15pro: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",
  ip15pm: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
  ip16: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg",
  ip16p: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-plus.jpg",
  ip16pro: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg",
  ip16pm: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
  ip17: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-17.jpg",
  ip17air: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-17-air.jpg",
  ip17pro: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-17-pro.jpg",
  ip17pm: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-17-pro-max.jpg"
};

function getCart() {
  try {
    const data = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    if (Array.isArray(data)) return data;
  } catch (error) {
    console.error(error);
  }
  return [];
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function getDeliveryDetails() {
  try {
    return JSON.parse(localStorage.getItem(DELIVERY_KEY) || "{}");
  } catch (error) {
    console.error(error);
    return {};
  }
}

function saveDeliveryDetails(details) {
  localStorage.setItem(DELIVERY_KEY, JSON.stringify(details));
}

function formatNaira(value) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(value);
}

function findProduct(productId) {
  return PRODUCTS.find((item) => item.id === productId);
}

function cartCount() {
  return getCart().reduce((acc, item) => acc + item.qty, 0);
}

function cartTotal() {
  return getCart().reduce((acc, item) => {
    const product = findProduct(item.id);
    return product ? acc + product.price * item.qty : acc;
  }, 0);
}

function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart(cart);
  refreshCartCount();
}

function updateQty(productId, delta) {
  const cart = getCart();
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.qty += delta;
  const cleaned = cart.filter((entry) => entry.qty > 0);
  saveCart(cleaned);
}

function clearCart() {
  saveCart([]);
  refreshCartCount();
}

function refreshCartCount() {
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = String(cartCount());
  });
}

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function buildFallbackImage(product) {
  const hue = hashString(product.id) % 360;
  const top = `hsl(${hue} 85% 90%)`;
  const bottom = `hsl(${(hue + 28) % 360} 80% 77%)`;
  const shell = `hsl(${(hue + 210) % 360} 18% 16%)`;
  const screen = `hsl(${(hue + 8) % 360} 42% 18%)`;
  const label = `hsl(${(hue + 240) % 360} 26% 98%)`;
  const name = product.name.replace(/&/g, "&amp;");

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="600" height="420" viewBox="0 0 600 420" role="img" aria-label="${name}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${top}" />
        <stop offset="100%" stop-color="${bottom}" />
      </linearGradient>
    </defs>
    <rect width="600" height="420" fill="url(#bg)" />
    <g transform="translate(210,44)">
      <rect width="180" height="332" rx="33" fill="${shell}" />
      <rect x="14" y="14" width="152" height="304" rx="24" fill="${screen}" />
      <rect x="76" y="7" width="28" height="4" rx="2" fill="#8994a5" />
      <circle cx="90" cy="346" r="12" fill="#344259" />
    </g>
    <rect x="30" y="28" width="250" height="40" rx="20" fill="rgba(255,255,255,0.75)" />
    <text x="48" y="54" font-size="22" font-weight="700" fill="#0d2a63">${name}</text>
    <text x="48" y="86" font-size="15" fill="#21437f">Released ${product.year} | ${product.storage}</text>
    <text x="48" y="114" font-size="15" fill="#21437f">BlueWave Gadget Store</text>
    <rect x="30" y="344" width="210" height="44" rx="12" fill="${label}" />
    <text x="48" y="372" font-size="21" font-weight="700" fill="#0d5bd8">${formatNaira(product.price)}</text>
  </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
}

function getImageCandidates(product) {
  const value = PRODUCT_IMAGES[product.id];
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function loadFirstWorkingImage(imageEl, candidates) {
  if (!imageEl || !candidates.length) return;

  let index = 0;
  const tryNext = () => {
    if (index >= candidates.length) return;
    const candidate = candidates[index];
    index += 1;

    const probe = new Image();
    probe.onload = () => {
      imageEl.src = candidate;
    };
    probe.onerror = () => {
      tryNext();
    };
    probe.src = candidate;
  };

  tryNext();
}

function createProductCard(product) {
  const fallbackImageUrl = buildFallbackImage(product);
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <img class="product-image" src="${fallbackImageUrl}" alt="${product.name}" data-fallback="${fallbackImageUrl}" loading="lazy" referrerpolicy="no-referrer" />
    <h3>${product.name}</h3>
    <p class="muted">${product.storage} | Released ${product.year}</p>
    <p class="price">${formatNaira(product.price)}</p>
    <div class="card-actions">
      <button class="button button-secondary" data-add="${product.id}">Add to Cart</button>
    </div>
  `;
  const image = card.querySelector("img");
  if (image) {
    loadFirstWorkingImage(image, getImageCandidates(product));
    image.addEventListener("error", () => {
      image.src = image.getAttribute("data-fallback") || "";
    });
  }
  return card;
}

function renderProducts(containerId, limit, items = PRODUCTS) {
  const target = document.getElementById(containerId);
  if (!target) return;

  target.innerHTML = "";
  const list = typeof limit === "number" ? items.slice(0, limit) : items;
  if (!list.length) {
    target.innerHTML = '<div class="card"><p class="muted">No iPhones match the selected filters.</p></div>';
    return;
  }

  list.forEach((product) => {
    target.appendChild(createProductCard(product));
  });
}

function bindAddButtons() {
  document.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-add");
      if (!productId) return;
      addToCart(productId);
      button.textContent = "Added";
      setTimeout(() => {
        button.textContent = "Add to Cart";
      }, 900);
    });
  });
}

function renderCart() {
  const root = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const emptyEl = document.getElementById("cart-empty");
  const payBtn = document.getElementById("go-to-payment");
  if (!root || !totalEl || !emptyEl) return;

  const items = getCart();
  root.innerHTML = "";
  if (!items.length) {
    emptyEl.style.display = "block";
    if (payBtn) {
      payBtn.classList.add("button-disabled");
      payBtn.setAttribute("aria-disabled", "true");
    }
  } else {
    emptyEl.style.display = "none";
    if (payBtn) {
      payBtn.classList.remove("button-disabled");
      payBtn.removeAttribute("aria-disabled");
    }
  }

  items.forEach((entry) => {
    const product = findProduct(entry.id);
    if (!product) return;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div>
        <h3>${product.name}</h3>
        <p class="muted">${product.storage} | ${formatNaira(product.price)}</p>
      </div>
      <div>
        <div class="qty-wrap">
          <button data-minus="${entry.id}">-</button>
          <strong>${entry.qty}</strong>
          <button data-plus="${entry.id}">+</button>
        </div>
        <p class="price">${formatNaira(product.price * entry.qty)}</p>
      </div>
    `;
    root.appendChild(row);
  });

  totalEl.textContent = formatNaira(cartTotal());

  document.querySelectorAll("[data-minus]").forEach((btn) => {
    btn.addEventListener("click", () => {
      updateQty(btn.getAttribute("data-minus"), -1);
      refreshCartCount();
      renderCart();
    });
  });

  document.querySelectorAll("[data-plus]").forEach((btn) => {
    btn.addEventListener("click", () => {
      updateQty(btn.getAttribute("data-plus"), 1);
      refreshCartCount();
      renderCart();
    });
  });
}

function setupDeliveryForm() {
  const form = document.getElementById("delivery-form");
  const status = document.getElementById("delivery-status");
  if (!form || !status) return;

  const saved = getDeliveryDetails();
  ["fullName", "email", "phone", "address", "city", "state"].forEach((field) => {
    if (saved[field] && form.elements[field]) {
      form.elements[field].value = saved[field];
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    saveDeliveryDetails(data);
    status.textContent = "Delivery details saved.";
  });
}

function setupProductFilters() {
  const filterRoot = document.getElementById("listing-filters");
  const yearSelect = document.getElementById("year-filter");
  const searchInput = document.getElementById("search-filter");
  const minInput = document.getElementById("min-price");
  const maxInput = document.getElementById("max-price");
  const clearButton = document.getElementById("clear-filters");
  const countNode = document.getElementById("listing-count");

  if (!filterRoot || !yearSelect || !searchInput || !minInput || !maxInput || !clearButton) {
    return;
  }

  const years = [...new Set(PRODUCTS.map((item) => item.year))].sort((a, b) => b - a);
  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = String(year);
    option.textContent = String(year);
    yearSelect.appendChild(option);
  });

  const runFilter = () => {
    const query = searchInput.value.trim().toLowerCase();
    const selectedYear = yearSelect.value;
    const minPrice = Number(minInput.value) || 0;
    const maxPrice = Number(maxInput.value) || Number.MAX_SAFE_INTEGER;

    const filtered = PRODUCTS.filter((product) => {
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.storage.toLowerCase().includes(query);
      const matchesYear = !selectedYear || String(product.year) === selectedYear;
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      return matchesSearch && matchesYear && matchesPrice;
    });

    renderProducts("all-products", undefined, filtered);
    bindAddButtons();
    if (countNode) {
      countNode.textContent = `${filtered.length} model${filtered.length === 1 ? "" : "s"} shown`;
    }
  };

  ["input", "change"].forEach((eventName) => {
    searchInput.addEventListener(eventName, runFilter);
    yearSelect.addEventListener(eventName, runFilter);
    minInput.addEventListener(eventName, runFilter);
    maxInput.addEventListener(eventName, runFilter);
  });

  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    yearSelect.value = "";
    minInput.value = "";
    maxInput.value = "";
    runFilter();
  });

  runFilter();
}

function setupPayment() {
  const totalNode = document.getElementById("payment-total");
  const btn = document.getElementById("pay-now");
  const status = document.getElementById("payment-status");
  if (!totalNode || !btn || !status) return;

  totalNode.textContent = formatNaira(cartTotal());

  btn.addEventListener("click", () => {
    const amount = cartTotal();
    if (!amount) {
      status.textContent = "Your cart is empty.";
      return;
    }

    const details = getDeliveryDetails();
    if (!details.fullName || !details.email || !details.phone || !details.address) {
      status.textContent = "Please fill and save delivery details before payment.";
      return;
    }

    if (typeof FlutterwaveCheckout !== "function") {
      status.textContent = "Flutterwave library is unavailable.";
      return;
    }

    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-8a582a02fe42a97299ededc9e11a6802-X",
      tx_ref: `gadget-${Date.now()}`,
      amount,
      currency: "NGN",
      payment_options: "card,banktransfer,ussd",
      customer: {
        email: details.email,
        phone_number: details.phone,
        name: details.fullName
      },
      customizations: {
        title: "Gadget Store",
        description: "iPhone order payment",
        logo: "https://cdn-icons-png.flaticon.com/512/731/731985.png"
      },
      callback: function () {
        status.textContent = "Payment completed. Thank you for your order.";
        clearCart();
        totalNode.textContent = formatNaira(0);
      },
      onclose: function () {
        status.textContent = "Payment window closed.";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  refreshCartCount();

  renderProducts("featured-products", 8);
  if (document.getElementById("featured-products")) {
    bindAddButtons();
  }

  if (document.getElementById("listing-filters")) {
    setupProductFilters();
  } else {
    renderProducts("all-products");
    if (document.getElementById("all-products")) {
      bindAddButtons();
    }
  }

  renderCart();
  setupDeliveryForm();
  setupPayment();

  const clearBtn = document.getElementById("clear-cart");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      clearCart();
      renderCart();
    });
  }
});
