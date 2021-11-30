import React, { createContext, useState } from "react";
import FilterProvider from "../context/FilterContext";

export const ThemeContext = createContext();

const Layout = ({startingTheme, children}) => {

    const [theme, setTheme] = useState(startingTheme);

    return ( 

    <ThemeContext.Provider value={{setTheme, theme}}>

        <div className = { 
            theme === 'light' ? 'container-fluid light' : 'container-fluid dark'
            }
        >
        <FilterProvider>
          {children}
        </FilterProvider>
        </div>

    </ThemeContext.Provider>

    );
}
 
export default Layout;