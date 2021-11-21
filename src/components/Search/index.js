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
mobile clicked: https://i.hizliresim.com/qd9eye4.png
mobile 2: https://i.hizliresim.com/cnwfc2s.png
*/

function SearchArea() {
  const [isClicked, setIsClicked] = useState(false)
  const [searchText, setSearchText] = useState('')
  const { width } = useWindowDimensions()
  // styles for box and grid
  const halfscreenStyles = {
    box: {
      height: `${width <= 600 ? '150px' : '175px'}`,
      backgroundImage: `url(${
        width <= 600
          ? 'https://i.hizliresim.com/cnwfc2s.png'
          : 'https://i.hizliresim.com/na0hnud.png'
      })`,
    },
    grid: {
      height: `${width <= 600 ? '150px' : '175px'}`,
      transition: '1.5s',
    },
  }

  const fullscreenStyles = {
    box: {
      height: '100vh',
      backgroundImage: `url(${
        width <= 600
          ? 'https://i.hizliresim.com/cnwfc2s.png'
          : 'https://i.hizliresim.com/na0hnud.png'
      })`,
    },
    grid: { height: '95vh' },
  }

  const fixedStylesForBox = {
    zIndex: 99,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: '1.5s',
    position: '-webkit-sticky',
    position: 'sticky',
    top: 0,
    boxShadow:
      'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
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
      style={fixedStylesForBox}
      sx={isClicked ? halfscreenStyles.box : fullscreenStyles.box}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={isClicked ? halfscreenStyles.grid : fullscreenStyles.grid}
      >
        <Paper
          sx={{
            width: `${width <= 600 ? '75%' : '390px'}`,
            p: '0 14px',
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
