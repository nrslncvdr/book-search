import "./bookCard.css";

const BookCard = () => {
  return (
    <div className="card">
      <div className="cover">
        <img
          src="https://books.google.com/books/content?id=TYjBxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          alt="cover"
        />
      </div>
      <div className="card-content">
        <h4>The Singless</h4>
        <p>Listen to Muses's singles now, including Supermassive black hole</p>
      </div>
      <button className="card-button">Details</button>
    </div>
  );
};

export default BookCard;
