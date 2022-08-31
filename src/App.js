import React from "react";
import "./App.css";

function App() {
  const [count, setCout] = React.useState(0);

  const incrementHandler = () => {
    setCout(count + 1);
  };

  const decrementHandler = () => {
    setCout(count - 1);
  };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}

export default App;
