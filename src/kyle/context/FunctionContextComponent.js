import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext"
import themeStyleProvider from "./themeStyle"


export default function FunctionContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyle = themeStyleProvider(darkTheme)
    
    /*
    const themeStyle = {
        background: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem"
    }
    */

    return (
        <>
            <button onClick={toggleTheme}>Apply Theme</button>
            <div style={themeStyle}>Div Box</div>
        </>
    )
}