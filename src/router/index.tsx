import { createBrowserRouter } from "react-router-dom";
import { AdminRoot, MainRoot, ProductsRoot } from "../roots";
import * as home from "../screens/home";
import * as admin from "../screens/admin";
import Payment from "../screens/payment";
import * as categories from "../screens/home/categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    errorElement: <home.Error />,
    children: [
      { index: true, element: <home.Landing /> },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <home.Products />,
          },
          { path: ":productId", element: <home.ProductDetailP /> },
          {
            path: "",
            children: [
              {
                path: "watch",
                children: [
                  {
                    index: true,
                    element: <home.Watch />,
                  },
                  {
                    path: "",
                    element: <ProductsRoot />,
                    children: [
                      { path: ":subcategory", element: <categories.Watch /> },
                    ],
                  },
                ],
              },
              {
                path: "glasses",
                children: [
                  {
                    index: true,
                    element: <home.Glasses />,
                  },
                  {
                    path: "",
                    element: <ProductsRoot />,
                    children: [
                      {
                        path: ":subcategory",
                        element: <categories.Glasses />,
                      },
                    ],
                  },
                ],
              },
              {
                path: "shoes",
                children: [
                  {
                    index: true,
                    element: <home.Shoes />,
                  },
                  {
                    path: "",
                    element: <ProductsRoot />,
                    children: [
                      { path: ":subcategory", element: <categories.Shoes /> },
                    ],
                  },
                ],
              },
              {
                path: "clothes",
                children: [
                  {
                    index: true,
                    element: <home.Clothes />,
                  },
                  {
                    path: "",
                    element: <ProductsRoot />,
                    children: [
                      {
                        path: ":subcategory",
                        element: <categories.Clothes />,
                      },
                    ],
                  },
                ],
              },
              {
                path: "perfume",
                children: [
                  {
                    index: true,
                    element: <home.Perfume />,
                  },
                  {
                    path: "",
                    element: <ProductsRoot />,
                    children: [
                      { path: ":subcategory", element: <categories.Perfume /> },
                    ],
                  },
                ],
              },
              {
                path: "jewellery",
                children: [
                  {
                    index: true,
                    element: <home.Jewellery />,
                  },
                  {
                    path: "",
                    element: <ProductsRoot />,
                    children: [
                      {
                        path: ":subcategory",
                        element: <categories.Jewellery />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { path: "basket", element: <home.Basket /> },
      { path: "checkout", element: <home.Checkout /> },
      {
        path: "payment-result",
        children: [{ path: ":result", element: <home.PaymentResult /> }],
      },
    ],
  },
  {
    path: "admin",
    children: [
      { path: "login", element: <admin.Login /> },
      {
        path: "",
        element: <AdminRoot />,
        children: [
          { index: true, element: <admin.Main /> },
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
