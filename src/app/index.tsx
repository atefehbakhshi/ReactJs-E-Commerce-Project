import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Portal } from "../components/modals";
import router from "../router";
import { RootState } from "../type/type";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  const { showModal } = useSelector((state: RootState) => state.modal);
  return (
    <>
      {showModal && <Portal />}
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
