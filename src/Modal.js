import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

let ModalRoot;
const Modal = ({ children }) => {
  ModalRoot = ModalRoot ? ModalRoot : document.getElementById("modal");
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    ModalRoot.appendChild(elRef.current);
    return () => ModalRoot.removeChild(elRef.current);
  }, []);
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
