import { useContext } from "react"
import { ThemeContext } from "../components/themeContext"

export function useTheme(){
    return useContext(ThemeContext)
}