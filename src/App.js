import logo from './logo.svg';
import './App.css';
import Example from './components/example.js';
import { useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState("");


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
        
          <button className="add-button">Add</button>
        </div>



        <div>
          <Example />
        </div>



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
