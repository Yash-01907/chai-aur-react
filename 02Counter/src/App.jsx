import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter,setCounter] = useState(10)
  const addValue = () => {
    if(counter>=20) return
     setCounter(counter+1)
  };
  const removeValue=function(){
    if(!counter) return
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value = {counter}</h2>
      <button onClick={addValue}>Add Counter</button>
      <br />
      <button onClick={removeValue}>Remove counter</button>
    </>
  );
}

export default App;
