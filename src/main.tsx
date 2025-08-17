import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.tsx";
import RootComponent from "./components/RootComponent.tsx";
import Account from "./pages/Account.tsx";
import Login from "./pages/Login.tsx";
import Cart from "./pages/Cart.tsx";
import ShopCategory from "./pages/ShopCategory.tsx";
import Product from "./pages/Product.tsx";
import Shop from "./pages/Shop.tsx";
import Categories from "./pages/Categories.tsx";

const router = createBrowserRouter([
  {
    Component: RootComponent,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "men",
        element: <ShopCategory category="men" />,
      },
      {
        path: "women",
        element: <ShopCategory category="women" />,
      },
      {
        path: "kids",
        element: <ShopCategory category="kids" />,
      },
      {
        path: "products",
        Component: Shop,
      },
      {
        path: "products/:productId",
        Component: Product,
      },
      {
        path: "account",
        children: [
          {
            index: true,
            Component: Account,
          },
          {
            path: "signin",
            Component: Login,
          },
        ],
      },
      {
        path: "cart",
        Component: Cart,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
