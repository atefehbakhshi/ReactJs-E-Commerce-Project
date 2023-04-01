import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../../store/slices/modal-slice";
import { RootState } from "../../../type/type";
import {
  AddComment,
  AddEditProduct,
  DeleteProduct,
  OrdersInfo,
} from "../index";

const modalList = [
  {
    id: "addEditProduct",
    header: "افزودن / ویرایش",
    fn: () => <AddEditProduct />,
  },
  {
    id: "ordersInfo",
    header: "نمایش سفارش",
    fn: () => <OrdersInfo />,
  },
  {
    id: "deleteModal",
    header: "حذف محصول ؟",
    fn: () => <DeleteProduct />,
  },
  {
    id: "addComment",
    header: "اضافه کردن دیدگاه",
    fn: () => <AddComment />,
  },
];

export const ModalManager = () => {
  const dispatch = useDispatch();
  const { modalName } = useSelector((state: RootState) => state.modal);
  const selectedModal = modalList.find(({ id }) => id === modalName);

  const closeModal = () => {
    dispatch(setShowModal(false));
  };

  return (
    <div className="flex justify-center items-center bg-[#1f1f1f85] absolute h-full w-full z-[60]">
      <div className="bg-white w-3/4 max-w-xl rounded p-4 form-shadow">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg mb-4">{selectedModal?.header}</h1>
          <Icon
            icon="carbon:close-filled"
            width="20"
            color="#525252"
            onClick={closeModal}
            className="cursor-pointer"
          />
        </div>
        {selectedModal?.fn()}
      </div>
    </div>
  );
};
