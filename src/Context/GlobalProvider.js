import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

function GlobalProvider({ children }) {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [todos, addTodo] = useState([]);
    const [tempTodo, setTempTodo] = useState('');

    const contextValue = {
        email,
        setEmail,
        userName,
        setUserName,
        todos,
        addTodo,
        tempTodo,
        setTempTodo,
    }

    return(
        <GlobalContext.Provider value={ contextValue }>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;