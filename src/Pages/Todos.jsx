import React, { useContext } from "react";
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

    return(
        <div className="todos-page">
          <header className="todos-header">
            <p>{`Olá, ${userName.charAt(0).toUpperCase() + userName.slice(1)}`}</p>
            <p>{`Email: ${email}`}</p>
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
            <ol>
                {todos.map((todo, index) => {
                    return <div key={ `${index}-todo` }><input type="checkbox" /> <li className="todo-line">{todo}</li></div>
                })}

            </ol>
          </div>

        </div>
    )
}

export default Todos;

// addTodos(todos => [...todos, newElement]);