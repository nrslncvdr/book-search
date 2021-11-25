import { useState, useEffect } from 'react'
import SearchArea from './components/Search'
import Cards from './components/Cards/Cards'
import LoadMoreBtn from './components/LoadMoreBtn'
import axios from 'axios'
import { Modal } from '@mui/material'

function App() {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState({})
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(0)
  const getBooks = async (varsaEskiVeriler) => {
    if (searchQuery === '') {
      return
    }
    const index = page * 12
    const { data } = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${index}&maxResults=12`
    )
    setBooks([...varsaEskiVeriler, ...data.items])
  }

  useEffect(() => {
    setBooks([])
    try {
      getBooks([])
    } catch (e) {
      console.log('error: ', e)
    }
  }, [searchQuery])

  useEffect(() => {
    try {
      getBooks(books)
    } catch (e) {
      console.log('error: ', e)
    }
  }, [page])

  return (
    <>
      <SearchArea setSearchQuery={setSearchQuery} />
      {books.length > 1 ? (
        <>
          <Cards books={books} setSelectedBook={setSelectedBook} />
          <LoadMoreBtn page={page} setPage={setPage} />
          <Modal selectedBook={selectedBook} />
        </>
      ) : null}
    </>
  )
}

export default App
