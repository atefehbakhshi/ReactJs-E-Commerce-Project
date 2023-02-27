import { createBrowserRouter } from "react-router-dom";
import { AdminRoot, MainRoot, ProductsRoot } from "../roots";
import * as home from "../screens/home";
import * as admin from "../screens/admin";
import Payment from "../screens/payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    errorElement: <home.Error />,
    children: [
      { index: true, element: <home.Landing /> },
      {
        path: "products",
        element: <ProductsRoot />,
        children: [
          { path: ":productId", element: <home.Product /> },
          { path: "watch", element: <home.Watch /> },
          { path: "glasses", element: <home.Glasses /> },
          { path: "shoes", element: <home.Shoes /> },
          { path: "clothes", element: <home.Clothes /> },
          { path: "jewellery", element: <home.Jewellery /> },
          { path: "personal-appliance", element: <home.PersonalAppliance /> },
        ],
      },
      { path: "basket", element: <home.Basket /> },
      { path: "checkout", element: <home.Checkout /> },
      { path: "success-payment", element: <home.PaymentSuccess /> },
      { path: "failure-payment", element: <home.PaymentFailure /> },
    ],
  },
  {
    path: "/admin",
    children: [
      { path: "login", element: <admin.Login /> },
      {
        path: "",
        element: <AdminRoot />,
        children: [
          { path: "all-products", element: <admin.AllProducts /> },
          { path: "orders", element: <admin.Orders /> },
          { path: "price-quantity", element: <admin.PriceQuantity /> },
        ],
      },
    ],
  },
  { path: "payment", element: <Payment /> },
]);

export default router;
