import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../../api/services/features/delete";
import { getAllProducts } from "../../../store/actions/data-actions";
import { setShowModal } from "../../../store/slices/modal-slice";
import { AppDispatch, RootState } from "../../../type/type";
import { Button } from "../../buttons";

export const DeleteProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tempId } = useSelector((state: RootState) => state.modal);
  const { allProducts } = useSelector((state: RootState) => state.data);

  const closeModal = () => {
    dispatch(setShowModal(false));
  };

  const deleteProductHandler = () => {
    deleteProduct(tempId);
    const required = {
      page: allProducts.page,
      productCategory: allProducts.productCategory,
    };
    dispatch(getAllProducts(required));
    dispatch(setShowModal(false));
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
