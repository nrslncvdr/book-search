import { Grid } from '@mui/material'
import { useTheme } from '../../context/ThemeContext'
import React from 'react'
import './style.css'

function LoadMoreBtn({ page, setPage }) {
  const { theme, setTheme } = useTheme()
  const handleClick = () => setPage(page + 1)
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ marginBottom: 5 }}
    >
      <button
        style={theme === 'dark' ? { color: '#353535' } : null}
        className="load-more-button"
        onClick={handleClick}
      >
        Load More
      </button>
    </Grid>
  )
}

export default LoadMoreBtn
