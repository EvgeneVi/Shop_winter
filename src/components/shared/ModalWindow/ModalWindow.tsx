// import React from "react";
import { createPortal } from "react-dom";
import "./ModalWindow.scss";
import { FC, useEffect, useRef } from "react";

type modalType = {
  children: React.ReactNode;
  openModal: boolean;
};

const ModalWindow: FC<modalType> = ({ children, openModal }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!modalRef.current) return;

    if (openModal) modalRef.current.showModal();
    else modalRef.current.close();
  }, [openModal]);

  return createPortal(
    <dialog className="modal-window" ref={modalRef}>
      {children}
    </dialog>,
    document.body
  );
};
export default ModalWindow;
