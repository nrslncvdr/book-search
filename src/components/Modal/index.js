import React from "react";
import "./style.css";

function Modal({ modal, selectedBook, setModal }) {
  return modal && selectedBook ? (
    <section className="modal container">
      <div className="modal__container" id="modal-container">
        <div className="modal__content">
          <div className="modal__close close-modal" title="Close">
            <i
              className="bx bx-x"
              onClick={() => {
                setModal(false);
              }}
            ></i>
          </div>
          <div className="img_container">
            <img
              src={selectedBook.volumeInfo.imageLinks.thumbnail}
              alt="Book Picture"
              className="modal__img"
            />
          </div>
          <div className="text_container">
            <p className="modal__description">
              {selectedBook.volumeInfo.description.substring(0, 180)} ...
            </p>
            <p className="modal__author">
              Author - {selectedBook.volumeInfo.authors[0]}
            </p>
          </div>
          <button
            className="modal__button"
            onClick={() => {
              setModal(false);
            }}
          >
            Close
          </button>
          <button className="modal__button">
            <a target="_blank" href={selectedBook.volumeInfo.infoLink}>Preview</a>
          </button>
        </div>
      </div>
    </section>
  ) : null;
}

export default Modal;
