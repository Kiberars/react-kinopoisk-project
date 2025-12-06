import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";


export function ThemProvider({children}){
    const [theme,setTheme] = useState(()=> localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.classList.toggle('dark',theme === 'dark')
        localStorage.setItem('theme',theme)
        console.log('effect ', theme)
    },[theme])

    const toggleTheme = () =>setTheme(prev =>
        (prev === 'dark'?'light':'dark'))
        localStorage.setItem('theme',theme)
        console.log('toggleTheme ', theme)

    return (
        <ThemeContext.Provider
        value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
