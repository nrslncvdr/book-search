import React from 'react'
import "./style.css";

function Modal({showModal,setOpenModal}) {
  return (
    <>
    {showModal ? (
     <section className="modal container">

      <div className="modal__container" id="modal-container">
        <div className="modal__content">
          <div className="modal__close close-modal" title="Close">
            <i className="bx bx-x" onClick={()=> {setOpenModal(false);}}></i>
          </div>

          <img
            src=""
            alt=""
            className="modal__img"
          />

          <h1 className="modal__title">Good Job!</h1>
          <p className="modal__description">Click the button to close</p>

          <button className="modal__button modal__button-width">
            View status
          </button>

          <button className="modal__button-link close-modal" onClick={()=> {setOpenModal(false);}}>
            Close
          </button>
        </div>
      </div>
    </section>) : null}
    </>
  );
}

export default Modal;