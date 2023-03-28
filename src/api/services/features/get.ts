import { instance } from "../../constants";

// get products of each category by limit length
export const fetchDataByCategory = (
  id: number | string,
  page: number,
  limit: number
) =>
  instance.get(
    `/products?_sort=createdAt&_order=desc&&category=${id}&&_page=${page}&_limit=${limit}`
  );

// get  products for each subCategory by limit length
export const fetchDataBySubcategory = (
  id: number | string,
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

// get product data by id
export const fetchDataById = (id: number) => instance.get(`/products?id=${id}`);

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

// get  products for each subCategory page by search text
export const fetchSearchData = (
  id: number,
  page: number,
  limit: number,
  text: string
) =>
  instance.get(
    `/products?_sort=createdAt&_order=desc&&subcategory=${id}&&name_like=${text}&&_page=${page}&_limit=${limit}`
  );

// get  products for each subCategory page by limiting price
export const fetchRangeData = (
  id: number,
  page: number,
  limit: number,
  max: number
) =>
  instance.get(
    `/products?_sort=createdAt&_order=desc&&subcategory=${id}&&price_gte=0&price_lte=${max}&&_page=${page}&_limit=${limit}`
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

// data for charts
export const fetchOrdersDataForCharts = () => instance.get(`/orders`);

// get user data by id
export const fetchUserDataById = (id: number) =>
  instance.get(`/orders?id=${id}`);
