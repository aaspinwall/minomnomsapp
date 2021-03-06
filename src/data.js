const recipes = {};

recipes.breakfast = [
  {
    name: "Espinacas asadas con huevo cocido",
    ingredients: [
      {
        name: "Jitomate",
        quantity: 1,
        unit: null,
        notes: null,
      },
      {
        name: "Huevo",
        quantity: 1,
        unit: null,
        notes: null,
      },
      {
        name: "Aderezo",
        quantity: 1,
        unit: "cucharada",
        notes: null,
      },
      {
        name: "Uvas",
        quantity: 1,
        unit: "taza",
        notes: null,
      },

      {
        name: "Alejandro:",
        quantity: 0,
        unit: null,
        notes: "medio huevo cocido",
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/eggspinach.jpg?width=272&force_format=webpforce_format=webp",
  },
  {
    name: "Pan tostado con salmón",
    ingredients: [
      {
        name: "Pan integral",
        quantity: 1,
        unit: null,
        notes: null,
      },
      {
        name: "Salmón",
        quantity: 1,
        unit: "rebanadas",
        notes: null,
      },
      {
        name: "Queso de cabra",
        quantity: 1,
        unit: "rebanada delgada",
        notes: null,
      },
      {
        name: "Manzana",
        quantity: 1,
        unit: null,
        notes: null,
      },

      {
        name: "Aguacate",
        quantity: 0.3,
        unit: null,
        notes: null,
      },

      {
        name: "Alejandro:",
        quantity: 0,
        unit: null,
        notes: "1 rebanada extra salmón",
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/salmontoast.jpg?width=272&force_format=webp",
  },
  {
    name: "Huevo revuelto con verdura",
    ingredients: [
      {
        name: "Huevo",
        quantity: 1,
        unit: null,
        notes: "con espinacas, ejotes o calabaza",
      },
      {
        name: "Almendras",
        quantity: 10,
        unit: null,
        notes: null,
      },
      {
        name: "Alejandro:",
        quantity: 0,
        unit: null,
        notes: "1 huevo + 1 clara",
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/veggieeggs.jpg?width=272&force_format=webp",
  },
  {
    name: "Wrap de lechuga",
    ingredients: [
      {
        name: "Hojas de lechuga o espinaca",
        quantity: 2,
        unit: null,
        notes: null,
      },
      {
        name: "Mayonesa",
        quantity: 1,
        unit: "cucharada",
        notes: null,
      },
      {
        name: "Pechuga de pavo",
        quantity: 4,
        unit: "rollitos",
        notes: null,
      },
      {
        name: "Jitomate",
        quantity: 3,
        unit: "rebanadas",
        notes: null,
      },
      {
        name: "Aguacate",
        quantity: 0.3,
        unit: null,
        notes: null,
      },
      {
        name: "Nueces de la india",
        quantity: 10,
        unit: null,
        notes: null,
      },
      {
        name: "Alejandro:",
        quantity: 0,
        unit: null,
        notes: "6 rollitos",
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/lettucewrap.jpg?width=272&force_format=webp",
  },
  {
    name: "Salchichas con verduras",
    ingredients: [
      {
        name: "Salchichas",
        quantity: 2,
        unit: null,
        notes: null,
      },
      {
        name: "Mezcla de verduras",
        quantity: 0,
        unit: null,
        notes: "espinacas, pepino o apio. Con limón y salsa al gusto",
      },
      {
        name: "Almendras",
        quantity: 10,
        unit: null,
        notes: null,
      },
      {
        name: "Moras",
        quantity: 0.5,
        unit: "taza",
        notes: null,
      },
      {
        name: "Alejandro:",
        quantity: 0,
        unit: null,
        notes: "3 salchichas",
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/veggiesausages.jpg?width=272&force_format=webp",
  },
  {
    name: "Ejotes con feta",
    ingredients: [
      {
        name: "Ejotes",
        quantity: 0.5,
        unit: "taza",
        notes: null,
      },
      {
        name: "Queso feta",
        quantity: 2,
        unit: "cucharadas",
        notes: null,
      },
      {
        name: "Jitomate",
        quantity: 1,
        unit: "rebanada",
        notes: "en cuadritos con cebolla al gusto",
      },
      {
        name: "Aguacate",
        quantity: 0.5,
        unit: null,
        notes: " en cuadritos con cebolla al gusto",
      },
      {
        name: "Manzana",
        quantity: 1,
        unit: null,
        notes: null,
      },
      {
        name: "Alejandro:",
        quantity: null,
        unit: null,
        notes: "1 cucharadas de feta",
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/fetabeans.jpg?width=272&force_format=webp",
  },
  {
    name: "Huevo revuelto con jamón",
    ingredients: [
      {
        name: "Huevo",
        quantity: 1,
        unit: null,
        notes: null,
      },
      {
        name: "Jamón",
        quantity: 2,
        unit: "rebanadas",
        notes: null,
      },
      {
        name: "Espinacas cocidas",
        quantity: 0.5,
        unit: "taza",
        notes: null,
      },
      {
        name: "Fresas",
        quantity: 1,
        unit: "taza",
        notes: null,
      },
      {
        name: "Alejandro:",
        quantity: null,
        unit: null,
        notes: "1 huevo y 3 rebanadas de jamón",
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/hameggs.jpg?width=272&force_format=webp",
  },
  {
    name: "Salmas con hummus",
    ingredients: [
      {
        name: "Galletas salmas",
        quantity: 3,
        unit: null,
        notes: null,
      },
      {
        name: "Hummus",
        quantity: 1,
        unit: "cucharada",
        notes: null,
      },
      {
        name: "Queso mozzarella",
        quantity: 1,
        unit: "rebanada",
        notes: null,
      },
      {
        name: "Germen de alfalfa",
        quantity: 1,
        unit: "puñito",
        notes: null,
      },
      {
        name: "Aguacate y jitomate",
        quantity: 1,
        unit: "rebanada",
        notes: null,
      },
      {
        name: "Kiwi",
        quantity: 1,
        unit: null,
        notes: null,
      },
      {
        name: "Alejandro:",
        quantity: 0,
        unit: null,
        notes: "1 rebanada de jamón",
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/hummuscracker.jpg?width=272&force_format=webp",
  },
];
recipes.lunch = [
  {
    name: "Ensalada de atún",
    ingredients: [
      {
        name: "Atún",
        quantity: 1,
        unit: "lata",
        notes: null,
      },
      {
        name: "Mayonesa",
        quantity: 2,
        unit: "cucharadas",
        notes: null,
      },
      {
        name: "Verduras",
        quantity: 1,
        unit: "taza",
        notes: "Pepinos, espinacas, pimientos",
      },
      {
        name: "Arroz",
        quantity: 0.3,
        unit: "taza",
        notes: null,
      },
      {
        name: "Alejandro: Doble porción",
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/tunasalad.jpg?width=272&force_format=webp",
  },

  {
    name: "Fajitas de pollo",
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/chickenfajitas.jpg?width=272&force_format=webp",
    ingredients: [
      {
        name: "Pollo",
        quantity: 100,
        unit: "g",
        notes: null,
      },
      {
        name: "Verduras",
        quantity: 1,
        unit: "taza",
        notes: "Pimiento, cebolla, champiñones",
      },
      {
        name: "Tortilla de maíz",
        quantity: 1,
        unit: null,
        notes: null,
      },
      { name: "Alejandro: Doble porción" },
    ],
  },
  {
    name: "Salmón a la plancha",
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/grilledsalmon.jpg?width=272&force_format=webp",
    ingredients: [
      {
        name: "Salmón",
        quantity: 100,
        unit: "g",
        notes: "Alejandro: come 150 g",
      },
      {
        name: "Calabaza asada",
        quantity: 1,
        unit: null,
        notes: null,
      },
      {
        name: "Jitomate",
        quantity: 0.5,
        unit: null,
        notes: "Con limón y sal",
      },
    ],
  },
  {
    name: "Ensalada primavera",
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/primavera.jpg?width=272&force_format=webp",
    ingredients: [
      {
        name: "Queso mozarella",
        quantity: 60,
        unit: "g",
        notes: null,
      },
      {
        name: "Verduras",
        quantity: 1,
        unit: "taza",
        notes: "Espinacas, lechuga y 1 alcachofa",
      },
      {
        name: "Aceitunas",
        quantity: 6,
        unit: null,
        notes: null,
      },
      {
        name: "Jitomate",
        quantity: 0.3,
        unit: null,
        notes: null,
      },
      {
        name: "Tortilla",
        quantity: 1,
        unit: null,
        notes: null,
      },
    ],
  },
  {
    name: "Proteína Teriyaki",
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/teriyaki.jpg?width=272&force_format=webp",
    ingredients: [
      {
        name: "Pollo o Salmón",
        quantity: 100,
        unit: "g",
        notes:
          "marinado con 1 cucharada de soya, 1 cucharada de limón, media de maple o miel, jengibre picado",
      },

      {
        name: "Verduras",
        quantity: 1,
        unit: "taza",
        notes: null,
      },
      {
        name: "Arroz",
        quantity: 0.3,
        unit: "taza",
        notes: "Alejandro: Doble porción",
      },
    ],
  },
  {
    name: "Bacalao a la mexicana",
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/mexicanafish.jpg?width=272&force_format=webp",
    ingredients: [
      {
        name: "Bacalao",
        quantity: 100,
        unit: "g",
        notes: "Alejandro: come 150 g",
      },
      {
        name: "Jitomate",
        quantity: 1,
        unit: null,
        notes: null,
      },
      {
        name: "Cebolla",
        quantity: 0.3,
        unit: null,
        notes: null,
      },
      {
        name: "Chile",
        quantity: 1,
        unit: null,
        notes: null,
      },
      {
        name: "Arroz",
        quantity: 0.3,
        unit: "Taza",
        notes: "Alejandro: Doble porción",
      },
    ],
  },
];
recipes.dinner = [
  {
    name: "Cubitos de atún con soya",
    ingredients: [
      {
        name: "Atún",
        quantity: 100,
        unit: "g",
        notes: "en cubitos con soya, limón y naranja.",
      },
      {
        name: "Aguacate",
        quantity: 0.3,
        unit: null,
        notes: null,
      },
      {
        name: "Pepinos",
        quantity: 0.3,
        unit: "taza",
        notes: null,
      },
      {
        name: "Alejandro:",
        quantity: 0,
        unit: null,
        notes: "1 fruta y 1 cereal",
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/soysalmon.jpg?width=272&force_format=webp",
  },
  {
    name: "Ensalada caprese",
    ingredients: [
      {
        name: "Mozzarella",
        quantity: 0.5,
        unit: "bolita",
        notes: null,
      },
      {
        name: "Jitomate",
        quantity: 3,
        unit: "rebanadas",
        notes: null,
      },
      {
        name: "Albahaca, aceite de olivo y vinagre balsámico",
        quantity: 0,
        unit: null,
        notes: null,
      },
      {
        name: "Alejandro",
        quantity: 0,
        unit: null,
        notes: "1 fruta y 1 cereal",
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/caprese1.jpg?width=272&force_format=webp",
  },
  {
    name: "Pimientos con feta",
    ingredients: [
      {
        name: "Pimiento",
        quantity: 1,
        unit: null,
        notes: "asado en tiritas",
      },
      {
        name: "Queso feta",
        quantity: 60,
        unit: "g",
        notes: null,
      },
      {
        name: "Salsa al gusto",
        quantity: 0,
        unit: null,
        notes: null,
      },
      {
        name: "Alejandro",
        quantity: 0,
        unit: null,
        notes: "1 fruta y 1 cereal",
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/peppers.jpg?width=272&force_format=webp",
  },
  {
    name: "Espárragos con queso de cabra",
    ingredients: [
      {
        name: "Espárragos",
        quantity: 10,
        unit: null,
        notes: null,
      },
      {
        name: "Queso de cabra",
        quantity: 60,
        unit: "g",
        notes: null,
      },
      {
        name: "Aguacate",
        quantity: 0.3,
        unit: null,
        notes: null,
      },
      {
        name: "Alejandro",
        quantity: 0,
        unit: null,
        notes: "1 fruta y 1 cereal",
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/asparaguscheese.jpg?width=272&force_format=webp",
  },
  {
    name: "Avena",
    ingredients: [
      {
        name: "Avena",
        quantity: 3,
        unit: "cucharadas",
        notes: null,
      },
      {
        name: "Moras congeladas",
        quantity: 0.5,
        unit: "taza",
        notes: null,
      },
      {
        name: "Chia",
        quantity: 1,
        unit: "cucharada",
        notes: null,
      },
      {
        name: "Plátano",
        quantity: 0.5,
        unit: null,
        notes: null,
      },
      {
        name: "Chia",
        quantity: 1,
        unit: "cucharada",
        notes: null,
      },
      {
        name: "Nueces",
        quantity: 5,
        unit: null,
        notes: null,
      },
      {
        name: "Alejandro:",
        quantity: 0,
        unit: null,
        notes: "2 salchichas",
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/oatmeal.png?width=272&force_format=webp",
  },
];
recipes.smoothies = [
  {
    name: "Licuado de moras con chia",
    ingredients: [
      {
        name: "Leche light",
        quantity: 1,
        unit: "taza",
        notes: null,
      },
      {
        name: "Moras congeladas",
        quantity: 0.5,
        unit: "taza",
        notes: null,
      },
      {
        name: "Chia",
        quantity: 2,
        unit: "cucharadas",
        notes: null,
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/bluesmoothie.jpg?width=272&force_format=webp",
  },
  {
    name: "Licuado de manzana",
    ingredients: [
      {
        name: "Leche light",
        quantity: 1,
        unit: "taza",
        notes: null,
      },
      {
        name: "Manzana",
        quantity: 1,
        unit: null,
        notes: null,
      },
      {
        name: "Crema de almendras",
        quantity: 1,
        unit: "cucharada",
        notes: null,
      },
    ],
    img:
      "https://akvuseeben.cloudimg.io/v7/https://mynomnoms.netlify.app/imgs/applesmoothie.jpg?width=272&force_format=webp",
  },
];
recipes.empty = [
  {
    name: "",
    ingredients: [
      {
        name: "",
        quantity: 0,
        unit: null,
        notes: null,
      },
      {
        name: "",
        quantity: 0,
        unit: null,
        notes: null,
      },
      {
        name: "",
        quantity: 0,
        unit: null,
        notes: null,
      },
    ],
  },
];

let portions = {
  verduras: [
    `Libres: acelga, apio, berenjena,
  berros, calabaza,
  champiñones, coliflor, col,
  espárragos, espinaca, germen
  de alfalfa, flor de calabaza,
  jitomate, lechuga, nopales,
  pepino, pimiento, rábanos,
  tomate, verdolagas. `,
    `½ taza: ejotes, brócoli, cebolla,
  chayote, chile poblano, col de
  Bruselas. Moderar consumo*:
  zanahoria, jícama y betabel. `,
  ],
  cereales: [
    "Adriana 1 / Alejandro 2",
    "1 tortilla de maíz",
    "1/3 de taza de arroz integral.",
    "1/3 de taza de quinoa cocida.",
    "1/3 de taza de cous cous.",
    "1 paquete de galletas Salmas.",
    "1/3 de taza de frijol.",
    "1/3 de taza de lenteja.",
    "1/3 de taza de habas",
    "1/3 de taza de chícharos",
    "1/3 de taza de soya cocida.",
    "1/3 de taza de granos de elote.",
    "1 tostada Sanissimo.",
  ],
  animal: [
    "Adriana 1 / Alejandro 1.5",
    "100g pechuga de pollo.",
    "100g pescado (blanco, salmón o atún).",
    "100g carne de res magra",
    "1 sobre de atún en agua",
    "60g de queso feta o queso mozzarella.",
    "40g de queso de cabra.",
    "3 rebanadas de salmón ahumado",
    "6 camarones",
    "100g de pechuga de pavo.",
    "2 barritas de surimi.",
    "2 salchichas de pavo.",
  ],
  grasas: [
    "Adriana 2 / Alejandro 4",
    "1 cdita. aceite para cocinar",
    "1/3 de aguacate",
    "1 cda. de vinagreta casera.",
    "10 almendras o 15 cacahuates",
    "20 pepitas o 4 nueces o 6 nueces de la india.",
    "6 aceitunas.",
    "1/3 de aguacate.",
    "1 cucharada de mayonesa",
    "1 cucharada de aderezo tipo vinagreta.",
    "1 cuadrito de mantequilla.",
  ],
  bebidas: [
    "Agua natural.",
    "Agua de Jamaica sin azúcar ni endulzantes.",
    "Agua de limón sin azúcar ni endulzantes.",
    "Agua de pepino sin azúcar ni endulzantes.",
    "Agua de tamarindo sin azúcar ni endulzantes.",
    "Hasta 3 tazas al día de té o café sin azúcar.",
    "Infusiones sin azúcar ni endulzantes. ",
  ],
};

const myMeals = recipes.breakfast
  .concat(recipes.lunch)
  .concat(recipes.dinner)
  .concat(recipes.smoothies);

export { recipes, myMeals, portions };
