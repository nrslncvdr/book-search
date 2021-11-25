import "./bookCard.css";

const BookCard = ({ book, setSelectedBook, showModal }) => {
  const modal = () => {
    setSelectedBook(book);
    showModal();
  };
  return (
    <div className="card">
      <div className="cover">
        <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="cover" />
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
