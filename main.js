/* ======= CONFIG ======= */
const WA = '573159176602';

/* ======= PRODUCTOS =======
   Para agregar/editar productos:
     - images: array de rutas (primera = portada). Mínimo 1.
     - category: "topper" | "arreglo" | "caja" | "decorativo" | "desayuno"
     - badge: texto del badge o null
=============================== */
const products = [
  {
    id: 1,
    category: 'caja',
    name: 'Caja Corazón LED',
    desc: 'Caja corazón con tapa personalizada, con luces LED. El regalo más especial para alguien especial.',
    images: [
      'dist/imagenes/cajas/corazon/caja_corazon_a_p.webp',
      'dist/imagenes/cajas/corazon/caja_corazon_b_p.webp',
      'dist/imagenes/cajas/corazon/caja_corazon_a_r.webp',
      'dist/imagenes/cajas/corazon/caja_corazon_b_r.webp',
      'dist/imagenes/cajas/corazon/caja_corazon_colores.webp',
    ],
    badge: 'Destacado'
  },
  {
    id: 2,
    category: 'topper',
    name: 'Decorativo Love',
    desc: 'Pieza decorativa 3D con la palabra Love. Acabado liso en rosa. Ideal para mesas de regalo, bodas y decoración de hogar.',
    images: [
      'dist/imagenes/toppers/love/love_1/love_1_p.webp',
      'dist/imagenes/toppers/love/love_1/love_1_r.webp',
      'dist/imagenes/toppers/love/love_1/love_1_w.webp',
    ],
    badge: null
  },
  {
    id: 3,
    category: 'topper',
    name: 'Decorativo "Lo-ve"',
    desc: 'Pieza decorativa 3D con corazones integrados. Perfecta para detalles de amor, aniversarios y San Valentín.',
    images: [
      'dist/imagenes/toppers/love/love_3/love_3_p.webp',
      'dist/imagenes/toppers/love/love_3/love_3_b.webp',
      'dist/imagenes/toppers/love/love_3/love_3_r.webp',
    ],
    badge: null
  },
  {
    id: 4,
    category: 'topper',
    name: 'Topper "Feliz Día"',
    desc: 'Disponible en negro holográfico, rojo glitter y más colores. Letras caladas de gran impacto para torta o arreglo floral.',
    images: [
      'dist/imagenes/toppers/feliz-dia/dia_1/dia_1a_v.webp',
      'dist/imagenes/toppers/feliz-dia/dia_1/dia_1b_v.webp',
      'dist/imagenes/toppers/feliz-dia/dia_1/dia_1a_b.webp',
      'dist/imagenes/toppers/feliz-dia/dia_1/dia_1b_b.webp',
    ],
    badge: null
  },
  {
    id: 5,
    category: 'topper',
    name: 'Decorativo "Feliz Día de la Mujer"',
    desc: 'Decorativo en acrílico rojo con diseño script y corazón. Ideal para arreglos florales del Día de la Mujer.',
    images: [
      'dist/imagenes/toppers/dia-mujer/mujer_1/mujer_1a_b.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_1/mujer_1b_b.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_1/mujer_1a_r.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_1/mujer_1b_r.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_1/mujer_1a_v.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_1/mujer_1b_v.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_1/mujer_1c_r.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_1/mujer_1d_r.webp',
    ],
    badge: null
  },
  {
    id: 6,
    category: 'topper',
    name: 'Decorativo Redondo "La mejor mujer del mundo"',
    desc: 'Decorativo circular holográfico negro con texto calado y corazones. Pieza elegante para mesa o pared.',
    images: [
      'dist/imagenes/toppers/dia-mujer/mujer_3/mujer_3a_b.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_3/mujer_3b_b.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_3/mujer_3a_r.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_3/mujer_3b_r.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_3/mujer_3a_v.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_3/mujer_3b_v.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_3/mujer_3c_r.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_3/mujer_3d_r.webp',
    ],
    badge: null
  },
  {
    id: 7,
    category: 'topper',
    name: 'Topper "Super Mujer"',
    desc: 'Topper en acrílico morado holográfico con escudo y texto. Ideal para celebrar a la mujer especial de tu vida.',
    images: [
      'dist/imagenes/toppers/dia-mujer/mujer_10/mujer_10a_v.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_10/mujer_10b_v.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_10/mujer_10a_b.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_10/mujer_10b_b.webp',
    ],
    badge: null
  },
  {
    id: 8,
    category: 'topper',
    name: 'Topper Rectangular "Feliz Día de la Mujer"',
    desc: 'Topper rectangular con flores decorativas y texto calado en morado holográfico. Acabado premium brillante.',
    images: [
      'dist/imagenes/toppers/dia-mujer/mujer_4/mujer_4a_r.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_4/mujer_4b_r.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_4/mujer_4a_b.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_4/mujer_4b_b.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_4/mujer_4a_v.webp',
      'dist/imagenes/toppers/dia-mujer/mujer_4/mujer_4b_v.webp',
    ],
    badge: null
  }
];

/* ======= LABELS ======= */
const catLabel = {
  topper:     'Topper',
  arreglo:    'Arreglo Floral',
  caja:       'Caja Especial',
  decorativo: 'Decorativo',
  desayuno:   'Desayuno Sorpresa'
};

/* ======= WA ICON ======= */
const waSvg = `<svg width="13" height="13" viewBox="0 0 24 24" fill="white" style="flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

/* ======= RENDER ======= */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('product-grid');
  const list = filter === 'all' ? products : products.filter(p => p.category === filter);

  if (list.length === 0) {
    grid.innerHTML = `<div class="empty-state"><p>No hay productos en esta categoría aún.</p></div>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const hasMultiple = p.images.length > 1;
    const imgTags = p.images.map((src, i) =>
      `<img src="${src}" alt="${p.name}" loading="lazy" class="${i === 0 ? 'active' : ''}">`
    ).join('');
    const arrows = hasMultiple ? `
      <button class="carousel-btn carousel-prev" aria-label="Anterior">&#8249;</button>
      <button class="carousel-btn carousel-next" aria-label="Siguiente">&#8250;</button>` : '';
    const dots = hasMultiple ? `
      <div class="carousel-dots">
        ${p.images.map((_, i) => `<span class="carousel-dot${i === 0 ? ' active' : ''}"></span>`).join('')}
      </div>` : '';

    return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-img-wrap">
          ${imgTags}
          ${arrows}
          ${dots}
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        </div>
        <div class="product-body">
          <p class="product-cat">${catLabel[p.category] || p.category}</p>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.desc}</p>
          <div class="product-footer">
            <div class="qty-wrap">
              <small>Cantidad</small>
              <div class="qty-ctrl">
                <button class="qty-btn qty-dec" aria-label="Menos">−</button>
                <span class="qty-val">1</span>
                <button class="qty-btn qty-inc" aria-label="Más">+</button>
              </div>
            </div>
            <button class="btn-wa" data-id="${p.id}" data-name="${p.name}">
              ${waSvg} Pedir
            </button>
          </div>
        </div>
      </article>`;
  }).join('');
}

/* ======= CAROUSEL ======= */
function advanceCarousel(wrap, dir) {
  const imgs = wrap.querySelectorAll('img');
  const dots = wrap.querySelectorAll('.carousel-dot');
  if (imgs.length <= 1) return;

  let cur = Array.from(imgs).findIndex(img => img.classList.contains('active'));
  imgs[cur].classList.remove('active');
  if (dots[cur]) dots[cur].classList.remove('active');

  cur = (cur + dir + imgs.length) % imgs.length;
  imgs[cur].classList.add('active');
  if (dots[cur]) dots[cur].classList.add('active');
}

/* ======= EVENT DELEGATION ======= */
document.addEventListener('click', e => {
  /* Carousel prev */
  const prev = e.target.closest('.carousel-prev');
  if (prev) {
    e.stopPropagation();
    advanceCarousel(prev.closest('.product-img-wrap'), -1);
    return;
  }

  /* Carousel next */
  const next = e.target.closest('.carousel-next');
  if (next) {
    e.stopPropagation();
    advanceCarousel(next.closest('.product-img-wrap'), 1);
    return;
  }

  /* Click on image = next */
  const img = e.target.closest('.product-img-wrap img');
  if (img) {
    advanceCarousel(img.closest('.product-img-wrap'), 1);
    return;
  }

  /* Qty − */
  const dec = e.target.closest('.qty-dec');
  if (dec) {
    const val = dec.closest('.qty-ctrl').querySelector('.qty-val');
    const n = parseInt(val.textContent);
    if (n > 1) val.textContent = n - 1;
    return;
  }

  /* Qty + */
  const inc = e.target.closest('.qty-inc');
  if (inc) {
    const val = inc.closest('.qty-ctrl').querySelector('.qty-val');
    val.textContent = parseInt(val.textContent) + 1;
    return;
  }

  /* WhatsApp button */
  const wa = e.target.closest('.btn-wa[data-id]');
  if (wa) {
    const card = wa.closest('.product-card');
    const qty  = parseInt(card.querySelector('.qty-val').textContent);
    const name = wa.dataset.name;
    const unit = qty === 1 ? 'unidad' : 'unidades';
    const msg  = encodeURIComponent(
      `¡Hola DecoTop Studio! Me interesa el producto:\n*${name}*\nCantidad: *${qty} ${unit}*\n¿Tienen disponibilidad?`
    );
    window.open(`https://wa.me/${WA}?text=${msg}`, '_blank', 'noopener');
  }
});

/* ======= FILTERS ======= */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

/* ======= INIT ======= */
renderProducts();
