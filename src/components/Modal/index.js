import React from "react";
import "./style.css";
import img from "../images/img.png";
import { useTheme } from "../../context/ThemeContext";

function Modal({ modal, selectedBook, setModal }) {
  const { theme } = useTheme()

  return modal && selectedBook ? (

    <section className="modal container ">
      <div className="modal__container" id="modal-container" >
        <div className="modal__content  " style={theme === 'dark' ? { backgroundColor: '#424242', color:'#9e9e9e'} : null}>
          
          <a href="#"  class="modal-close"onClick={() => {
                setModal(false);
              }} > X</a>
         
          <div className="img_container">
            <img
              src={selectedBook?.volumeInfo?.imageLinks?.thumbnail
                  ? selectedBook?.volumeInfo?.imageLinks?.thumbnail
                  : img
              } 
              alt="Book Picture"
              className="modal__img"
            />
          </div>
          <div className="text_container" style={theme === 'dark' ? {color:'#9e9e9e'} : null}>
            <p className="modal__description" >
              {selectedBook.volumeInfo.description == null ? "No details!": (selectedBook.volumeInfo.description.substring(0, 180)+"...")}
            </p>
            <p className="book__detail" style={theme === 'dark' ? {color:'#9e9e9e'} : null}>
             {selectedBook.volumeInfo.publishedDate}
            </p>
            <p className="book__detail" style={theme === 'dark' ? {color:'#9e9e9e'} : null}>
             {selectedBook.volumeInfo.pageCount == null ? "No pages!" : (selectedBook.volumeInfo.pageCount)+ " pages"} 
            </p>
            <p className="book__detail" style={theme === 'dark' ? {color:'#9e9e9e'} : null}>
            Authors  <br/>{selectedBook.volumeInfo.authors == null ? "No authors!" : selectedBook.volumeInfo.authors.map(a=> <> {a} <br/></>)} </p>
            <button className="btn_close modal__button "
            onClick={() => {
              setModal(false);
            }} >Close </button>
          <button className="modal__button" >
            <a target="_blank" href={selectedBook.volumeInfo.infoLink}>Preview</a>
          </button>
          </div>
          
        </div>
      </div>
    </section>
  ) : null;
}

export default Modal;
