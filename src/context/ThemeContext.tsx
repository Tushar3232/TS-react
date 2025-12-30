import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme= "Light" | "dark";

interface ThemeContextType{
    theme: Theme;
    toggleTheme: ()=> void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{children: ReactNode}> =({children}) => {
  
    const [theme, setTheme]= useState<Theme>("Light")

    useEffect(()=>{
        if(theme=== "dark"){
            document.documentElement.classList.add("dark")
        }
        else{
            document.documentElement.classList.remove("dark")

        }
    },[theme])

const toggleTheme=()=>{
    setTheme((prevTheme)=> (prevTheme=== "Light" ? "dark" :"Light"))
}
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


// custom hook

export const useTheme = (): ThemeContextType=>{

    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("useTheme must be used within a theme provider")

    }
    return context
}