import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/Home.tsx";
import Account from "./pages/Account.tsx";
import Login from "./pages/Login.tsx";
import Cart from "./pages/Cart.tsx";
import ShopCategory from "./pages/ShopCategory.tsx";
import Product from "./pages/Product.tsx";
import Products from "./pages/products/Products.tsx";
import Guard from "./components/Guard.tsx";
import AppProvider from "@context/AppProvider.tsx";
import CategoryList from "@pages/categories/CategoryList.tsx";
import Category from "@pages/categories/Category.tsx";

const Collections = lazy(() => import("./pages/Collections.tsx"));

const router = createBrowserRouter([
  {
    Component: AppProvider,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/guard",
        element: <Guard />,
      },
      {
        path: "/categories",
        children: [
          {
            index: true,
            element: <CategoryList />,
          },
          {
            path: ":categorySlug",
            element: <Category />,
          },
        ],
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
        Component: Products,
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
      {
        path: "collections",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Collections />
          </Suspense>
        ),
      },
      {
        path: "collections/sports/teen",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Collections />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
