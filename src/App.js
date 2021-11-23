import { useState, useEffect } from 'react'
import SearchArea from './components/Search'
import Cards from './components/Cards/Cards'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (searchQuery === '') {
      return
    }
    console.log('i am at app.js 😋: ', searchQuery)
  }, [searchQuery])
  return (
    <>
      <SearchArea setSearchQuery={setSearchQuery} />
      <Cards />
    </>
  )
}

export default App
