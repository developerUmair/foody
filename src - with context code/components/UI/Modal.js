import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { modalContext } from "../../App";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  const ctxMod = useContext(modalContext);

  return <div className={classes.backdrop} onClick={ctxMod.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
