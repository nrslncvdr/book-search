import { useState, useEffect } from "react";
import SearchArea from "./components/Search";
import Cards from "./components/Cards/Cards";
import LoadMoreBtn from "./components/LoadMoreBtn";
import axios from "axios";
import Modal from "./components/Modal";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState(false);

  const getBooks = async (varsaEskiVeriler) => {
    if (searchQuery === "") {
      return;
    }
    try {
      setIsLoading(true);
      const index = page * 12;
      const { data } = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${index}&maxResults=12`
      );
      setBooks([...varsaEskiVeriler, ...data.items]);
      setIsLoading(false);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  useEffect(() => {
    setBooks([]);
    getBooks([]);
  }, [searchQuery]);

  useEffect(() => {
    getBooks(books);
  }, [page]);

  const showModal = () => {
    setModal(true);
  };

  const bgColor = theme === "light" ? "#fff" : "#505050";
  
  return (
    <div style={{ backgroundColor: bgColor }}>
      <SearchArea setSearchQuery={setSearchQuery} />
      {books.length > 1 ? (
        <>
          <Cards
            books={books}
            setSelectedBook={setSelectedBook}
            showModal={showModal}
            isLoading={isLoading}
          />

          <LoadMoreBtn page={page} setPage={setPage} />
          <Modal
            selectedBook={selectedBook}
            modal={modal}
            setModal={setModal}
            showModal={showModal}
          />
        </>
      ) : null}
    </div>
  );
}

export default App;
