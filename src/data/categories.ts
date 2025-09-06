import cat01 from "../assets/categories/cat01.jpg";
import cat02 from "../assets/categories/cat02.jpg";
import cat03 from "../assets/categories/cat03.jpg";
import cat04 from "../assets/categories/cat04.jpg";
import cat05 from "../assets/categories/cat05.jpg";
import { products } from "./products";

export const categories = [
  {
    id: 1,
    title: "Category01",
    slug: "category-01",
    img: cat01,
    products: [
      products[0],
      products[1],
      products[2],
      products[3],
      products[4],
      products[5],
    ],
  },
  {
    id: 2,
    title: "Category02",
    slug: "category-02",
    img: cat02,
    products: [products[0], products[2]],
  },
  {
    id: 3,
    title: "Category03",
    slug: "category-03",
    img: cat03,
    products: [products[0]],
  },
  {
    id: 4,
    title: "Category04",
    slug: "category-04",
    img: cat04,
    products: [products[1], products[2]],
  },
  {
    id: 5,
    title: "Category05",
    slug: "category-05",
    img: cat05,
    products: [],
  },
];
