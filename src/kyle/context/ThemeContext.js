import React, { useContext, useState } from "react"

/*
  - const ThemeContext = React.createContext()
  - create custom hook returning return useContext(ThemeContext). 
    
  - create main export func: export function ThemeProvider({ children })  
        return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )

    - go to the function where shared value should be used and import hooks: 
        import { useTheme, useThemeUpdate } from "./ThemeContext"

    - ThemeProvider e FunctionContextComponent tags must be inserted into App.js
*/
const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}


export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }


    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}