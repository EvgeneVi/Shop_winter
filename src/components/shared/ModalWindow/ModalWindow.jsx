// import React from "react";
import { createPortal } from "react-dom";
import "./ModalWindow.scss";
import { useEffect, useRef } from "react";

export default function ModalWindow({ children, openModal }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (openModal) modalRef.current.showModal();
    else modalRef.current.close();
  }, [openModal]);

  return createPortal(
    <dialog className="modal-window" ref={modalRef}>
      {children}
    </dialog>,
    document.body
  );
}
