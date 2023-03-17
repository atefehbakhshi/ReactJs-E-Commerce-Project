import { instance } from "../../constants";

// get products of each category by limit length
export const fetchDataByCategory = (id: string, page: number, limit: number) =>
  instance.get(
    `/products?_sort=createdAt&_order=desc&&category=${id}&&_page=${page}&_limit=${limit}`
  );

// get  products for each subCategory page by limit length
export const fetchDataBySubcategory = (
  id: number,
  page: number,
  limit: number
) =>
  instance.get(
    `/products?_sort=createdAt&_order=desc&&subcategory=${id}&&_page=${page}&_limit=${limit}`
  );

// get all products for admin dashboard
export const fetchAllProductsData = (page: number, limit: number) =>
  instance.get(
    `/products?_sort=createdAt&_order=desc&&_page=${page}&_limit=${limit}`
  );

// get orders list
export const fetchOrdersData = (
  order: string,
  page: number,
  limit: number,
  delivered: boolean
) =>
  instance.get(
    `/orders?_sort=createdAt&_order=${order}&&_page=${page}&_limit=${limit}&&delivered=${delivered}`
  );

export const fetchOrdersDataForCharts = () => instance.get(`/orders`);

// get product data by id
export const fetchDataById = (id: number) => instance.get(`/products?id=${id}`);

// get user data by id
export const fetchUserDataById = (id: number) =>
  instance.get(`/orders?id=${id}`);

// get  products for each subCategory page by sorting date or price
export const fetchFiltredData = (
  id: number,
  page: number,
  limit: number,
  filterType: string,
  text: string
) =>
  instance.get(
    `/products?_sort=${filterType}&_order=${text}&&subcategory=${id}&&_page=${page}&_limit=${limit}`
  );
