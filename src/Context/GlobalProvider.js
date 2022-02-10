import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

function GlobalProvider({ children }) {
    const [animals, setAnimals] = useState([]);
    const contextValue = {
        animals,
        setAnimals,
    }

    return(
        <GlobalContext.Provider value={ contextValue }>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;