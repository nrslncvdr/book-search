import { useState } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// search bar
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
//styles
/* Arkaplanlar
back 2: https://i.hizliresim.com/blk6siu.png
back 3: https://i.hizliresim.com/db2yim8.png
back 4: https://i.hizliresim.com/30rgrsj.png
back 6: https://i.hizliresim.com/syp78b9.png
back 7: https://i.hizliresim.com/9uy3umu.png
BACK 8: https://i.hizliresim.com/675wqbb.png
BACK 9: https://i.hizliresim.com/hfuzcgx.png
*/
//background images
let urlLessThan500pxBackground = "url('https://i.hizliresim.com/hv9bkrd.png')"
let urlDefaultBackground = "url('https://i.hizliresim.com/675wqbb.png')"

const styleBanner = {
  width: '100%',
  height: 225,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: '1.5s',
  position: '-webkit-sticky',
  position: 'sticky',
  top: 0,
}

const styleFullscreen = {
  width: '100%',
  height: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: '1.5s',
  position: '-webkit-sticky',
  position: 'sticky',
  top: 0,
}

const fullGrid = {
  height: '90vh',
}

const bannerGrid = {
  height: 225,
  transition: '1.5s',
}

function SearchArea() {
  const [isClicked, setIsClicked] = useState(false)
  const [searchText, setSearchText] = useState('')
  const { width } = useWindowDimensions()

  const clearSearchText = () => {
    let text = searchText
    text = text.trim()
    setSearchText(text)
    return text
  }

  const handleChange = (e) => {
    setSearchText(e.target.value)
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
      style={
        width <= 500
          ? { backgroundImage: urlLessThan500pxBackground }
          : { backgroundImage: urlDefaultBackground }
      }
      sx={isClicked ? styleBanner : styleFullscreen}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={isClicked ? bannerGrid : fullGrid}
      >
        {/* paper: component="form", elevation={0} | iconbutton: type="submit" */}
        <Paper
          style={width <= 500 ? { width: '80%' } : { width: 390 }}
          sx={{
            p: '2px 14px',
            display: 'flex',
            alignItems: 'center',
            border: '1px solid lightgray',
            borderRadius: 20,
          }}
          elevation={0}
        >
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
