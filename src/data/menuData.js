export const RESTAURANT_INFO = {
  name: "ASERE CUBAN FOOD",
  subtitle: "Cocina Tradicional Cubana",
  chef: "Sergio Regueira",
  tagline: "Auténtico Sabor & Tradición Criolla en Pflugerville, TX",
  openingDate: "Domingo 29 de Noviembre, 12:00 PM",
  address: "15608 Spring Hill Ln, Suite 105, Pflugerville, TX 78660",
  phone: "(832) 414-5930",
  rawPhone: "18324145930",
  email: "Aserecocina@gmail.com",
  instagram: "@AsereCubanFood",
  instagramUrl: "https://www.instagram.com/AsereCubanFood",
  whatsappUrl: "https://wa.me/18324145930",
  googleMapsUrl: "https://maps.google.com/?q=15608+Spring+Hill+Ln+Suite+105+Pflugerville+TX+78660",
  hours: [
    { days: "Lunes a Jueves", hours: "11:00 AM - 9:00 PM" },
    { days: "Viernes y Sábados", hours: "11:00 AM - 10:00 PM" },
    { days: "Domingos (Gran Apertura)", hours: "12:00 PM - 8:00 PM" }
  ]
};

export const FREE_SIDES = [
  "Arroz Blanco",
  "Arroz Congrí (Moros y Cristianos)",
  "Arroz Amarillo",
  "Ensalada Fresca de la Casa"
];

export const FREE_SIDES_DETAILS = [
  {
    id: "arroz-congri",
    name: "Arroz Congrí (Moros y Cristianos)",
    description: "Arroz grano a grano cocinado en caldo de frijoles negros con sofrito criollo de pimientos, cebolla y ajo.",
    image: "/images/congri-side.jpg",
    badge: "Incluido Gratis"
  },
  {
    id: "ensalada-fresca",
    name: "Ensalada Fresca de la Casa",
    description: "Col blanca finamente cortada, rodajas frescas de pepino y tomate maduro preparados al día.",
    image: "/images/ensalada-side.jpg",
    badge: "Incluido Gratis"
  },
  {
    id: "arroz-blanco",
    name: "Arroz Blanco Criollo",
    description: "Arroz blanco suelto al estilo cubano, cocido en su punto perfecto para acompañar carnes y guisos.",
    image: null,
    badge: "Incluido Gratis"
  },
  {
    id: "arroz-amarillo",
    name: "Arroz Amarillo Tradicional",
    description: "Arroz sazonado con especias de la isla y color natural dorado de cocina casera.",
    image: null,
    badge: "Incluido Gratis"
  }
];

export const CATEGORIES = [
  { id: "todos", name: "Todos los Platos" },
  { id: "principales", name: "Platos Principales" },
  { id: "especiales", name: "Especiales & Sopas" },
  { id: "acompanamientos", name: "Guarniciones" },
  { id: "antojitos", name: "Antojitos & Entrantes" }
];

export const MENU_ITEMS = [
  // PLATOS PRINCIPALES
  {
    id: "pernil-asado",
    name: "Pernil Asado Criollo",
    category: "principales",
    description: "Pierna de cerdo marinada al estilo tradicional cubano con mojo de ajo y naranja agria, horneada lentamente hasta lograr carne tierna y cuerito dorado crujiente.",
    prices: { half: 8.99, full: 16.99 },
    portions: [
      { label: "½ lb", price: 8.99 },
      { label: "1 lb", price: 16.99 }
    ],
    tag: "Plato Estrella",
    image: "/images/pernil-menu.jpg",
    includesSide: true,
    popular: true
  },
  {
    id: "ropa-vieja",
    name: "Ropa Vieja Tradicional",
    category: "principales",
    description: "Carne de res deshebrada cocinada lentamente a fuego lento en salsa criolla con tomates maduros, cebolla dulce, pimientos morrones y especias cubanas.",
    prices: { half: 11.99, full: 21.99 },
    portions: [
      { label: "½ lb", price: 11.99 },
      { label: "1 lb", price: 21.99 }
    ],
    tag: "Clásico Nacional",
    image: null,
    includesSide: true,
    popular: true
  },
  {
    id: "bistec-encebollado",
    name: "Bistec Encebollado (de Cerdo)",
    category: "principales",
    description: "Jugosos cortes de cerdo adobados con cítricos y ajo criollo, salteados a la plancha con abundante cebolla blanca caramelizada.",
    prices: { half: 9.99, full: 17.99 },
    portions: [
      { label: "½ lb", price: 9.99 },
      { label: "1 lb", price: 17.99 }
    ],
    tag: "Sabor Tradicional",
    image: null,
    includesSide: true
  },
  {
    id: "bistec-pollo",
    name: "Bistec de Pollo a la Plancha",
    category: "principales",
    description: "Pechuga de pollo fresca marinada al mojo de la casa con naranja agria, orégano y ajo, dorada a fuego vivo con cebollitas dulces.",
    prices: { half: 11.00, full: 19.99 },
    portions: [
      { label: "½ lb", price: 11.00 },
      { label: "1 lb", price: 19.99 }
    ],
    tag: "A la Plancha",
    image: null,
    includesSide: true
  },
  {
    id: "chicharron",
    name: "Chicharrón de Cerdo Crujiente",
    category: "principales",
    description: "Trocitos de cerdo fritos en su punto óptimo para lograr una textura crujiente insuperable por fuera y jugosa por dentro. Servidos con limón.",
    prices: { half: 11.99, full: 21.99 },
    portions: [
      { label: "½ lb", price: 11.99 },
      { label: "1 lb", price: 21.99 }
    ],
    tag: "Crujiente",
    image: null,
    includesSide: true
  },
  {
    id: "masas-fritas",
    name: "Masas Fritas (de Cerdo)",
    category: "principales",
    description: "Dados selectos de cerdo marinados en mojo campesino, cocinados lentamente y dorados al exterior para sellar toda su jugosidad.",
    prices: { half: 10.99, full: 19.99 },
    portions: [
      { label: "½ lb", price: 10.99 },
      { label: "1 lb", price: 19.99 }
    ],
    tag: "Criollo 100%",
    image: null,
    includesSide: true
  },
  {
    id: "chilindron-cordero",
    name: "Chilindrón de Cordero",
    category: "principales",
    description: "Cordero estofado lentamente con vino seco, pimientos asados, aceitunas, ajo y sofrito cubano de sabor robusto y tierno.",
    prices: { half: 14.99, full: 26.99 },
    portions: [
      { label: "½ lb", price: 14.99 },
      { label: "1 lb", price: 26.99 }
    ],
    tag: "Especialidad",
    image: null,
    includesSide: true
  },
  {
    id: "picadillo-campesina",
    name: "Picadillo a la Campesina",
    category: "principales",
    description: "Carne molida de res seleccionada con sofrito cubano casero, toque de pasas, aceitunas y daditos de papa tierna.",
    prices: { half: 11.00, full: 19.99 },
    portions: [
      { label: "½ lb", price: 11.00 },
      { label: "1 lb", price: 19.99 }
    ],
    tag: "Sabor de Hogar",
    image: null,
    includesSide: true
  },
  {
    id: "fricase",
    name: "Fricasé Cubano",
    category: "principales",
    description: "Guiso tradicional hogareño en salsa criolla reducida con papas tiernas, pimientos dulces y especias de la isla.",
    prices: { half: 7.50, full: 13.00 },
    portions: [
      { label: "½ lb", price: 7.50 },
      { label: "1 lb", price: 13.00 }
    ],
    tag: "Receta Clásica",
    image: null,
    includesSide: true
  },

  // ESPECIALES & SOPAS
  {
    id: "sandwich-cubano",
    name: "Sándwich Cubano Clásico",
    category: "especiales",
    description: "Pan cubano prensado y tostado a la plancha con pernil asado jugoso, jamón, queso suizo derretido, pepinillos crujientes y mostaza amarilla.",
    price: 12.99,
    tag: "Especialidad",
    image: null,
    popular: true
  },
  {
    id: "arroz-frito",
    name: "Arroz Frito Estilo Cubano",
    category: "especiales",
    description: "Tradición chino-cubana de La Habana: arroz salteado a fuego vivo con pernil, jamón, frijolitos chinos, cebollín y tortilla de huevo.",
    price: 15.00,
    tag: "Plato Fuerte",
    image: null
  },
  {
    id: "ajiaco",
    name: "Ajiaco Cubano (12 oz)",
    category: "especiales",
    description: "El guiso nacional de Cuba: caldo espeso y reconfortante preparado con viandas criollas (yuca, malanga, plátano, maíz) y carnes tiernas.",
    price: 9.00,
    tag: "Sopa Tradicional",
    image: null,
    popular: true
  },

  // ANTOJITOS & GUARNICIONES
  {
    id: "tamales-cubanos",
    name: "Tamales Cubanos Tradicionales",
    category: "antojitos",
    description: "Masa fresca de maíz tierno molido aliñada con sofrito cubano y trocitos de cerdo adobado, cocidos al vapor en hojas de maíz.",
    price: 7.99,
    tag: "Hecho a Mano",
    image: "/images/tamales-menu.jpg",
    popular: true
  },
  {
    id: "yuca-con-mojo",
    name: "Yuca con Mojo y Chicharrones",
    category: "acompanamientos",
    description: "Yuca cocida tierna bañada con mojo criollo caliente de ajo dorado y naranja agria, coronada con chicharrones crocantes.",
    price: 8.00,
    tag: "Favorito",
    image: "/images/yuca-menu.jpg"
  },
  {
    id: "tostones",
    name: "Tostones Criollos (Chatinos)",
    category: "antojitos",
    description: "Rodajas de plátano verde aplastadas y fritas dos veces con el punto exacto de sal, acompañadas de mojo de ajo.",
    price: 4.50,
    tag: "Crujientes",
    image: null
  },
  {
    id: "frijoles-negros",
    name: "Frijoles Negros Dormidos (12 oz)",
    category: "acompanamientos",
    description: "Potaje espeso de frijoles negros sazonados con sofrito criollo, laurel, orégano y un toque de aceite de oliva.",
    price: 7.00,
    tag: "Sabor de Casa",
    image: null
  },
  {
    id: "frijoles-colorados",
    name: "Frijoles Colorados Criollos (12 oz)",
    category: "acompanamientos",
    description: "Frijoles rojos cocinados lentamente a fuego bajo con calabaza dulce, pimientos morrones y especias tradicionales.",
    price: 9.00,
    tag: "Cremosos",
    image: null
  }
];
