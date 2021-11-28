import "./bookCard.css";
import img from "../../images/img.png";
import { useTheme } from "../../../context/ThemeContext";

const BookCard = ({ book, setSelectedBook, showModal }) => {
  const { theme, setTheme } = useTheme();
  let bgColor = theme === "dark" ? "#353535" : "";
  const modal = () => {
    setSelectedBook(book);
    showModal();
  };
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="cover">
        <img
          src={
            book?.volumeInfo?.imageLinks?.thumbnail
              ? book?.volumeInfo?.imageLinks?.thumbnail
              : img
          }
          alt="cover"
        />
      </div>
      <div className="card-content">
        <h4>{book.volumeInfo.title}</h4>
        <p>{book.volumeInfo.description}</p>
      </div>
      <button className="card-button" onClick={modal}>
        Details
      </button>
    </div>
  );
};

export default BookCard;
