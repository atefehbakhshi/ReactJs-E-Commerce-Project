import ReactDOM from "react-dom";
import { ModalManager } from "./ModalManager";

export const Portal = () => {
  return (
    <div>
      {ReactDOM.createPortal(
        <ModalManager />,
        document.getElementById("modal-root") as HTMLDivElement
      )}
    </div>
  );
};
