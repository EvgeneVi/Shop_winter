// import React from "react";
import { createPortal } from "react-dom";
import "./ModalWindow.scss";
import { useEffect, useRef } from "react";

type props = {
  children: React.ReactNode;
  closeWindow: (e: React.MouseEvent) => void;
  classes?: null | string;
};

const ModalWindow = ({ children, closeWindow, classes = null }: props) => {
  // const modalRef = useRef<HTMLDialogElement>(null);

  // useEffect(() => {
  //   if (modalRef.current) modalRef.current.showModal();
  // }, []);

  return createPortal(
    <>
      <div className="modal-window__backdrop" onClick={closeWindow}></div>
      <dialog className={classes || "modal-window"} /*ref={modalRef}*/ open>
        {children}
        <div className="modal-window__close" onClick={closeWindow}></div>
      </dialog>
    </>,
    document.body
  );
};
export default ModalWindow;
