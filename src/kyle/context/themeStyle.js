export default function themeStyleProvider(darkTheme) {
    return {
        background: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem"
    }
}