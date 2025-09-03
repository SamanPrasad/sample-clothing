import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.tsx";
import Account from "./pages/Account.tsx";
import Login from "./pages/Login.tsx";
import Cart from "./pages/Cart.tsx";
import ShopCategory from "./pages/ShopCategory.tsx";
import Product from "./pages/Product.tsx";
import Categories from "./pages/Categories.tsx";
import Products from "./pages/Products.tsx";
import StoreProvider from "./store/StoreProvider.tsx";
import Guard from "./components/Guard.tsx";
const Collections = lazy(() => import("./pages/Collections.tsx"));

const router = createBrowserRouter([
  {
    Component: StoreProvider,
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
