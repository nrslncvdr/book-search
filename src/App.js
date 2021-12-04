import { useState, useEffect } from 'react'
import SearchArea from './components/Search'
import Cards from './components/Cards/Cards'
import LoadMoreBtn from './components/LoadMoreBtn'
import Back2TopBtn from './components/Back2TopBtn'
import axios from 'axios'
import Modal from './components/Modal'
import { useTheme } from './context/ThemeContext'
import CardSkeleton from './components/Skeleton/CardSkeleton'
import Error404 from './components/Error404'

//yeni aramada sayfanın yukarıya çıkmasını sağlamak için kullanılacak değiken
let scrollFixer = false

function App() {
  const { theme } = useTheme()
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState({})
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(0)
  const [modal, setModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const getBooks = async (varsaEskiVeriler) => {
    if (searchQuery === '') {
      return
    }
    try {
      setIsLoading(true)
      if (isError) {
        setIsError(false)
      }
      const index = page * 12
      const { data } = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${index}&maxResults=12`
      )
      setBooks([...varsaEskiVeriler, ...data.items])
      setIsLoading(false)
      scrollFixer = false
    } catch (e) {
      console.log('error: ', e)
      setIsError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    scrollFixer = true
    setBooks([])
    getBooks([])
  }, [searchQuery])

  useEffect(() => {
    getBooks(books)
  }, [page])

  const showModal = () => {
    setModal(true)
  }

  const showResults = () => {
    return (
      <>
        {/*
          koşullar
          1- kitap yoksa -> 1.1 isLoading'se skeleton göster
                            1.2 (else - default) hiçbir şey gösterme (yoksa ilk açılışta scroll çıkıyor)
          2- kitap varsa -> (default) compnentleri render et
                            1.1 eğer isLoading'se skeleton göster 'cards' ve 'load button' arasında
        */}
        {scrollFixer && window.scrollTo(0, -160)}
        {books.length < 1 ? (
          isLoading && <CardSkeleton />
        ) : (
          <>
            <Cards
              books={books}
              setSelectedBook={setSelectedBook}
              showModal={showModal}
              isLoading={isLoading}
            />
            {isLoading && <CardSkeleton />}
            <LoadMoreBtn page={page} setPage={setPage} />
            <Modal
              selectedBook={selectedBook}
              modal={modal}
              setModal={setModal}
              showModal={showModal}
            />
            <Back2TopBtn />
          </>
        )}
      </>
    )
  }

  const bgColor = theme === 'light' ? '#fff' : '#505050'

  return (
    <div style={{ backgroundColor: bgColor }}>
      <SearchArea setSearchQuery={setSearchQuery} isLoading={isLoading} />
      {/* error varsa 404 komponenti yoksa diğer komponentleri render et */}
      {isError ? <Error404 /> : showResults()}
    </div>
  )
}

export default App
