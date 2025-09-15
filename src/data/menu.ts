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
  },
  {
    id: 6,
    menu: "Categories",
    uri: "/categories",
    level: 1,
    children: [
      {
        id: 7,
        menu: "Category 01",
        uri: "/categories/category-01",
        level: 2,
      },
      {
        id: 8,
        menu: "Category 02",
        uri: "/categories/category-02",
        level: 2,
      },
    ],
  },
  {
    id: 9,
    menu: "Collections",
    uri: "/collections",
    level: 1,
    children: [
      {
        id: 10,
        menu: "Party",
        uri: "/collections/party",
        level: 2,
        children: [
          {
            id: 11,
            menu: "Teen",
            uri: "/collections/sports?type=teen",
            level: 3,
          },
          {
            id: 12,
            menu: "Adult",
            uri: "/collections/sports?type=adult",
            level: 3,
          },
          {
            id: 13,
            menu: "Adult",
            uri: "/collections/sports?type=adult",
            level: 3,
          },
          {
            id: 14,
            menu: "Adult",
            uri: "/collections/sports?type=adult",
            level: 3,
          },
        ],
      },
      {
        id: 15,
        menu: "Wedding",
        uri: "/collections/wedding",
        level: 2,
      },
      {
        id: 16,
        menu: "90's",
        uri: "/collections/90s",
        level: 2,
      },
      {
        id: 17,
        menu: "Sports",
        uri: "/collections/sports",
        level: 2,
        children: [
          {
            id: 18,
            menu: "Teen",
            uri: "/collections/sports/teen",
            level: 3,
          },
          {
            id: 19,
            menu: "Adult",
            uri: "/collections/sports/adult",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    id: 20,
    menu: "Offers",
    uri: "/offers",
    level: 1,
  },
  {
    id: 21,
    menu: "My Account",
    uri: "/my-account",
    level: 1,
  },
];
