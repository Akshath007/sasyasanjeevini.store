// ==========================================================================
// SASYA SANJEEVINI - CORE APPLICATION LOGIC
// Live Search • Filters • WhatsApp Cart • Soil Calculator • Flipbook
// Data loaded from products-data.js (CATEGORIES, PRODUCTS, SOIL_CALCULATOR_PRESETS)
// ==========================================================================

const state = {
  activeCategory: 'all',
  searchQuery: '',
  selectedVariants: {}, // productId -> variant index
  cart: [],             // array of { id, productId, name, variantLabel, price, qty, image }
  calculator: {
    potSizeId: '12',
    potQty: 4,
    plantTypeId: 'general'
  },
  flipbook: {
    currentPage: 1,
    totalPages: 6
  }
};

// ---------------- INITIALIZATION ----------------
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  initCategoryChips();
  renderProducts();
  initSearch();
  initCartDrawer();
  initSoilCalculator();
  initFlipbookModal();
  initProductModal();
  updateLiveStoreStatus();
  initSmoothScroll();
  initCustomerGuide();
  initMobileDock();
});

// ---------------- STORE HOURS / LIVE STATUS ----------------
function updateLiveStoreStatus() {
  const statusEl = document.getElementById('liveStoreStatus');
  if (!statusEl) return;

  // Store hours: 09:00 to 20:00 IST every day
  const now = new Date();
  // Get IST hours
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istDate = new Date(utc + (3600000 * 5.5));
  const hour = istDate.getHours();

  const isOpen = (hour >= 9 && hour < 20);

  if (isOpen) {
    statusEl.innerHTML = `<span class="pulse-dot"></span> <span>Store Open Now (Until 8 PM)</span>`;
    statusEl.className = 'live-status-pill';
  } else {
    statusEl.innerHTML = `<span style="width:6px;height:6px;border-radius:50%;background:#FBBF24;"></span> <span>Opens Tomorrow at 9 AM</span>`;
    statusEl.className = 'live-status-pill';
    statusEl.style.color = '#FDE68A';
    statusEl.style.borderColor = 'rgba(245, 158, 11, 0.4)';
    statusEl.style.background = 'rgba(245, 158, 11, 0.15)';
  }
}

// ---------------- CATEGORY CHIPS ----------------
function initCategoryChips() {
  const container = document.getElementById('categoryChips');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => {
    const isActive = cat.id === state.activeCategory ? 'active' : '';
    return `
      <button class="category-chip ${isActive}" data-category="${cat.id}">
        <span>${cat.name}</span>
        <span class="chip-count">${cat.count}</span>
      </button>
    `;
  }).join('');

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.category-chip');
    if (!btn) return;
    const catId = btn.dataset.category;
    state.activeCategory = catId;

    // update active classes
    container.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');

    renderProducts();
  });
}

// ---------------- SEARCH ----------------
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    if (clearBtn) {
      clearBtn.classList.toggle('visible', state.searchQuery.length > 0);
    }
    renderProducts();
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearBtn.classList.remove('visible');
      renderProducts();
      searchInput.focus();
    });
  }
}

// ---------------- RENDER PRODUCTS ----------------
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('resultsCount');
  if (!grid) return;

  // Filter products
  const filtered = PRODUCTS.filter(prod => {
    // category filter
    const matchesCategory = state.activeCategory === 'all' || prod.category === state.activeCategory;
    if (!matchesCategory) return false;

    // search filter
    if (!state.searchQuery) return true;
    const q = state.searchQuery;
    const inName = prod.name.toLowerCase().includes(q);
    const inDesc = prod.shortDesc.toLowerCase().includes(q);
    const inCat = prod.categoryName.toLowerCase().includes(q);
    const inKeywords = prod.keywords && prod.keywords.some(k => k.includes(q));
    const inSpecs = prod.specs && prod.specs.some(s => s.toLowerCase().includes(q));
    return inName || inDesc || inCat || inKeywords || inSpecs;
  });

  if (countEl) {
    countEl.innerHTML = `Showing <strong>${filtered.length}</strong> of ${PRODUCTS.length} authentic nursery products`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results-box">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <h3>No matching products found</h3>
        <p style="color:var(--text-muted);margin-bottom:1.5rem;">Try a different keyword like "Goat manure", "Cocopeat", "Hanging pot", or "Stand".</p>
        <button class="btn-secondary" id="resetFiltersBtn">Reset All Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('resetFiltersBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.activeCategory = 'all';
        state.searchQuery = '';
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = '';
        initCategoryChips();
        renderProducts();
      });
    }
    return;
  }

  grid.innerHTML = filtered.map(prod => {
    const selectedVarIdx = state.selectedVariants[prod.id] || 0;
    const currentVar = prod.variants[selectedVarIdx] || prod.variants[0];
    const variantButtons = prod.variants.map((v, idx) => {
      const shortLabel = v.label
        .replace(' (Bulk Wholesale)', ' (Bulk)')
        .replace(' (Heavy Duty)', '')
        .replace(' (Standard)', '')
        .replace(' (Medium)', '');
      return `
      <button class="variant-btn ${idx === selectedVarIdx ? 'active' : ''}" 
              data-product-id="${prod.id}" 
              data-variant-idx="${idx}"
              title="${v.label}">
        ${shortLabel}
      </button>
    `;}).join('');

    const badgeHtml = prod.tag ? `<span class="product-badge-tag">${prod.tag}</span>` : '';

    return `
      <div class="product-card" data-product-id="${prod.id}">
        <div class="product-thumb-box" data-action="quick-view" data-product-id="${prod.id}">
          ${badgeHtml}
          <img src="${prod.image}" alt="${prod.name}" class="product-thumb" onerror="this.onerror=null; this.src='assets/logo.png';">
          <button class="product-quick-view-btn" title="Quick Details" data-action="quick-view" data-product-id="${prod.id}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
        <div class="product-content">
          <span class="product-category-label">${prod.categoryName}</span>
          <h3 class="product-name" data-action="quick-view" data-product-id="${prod.id}">${prod.name}</h3>
          <p class="product-desc-snippet">${prod.shortDesc}</p>
          
          <div class="variant-selector">
            ${variantButtons}
          </div>

          <div class="product-footer">
            <div class="price-container">
              <span class="price-current">₹${currentVar.price}</span>
              <span class="price-unit">${currentVar.label}</span>
            </div>
            <button class="btn-add-cart" data-action="add-cart" data-product-id="${prod.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Event Delegation for Card Actions
  grid.querySelectorAll('.variant-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pId = btn.dataset.productId;
      const vIdx = parseInt(btn.dataset.variantIdx, 10);
      state.selectedVariants[pId] = vIdx;
      renderProducts();
    });
  });

  grid.querySelectorAll('[data-action="add-cart"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pId = btn.dataset.productId;
      addToCart(pId);
      btn.classList.add('added');
      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Added!</span>
      `;
      setTimeout(() => {
        btn.classList.remove('added');
        btn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          <span>Add to Cart</span>
        `;
      }, 1400);
    });
  });

  grid.querySelectorAll('[data-action="quick-view"]').forEach(el => {
    el.addEventListener('click', () => {
      const pId = el.dataset.productId;
      openProductModal(pId);
    });
  });
}

// ---------------- CART SYSTEM ----------------
function addToCart(productId, customVariantIdx = null, customQty = 1) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const vIdx = customVariantIdx !== null ? customVariantIdx : (state.selectedVariants[productId] || 0);
  const variant = prod.variants[vIdx] || prod.variants[0];

  const cartItemId = `${prod.id}__${variant.label}`;
  const existing = state.cart.find(item => item.cartItemId === cartItemId);

  if (existing) {
    existing.qty += customQty;
  } else {
    state.cart.push({
      cartItemId,
      productId: prod.id,
      name: prod.name,
      variantLabel: variant.label,
      price: variant.price,
      qty: customQty,
      image: prod.image,
      categoryName: prod.categoryName
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Added ${prod.name} (${variant.label}) to cart!`);
}

function updateCartItemQty(cartItemId, delta) {
  const item = state.cart.find(i => i.cartItemId === cartItemId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.cartItemId !== cartItemId);
  }

  saveCartToStorage();
  updateCartUI();
}

function updateCartUI() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Update Header Badges
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  });

  // Update Floating Pill
  const pill = document.getElementById('floatingCartPill');
  const pillCount = document.getElementById('pillCartCount');
  const pillTotal = document.getElementById('pillCartTotal');
  if (pill && pillCount && pillTotal) {
    if (totalItems > 0) {
      pill.classList.add('visible');
      pillCount.textContent = totalItems;
      pillTotal.textContent = `₹${subtotal}`;
    } else {
      pill.classList.remove('visible');
    }
  }

  // Update Drawer Body
  const drawerBody = document.getElementById('cartDrawerBody');
  const drawerSubtotal = document.getElementById('drawerSubtotal');
  const drawerTotal = document.getElementById('drawerTotal');

  if (drawerSubtotal) drawerSubtotal.textContent = `₹${subtotal}`;
  if (drawerTotal) drawerTotal.textContent = `₹${subtotal}`;

  if (!drawerBody) return;

  if (state.cart.length === 0) {
    drawerBody.innerHTML = `
      <div class="cart-empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        <h4 style="color:var(--forest-950);margin-bottom:0.4rem;">Your cart is empty</h4>
        <p style="font-size:0.85rem;">Explore our organic manures, pots, and metal stands above.</p>
      </div>
    `;
    return;
  }

  drawerBody.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-variant">${item.variantLabel} • ₹${item.price} each</div>
        <div class="cart-item-price">₹${item.price * item.qty}</div>
      </div>
      <div class="cart-qty-ctrl">
        <button class="qty-btn" data-action="qty-minus" data-id="${item.cartItemId}">-</button>
        <span class="qty-display">${item.qty}</span>
        <button class="qty-btn" data-action="qty-plus" data-id="${item.cartItemId}">+</button>
      </div>
    </div>
  `).join('');

  drawerBody.querySelectorAll('[data-action="qty-minus"]').forEach(b => {
    b.addEventListener('click', () => updateCartItemQty(b.dataset.id, -1));
  });
  drawerBody.querySelectorAll('[data-action="qty-plus"]').forEach(b => {
    b.addEventListener('click', () => updateCartItemQty(b.dataset.id, 1));
  });
}

function initCartDrawer() {
  const backdrop = document.getElementById('cartDrawerBackdrop');
  const closeBtn = document.getElementById('closeCartDrawer');
  const openBtns = document.querySelectorAll('[data-action="open-cart"]');
  const pill = document.getElementById('floatingCartPill');
  const checkoutBtn = document.getElementById('whatsappCheckoutBtn');

  const openDrawer = () => {
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  openBtns.forEach(b => b.addEventListener('click', openDrawer));
  if (pill) pill.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeDrawer();
    });
  }

  // WhatsApp Order Submission
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Your cart is empty! Add products first.');
        return;
      }

      const custName = (document.getElementById('custName')?.value || '').trim();
      const custLocation = (document.getElementById('custLocation')?.value || '').trim();
      const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked')?.value || 'Doorstep Delivery in Bangalore';

      const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

      let msg = `🌿 *New Order Inquiry - Sasya Sanjeevini* 🌿\n\n`;
      if (custName) msg += `👤 *Customer:* ${custName}\n`;
      if (custLocation) msg += `📍 *Delivery Area:* ${custLocation}\n`;
      msg += `🚚 *Option:* ${deliveryMethod}\n\n`;
      msg += `*Order Items:*\n`;

      state.cart.forEach((item, idx) => {
        msg += `${idx + 1}. ${item.name} (${item.variantLabel}) x ${item.qty} = ₹${item.price * item.qty}\n`;
      });

      msg += `\n💰 *Estimated Total:* ₹${subtotal}\n\n`;
      msg += `Please confirm stock availability and delivery timeline. Thank you!`;

      const encodedMsg = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/918296599392?text=${encodedMsg}`;

      window.open(whatsappUrl, '_blank');
      closeDrawer();
      showToast('Opening WhatsApp with your order details...');
    });
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('sasya_cart', JSON.stringify(state.cart));
  } catch (e) {}
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('sasya_cart');
    if (saved) {
      state.cart = JSON.parse(saved);
      updateCartUI();
    }
  } catch (e) {}
}

// ---------------- INTERACTIVE SOIL & POTTING CALCULATOR ----------------
function initSoilCalculator() {
  const potSizeBtns = document.querySelectorAll('.pot-preset-btn');
  const plantTypeBtns = document.querySelectorAll('.plant-type-btn');
  const qtySlider = document.getElementById('calcPotQty');
  const qtyBubble = document.getElementById('calcQtyBubble');
  const addRecipeBtn = document.getElementById('addRecipeToCartBtn');

  if (!qtySlider) return;

  const recalculate = () => {
    const pot = SOIL_CALCULATOR_PRESETS.potSizes.find(p => p.id === state.calculator.potSizeId) || SOIL_CALCULATOR_PRESETS.potSizes[2];
    const plant = SOIL_CALCULATOR_PRESETS.plantTypes.find(t => t.id === state.calculator.plantTypeId) || SOIL_CALCULATOR_PRESETS.plantTypes[0];
    const qty = state.calculator.potQty;

    if (qtyBubble) qtyBubble.textContent = qty;

    const totalSoilKg = Math.round(pot.soilKg * qty * (plant.ratioSoil / 50));
    const totalCompostKg = Math.round(pot.compostKg * qty * (plant.ratioCompost / 30));
    const totalCocopeatKg = (pot.cocopeatKg * qty * (plant.ratioCocopeat / 20)).toFixed(1);

    document.getElementById('recipeSoilAmount').textContent = `${totalSoilKg} Kg`;
    document.getElementById('recipeCompostAmount').textContent = `${totalCompostKg} Kg`;
    document.getElementById('recipeCocopeatAmount').textContent = `${totalCocopeatKg} Kg`;
    document.getElementById('recipeSpecialText').textContent = plant.special;
  };

  potSizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      potSizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.calculator.potSizeId = btn.dataset.pot;
      recalculate();
    });
  });

  plantTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      plantTypeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.calculator.plantTypeId = btn.dataset.plant;
      recalculate();
    });
  });

  qtySlider.addEventListener('input', (e) => {
    state.calculator.potQty = parseInt(e.target.value, 10);
    recalculate();
  });

  if (addRecipeBtn) {
    addRecipeBtn.addEventListener('click', () => {
      // Add standard pack of Potting Soil (5Kg) + Goat Manure (5Kg) + Cocopeat Block
      addToCart('potting-soil', 0, 1);
      addToCart('goat-manure-powder', 0, 1);
      addToCart('cocopeat-block', 0, 1);
      showToast('Added calculated potting recipe bundle to cart!');
    });
  }

  recalculate();
}

// ---------------- DIGITAL CATALOGUE FLIPBOOK MODAL ----------------
function initFlipbookModal() {
  const backdrop = document.getElementById('catalogueModalBackdrop');
  const openBtns = document.querySelectorAll('[data-action="open-catalogue"]');
  const closeBtn = document.getElementById('closeCatalogueModal');
  const pageImg = document.getElementById('cataloguePageImage');
  const pageNumSpan = document.getElementById('cataloguePageNumber');
  const prevBtn = document.getElementById('cataloguePrevBtn');
  const nextBtn = document.getElementById('catalogueNextBtn');
  const thumbStrip = document.getElementById('catalogueThumbStrip');

  if (!backdrop) return;

  const showPage = (p) => {
    if (p < 1) p = 1;
    if (p > state.flipbook.totalPages) p = state.flipbook.totalPages;
    state.flipbook.currentPage = p;

    if (pageImg) pageImg.src = `assets/catalogue/page_${p}.webp`;
    if (pageNumSpan) pageNumSpan.textContent = `Page ${p} of ${state.flipbook.totalPages}`;

    if (thumbStrip) {
      thumbStrip.querySelectorAll('.catalogue-thumb-btn').forEach((thumb, idx) => {
        thumb.classList.toggle('active', (idx + 1) === p);
      });
    }
  };

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPage = btn.dataset.page ? parseInt(btn.dataset.page, 10) : 1;
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      showPage(targetPage);
    });
  });

  const closeModal = () => {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  if (prevBtn) prevBtn.addEventListener('click', () => showPage(state.flipbook.currentPage - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showPage(state.flipbook.currentPage + 1));

  // Build thumb strip
  if (thumbStrip) {
    thumbStrip.innerHTML = Array.from({ length: 6 }).map((_, i) => `
      <button class="catalogue-thumb-btn ${i === 0 ? 'active' : ''}" data-page="${i + 1}">
        <img src="assets/catalogue/page_${i + 1}.webp" alt="Catalogue Page ${i + 1}">
      </button>
    `).join('');

    thumbStrip.querySelectorAll('.catalogue-thumb-btn').forEach(tb => {
      tb.addEventListener('click', () => {
        const p = parseInt(tb.dataset.page, 10);
        showPage(p);
      });
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!backdrop.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') showPage(state.flipbook.currentPage - 1);
    if (e.key === 'ArrowRight') showPage(state.flipbook.currentPage + 1);
    if (e.key === 'Escape') closeModal();
  });
}

// ---------------- QUICK VIEW PRODUCT MODAL ----------------
function initProductModal() {
  const backdrop = document.getElementById('productModalBackdrop');
  const closeBtn = document.getElementById('closeProductModal');

  if (!backdrop) return;

  const closeModal = () => {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });
}

function openProductModal(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  const backdrop = document.getElementById('productModalBackdrop');
  if (!prod || !backdrop) return;

  const selectedVarIdx = state.selectedVariants[prod.id] || 0;
  const currentVar = prod.variants[selectedVarIdx] || prod.variants[0];

  document.getElementById('modalProductImage').src = prod.image;
  document.getElementById('modalProductCategory').textContent = prod.categoryName;
  document.getElementById('modalProductName').textContent = prod.name;
  document.getElementById('modalProductDesc').textContent = prod.fullDesc;
  document.getElementById('modalProductPrice').textContent = `₹${currentVar.price}`;

  // Specs
  const specsList = document.getElementById('modalProductSpecs');
  if (specsList) {
    specsList.innerHTML = prod.specs.map(s => `<li>${s}</li>`).join('');
  }

  // Application
  const appEl = document.getElementById('modalProductApplication');
  if (appEl) {
    appEl.innerHTML = prod.application 
      ? `<strong>How to use:</strong> ${prod.application}` 
      : '';
  }

  // Variants in Modal
  const variantsContainer = document.getElementById('modalProductVariants');
  if (variantsContainer) {
    variantsContainer.innerHTML = prod.variants.map((v, idx) => `
      <button class="variant-btn ${idx === selectedVarIdx ? 'active' : ''}" data-idx="${idx}">
        ${v.label} (₹${v.price})
      </button>
    `).join('');

    variantsContainer.querySelectorAll('.variant-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        state.selectedVariants[prod.id] = idx;
        openProductModal(prod.id); // re-render modal with chosen variant
        renderProducts(); // sync grid
      });
    });
  }

  // Add to cart from modal
  const addBtn = document.getElementById('modalAddToCartBtn');
  if (addBtn) {
    addBtn.onclick = () => {
      addToCart(prod.id, selectedVarIdx, 1);
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    };
  }

  // View In Catalogue button
  const catBtn = document.getElementById('modalViewInCatalogueBtn');
  if (catBtn) {
    catBtn.onclick = () => {
      backdrop.classList.remove('open');
      const catModal = document.getElementById('catalogueModalBackdrop');
      if (catModal) {
        catModal.classList.add('open');
        document.body.style.overflow = 'hidden';
        const pageImg = document.getElementById('cataloguePageImage');
        const pageNumSpan = document.getElementById('cataloguePageNumber');
        if (pageImg) pageImg.src = `assets/catalogue/page_${prod.cataloguePage}.webp`;
        if (pageNumSpan) pageNumSpan.textContent = `Page ${prod.cataloguePage} of 6`;
      }
    };
  }

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ---------------- TOAST NOTIFICATION ----------------
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34D399" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 2600);
}

// ---------------- SMOOTH SCROLL ----------------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Sticky header class
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
  });
}

// ---------------- CUSTOMER PRODUCT GUIDE / NEED MATCHER ----------------
function initCustomerGuide() {
  const guideBoxes = document.querySelectorAll('.guide-box');
  if (!guideBoxes.length) return;

  guideBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const filterKey = box.dataset.guideFilter;
      guideBoxes.forEach(b => b.classList.remove('active'));
      box.classList.add('active');

      const searchInput = document.getElementById('searchInput');

      if (filterKey === 'growth') {
        state.activeCategory = 'manures-fertilizers';
        state.searchQuery = '';
        if (searchInput) searchInput.value = '';
        showToast('🌿 Showing Organic Manures for lush growth');
      } else if (filterKey === 'blooming') {
        state.activeCategory = 'all';
        state.searchQuery = 'cake';
        if (searchInput) searchInput.value = 'cake';
        showToast('🌸 Showing Flower Bloom Boosters');
      } else if (filterKey === 'balcony') {
        state.activeCategory = 'hanging-pots';
        state.searchQuery = '';
        if (searchInput) searchInput.value = '';
        showToast('🪴 Showing Balcony Space Savers: Hanging Pots & Stands');
      } else if (filterKey === 'pest-soil') {
        state.activeCategory = 'manures-fertilizers';
        state.searchQuery = 'neem';
        if (searchInput) searchInput.value = 'neem';
        showToast('🛡️ Showing Pest Protection & Yellow Leaf Remedies');
      }

      // Update category chips active state
      const chipContainer = document.getElementById('categoryChips');
      if (chipContainer) {
        chipContainer.querySelectorAll('.category-chip').forEach(c => {
          c.classList.toggle('active', c.dataset.category === state.activeCategory);
        });
      }

      renderProducts();

      // Smooth scroll to catalogue
      const catEl = document.getElementById('catalogue');
      if (catEl) {
        catEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ---------------- MOBILE BOTTOM DOCK INTERACTION ----------------
function initMobileDock() {
  const dockShop = document.getElementById('dockShop');
  const dockGuide = document.getElementById('dockGuide');
  const dockCalc = document.getElementById('dockCalc');

  const updateActiveDock = () => {
    const scrollPos = window.scrollY + 250;
    const calcSection = document.getElementById('calculator');
    const catSection = document.getElementById('catalogue');
    const guideSection = document.getElementById('plant-guide');

    if (calcSection && scrollPos >= calcSection.offsetTop) {
      dockCalc?.classList.add('active');
      dockShop?.classList.remove('active');
      dockGuide?.classList.remove('active');
    } else if (catSection && scrollPos >= catSection.offsetTop) {
      dockShop?.classList.add('active');
      dockCalc?.classList.remove('active');
      dockGuide?.classList.remove('active');
    } else if (guideSection && scrollPos >= guideSection.offsetTop) {
      dockGuide?.classList.add('active');
      dockShop?.classList.remove('active');
      dockCalc?.classList.remove('active');
    }
  };

  window.addEventListener('scroll', updateActiveDock, { passive: true });
}

