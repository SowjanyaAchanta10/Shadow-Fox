// ====== Demo Data (Flipkart-like categories & products) ======
const categories = [
  { key: 'mobiles', label: 'Mobiles', icon: 'ri-smartphone-line' },
  { key: 'laptops', label: 'Laptops', icon: 'ri-macbook-line' },
  { key: 'fashion', label: 'Fashion', icon: 'ri-t-shirt-line' },
  { key: 'appliances', label: 'Appliances', icon: 'ri-fridge-line' },
  { key: 'audio', label: 'Audio', icon: 'ri-headphone-line' },
  { key: 'gaming', label: 'Gaming', icon: 'ri-gamepad-line' },
  { key: 'beauty', label: 'Beauty', icon: 'ri-makeup-line' },
  { key: 'home', label: 'Home', icon: 'ri-home-6-line' },
];

const products = [
  {
    id: 'p1',
    title: 'Apple iPhone 14 (128GB)',
    desc: 'Super Retina XDR, A15 Bionic, 12MP camera',
    price: 58990,
    mrp: 69900,
    rating: 4.6,
    cat: 'mobiles',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    date: '2024-09-10',
    pop: 98,
  },
  {
    id: 'p2',
    title: 'Samsung Galaxy S23',
    desc: 'Dynamic AMOLED 2X, Snapdragon, Pro-grade camera',
    price: 52999,
    mrp: 64999,
    rating: 4.5,
    cat: 'mobiles',
    img: 'https://images.unsplash.com/photo-1608120847676-2095f7f16fdf?q=80&w=1200&auto=format&fit=crop',
    date: '2024-02-20',
    pop: 92,
  },
  {
    id: 'p3',
    title: 'ASUS ROG Strix G15',
    desc: 'Ryzen 7, RTX 3060, 144Hz gaming laptop',
    price: 94990,
    mrp: 119990,
    rating: 4.4,
    cat: 'laptops',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    date: '2023-08-12',
    pop: 85,
  },
  {
    id: 'p4',
    title: 'HP Pavilion 14',
    desc: 'Intel Core i5, 16GB RAM, 512GB SSD',
    price: 58990,
    mrp: 67990,
    rating: 4.2,
    cat: 'laptops',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    date: '2024-05-28',
    pop: 80,
  },
  {
    id: 'p5',
    title: 'Noise ColorFit Pro 4',
    desc: '1.72" display, 100+ sports modes, SpO2',
    price: 2799,
    mrp: 6999,
    rating: 4.1,
    cat: 'fashion',
    img: 'https://images.unsplash.com/photo-1516570161787-2fd917215a3d?q=80&w=1200&auto=format&fit=crop',
    date: '2024-01-14',
    pop: 77,
  },
  {
    id: 'p6',
    title: 'LG 7kg Front Load Washing Machine',
    desc: 'Inverter direct drive, 1200 RPM, Smart Diagnosis',
    price: 29990,
    mrp: 40990,
    rating: 4.3,
    cat: 'appliances',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    date: '2023-11-05',
    pop: 70,
  },
  {
    id: 'p7',
    title: 'boAt Airdopes 441',
    desc: 'True wireless earbuds with IWP & IPX7',
    price: 1999,
    mrp: 5999,
    rating: 4.0,
    cat: 'audio',
    img: 'https://images.unsplash.com/photo-1518443875472-6e16582422b1?q=80&w=1200&auto=format&fit=crop',
    date: '2024-07-02',
    pop: 90,
  },
  {
    id: 'p8',
    title: 'PlayStation 5 DualSense Controller',
    desc: 'Haptic feedback, adaptive triggers',
    price: 5499,
    mrp: 5999,
    rating: 4.7,
    cat: 'gaming',
    img: 'https://images.unsplash.com/photo-1605901309584-818e25960a8b?q=80&w=1200&auto=format&fit=crop',
    date: '2023-12-15',
    pop: 88,
  },
  {
    id: 'p9',
    title: 'Lakmé 9 to 5 Primer + Matte Lip Color',
    desc: 'Long-lasting matte finish, daily wear',
    price: 399,
    mrp: 499,
    rating: 4.2,
    cat: 'beauty',
    img: 'https://images.unsplash.com/photo-1585238342028-4bbc8f9bf8bd?q=80&w=1200&auto=format&fit=crop',
    date: '2024-04-10',
    pop: 60,
  },
  {
    id: 'p10',
    title: 'IKEA Poäng Armchair',
    desc: 'Birch veneer frame with soft cushion',
    price: 9990,
    mrp: 12990,
    rating: 4.5,
    cat: 'home',
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
    date: '2022-09-20',
    pop: 68,
  },
];

// ====== State ======
let state = {
  query: '',
  cat: null,
  sort: 'pop',
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  user: JSON.parse(localStorage.getItem('user') || 'null')
};

// ====== Helpers ======
const byId = (id) => document.getElementById(id);
const formatINR = (n) => '₹' + n.toLocaleString('en-IN');
const saveCart = () => localStorage.setItem('cart', JSON.stringify(state.cart));
const saveUser = () => localStorage.setItem('user', JSON.stringify(state.user));

function calcDiscount(p) { return Math.round((1 - p.price / p.mrp) * 100); }

function filterAndSort() {
  let list = products.filter(p =>
    (!state.cat || p.cat === state.cat) &&
    (p.title.toLowerCase().includes(state.query) || p.desc.toLowerCase().includes(state.query))
  );

  switch (state.sort) {
    case 'priceAsc': list.sort((a,b)=> a.price - b.price); break;
    case 'priceDesc': list.sort((a,b)=> b.price - a.price); break;
    case 'rating': list.sort((a,b)=> b.rating - a.rating); break;
    case 'new': list.sort((a,b)=> new Date(b.date) - new Date(a.date)); break;
    default: list.sort((a,b)=> b.pop - a.pop);
  }
  return list;
}

// ====== Renderers ======
function renderCategories() {
  const el = byId('categories');
  el.innerHTML = categories.map(c=>
    `<div class="cat" data-key="${c.key}">
       <i class="${c.icon}"></i>
       <span>${c.label}</span>
     </div>`
  ).join('');

  // Click handlers
  el.querySelectorAll('.cat').forEach(node => node.addEventListener('click', () => {
    const k = node.getAttribute('data-key');
    state.cat = state.cat === k ? null : k; // toggle
    document.querySelectorAll('.cat').forEach(cn => cn.classList.remove('active'));
    if (state.cat) node.classList.add('active');
    update();
  }));
}

function renderGrid() {
  const list = filterAndSort();
  byId('resultsCount').textContent = `${list.length} result${list.length!==1?'s':''}`;
  byId('productGrid').innerHTML = list.map(p=> `
    <article class="card">
      <div class="card__img"><img src="${p.img}" alt="${p.title}" loading="lazy"></div>
      <div class="card__body">
        <h3 class="card__title">${p.title}</h3>
        <p class="card__desc">${p.desc}</p>
        <div class="price">
          <strong>${formatINR(p.price)}</strong>
          <s>${formatINR(p.mrp)}</s>
          <span class="badge--off">${calcDiscount(p)}% off</span>
        </div>
        <div class="rating">⭐ ${p.rating}</div>
        <div class="card__actions">
          <button class="btn add" data-id="${p.id}"><i class="ri-add-line"></i> Add to Cart</button>
          <button class="btn btn--light buy" data-id="${p.id}">Buy Now</button>
        </div>
      </div>
    </article>
  `).join('');

  // Add to cart events
  document.querySelectorAll('.add').forEach(btn=> btn.addEventListener('click', ()=> addToCart(btn.dataset.id)));
  document.querySelectorAll('.buy').forEach(btn=> btn.addEventListener('click', ()=> {
    addToCart(btn.dataset.id);
    openCart();
  }));
}

function renderCart() {
  const wrap = byId('cartItems');
  if (!state.cart.length) {
    wrap.innerHTML = `<p class="hint">Your cart is empty. Add some products!</p>`;
    byId('cartSubtotal').textContent = formatINR(0);
    byId('cartCount').textContent = '0';
    return;
  }

  wrap.innerHTML = state.cart.map(item => {
    const p = products.find(x=> x.id === item.id);
    return `
      <div class="cart-row">
        <img src="${p.img}" alt="${p.title}" width="64" height="64" style="object-fit:cover;border-radius:8px;"/>
        <div>
          <div style="font-weight:700">${p.title}</div>
          <div class="price"><strong>${formatINR(p.price * item.qty)}</strong> <s>${formatINR(p.mrp * item.qty)}</s></div>
          <div class="qty">
            <button aria-label="decrease" data-id="${p.id}" class="dec">−</button>
            <span>${item.qty}</span>
            <button aria-label="increase" data-id="${p.id}" class="inc">+</button>
            <button aria-label="remove" data-id="${p.id}" class="icon-btn remove" title="Remove"><i class="ri-delete-bin-6-line"></i></button>
          </div>
        </div>
        <div class="rating">⭐ ${p.rating}</div>
      </div>
    `;
  }).join('');

  // Events
  wrap.querySelectorAll('.inc').forEach(b=> b.addEventListener('click', ()=> changeQty(b.dataset.id, +1)));
  wrap.querySelectorAll('.dec').forEach(b=> b.addEventListener('click', ()=> changeQty(b.dataset.id, -1)));
  wrap.querySelectorAll('.remove').forEach(b=> b.addEventListener('click', ()=> removeFromCart(b.dataset.id)));

  const subtotal = state.cart.reduce((sum, item)=> {
    const p = products.find(x=> x.id === item.id);
    return sum + p.price * item.qty;
  }, 0);
  byId('cartSubtotal').textContent = formatINR(subtotal);
  byId('cartCount').textContent = String(state.cart.reduce((a,c)=> a+c.qty, 0));
}

function update() {
  renderGrid();
  renderCart();
}

// ====== Cart actions ======
function addToCart(id) {
  const i = state.cart.findIndex(x=> x.id === id);
  if (i > -1) state.cart[i].qty += 1; else state.cart.push({ id, qty: 1 });
  saveCart();
  update();
}
function changeQty(id, delta) {
  const i = state.cart.findIndex(x=> x.id === id);
  if (i === -1) return;
  state.cart[i].qty += delta;
  if (state.cart[i].qty <= 0) state.cart.splice(i,1);
  saveCart();
  update();
}
function removeFromCart(id) {
  state.cart = state.cart.filter(x=> x.id !== id);
  saveCart();
  update();
}

// ====== Drawer & Modal ======
const drawer = byId('cartDrawer');
const backdrop = byId('backdrop');
function openCart(){ drawer.classList.add('open'); backdrop.classList.add('show'); }
function closeCart(){ drawer.classList.remove('open'); backdrop.classList.remove('show'); }
byId('cartBtn').addEventListener('click', openCart);
byId('closeCart').addEventListener('click', closeCart);
backdrop.addEventListener('click', closeCart);

const loginModal = byId('loginModal');
byId('loginBtn').addEventListener('click', () => loginModal.showModal());
byId('closeLogin').addEventListener('click', (e)=> { e.preventDefault(); loginModal.close(); });
byId('cancelLogin').addEventListener('click', ()=> loginModal.close());
byId('loginForm').addEventListener('submit', (e)=> {
  e.preventDefault();
  const email = byId('email').value.trim();
  const pw = byId('password').value;
  if (!email || pw.length < 6) return alert('Enter a valid email and 6+ char password');
  state.user = { email };
  saveUser();
  byId('loginText').textContent = email.split('@')[0];
  loginModal.close();
});

// ====== Search, Sort, Category, Clear ======
byId('searchInput').addEventListener('input', (e)=> { state.query = e.target.value.toLowerCase(); update(); });
byId('sortSelect').addEventListener('change', (e)=> { state.sort = e.target.value; update(); });
byId('clearFilters').addEventListener('click', ()=> { state.query=''; state.cat=null; state.sort='pop'; byId('searchInput').value=''; renderCategories(); update(); });

// ====== Hero Slider ======
let slide = 0;
const track = byId('heroTrack');
const totalSlides = track.children.length;
function goToSlide(i){ slide = (i + totalSlides) % totalSlides; track.style.transform = `translateX(-${slide*100}%)`; }
byId('prevSlide').addEventListener('click', ()=> goToSlide(slide-1));
byId('nextSlide').addEventListener('click', ()=> goToSlide(slide+1));
setInterval(()=> goToSlide(slide+1), 5000);

// ====== Init ======
(function init(){
  renderCategories();
  update();
  if (state.user) byId('loginText').textContent = state.user.email.split('@')[0];
  byId('year').textContent = new Date().getFullYear();
})();
