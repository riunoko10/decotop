# DecoTop Studio — Sitio web

Sitio estático para **DecoTop Studio**, tienda colombiana de productos decorativos: toppers, arreglos, cajas y decorativos. Sin build system ni dependencias — HTML/CSS/JS puro.

## Correr localmente

```bash
python -m http.server 8080
# o
npx serve .
```

Luego abrir `http://localhost:8080` en el navegador.

## Estructura

| Archivo / Carpeta | Rol |
|---|---|
| `index.html` | Estructura completa: header, hero, catálogo (`#productos`), nichos/ocasiones (`#nichos`), nosotros (`#nosotros`), footer, botón flotante de WhatsApp |
| `styles.css` | Todos los estilos. Variables CSS en `:root` definen la paleta de marca |
| `main.js` | Catálogo de productos + toda la lógica JS (render de tarjetas, carrusel, filtros, menú hamburguesa) |
| `dist/imagenes/` | Imágenes de productos en `.webp`, organizadas por producto (`caja_corazon/`, `love_1/`, etc.) |
| `dist/logo/` | Logo en `.svg` (color y negro) |

## Agregar o editar productos

El array `products` al inicio de `main.js` es el único lugar para gestionar el catálogo. Cada entrada:

```js
{
  id: Number,          // único
  category: 'topper' | 'arreglo' | 'caja' | 'decorativo' | 'desayuno',
  name: String,
  desc: String,
  images: [String],   // rutas relativas a la raíz; primera imagen = portada
  badge: String | null
}
```

Las imágenes deben colocarse en `dist/imagenes/<carpeta>/` como archivos `.webp`. Si se agregan nuevas categorías, los botones de filtro en `index.html` y el mapa `catLabel` en `main.js` deben mantenerse sincronizados.

## Tokens de diseño (variables CSS)

```css
--rosa:        #C4748A   /* acento principal */
--verde:       #7A9E7E
--crema:       #F0EDE8   /* fondo de página */
--grafito:     #2A2420   /* texto / fondo sección nosotros */
--rosa-suave:  #EDD5DC
--verde-palido:#C8DBC9
```

Tipografías: **Playfair Display** (títulos/serif) y **Montserrat** (cuerpo/UI), cargadas desde Google Fonts.

## Integración WhatsApp

La constante `WA` en `main.js` contiene el número (`573159176602`). El botón "Pedir" de cada tarjeta abre un mensaje preconfigurado en WhatsApp con el nombre del producto y la cantidad seleccionada.

## Despliegue

Sitio estático — se puede alojar en cualquier CDN o hosting estático (Netlify, Vercel, GitHub Pages, etc.). URL canónica: `https://decotop.com.co/`
