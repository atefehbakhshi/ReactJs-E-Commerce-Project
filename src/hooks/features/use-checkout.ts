import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../utility/schema";
import { useSelector } from "react-redux";
import { OrderProductI, UserInfo } from "../../type/interface";
import { RootState } from "../../type/type";
import { FieldValues } from "react-hook-form/dist/types";

let expectDate = 0;

const calculatePrice = (list: OrderProductI[]) => {
  let price = 0;
  list.forEach((item: OrderProductI) => {
    price += item.price * item.count;
  });
  return price;
};

export const useCheckout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema), mode: "onChange" });
  const { list } = useSelector((state: RootState) => state.order);

  const totalPrice = calculatePrice(list);

  const getDate = (date: string) => {
    expectDate = new Date(`${date}`).getTime();
  };

  const handleAddOrder = (data: FieldValues |UserInfo) => {
    const newOrder = {
      username: data.name,
      lastname: data.family,
      address: data.address,
      phone: data.phone,
      expectAt: expectDate,
      products: list,
      prices: totalPrice,
      delivered: false,
    };
    localStorage.setItem("order", JSON.stringify(newOrder));
    window.location.href = "/payment";
  };

  return {
    register,
    handleSubmit,
    errors,
    handleAddOrder,
    getDate,
  };
};
