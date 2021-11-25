import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("Lynette+Anderson");

  const getBooks = async () => {
    const { data } = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
    );
    setBooks(data);
  };

  console.log(isLoading);

  useEffect(() => {
    if(books) setIsLoading(false)
    getBooks();
  }, []);
  return (
    <>
      <Cards books={books.items} />
    </>
  );
}

export default App;
