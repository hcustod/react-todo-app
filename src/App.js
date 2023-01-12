import logo from './logo.svg';
import './App.css';
import Example from './components/example.js';
import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState("");
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <h1> React Todo App </h1>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>



        <div className="input-wrapper">
          <input 
          type="text" 
          name="todo" 
          value={todo}
          placeholder="Create a new todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }} 
        />
        

          <button className="add-button" onClick={addTodo}>Add</button>
        </div>


        {todos?.length > 0 ? (
          <ul className="todo-list">
            {todo.map((todo, index) => (
              <div className="todo">
                <li key={index}> {todo} </li>

                <button className="delete-button">Delete</button>
              </div>
            ))}
          </ul>
        ) : (
          <div className="emtpy">
            <p> No task found </p>
          </div>
        )}


        <div>
          <Example />
        </div>


      </header>
    </div>
  );
}

export default App;
