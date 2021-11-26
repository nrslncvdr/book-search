import React from "react";
import "./style.css";

function Modal({ modal, selectedBook, setModal }) {
  return modal && selectedBook ? (
    <section className="modal container ">
      <div className="modal__container" id="modal-container">
        <div className="modal__content centered ">
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
              src={selectedBook.volumeInfo.imageLinks.thumbnail }
              alt="Book Picture"
              className="modal__img"
            />
          </div>
          <div className="text_container">
            <p className="modal__description">
              {selectedBook.volumeInfo.description == null ? "No details!": (selectedBook.volumeInfo.description.substring(0, 180)+"...")}
            </p>
            <p className="book__detail">
             {selectedBook.volumeInfo.publishedDate}
            </p>
            <p className="book__detail">
             {selectedBook.volumeInfo.pageCount == null ? "No pages!" : (selectedBook.volumeInfo.pageCount)+ " pages"} 
            </p>
            <p className="book__detail">
              Author - {selectedBook.volumeInfo.authors == null ? "No authors!" : selectedBook.volumeInfo.authors.map(a => a 
              )} </p>
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