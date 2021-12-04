import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Fade from '@mui/material/Fade'
import Zoom from '@mui/material/Zoom'
import './styles.css'
import imgRocket from '../images/rocket.png'

function Bock2TopBtn() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [checked, setChecked] = useState(false)
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
  useEffect(() => {
    scrollPosition > 300 ? setChecked(true) : setChecked(false)
  }, [scrollPosition])
  return (
    <>
      {scrollPosition > 300 && (
        <Fade in={checked}>
          <Tooltip
            TransitionComponent={Zoom}
            title="Back to Top"
            sx={{ backgroundColor: '#ff5443' }}
            placement="left"
          >
            <Box
              onClick={() => window.scrollTo(0, 0)}
              className="scroll-rocket"
              sx={{
                backgroundImage: `url(${imgRocket})`,
              }}
            />
          </Tooltip>
        </Fade>
      )}
    </>
  )
}

export default Bock2TopBtn
