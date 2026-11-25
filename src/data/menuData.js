export const RESTAURANT_INFO = {
  name: "ASERE CUBAN FOOD",
  subtitle: "Asere Cocina Cubana",
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

export const CATEGORIES = [
  { id: "todos", name: "Todos los Platos" },
  { id: "principales", name: "Platos Principales" },
  { id: "especiales", name: "Especiales & Sopas" },
  { id: "acompanamientos", name: "Guarniciones" },
  { id: "antojitos", name: "Antojitos & Entrantes" },
];

export const MENU_ITEMS = [
  // PLATOS PRINCIPALES
  {
    id: "pernil-asado",
    name: "Pernil Asado Criollo",
    category: "principales",
    description: "Pierna de cerdo marinada al estilo tradicional cubano con abundante mojo de ajo y naranja agria, horneada lentamente hasta lograr carne tierna y cuerito dorado ultra crujiente.",
    prices: { half: 8.99, full: 16.99 },
    portions: [
      { label: "1/2 lb", price: 8.99 },
      { label: "1 lb", price: 16.99 }
    ],
    tag: "Plato Estrella",
    image: "/images/pernil-asado-plate.png",
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
      { label: "1/2 lb", price: 11.99 },
      { label: "1 lb", price: 21.99 }
    ],
    tag: "Clásico Nacional",
    image: "/images/ropa-vieja-plate.png",
    includesSide: true,
    popular: true
  },
  {
    id: "bistec-encebollado",
    name: "Bistec Encebollado (de Cerdo)",
    category: "principales",
    description: "Jugosos cortes de cerdo adobados con cítricos y ajo criollo, salteados a la plancha con una abundante montaña de cebolla blanca caramelizada.",
    prices: { half: 9.99, full: 17.99 },
    portions: [
      { label: "1/2 lb", price: 9.99 },
      { label: "1 lb", price: 17.99 }
    ],
    tag: "Sabor Tradicional",
    image: "/images/ropa-vieja-plate.png",
    includesSide: true
  },
  {
    id: "bistec-pollo",
    name: "Bistec de Pollo a la Plancha",
    category: "principales",
    description: "Pechuga de pollo fresca marinada al mojo de la abuela con naranja agria, orégano y ajo, dorada a fuego vivo con cebollitas dulces.",
    prices: { half: 11.00, full: 19.99 },
    portions: [
      { label: "1/2 lb", price: 11.00 },
      { label: "1 lb", price: 19.99 }
    ],
    tag: "Ligero & Sabroso",
    image: "/images/ropa-vieja-plate.png",
    includesSide: true
  },
  {
    id: "chicharron",
    name: "Chicharrón de Cerdo Crujiente",
    category: "principales",
    description: "Trocitos de cerdo con carne y grasa fritos en su punto óptimo, logrando una textura crujiente insuperable. Servidos con limón.",
    prices: { half: 11.99, full: 21.99 },
    portions: [
      { label: "1/2 lb", price: 11.99 },
      { label: "1 lb", price: 21.99 }
    ],
    tag: "Favorito para Compartir",
    image: "/images/chicharron-plate.png",
    includesSide: true
  },
  {
    id: "masas-fritas",
    name: "Masas Fritas (de Cerdo)",
    category: "principales",
    description: "Dados selectos de cerdo marinados en mojo campesino, cocinados a fuego lento y dorados al exterior para sellar toda la jugosidad.",
    prices: { half: 10.99, full: 19.99 },
    portions: [
      { label: "1/2 lb", price: 10.99 },
      { label: "1 lb", price: 19.99 }
    ],
    tag: "Criollo 100%",
    image: "/images/chicharron-plate.png",
    includesSide: true
  },
  {
    id: "chilindron-cordero",
    name: "Chilindrón de Cordero",
    category: "principales",
    description: "Cordero estofado lentamente con vino tinto seco, pimientos asados, aceitunas, ajo y sofrito cubano de sabor robusto y tierno.",
    prices: { half: 14.99, full: 26.99 },
    portions: [
      { label: "1/2 lb", price: 14.99 },
      { label: "1 lb", price: 26.99 }
    ],
    tag: "Especialidad Campesina",
    image: "/images/cordero-plate.png",
    includesSide: true
  },
  {
    id: "picadillo-campesina",
    name: "Picadillo a la Campesina",
    category: "principales",
    description: "Carne molida de res seleccionada con sofrito cubano casero, toquecito de pasas, aceitunas alcaparradas y daditos de papita tierna.",
    prices: { half: 11.00, full: 19.99 },
    portions: [
      { label: "1/2 lb", price: 11.00 },
      { label: "1 lb", price: 19.99 }
    ],
    tag: "El Sabor del Hogar",
    image: "/images/ropa-vieja-plate.png",
    includesSide: true
  },
  {
    id: "fricase",
    name: "Fricasé Cubano",
    category: "principales",
    description: "Guiso tradicional hogareño en salsa de tomate criolla reducida, papas tiernas, pimientos dulces y especias de la isla.",
    prices: { half: 7.50, full: 13.00 },
    portions: [
      { label: "1/2 lb", price: 7.50 },
      { label: "1 lb", price: 13.00 }
    ],
    tag: "Receta Auténtica",
    image: "/images/ropa-vieja-plate.png",
    includesSide: true
  },

  // ESPECIALES & SOPAS
  {
    id: "sandwich-cubano",
    name: "Sándwich Cubano Clásico",
    category: "especiales",
    description: "Auténtico pan cubano prensado y tostado a la plancha con pernil asado jugoso, jamón dulce, queso suizo derretido, pepinillos crujientes y mostaza amarilla.",
    price: 12.99,
    tag: "¡El Legendario!",
    image: "/images/sandwich-plate.png",
    popular: true
  },
  {
    id: "arroz-frito",
    name: "Arroz Frito Estilo Cubano",
    category: "especiales",
    description: "Heredero de la cocina chino-cubana de La Habana: arroz salteado en wok a fuego vivo con pernil, jamón, frijolitos chinos, cebollín y tortilla de huevo.",
    price: 15.00,
    tag: "Plato Fuerte",
    image: "/images/congri-plate.png"
  },
  {
    id: "ajiaco",
    name: "Ajiaco Cubano (12 oz)",
    category: "especiales",
    description: "El guiso nacional de Cuba: caldo espeso y reconfortante preparado con viandas criollas (yuca, malanga, plátano verde y maduro, maíz) y carnes tiernas.",
    price: 9.00,
    tag: "Sopa Tradicional",
    image: "/images/ajiaco-plate.png",
    popular: true
  },

  // ANTOJITOS & GUARNICIONES
  {
    id: "tamales-cubanos",
    name: "Tamales Cubanos Tradicionales",
    category: "antojitos",
    description: "Masa fresca de maíz tierno molido aliñada con sofrito cubano y trocitos de carne de cerdo adobada, cocidos al vapor en hojas de maíz.",
    price: 7.99,
    tag: "Hecho a Mano",
    image: "/images/tamales-plate.png",
    popular: true
  },
  {
    id: "yuca-con-mojo",
    name: "Yuca con Mojo y Chicharrones",
    category: "acompanamientos",
    description: "Yuca cocida tierna y sedosa como mantequilla, bañada con mojo criollo caliente de ajo dorado y naranja agria, coronada con chicharrones crocantes.",
    price: 8.00,
    tag: "Acompañamiento Rey",
    image: "/images/yuca-plate.png"
  },
  {
    id: "tostones",
    name: "Tostones Criollos (Chatinos)",
    category: "antojitos",
    description: "Rodajas de plátano verde macho aplastadas y fritas dos veces con el punto exacto de sal marina, acompañadas de mojo de ajo para untar.",
    price: 4.50,
    tag: "Crujientes & Dorados",
    image: "/images/tostones-plate.png"
  },
  {
    id: "frijoles-negros",
    name: "Frijoles Negros Dormidos (12 oz)",
    category: "acompanamientos",
    description: "Guiso espeso de frijoles negros sazonados con sofrito criollo, laurel, orégano y un toque de aceite de oliva extra virgen.",
    price: 7.00,
    tag: "Sabor de Casa",
    image: "/images/congri-plate.png"
  },
  {
    id: "frijoles-colorados",
    name: "Frijoles Colorados Criollos (12 oz)",
    category: "acompanamientos",
    description: "Frijoles rojos cocinados lentamente a fuego bajo con calabaza dulce, pimientos morrones y especias tradicionales.",
    price: 9.00,
    tag: "Cremosos & Sabrosos",
    image: "/images/congri-plate.png"
  }
];
