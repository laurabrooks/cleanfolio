import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const themeEnums = Object.freeze({
    light: 'light',
    dark: 'dark',
    themeName: 'themeName',
  });
  
  const [themeName, setThemeName] = useState(themeEnums.light)

  useEffect(() => {
    if (!localStorage.getItem(themeEnums.themeName)) {
      const darkMediaQuery = window.matchMedia(`(prefers-color-scheme: ${themeEnums.dark})`);
      setThemeName(darkMediaQuery.matches ? themeEnums.dark : themeEnums.light)
      darkMediaQuery.addEventListener('change', (e) => {
        setThemeName(e.matches ? themeEnums.dark : themeEnums.light)
      });
    } else {
      // if a preference is in localStorage already, use that
      setThemeName(localStorage.getItem(themeEnums.themeName) === themeEnums.dark ? themeEnums.dark : themeEnums.light);
    }
  }, [])

  const toggleTheme = () => {
    const name = themeName === themeEnums.dark ? themeEnums.light : themeEnums.dark
    localStorage.setItem(themeEnums.themeName, name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
