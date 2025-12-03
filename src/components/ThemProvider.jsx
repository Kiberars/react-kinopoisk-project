import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";


export function ThemProvider({children}){
    const [theme,setTheme] = useState(()=> localStorage.getItem('them')|| 'dark');

    useEffect(() => {
        document.documentElement.classList.toggle('dark',theme === 'dark')
        localStorage.setItem('theme',theme)
    },[theme])

    const toggleTheme = () =>setTheme(prev =>
        (prev === 'dark'?'light':'dark'))

    return (
        <ThemeContext.Provider
        value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
