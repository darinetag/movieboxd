import { useState } from "react";
import "./App.css";
// practice counter (useState)

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCounter((prevcount) => prevcount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevcount) => prevcount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
