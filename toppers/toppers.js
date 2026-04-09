/* ======= CONFIG ======= */
const WA = '573159176602';
const ITEMS_PER_PAGE = 6;
let currentPage = 1;

/* ======= PRODUCTOS POR TIPO =======
   Cada entrada lleva un campo "type":
     'feliz-dia' | 'feliz-cumpleanos' | 'dia-mujer' | 'dia-madre'
   Las rutas de imágenes son relativas a la carpeta /toppers/
======================================= */
const topperProducts = [
  {
    id: 2,
    type: 'love',
    name: 'Decorativo Love',
    desc: 'Pieza decorativa 3D con la palabra Love. Ideal para mesas de regalo, bodas y decoración de hogar.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/love/love_1/love_1_p.webp',
      '../dist/imagenes/toppers/love/love_1/love_1_r.webp',
      '../dist/imagenes/toppers/love/love_1/love_1_w.webp',
    ],
    badge: null
  },
  {
    id: 3,
    type: 'love',
    name: 'Decorativo "Lo-ve"',
    desc: 'Pieza decorativa 3D con corazones integrados. Perfecta para detalles de amor, aniversarios y San Valentín.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/love/love_3/love_3_p.webp',
      '../dist/imagenes/toppers/love/love_3/love_3_b.webp',
      '../dist/imagenes/toppers/love/love_3/love_3_r.webp',
    ],
    badge: null
  },
  {
    id: 4,
    type: 'feliz-dia',
    name: 'Topper "Feliz Día"',
    desc: 'Letras caladas de gran impacto para torta o arreglo floral.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/feliz-dia/dia_1/dia_1b_v.webp',
      '../dist/imagenes/toppers/feliz-dia/dia_1/dia_1b_b.webp',
    ],
    badge: null
  },
  {
    id: 7,
    type: 'dia-mujer',
    name: 'Topper "Super Mujer"',
    desc: 'Topper en plástico holográfico con escudo y texto calado. Ideal para celebrar a la mujer especial de tu vida.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_10/mujer_10b_v.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_10/mujer_10b_b.webp',
    ],
    badge: null
  },
  {
    id: 8,
    type: 'dia-mujer',
    name: 'Topper Rectangular "Feliz Día de la Mujer"',
    desc: 'Topper rectangular en plástico holográfico con flores decorativas y texto calado. Acabado brillante de alta calidad.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_4/mujer_4b_r.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_4/mujer_4b_b.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_4/mujer_4b_v.webp',
    ],
    badge: null
  },
  {
    id: 5,
    type: 'dia-mujer',
    name: 'Decorativo "Feliz Día de la Mujer"',
    desc: 'Decorativo en plástico holográfico con diseño script y corazón. Ideal para arreglos florales del Día de la Mujer.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_1/mujer_1b_b.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_1/mujer_1b_r.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_1/mujer_1b_v.webp',
    ],
    badge: null
  },
  {
    id: 6,
    type: 'dia-mujer',
    name: 'Decorativo Redondo "La mejor mujer del mundo"',
    desc: 'Decorativo circular en plástico holográfico con texto calado y corazones. Pieza elegante para mesa o arreglo floral.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_3/mujer_3b_b.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_3/mujer_3b_r.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_3/mujer_3b_v.webp',
    ],
    badge: null
  },
  {
    id: 9,
    type: 'dia-mujer',
    name: 'Topper "Día de la Mujer" Cruz',
    desc: 'Topper con letras cursivas caladas en plástico holográfico brillante. Elegante y llamativo para tortas y arreglos.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_2/mujer_2a_w.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_2/mujer_2b_w.webp',
    ],
    badge: null
  },
  {
    id: 10,
    type: 'dia-mujer',
    name: 'Topper "Feliz Día de la Mujer" floral',
    desc: 'Topper en plástico holográfico con diseño de mariposa y texto calado. Perfecto para celebrar a la mujer especial.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_5/mujer_5b_v.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_5/mujer_5b_r.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_5/mujer_5b_b.webp',
    ],
    badge: null
  },
  {
    id: 11,
    type: 'dia-mujer',
    name: 'Topper "Super Mujer" Corona',
    desc: 'Topper en plástico holográfico con silueta femenina y texto calado. Un homenaje poderoso a la mujer.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_7/mujer_7b_r.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_7/mujer_7b_w.webp',
    ],
    badge: null
  },
  {
    id: 12,
    type: 'dia-mujer',
    name: 'Topper "Día de la Mujer" Broche',
    desc: 'Topper de diseño moderno en plástico holográfico con letras caladas. Ideal para tortas y mesas de celebración.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_8/mujer_8a_r.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_8/mujer_8b_r.webp',
    ],
    badge: null
  },
  {
    id: 13,
    type: 'dia-mujer',
    name: 'Topper "Día de la Mujer" Arco',
    desc: 'Topper en plástico holográfico con motivos florales y letras caladas. Delicado y elegante para cualquier celebración.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_9/mujer_9a_w.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_9/mujer_9b_w.webp',
    ],
    badge: null
  },
  {
    id: 14,
    type: 'dia-mujer',
    name: 'Topper "Día de la Mujer" Girl Power',
    desc: 'Topper de gran impacto visual en plástico holográfico con letras grandes caladas. Para celebrar con todo el estilo.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_11/mujer_11a_v.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_11/mujer_11b_r.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_11/mujer_11b_b.webp',
    ],
    badge: null
  },
  {
    id: 15,
    type: 'dia-mujer',
    name: 'Topper "Día de la Mujer" Corazón',
    desc: 'Topper en plástico holográfico con corazón y texto calado. Lleno de amor para la mujer más especial.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_12/mujer_12b_v.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_12/mujer_12b_b.webp',
    ],
    badge: null
  },
  {
    id: 16,
    type: 'dia-mujer',
    name: 'Topper "Día de la Mujer" conmemorativo',
    desc: 'Topper en plástico holográfico con estrellas y letras caladas. Brillo y elegancia para una celebración especial.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_13/mujer_13b_v.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_13/mujer_13b_b.webp',
    ],
    badge: null
  },
  {
    id: 17,
    type: 'dia-mujer',
    name: 'Topper "Día de la Mujer" Moderno',
    desc: 'Topper de diseño contemporáneo en plástico holográfico con tipografía moderna. Estilo actual para una mujer única.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_14/mujer_14b_r.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_14/mujer_14b_b.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_14/mujer_14b_v.webp',
    ],
    badge: null
  },
  {
    id: 18,
    type: 'dia-mujer',
    name: 'Topper "Día de la Mujer" Especial',
    desc: 'Topper exclusivo en plástico holográfico con diseño calado de alta calidad. La pieza perfecta para una celebración inolvidable.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_15/mujer_15a_v.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_15/mujer_15b_v.webp',
    ],
    badge: null
  },
  {
    id: 19,
    type: 'dia-mujer',
    name: 'Topper "Día de la Mujer" Corona',
    desc: 'Topper premium en plástico holográfico brillante con letras caladas. Para que cada celebración sea verdaderamente especial.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/dia-mujer/mujer_16/mujer_16a_v.webp',
      '../dist/imagenes/toppers/dia-mujer/mujer_16/mujer_16b_v.webp',
    ],
    badge: null
  },
  {
    id: 20,
    type: 'feliz-cumpleanos',
    name: 'Topper "Feliz Cumpleaños" 1',
    desc: 'Topper en acrílico con texto script calado. Perfecto para tortas y mesas de cumpleaños.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/cumple/cumple_1/cumple_1a_v.webp',
    ],
    badge: 'Nuevo'
  },
  {
    id: 21,
    type: 'feliz-cumpleanos',
    name: 'Topper "Feliz Cumpleaños" 2',
    desc: 'Topper elegante con letras caladas de gran impacto. Diseño versátil ideal para cualquier celebración.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/cumple/cumple_2/cumple_2a_b.webp',
      '../dist/imagenes/toppers/cumple/cumple_2/cumple_2a_w.webp',
    ],
    badge: 'Nuevo'
  },
  {
    id: 22,
    type: 'feliz-cumpleanos',
    name: 'Topper "Feliz Cumpleaños" 3',
    desc: 'Topper con letras caladas de gran impacto. Elegante y sofisticado para cualquier torta.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/cumple/cumple_3/cumple_3a_b.webp',
    ],
    badge: 'Nuevo'
  },
  {
    id: 23,
    type: 'feliz-cumpleanos',
    name: 'Topper "Feliz Cumpleaños" 4',
    desc: 'Topper premium con letras caladas y acabado brillante de lujo. Ideal para tortas y arreglos florales.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/cumple/cumple_4/cumple_4a_r.webp',
      '../dist/imagenes/toppers/cumple/cumple_4/cumple_4a_b.webp',
    ],
    badge: 'Nuevo'
  },
  {
    id: 24,
    type: 'feliz-cumpleanos',
    name: 'Topper "Feliz Cumpleaños" 5',
    desc: 'Topper con diseño tierno y festivo. Perfecto para celebraciones con temática colorida.\nColores disponibles:\n• Negro\n• Blanco\n• Violeta\n• Rojo\n• Rosa\n• Salmón',
    images: [
      '../dist/imagenes/toppers/cumple/cumple_5/cumple_5a_p.webp',
      '../dist/imagenes/toppers/cumple/cumple_5/cumple_5a_b.webp',
    ],
    badge: 'Nuevo'
  }
];

/* ======= WA ICON ======= */
const waSvg = `<svg width="13" height="13" viewBox="0 0 24 24" fill="white" style="flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

/* ======= RENDER ======= */
function renderProducts(page = 1) {
  const grid = document.getElementById('product-grid');
  const list = topperProducts.filter(p => p.type === TOPPER_TYPE);

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="coming-soon">
        <p class="coming-title">Próximamente</p>
        <p class="coming-sub">Estamos preparando diseños únicos para esta categoría.<br>¡Vuelve pronto o escríbenos para más info!</p>
        <a href="https://wa.me/${WA}?text=${encodeURIComponent('¡Hola DecoTop Studio! Quiero información sobre toppers. ¿Tienen disponibilidad?')}"
           target="_blank" rel="noopener" class="btn-primary" style="font-size:11px; padding:13px 32px;">
          ${waSvg} Consultar por WhatsApp
        </a>
      </div>`;
    renderPagination(0, 1);
    return;
  }

  const totalPages = Math.ceil(list.length / ITEMS_PER_PAGE);
  const paginated  = list.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  grid.innerHTML = paginated.map(p => {
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
          <p class="product-cat">Topper</p>
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

  renderPagination(totalPages, page);
}

/* ======= PAGINATION ======= */
function renderPagination(totalPages, page) {
  const pager = document.getElementById('pagination');
  if (totalPages <= 1) { pager.innerHTML = ''; return; }

  let html = `<button class="page-btn page-prev"${page === 1 ? ' disabled' : ''} data-page="${page - 1}">&#8249; Anterior</button>`;

  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn page-num${i === page ? ' active' : ''}" data-page="${i}">${i}</button>`;
  }

  html += `<button class="page-btn page-next"${page === totalPages ? ' disabled' : ''} data-page="${page + 1}">Siguiente &#8250;</button>`;

  pager.innerHTML = html;
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
  const prev = e.target.closest('.carousel-prev');
  if (prev) { e.stopPropagation(); advanceCarousel(prev.closest('.product-img-wrap'), -1); return; }

  const next = e.target.closest('.carousel-next');
  if (next) { e.stopPropagation(); advanceCarousel(next.closest('.product-img-wrap'), 1); return; }

  const img = e.target.closest('.product-img-wrap img');
  if (img) { advanceCarousel(img.closest('.product-img-wrap'), 1); return; }

  const dec = e.target.closest('.qty-dec');
  if (dec) {
    const val = dec.closest('.qty-ctrl').querySelector('.qty-val');
    const n = parseInt(val.textContent);
    if (n > 1) val.textContent = n - 1;
    return;
  }

  const inc = e.target.closest('.qty-inc');
  if (inc) {
    const val = inc.closest('.qty-ctrl').querySelector('.qty-val');
    val.textContent = parseInt(val.textContent) + 1;
    return;
  }

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

/* ======= PAGINATION CLICKS ======= */
document.getElementById('pagination').addEventListener('click', e => {
  const btn = e.target.closest('.page-btn[data-page]');
  if (!btn || btn.disabled) return;
  currentPage = parseInt(btn.dataset.page);
  renderProducts(currentPage);
  document.getElementById('product-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* ======= INIT ======= */
renderProducts();
