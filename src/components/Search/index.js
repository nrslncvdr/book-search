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
  let halfscreenDefaultStyles = {
    box: {
      width: '100%',
      height: `${width <= 600 ? '150px' : '225px'}`,
      backgroundImage: `url(${
        width <= 600
          ? 'https://i.hizliresim.com/cnwfc2s.png'
          : 'https://i.hizliresim.com/675wqbb.png'
      })`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: '1.5s',
      position: '-webkit-sticky',
      position: 'sticky',
      top: 0,
    },
    grid: {
      height: `${width <= 600 ? '150px' : '225px'}`,
      transition: '1.5s',
    },
  }

  let fullscreenDefaultStyles = {
    box: {
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${
        width <= 600
          ? 'https://i.hizliresim.com/cnwfc2s.png'
          : 'https://i.hizliresim.com/675wqbb.png'
      })`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: '1.5s',
      position: '-webkit-sticky',
      position: 'sticky',
      top: 0,
    },
    grid: { height: '90vh' },
  }

  // searchText events start
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
  // searchText events end
  return (
    <Box
      sx={isClicked ? halfscreenDefaultStyles.box : fullscreenDefaultStyles.box}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={
          isClicked
            ? halfscreenDefaultStyles.grid
            : fullscreenDefaultStyles.grid
        }
      >
        {/* paper: component="form" | iconbutton: type="submit" */}
        <Paper
          sx={{
            width: `${width <= 600 ? '75%' : '400px'}`,
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
