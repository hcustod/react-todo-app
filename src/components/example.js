import './example.css';
import { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);
  
    return (
      <div className="example">
        <p>You clicked {count} times</p>
        <button className="example" onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }

export default Example; 
  