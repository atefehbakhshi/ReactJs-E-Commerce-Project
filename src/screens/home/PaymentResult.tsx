import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOrderProduct } from "../../store/slices/order-slice";
import { useEffect } from "react";

import paymentSuccess from "/img/result/paymentSuccess.png";
import paymentFailure from "/img/result/paymentFailure.png";

export const PaymentResult = () => {
  const dispatch = useDispatch();
  const { result } = useParams();

  useEffect(() => {
    if (result === "failure") {
      const newOrder = JSON.parse(localStorage.getItem("order") || "[]");
      dispatch(addOrderProduct(newOrder.products));
    }
  }, []);

  return (
    <>
      {result === "success" ? (
        <div className="flex flex-col gap-8 justify-center items-center min-h-[50vh] px-8">
          <img
            src={paymentSuccess}
            alt="پرداخت موفقیت آمیز"
            className="max-w-[15rem] mx-auto"
          />
          <p className="text-center text-base leading-7">
            با تشکر از پرداخت شما، سفارش شما ثبت شده و جهت هماهنگی ارسال با شما
            تماس گرفته خواهد شد .
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-8 justify-center items-center min-h-[50vh] px-8">
          <img
            src={paymentFailure}
            alt="عدم موفقیت در پرداخت"
            className="max-w-[15rem] mx-auto"
          />
          <p className="text-center text-base leading-7">
            پرداخت موفقیت آمیز نبود، سفارش شما در انتظار پرداخت است .
          </p>
        </div>
      )}
    </>
  );
};
