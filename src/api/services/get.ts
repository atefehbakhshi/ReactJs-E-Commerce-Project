import { instance } from "../constants";

// get products of each category by limit length
export const fetchDataByCategoryService = (
  id: number,
  page: number,
  limit: number
) => instance.get(`/products?category=${id}&&_page=${page}&_limit=${limit}`);

// get six products for each category landing page
export const fetchProductsLandingDataService = (id: number) =>
  instance.get(`/products?subcategory=${id}&&_page=1&_limit=6`);

// get all products for admin dashboard
export const fetchAllProductsDataService = (page: number, limit: number) =>
  instance.get(`/products?_page=${page}&_limit=${limit}`);

// get orders list
export const getOrdersDataService = (order, page, limit, delivered) =>
  instance.get(
    `/orders?_sort=createdAt&_order=${order}&&_page=${page}&_limit=${limit}&&delivered=${delivered}`
  );

// get data by id
export const fetchDataByIdService = (id: number) =>
  instance.get(`/products?id=${id}`);
