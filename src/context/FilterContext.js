import React, {createContext} from "react";
import useFilter from "../hooks/useFilter";

export const FilterContext = createContext();


const FilterProvider = ({children}) => {

    const { searchQuery, setSearchQuery} = useFilter();

    return (  
        <FilterContext.Provider value= {
            { searchQuery, setSearchQuery,
        }
        }>

            {children}

        </FilterContext.Provider>
    );
}
 
export default FilterProvider;