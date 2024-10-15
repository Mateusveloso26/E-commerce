import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Layout } from "./components/layout";
import { ProductDetail } from "./pages/detail";
import { ErrorPage } from "./pages/error";
import { Login } from "./pages/login";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export { router };
