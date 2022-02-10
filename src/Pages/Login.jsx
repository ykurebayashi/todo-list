import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../Context/GlobalContext";

function Login() {
    const { email, setEmail, userName, setUserName } = useContext(GlobalContext);

    const handleEmail = ({ target }) => {
        setEmail(target.value)
    }
    const handleUser = ({ target }) => {
        setUserName(target.value)
    }



    return (
        <div className="main-login">
          <div className="login-section">
            <h1>Login</h1>
            <div className="login-infos">
              <section>
                <p>Email:</p>
                <input type="text" placeholder="Type your email" value={email} onChange={ (e) => handleEmail(e)} />
              </section>
              <section>
                <p>Username:</p>
                <input type="text" placeholder="Type your username" value={userName} onChange={ (e) => handleUser(e)} />
              </section>
            </div>
            <Link to="/todos" onClick={ () => console.log('vasco') } >
              <button>
                  Submit
              </button>
            </Link>
          </div>
        </div>
    )
}

export default Login;