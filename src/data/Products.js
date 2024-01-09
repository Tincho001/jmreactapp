export const products = [
  {
    id: 1,
    title: 'FUNDA CRISTAL',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/cristal.jpg',
    desc: 'Totalmente cristalina',
    price: 450,
    category: 'CRISTAL',
  },
  {
    id: 2,
    title: 'CRISTAL CON DISEÑO',
    img: '	https://integradorjs-gray.vercel.app/assets/img/products/fundas/transparente_con_inicial.jpg',
    desc: 'Cristalina pero cheta',
    price: 500,
    category: 'CRISTAL',
  },
  {
    id: 3,
    title: 'CRISTAL REFORZADA',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/cristalrefor.jpg',
    desc: 'Cristalina pero con musculos',
    price: 700,
    category: 'CRISTAL',
  },
  {
    id: 4,
    title: 'CASE RIGIDA',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/rigida.jpg',
    desc: 'Dura mas!',
    price: 450,
    category: 'RIGIDAS',
  },
  {
    id: 5,
    title: 'RIGIDA PERSONALIZADA',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/personalizadas.jpg',
    desc: 'Pinta tu selfie',
    price: 550,
    category: 'RIGIDAS',
  },
  {
    id: 6,
    title: 'RIGIDA COLOR',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/lisa.jpg',
    desc: 'Colorin..',
    price: 690,
    category: 'RIGIDAS',
  },
  {
    id: 7,
    title: 'SEGURIDAD KEVLAR',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/seguridad.jpg',
    desc: 'Cuida tu telephone!',
    price: 780,
    category: 'SEGURIDAD',
  },
  {
    id: 8,
    title: 'SEGURIDAD CUERO',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/cuero.jpg',
    desc: 'Cuero 100% Argento!',
    price: 1120,
    category: 'SEGURIDAD',
  },
  {
    id: 9,
    title: 'SEGURIDAD TELA',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/seguridaddise%C3%B1o.jpg',
    desc: 'Telas y colores',
    price: 800,
    category: 'SEGURIDAD',
  },
  {
    id: 10,
    title: 'DISEÑO MUNDIAL!',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/messi.png',
    desc: '⭐🌟⭐',
    price: 750,
    category: 'MUNDIAL',
  },
  {
    id: 11,
    title: 'CAMISETA MUNDIAL ',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/mundial.jpg',
    desc: 'Para Lucir la 3ra',
    price: 700,
    category: 'MUNDIAL',
  },
  {
    id: 12,
    title: 'MESSI MUNDIAL',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/mundial2.jpg',
    desc: 'Messi la copa!',
    price: 1300,
    category: 'MUNDIAL',
  },
  {
    id: 13,
    title: 'TEMPLADO',
    img: '	https://integradorjs-gray.vercel.app/assets/img/products/fundas/transparent.jpg',
    desc: 'Protege tu pantalla',
    price: 450,
    category: 'TEMPLADOS',
  },
  {
    id: 14,
    title: 'TEMPLADO 9D',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/templado9D.jpg',
    desc: 'Con marco resistente',
    price: 650,
    category: 'TEMPLADOS',
  },
  {
    id: 15,
    title: 'ANTI-ESPIA',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/antiespia.jpg',
    desc: 'Solo para vos',
    price: 850,
    category: 'TEMPLADOS',
  },
];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});

console.log(Object.entries(Products));
