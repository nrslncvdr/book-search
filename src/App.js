import { useState, useEffect } from 'react'
import SearchArea from './components/Search'
import Cards from './components/Cards/Cards'
import axios from 'axios'

function App() {
  const [books, setBooks] = useState([])
  const [searchQuery, setSearchQuery] = useState('Lynette+Anderson')

  const getBooks = async () => {
    const { data } = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
    )
    setBooks(data)
  }

  useEffect(() => {
    getBooks()
  }, [searchQuery])

  return (
    <>
      <SearchArea setSearchQuery={setSearchQuery} />
      <Cards books={books.items} />
    </>
  )
}

export default App
