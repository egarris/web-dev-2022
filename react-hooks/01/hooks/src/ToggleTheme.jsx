import React from 'react';
import useDarkMode from './DarkMode.jsx';

const ToggleTheme = () => {
    const { theme, setTheme } = useDarkMode();
    return (
        <div className="component">
            <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? "Light" : "Dark"} Theme
            </button>
        </div>
    )
}

export default ToggleTheme
