import { useTheme } from '../../context/ThemeContext'
import React from 'react'
import './style.css'

function ThemeToggleBtn() {
  const { theme, setTheme } = useTheme()
  const handleChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    console.log(theme)
  }
  return (
    <div class="toggle">
      <input
        type="checkbox"
        id="checkbox"
        class="checkbox"
        checked={theme === 'dark' ? true : false}
        onChange={handleChange}
      />
      <label for="checkbox" class="label">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <div class="ball"></div>
      </label>
    </div>
  )
}

export default ThemeToggleBtn
