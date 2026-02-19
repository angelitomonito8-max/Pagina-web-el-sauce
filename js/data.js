// ====================================
// EDITORIAL PAMPLONA - Mock Book Data
// ====================================

const booksData = [
  {
    id: 1,
    title: "¿Qué Vendes?",
    author: "Angel Díaz de Rada Martínez de Morentin",
    category: "No Ficción",
    genre: "Empresa",
    cover: "assets/images/portada_libro.jpg",
    excerpt: "Fundamentos y proceso de la gestión comercial: qué, cómo y por qué negociamos.",
    description: "Una obra esencial para entender los fundamentos de la gestión comercial. Angel Díaz de Rada nos guía a través de los principios del proceso de venta, la negociación y la estrategia comercial con un enfoque práctico y riguroso.",
    featured: true,
    new: true
  },
  {
    id: 2,
    title: "¿Qué Vendes? (Versión Digital)",
    author: "Angel Díaz de Rada Martínez de Morentin",
    category: "Digital",
    genre: "Empresa",
    cover: "assets/images/portada_digital.jpg",
    excerpt: "La versión digital de la obra fundamental sobre gestión comercial.",
    description: "Consigue la obra esencial de Angel Díaz de Rada en formato digital. Todos los fundamentos del proceso de venta, la negociación y la estrategia comercial ahora disponibles para tus dispositivos electrónicos.",
    featured: true,
    new: true
  }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { booksData };
}
