import { Grid } from '@mui/material'
import './style.css'

function LoadMoreBtn({ page, setPage }) {
  const handleClick = () => setPage(page + 1)
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ paddingBottom: 5 }}
    >
      <button className="load-more-button" onClick={handleClick}>
        Load More
      </button>
    </Grid>
  )
}

export default LoadMoreBtn
