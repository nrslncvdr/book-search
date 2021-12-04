import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Zoom from '@mui/material/Zoom'
import './styles.css'
import imgRocket from '../images/rocket.png'

function Bock2TopBtn() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      {scrollPosition > 300 && (
        <Tooltip
          TransitionComponent={Zoom}
          title="Back to Top"
          sx={{ backgroundColor: '#ff5443' }}
        >
          <Box
            onClick={() => window.scrollTo(0, 0)}
            className="scroll-rocket"
            sx={{
              transition: '1s',
              width: 64,
              height: 64,
              backgroundImage: `url(${imgRocket})`,
              '&:hover': {
                backgroundImage: `url(${imgRocket})`,
                opacity: [0.9, 0.8, 0.7],
              },
              position: 'fixed',
              bottom: '25px',
              right: '25px',
              cursor: 'pointer',
            }}
          />
        </Tooltip>
      )}
    </>
  )
}

export default Bock2TopBtn
