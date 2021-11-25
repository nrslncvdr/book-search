import React from 'react'
import "./style.css";

function Modal({ showModal/* , openModal */ ,detailModal}) {
  return showModal && detailModal ? (
      <section className="modal container">

        <div className="modal__container" id="modal-container">
          <div className="modal__content">
            <div className="modal__close close-modal" title="Close">
              <i className="bx bx-x"/*  onClick={() => { openModal(false) }} */></i>
            </div>
            <div className="img_container">
              <img src={detailModal.volumeInfo.imageLinks.thumbnail} alt="Book Picture" className="modal__img" />
            </div>
            <div className="text_container">
              <p className="modal__description">{detailModal.volumeInfo.description.substring(0,180)} ...</p>
              <p className="modal__author">Author - {detailModal.volumeInfo.authors[0]} </p>
            </div>
            <button className="modal__button" /* onClick={() => { openModal(false) }} */> Close </button>
            <button className="modal__button"> Preview </button>
          </div>
        </div>
      </section>
    ) : null
}

export default Modal;