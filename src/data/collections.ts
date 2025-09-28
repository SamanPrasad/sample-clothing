import cat01 from "../assets/categories/cat01.jpg";
import cat02 from "../assets/categories/cat02.jpg";
import cat03 from "../assets/categories/cat03.jpg";
import cat04 from "../assets/categories/cat04.jpg";
import cat05 from "../assets/categories/cat05.jpg";
import { products } from "./products";

export const collections = [
  {
    id: 1,
    title: "Collection 01",
    slug: "collection-01",
    img: cat01,
    groupType: "collections",
    products: [
      products[0],
      products[1],
      products[2],
      products[3],
      products[4],
      products[5],
      products[6],
    ],
  },
  {
    id: 2,
    title: "Collection 02",
    slug: "collection-02",
    img: cat02,
    groupType: "collections",
    products: [
      products[0],
      products[1],
      products[2],
      products[3],
      products[4],
      products[5],
      products[6],
      products[7],
      products[8],
      products[9],
      products[10],
      products[11],
      products[13],
      products[14],
      products[15],
      products[16],
      products[17],
    ],
  },
  {
    id: 3,
    title: "Collection 03",
    slug: "collection-03",
    img: cat03,
    groupType: "collections",
    products: [products[0]],
  },
  {
    id: 4,
    title: "Collection 04",
    slug: "collection-04",
    img: cat04,
    groupType: "collections",
    products: [products[1], products[2]],
  },
  {
    id: 5,
    title: "Collection 05",
    slug: "collection-05",
    img: cat05,
    groupType: "collections",
    products: [],
  },
];
