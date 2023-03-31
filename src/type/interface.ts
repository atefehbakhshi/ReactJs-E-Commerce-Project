import { ErrorMessageT } from "./type";

// login
export interface LoginI {
  username: string;
  password: string;
}

export interface SidebarLinkParams {
  mainPath: string;
  firstSubPath: string;
  secondSubPath: string;
  mainText: string;
  firstText: string;
  secondText: string;
  menuHandler: () => void;
}

export interface ButtonParams
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bg?: string;
  hover?: string;
}

export interface PaymentButtonParams
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bg?: string;
  colSpan: string;
}

export interface ProductParams {
  img: string;
  title: string;
  price: number;
  id: number | undefined;
  quantity: number;
}

export interface BasketProductI {
  count: number;
  id: number;
  image: string;
  limitCount: number;
  name: string;
  price: number;
}

// pagination
export interface PaginationI {
  page: number;
  totalCount: number;
  dataPerPage: number;
  OnSetPage: (pageNo: number) => void;
}

export interface InputParams
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id?: string;
  label: string;
  error: ErrorMessageT;
  validation?: {};
  accept?: string;
  multiple?: boolean;
}

export interface PaymentInputParams
  extends React.InputHTMLAttributes<HTMLInputElement> {
  mainText: string;
  subText: string;
  error?: ErrorMessageT;
  validation?: {};
}

// Thunks - actions
export interface GetOrderList {
  ordersDate: string;
  page: number;
  isDelivered: boolean;
}

export interface GetAllProducts {
  page: number;
  productCategory: string;
}

export interface CategoryI {
  path: string;
  text: string;
  icon: string;
  id: number | string;
  landing: string;
}

interface ProductI {
  name: string;
  brand: string;
  price: number;
  quantity: number;
  category: number;
  description: string;
}

export interface ProductGetFromDbI extends ProductI {
  image: string[];
  thumbnail: string;
  createdAt: number;
  id: number;
  subcategory: number;
}

export interface ProductSendToDbI extends ProductI {
  image: string[];
  thumbnail: string;
  subcategory: number;
}

export interface ProductGetFromAdmin extends ProductI {
  image: any;
  thumbnail: any;
  subcategory: string;
}

// basket
export interface OrderProductI {
  id: number;
  name: string;
  count: number;
  price: number;
  image: string;
  limitCount?: number;
}

export interface OrderI {
  username: string;
  lastname: string;
  address: string;
  phone: string | number;
  expectAt: number;
  products: OrderProductI[];
  prices: number;
  delivered: boolean;
  createdAt: number;
  id: number;
}

export interface BasketTableI {
  selectedList: OrderProductI[];
  location?: string;
}

export interface UserInfo {
  name: string;
  family: string;
  address: string;
  phone: string | number;
}

// for charts in main page
export interface DataI {
  sun: OrderI[];
  mon: OrderI[];
  thu: OrderI[];
  wed: OrderI[];
  tue: OrderI[];
  fri: OrderI[];
  sat: OrderI[];
}
