import { useState, useEffect } from "react";
import SearchArea from "./components/Search";
import Cards from "./components/Cards/Cards";
import LoadMoreBtn from "./components/LoadMoreBtn";
import axios from "axios";
import Modal from "./components/Modal";

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState(false);
  const getBooks = async (varsaEskiVeriler) => {
    if (searchQuery === "") {
      return;
    }
    const index = page * 12;
    const { data } = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${index}&maxResults=12`
    );
    setBooks([...varsaEskiVeriler, ...data.items]);
  };

  useEffect(() => {
    try {
      getBooks([]);
    } catch (e) {
      console.log("error: ", e);
    }
  }, [searchQuery]);

  useEffect(() => {
    try {
      getBooks(books);
    } catch (e) {
      console.log("error: ", e);
    }
  }, [page]);

  const showModal = () => {
    setModal(true);
  };

  return (
    <>
      <SearchArea setSearchQuery={setSearchQuery} />
      {books.length > 1 ? (
        <>
          <Cards
            books={books}
            setSelectedBook={setSelectedBook}
            showModal={showModal}
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
    </>
  );
}

export default App;
