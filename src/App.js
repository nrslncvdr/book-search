import { useState, useEffect } from 'react'
import SearchArea from './components/Search'
import Cards from './components/Cards/Cards'
import LoadMoreBtn from './components/LoadMoreBtn'
import axios from 'axios'

function App() {
  const [books, setBooks] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(0)

  const getBooks = async () => {
    if (searchQuery === '') {
      return
    }
    const index = page * 12
    const { data } = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${index}&maxResults=12`
    )
    setBooks([...books, ...data.items])
  }

  useEffect(() => {
    try {
      getBooks()
    } catch (e) {
      console.log('error: ', e)
    }
  }, [searchQuery])

  useEffect(() => {
    try {
      getBooks()
    } catch (e) {
      console.log('error: ', e)
    }
  }, [page])

  return (
    <>
      <SearchArea setSearchQuery={setSearchQuery} />
      {books.length > 1 ? (
        <>
          <Cards books={books} />
          <LoadMoreBtn page={page} setPage={setPage} />
        </>
      ) : null}
    </>
  )
}

export default App
