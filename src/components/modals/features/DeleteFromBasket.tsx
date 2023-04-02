import { useDispatch, useSelector } from "react-redux";
import { getId, setShowModal } from "../../../store/slices/modal-slice";
import { addOrderProduct } from "../../../store/slices/order-slice";
import { OrderProductI } from "../../../type/interface";
import { AppDispatch, RootState } from "../../../type/type";
import { Button } from "../../buttons";

export const DeleteFromBasket = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list } = useSelector((state: RootState) => state.order);
  const { tempId } = useSelector((state: RootState) => state.modal);

  const closeModal = () => {
    dispatch(setShowModal(false));
    dispatch(getId(0));
  };

  const deleteProductHandler = () => {
    const newList = list.filter((item: OrderProductI) => item.id !== tempId);
    dispatch(addOrderProduct(newList));
    dispatch(setShowModal(false));
    dispatch(getId(0));
  };

  return (
    <div className="flex justify-center items-center  min-h-[15vh]">
      <div className="flex justify-center gap-8 ">
        <Button
          bg="bg-[#ade5ad]"
          hover="hover:bg-[#bdeabd]"
          onClick={deleteProductHandler}
        >
          بلی
        </Button>
        <Button onClick={closeModal}>خیر</Button>
      </div>
    </div>
  );
};
