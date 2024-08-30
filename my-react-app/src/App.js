import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

function Header({ title }) {
  return <h1>{title}</h1>;
}

function App() {
  return (
    <div>
      <Header title="My React App" />
      <Counter />
    </div>
  );
}

export default App;

//! Issue: The Counter component’s state does not update when the button is clicked.
//!Diagnosis: The setCount function was not being called correctly.
//?Solution: Fixed the function to properly update the state.
