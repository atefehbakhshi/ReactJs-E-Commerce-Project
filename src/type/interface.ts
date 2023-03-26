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

export interface LoginParams {
  username: string;
  password: string;
}

export interface ProductParams {
  img: string;
  title: string;
  price: number;
  id: number | undefined;
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
  error: any;
  validation?: {};
  accept?: string;
  multiple?: boolean;
}

// Thunks
export interface GetOrderList {
  ordersDate: string;
  page: number;
  isDelivered: boolean;
}
export interface GetAllProducts {
  page: number;
  productCategory: string;
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

export interface ProductI {
  name: string;
  brand: string;
  image: string[];
  thumbnail: string;
  price: number;
  quantity: number;
  createdAt?: number;
  id?: number;
  category: number;
  subcategory: number;
  description: string;
}

export interface GetProductI {
  name: string;
  brand: string;
  image: any;
  thumbnail: any;
  price: number;
  quantity: number;
  createdAt: number;
  id: number;
  category: number;
  subcategory: string;
  description: string;
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

export interface CategoryI {
  path: string;
  text: string;
  icon: string;
  id: number | string;
  landing: string;
}

export interface BasketTableI {
  selectedList: OrderProductI[];
  location?: string;
}

// login
export interface LoginI {
  username: string;
  password: string;
}
