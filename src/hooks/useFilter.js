import { useState } from "react";

const useFilter = () => {

    const [ searchQuery, setSearchQuery ] = useState();

return {
        searchQuery,
        setSearchQuery,
    }
}

export default useFilter;  