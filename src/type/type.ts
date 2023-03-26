import store from "../store";
import { LoginParams } from "./interface";

export type RootState = ReturnType<typeof store.getState>;

interface P {
  data: [];
  count: number;
}

export type OrdersGetData = (
  ordersDate: string,
  page: number,
  limit: number,
  isDelivered: boolean
) => Promise<P>;

export type AllProductsGetData = (
  page: number,
  limit: number,
  productCategory: string
) => Promise<P>;

// pagination
export type PaginationT = (totalCount: number, dataPerPage: number) => number[];

// login
// export type Loginw = (data: LoginParams) => Promise<void>;

// hooks
export type GetDataT = (
  subCategoryId: number,
  page: number
) => [never[], number, number];
