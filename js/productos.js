/* ===== PRODUCTOS Y COLORES =====
   Para agregar un producto, copiá una línea de PRODUCTS y cambiá los datos.
   type: taza | botella | vaso | camiseta | sudadera | mameluco | estuche | joyero | tote | funda | reloj | espejo | retablo | bola | libreta | mousepad | llavero */
const C = {
  blanco:["Blanco","#ffffff"], negro:["Negro","#222222"], rojo:["Rojo","#e53935"], azul:["Azul","#1e66f5"],
  celeste:["Celeste","#6ec6ff"], rosado:["Rosado","#f48fb1"], amarillo:["Amarillo","#ffd23f"], gris:["Gris","#9aa0a6"],
  navy:["Azul navy","#1b2a5a"], rey:["Azul rey","#1f4fbf"], grafito:["Gris grafito","#4a4f57"], ocre:["Ocre","#c9922e"],
  beige:["Beige","#e6d5b8"], fucsia:["Fucsia","#e6197d"], verdeosc:["Verde oscuro","#1f5a3a"], rosaosc:["Rosado oscuro","#d6457f"]
};
const col=(...k)=>k.map(x=>C[x]);
const ADULT=["XS","S","M","L","XL"];
const PRODUCTS = [
 {name:"Taza con asa e interior de color", cat:"Tazas y vasos", type:"taza", desc:"Taza de cerámica de 11 y 15 onz."},
 {name:"Taza mágica", cat:"Tazas y vasos", type:"taza", desc:"El diseño aparece con el calor.", hex:"#222222"},
 {name:"Jarra cervecera glaseada", cat:"Tazas y vasos", type:"vaso", desc:"Jarra de 16 onz con acabado glaseado."},
 {name:"Tequilero degradado", cat:"Tazas y vasos", type:"vaso", desc:"Ideal para eventos y recuerdos."},
 {name:"Botella de rosca", cat:"Botellas", type:"botella", desc:"Disponible en 400 y 600 ml."},
 {name:"Botella térmica infantil", cat:"Botellas", type:"botella", desc:"Térmica de 12 onz para niños."},
 {name:"Camiseta de algodón", cat:"Ropa", type:"camiseta", desc:"100% algodón premium, cuello redondo.", optLabel:"Talla", opts:[...ADULT,"Niños 2/4","Niños 6/8","Niños 10/12"], colors:col("negro","blanco","navy","rey","rojo","gris","grafito","verdeosc","ocre","rosado","amarillo","celeste")},
 {name:"Camiseta deportiva", cat:"Ropa", type:"camiseta", desc:"100% poliéster, ideal para sublimar.", optLabel:"Talla", opts:ADULT, colors:col("blanco")},
 {name:"Blusa y crop top", cat:"Ropa", type:"camiseta", desc:"Algodón premium para dama.", optLabel:"Talla", opts:["S","M","L","XL"], colors:col("negro","blanco","navy","rey","rojo","rosado","fucsia","gris","grafito","ocre","amarillo","verdeosc")},
 {name:"Camisa para colorear de niña", cat:"Ropa", type:"camiseta", desc:"Camisa con diseño para pintar, ideal para niñas. Incluye set de 12 plumones lavables: la tinta se quita al lavar la prenda.", optLabel:"Talla", opts:["2/4","6/8","10/12"], colors:col("blanco")},
 {name:"Sudadera con gorro", cat:"Ropa", type:"sudadera", desc:"Hoodie premium con gorro.", optLabel:"Talla", opts:["S","M","L","XL"], colors:col("gris","negro","azul","blanco","rojo","beige","rosaosc")},
 {name:"Mameluco", cat:"Ropa", type:"mameluco", desc:"Mameluco de poliéster para bebé, unisex.", optLabel:"Talla", opts:["0-3 meses","3-6 meses","9-12 meses"], colors:col("blanco")},
 {name:"Cosmetiqueras", cat:"Estuches", type:"estuche", hex:"#efe6d2", desc:"Estuches de tela con cierre.", optLabel:"Modelo", opts:["Pequeña · 18 x 12.5 cm","Mediana · 14 x 28 cm","Grande · 16 x 22 cm"]},
 {name:"Monederos", cat:"Estuches", type:"estuche", hex:"#efe6d2", desc:"Monederos de tela para el diario.", optLabel:"Modelo", opts:["Pequeño · 12.5 x 8.5 cm","Mediano · 18 x 12.5 cm"]},
 {name:"Cartucheras de tela", cat:"Estuches", type:"estuche", hex:"#efe6d2", desc:"Cartucheras de lino y de zipper.", optLabel:"Modelo", opts:["Lino · 10 x 24.5 cm","Económica · 13 x 21 cm","Nacional · 14 x 23 cm"]},
 {name:"Cartuchera con solapa", cat:"Estuches", type:"estuche", hex:"#1e66f5", desc:"Con solapa blanca para sublimar.", optLabel:"Modelo", opts:["Negra · 16 x 22 cm","Roja · 16 x 22 cm","Azul · 16 x 22 cm"]},
 {name:"Cartuchera multiusos", cat:"Estuches", type:"estuche", hex:"#d9d9de", desc:"Organizador grande para accesorios.", optLabel:"Medida", opts:["32 x 23 cm"]},
 {name:"Joyero", cat:"Estuches", type:"joyero", hex:"#ffffff", desc:"Joyero de viaje con tapa sublimable.", optLabel:"Modelo", opts:["Rosado · 10 x 10 cm","Negro · 10 x 10 cm","Blanco · 10 x 10 cm"]},
 {name:"Estuche para celular", cat:"Estuches de celular", type:"funda", hex:"#e9e9ee", desc:"Estuche TPU para sublimar. Hay muchas marcas y modelos disponibles.", optLabel:"Modelo", opts:["Samsung Galaxy A27","Xiaomi 17","Xiaomi 17 Ultra","Honor 600","Huawei Nova 14","Motorola Edge 70 Fusion","Google Pixel 10","Otro modelo (consultanos)"]},
 {name:"Tote bag de hombro", cat:"Bolsas y tote bags", type:"tote", hex:"#efe6d2", desc:"Bolsas de tela para sublimar.", optLabel:"Material", opts:["Manta · 33 x 40 cm","Canva · 33 x 40 cm","Tropical blanca","Tropical negra"]},
 {name:"Bolso caminador", cat:"Bolsas y tote bags", type:"tote", hex:"#ffffff", desc:"Mochila de cuerdas en tela tropical.", optLabel:"Modelo", opts:["Blanco","Negro"]},
 {name:"Bolso de mano de yute", cat:"Bolsas y tote bags", type:"tote", hex:"#c8a56a", desc:"Color arena con asas de tela.", optLabel:"Tamaño", opts:["Pequeño · 27 x 25 x 20 cm","Mediano · 32 x 30 x 20 cm","Grande · 45 x 34 x 20 cm"]},
 {name:"Bolso de mano de lino", cat:"Bolsas y tote bags", type:"tote", hex:"#efe6d2", desc:"Lino con asas cortas.", optLabel:"Tamaño", opts:["Pequeño · 27 x 25 x 20 cm","Mediano · 32 x 30 x 20 cm","Grande · 45 x 34 x 20 cm"]},
 {name:"Bolso de compras", cat:"Bolsas y tote bags", type:"tote", hex:"#ffffff", desc:"Bolsa de pelón, liviana y práctica.", optLabel:"Tamaño", opts:["Pequeño · 32.5 x 26 cm","Grande · 38 x 39 cm"]},
 {name:"Bolso para vinos", cat:"Bolsas y tote bags", type:"tote", hex:"#ffffff", desc:"Bolsa de pelón para una botella.", optLabel:"Medida", opts:["9 x 25 cm"]},
 {name:"Reloj retro", cat:"Accesorios", type:"reloj", desc:"Reloj decorativo personalizable."},
 {name:"Llaveros", cat:"Accesorios", type:"llavero", desc:"Acrílico, metal, cuero o bambú, en varias formas."},
 {name:"Espejo de bolsillo", cat:"Accesorios", type:"espejo", desc:"Redondo, ovalado, corazón o cuadrado."},
 {name:"Bolitas navideñas", cat:"Hogar y regalos", type:"bola", desc:"Esferas de 8 cm para decorar."},
 {name:"Retablo", cat:"Hogar y regalos", type:"retablo", desc:"En madera, vidrio o cerámica."},
 {name:"Mouse pad", cat:"Hogar y regalos", type:"mousepad", desc:"Tamaños mediano y grande."}
];
/* Foto de cada producto (el nombre debe coincidir con el del producto). */
const PHOTOS = {
  "Camisa para colorear de niña": "img/productos/camisa-para-colorear-de-nina.jpg",
  "Taza con asa e interior de color": "img/productos/taza-con-asa-e-interior-de-color.jpg",
  "Taza mágica": "img/productos/taza-magica.jpg",
  "Jarra cervecera glaseada": "img/productos/jarra-cervecera-glaseada.jpg",
  "Tequilero degradado": "img/productos/tequilero-degradado.jpg",
  "Botella de rosca": "img/productos/botella-de-rosca.jpg",
  "Botella térmica infantil": "img/productos/botella-termica-infantil.jpg",
  "Camiseta de algodón": "img/productos/camiseta-de-algodon.jpg",
  "Camiseta deportiva": "img/productos/camiseta-deportiva.jpg",
  "Blusa y crop top": "img/productos/blusa-y-crop-top.jpg",
  "Sudadera con gorro": "img/productos/sudadera-con-gorro.jpg",
  "Mameluco": "img/productos/mameluco.jpg",
  "Cosmetiqueras": "img/productos/cosmetiqueras.jpg",
  "Monederos": "img/productos/monederos.jpg",
  "Cartucheras de tela": "img/productos/cartucheras-de-tela.jpg",
  "Cartuchera con solapa": "img/productos/cartuchera-con-solapa.jpg",
  "Cartuchera multiusos": "img/productos/cartuchera-multiusos.jpg",
  "Joyero": "img/productos/joyero.jpg",
  "Tote bag de hombro": "img/productos/tote-bag-de-hombro.jpg",
  "Bolso caminador": "img/productos/bolso-caminador.jpg",
  "Bolso de mano de yute": "img/productos/bolso-de-mano-de-yute.jpg",
  "Bolso de mano de lino": "img/productos/bolso-de-mano-de-lino.jpg",
  "Bolso de compras": "img/productos/bolso-de-compras.jpg",
  "Bolso para vinos": "img/productos/bolso-para-vinos.jpg",
  "Reloj retro": "img/productos/reloj-retro.jpg",
  "Llaveros": "img/productos/llaveros.jpg",
  "Espejo de bolsillo": "img/productos/espejo-de-bolsillo.jpg",
  "Bolitas navideñas": "img/productos/bolitas-navidenas.jpg",
  "Retablo": "img/productos/retablo.jpg",
  "Mouse pad": "img/productos/mouse-pad.jpg"
};
