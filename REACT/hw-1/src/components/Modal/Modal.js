import React, { Component } from "react";
import "./modal.scss";

class Modal extends Component {
  render() {
    const { header, closeButton, text, actions, onClick, background } =
      this.props;
    return (
      <>
        <div className="modal__wrapper">
          <div className="modal__container" style={{ background }}>
            <div className="modal__header">
              <h2 className="modal__header-text">{header}</h2>
              {closeButton && (
                <button className="modal__close-btn" onClick={onClick}>
                  X
                </button>
              )}
            </div>
            <div className="modal__body">
              <p className="modal__body-text">{text}</p>
              <div className="modal__body-btn">{actions}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
