import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrdersData } from "../../api/services";
import { ORDERS_PER_PAGE } from "../../constants";

export const getOrdersList = createAsyncThunk(
  "data/ordersData",
  async ({ ordersDate, page, isDelivered }) => {
    const res = await fetchOrdersData(
      ordersDate,
      page,
      ORDERS_PER_PAGE,
      isDelivered
    );

    return { data: res.data, count: res.headers["x-total-count"] };
  }
);
