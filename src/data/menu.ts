export default [
  {
    id: 1,
    menu: "Home",
    uri: "/",
    level: 1,
  },
  {
    id: 2,
    menu: "Products",
    uri: "/products",
    level: 1,
    children: [
      {
        id: 4,
        menu: "Tops Tops Tops Tops",
        uri: "/categories/tops",
        level: 2,
      },
      {
        id: 5,
        menu: "Trousers",
        uri: "/categories/trousers",
        level: 2,
      },
      {
        id: 5,
        menu: "Trousers",
        uri: "/categories/trousers",
        level: 2,
      },
    ],
  },
  {
    id: 3,
    menu: "Categories",
    uri: "/categories",
    level: 1,
    children: [
      {
        id: 4,
        menu: "Tops Tops Tops Tops",
        uri: "/categories/tops",
        level: 2,
      },
      {
        id: 5,
        menu: "Trousers",
        uri: "/categories/trousers",
        level: 2,
      },
    ],
  },
  {
    id: 8,
    menu: "Collections",
    uri: "/collections",
    level: 1,
    children: [
      {
        id: 9,
        menu: "Party",
        uri: "/collections/party",
        level: 2,
        children: [
          {
            id: 6,
            menu: "Teen",
            uri: "/collections/sports?type=teen",
            level: 3,
          },
          {
            id: 7,
            menu: "Adult",
            uri: "/collections/sports?type=adult",
            level: 3,
          },
          {
            id: 7,
            menu: "Adult",
            uri: "/collections/sports?type=adult",
            level: 3,
          },
          {
            id: 7,
            menu: "Adult",
            uri: "/collections/sports?type=adult",
            level: 3,
          },
        ],
      },
      {
        id: 10,
        menu: "Wedding",
        uri: "/collections/wedding",
        level: 2,
      },
      {
        id: 11,
        menu: "90's",
        uri: "/collections/90s",
        level: 2,
      },
      {
        id: 12,
        menu: "Sports",
        uri: "/collections/sports",
        level: 2,
        children: [
          {
            id: 6,
            menu: "Teen",
            uri: "/collections/sports?type=teen",
            level: 3,
          },
          {
            id: 7,
            menu: "Adult",
            uri: "/collections/sports?type=adult",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    id: 13,
    menu: "Offers",
    uri: "/offers",
    level: 1,
  },
  {
    id: 14,
    menu: "My Account",
    uri: "/my-account",
    level: 1,
  },
];
