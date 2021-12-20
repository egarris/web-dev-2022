import React, { useState, useEffect } from 'react'

export default function useDarkMode() {
  //useState can take in a function and that function will be called when React looks for a default value for this useState hook so when the component mounts it will look to see if we have a theme set to dark, if not it will set a localStorage item "theme" to light
  const [theme, setTheme] = useState(() => localStorage.getItem("theme"));

  useEffect(() => {
    console.log('useEffect in DarkMode!');
    
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [theme])

  return { theme, setTheme }
}
