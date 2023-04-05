import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOrderProduct } from "../../store/slices/order-slice";
import { useEffect } from "react";
import { Button } from "../../components/buttons";

import paymentSuccess from "/img/result/paymentSuccess.png";
import paymentFailure from "/img/result/paymentFailure.png";

export const PaymentResult = () => {
  const dispatch = useDispatch();
  const { result } = useParams();
  const orderCode: string | undefined = result?.split("-").at(-1);

  useEffect(() => {
    if (result === "failure") {
      const newOrder = JSON.parse(localStorage.getItem("order") || "[]");
      dispatch(addOrderProduct(newOrder.products));
    }
  }, []);

  return (
    <>
      {result !== "failure" ? (
        <div className="flex flex-col gap-8 justify-center items-center min-h-[50vh] px-8">
          <img
            src={paymentSuccess}
            alt="پرداخت موفقیت آمیز"
            className="max-w-[5rem] mx-auto"
          />
          <p className="text-center text-base leading-7">
            با تشکر از پرداخت شما، سفارش شما با کد
            {orderCode && <b> {(+orderCode).toLocaleString("fa")} </b>}
            ثبت شده و جهت هماهنگی ارسال با شما تماس گرفته خواهد شد .
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-8 justify-center items-center min-h-[50vh] px-8">
          <img
            src={paymentFailure}
            alt="عدم موفقیت در پرداخت"
            className="max-w-[5rem] mx-auto"
          />
          <p className="text-center text-base leading-7">
            پرداخت موفقیت آمیز نبود، سفارش شما در انتظار پرداخت است .
          </p>
          <Link to="/payment">
            <Button bg="bg-[#ade5ad]" hover="hover:bg-[#bdeabd]">
              بازگشت به درگاه پرداخت
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};
