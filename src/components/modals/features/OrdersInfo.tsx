import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDataById, editUserDataById } from "../../../api/services";
import { getOrdersList } from "../../../store/actions/data-actions";
import { setShowModal } from "../../../store/slices/modal-slice";
import { OrderI } from "../../../type/interface";
import { AppDispatch, RootState } from "../../../type/type";
import { Button } from "../../buttons";
import { BasketTable } from "../../tables";

const getData = async (id: number) => {
  const res = await fetchUserDataById(id);
  return res.data;
};

export const OrdersInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [userInfo, setUserInfo] = useState<OrderI | null>(null);
  const { tempId } = useSelector((state:RootState) => state.modal);

  useEffect(() => {
    getData(tempId).then((res) => setUserInfo(res[0]));
  }, []);

  const deliverdData = () => {
    if (userInfo) {
      const editedData = userInfo;
      editedData.delivered = true;
      editUserDataById(tempId, editedData);
      dispatch(setShowModal(false));
    }

    const required = {
      ordersDate: "desc",
      page: 1,
      isDelivered: false,
    };

    dispatch(getOrdersList(required));
  };

  return (
    <>
      {userInfo ? (
        <div className="flex flex-col gap-4 max-w-xl mx-auto p-4 ">
          <p>
            نام مشتری : {userInfo.username} {userInfo.lastname}
          </p>
          <p>آدرس : {userInfo.address}</p>
          <p>تلفن : {userInfo.phone}</p>
          <p>
            زمان تحویل : {new Date(userInfo.expectAt).toLocaleDateString("FA")}
          </p>
          <p>
            زمان سفارش : {new Date(userInfo.createdAt).toLocaleDateString("FA")}
          </p>
          <BasketTable selectedList={userInfo.products} location="adminPanel" />
          <div className="flex justify-center w-1/2 mx-auto">
            {userInfo.delivered ? (
              <p>
                زمان تحویل :
                {new Date(userInfo.expectAt).toLocaleDateString("FA")}
              </p>
            ) : (
              <Button
                bg="bg-[#ade5ad]"
                hover="hover:bg-[#bdeabd]"
                onClick={deliverdData}
              >
                تحویل شد
              </Button>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};
