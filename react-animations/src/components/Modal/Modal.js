import React from "react";

import "./Modal.css";
import { CSSTransition } from "react-transition-group";
// import CSSTransition from "react-transition-group/CSSTransition";
const animationTiming = {
  enter: 400,
  exit: 1000,
};
const modal = (props) => {
  const cssClass = ["Modal", props.show ? "ModalOpen" : "ModalClosed"];
  return (
    <CSSTransition
      in={props.show}
      mountOnEnter
      unmountOnExit
      timeout={animationTiming}
      classNames={{
        enterActive: "ModalOpen",
        exitActive: "ModalClosed",
      }}
    >
      <div className={"Modal"}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
