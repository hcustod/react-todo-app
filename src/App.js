import './App.css';
import Example from './components/example.js';
import { useState } from 'react';
import TodoList from './components/todoList';
import TodoInput from './components/todoInput';


const App = () => {
  const [todos, setTodos] = useState("");
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todo.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };


  return (
    <div className="App">
      <h1> React Todo App </h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} />
      <button className="add-button" onClick={addTodo}>Add</button>
      <Example />

    </div>

  );

};

export default App;
