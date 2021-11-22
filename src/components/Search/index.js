import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// search bar
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
//styles
import './styles.css'
/* Arkaplanlar
back 2: https://i.hizliresim.com/blk6siu.png
back 3: https://i.hizliresim.com/db2yim8.png
back 4: https://i.hizliresim.com/30rgrsj.png
back 6: https://i.hizliresim.com/syp78b9.png
back 7: https://i.hizliresim.com/9uy3umu.png
BACK 8: https://i.hizliresim.com/675wqbb.png
BACK 9: https://i.hizliresim.com/hfuzcgx.png
mobile clicked: https://i.hizliresim.com/qd9eye4.png
mobile 2: https://i.hizliresim.com/cnwfc2s.png
back 10 mobile: https://i.hizliresim.com/l0j76wd.png
*/

function SearchArea() {
  const [isClicked, setIsClicked] = useState(false)
  const [searchText, setSearchText] = useState('')

  const afterFirstClickStyles = {
    height: '175px',
    transition: '1.5s',
  }

  const beforeFirstClickStyles = {
    height: '100vh',
  }

  // searchText events start
  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  const clearSearchText = () => {
    let clearedText = searchText
    clearedText = clearedText.trim()
    setSearchText(clearedText)
    return clearedText
  }

  const handleClick = () => {
    if (searchText === '') {
      return
    }
    const text = clearSearchText()
    console.log(text)
    // text api'ye gönderilecek
    setIsClicked(true)
  }

  const handleEnter = (e) => {
    if (searchText === '') {
      return
    }

    if (e.keyCode === 13) {
      const text = clearSearchText()
      console.log(text)
      // text api'ye gönderilecek
      setIsClicked(true)
    }
  }
  return (
    <Box
      sx={isClicked ? afterFirstClickStyles : beforeFirstClickStyles}
      className="search-box"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={isClicked ? afterFirstClickStyles : beforeFirstClickStyles}
      >
        <Paper className="search-paper" elevation={0}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Books"
            inputProps={{ 'aria-label': 'search books' }}
            value={searchText}
            onChange={handleChange}
            onKeyDown={(e) => handleEnter(e)}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            sx={{ p: '10px' }}
            onClick={handleClick}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
    </Box>
  )
}

export default SearchArea
