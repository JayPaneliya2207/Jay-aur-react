import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(5);

  const addvalue = () => {
    console.log("Add Clicked", Math.random());
    setcounter(counter + 1);
  };

  const removevalue = () => {
    console.log("Remove Clicked", Math.random());
    setcounter(counter - 1);
  };

  return (
    <>
      <h1>Jay aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={removevalue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
