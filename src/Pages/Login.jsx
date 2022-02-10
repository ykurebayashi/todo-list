import React, { useContext, useEffect } from "react";
import GlobalContext from "../Context/GlobalContext";

function Login() {
    const { animals, setAnimals } = useContext(GlobalContext);
    useEffect(() => {
        setAnimals(['abelha', 'cachorro','dragão']);
    }, []);

    return(
        <>
          <p>Olá, pagina de login</p>
          <p>{animals[2]}</p>
        </>
    )
}

export default Login;