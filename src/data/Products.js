export const products = [
  {
    id: 1,
    title: 'Funda Cristal',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/cristal.jpg',
    desc: 'totalmente cristalina',
    price: 450,
    category: 'Cristal',
  },
  {
    id: 2,
    title: 'Cristal con diseño',
    img: '	https://integradorjs-gray.vercel.app/assets/img/products/fundas/transparente_con_inicial.jpg',
    desc: 'Cristalina pero cheta',
    price: 500,
    category: 'Cristal',
  },
  {
    id: 3,
    title: 'Cristal reforzada',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/cristalrefor.jpg',
    desc: 'cristalina pero con musculos',
    price: 700,
    category: 'Cristal',
  },
  {
    id: 4,
    title: 'Case Rígida',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/rigida.jpg',
    desc: 'Dura mas!',
    price: 450,
    category: 'Rigida',
  },
  {
    id: 5,
    title: 'Rígida Personalizada',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/personalizadas.jpg',
    desc: 'Pinta tu selfie',
    price: 550,
    category: 'Rigida',
  },
  {
    id: 6,
    title: 'Rígida Color',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/lisa.jpg',
    desc: 'Colorin..',
    price: 690,
    category: 'Rigida',
  },
  {
    id: 7,
    title: 'Seguridad kevlar',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/seguridad.jpg',
    desc: 'Cuida tu telephone!',
    price: 780,
    category: 'seguridad',
  },
  {
    id: 8,
    title: 'Seguridad Cuero',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/cuero.jpg',
    desc: 'Cuero 100% Argento!',
    price: 1,
    category: 'seguridad',
  },
  {
    id: 9,
    title: 'Seguridad Tela',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/seguridaddise%C3%B1o.jpg',
    desc: 'Telas y colores',
    price: 800,
    category: 'seguridad',
  },
  {
    id: 10,
    title: 'Diseño MUNDIAL!',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/messi.png',
    desc: '⭐🌟⭐',
    price: 750,
    category: 'Mundial',
  },
  {
    id: 11,
    title: 'Camiseta Mundial ',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/mundial.jpg',
    desc: 'Para Lucir la 3ra',
    price: 700,
    category: 'Mundial',
  },
  {
    id: 12,
    title: 'Messi Mundial',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/mundial2.jpg',
    desc: 'Messi la copa!',
    price: 1300,
    category: 'Mundial',
  },
  {
    id: 13,
    title: 'Templado',
    img: '	https://integradorjs-gray.vercel.app/assets/img/products/fundas/transparent.jpg',
    desc: 'Protege tu pantalla',
    price: 450,
    category: 'templados',
  },
  {
    id: 14,
    title: 'Templado 9D',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/templado9D.jpg',
    desc: 'Con marco resistente',
    price: 650,
    category: 'templados',
  },
  {
    id: 15,
    title: 'Anti-espía',
    img: 'https://integradorjs-gray.vercel.app/assets/img/products/fundas/antiespia.jpg',
    desc: 'Solo para vos',
    price: 850,
    category: 'templados',
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
