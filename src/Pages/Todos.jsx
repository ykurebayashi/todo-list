import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import GlobalContext from "../Context/GlobalContext";

function Todos() {
    const {
        email,
        userName,
        todos,
        addTodo,
        tempTodo,
        setTempTodo,
    } = useContext(GlobalContext);

    const setNewTempTodo = ({ target }) => {
        setTempTodo(target.value);
    }

    function addTheTodo() {
        addTodo(todos => [...todos, tempTodo ]);
        setTempTodo('');
    }

    function logOut() {
      setTempTodo('');
      addTodo([]);
    }

    useEffect(() => { // pegando os do local storage e adicionando ao todos, que é a lista de todos os afazeres
      const theLocalStorage = JSON.parse(localStorage.getItem(`${userName}`));
      if (theLocalStorage === null) {
        alert('Volte para tela de Login ou suas atividades não serão salvas!')
      } else {
        theLocalStorage.todos.map((todo) => {
          addTodo(todos => [...todos, todo]);
        })
      }
    }, []);

    useEffect(() => {
      const localStorageTodos = JSON.parse(localStorage.getItem(`${userName}`));
      localStorageTodos.todos = todos
      localStorage.setItem(`${userName}`, JSON.stringify(localStorageTodos));
      setTempTodo('');
    }, [todos]);

    return(
        <div className="todos-page">
          <header className="todos-header">
            <p>{`Olá, ${userName.charAt(0).toUpperCase() + userName.slice(1)}`}</p>
            <p>{`Email: ${email}`}</p>
            <Link to="/" >
              Logout
            </Link>
          </header>

          <div className="todo-form">
            <input type="text" placeholder="Atividade" value={tempTodo} onChange={ (e) => setNewTempTodo(e) } />
            <button
              onClick={ addTheTodo }
            >
              Add to list!
            </button>
          </div>
          <div className="todos">
            <ul>
                {todos.map((todo, index) => {
                    return <div key={ `${index}-todo` } className="todos-div" ><input type="checkbox" /> <li className="todo-line">{todo}</li></div>
                })}

            </ul>
          </div>

        </div>
    )
}

export default Todos;

// addTodos(todos => [...todos, newElement]);