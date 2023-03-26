import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllProductsData,
  fetchDataByCategory,
  fetchOrdersData,
} from "../../api/services";
import { ORDERS_PER_PAGE, ALL_PRODUCTS_PER_PAGE } from "../../constants";
import { GetAllProducts, GetOrderList } from "../../type/interface";

export const getOrdersList = createAsyncThunk(
  "data/ordersData",
  async ({ ordersDate, page, isDelivered }: GetOrderList) => {
    const res = await fetchOrdersData(
      ordersDate,
      page,
      ORDERS_PER_PAGE,
      isDelivered
    );

    return { data: res.data, count: res.headers["x-total-count"] };
  }
);

export const getAllProducts = createAsyncThunk(
  "data/productsData",
  async ({ page, productCategory }: GetAllProducts) => {
    let res;
    if (productCategory === "all") {
      res = await fetchAllProductsData(page, ALL_PRODUCTS_PER_PAGE);
    } else {
      res = await fetchDataByCategory(
        productCategory,
        page,
        ALL_PRODUCTS_PER_PAGE
      );
    }

    return {
      data: res.data,
      count: res.headers["x-total-count"],
      page,
      productCategory,
    };
  }
);
