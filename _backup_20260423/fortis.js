/* Fortis Prima Solusi — Cart & Product Logic */
var FORTIS = (function () {
  'use strict';

  var CART_KEY = 'fortis_cart';

  var PRODUCTS = [
    {
      id: 'p01', name: 'Safety Helmet — Full Brim', brand: 'MSA Safety', category: 'ppe', cat_label: 'PPE',
      img: 'https://images.unsplash.com/photo-1766736259614-61ac882294c5?auto=format&fit=crop&w=700&q=80',
      excerpt: 'ANSI Z89.1 compliant full brim hard hat for industrial and construction environments.',
      specs: ['Standard: ANSI Z89.1 / EN 397', 'Material: High-Density Polyethylene (HDPE)', 'Suspension: 4-point ratchet', 'Temp Range: -30°C to +50°C', 'Available Colors: White, Yellow, Orange, Red']
    },
    {
      id: 'p02', name: 'Cut-Resistant Safety Gloves (Level 5)', brand: 'Ansell', category: 'ppe', cat_label: 'PPE',
      img: 'https://images.unsplash.com/photo-1646082276009-bb35409086ed?auto=format&fit=crop&w=700&q=80',
      excerpt: 'ANSI A5 / EN 388 Level 5 cut-resistant gloves for metal fabrication and glass handling.',
      specs: ['Cut Level: ANSI A5 / EN 388 Level E', 'Material: HPPE + Fiberglass composite', 'Coating: Nitrile palm dip', 'Sizes: S / M / L / XL / XXL', 'Touch-screen fingertip compatible']
    },
    {
      id: 'p03', name: 'Industrial Deep Groove Bearing', brand: 'SKF', category: 'mro', cat_label: 'MRO',
      img: 'https://images.unsplash.com/photo-1683308743837-e6ba8cdeb60a?auto=format&fit=crop&w=700&q=80',
      excerpt: 'High-load deep groove ball bearing for industrial machinery and rotating equipment.',
      specs: ['Type: Deep Groove Ball Bearing', 'Series: 6200 / 6300 (specify on inquiry)', 'Material: Chrome steel (GCr15)', 'Sealing: Open / ZZ / 2RS options', 'Speed Rating: Up to 13,000 RPM']
    },
    {
      id: 'p04', name: 'Hydraulic Pump Seal Kit', brand: 'Parker', category: 'mro', cat_label: 'MRO',
      img: 'https://images.unsplash.com/photo-1763679112092-053a6eadd72f?auto=format&fit=crop&w=700&q=80',
      excerpt: 'OEM-grade hydraulic pump seal and O-ring kit for maintenance and overhaul operations.',
      specs: ['Material: NBR / Viton (specify)', 'Compatibility: Multiple pump brands (specify model)', 'Operating Pressure: Up to 350 bar', 'Temp Range: -40°C to +120°C', 'Includes: All internal seals + O-rings']
    },
    {
      id: 'p05', name: '3-Phase Motor Contactor', brand: 'Schneider Electric', category: 'electrical', cat_label: 'Electrical',
      img: 'https://images.unsplash.com/photo-1761251947512-a293e482919f?auto=format&fit=crop&w=700&q=80',
      excerpt: 'IEC-rated 3-phase AC contactor for motor control and industrial panel switchgear applications.',
      specs: ['Type: AC3 Contactor', 'Rating: 9A to 630A (specify)', 'Voltage: 24V / 110V / 220V / 380V coil', 'Standard: IEC 60947-4-1', 'Auxiliary contacts: 1NO+1NC standard']
    },
    {
      id: 'p06', name: 'Perforated Cable Tray (3m)', brand: 'Legrand', category: 'electrical', cat_label: 'Electrical',
      img: 'https://images.unsplash.com/photo-1769013649427-31c0d746bd7b?auto=format&fit=crop&w=700&q=80',
      excerpt: 'Hot-dip galvanized perforated cable tray for industrial cable management and containment.',
      specs: ['Length: 3000mm per section', 'Width: 100 / 150 / 200 / 300 / 400mm', 'Material: Galvanized steel (HDG)', 'Load Capacity: Up to 75 kg/m', 'Finish: Hot-dip galvanized (HDG)']
    },
    {
      id: 'p07', name: '3-Pole MCB Circuit Breaker', brand: 'Siemens', category: 'electrical', cat_label: 'Electrical',
      img: 'https://images.unsplash.com/photo-1566417110104-cd4f94af0fb3?auto=format&fit=crop&w=700&q=80',
      excerpt: 'IEC 60898 rated miniature circuit breaker for industrial panel and distribution boards.',
      specs: ['Poles: 3P', 'Current Rating: 6A – 63A (specify)', 'Breaking Capacity: 6kA / 10kA', 'Standard: IEC 60898-1', 'Curve: B / C / D (specify)']
    },
    {
      id: 'p08', name: 'High-Visibility Safety Vest (Class 2)', brand: 'Honeywell', category: 'ppe', cat_label: 'PPE',
      img: 'https://images.unsplash.com/photo-1622612023350-b15f063eabe6?auto=format&fit=crop&w=700&q=80',
      excerpt: 'ANSI/ISEA 107 Class 2 hi-vis vest with retroreflective tape for high-risk work zones.',
      specs: ['Standard: ANSI/ISEA 107-2020 Class 2', 'Material: 100% Polyester mesh', 'Reflective tape: 3M Scotchlite 8910', 'Closure: Front zipper', 'Sizes: S / M / L / XL / 2XL / 3XL']
    },
    {
      id: 'p09', name: 'Fleet Grade Engine Oil Filter', brand: 'WIX Filters', category: 'automotive', cat_label: 'Automotive',
      img: 'https://images.unsplash.com/photo-1764869427688-3e97480f4b82?auto=format&fit=crop&w=700&q=80',
      excerpt: 'High-efficiency spin-on oil filter for fleet vehicles and industrial diesel engines.',
      specs: ['Type: Spin-on cartridge', 'Filtration: 99.5% efficiency at 20 micron', 'By-pass valve: 70 kPa', 'Compatible: Specify engine model/brand', 'Media: Synthetic blend filter media']
    },
    {
      id: 'p10', name: 'V-Ribbed Drive Belt Set', brand: 'Gates', category: 'automotive', cat_label: 'Automotive',
      img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80',
      excerpt: 'OEM-spec poly V-ribbed drive belt for alternators, power steering pumps, and AC compressors.',
      specs: ['Type: Poly-V / Serpentine', 'Profile: PK / PJ (specify)', 'Material: EPDM compound', 'Temp Range: -40°C to +120°C', 'Compatible: Specify vehicle/engine model']
    },
    {
      id: 'p11', name: 'Chemical-Resistant Safety Goggles', brand: '3M', category: 'ppe', cat_label: 'PPE',
      img: 'https://images.unsplash.com/photo-1747999461210-a56f72294428?auto=format&fit=crop&w=700&q=80',
      excerpt: 'EN 166 certified indirect vent goggles for chemical splash and vapor protection.',
      specs: ['Standard: EN 166:2002 / ANSI Z87.1', 'Lens: PC anti-fog, anti-scratch coating', 'Ventilation: Indirect (chemical splash)', 'Frame: Soft PVC, adjustable strap', 'UV Protection: UV 400']
    },
    {
      id: 'p12', name: 'Ball Valve — Full Bore (2")', brand: 'Kitz', category: 'mro', cat_label: 'MRO',
      img: 'https://images.unsplash.com/photo-1759668987649-a2057d0a9f35?auto=format&fit=crop&w=700&q=80',
      excerpt: 'Full bore stainless steel ball valve with ISO mounting pad for industrial flow control.',
      specs: ['Size: 2" (DN50)', 'Body: 316 Stainless Steel', 'Pressure Rating: PN16 / Class 150', 'Ends: Threaded BSP / ANSI Flanged (specify)', 'Seat: PTFE, Temp: -20°C to +200°C']
    }
  ];

  /* ── Cart persistence ── */
  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch (e) { return []; }
  }

  function saveCart(cart) {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
  }

  function getCartCount() {
    return getCart().reduce(function (sum, item) { return sum + (item.qty || 0); }, 0);
  }

  function addToCart(productId, qty) {
    qty = qty || 1;
    var cart = getCart();
    var existing = null;
    for (var i = 0; i < cart.length; i++) { if (cart[i].id === productId) { existing = cart[i]; break; } }
    if (existing) { existing.qty += qty; }
    else { cart.push({ id: productId, qty: qty }); }
    saveCart(cart);
    updateCartBadge();
    return cart;
  }

  function removeFromCart(productId) {
    var cart = getCart().filter(function (i) { return i.id !== productId; });
    saveCart(cart);
    updateCartBadge();
    return cart;
  }

  function updateQty(productId, qty) {
    if (qty <= 0) { return removeFromCart(productId); }
    var cart = getCart();
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === productId) { cart[i].qty = qty; break; }
    }
    saveCart(cart);
    updateCartBadge();
    return cart;
  }

  function clearCart() {
    saveCart([]);
    updateCartBadge();
  }

  function getProduct(id) {
    for (var i = 0; i < PRODUCTS.length; i++) { if (PRODUCTS[i].id === id) return PRODUCTS[i]; }
    return null;
  }

  function updateCartBadge() {
    var badge = document.getElementById('cartBadge');
    if (!badge) return;
    var count = getCartCount();
    badge.textContent = count;
    if (count > 0) { badge.classList.add('has-items'); badge.setAttribute('aria-label', count + ' items in cart'); }
    else { badge.classList.remove('has-items'); }
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateCartBadge();
  });

  return {
    PRODUCTS: PRODUCTS,
    getCart: getCart,
    getCartCount: getCartCount,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    updateQty: updateQty,
    clearCart: clearCart,
    getProduct: getProduct,
    updateCartBadge: updateCartBadge
  };
})();
