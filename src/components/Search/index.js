import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import caseTown from 'case-town'

// mui components
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
//styles
import './styles.css'
import ThemeToggleBtn from '../ThemeToggleBtn'

function SearchArea({ setSearchQuery }) {
  const { theme } = useTheme()
  const [isClicked, setIsClicked] = useState(false)
  const [searchText, setSearchText] = useState('')

  // searchText events start
  const handleChange = (e) => {
    setSearchText(e.target.value)
  }
  // gelen metindeki istenmeyen karakterleri temizle
  const clearSearchText = () => {
    let clearedText = caseTown.justClear(searchText)
    let clearedTextAndAddedPlus = caseTown.searchQuery(searchText)
    const values = {
      text: clearedText,
      query: clearedTextAndAddedPlus,
    }
    return values
  }
  // verileri güncelleyecek method
  const setStates = () => {
    if (searchText.trim() === '') {
      return
    }
    const { text, query } = clearSearchText()
    // arama çubuğundaki metin
    setSearchText(text)
    // api'ye gidecek metin (boşluk yerine artı olacak şekilde)
    setSearchQuery(query)
    setIsClicked(true)
  }

  const handleClick = () => setStates()

  const handleEnter = (e) => (e.keyCode === 13 ? setStates() : null)

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={isClicked ? { height: 150 } : { height: '100vh' }}
      className="search-grid"
    >
      <Paper sx={{ position: 'absolute', top: '20px', right: '20px' }}>
        <ThemeToggleBtn />
      </Paper>

      <Paper
        className="search-paper"
        style={theme === 'dark' ? { backgroundColor: '#424242' } : null}
        elevation={0}
      >
        <InputBase
          style={theme === 'dark' ? { color: '#9e9e9e' } : null}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Books"
          inputProps={{ 'aria-label': 'search books' }}
          value={searchText}
          onChange={handleChange}
          onKeyDown={(e) => handleEnter(e)}
        />
        <Divider
          style={theme === 'dark' ? { backgroundColor: '#9e9e9e' } : null}
          sx={{ height: 28, m: 0.5 }}
          orientation="vertical"
        />
        <IconButton
          style={theme === 'dark' ? { color: '#9e9e9e' } : null}
          sx={{ p: '10px' }}
          onClick={handleClick}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Grid>
  )
}

export default SearchArea
