import { useEffect } from "react";
import ProductDetail from "../../components/product/ProductDetail";

export const ProductDetailP = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ProductDetail />;
};
