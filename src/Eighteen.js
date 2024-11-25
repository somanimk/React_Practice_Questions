import React from 'react'
import { useTheme } from './ThemeContext';

const Eighteen = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Fixed parentheses and toggleTheme name
  return (
    <div>
      <label>
        <input type='checkbox' checked={isDarkMode} onChange={toggleTheme} />
        Dark Mode
      </label>
    </div>
  )
}

export default Eighteen;
